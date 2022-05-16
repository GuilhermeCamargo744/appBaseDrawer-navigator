import 'react-native-gesture-handler';

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Settings from './Screens/Settings';


const Drawer = createDrawerNavigator();

export default function App() {
	return (
	<NavigationContainer>
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Settings" component={Settings} />
		</Drawer.Navigator>
	</NavigationContainer>
	);
}
