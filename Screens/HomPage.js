import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, AntDesign,EvilIcons } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList';
import Appheader from '../components/Appheader';
import SwipSlider from '../components/Swipslider';


const width = (Dimensions.get("screen").width/2) - 15

const CardItem =({cardItemList, onPressed}) =>{
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    setIsFavorite(cardItemList.favorite);
  }, [cardItemList])

  return( 
   <TouchableOpacity onPress={onPressed}>
     <View style={styles.cardDesign}>
         <View style={{height: 250, alignContent: 'center'}}>
           <Image style={{resizeMode: 'contain', width: "100%", maxHeight: "100%"}} source={cardItemList.images.imageMain} />
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}> 

           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
             <Text style={{fontWeight: 'bold'}}>
               ${cardItemList.price}
             </Text>
           </View>
           <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} >   
             <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={20} color={isFavorite ? 'rgb(426,42,68)' : '#000'} />
           </TouchableOpacity>
         
         </View>
         <Text style={{fontSize: 13.5, fontFamily: 'Montserrat_600SemiBold', marginTop: 25,color: 'rgb(70,70,70)', marginBottom: 10}}>
           {cardItemList.name}
         </Text>
       
     </View>
    </TouchableOpacity>
  );
 };

const HomePage = ({navigation}) => {
  const [cardItemList1, setNftData] = useState(cardItemList);
// tim kiem
  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(cardItemList);
    }

    const filteredData = cardItemList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(cardItemList);
    } else {
      setNftData(filteredData);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{backgroundColor: "#fff"}}>
        <Appheader onSearch={handleSearch} navigator={navigation.navigate} />
      </SafeAreaView>
      <ScrollView>
<SwipSlider/>
      <FlatList 
          style={{paddingHorizontal: 5, paddingBottom: 100, flex: 1}} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2} 
          data={cardItemList1} 
          renderItem={({item}) => <CardItem cardItemList={item} onPressed={()=>navigation.navigate("SinglePage", item)} />} />
</ScrollView>
{/* <Text></Text> */}
{/* <View style={{height:50,width:"100%",backgroundColor:"blue"}}>
  <View>
    <TouchableOpacity onPress={()=> user ? navigator("MyAccount") : navigator('LoginPage')}>
        <AntDesign name="user" size={24} color="white" style={{ marginRight: 10 }} />
    </TouchableOpacity></View>
  <View></View>
  <View></View>
</View> */}
   </View>

  )
}

const styles = StyleSheet.create({
  rectangleView: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardDesign: {
    backgroundColor: '#fff',
    borderRadius:6,
    borderWidth: 1,
    borderColor: 'rgb(234,231,233)',
    width,
    marginBottom: 20,
    marginHorizontal: 5,
    padding: 15,
  }
});

export default HomePage;