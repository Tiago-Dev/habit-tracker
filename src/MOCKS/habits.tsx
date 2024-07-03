import { IHabit } from "@/models/habit";

export const habits: IHabit[] = [
  {
    id: 1,
    title: 'Meditation',
    frequency: 'Daily',
    measurement: 'Time',
    checkIns: 0,
    backgroundColor: '#ccccff'
  },
  {
    id: 2,
    title: 'Exercise',
    frequency: 'Weekly',
    measurement: 'Time',
    checkIns: 0,
    backgroundColor: '#ccffcc'
  },
  {
    id: 3,
    title: 'Water Intake',
    frequency: 'Daily',
    measurement: 'Cups',
    checkIns: 0,
    backgroundColor: '#ffcc99'
  },
  {
    id: 4,
    title: 'Reading',
    frequency: 'Ongoing',
    measurement: 'Pages',
    checkIns: 0,
    backgroundColor: '#99ccff'
  }
];
