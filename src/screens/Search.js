import React,{useState} from 'react'
import {StyleSheet,Text,View,TextInput,FlatList,ActivityIndicator} from 'react-native'
import Constants from 'expo-constants'
import { AntDesign,Ionicons } from '@expo/vector-icons';
import Minicard from '../components/Minicard'
import {useSelector,useDispatch} from 'react-redux'
import {useTheme} from '@react-navigation/native'

const Searching=(props)=>{

    const minicarddata=useSelector(state=>{
        return state.homedata
    })

    const dispatch=useDispatch()

    const [text,settext]=useState("")
    // const [minicarddata,setminicarddata]=useState([])
    const [loading,setloading]=useState(false) 

    const {colors}=useTheme()
    const mycolor=colors.headerColor
    const myscolor=colors.searchColor

    const fetchdata=()=>{
        setloading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&id+CHANNEL_ID&maxResults=20&q=${text}&type=video&key=AIzaSyBq2nmTaxNdDmYEnl-tlUK4Eo7fkOuJiP8`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // setminicarddata(data.items)
            dispatch({type:"add",payload:data.items})
            setloading(false)
        })
    }
    return(
        <View style={{flex:1}}>
            <View style={{marginTop:Constants.statusBarHeight,
                flexDirection:"row",
                justifyContent:"space-around",
                paddingTop:7,
                paddingBottom:7,
                elevation:6,
                backgroundColor:mycolor}}
            >
                <AntDesign name="arrowleft" size={24} color="black" onPress={()=>props.navigation.goBack()} />
                <TextInput style={{width:"67%",backgroundColor:myscolor}} 
                    value={text} 
                    onChangeText={(texts)=>settext(texts)} 
                />
                <Ionicons name="md-send" size={24} color="black" onPress={()=>fetchdata()} />
            </View>
            <View style={{flex:1}}>
                {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null}    
                <FlatList
                    data={minicarddata}
                    renderItem={({item})=>{
                        return <Minicard
                            videoid={item.id.videoId}
                            title={item.snippet.title}
                            channelname={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    top:{
        
    },

})

export default Searching