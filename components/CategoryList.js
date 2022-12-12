import { StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryList = (navigation) => {
const categories = ['Trang chủ','Đồng hồ nam','Đồng hồ nữ']

const [categoryIndex, setCategoryIndex]= React.useState(0);
  return (
    <View style={styles.categoryContainer}>  
        {categories.map((item, index) =>(
            <TouchableOpacity key={index} onPress={()=> setCategoryIndex(index)}>
               <Text key={index}
             style={[styles.catgoryText,
            categoryIndex== index && styles.catgoryTextSelected]}>{item}</Text>
     
            </TouchableOpacity>
                ))}
    
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:10,
        justifyContent:'space-around'
    },
    catgoryText:{
        color:'grey',
        fontSize:15,
        fontWeight:'bold'
    },
    catgoryTextSelected:{
        color:'grey',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"grey"
    }
})