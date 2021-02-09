import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Text,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import CreateInvoiceSecond from '../screens/CreateInvoiceSecond';
import Colors from '../containers/Colors';
import SeleInvoice from '../screens/SaleInvoice';
import AddCustomerVendoor from '../screens/AddCustomerVendoor';
import AddItem from '../screens/AddItems';
import CreateInvoice from '../screens/CreateInvoice';
import Home from '../screens/Home'
//Define a global color for toolbar
global.backgroundColor = '#176abf';
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.green_color : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.green_color,
};





const AuthNavigator = createStackNavigator(
  {
    Home: Home,
    SeleInvoice:SeleInvoice,
    AddItem:AddItem,
 CreateInvoiceSecond:CreateInvoiceSecond,
    CreateInvoice:CreateInvoice,
    AddCustomerVendoor:AddCustomerVendoor,
  },
  {
    headerMode: null,
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const MainNavigator = createSwitchNavigator({
 AuthNavigator:AuthNavigator

});

export default createAppContainer(MainNavigator);
