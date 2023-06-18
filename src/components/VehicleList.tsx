import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Vehicle} from '../types';
import importedVehiclesData from './Vehicles.json';
import MapView, {Marker} from 'react-native-maps';
import truckIcon from '../assets/truck.png';
import passengerIcon from '../assets/passenger.png';
import specialIcon from '../assets/special.png';
import {useTranslation} from 'react-i18next';
import { t } from 'i18next';

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

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

const vehiclesData: Vehicle[] = importedVehiclesData;

const VehicleList: React.FC = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData);
  const [showMap, setShowMap] = useState(true);
  const [filter, setFilter] = useState('');

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const filterVehicles = (category: string) => {
    setFilter(filter => (filter === category ? '' : category));
  };

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

  useEffect(() => {
    const filteredVehicles = !!filter
      ? vehiclesData.filter(vehicle => vehicle.category === filter)
      : vehiclesData;
    setVehicles(filteredVehicles);
  }, [filter]);

  const renderItem = ({item}: {item: Vehicle}) => (
    <TouchableOpacity onPress={() => handleVehiclePress(item)}>
      <View style={styles.vehicleContainer}>
        <Text>{item.name}</Text>
        <Text>{item.driver}</Text>
        <Text>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleVehiclePress = (vehicle: Vehicle) => {
    navigation.navigate('Details', {vehicle});
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.filter}>{t('homeScreen.filterByCategory')}</Text>
        <TouchableOpacity onPress={() => filterVehicles('Грузовой')}>
          <Text style={styles.filter1}>{t('homeScreen.cargo')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Пассажирский')}>
          <Text style={styles.filter1}>{t('homeScreen.passenger')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Спецтранспорт')}>
          <Text style={styles.filter1}>{t('homeScreen.specialTransport')}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.filter}>{t('homeScreen.showOnTheMap')}</Text>
        <Switch value={showMap} onValueChange={toggleMap} />
      </View>

      {showMap ? (
        <>
          <Text style={styles.filter}>{t('homeScreen.map')}</Text>
          <MapView style={styles.map}>
            {vehicles.map(vehicle => (
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
            ))}
          </MapView>
        </>
      ) : (
        <FlatList
          data={vehicles}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    fontSize: 100,
    fontWeight: 'bold',
  },
  vehicleContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 5
  },  
  filter: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    alignItems: 'center',
  },
  filter1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    alignItems: 'center',
  },
  map: {
    width: 400,
    height: 300,
    marginBottom: 16,
  },
  marker: {
    width: 20,
    height: 20,
  },
});

export default VehicleList;
