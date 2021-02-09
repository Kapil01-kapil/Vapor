import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  Button,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../containers/Colors';
import Card from '../components/UI/Card';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.toolbar}>
      <Icon
        name={props.back}
        size={30}
        style={{fontSize: 30, color: 'red', marginLeft: 10}}
        onPress={props.goBack}
      />
     <Text  style={{ justifyContent: 'center',
        alignItems: 'center',
      
        color:'red',
  fontSize:18}}>{props.name}</Text>
    
      <TouchableOpacity onPress={props.onSelect} useForeground>
        <View style={{flexDirection:'row'}}>
        <Icon
          name={props.better}
          style={{fontSize: 30, color:'red', marginLeft: 10}}
          onPress={props.gobetter}
        />
        <Icon
          name={props.icon}
          style={{fontSize: 30, color:'red', marginLeft: 10}}
          onPress={props.goIcon}
        />
        
        </View>
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    
    backgroundColor:'white',
 padding:5,
    width: '100%',
justifyContent:'space-between',
height:45,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default withNavigation(ProductItem);
