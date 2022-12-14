import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { users } from '../Consts/cardItemList';
import { useAuth } from '../providers/AuthProvider';


const Loginpage = ({ navigation }) =>
{
  const { login } = useAuth();
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const emptyFormField = () =>
    {
        let output = false;
        Object.values(formValues).forEach(value =>
        {
            if (value.length < 1) output = true;
        });
        return output;
    }

  const handleSubmit = () =>
  {
    let exists = false;

    if (!emptyFormField())
    {
      const response = login(formValues);
      if (response)
      {
        navigation.navigate("MyAccount");
      } else
      {
        setError("Tài khoản không tồn tại");
        setTimeout(() => setError(""), 2500);
      }
    }
  }

  const handleChange = (name, value) => setFormValues({ ...formValues, [name]: value });

    return (
        <SafeAreaView style={[styles.container, {flex: 1}]}>
            
        <View style={{ padding: 10, borderBottomWidth: 1, flex: 1, borderBottomColor: '#eee' }}>
          <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Entypo name="chevron-thin-left" size={27} color="#777" />
                </TouchableOpacity>
            
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'bold', fontSize:19, fontFamily: 'Poppins_400Regular'}}>My Account</Text>
                </View>
            </View>
                  <View style={styles.container}>
                          <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Text style={{...styles.title, fontFamily:'Poppins_200ExtraLight',letterSpacing:-1.6 }}>Duyminh</Text>
                            <Text style={{...styles.title, fontFamily:'Poppins_900Black',letterSpacing:-1.8 }}>WATCH</Text>
                          </View>
            <View style={[styles.formContainer]}>
              <View style={{paddingBottom:20}}>
                <Text style={{color:'red', textAlign:'center'}}>{ error }</Text>
              </View>
              <View style={[styles.inputShadow, styles.textInputArea, { backgroundColor: "#fff" }]}>
                <View style={{paddingHorizontal:12, paddingVertical: 10,}}>
                    <Text style={{fontWeight: "bold", color: "#777"}}>Email</Text>
                    <TextInput value={formValues.email} onChangeText={(value)=> handleChange("email", value.toLowerCase())}
                        placeholder="duyminh@gmail.com" style={{ paddingVertical: 10, borderBottomWidth:0.3, borderBottomColor:'#ccc' }} ></TextInput>
                </View>
                <View style={{paddingHorizontal:12, paddingVertical: 10,}}>
                    <Text style={{fontWeight: "bold", color: "#777"}}>Mật khẩu</Text>
                    <TextInput secureTextEntry={true} value={formValues.password} onChangeText={(value)=> handleChange("password", value)}
                        placeholder="************" style={{paddingVertical: 10}}></TextInput>
                </View>
                  </View>
              </View>
            <TouchableOpacity onPress={handleSubmit}>
                <View style={[styles.button, { marginHorizontal:60 }]}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </View>
            </TouchableOpacity>
            <View style={{paddingTop:20, alignItems:'center'}}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>Quên mật khẩu</Text>
              <View style={{paddingTop:25, flexDirection:'row'}}>
                <Text style={{ fontWeight: 'bold', color: 'gray', fontSize:14 }}>Chưa có tài khoản </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUpPage")}>
                  <Text style={{ fontWeight: 'bold', color: 'gray', fontSize:14,textDecorationLine:'underline', }}>Tạo tài khoản</Text>
                </TouchableWithoutFeedback>
                
              </View>
              
            </View>
            </View>
            
        </View>
        
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
    paddingHorizontal:10,
    height: "100%",
      paddingTop: 40,
    backgroundColor: "#fff"
    },
    title: {
      fontSize: 24,
    },
    formContainer: {
      marginTop: 50,
      marginBottom: 40,
    },
    textInputArea: {
      borderRadius: 5,
    },
    inputShadow: {
      shadowColor: '#dfdfdf',
      shadowOpacity: 0.70,
      shadowRadius: 21,
      shadowOffset: {
        width: 2, height: 2
      }
    },
    button: {
      padding: 15,
      marginTop:10,
      borderRadius: 5,
      backgroundColor: "black",
      color: "white",
      justifyContent: "center",
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
    }
  });

export default Loginpage;
