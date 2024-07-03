import { useState } from 'react';
import { IHabit } from '@/models/habit'; 

interface UseHabitsProps {
  initialHabits: IHabit[];
}

const useHabits = ({ initialHabits }: UseHabitsProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('Today');
  const [activeHabits, setActiveHabits] = useState<IHabit[]>(initialHabits.filter(habit => habit.checkIns === 0));
  const [completedHabits, setCompletedHabits] = useState<IHabit[]>(initialHabits.filter(habit => habit.checkIns > 0));

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    filterHabits(option);
  };

  const handleCheckIn = (id: number) => {
    const updatedActiveHabits = activeHabits.filter(habit => habit.id !== id);
    setActiveHabits(updatedActiveHabits);

    const habitToAdd = initialHabits.find(habit => habit.id === id);
    if (habitToAdd) {
      setCompletedHabits(prevCompletedHabits => [...prevCompletedHabits, { ...habitToAdd, checkIns: habitToAdd.checkIns + 1 }]);
    }
  };

  const filterHabits = (option: string) => {
    let filteredActiveHabits: IHabit[] = [];
    let filteredCompletedHabits: IHabit[] = [];

    switch (option) {
      case 'Weekly':
        filteredActiveHabits = initialHabits.filter((habit) => habit.frequency === 'Weekly' && habit.checkIns === 0);
        filteredCompletedHabits = initialHabits.filter((habit) => habit.frequency === 'Weekly' && habit.checkIns > 0);
        break;
      case 'Daily':
        filteredActiveHabits = initialHabits.filter((habit) => habit.frequency === 'Daily' && habit.checkIns === 0);
        filteredCompletedHabits = initialHabits.filter((habit) => habit.frequency === 'Daily' && habit.checkIns > 0);
        break;
      case 'Ongoing':
        filteredActiveHabits = initialHabits.filter((habit) => habit.frequency === 'Ongoing' && habit.checkIns === 0);
        filteredCompletedHabits = initialHabits.filter((habit) => habit.frequency === 'Ongoing' && habit.checkIns > 0);
        break;
      default:
        filteredActiveHabits = initialHabits.filter((habit) => habit.checkIns === 0); 
        filteredCompletedHabits = initialHabits.filter((habit) => habit.checkIns > 0); 
    }

    setActiveHabits(filteredActiveHabits);
    setCompletedHabits(filteredCompletedHabits);
  };

  return {
    selectedOption,
    activeHabits,
    completedHabits,
    handleOptionSelect,
    handleCheckIn,
  };
};

export default useHabits;
