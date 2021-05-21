import React from 'react';
import {StyleSheet,Text,View,ScrollView,FlatList,Animated}  from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'

export default function Homescreen(props){

    const homedata=useSelector(state=>{
        return state.homedata
    })

    const scrolly=new Animated.Value(0)
    // const diffc=Animated.diffClamp(scrolly,0,45)
    const translatey=scrolly.interpolate({
        inputRange:[0,45],
        outputRange:[0,-45]
    })

    return(
        <View style={{flex:1}}>
            <Animated.View style={{
                transform:[
                    {translateY:translatey}
                ]
                }}
            >
                <Header />
            </Animated.View>
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
                onScroll={(events)=>{
                    scrolly.setValue(events.nativeEvent.contentOffset.y)
                }}
            />
        </View>
    );
}
