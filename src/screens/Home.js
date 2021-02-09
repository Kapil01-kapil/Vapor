import React, {useState} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRegistry, FlatList,  TouchableOpacity,
    StyleSheet, Text, View,Alert } from 'react-native'; 
    import Toolbar from '../components/Toolbar';
const HomeScreen=props=> {
    // const [data, setData] = useState([
    //     {
    //       name: 'sales',
    //     },
    //     {
    //       name: 'Purchases',
    //     },
    //     {
    //       name: 'Stocks',
    //     },
    //     {
    //       name: 'Customser',
    //     },
    //     {
    //       name: 'Expenses',
    //     },
    //     ,
    //     {
    //       name: 'Transation',
    //     }
    //   ]);
    const [data, setData] = useState([  
        {key: 'Sales'},{key: 'Purchases'}, {key: 'Stocks'},{key: 'Customser'},  
        {key: 'Expenses'},{key: 'Transation'}   
    ])


    
  return (
    <View style={{ flex: 1}}>
        <Toolbar name={"Home"} back={"ios-menu"} better={"ios-search"} icon={"ios-notifications-outline"}/>
      <FlatList  
      numColumns={2}
                    data={data}  
                    renderItem={({item}) =>  
                    <TouchableOpacity style={styles.circle} onPress={()=>props.navigation.navigate('SeleInvoice')}>
                         <Text style={styles.item}>{item.key}</Text>
                        </TouchableOpacity>

                       }  
                    
                />  
    </View>
  );
}
export default HomeScreen
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
       
    },  
    item: {  
       

        fontSize: 15,  
       color:'white',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        margin:10,
      
    },  
    circle:{
        
        padding: 15,  
        fontSize: 18,  
        height: 130,  
        width:130,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        margin:30,
        borderRadius:130/2 
    }
})  
  


