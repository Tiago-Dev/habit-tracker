import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TabLayout() {

  return (
    <Tabs
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = 'home';
          } else if (route.name === 'moodStat') {
            iconName = 'emoticon-outline';
          } else if (route.name === 'report') {
            iconName = 'file-chart-outline';
          } else if (route.name === 'myHabits') {
            iconName = 'book-open-outline';
          } else if (route.name === 'account') {
            iconName = 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color='#8985E9' />;
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="moodStat"
        options={{
          title: 'Mood Stat',
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
        }}
      />
      <Tabs.Screen
        name="myHabits"
        options={{
          title: 'My Habits',
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
        }}
      />
    </Tabs>
  );
}
