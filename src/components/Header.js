import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,StatusBar} from 'react-native';
import { Entypo,AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Constants from 'expo-constants'
import {useNavigation,useTheme} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'

export default function Headers(){

    const navigationer=useNavigation();
    const {colors}=useTheme();
    const mycolor = colors.iconColor
    const dispatch=useDispatch()
    const current=useSelector(state=>{
        return state.enabledarkmode
    })
    if(current){<StatusBar barStyle="black" backgroundColor="white" />}
    return(
        <View style={{...styles.head,backgroundColor:colors.headerColor}}>
            <View style={{flexDirection:"row",paddingTop:2}}>
                <Entypo style={{paddingLeft:10}} name="youtube" size={38} color="red" />
                <Text style={{fontSize:19,paddingLeft:10,paddingTop:6,fontWeight:"bold",color:mycolor}}>Youtube</Text>
            </View>
            <View style={{flexDirection:"row",paddingLeft:65,paddingTop:7}}>
                <TouchableOpacity>
                    <Ionicons style={styles.iconpad} name="md-videocam" size={26} color={mycolor} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign style={styles.iconpad} name="search1" size={26} color={mycolor} onPress={()=>navigationer.navigate("Search")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons style={styles.iconpad} name="account-circle" size={26} color={mycolor} onPress={()=>dispatch({type:"changetheme",payload:!current})}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    head:{
        marginTop:Constants.statusBarHeight,
        height:45,
        flexDirection:"row",
        paddingLeft:10,
        elevation:4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    iconpad:{
        paddingLeft:25
    }
})