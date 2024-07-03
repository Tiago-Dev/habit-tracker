import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { IHabit } from '@/models/habit';

interface HabitItemProps {
  habit: IHabit;
  onCheckIn?: (id: number) => void;
  isCompletedList?: boolean;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onCheckIn, isCompletedList = false }) => (
  <GestureHandlerRootView>
    <Swipeable
      overshootRight={false}
      renderRightActions={() => !isCompletedList && (
        <Animated.View>
          <View>
            <TouchableOpacity style={styles.buttonCheck} onPress={() => onCheckIn && onCheckIn(habit.id)}>
              <Feather name="check" size={32} color="#FFF" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      renderLeftActions={() => !isCompletedList && (
        <Animated.View>
          <View>
            <TouchableOpacity style={styles.buttonRemove} onPress={() => {}}>
              <Feather name="x-square" size={32} color="#FFF" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    >
      <View style={[styles.container, { backgroundColor: habit.backgroundColor }]}>
        <View>
          <Text style={styles.habitTitle}>{habit.title}</Text>
          <Text>
            <Text style={styles.boldText}>Frequency:</Text> {habit.frequency}
          </Text>
          <Text>
            <Text style={styles.boldText}>Measurement:</Text> {habit.measurement}
          </Text>
          <Text>
            <Text style={styles.boldText}>Check-ins:</Text> {habit.checkIns}
          </Text>
        </View>
      </View>
    </Swipeable>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  habitItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  checkButton: {
    backgroundColor: 'green',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 25,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: '#E83F5B',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: 20,
    borderRadius: 20,
    marginTop: 15,
    paddingRight: 15,
  },
  buttonCheck: {
    width: 100,
    height: 85,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    borderRadius: 20,
    marginTop: 15,
    paddingLeft: 15,
  },
});

export default React.memo(HabitItem);
