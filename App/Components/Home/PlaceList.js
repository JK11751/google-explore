import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
import { useNavigation } from '@react-navigation/native'

export default function PlaceList({placeList}) {

  
  return (
    <View>
      <Text
      style={{fontSize:20,fontFamily:'raleway-bold',marginTop:10}}
      >Found {placeList.length} Places</Text>

      <FlatList
      data={placeList}
      renderItem={({item,index})=>(
            index%4==0?
            <PlaceItemBig place={item} />
            :<PlaceItem place={item} />
      
      )}
      />
    </View>
  )
}