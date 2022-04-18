import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from "./src/navigations/DrawerNavigation";

const navTheme = {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors, background: 'white',
    },
    StatusBar: {
        ...DefaultTheme, barStyle: 'light-content', backgroundColor: 'white'
    }
};

export default function App() {
  return (
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <DrawerNavigation/>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
