import {StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateProduct from './src/screens/UpdateProduct';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          />
          <Stack.Screen 
          name="UpdateProduct" 
          component={UpdateProduct} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 35,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'blue',
  },
});
