import React, {useState} from 'react';
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native'; 
    import Ionicons from 'react-native-vector-icons/Ionicons';
    import Toolbar from '../components/Toolbar';
const AddItems=props=> {
   
     
 

    
  return (
    <View style={{ flex: 1 }}>
        <Toolbar name={"AddItem"}  goBack={()=>props.navigation.goBack()} back={"ios-arrow-back"} better={"ios-search"} icon={"ios-ellipsis-vertical"}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10, margin:10}}>
         <View >
        
         <Text style={{fontSize:18,marginTop:10}}>Choose item(s)</Text>
         
        
         </View>
       
         <Text style={{fontSize:18,marginTop:10}}>Total(4)</Text>
        
        
    </View>
         <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'grey',padding:10,margin:10}}>
         <View >
        
         <Text style={{fontSize:18,marginTop:10}}>item Name</Text>
         
        
         </View>
         <Text style={{fontSize:18,marginTop:10}}>Q1/2</Text>
       
         <Text style={{fontSize:18,marginTop:10}}>Amount</Text>
        
        
    </View>






     <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
         <View >
        
         <Text style={{fontSize:18,marginTop:10}}>Shoes</Text>
         
         <Text style={{fontSize:18, color:'gray'}}>In Stock</Text>
         </View>
         <Text style={{fontSize:18,marginTop:10}}>1</Text>
         <View style={{flexDirection:'row',margin:10}}>
         <Text style={{fontSize:18,marginRight:10}}>Rs.34</Text>
         <Ionicons name={"ios-ellipsis-vertical"} color={"grey"} size={20}/>
         </View>
    </View>
    <View style={{width:'100%',height:1, backgroundColor:'grey', marginTop:10}}/>
    <View
            style={{
              width: '90%',
              margin:10,
              
              marginTop:10,
          borderRadius:10,borderWidth:1,
          borderColor:"#800080",
          padding:10,
              justifyContent: 'center',
              
            }}
          >
              <Text style={{textAlign:"center",color:"#800080"}}>+ Add New Customer</Text>
          </View>
    </View>
  );
}
export default AddItems
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
  


