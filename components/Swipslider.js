
import React, { Component, useState } from 'react'
import { Text, StyleSheet,TextInput,TouchableOpacity, View, Dimensions, ScrollView, Image } from 'react-native'


const images = [
    'https://cdn3.dhht.vn/wp-content/uploads/2021/05/banner-trang-chu-doxa-grandemetre.jpg',
    'https://bizweb.dktcdn.net/100/431/144/themes/826579/assets/slider_1.jpg?1657382233794',
    'https://donghotuanhung.com/wp-content/uploads/2022/05/Banner-Bonest-Gatti.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Swipslider =()=> {
    const [imgActive, setimgActive] = useState(0);
    onchange = (nativeEvent) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOfffset.x / nativeEvent.layoutMeasurement.width);
            if(slide!=imgActive){
                setimgActive(slide);
            }
        }
        
    }
  
  return (
        
    <View style={styles.container}>
             <View style={styles.wrap}>
                <ScrollView 
                // onScroll={({nativeEvent}) =>onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}>
                    {
                        images.map((e, index) =>
                        <Image
                        key={e}
                        resizeMode='stretch'
                        style={styles.wrap}
                        source={{uri:e}}
                        />)
                    }

                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                        <Text
                            key={e}
                            style={imgActive ==index ? styles.dotActive : styles.dot}
                        >●</Text>
                        )
                    }
                    
                </View>
             </View>
    </View>
    

)

  
}

const styles = StyleSheet.create({
  container: {
//   flex: 1,
//   backgroundColor: '#e3dee3',
},
wrap:{
    width:WIDTH,
    height: HEIGHT * 0.3
},
wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
},
dotActive:{
    margin:3,
    color:'black'
},
dot:{
    margin:3,
    color:'white'
}


})
export default Swipslider;
