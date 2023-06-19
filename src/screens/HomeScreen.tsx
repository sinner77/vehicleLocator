import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import VehicleList from '../components/VehicleList';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <Text>{t('homeScreen.carList')}</Text>
      <VehicleList />
      <TouchableOpacity style={styles.button} onPress={handleVehiclePress}>
        <Text style={styles.buttonText}>{t('homeScreen.settings')}</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
