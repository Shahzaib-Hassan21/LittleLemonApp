import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
// import MenuItem from './components/MenuItem';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
    <View style={parentStyle.container}>
     <LittleLemonHeader/>
     {/* <MenuItem/> */}
     <WelcomeScreen/>
     </View>
     <View style={{backgroundColor: '#495E57'}}>
     <Footer/>
     </View>
     </>
    
  );
}

const parentStyle = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333333'
    // backgroundColor: '#495E57'
  }
})