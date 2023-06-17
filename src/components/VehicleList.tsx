import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Vehicle} from '../types';
import importedVehiclesData from './Vehicles.json';
import MapView, {Marker} from 'react-native-maps';

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
  const [showMap, setShowMap] = useState(false);
  const [filter, setFilter] = useState('');

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const filterVehicles = (category: string) => {
    setFilter(filter => (filter === category ? '' : category));
  };

  useEffect(() => {
    const filteredVehicles = !!filter? vehiclesData.filter(
      vehicle => vehicle.category === filter,
    ): vehiclesData;
    setVehicles(filteredVehicles);
  }, [filter]);

  const renderItem = ({item}: {item: Vehicle}) => (
    <TouchableOpacity onPress={() => handleVehiclePress(item)}>
      <View>
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
        <Text style={styles.filter}>Фильтр по категории:</Text>
        <TouchableOpacity onPress={() => filterVehicles('Грузовой')}>
          <Text style={styles.filter1}>Грузовой</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Пассажирский')}>
          <Text style={styles.filter1}>Пассажирский</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Спецтранспорт')}>
          <Text style={styles.filter1}>Спецтранспорт</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.filter}>Показать на карте:</Text>
        <Switch value={showMap} onValueChange={toggleMap} />
      </View>

      {showMap ? (
        <>
          <Text style={styles.filter}>Карта</Text>
          <MapView style={styles.map}></MapView>
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
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 100,
    fontWeight: 'bold',
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
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
});

export default VehicleList;
