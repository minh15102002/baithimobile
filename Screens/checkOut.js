import React, { useMemo } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { users } from '../Consts/cardItemList';
import { useBag } from '../providers/bagProvider';


const width = (Dimensions.get("screen").width / 2) - 15


const Checkout = ({ navigation }) =>
{
    const { bag } = useBag();
    const shipping = 6;
    const tax = 3;
    const subtotal = useMemo(() =>
    {
        let output = 0;
        bag.forEach(item => output += item.price);
        return output;
    }, [bag])

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row', marginBottom:25, paddingHorizontal:10}}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Entypo name="chevron-thin-left" size={25} color="#777" />
                    </TouchableOpacity >
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Text style={{fontSize:18, fontWeight:'600'}}>Checkout</Text>
                    </View>
                </View>
            <ScrollView style={{paddingHorizontal:10}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row', marginBottom:15 }}>
                    {/* <Text style={{color:'rgb(123,130,152)', fontWeight:'500'}}>signed in as </Text> */}
                    <Text style={{fontWeight:'700',letterSpacing:0.5}}>{users.email}</Text>
                </View>
                <View style={[ { }]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign:'center', marginVertical:10 }}>
                            Giao hàng
                        </Text>
                    <View style={[styles.inputShadow, { padding: 10, backgroundColor: 'white', borderRadius: 6 }]}>
                        <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>First Name</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Last Name</Text>
                                </View>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#ccc', paddingHorizontal:5}}>
                            <View style={{ justifyContent:'flex-start', width,}}>
                                <TextInput placeholder="First Name" style={{ paddingVertical: 10 }} >{users.firstName }</TextInput>
                            </View>

                            <View style={{ borderLeftWidth: 0.5, borderLeftColor: '#ccc', justifyContent: 'flex-end' }}>
                                <TextInput placeholder="Last Name" style={{ paddingVertical: 10, paddingLeft: 10, width }} >{users.lastName }</TextInput>
                        </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{borderBottomWidth: 0.5, borderBottomColor: '#ccc' }}>
                                <Text style={{color:'rgb(123,130,152)', fontWeight:'600'}}>Address</Text>
                                <TextInput placeholder="Street Address" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>City</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>State</Text>
                                </View>
                                <View style={{flexDirection:'row', borderBottomWidth:0.5, borderBottomColor: '#ccc' }}>
                                    <TextInput placeholder="City" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>   
                                    <TextInput placeholder="State" style={{ paddingVertical: 10, paddingLeft: 10, width, borderLeftWidth: 0.5, borderLeftColor: '#ccc' }}></TextInput>
                                </View>
                                
                            <View style={{ marginTop: 10, borderBottomWidth: 0.5, borderBottomColor: '#ccc' }}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Postal</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Country</Text>
                                </View>
                                <View style={{flexDirection:'row',borderBottomWidth: 0.5, borderBottomColor: '#ccc'}}>
                                    <TextInput placeholder="ZIP code" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>   
                                    <TextInput placeholder="Country" style={{ paddingVertical: 10, paddingLeft: 10, width, borderLeftWidth: 0.5, borderLeftColor: '#ccc' }}></TextInput>
                                    </View>
                                <View style={{ marginTop:10 }}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600'}}>Phone Number</Text>
                                    <TextInput placeholder="+ (94)88*****000" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>
                                </View>
                            </View>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.inputShadow,[{marginTop:15, paddingVertical: 20,backgroundColor:'#fff',paddingHorizontal:10 }]}> */}
                    <View style={styles.inputShadow}> 
                        <View>
                            <Text style={{fontSize:18, fontWeight:'bold'}}>Summary</Text>
                        </View>
                        <View style={{marginTop:10, flexDirection:'row'}}>
                            <Text style={{ fontWeight: '600', fontSize: 15 }}>Subtotal</Text>
                             <View style={{alignItems:'flex-end', flex:1}}>
                                <Text>${subtotal.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:5, flexDirection:'row'}}>
                            <Text style={{ fontWeight: '600', fontSize: 15 }}>Shipping</Text>
                            <View style={{alignItems:'flex-end', flex:1}}>
                                <Text>${shipping.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:5, flexDirection:'row'}}>
                            <Text style={{ fontWeight: '600', fontSize: 15 }}>Tax</Text>
                            <View style={{alignItems:'flex-end', flex:1}}>
                                <Text>${tax.toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 15, flex: 1 }}>{bag.length} item(s)</Text>
                            <View style={{ alignItems: 'flex-end', flexDirection: "row" }}>
                                <Text style={{ fontWeight: '600', fontSize: 15, marginRight: 10, color: "#777" }}>Total</Text>
                                <Text style={{fontSize: 18, fontWeight: "bold"}}>${(subtotal + shipping + tax).toFixed(2)}</Text>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
                            {bag.map(item => <Image source={item.image} style={{resizeMode: "contain", width: 70, height: 100, marginRight: 20, borderWidth: 1, borderColor: "#ddd", borderRadius: 10}}/>)}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.continuePayShadow,{justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:20}]}>
                <TouchableOpacity style={{backgroundColor:'#000', paddingHorizontal:30, paddingVertical: 10, borderRadius: 4}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#fff'}}>Continue to Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    inputShadow: {
        shadowColor: '#dfdfdf',
        shadowOpacity: 0.70,
        shadowRadius: 21,
        shadowOffset: {
            width: 2, height: 2,
        },
        marginTop:15, paddingVertical: 20,backgroundColor:'#fff',paddingHorizontal:10
    },
    continuePayShadow: {
        shadowColor: '#dfdfdf',
        shadowOpacity: 0.70,
        shadowRadius: 7,
        shadowOffset: {
            width: 0, height: -7,
        }
    },
})

export default Checkout;