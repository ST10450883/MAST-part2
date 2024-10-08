import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'ChristoffelMenu/screens/AddMenuItemScreen.js';
import AddMenuItemScreen from 'ChristoffelMenu/screens/AddMenuScreen';
import FilterMenuScreen from 'ChristoffelMenu/screens/FilterMenuScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Christoffel's Menu" }}>
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenuItem">
          {(props) => <AddMenuItemScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu">
          {(props) => <FilterMenuScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
