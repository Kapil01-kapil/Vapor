import React, {useState,useEffect} from 'react';
import { AppRegistry, FlatList, ScrollView, 
    StyleSheet, Text, View,Alert } from 'react-native'; 
    import Card from '../components/UI/Card';
    import {connect} from 'react-redux';
import apiCall from '../api/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/Toolbar';
const SaleVoice=props=> {
   
    const [data, setData] = useState('');
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
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
         <Toolbar name={"Sale Voice"}  goBack={()=>props.navigation.goBack()} back={"ios-arrow-back"} better={"ios-search"} icon={"ios-ellipsis-vertical"}/>
 <FlatList
        data={props.data}
        numColumns={2}
        renderItem={({item}) => (
            <Card style={styles.authContainer}>
            <ScrollView>
              <View style={{justifyContent:'space-between',flexDirection:"row"}}>
        <Text style={{fontWeight:'bold'}}>{item.customerName}</Text>
        <Text style={{color:'gray'}}>Invoice No  <Text style={{color:'black'}}>{item.invoiceNo}</Text> </Text>
              </View>
              <View style={{justifyContent:'space-between',flexDirection:"row"}}>
                  <Text  style={{fontWeight:'bold',borderRadius:25,backgroundColor:"green",padding:10,color:'white',marginTop:10}}>notes</Text>
        <Text style={{color:'gray',marginTop:10,}}>Data    <Text style={{color:'black',padding:10,}}>{item.date}</Text> </Text>
              </View>
              <View style={{backgroundColor:'gray', width:'100%',height:1,marginTop:15}}/>
              <View style={{justifyContent:'space-between',flexDirection:"row",marginTop:10}}>
                  <View>
                  <Text style={{color:'gray'}}>Total</Text>
        <Text>Rs.{item.totalAmount}</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray'}}>Receive</Text>
                  <Text>Rs.0</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray'}}>Balance Receive</Text>
        <Text>Rs.{item.receivedAmount}</Text>
                  </View>
                  
                  
              </View>
             
            </ScrollView>
          </Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

<Ionicons name={"ios-add-circle"} color={"#800080"} size={50} onPress={()=>props.navigation.navigate('CreateInvoice')} style={{position:"absolute", bottom:0,right:0,margin:20}}/>
     
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SaleVoice);
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
    authContainer: {
        width: '90%',
        maxWidth: 400,
        margin:20,
        maxHeight: 400,
        padding: 20,
        marginTop: 20,
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
  


