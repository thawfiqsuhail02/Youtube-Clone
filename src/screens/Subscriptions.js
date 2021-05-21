import React from 'react'
import {StyleSheet,Text,View,FlatList} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import {useSelector} from 'react-redux'
import Card from '../components/Card'

const Subscribe=()=>{
    const homedata=useSelector(state=>{
        return state.homedata
    })
    return(
        <View style={{flex:1}}>
            <Header />
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
    );
}

export default Subscribe