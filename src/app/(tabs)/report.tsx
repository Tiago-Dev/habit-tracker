import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartesianChart, Bar } from 'victory-native';

const DATA = [
  { x: 'Habit 1', y: 10 },
  { x: 'Habit 2', y: 5 },
  { x: 'Habit 3', y: 7 },
];

export default function ReportScreen() {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: top, width: 200, height: 200, marginLeft: 20 }}>
      <CartesianChart data={DATA} xKey="x" yKeys={["y"]}>
        {({ points, chartBounds }) => (
          <Bar
            points={points.y}
            chartBounds={chartBounds}
            color="#8985E9"
            roundedCorners={{ topLeft: 10, topRight: 10 }}
          />
        )}
      </CartesianChart>
    </View>
  );
}
