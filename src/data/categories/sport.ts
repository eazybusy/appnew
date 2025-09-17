import { Category } from '../types';

export const SPORT_CATEGORY: Category = {
    id: 'sport',
    name: { ka: '🏆 სპორტი', en: '🏆 Sport' },
    icon: '🏆',
    subCategories: [
        {
            id: 'sport-types',
            name: { ka: '⚽ I. სპორტის სახეობები', en: '⚽ I. Types of Sport' },
            sections: [
                {
                    id: 'team-sports',
                    name: { ka: '👨‍👩‍👧‍👦 გუნდური სპორტი', en: '👨‍👩‍👧‍👦 Team Sports' },
                    subSections: [
                        {
                            id: 'football',
                            name: { ka: 'ფეხბურთი', en: 'Football (Soccer)' },
                            keywords: [
                                { id: 'goal-football', name: { ka: 'გოლი', en: 'Goal' } },
                                { id: 'offside', name: { ka: 'თამაშგარე (ოფსაიდი)', en: 'Offside' } },
                                { id: 'penalty-kick', name: { ka: 'თერთმეტმეტრიანი (პენალტი)', en: 'Penalty kick' } },
                                { id: 'corner-kick', name: { ka: 'კუთხური', en: 'Corner kick' } },
                                { id: 'free-kick-foul', name: { ka: 'ჯარიმა', en: 'Free kick / Foul' } },
                                { id: 'throw-in', name: { ka: 'აუტი', en: 'Throw-in' } },
                                { id: 'set-piece', name: { ka: 'სტანდარტული მდგომარეობა', en: 'Set piece' } },
                                { id: 'referee', name: { ka: 'მსაჯი (არბიტრი)', en: 'Referee (Arbiter)' } },
                                { id: 'assistant-referee', name: { ka: 'გვერდითი მსაჯი', en: 'Assistant referee (Linesman)' } },
                                { id: 'var', name: { ka: 'VAR (ვიდეო ასისტენტ რეფერი)', en: 'VAR (Video Assistant Referee)' } },
                                { id: 'stadium', name: { ka: 'სტადიონი', en: 'Stadium' } },
                                { id: 'field-pitch', name: { ka: 'მოედანი', en: 'Field / Pitch' } },
                                { id: 'surface', name: { ka: 'საფარი (ბუნებრივი/ხელოვნური)', en: 'Surface (natural/artificial)' } },
                                { id: 'goal-posts', name: { ka: 'კარი', en: 'Goal' } },
                                { id: 'goalpost', name: { ka: 'ძელი', en: 'Goalpost' } },
                                { id: 'crossbar', name: { ka: 'ხარიხა', en: 'Crossbar' } },
                                { id: 'tactics-football', name: { ka: 'ტაქტიკა', en: 'Tactics' } },
                                { id: 'formation-scheme', name: { ka: 'განლაგება (სქემა)', en: 'Formation (Scheme)' } },
                                { id: 'attack', name: { ka: 'შეტევა', en: 'Attack' } },
                                { id: 'defense-football', name: { ka: 'დაცვა', en: 'Defense' } },
                                { id: 'pressing', name: { ka: 'პრესინგი', en: 'Pressing' } },
                                { id: 'counter-attack', name: { ka: 'კონტრშეტევა', en: 'Counter-attack' } },
                                { id: 'dribbling-football', name: { ka: 'დრიბლინგი', en: 'Dribbling' } },
                                { id: 'pass-football', name: { ka: 'პასი (გადაცემა)', en: 'Pass' } },
                                { id: 'feint-trick', name: { ka: 'ფინტი', en: 'Feint / Trick' } },
                                { id: 'tackle-football', name: { ka: 'ვარდნა', en: 'Tackle' } },
                                { id: 'header', name: { ka: 'თავური დარტყმა', en: 'Header' } },
                                { id: 'goalkeeper', name: { ka: 'გოლკიპერი (მეკარე)', en: 'Goalkeeper' } },
                                { id: 'defender-football', name: { ka: 'მცველი (ცენტრალური, ფლანგის, ლიბერო)', en: 'Defender (center-back, full-back, sweeper)' } },
                                { id: 'midfielder', name: { ka: 'ნახევარმცველი (საყრდენი, შემტევი, ფლეიმეიკერი)', en: 'Midfielder (defensive, attacking, playmaker)' } },
                                { id: 'forward-football', name: { ka: 'თავდამსხმელი (ფორვარდი, ვინგერი, სტრაიკერი)', en: 'Forward (winger, striker)' } },
                                { id: 'captain-football', name: { ka: 'კაპიტანი', en: 'Captain' } },
                                { id: 'substitution', name: { ka: 'შეცვლა', en: 'Substitution' } },
                                { id: 'bench', name: { ka: 'სათადარიგო სკამი', en: 'Bench' } },
                                { id: 'extra-time', name: { ka: 'დამატებითი დრო', en: 'Extra time' } },
                                { id: 'yellow-card', name: { ka: 'ყვითელი ბარათი', en: 'Yellow card' } },
                                { id: 'red-card', name: { ka: 'წითელი ბარათი', en: 'Red card' } },
                                { id: 'own-goal', name: { ka: 'ავტოგოლი', en: 'Own goal' } },
                                { id: 'hat-trick', name: { ka: 'ჰეთ-თრიკი', en: 'Hat-trick' } },
                                { id: 'brace', name: { ka: 'დუბლი', en: 'Brace' } },
                                { id: 'supporter-fan', name: { ka: 'გულშემატკივარი (ფანი, ქომაგი)', en: 'Supporter (Fan)' } },
                                { id: 'ultras', name: { ka: 'ულტრასი', en: 'Ultras' } },
                                { id: 'league-football', name: { ka: 'ლიგა', en: 'League' } },
                                { id: 'championship-football', name: { ka: 'ჩემპიონატი', en: 'Championship' } },
                                { id: 'world-cup', name: { ka: 'მსოფლიო ჩემპიონატი', en: 'World Cup' } },
                                { id: 'european-championship', name: { ka: 'ევროპის ჩემპიონატი', en: 'European Championship' } },
                                { id: 'champions-league', name: { ka: 'ჩემპიონთა ლიგა', en: 'Champions League' } },
                                { id: 'europa-league', name: { ka: 'ევროპა ლიგა', en: 'Europa League' } },
                                { id: 'club-football', name: { ka: 'კლუბი', en: 'Club' } },
                                { id: 'national-team', name: { ka: 'ნაკრები', en: 'National team' } },
                                { id: 'transfer', name: { ka: 'ტრანსფერი', en: 'Transfer' } },
                                { id: 'foreign-player', name: { ka: 'ლეგიონერი', en: 'Foreign player' } },
                                { id: 'scout', name: { ka: 'სკაუტი', en: 'Scout' } },
                            ]
                        },
                        {
                            id: 'basketball',
                            name: { ka: 'კალათბურთი', en: 'Basketball' },
                            keywords: [
                                { id: 'basket-hoop', name: { ka: 'კალათი', en: 'Basket / Hoop' } },
                                { id: 'backboard', name: { ka: 'ფარი', en: 'Backboard' } },
                                { id: 'three-second-lane', name: { ka: 'სამწამიანი ზონა', en: 'Three-second lane' } },
                                { id: 'three-point-line', name: { ka: 'სამქულიანი ხაზი', en: 'Three-point line' } },
                                { id: 'dribbling-basketball', name: { ka: 'დრიბლინგი', en: 'Dribbling' } },
                                { id: 'pass-assist', name: { ka: 'პასი / გადაცემა', en: 'Pass / Assist' } },
                                { id: 'steal', name: { ka: 'ჩაჭრა', en: 'Steal' } },
                                { id: 'block-basketball', name: { ka: 'ბლოკი (დაფარება)', en: 'Block' } },
                                { id: 'rebound', name: { ka: 'მოხსნა', en: 'Rebound' } },
                                { id: 'slam-dunk', name: { ka: 'სლემ-დანკი', en: 'Slam dunk' } },
                                { id: 'layup', name: { ka: 'ლეიაპი', en: 'Layup' } },
                                { id: 'foul-basketball', name: { ka: 'ჯარიმა (პერსონალური, ტექნიკური, არასპორტული)', en: 'Foul (personal, technical, unsportsmanlike)' } },
                                { id: 'free-throw', name: { ka: 'საჯარიმო სროლა', en: 'Free throw' } },
                                { id: 'traveling', name: { ka: 'ნაბიჯები', en: 'Traveling' } },
                                { id: 'double-dribble', name: { ka: 'ორმაგი დრიბლინგი', en: 'Double dribble' } },
                                { id: 'quarter', name: { ka: 'მეოთხედი', en: 'Quarter' } },
                                { id: 'overtime-basketball', name: { ka: 'ოვერტაიმი', en: 'Overtime' } },
                                { id: 'timeout', name: { ka: 'ტაიმ-აუტი', en: 'Timeout' } },
                                { id: 'zone-defense', name: { ka: 'ზონური დაცვა', en: 'Zone defense' } },
                                { id: 'man-to-man-defense', name: { ka: 'პერსონალური დაცვა', en: 'Man-to-man defense' } },
                                { id: 'fast-break', name: { ka: 'სწრაფი შეტევა', en: 'Fast break' } },
                                { id: 'pick-and-roll', name: { ka: 'პიკ-ენ-როლი', en: 'Pick and roll' } },
                                { id: 'point-guard', name: { ka: 'გამთამაშებელი', en: 'Point guard' } },
                                { id: 'shooting-guard', name: { ka: 'მსროლელი', en: 'Shooting guard' } },
                                { id: 'center-basketball', name: { ka: 'ცენტრი', en: 'Center' } },
                                { id: 'forward-basketball', name: { ka: 'ფორვარდი (მძიმე/მსუბუქი)', en: 'Forward (power/small)' } },
                                { id: 'nba', name: { ka: 'NBA', en: 'NBA' } },
                                { id: 'euroleague', name: { ka: 'ევროლიგა', en: 'EuroLeague' } },
                            ]
                        },
                        {
                            id: 'rugby',
                            name: { ka: 'რაგბი', en: 'Rugby' },
                            keywords: [
                                { id: 'try-rugby', name: { ka: 'ლელო', en: 'Try' } },
                                { id: 'conversion', name: { ka: 'გარდასახვა', en: 'Conversion' } },
                                { id: 'drop-goal', name: { ka: 'არეკნი', en: 'Drop goal' } },
                                { id: 'penalty-kick-rugby', name: { ka: 'ჯარიმა', en: 'Penalty kick' } },
                                { id: 'scrum', name: { ka: 'შერკინება', en: 'Scrum' } },
                                { id: 'line-out', name: { ka: 'დერეფანი (კორიდორი)', en: 'Line-out' } },
                                { id: 'maul', name: { ka: 'მოლი', en: 'Maul' } },
                                { id: 'ruck', name: { ka: 'რაქი', en: 'Ruck' } },
                                { id: 'tackle-rugby', name: { ka: 'ბოჭვა', en: 'Tackle' } },
                                { id: 'oval-ball', name: { ka: 'ოვალი (ბურთი)', en: 'Oval ball' } },
                                { id: 'rugby-player', name: { ka: 'მორაგბე', en: 'Rugby player' } },
                                { id: 'captain-rugby', name: { ka: 'კაპიტანი', en: 'Captain' } },
                                { id: 'half-back', name: { ka: 'ჰავბექი', en: 'Half-back' } },
                                { id: 'full-back', name: { ka: 'ფულბექი', en: 'Full-back' } },
                                { id: 'backline', name: { ka: 'ხაზი', en: 'Backline' } },
                                { id: 'world-cup-rugby', name: { ka: 'მსოფლიო თასი', en: 'World Cup' } },
                                { id: 'six-nations', name: { ka: 'ექვსი ერის ჩემპიონატი', en: 'Six Nations Championship' } },
                                { id: 'the-rugby-championship', name: { ka: 'რაგბი ჩემპიონშიპი', en: 'The Rugby Championship' } },
                                { id: 'rugby-sevens', name: { ka: 'შვიდკაცა რაგბი', en: 'Rugby sevens' } },
                            ]
                        },
                        {
                            id: 'volleyball',
                            name: { ka: 'ფრენბურთი', en: 'Volleyball' },
                            keywords: [
                                { id: 'ball-volleyball', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'net-volleyball', name: { ka: 'ბადე', en: 'Net' } },
                                { id: 'serve-volleyball', name: { ka: 'მოწოდება', en: 'Serve' } },
                                { id: 'ace-volleyball', name: { ka: 'ეისი', en: 'Ace' } },
                                { id: 'reception-volleyball', name: { ka: 'მიღება', en: 'Reception' } },
                                { id: 'set-volleyball', name: { ka: 'პასი', en: 'Set' } },
                                { id: 'block-volleyball', name: { ka: 'ბლოკი', en: 'Block' } },
                                { id: 'attack-spike', name: { ka: 'შეტევა', en: 'Attack / Spike' } },
                                { id: 'dig-volleyball', name: { ka: 'დაცვა', en: 'Dig' } },
                                { id: 'set-game-volleyball', name: { ka: 'სეტი', en: 'Set' } },
                                { id: 'match-volleyball', name: { ka: 'პარტია', en: 'Match' } },
                                { id: 'libero', name: { ka: 'ლიბერო', en: 'Libero' } },
                                { id: 'opposite-hitter', name: { ka: 'დიაგონალური', en: 'Opposite hitter' } },
                                { id: 'blocker', name: { ka: 'მბლოკავი', en: 'Blocker' } },
                                { id: 'setter', name: { ka: 'პასის ამწევი (სეტერი)', en: 'Setter' } },
                                { id: 'referee-volleyball', name: { ka: 'მსაჯი', en: 'Referee' } },
                                { id: 'court-volleyball', name: { ka: 'მოედანი', en: 'Court' } },
                            ]
                        },
                        {
                            id: 'handball',
                            name: { ka: 'ხელბურთი', en: 'Handball' },
                            keywords: [
                                { id: 'goal-handball', name: { ka: 'კარი', en: 'Goal' } },
                                { id: 'ball-handball', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'dribbling-handball', name: { ka: 'დრიბლინგი', en: 'Dribbling' } },
                                { id: 'pass-handball', name: { ka: 'პასი', en: 'Pass' } },
                                { id: 'shot-handball', name: { ka: 'ტყორცნა', en: 'Shot' } },
                                { id: '7-meter-throw', name: { ka: 'შვიდმეტრიანი', en: '7-meter throw' } },
                                { id: 'fast-break-handball', name: { ka: 'სწრაფი გარღვევა', en: 'Fast break' } },
                                { id: 'zone-defense-handball', name: { ka: 'ზონური დაცვა', en: 'Zone defense' } },
                                { id: 'goalkeeper-handball', name: { ka: 'მეკარე', en: 'Goalkeeper' } },
                                { id: 'corner-throw', name: { ka: 'კუთხური', en: 'Corner throw' } },
                                { id: 'suspension-2-min', name: { ka: 'გაძევება (2 წუთი)', en: 'Suspension (2 minutes)' } },
                            ]
                        },
                        {
                            id: 'baseball',
                            name: { ka: 'ბეისბოლი', en: 'Baseball' },
                            keywords: [
                                { id: 'base', name: { ka: 'ბაზა', en: 'Base' } },
                                { id: 'bat', name: { ka: 'ბიტი', en: 'Bat' } },
                                { id: 'ball-baseball', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'pitcher', name: { ka: 'პიტჩერი', en: 'Pitcher' } },
                                { id: 'catcher', name: { ka: 'ქეთჩერი', en: 'Catcher' } },
                                { id: 'home-run', name: { ka: 'ჰოუმ-რანი', en: 'Home run' } },
                                { id: 'inning', name: { ka: 'ინინგი', en: 'Inning' } },
                                { id: 'strike', name: { ka: 'სტრაიკი', en: 'Strike' } },
                                { id: 'out', name: { ka: 'აუტი', en: 'Out' } },
                                { id: 'mlb', name: { ka: 'MLB (მთავარი ლიგის ბეისბოლი)', en: 'MLB (Major League Baseball)' } },
                            ]
                        },
                        {
                            id: 'ice-hockey',
                            name: { ka: 'ჰოკეი (ყინულის)', en: 'Ice Hockey' },
                            keywords: [
                                { id: 'puck', name: { ka: 'შაიბა', en: 'Puck' } },
                                { id: 'ice-rink', name: { ka: 'ყინულის მოედანი', en: 'Ice rink' } },
                                { id: 'stick-hockey', name: { ka: 'ყვანჭი', en: 'Stick' } },
                                { id: 'goal-hockey', name: { ka: 'კარი', en: 'Goal' } },
                                { id: 'goaltender', name: { ka: 'მეკარე', en: 'Goaltender' } },
                                { id: 'period-hockey', name: { ka: 'პერიოდი', en: 'Period' } },
                                { id: 'shootout', name: { ka: 'ბულიტი', en: 'Shootout' } },
                                { id: 'body-check', name: { ka: 'ძალისმიერი ილეთი', en: 'Body check' } },
                                { id: 'penalty-kill-power-play', name: { ka: 'უმცირესობა/უმრავლესობა', en: 'Penalty kill/Power play' } },
                                { id: 'nhl', name: { ka: 'NHL (ნაციონალური ჰოკეის ლიგა)', en: 'NHL (National Hockey League)' } },
                            ]
                        },
                        {
                            id: 'american-football',
                            name: { ka: 'ამერიკული ფეხბურთი', en: 'American Football' },
                            keywords: [
                                { id: 'touchdown', name: { ka: 'თაჩდაუნი', en: 'Touchdown' } },
                                { id: 'quarterback', name: { ka: 'კვოტერბეკი', en: 'Quarterback' } },
                                { id: 'running-back', name: { ka: 'რანინგბექი', en: 'Running back' } },
                                { id: 'wide-receiver', name: { ka: 'რესივერი', en: 'Wide receiver' } },
                                { id: 'linebacker', name: { ka: 'ლაინბეკერი', en: 'Linebacker' } },
                                { id: 'safety', name: { ka: 'სეიფტი', en: 'Safety' } },
                                { id: 'field-goal', name: { ka: 'ფილდ-გოლი', en: 'Field goal' } },
                                { id: 'yard', name: { ka: 'იარდი', en: 'Yard' } },
                                { id: 'gridiron', name: { ka: 'გრიდირონი (მოედანი)', en: 'Gridiron' } },
                                { id: 'nfl', name: { ka: 'NFL', en: 'NFL' } },
                                { id: 'super-bowl', name: { ka: 'Super Bowl', en: 'Super Bowl' } },
                            ]
                        },
                        {
                            id: 'water-polo',
                            name: { ka: 'წყალბურთი', en: 'Water Polo' },
                            keywords: [
                                { id: 'pool-water-polo', name: { ka: 'აუზი', en: 'Pool' } },
                                { id: 'goal-water-polo', name: { ka: 'კარი', en: 'Goal' } },
                                { id: 'ball-water-polo', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'cap-water-polo', name: { ka: 'ქუდი', en: 'Cap' } },
                                { id: 'pass-water-polo', name: { ka: 'პასი', en: 'Pass' } },
                                { id: 'shot-water-polo', name: { ka: 'დარტყმა', en: 'Shot' } },
                                { id: 'ejection-water-polo', name: { ka: 'გაძევება', en: 'Ejection' } },
                                { id: 'goalkeeper-water-polo', name: { ka: 'მეკარე', en: 'Goalkeeper' } },
                                { id: 'corner-throw-water-polo', name: { ka: 'კუთხური', en: 'Corner throw' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'individual-sports',
                    name: { ka: '🧍 ინდივიდუალური სპორტი', en: '🧍 Individual Sports' },
                    subSections: [
                        {
                            id: 'tennis',
                            name: { ka: 'ჩოგბურთი', en: 'Tennis' },
                            keywords: [
                                { id: 'racquet', name: { ka: 'ჩოგანი', en: 'Racquet' } },
                                { id: 'ball-tennis', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'net-tennis', name: { ka: 'ბადე', en: 'Net' } },
                                { id: 'court-tennis', name: { ka: 'კორტი (გრუნტის, ბალახის, ჰარდი)', en: 'Court (clay, grass, hard)' } },
                                { id: 'serve-tennis', name: { ka: 'მოწოდება', en: 'Serve' } },
                                { id: 'ace-tennis', name: { ka: 'ეისი', en: 'Ace' } },
                                { id: 'double-fault', name: { ka: 'ორმაგი შეცდომა', en: 'Double fault' } },
                                { id: 'forehand', name: { ka: 'ფორჰენდი', en: 'Forehand' } },
                                { id: 'backhand', name: { ka: 'ბექჰენდი', en: 'Backhand' } },
                                { id: 'smash', name: { ka: 'სმეში', en: 'Smash' } },
                                { id: 'slice', name: { ka: 'სლაისი', en: 'Slice' } },
                                { id: 'drop-shot', name: { ka: 'დროპ-შოტი', en: 'Drop shot' } },
                                { id: 'return-tennis', name: { ka: 'ჩაწოდება', en: 'Return' } },
                                { id: 'game-tennis', name: { ka: 'გეიმი', en: 'Game' } },
                                { id: 'set-tennis', name: { ka: 'სეტი', en: 'Set' } },
                                { id: 'match-tennis', name: { ka: 'მატჩი', en: 'Match' } },
                                { id: 'tie-break', name: { ka: 'ტაი-ბრეიკი', en: 'Tie-break' } },
                                { id: 'break-point', name: { ka: 'ბრეიკ-პოინტი', en: 'Break point' } },
                                { id: 'baseline', name: { ka: 'ბეისლაინი', en: 'Baseline' } },
                                { id: 'grand-slam', name: { ka: 'დიდი სლემი (Wimbledon, US Open, French Open, Australian Open)', en: 'Grand Slam' } },
                                { id: 'atp-wta-tour', name: { ka: 'ATP/WTA ტური', en: 'ATP/WTA Tour' } },
                            ]
                        },
                        {
                            id: 'athletics',
                            name: { ka: 'მძლეოსნობა', en: 'Athletics (Track and Field)' },
                            keywords: [
                                { id: 'running-athletics', name: { ka: 'სირბილი', en: 'Running' } },
                                { id: 'sprint-athletics', name: { ka: 'სპრინტი', en: 'Sprint' } },
                                { id: 'middle-distance-running', name: { ka: 'საშუალო დისტანცია', en: 'Middle-distance running' } },
                                { id: 'marathon', name: { ka: 'მარათონი', en: 'Marathon' } },
                                { id: 'hurdles', name: { ka: 'ბარიერებით რბენა', en: 'Hurdles' } },
                                { id: 'relay', name: { ka: 'ესტაფეტა', en: 'Relay' } },
                                { id: 'long-jump', name: { ka: 'სიგრძეზე ხტომა', en: 'Long jump' } },
                                { id: 'triple-jump', name: { ka: 'სამხტომი', en: 'Triple jump' } },
                                { id: 'high-jump', name: { ka: 'სიმაღლეზე ხტომა', en: 'High jump' } },
                                { id: 'pole-vault', name: { ka: 'ჭოკით ხტომა', en: 'Pole vault' } },
                                { id: 'shot-put', name: { ka: 'ბირთვის კვრა', en: 'Shot put' } },
                                { id: 'discus-throw', name: { ka: 'ბადროს ტყორცნა', en: 'Discus throw' } },
                                { id: 'javelin-throw', name: { ka: 'შუბის ტყორცნა', en: 'Javelin throw' } },
                                { id: 'hammer-throw', name: { ka: 'უროს ტყორცნა', en: 'Hammer throw' } },
                                { id: 'combined-events', name: { ka: 'მრავალჭიდი (ათჭიდი, შვიდჭიდი)', en: 'Combined events (decathlon, heptathlon)' } },
                                { id: 'start-athletics', name: { ka: 'სტარტი', en: 'Start' } },
                                { id: 'finish-athletics', name: { ka: 'ფინიში', en: 'Finish' } },
                                { id: 'photo-finish', name: { ka: 'ფოტოფინიში', en: 'Photo finish' } },
                                { id: 'running-track', name: { ka: 'სარბენი ბილიკი', en: 'Running track' } },
                            ]
                        },
                        {
                            id: 'gymnastics',
                            name: { ka: 'ტანვარჯიში', en: 'Gymnastics' },
                            keywords: [
                                { id: 'artistic-gymnastics', name: { ka: 'სპორტული ტანვარჯიში', en: 'Artistic gymnastics' } },
                                { id: 'rhythmic-gymnastics', name: { ka: 'მხატვრული ტანვარჯიში', en: 'Rhythmic gymnastics' } },
                                { id: 'trampoline', name: { ka: 'ბატუტი', en: 'Trampoline' } },
                                { id: 'pommel-horse', name: { ka: 'ღერძი', en: 'Pommel horse' } },
                                { id: 'parallel-uneven-bars', name: { ka: 'ორძელი', en: 'Parallel bars / Uneven bars' } },
                                { id: 'rings', name: { ka: 'რგოლები', en: 'Rings' } },
                                { id: 'vault-gymnastics', name: { ka: 'ბჯენითი ხტომა', en: 'Vault' } },
                                { id: 'floor-exercise', name: { ka: 'თავისუფალი ვარჯიში', en: 'Floor exercise' } },
                                { id: 'ribbon', name: { ka: 'ლენტი', en: 'Ribbon' } },
                                { id: 'ball-gymnastics', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'clubs', name: { ka: 'გურზები', en: 'Clubs' } },
                                { id: 'hoop', name: { ka: 'რგოლი (მხატვრული)', en: 'Hoop' } },
                                { id: 'skill-move', name: { ka: 'ილეთი', en: 'Skill / Move' } },
                                { id: 'somersault', name: { ka: 'სალტო', en: 'Somersault' } },
                                { id: 'pirouette', name: { ka: 'პირუეტი', en: 'Pirouette' } },
                            ]
                        },
                        {
                            id: 'cycling',
                            name: { ka: 'ველოსპორტი', en: 'Cycling' },
                            keywords: [
                                { id: 'bicycle', name: { ka: 'ველოსიპედი', en: 'Bicycle' } },
                                { id: 'cycle-race', name: { ka: 'ველორბოლა', en: 'Cycle race' } },
                                { id: 'velodrome-track', name: { ka: 'ველოდრომი (ტრეკი)', en: 'Velodrome (Track)' } },
                                { id: 'road-cycling', name: { ka: 'შოსე', en: 'Road cycling' } },
                                { id: 'sprint-cycling', name: { ka: 'სპრინტი', en: 'Sprint' } },
                                { id: 'peloton', name: { ka: 'პელოტონი', en: 'Peloton' } },
                                { id: 'leaders-jersey', name: { ka: 'ლიდერის მაისური', en: 'Leader\'s jersey' } },
                                { id: 'tour-de-france', name: { ka: 'Tour de France', en: 'Tour de France' } },
                                { id: 'giro-d-italia', name: { ka: 'Giro d\'Italia', en: 'Giro d\'Italia' } },
                                { id: 'vuelta-a-espana', name: { ka: 'Vuelta a España', en: 'Vuelta a España' } },
                            ]
                        },
                        {
                            id: 'equestrian-sports',
                            name: { ka: 'ცხენოსნობა', en: 'Equestrian Sports' },
                            keywords: [
                                { id: 'horse', name: { ka: 'ცხენი', en: 'Horse' } },
                                { id: 'jockey', name: { ka: 'ჟოკეი', en: 'Jockey' } },
                                { id: 'saddle', name: { ka: 'უნაგირი', en: 'Saddle' } },
                                { id: 'horse-racing', name: { ka: 'დოღი', en: 'Horse racing' } },
                                { id: 'show-jumping', name: { ka: 'კონკური', en: 'Show jumping' } },
                                { id: 'dressage', name: { ka: 'გამოезდება', en: 'Dressage' } },
                                { id: 'hippodrome', name: { ka: 'იპოდრომი', en: 'Hippodrome' } },
                            ]
                        },
                        {
                            id: 'golf',
                            name: { ka: 'გოლფი', en: 'Golf' },
                            keywords: [
                                { id: 'golf-term', name: { ka: 'გოლფი', en: 'Golf' } },
                                { id: 'club-golf', name: { ka: 'კლუბი', en: 'Club' } },
                                { id: 'ball-golf', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'hole', name: { ka: 'ჰოული (ფოსო)', en: 'Hole' } },
                                { id: 'par', name: { ka: 'ფარ', en: 'Par' } },
                                { id: 'birdie', name: { ka: 'ბერდი', en: 'Birdie' } },
                                { id: 'eagle', name: { ka: 'იგლი', en: 'Eagle' } },
                                { id: 'bogey', name: { ka: 'ბოგი', en: 'Bogey' } },
                                { id: 'green', name: { ka: 'გრინი', en: 'Green' } },
                                { id: 'fairway', name: { ka: 'ფეარვეი', en: 'Fairway' } },
                                { id: 'the-masters', name: { ka: 'The Masters', en: 'The Masters Tournament' } },
                                { id: 'ryder-cup', name: { ka: 'Ryder Cup', en: 'Ryder Cup' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'combat-sports',
                    name: { ka: '🥋 საბრძოლო ხელოვნება და ორთაბრძოლები', en: '🥋 Martial Arts and Combat Sports' },
                    subSections: [
                        {
                            id: 'boxing',
                            name: { ka: 'კრივი', en: 'Boxing' },
                            keywords: [
                                { id: 'ring-boxing', name: { ka: 'რინგი', en: 'Ring' } },
                                { id: 'round-boxing', name: { ka: 'რაუნდი', en: 'Round' } },
                                { id: 'knockout', name: { ka: 'ნოკაუტი', en: 'Knockout (KO)' } },
                                { id: 'knockdown', name: { ka: 'ნოკდაუნი', en: 'Knockdown' } },
                                { id: 'technical-knockout', name: { ka: 'ტექნიკური ნოკაუტი', en: 'Technical knockout (TKO)' } },
                                { id: 'uppercut', name: { ka: 'აპერკოტი', en: 'Uppercut' } },
                                { id: 'hook', name: { ka: 'ჰუკი', en: 'Hook' } },
                                { id: 'jab', name: { ka: 'ჯები', en: 'Jab' } },
                                { id: 'clinch', name: { ka: 'კლინჩი', en: 'Clinch' } },
                                { id: 'mouthguard', name: { ka: 'კაპა', en: 'Mouthguard' } },
                                { id: 'gloves-boxing', name: { ka: 'ხელთათმანები', en: 'Gloves' } },
                                { id: 'sparring', name: { ka: 'სპარინგი', en: 'Sparring' } },
                            ]
                        },
                        {
                            id: 'wrestling',
                            name: { ka: 'ჭიდაობა', en: 'Wrestling' },
                            keywords: [
                                { id: 'freestyle-wrestling', name: { ka: 'თავისუფალი ჭიდაობა', en: 'Freestyle wrestling' } },
                                { id: 'greco-roman-wrestling', name: { ka: 'ბერძნულ-რომაული ჭიდაობა', en: 'Greco-Roman wrestling' } },
                                { id: 'wrestling-mat', name: { ka: 'საჭიდაო ხალიჩა (ლაბირინთი)', en: 'Wrestling mat' } },
                                { id: 'technique-move-wrestling', name: { ka: 'ილეთი', en: 'Technique / Move' } },
                                { id: 'takedown-throw', name: { ka: 'გდება', en: 'Takedown / Throw' } },
                                { id: 'parterre', name: { ka: 'ჩოქბჯენი', en: 'Parterre' } },
                                { id: 'pin-fall', name: { ka: 'ტუშე', en: 'Pin / Fall' } },
                                { id: 'ground-wrestling', name: { ka: 'პარტერი', en: 'Ground wrestling' } },
                            ]
                        },
                        {
                            id: 'judo',
                            name: { ka: 'ძიუდო', en: 'Judo' },
                            keywords: [
                                { id: 'tatami-judo', name: { ka: 'ტატამი', en: 'Tatami' } },
                                { id: 'kimono-judogi', name: { ka: 'კიმონო (ძიუდოგა)', en: 'Kimono (Judogi)' } },
                                { id: 'belt', name: { ka: 'ქამარი', en: 'Belt' } },
                                { id: 'ippon', name: { ka: 'იპონი', en: 'Ippon' } },
                                { id: 'waza-ari', name: { ka: 'ვაზარი', en: 'Waza-ari' } },
                                { id: 'yuko', name: { ka: 'იუკო', en: 'Yuko' } },
                                { id: 'shido', name: { ka: 'შიდო (გაფრთხილება)', en: 'Shido (Penalty)' } },
                                { id: 'hold-down', name: { ka: 'ბოჭვა', en: 'Hold-down' } },
                                { id: 'armlock', name: { ka: 'მტკივნეული ილეთი', en: 'Armlock' } },
                                { id: 'stranglehold', name: { ka: 'შებოჭვა', en: 'Stranglehold' } },
                            ]
                        },
                        {
                            id: 'mma',
                            name: { ka: 'შერეული ორთაბრძოლები (MMA)', en: 'Mixed Martial Arts (MMA)' },
                            keywords: [
                                { id: 'octagon', name: { ka: 'ოქტაგონი', en: 'Octagon' } },
                                { id: 'grappling', name: { ka: 'გრეპლინგი', en: 'Grappling' } },
                                { id: 'submission', name: { ka: 'საბმიშენი (მტკივნეული/მახრჩობელა ილეთი)', en: 'Submission (joint lock/chokehold)' } },
                                { id: 'ground-and-pound', name: { ka: 'გრაუნდ-ენდ-ფაუნდი', en: 'Ground-and-pound' } },
                                { id: 'ufc', name: { ka: 'UFC', en: 'UFC' } },
                                { id: 'bellator', name: { ka: 'Bellator', en: 'Bellator' } },
                            ]
                        },
                        {
                            id: 'other-combat-disciplines',
                            name: { ka: 'სხვა სახეობები', en: 'Other Disciplines' },
                            keywords: [
                                { id: 'karate', name: { ka: 'კარატე (კატა, კუმიტე)', en: 'Karate (kata, kumite)' } },
                                { id: 'taekwondo', name: { ka: 'ტაეკვონდო', en: 'Taekwondo' } },
                                { id: 'sambo', name: { ka: 'სამბო', en: 'Sambo' } },
                                { id: 'kickboxing', name: { ka: 'კიკბოქსინგი', en: 'Kickboxing' } },
                                { id: 'muay-thai', name: { ka: 'მუაი-ტაი', en: 'Muay Thai' } },
                                { id: 'fencing', name: { ka: 'ფარიკაობა (რაპირა, დაშნა, ხმალი)', en: 'Fencing (foil, épée, sabre)' } },
                                { id: 'sumo', name: { ka: 'სუმო', en: 'Sumo' } },
                                { id: 'aikido', name: { ka: 'აიკიდო', en: 'Aikido' } },
                                { id: 'capoeira', name: { ka: 'კაპოეირა', en: 'Capoeira' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'winter-sports',
                    name: { ka: '❄️ ზამთრის სპორტი', en: '❄️ Winter Sports' },
                    subSections: [
                        {
                            id: 'skiing',
                            name: { ka: 'სათხილამურო სპორტი', en: 'Skiing' },
                            keywords: [
                                { id: 'alpine-skiing', name: { ka: 'სამთო-სათხილამურო სპორტი', en: 'Alpine skiing' } },
                                { id: 'slalom', name: { ka: 'სლალომი', en: 'Slalom' } },
                                { id: 'giant-slalom', name: { ka: 'გიგანტური სლალომი', en: 'Giant slalom' } },
                                { id: 'super-g', name: { ka: 'სუპერგიგანტი', en: 'Super-G' } },
                                { id: 'downhill', name: { ka: 'დაშვება', en: 'Downhill' } },
                                { id: 'freestyle-skiing', name: { ka: 'ფრისტაილი', en: 'Freestyle skiing' } },
                                { id: 'cross-country-skiing', name: { ka: 'თხილამურებით რბოლა', en: 'Cross-country skiing' } },
                                { id: 'biathlon', name: { ka: 'ბიატლონი', en: 'Biathlon' } },
                                { id: 'ski-jumping', name: { ka: 'ტრამპლინიდან ხტომა', en: 'Ski jumping' } },
                            ]
                        },
                        {
                            id: 'skating-sliding',
                            name: { ka: 'სრიალი', en: 'Skating & Sliding' },
                            keywords: [
                                { id: 'figure-skating', name: { ka: 'ფიგურული სრიალი', en: 'Figure skating' } },
                                { id: 'speed-skating', name: { ka: 'ციგურებით რბოლა', en: 'Speed skating' } },
                                { id: 'short-track-speed-skating', name: { ka: 'შორტ-ტრეკი', en: 'Short-track speed skating' } },
                                { id: 'snowboarding', name: { ka: 'სნოუბორდინგი (ჰაფ-პაიპი, სლოუპსტაილი, ბიგ-ეარი)', en: 'Snowboarding (half-pipe, slopestyle, big air)' } },
                                { id: 'curling', name: { ka: 'კერლინგი', en: 'Curling' } },
                                { id: 'bobsleigh', name: { ka: 'ბობსლეი', en: 'Bobsleigh' } },
                                { id: 'skeleton-sport', name: { ka: 'სკელეტონი', en: 'Skeleton' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'water-sports',
                    name: { ka: '💧 წყლის სპორტი', en: '💧 Water Sports' },
                    subSections: [
                        {
                            id: 'water-sports-keywords',
                            name: {ka: 'წყლის სპორტის სახეობები', en: 'Types of Water Sports'},
                            keywords: [
                                { id: 'swimming-styles', name: { ka: 'ცურვა (ბრასი, კროლი, ზურგზე ცურვა, ბატერფლაი)', en: 'Swimming (breaststroke, freestyle/crawl, backstroke, butterfly)' } },
                                { id: 'diving', name: { ka: 'წყალში ხტომა', en: 'Diving' } },
                                { id: 'synchronized-swimming', name: { ka: 'სინქრონული ცურვა', en: 'Synchronized swimming' } },
                                { id: 'water-polo-ws', name: { ka: 'წყალბურთი', en: 'Water polo' } },
                                { id: 'scuba-diving', name: { ka: 'დაივინგი', en: 'Scuba diving' } },
                                { id: 'snorkeling', name: { ka: 'სნორკელინგი', en: 'Snorkeling' } },
                                { id: 'surfing', name: { ka: 'სერფინგი', en: 'Surfing' } },
                                { id: 'windsurfing', name: { ka: 'ვინდსერფინგი', en: 'Windsurfing' } },
                                { id: 'kitesurfing', name: { ka: 'კაიტსერფინგი', en: 'Kitesurfing' } },
                                { id: 'wakeboarding', name: { ka: 'ვეიკბორდინგი', en: 'Wakeboarding' } },
                                { id: 'rowing', name: { ka: 'ნიჩბოსნობა (აკადემიური, კანოე, კაიაკი)', en: 'Rowing (academic, canoe, kayak)' } },
                                { id: 'sailing-yachting', name: { ka: 'აფროსნობა (იახტინგი)', en: 'Sailing (Yachting)' } },
                                { id: 'underwater-hockey', name: { ka: 'წყალქვეშა ჰოკეი', en: 'Underwater hockey' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'extreme-sports',
                    name: { ka: '🧗 ექსტრემალური სპორტი', en: '🧗 Extreme Sports' },
                    subSections: [
                        {
                            id: 'extreme-sports-keywords',
                            name: {ka: 'ექსტრემალური სპორტის სახეობები', en: 'Types of Extreme Sports'},
                            keywords: [
                                { id: 'skateboarding', name: { ka: 'სკეიტბორდინგი', en: 'Skateboarding' } },
                                { id: 'bmx', name: { ka: 'BMX', en: 'BMX' } },
                                { id: 'rock-climbing', name: { ka: 'კლდეზე ცოცვა', en: 'Rock climbing' } },
                                { id: 'mountaineering', name: { ka: 'ალპინიზმი', en: 'Mountaineering' } },
                                { id: 'parkour', name: { ka: 'პარკური', en: 'Parkour' } },
                                { id: 'skydiving', name: { ka: 'სქაიდაივინგი', en: 'Skydiving' } },
                                { id: 'bungee-jumping', name: { ka: 'ბანჯი-ჯამპინგი', en: 'Bungee jumping' } },
                                { id: 'ziplining', name: { ka: 'ზიპლაინი', en: 'Ziplining' } },
                                { id: 'rafting', name: { ka: 'რაფტინგი', en: 'Rafting' } },
                                { id: 'base-jumping', name: { ka: 'ბეისჯამპინგი', en: 'BASE jumping' } },
                                { id: 'motocross-freestyle', name: { ka: 'მოტოფრისტაილი', en: 'Motocross freestyle' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'motorsport',
                    name: { ka: '🏎️ ტექნიკური და საავტომობილო სპორტი', en: '🏎️ Motorsport' },
                    subSections: [
                        {
                            id: 'motorsport-keywords',
                            name: {ka: 'ავტოსპორტის სახეობები', en: 'Types of Motorsport'},
                            keywords: [
                                { id: 'auto-racing', name: { ka: 'ავტორბოლა', en: 'Auto racing' } },
                                { id: 'formula-1', name: { ka: 'ფორმულა 1 (Formula 1)', en: 'Formula 1' } },
                                { id: 'rally', name: { ka: 'რალი', en: 'Rally' } },
                                { id: 'nascar', name: { ka: 'NASCAR', en: 'NASCAR' } },
                                { id: 'karting', name: { ka: 'კარტინგი', en: 'Karting' } },
                                { id: 'motorcycle-racing', name: { ka: 'მოტორბოლა (MotoGP)', en: 'Motorcycle racing (MotoGP)' } },
                                { id: 'drag-racing', name: { ka: 'დრაგ-რეისინგი', en: 'Drag racing' } },
                                { id: 'motocross', name: { ka: 'მოტოკროსი', en: 'Motocross' } },
                                { id: 'racing-car', name: { ka: 'ბოლიდი', en: 'Racing car' } },
                                { id: 'driver-pilot', name: { ka: 'პილოტი', en: 'Driver / Pilot' } },
                                { id: 'co-driver', name: { ka: 'შტურმანი', en: 'Co-driver' } },
                                { id: 'pit-stop', name: { ka: 'პიტ-სტოპი', en: 'Pit stop' } },
                                { id: 'track', name: { ka: 'ტრეკი', en: 'Track' } },
                                { id: 'qualifying', name: { ka: 'კვალიფიკაცია', en: 'Qualifying' } },
                                { id: 'pole-position', name: { ka: 'პოულ პოზიშენი', en: 'Pole position' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'target-sports',
                    name: { ka: '🎯 სამიზნე სპორტი', en: '🎯 Target Sports' },
                    subSections: [
                        {
                            id: 'target-sports-keywords',
                            name: {ka: 'სამიზნე სპორტის სახეობები', en: 'Types of Target Sports'},
                            keywords: [
                                { id: 'archery', name: { ka: 'მშვილდოსნობა (არბალეტი)', en: 'Archery (crossbow)' } },
                                { id: 'clay-pigeon-shooting', name: { ka: 'სასტენდო სროლა', en: 'Clay pigeon shooting' } },
                                { id: 'shooting', name: { ka: 'ტყვიის სროლა', en: 'Shooting' } },
                                { id: 'target', name: { ka: 'სამიზნე', en: 'Target' } },
                                { id: 'arrow', name: { ka: 'ისარი', en: 'Arrow' } },
                                { id: 'bow', name: { ka: 'მშვილდი', en: 'Bow' } },
                                { id: 'darts', name: { ka: 'დართსი', en: 'Darts' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'mind-sports',
                    name: { ka: '♟️ გონებრივი სპორტი', en: '♟️ Mind Sports' },
                    subSections: [
                        {
                            id: 'mind-sports-keywords',
                            name: {ka: 'გონებრივი სპორტის სახეობები', en: 'Types of Mind Sports'},
                            keywords: [
                                { id: 'chess', name: { ka: 'ჭადრაკი (დებიუტი, მიტელშპილი, ენდშპილი, ცუგცვანგი, შამათი, პატი, ფიგურა, პაიკი)', en: 'Chess (opening, middlegame, endgame, zugzwang, checkmate, stalemate, piece, pawn)' } },
                                { id: 'draughts-checkers', name: { ka: 'შაში', en: 'Draughts / Checkers' } },
                                { id: 'go', name: { ka: 'გო', en: 'Go' } },
                                { id: 'bridge', name: { ka: 'ბრიჯი', en: 'Bridge' } },
                                { id: 'poker', name: { ka: 'პოკერი', en: 'Poker' } },
                                { id: 'esports', name: { ka: 'კიბერსპორტი (eSports)', en: 'eSports' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'general-concepts-terminology',
            name: { ka: '📋 II. ზოგადი ცნებები და ტერმინოლოგია', en: '📋 II. General Concepts and Terminology' },
            sections: [
                {
                    id: 'roles-participants',
                    name: { ka: '👥 როლები და მონაწილეები', en: '👥 Roles and Participants' },
                    subSections: [
                        {
                            id: 'roles-participants-keywords',
                            name: {ka: 'როლები და მონაწილეები', en: 'Roles and Participants'},
                            keywords: [
                                { id: 'athlete', name: { ka: 'სპორტსმენი', en: 'Athlete' } },
                                { id: 'team', name: { ka: 'გუნდი', en: 'Team' } },
                                { id: 'club', name: { ka: 'კლუბი', en: 'Club' } },
                                { id: 'national-team-sport', name: { ka: 'ნაკრები', en: 'National team' } },
                                { id: 'captain', name: { ka: 'კაპიტანი', en: 'Captain' } },
                                { id: 'coach', name: { ka: 'მწვრთნელი', en: 'Coach' } },
                                { id: 'referee-arbiter', name: { ka: 'მსაჯი (რეფერი, არბიტრი)', en: 'Referee (arbiter)' } },
                                { id: 'commissioner', name: { ka: 'კომისარი', en: 'Commissioner' } },
                                { id: 'manager', name: { ka: 'მენეჯერი', en: 'Manager' } },
                                { id: 'agent', name: { ka: 'აგენტი', en: 'Agent' } },
                                { id: 'fan-supporter', name: { ka: 'გულშემატკივარი (ფანი, ქომაგი)', en: 'Fan (supporter)' } },
                                { id: 'foreign-player-sport', name: { ka: 'ლეგიონერი', en: 'Foreign player' } },
                                { id: 'veteran', name: { ka: 'ვეტერანი', en: 'Veteran' } },
                                { id: 'debutant', name: { ka: 'დებიუტანტი', en: 'Debutant' } },
                                { id: 'physiotherapist', name: { ka: 'ფიზიოთერაპევტი', en: 'Physiotherapist' } },
                                { id: 'commentator', name: { ka: 'კომენტატორი', en: 'Commentator' } },
                                { id: 'analyst', name: { ka: 'ანალიტიკოსი', en: 'Analyst' } },
                                { id: 'mascot', name: { ka: 'მასკოტი', en: 'Mascot' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'competition-rules',
                    name: { ka: '🏆 შეჯიბრი და წესები', en: '🏆 Competition and Rules' },
                    subSections: [
                        {
                            id: 'competition-rules-keywords',
                            name: {ka: 'შეჯიბრი და წესები', en: 'Competition and Rules'},
                            keywords: [
                                { id: 'competition-term', name: { ka: 'შეჯიბრი', en: 'Competition' } },
                                { id: 'tournament', name: { ka: 'ტურნირი', en: 'Tournament' } },
                                { id: 'championship', name: { ka: 'ჩემპიონატი', en: 'Championship' } },
                                { id: 'league', name: { ka: 'ლიგა', en: 'League' } },
                                { id: 'cup', name: { ka: 'თასი', en: 'Cup' } },
                                { id: 'olympics', name: { ka: 'ოლიმპიადა', en: 'Olympics' } },
                                { id: 'season-sport', name: { ka: 'სეზონი', en: 'Season' } },
                                { id: 'stage-sport', name: { ka: 'ეტაპი', en: 'Stage' } },
                                { id: 'round', name: { ka: 'რაუნდი', en: 'Round' } },
                                { id: 'qualification', name: { ka: 'კვალიფიკაცია', en: 'Qualification' } },
                                { id: 'play-off', name: { ka: 'პლეი-ოფი', en: 'Play-off' } },
                                { id: 'final', name: { ka: 'ფინალი', en: 'Final' } },
                                { id: 'semi-final', name: { ka: 'ნახევარფინალი', en: 'Semi-final' } },
                                { id: 'quarter-final', name: { ka: 'მეოთხედფინალი', en: 'Quarter-final' } },
                                { id: 'group-stage', name: { ka: 'ჯგუფური ეტაპი', en: 'Group stage' } },
                                { id: 'rule', name: { ka: 'წესი', en: 'Rule' } },
                                { id: 'penalty', name: { ka: 'ჯარიმა', en: 'Penalty' } },
                                { id: 'disqualification', name: { ka: 'დისკვალიფიკაცია', en: 'Disqualification' } },
                                { id: 'fair-play', name: { ka: 'ფეარ-პლეი (სამართლიანი თამაში)', en: 'Fair Play' } },
                                { id: 'half-time', name: { ka: 'ტაიმი', en: 'Half' } },
                                { id: 'period', name: { ka: 'პერიოდი', en: 'Period' } },
                                { id: 'set-sport', name: { ka: 'სეტი', en: 'Set' } },
                                { id: 'overtime', name: { ka: 'ოვერტაიმი', en: 'Overtime' } },
                                { id: 'replay', name: { ka: 'განმეორება (replay)', en: 'Replay' } },
                                { id: 'match-point', name: { ka: 'მატჩ-პოინტი', en: 'Match point' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'results-achievements',
                    name: { ka: '📈 შედეგები და მიღწევები', en: '📈 Results and Achievements' },
                    subSections: [
                        {
                            id: 'results-achievements-keywords',
                            name: {ka: 'შედეგები და მიღწევები', en: 'Results and Achievements'},
                            keywords: [
                                { id: 'win-victory', name: { ka: 'მოგება', en: 'Win / Victory' } },
                                { id: 'loss-defeat', name: { ka: 'წაგება', en: 'Loss / Defeat' } },
                                { id: 'draw-tie', name: { ka: 'ფრე', en: 'Draw / Tie' } },
                                { id: 'score', name: { ka: 'ანგარიში', en: 'Score' } },
                                { id: 'point-sport', name: { ka: 'ქულა', en: 'Point' } },
                                { id: 'record', name: { ka: 'რეკორდი (მსოფლიო, ოლიმპიური, პირადი)', en: 'Record (world, Olympic, personal)' } },
                                { id: 'medal', name: { ka: 'მედალი (ოქრო, ვერცხლი, ბრინჯაო)', en: 'Medal (gold, silver, bronze)' } },
                                { id: 'title', name: { ka: 'ტიტული', en: 'Title' } },
                                { id: 'champion', name: { ka: 'ჩემპიონი', en: 'Champion' } },
                                { id: 'prize-winner', name: { ka: 'პრიზიორი', en: 'Prize-winner' } },
                                { id: 'favorite', name: { ka: 'ფავორიტი', en: 'Favorite' } },
                                { id: 'underdog', name: { ka: 'აუტსაიდერი', en: 'Underdog' } },
                                { id: 'ranking', name: { ka: 'რეიტინგი', en: 'Ranking' } },
                                { id: 'seeding', name: { ka: 'განთესვა', en: 'Seeding' } },
                                { id: 'podium', name: { ka: 'პოდიუმი', en: 'Podium' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'training-health',
                    name: { ka: '💪 ვარჯიში და ჯანმრთელობა', en: '💪 Training and Health' },
                    subSections: [
                        {
                            id: 'training-health-keywords',
                            name: {ka: 'ვარჯიში და ჯანმრთელობა', en: 'Training and Health'},
                            keywords: [
                                { id: 'training-practice', name: { ka: 'ვარჯიში', en: 'Training / Practice' } },
                                { id: 'warm-up-sport', name: { ka: 'გახურება', en: 'Warm-up' } },
                                { id: 'stretching-sport', name: { ka: 'გაწელვა', en: 'Stretching' } },
                                { id: 'physical-preparation', name: { ka: 'ფიზიკური მომზადება', en: 'Physical preparation' } },
                                { id: 'tactics-sport', name: { ka: 'ტაქტიკა', en: 'Tactics' } },
                                { id: 'strategy-sport', name: { ka: 'სტრატეგია', en: 'Strategy' } },
                                { id: 'stamina-endurance', name: { ka: 'გამძლეობა', en: 'Stamina / Endurance' } },
                                { id: 'flexibility-sport', name: { ka: 'მოქნილობა', en: 'Flexibility' } },
                                { id: 'strength-sport', name: { ka: 'ძალა', en: 'Strength' } },
                                { id: 'speed-sport', name: { ka: 'სისწრაფე', en: 'Speed' } },
                                { id: 'injury', name: { ka: 'ტრავმა', en: 'Injury' } },
                                { id: 'rehabilitation-sport', name: { ka: 'რეაბილიტაცია', en: 'Rehabilitation' } },
                                { id: 'doping', name: { ka: 'დოპინგი', en: 'Doping' } },
                                { id: 'doping-control-sport', name: { ka: 'დოპინგ-კონტროლი', en: 'Doping control' } },
                                { id: 'sports-medicine-sport', name: { ka: 'სპორტული მედიცინა', en: 'Sports medicine' } },
                                { id: 'sports-nutrition', name: { ka: 'სპორტული კვება', en: 'Sports nutrition' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'infrastructure-venue',
                    name: { ka: '🏟️ ინფრასტრუქტურა და ადგილი', en: '🏟️ Infrastructure and Venue' },
                    subSections: [
                        {
                            id: 'infrastructure-venue-keywords',
                            name: {ka: 'ინფრასტრუქტურა და ადგილი', en: 'Infrastructure and Venue'},
                            keywords: [
                                { id: 'stadium-infra', name: { ka: 'სტადიონი', en: 'Stadium' } },
                                { id: 'arena', name: { ka: 'არენა', en: 'Arena' } },
                                { id: 'sports-complex', name: { ka: 'სპორტული კომპლექსი', en: 'Sports complex' } },
                                { id: 'field-pitch-infra', name: { ka: 'მოედანი', en: 'Field / Pitch' } },
                                { id: 'court-infra', name: { ka: 'კორტი', en: 'Court' } },
                                { id: 'ring-infra', name: { ka: 'რინგი', en: 'Ring' } },
                                { id: 'tatami-infra', name: { ka: 'ტატამი', en: 'Tatami' } },
                                { id: 'pool-infra', name: { ka: 'აუზი', en: 'Pool' } },
                                { id: 'velodrome-infra', name: { ka: 'ველოდრომი', en: 'Velodrome' } },
                                { id: 'hippodrome-infra', name: { ka: 'იპოდრომი', en: 'Hippodrome' } },
                                { id: 'running-track-infra', name: { ka: 'სარბენი ბილიკი', en: 'Running track' } },
                                { id: 'grandstand', name: { ka: 'ტრიბუნა', en: 'Grandstand' } },
                                { id: 'scoreboard', name: { ka: 'ტაბლო (scoreboard)', en: 'Scoreboard' } },
                                { id: 'locker-room', name: { ka: 'გასახდელი', en: 'Locker room' } },
                                { id: 'vip-box', name: { ka: 'ვიპ-ლოჟა', en: 'VIP box' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'major-sporting-events',
            name: { ka: '🏅 III. მთავარი სპორტული ღონისძიებები', en: '🏅 III. Major Sporting Events' },
            sections: [
                {
                    id: 'major-events-keywords-section',
                    name: {ka: 'მთავარი სპორტული ღონისძიებები', en: 'Major Sporting Events'},
                    subSections: [
                        {
                            id: 'major-events-keywords-subsection',
                            name: {ka: 'ღონისძიებები', en: 'Events'},
                            keywords: [
                                { id: 'summer-olympic-games', name: { ka: 'ზაფხულის ოლიმპიური თამაშები', en: 'Summer Olympic Games' } },
                                { id: 'winter-olympic-games', name: { ka: 'ზამთრის ოლიმპიური თამაშები', en: 'Winter Olympic Games' } },
                                { id: 'paralympic-games', name: { ka: 'პარაოლიმპიური თამაშები', en: 'Paralympic Games' } },
                                { id: 'fifa-world-cup', name: { ka: 'FIFA-ს მსოფლიო ჩემპიონატი', en: 'FIFA World Cup' } },
                                { id: 'uefa-champions-league', name: { ka: 'UEFA-ს ჩემპიონთა ლიგა', en: 'UEFA Champions League' } },
                                { id: 'uefa-european-championship', name: { ka: 'UEFA-ს ევროპის ჩემპიონატი', en: 'UEFA European Championship' } },
                                { id: 'copa-america', name: { ka: 'კოპა ამერიკა', en: 'Copa América' } },
                                { id: 'grand-slam-tournaments', name: { ka: 'დიდი სლემის ტურნირები', en: 'Grand Slam tournaments' } },
                                { id: 'super-bowl-nfl', name: { ka: 'Super Bowl (NFL)', en: 'Super Bowl (NFL)' } },
                                { id: 'nba-finals', name: { ka: 'NBA-ის ფინალი', en: 'NBA Finals' } },
                                { id: 'world-series-mlb', name: { ka: 'მსოფლიო სერია (MLB)', en: 'World Series (MLB)' } },
                                { id: 'tour-de-france-events', name: { ka: 'ტურ დე ფრანსი', en: 'Tour de France' } },
                                { id: '24-hours-of-le-mans', name: { ka: '24 საათი ლე-მანზე', en: '24 Hours of Le Mans' } },
                                { id: 'indianapolis-500', name: { ka: 'ინდიანაპოლის 500', en: 'Indianapolis 500' } },
                                { id: 'rugby-world-cup', name: { ka: 'მსოფლიო თასი რაგბში', en: 'Rugby World Cup' } },
                                { id: 'dakar-rally', name: { ka: 'დაკარის რალი', en: 'Dakar Rally' } },
                                { id: 'ryder-cup-golf', name: { ka: 'Ryder Cup (გოლფი)', en: 'Ryder Cup (Golf)' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'sports-equipment-gear',
            name: { ka: '🎒 IV. სპორტული ინვენტარი და აღჭურვილობა', en: '🎒 IV. Sports Equipment and Gear' },
            sections: [
                {
                    id: 'equipment-keywords-section',
                    name: {ka: 'ინვენტარი და აღჭურვილობა', en: 'Equipment and Gear'},
                    subSections: [
                        {
                            id: 'equipment-keywords-subsection',
                            name: {ka: 'ინვენტარი', en: 'Equipment'},
                            keywords: [
                                { id: 'ball-equip', name: { ka: 'ბურთი', en: 'Ball' } },
                                { id: 'net-equip', name: { ka: 'ბადე', en: 'Net' } },
                                { id: 'goal-equip', name: { ka: 'კარი', en: 'Goal' } },
                                { id: 'racquet-equip', name: { ka: 'რაკეტა (ჩოგანი)', en: 'Racquet' } },
                                { id: 'bat-equip', name: { ka: 'ბიტა', en: 'Bat' } },
                                { id: 'stick-equip', name: { ka: 'ყვანჭი', en: 'Stick' } },
                                { id: 'puck-equip', name: { ka: 'შაიბა', en: 'Puck' } },
                                { id: 'skis', name: { ka: 'თხილამურები', en: 'Skis' } },
                                { id: 'snowboard', name: { ka: 'სნოუბორდი', en: 'Snowboard' } },
                                { id: 'skates', name: { ka: 'ციგურები', en: 'Skates' } },
                                { id: 'bicycle-equip', name: { ka: 'ველოსიპედი', en: 'Bicycle' } },
                                { id: 'boat-equip', name: { ka: 'ნავი (კანოე, კაიაკი)', en: 'Boat (canoe, kayak)' } },
                                { id: 'uniform-kit', name: { ka: 'უნიფორმა, ფორმა', en: 'Uniform, Kit' } },
                                { id: 'cleats-boots', name: { ka: 'ბუცები (შიპოვკები)', en: 'Cleats (Boots)' } },
                                { id: 'kimono-equip', name: { ka: 'კიმონო', en: 'Kimono' } },
                                { id: 'singlet', name: { ka: 'ტრიკო', en: 'Singlet' } },
                                { id: 'helmet', name: { ka: 'ჩაფხუტი', en: 'Helmet' } },
                                { id: 'knee-pad', name: { ka: 'სამუხლე', en: 'Knee pad' } },
                                { id: 'elbow-pad', name: { ka: 'იდაყვის დამცავი', en: 'Elbow pad' } },
                                { id: 'mouthguard-equip', name: { ka: 'კაპა', en: 'Mouthguard' } },
                                { id: 'gloves-equip', name: { ka: 'ხელთათმანები', en: 'Gloves' } },
                                { id: 'weight-equip', name: { ka: 'წონა (შტანგა, განტელი)', en: 'Weight (barbell, dumbbell)' } },
                                { id: 'dumbbell', name: { ka: 'ჰანტელი', en: 'Dumbbell' } },
                                { id: 'exercise-machine', name: { ka: 'ტრენაჟორი', en: 'Exercise machine' } },
                                { id: 'swimsuit', name: { ka: 'საცურაო კოსტიუმი', en: 'Swimsuit' } },
                                { id: 'goggles', name: { ka: 'სათვალე (საცურაო/სათხილამურო)', en: 'Goggles (swimming/ski)' } },
                                { id: 'stopwatch', name: { ka: 'წამზომი', en: 'Stopwatch' } },
                                { id: 'whistle', name: { ka: 'სასტვენი', en: 'Whistle' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'history-culture-of-sport',
            name: { ka: '📜 V. სპორტის ისტორია და კულტურა', en: '📜 V. History and Culture of Sport' },
            sections: [
                {
                    id: 'historical-concepts',
                    name: { ka: 'ისტორიული ცნებები', en: 'Historical Concepts' },
                    subSections: [
                        {
                            id: 'historical-concepts-keywords',
                            name: {ka: 'ისტორიული ცნებები', en: 'Historical Concepts'},
                            keywords: [
                                { id: 'ancient-olympic-games', name: { ka: 'ანტიკური ოლიმპიური თამაშები', en: 'Ancient Olympic Games' } },
                                { id: 'gladiator', name: { ka: 'გლადიატორი', en: 'Gladiator' } },
                                { id: 'knightly-tournament', name: { ka: 'რაინდული ტურნირი', en: 'Knightly tournament' } },
                                { id: 'olympic-flame', name: { ka: 'ოლიმპიური ცეცხლი', en: 'Olympic flame' } },
                                { id: 'olympic-motto', name: { ka: 'ოლიმპიური დევიზი', en: 'Olympic motto' } },
                                { id: 'hall-of-fame', name: { ka: 'დიდების დარბაზი (Hall of Fame)', en: 'Hall of Fame' } },
                                { id: 'legend', name: { ka: 'ლეგენდა', en: 'Legend' } },
                                { id: 'derby', name: { ka: 'დერბი', en: 'Derby' } },
                                { id: 'rivalry', name: { ka: 'მეტოქეობა (Rivalry)', en: 'Rivalry' } },
                                { id: 'fan-club', name: { ka: 'ფან-კლუბი', en: 'Fan club' } },
                                { id: 'mascot-talisman', name: { ka: 'ტალიმენი (მასკოტი)', en: 'Mascot / Talisman' } },
                                { id: 'tradition-sport', name: { ka: 'ტრადიცია', en: 'Tradition' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};