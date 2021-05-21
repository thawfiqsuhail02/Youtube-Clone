import React from 'react'
import {StyleSheet,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'
import {useNavigation,useTheme} from '@react-navigation/native'

const mini=(props)=>{

    const navigationer=useNavigation()
    const {colors}=useTheme()
    const mycolor=colors.iconColor

    return(
        <TouchableOpacity onPress={()=>{navigationer.navigate("Videoplayer",{videoId:props.videoid,
                title:props.title,
                channelname:props.channelname
            })
        }}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:"45%",height:90,margin:15,marginBottom:7}}
                        source={{uri:`https://i.ytimg.com/vi/${props.videoid}/hqdefault.jpg`}}
                    />
                    <View style={{paddingTop:10}}>
                        <Text style={{fontSize:15.5,width:Dimensions.get("screen").width/2.5,paddingBottom:3,color:mycolor}} ellipSizeMode="tail" numberOfLines={3}>
                            {props.title}
                        </Text>
                        <Text style={{color:mycolor}}>{props.channelname}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    textplace:{
        fontSize:15.5,
        width:Dimensions.get("screen").width/2.5,
        paddingBottom:3,
    },
})

export default mini