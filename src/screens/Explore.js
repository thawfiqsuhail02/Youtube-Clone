import React from 'react'
import {StyleSheet,Text,View,FlatList,ScrollView} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
import {useTheme} from '@react-navigation/native'

const Littlecard=()=>{
    const {colors}=useTheme()
    const mycolor=colors.bgColor
    return(
        <View style={{backgroundColor:mycolor,paddingBottom:15}}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.expcard}>
                    Trending
                </Text>
                <Text style={{...styles.expcard,backgroundColor:"#b5d692"}}>
                    Music
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={{...styles.expcard,backgroundColor:"#f5d9b5"}}>
                    Gaming
                </Text>
                <Text style={{...styles.expcard,backgroundColor:"#798fe8"}}>
                    News
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={{...styles.expcard,backgroundColor:"#edd81a"}}>
                    Films
                </Text>
                <Text style={{...styles.expcard,backgroundColor:"#fab1f4"}}>
                    fashion
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={{...styles.expcard,backgroundColor:"#29f258"}}>
                    Learning
                </Text>
                <Text style={{...styles.expcard,backgroundColor:"#f2b51b"}}>
                    #WithMe
                </Text>
            </View>
        </View>
    )
}

const Explore=(props)=>{

    const homedata=useSelector(state=>{
        return state.homedata
    })
    
    return(
        <View style={{flex:1}}>
            <Header />
            <ScrollView>
                <View>
                    <Littlecard />
                    <Text style={{fontSize:17,margin:15,borderBottomWidth:1,paddingTop:15,paddingBottom:5}}>
                        Trending Videos
                    </Text>
                    <FlatList 
                        data={homedata}
                        renderItem={({item})=>{
                            return <Card 
                                videoid={item.id.videoId}
                                channelname={item.snippet.channelTitle}
                                title={item.snippet.title}
                            />
                        }}
                        keyExtractor={item=>item.id.videoId}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    expcard:{
        backgroundColor:"#de6868",
        width:165,
        height:40,
        borderRadius:8,
        textAlign:"center",
        color:"white",
        fontSize:16,
        paddingTop:5,
        marginTop:14,
        marginLeft:10
    }
})

export default Explore