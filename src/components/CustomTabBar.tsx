import React from 'react';
import { View, Pressable, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme();
    const { bottom } = useSafeAreaInsets(); // ეკრანის უსაფრთხო არეების დასადგენად

    const TAB_COUNT = state.routes.length;
    // გამოვთვალოთ კონტეინერის სიგანე ეკრანის გვერდებიდან დაშორების გათვალისწინებით
    const TAB_BAR_WIDTH = width - 32; // 16px მარცხნიდან + 16px მარჯვნიდან
    const TAB_WIDTH = TAB_BAR_WIDTH / TAB_COUNT;

    // ანიმაციის ლოგიკა, რომელიც ამოძრავებს "აბის" ფორმას
    const translateX = useSharedValue(state.index * TAB_WIDTH);
    React.useEffect(() => {
        translateX.value = withTiming(state.index * TAB_WIDTH, { duration: 250 });
    }, [state.index, TAB_WIDTH]);

    const animatedPillStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const getIconName = (routeName: string) => {
        // აქ შეგვიძლია მხოლოდ ერთი, focused ხატულა დავტოვოთ, რადგან ფონი იცვლება და არა ხატულა
        switch (routeName) {
            case 'Categories': return 'view-grid';
            case 'Quiz': return 'gamepad-variant';
            case 'Leaderboard': return 'trophy';
            case 'Translate': return 'translate'; // შევცვალე უკეთესი ხატულით
            case 'Favorites': return 'star';
            default: return 'help-circle';
        }
    };

    return (
        <View style={[
            styles.tabBarContainer,
            { 
                width: TAB_BAR_WIDTH,
                bottom: bottom + 10, // უსაფრთხო არეს + 10px დაშორება
                backgroundColor: colors.surfaceVariant 
            }
        ]}>
            {/* ანიმაციური "აბი", რომელიც ხატულების უკან მოძრაობს */}
            <Animated.View style={[
                styles.animatedPill,
                { width: TAB_WIDTH, backgroundColor: colors.primaryContainer },
                animatedPillStyle
            ]} />
            
            {/* ხატულების კონტეინერი */}
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <Pressable key={route.key} onPress={onPress} style={styles.button}>
                        <Icon
                            name={getIconName(route.name)}
                            size={26}
                            color={isFocused ? colors.onPrimaryContainer : colors.onSurfaceVariant}
                        />
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        height: 64,
        alignSelf: 'center',
        borderRadius: 32, // სრული მომრგვალებისთვის
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8, // შიდა დაშორება
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    animatedPill: {
        position: 'absolute',
        height: '80%',
        borderRadius: 24,
        top: '10%', // ვერტიკალური ცენტრირება
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomTabBar;