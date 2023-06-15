import React from 'react';
import { View, Text } from 'react-native';
import VehicleList from '../components/VehicleList';

interface HomeScreenProps {
  navigation: any; // типизируйте это в соответствии с вашими потребностями
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <VehicleList />
    </View>
  );
}

export default HomeScreen;
