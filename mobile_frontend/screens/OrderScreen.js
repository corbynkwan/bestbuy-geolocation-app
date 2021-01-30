import React, { useContext,useState,useEffect } from 'react';
import { Platform,View, StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import { Button, Overlay,Text,Input} from 'react-native-elements';
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
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [parkingLot, setParkingLot] = useState(null);
  const [description, setDescription] = useState(null);
    const { item } = route.params;
    const [ startTracking,setStartTracking ] = useState(false);

    const calculateTime = () => { 
      
    }

    useEffect(() => {
      console.log('hi')
      const _getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        let location = await Location.watchPositionAsync(
          {accuracy:Location.Accuracy.High,distanceInterval :10000},
          (loc) => {
            setLatitude(loc.coords.latitude)
            setLongitude(loc.coords.longitude)
          }
        );
         
      }
      if(startTracking) {
      _getLocationAsync()
      }
  }, [startTracking])
  useEffect(() => {
    
    const calculateDistance = async () => {
      if(longitude !=undefined && longitude !=null && latitude !=undefined && latitude !=null && item.location!=undefined && item.items!=undefined && item.id!=undefined){
        console.log({latitude,longitude,location:item.location,items:item.items,id:item.id})
      await axios.post(`http://1bb1f959b0e1.ngrok.io/calculate`,{latitude,longitude:longitude,location:item.location,id:item.id,items:item.items});
      }
    }
    calculateDistance();
 }, [latitude,longitude]);
  
    let locationText = 'Waiting..';
    if (errorMsg) {
      locationText = errorMsg;
    } else if (location) {
      locationText = JSON.stringify(location);
    }
  return (
    <View>
      <Text h4>{item.id}</Text>
      <Text h4>{item.items}</Text>
      <Text h4>{item.location}</Text>
      <Button
  title="On My Way!"
  onPress={() => setStartTracking(true)
  
   }
/>

<Text h1>Or enter how long it will take you to arrive here!</Text>
<Input
   placeholder="Number"

   onChangeText={value => setDuration(value)}
  />

<Button
  title="I'm coming over!"
  onPress={async() => {
    console.log({minutes: parseInt(duration),location:item.location,id:item.id,items:item.items})
    await axios.post(`http://1bb1f959b0e1.ngrok.io/sendEmail`,{mins: parseInt(duration),location:item.location,id:item.id,items:item.items});
  }
  
   }
   
/>
<Text h1>Tell us what parking lot you are in!</Text>
<Input
   placeholder="Parking Lot Number"
   onChangeText={value => setParkingLot(value)}
  />
  <Text h1>Tell us a description of your car (optional)</Text>
  <Input
   placeholder="Parking Lot Number"
   onChangeText={value => setDescription(value)}
  />
  <Button
  title="I'm Here!"
  onPress={async() => {
    console.log({id:item.id,parkingLot,description})
    await axios.post(`http://1bb1f959b0e1.ngrok.io/sendParkingInfo`,{id:item.id,parkingLot,description});
  }
  
   }
   
/>

<Text h1>{`${latitude}, ${longitude}`}</Text>

    </View>

  );
};



export default OrderScreen;
