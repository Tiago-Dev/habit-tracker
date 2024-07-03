import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HabitItem from '@/components/HabitItem';
import OptionItem from '@/components/OptionItem';
import useHabits from '@/hooks/useHabits';
import { IHabit } from '@/models/habit'; 
import { habits } from '@/MOCKS/habits';
import Header from '@/components/Header';


const HomeScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { selectedOption, activeHabits, completedHabits, handleOptionSelect, handleCheckIn } = useHabits({ initialHabits: habits });

  const renderActiveItem = ({ item }: { item: IHabit }) => <HabitItem habit={item} onCheckIn={handleCheckIn} />;
  const renderCompletedItem = ({ item }: { item: IHabit }) => <HabitItem habit={item} isCompletedList={true}/>; 

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title="Home" />
      <View style={styles.optionsContainer}>
        <OptionItem
          option="Weekly"
          isSelected={selectedOption === 'Weekly'}
          onPress={() => handleOptionSelect('Weekly')}
        />
        <OptionItem
          option="Daily"
          isSelected={selectedOption === 'Daily'}
          onPress={() => handleOptionSelect('Daily')}
        />
        <OptionItem
          option="Ongoing"
          isSelected={selectedOption === 'Ongoing'}
          onPress={() => handleOptionSelect('Ongoing')}
        />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Active Habits Summary</Text>
        <FlatList
          data={activeHabits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderActiveItem}
        />
      </View>

      {completedHabits.length > 0 && (
        <View style={styles.completedContainer}>
          <Text style={styles.completedTitle}>Completed Habits</Text>
          <FlatList
            data={completedHabits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCompletedItem}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  completedContainer: {
    marginTop: 20,
  },
  completedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomeScreen;
