import React                    from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import CustomDrawerContent from "./CustomDrawerContent";
import JobsStackNavigation from "./StackNavigators/JobsStackNavigation";
import LoginStackNavigation from "./StackNavigators/LoginStackNavigation";
function DrawerNavigation(props) {
    return (
        <View>
            <Text>LoginStackNavigation</Text>
        </View>
        /*<Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            {/!*<Drawer.Screen name="Home" component={JobsStackNavigation}/>
            <Drawer.Screen name="LoginStackNavigation" component={LoginStackNavigation}/>*!/}
        </Drawer.Navigator>*/
    );
}

export default DrawerNavigation;
