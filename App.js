import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerShown: false
      }}
      />
      <Drawer.Screen 
      name="Sobre" 
      component={Sobre} 
      options={{
        headerShown: false,
      }}
      />
      <Drawer.Screen 
      name="Contato" 
      component={Contato} 
      options={{
        headerShown: false,
      }}      
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
