import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import VehicleList from '../components/VehicleList';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import { useTranslation } from 'react-i18next';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const handleVehiclePress = () => {
    navigation.navigate('Settings');
  }
  return (
    <View style={styles.container}>
      <Text>Список автомобилей</Text>
      <VehicleList />
      <Button title='Settings' onPress={handleVehiclePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'pink',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
