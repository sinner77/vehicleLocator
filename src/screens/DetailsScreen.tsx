import React from 'react';
import {View, Text, Button} from 'react-native';
import VehicleDetails from '../components/VehicleDetails';
import { useTranslation } from 'react-i18next';

interface DetailsScreenProps {
  route: any;
  navigation: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({route, navigation}) => {
  const { t, i18n } = useTranslation();
  const {vehicle} = route.params;
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <VehicleDetails vehicle={vehicle}/>
    </View>
  );
};

export default DetailsScreen;
