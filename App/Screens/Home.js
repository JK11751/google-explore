import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
//import PlaceList from '../Components/Home/PlaceList'
import { ScrollView } from 'react-native'
import { UserLocationContext } from '../Context/UserLocationContext'
import PlaceList from '../Components/Home/PlaceList'

export default function Home() {

  const [placeList,setPlaceList]=useState([]);
  //const {location,setLocation}=useContext(UserLocationContext);
  useEffect(()=>{
   
       GetNearBySearchPlace(); 
    
  },[])
  
  const GetNearBySearchPlace=()=>{
   
    GlobalApi.nearByPlace().then(resp=>{

          setPlaceList(resp.data.results);

    })
  } 
  return (
    <ScrollView style={{padding:20,backgroundColor:'#fff',flex:1}}>
        <Header/>
        <GoogleMapView placeList={placeList} />
        <CategoryList />
        {placeList? <PlaceList placeList={placeList}/>:null}
       
    </ScrollView>
  )
}