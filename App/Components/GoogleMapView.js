import { StyleSheet,Dimensions, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { UserLocationContext } from '../Context/UserLocationContext';


export default function GoogleMapView() {
    const[mapRegion, setmapRegion]= useState ({});
    const { location, setLocation } = useContext(UserLocationContext);
    
    useEffect(()=>{
        if(location )
    { 
        setmapRegion({
            latitude: location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
        })


    }
    },[])
  return (
    <View style={{marginTop:20, bordeRadius:20, overflow:'hidden'}}>
       <MapView
        style={{
                width: Dimensions.get("screen").width * 0.89,
                height: Dimensions.get("screen").height * 0.23,

        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}

       >

       </MapView>
    </View>
  )
}

const styles = StyleSheet.create({})