import React from 'react';
import { View, Text, Button } from 'react-native';

interface HomeScreenProps {
  navigation: any; // типизируйте это в соответствии с вашими потребностями
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
