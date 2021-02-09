import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  TextInput,
  Text,
  CheckBox,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';
import apiCall from '../api/Api';

import Input from '../components/UI/Input';
import Card from '../components/UI/Card';
import Toolbar from '../components/Toolbar';

import AsyncStorage from '@react-native-community/async-storage';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const STORAGE_KEY = '@save_age';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const CreateInvoice = props => {

  const [error, setError] = useState();
  const [datePickerValue, setdatePickerValue] = useState("2016-05-15");


 


  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      MobileNo: '',
      Invoice:'',
      Total:'',
      Received:'',
      Payment:'',
      Customer:''
    },
    inputValidities: {
      MobileNo: false,
      Invoice:false,
      Total:false,
      Received:false,
      Payment:false,
      Customer:false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);





  
  
  const getData = async () => {
    axios
      .post('http://vapor-invoice.herokuapp.com/api/invoice/create-invoice', 
        {
          date: datePickerValue,
          invoiceNo: formState.inputValues.Invoice,
          customerId: 4,
          sellerId:1,
          totalAmount: formState.inputValues.Total,
          receivedAmount: formState.inputValues.Received,
          paymentMode: formState.inputValues.Payment,
          chequeNo:"CHECK000001",
          notes: formState.inputValues.Customer
         }
      )
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("jfdgkjg")
          console.log(res.status);
        
          props.navigation.navigate('SeleInvoice')
        } else if (res.status === 500) {
          Toast.show('Please enter a valid create number');
        } else {
          Toast.show('Login failed ');
        }
      })
      .catch(function(error) {
        Toast.show('result:' + error);
      });
  };
 

  const authHandler = async () => {
    let action;
    if (formState.inputValues.Invoice == '') {
      setError(null);
      setIsLoading(true);
     console.log(Invoice);
 
    } else if( formState.inputValues.Total == ''){
      setError(null);
      setIsLoading(true);
     console.log(Total);
    }
    else if( formState.inputValues.Received == ''){
      setError(null);
      setIsLoading(true);
     console.log(Received);
    }
    else if( formState.inputValues.Payment == ''){
      setError(null);
      setIsLoading(true);
     console.log(Payment);
    
    }
    else if( formState.inputValues.Customer == ''){
      setError(null);
      setIsLoading(true);
     console.log(Payment);
    }
    
    
    
    else {
      try {
        console.log("data")
      getData();
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <View style={{flex:1}}>
       <Toolbar name={"Create Invoice"}  goBack={()=>props.navigation.goBack()} back={"ios-arrow-back"} better={"ios-search"} icon={"ios-ellipsis-vertical"}/>

    <ScrollView>
    <KeyboardAvoidingView keyboardVerticalOffset={10} style={styles.screen}>

      <View style={styles.gradient}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         
      <DatePicker
        style={{width: '35%', marginTop:35, marginRight:80}}
        date={datePickerValue}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2010-05-01"
        maxDate="2032-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date)=> setdatePickerValue(date)}
      />
       <View style={{width:'30%',}}>
        <Input
              id="Invoice"
              label="Invoice:"
              keyboardType="number-pad"
              required
             
              autoCapitalize="none"
              errorText="Please enter a valid mobile number."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            </View>
      </View>
        <View style={styles.authContainer}>
         
           
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('AddCustomerVendoor')}
            style={{
              width: '100%',
              
              
          borderRadius:10,borderWidth:1,
          borderColor:"#800080",
          padding:10,
              justifyContent: 'center',
              
            }}
          >
              <Text style={{textAlign:"center",color:"#800080"}}>+ Add Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              marginTop:20,
              
          borderRadius:10,borderWidth:1,
          borderColor:"#800080",
          padding:10,
              justifyContent: 'center',
              
            }}
            onPress={()=>props.navigation.navigate('AddItem')}
          >
              <Text style={{textAlign:"center",color:"#800080"}}>+ Add items(Option)</Text>
          </TouchableOpacity>
            <Input
              id="Total"
              label="Total:"
              keyboardType="number-pad"
              required
              
              autoCapitalize="none"
              errorText="Please enter a valid Total ."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
              <Input
              id="Received"
              label="Received:"
              keyboardType="number-pad"
              required
            
              autoCapitalize="none"
              errorText="Please enter a valid Received number."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
              <Input
              id="Payment"
              label="Payment Mode:"
              keyboardType="number-pad"
              required
          
              autoCapitalize="none"
              errorText="Please enter a valid Payment number."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
              <Input
              id="Customer"
              label="Customer Note:"
             
              required
            
              autoCapitalize="none"
              errorText="Please enter a valid Customer node."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.checkboxContainer}>
            
              <Text style={styles.label}>
               Balance: Rs.0.0
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20,
    justifyContent:'space-between'}}>
          <TouchableOpacity
          onPress={authHandler}
            style={{
              width: '35%',
              
              
          borderRadius:10,borderWidth:1,
          borderColor:"#800080",
          padding:10,
              justifyContent: 'center',
              margin: 10,
            }}
          >
              <Text style={{textAlign:"center"}}>Send</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
           onPress={authHandler}
            style={{
                width: '35%',
              backgroundColor:"#800080",
              
                borderRadius:10,borderWidth:1,
                borderColor:"#800080",
                padding:10,
                    justifyContent: 'center',
                    margin: 10,
            }}
          >
              <Text style={{color:'white',textAlign:"center"}}>Save</Text>
          </TouchableOpacity>
        </View>
        
        </View>
       
       
       
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  authContainer: {
    width: '90%',
    maxWidth: 400,
   
    padding: 20,
    marginTop: 20,
  },

  buttonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  
  },
  label: {
    margin: 8,
   
    fontSize: 13,
  },
});

const mapDispatchToProps = (dispatch) => ({
  apiCall: (url) => dispatch(apiCall(url)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateInvoice);
