import React from 'react';
import { View, Text, Button } from 'react-native';

interface DetailsScreenProps {
  navigation: any; // типизируйте это в соответствии с вашими потребностями
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default DetailsScreen;
