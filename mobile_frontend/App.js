import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from './screens/OrdersScreen'
import { Provider as AuthProvider } from './context/AuthContext';


const Stack = createStackNavigator();

function App() {
  return (// name on Stack.Screen is the tab name
    <AuthProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrdersScreen">
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} /> 

      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>

  );
}

export default App;