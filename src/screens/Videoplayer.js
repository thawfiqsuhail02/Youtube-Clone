import React from 'react'
import {StyleSheet,Text,View, Dimensions} from 'react-native'
import {WebView} from 'react-native-webview'
import Constants from 'expo-constants'
import {useTheme} from '@react-navigation/native'
import {MaterialIcons} from '@expo/vector-icons'

const videoplayer=({route})=>{

    const {videoId,title,channelname}=route.params
    const {colors}=useTheme()
    const mycolor=colors.iconColor

    return(
        <View style={{flex:1}}>
            <View style={styles.cardstyle}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri:`https://www.youtube.com/embed/${videoId}`}} 
                />
            </View>
            <Text style={{
                fontSize:17,
                width:Dimensions.get("screen").width-50,
                marginTop:13,
                marginLeft:14,
                marginBottom:30,
                color:mycolor
                }} ellipSizeMode="tail" numberOfLines={2}
            >
                {title}
            </Text>
            <View
                style={{borderBottomWidth:0.5,borderBottomColor:mycolor}} 
            />
            <View style={{flexDirection:"row"}}>
                <MaterialIcons style={{paddingLeft:10}} name="account-circle" size={45} color={mycolor} />
                <Text style={{paddingLeft:15,margin:13,fontSize:15,color:mycolor}}>
                    {channelname}
                </Text>
            </View>
            
            <View
                style={{borderBottomWidth:0.5,borderBottomColor:mycolor}} 
            />
        </View>
    );
}

const styles=StyleSheet.create({
    cardstyle:{
        marginTop:Constants.statusBarHeight,
        width:"100%",
        height:200
    }
})

export default videoplayer