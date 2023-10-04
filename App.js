import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItem from './components/MenuItem';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen'
export default function App() {
  return (
    <>
    <View style={parentStyle.container}>
     <LittleLemonHeader/>
     {/* <MenuItem/> */}
     <WelcomeScreen/>
     {/* <LoginScreen/> */}
     </View>
     <View style={parentStyle.footerContainer}>
     <LittleLemonFooter/>
     </View>
     </>
    
  );
}

const parentStyle = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333333'
    // backgroundColor: '#495E57'
  },
  footerContainer:{
    backgroundColor: '#333333'
  }
})