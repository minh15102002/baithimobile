import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Entypo, Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import { useAuth } from '../providers/AuthProvider';




const SignUppage = ({ navigation }) =>
{
    const { signup } = useAuth();
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
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
        if (!emptyFormField())
        {
            signup(formValues);
            navigation.navigate("LoginPage")
        } else
        {
            setError("All fields are required!");
            setTimeout(() => setError(""), 2500);
        }
    }

    const handleChange = (name, values) => setFormValues({ ...formValues, [name]: values });
    
    return (
            <SafeAreaView style={{...styles.container, flex:1}}>
                <View style={styles.formContainer}>
                <View style={{height: 20, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{color: "red", textAlign: "center"}}>{error}</Text>
                    </View>
                    <Text style={{fontWeight:'bold', color:'gray'}}>Họ</Text>
                    <TextInput value={formValues.firstName} onChangeText={(values)=>handleChange("firstName",values)} 
                        placeholder="First Name" style={{...
                            styles.textInput, fontSize: 15, fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Tên</Text>
                    <TextInput value={formValues.lastName} onChangeText={(values)=>handleChange("lastName",values)}
                        placeholder="Last Name" style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Email</Text>
                    <TextInput value={formValues.email} onChangeText={(values)=>handleChange("email",values.toLowerCase())}
                        placeholder="duyminh@gmail.com" style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Mật khẩu</Text>
                    <TextInput value={formValues.password} onChangeText={(values)=>handleChange("password",values)} style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                    }} placeholder="**************" secureTextEntry={true} />
                     <Text style={{fontSize:15,marginLeft:20}}>Bằng cách đăng ký, bạn đồng ý với chúng tôi </Text>
                    <View style={{flexDirection:'row',}}>
                       
                        
                        <Text style={{textDecorationLine:'underline',fontSize:15.5,}}>Điều khoản và điều kiện</Text>
                        <Text style={{fontSize:15}}> và </Text>
                      <View>
                        <Text style={{textDecorationLine:'underline', paddingTop:2,fontSize:15.5}}>Chính sách bảo mật.</Text>
                    </View>
                    </View>
                    
                
                <TouchableOpacity onPress={handleSubmit} style={{ padding: 14, backgroundColor: 'black', flexDirection: 'row', marginTop:50, borderRadius:6, alignItems:'center', justifyContent:'space-between' }}>
                        <Fontisto name="locked" size={20} color="transparent" />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Đăng ký</Text>
                        <Fontisto name="locked" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("LoginPage")} style={{flex:1}}>
                    <View style={{ marginHorizontal: 20,padding:15, flexDirection: 'column', borderRadius: 4,borderColor:'#ccc',marginBottom:10, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Bạn đã có sẵn một tài khoản?</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1,
            // justifyContent: "space-between"
        },
        formContainer: {
            marginTop: 50,
            paddingHorizontal: 15,
        },
        textInput: {
            borderBottomWidth: 1,
            borderColor: "#ccc",
            borderRadius: 100,
            padding: 5,
            marginBottom: 35,
        },
});

export default SignUppage;
