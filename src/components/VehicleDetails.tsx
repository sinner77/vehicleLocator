import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking, Image} from 'react-native';
import {Vehicle} from '../types';
import MapView, {Marker} from 'react-native-maps';
import truckIcon from '../assets/truck.png';
import passengerIcon from '../assets/passenger.png';
import specialIcon from '../assets/special.png';
import { t } from 'i18next';

const getMarkerIcon = (category: string) => {
  switch (category) {
    case 'Грузовой':
      return truckIcon;
    case 'Пассажирский':
      return passengerIcon;
    case 'Спецтранспорт':
      return specialIcon;
    default:
      return truckIcon;
  }
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
          <Text style={styles.buttonText}>{t('vehicleDetails.callButton')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>{t('vehicleDetails.messageButton')}</Text>
        </TouchableOpacity>
        <MapView style={styles.map}>
          <Marker
            key={vehicle.id}
            coordinate={{
              latitude: vehicle.latitude,
              longitude: vehicle.longitude,
            }}
            title={vehicle.name}
            description={vehicle.category}>
            <Image
              style={styles.marker}
              resizeMode='contain'
              source={getMarkerIcon(vehicle.category)}
            />
          </Marker>
        </MapView>
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
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  marker: {
    width: 20,
    height: 20,
  },
});

export default VehicleDetails;
