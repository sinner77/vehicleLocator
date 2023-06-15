export type RootStackParamList = {
  Home: undefined;
  Details: { vehicle: Vehicle };
};

export interface Vehicle {
  id: number;
  name: string;
  driver: string;
  category: string;
  phone: string;
}
