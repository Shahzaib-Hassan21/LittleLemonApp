import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItem from './components/MenuItem';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <View style={parentStyle.container}>
          <LittleLemonHeader />
          <Tab.Navigator screenOptions={({ route })=>({
            tabBarIcon :() =>{
              

              if (route.name === 'Welcome') {
              
                return <AntDesign name="menufold" size={24} color="black" />
              } else if (route.name === 'Login'){
                
              }
              
              return <AntDesign name="login" size={24} color="black" />
              // <Ionicons name={iconName} size={size}/>
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInActiveTintColor: 'gray',
          })}
          initialRouteName='Login'>
            <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
          </Tab.Navigator>
        </View>
        <View style={parentStyle.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const parentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
    // backgroundColor: '#495E57'
  },
  footerContainer: {
    backgroundColor: '#333333'
  }
})