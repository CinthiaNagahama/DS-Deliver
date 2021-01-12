import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Header from '../Header';
import OrderCard from '../OrderCard'
import { fetchOrders } from '../api';
import { Order } from '../types';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);

    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  }
  
  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const navigation = useNavigation();
  const handleOnPress = (order : Order) => {
    navigation.navigate('OrderDetails', { order });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingAnimationContainer}>
            <LottieView 
              style={styles.loadingAnimation}
              source={require('./loadingAnimation.json')}
              autoPlay
              loop
            />
          </View>
        ) : (
          orders.map(order => (
            <TouchableWithoutFeedback 
              key={order.id} 
              onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  loadingAnimationContainer : {
    marginTop: '50%'
  },
  loadingAnimation: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
  }
});