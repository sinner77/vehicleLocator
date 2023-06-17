import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, FlatList, Switch, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Vehicle} from '../types';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const vehiclesData: Vehicle[] = [
  {
    id: 1,
    name: 'ТС #1',
    driver: 'Водитель 1',
    category: 'Грузовой',
    phone: '+123',
  },
  {
    id: 2,
    name: 'ТС #2',
    driver: 'Водитель 2',
    category: 'Пассажирский',
    phone: '+456',
  },
  {
    id: 3,
    name: 'ТС #3',
    driver: 'Водитель 3',
    category: 'Спецтранспорт',
    phone: '+789',
  },
];

const VehicleList: React.FC = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const filterVehicles = (category: string) => {
    const filteredVehicles = vehiclesData.filter(
      vehicle => vehicle.category === category,
    );
    setVehicles(filteredVehicles);
  };

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
    // Обработка нажатия на элемент списка ТС
    // Навигация на экран ТС или выполнение других действий
    navigation.navigate('Details', {vehicle});
  };

  return (
    <View>
      <View>
        <Text>Фильтр по категории:</Text>
        <TouchableOpacity onPress={() => filterVehicles('Грузовой')}>
          <Text>Грузовой</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Пассажирский')}>
          <Text>Пассажирский</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterVehicles('Спецтранспорт')}>
          <Text>Спецтранспорт</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Показать на карте:</Text>
        <Switch value={showMap} onValueChange={toggleMap} />
      </View>

      {showMap ? (
        // Вставьте код для отображения карты
        <Text>Карта</Text>
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

export default VehicleList;
