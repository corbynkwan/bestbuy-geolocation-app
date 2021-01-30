import React, { useContext,useState,useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import axios from 'axios';

const SigninScreen = () => {
  const { orders, setOrders } = useState({something:5});
    useEffect(() => {
      axios.get('https://bestbuy-database-default-rtdb.firebaseio.com/orders.json')
      .then(res => {
        console.log("got it")
        const orders = res.data;
        setOrders(orders)
      })
      .catch( error => {
        console.log(error)
    } );
  },[]);

  return (
    <View style={styles.container}>
      <Text></Text>

    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
