import React from'react';
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation,useTheme} from '@react-navigation/native'

export default function cards(props){

    const navigationer=useNavigation()
    const {colors} = useTheme()
    const mycolor=colors.iconColor

    return(
        <TouchableOpacity onPress={()=>navigationer.navigate("Videoplayer",{videoId:props.videoid,title:props.title,channelname:props.channelname})}>
            <View style={{marginBottom:15}}>
                <Image style={styles.cardstyle}
                    source={{uri:`https://i.ytimg.com/vi/${props.videoid}/hqdefault.jpg`}}
                />
                <View style={{flexDirection:"row",margin:7}}>
                    <MaterialIcons style={styles.iconpad} name="account-circle" size={45} color={mycolor} />
                    <View style={{paddingLeft:5}}>
                        <Text style={{fontSize:15.5,width:Dimensions.get("screen").width-50,color:mycolor}} ellipsizeMode="tail" numberOfLines={2}>
                            {props.title} 
                        </Text>
                        <Text style={{paddingTop:2,color:mycolor}}>
                            {props.channelname}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    cardstyle:{
        width:"100%",
        height:200,
    }
})