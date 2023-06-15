import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {Vehicle} from '../types';

const VehicleDetails: React.FC<{vehicle: Vehicle}> = ({vehicle}) => {
  const handleCallDriver = () => {
    // Открыть приложение для звонка с номером водителя
    Linking.openURL(`tel:${vehicle.phone}`);
  };

  const handleSendMessage = () => {
    // Открыть приложение WhatsApp с чатом водителя и предустановленным сообщением
    const message =
      'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    Linking.openURL(
      `whatsapp://send?text=${encodeURIComponent(message)}&phone=${
        vehicle.phone
      }`,
    );
  };

  return (
    <View>
      <Text>{vehicle.name}</Text>
      <Text>{vehicle.driver}</Text>
      <TouchableOpacity onPress={() => handleSendMessage()}>
        <Text>{vehicle.phone}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCallDriver()}>
        <Text>{vehicle.phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VehicleDetails;
