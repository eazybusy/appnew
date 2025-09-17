// src/context/DatabaseContext.tsx
import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import SQLite, { ResultSet } from 'react-native-sqlite-storage';

interface Item {
  id: number;
  name: string;
}

interface DatabaseContextType {
  items: Item[];
  addItem: (name: string) => void;
  deleteItem: (id: number) => void;
  refresh: () => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

const db = SQLite.openDatabase(
  { name: 'app.db', location: 'default' },
  () => console.log('Database opened'),
  (err) => console.log('Database error', err)
);

export const DatabaseProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = () => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);');
      tx.executeSql('SELECT * FROM items;', [], (_, results: ResultSet) => {
        setItems(results.rows.raw() as Item[]);
      });
    });
  };

  const addItem = (name: string) => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (name) VALUES (?);', [name], fetchItems);
    });
  };

  const deleteItem = (id: number) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM items WHERE id=?;', [id], [], fetchItems);
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <DatabaseContext.Provider value={{ items, addItem, deleteItem, refresh: fetchItems }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error('useDatabase must be used within a DatabaseProvider');
  return context;
};
