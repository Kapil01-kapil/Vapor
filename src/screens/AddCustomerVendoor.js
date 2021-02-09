import React, {useState,useEffect} from 'react';
import { AppRegistry, FlatList, ScrollView, TouchableOpacity,

    ActivityIndicator,
    StyleSheet, Text, View,Alert } from 'react-native'; 
    import Card from '../components/UI/Card';
    import {connect} from 'react-redux';
import apiCall from '../api/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/Toolbar';
import { RadioButton } from 'react-native-paper';
const AddCustomerVendoor=props=> {
  const [isLoading, setIsLoading] = useState(true);
    const [checked, setChecked] = React.useState('first');
    const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    props
      .apiCall('http://vapor-invoice.herokuapp.com/api/invoice/get-all-invoice?sellerId=1')
      .then(() => {
        const data = props.data;
        console.log(data);
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    
  return (
    <View style={{ flex: 1 }}>
         <Toolbar name={"AddCustomerVendoor"}  goBack={()=>props.navigation.goBack()} back={"ios-arrow-back"} better={"ios-search"} icon={"ios-ellipsis-vertical"}/>
    

      
          
           
            <FlatList
        data={props.data}
        renderItem={({item}) => (
            <TouchableOpacity  onPress ={() => props.navigation.navigate('CreateInvoiceSecond', {item})}>
                  <View >
           
     <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
   
   <View style={{flexDirection:'row'}}>
       <View style={{padding:10}}>
           
       <RadioButton
       color={'#800080'}
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
       </View>
  
   <Ionicons name={"ios-arrow-up-circle"} color={"#800080"} size={50}/>
   <Text style={{fontSize:18,marginTop:10}}>{item.customerName}</Text>
   </View>
  
   <View style={{flexDirection:'row',margin:10}}>
   <Text style={{fontSize:18,marginRight:10}}>Rs.{item.totalAmount}</Text>
   <Ionicons name={"ios-ellipsis-vertical"} color={"grey"} size={20}/>
   </View>
</View>
<View style={{width:'90%',height:1, backgroundColor:'grey', margin:10}}/>
          </View>
      
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />





    
    
    <TouchableOpacity
            style={{
              width: '90%',
              
              marginTop:10,
          borderRadius:10,borderWidth:1,
          margin:10,
          borderColor:"#800080",
          padding:10,
              justifyContent: 'center',
              
            }}
          >
              <Text style={{textAlign:"center",color:"#800080"}}>+ Add New Item</Text>
          </TouchableOpacity>
    </View>
  );
        
}
const mapDispatchToProps = (dispatch) => ({
    apiCall: (url) => dispatch(apiCall(url)),
  });
  
  const mapStateToProps = (state) => ({
    data: state.apiReducer.data,
    error: state.apiReducer.error,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddCustomerVendoor);
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
  


