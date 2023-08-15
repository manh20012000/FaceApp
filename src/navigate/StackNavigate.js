import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import SeeDeTail from '../Home/TrangChu/SeeDeTail';
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator style={{
      flex: 1
    }}>
      <Stack.Screen name="SeeDeTail" component={SeeDeTail} />
    </Stack.Navigator>
  );
}
export default MyStack;