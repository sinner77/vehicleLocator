import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {Vehicle} from '../types';
import MapView, {Marker} from 'react-native-maps';

const driverLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const startingPosition = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 5.0922,
  longitudeDelta: 5.0421,
};

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
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{vehicle.name}</Text>
        <Text style={styles.category}>{vehicle.category}</Text>
        <Text style={styles.driverName}>{vehicle.driver}</Text>
        <Text style={styles.phone}>{vehicle.phone}</Text>
        <TouchableOpacity style={styles.button} onPress={handleCallDriver}>
          <Text style={styles.buttonText}>Позвонить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Написать</Text>
        </TouchableOpacity>
        <MapView style={styles.map}></MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  map: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  phone: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignItems: 'center',
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  driverName: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'green',
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

export default VehicleDetails;
