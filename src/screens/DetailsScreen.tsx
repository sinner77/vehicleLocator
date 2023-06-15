import React from 'react';
import {View, Text, Button} from 'react-native';
import VehicleDetails from '../components/VehicleDetails';

interface DetailsScreenProps {
  route: any;
  navigation: any; // типизируйте это в соответствии с вашими потребностями
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({route, navigation}) => {
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
