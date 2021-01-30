import React, { useContext,useState,useEffect } from 'react';
import { Platform,View, StyleSheet, Text ,FlatList,TouchableOpacity} from 'react-native';
import { Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const OrderScreen = ({ route, navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [overlayVisibile, setOverlayVisible] = useState(false);

    const { item } = route.params;
    const calculateTime = () => { 
  
    }
    const toggleOverlay = () => {
      setOverlayVisible(!overlayVisibile);
    };
    useEffect(() => {
      console.log('hi')
      const _getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        let location = await Location.watchPositionAsync(
          {accuracy:Location.Accuracy.High,distanceInterval :5},
          (loc) => {
            console.log(loc)
            setLatitude(loc.coords.latitude)
            setLongitude(loc.coords.longitude)
          }
        );
         
      }
      _getLocationAsync()
  }, [])
  
    let locationText = 'Waiting..';
    if (errorMsg) {
      locationText = errorMsg;
    } else if (location) {
      locationText = JSON.stringify(location);
    }
  return (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.items}</Text>
      <Text>{item.location}</Text>
      <Button
  title="Ready to Pickup!"
  onPress={() => calculateTime()}
/>
<Text>{`${latitude}, ${longitude}`}</Text>
<Overlay isVisible={overlayVisibile} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>

  );
};



export default OrderScreen;
