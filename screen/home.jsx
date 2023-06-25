import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import {useNavigation} from "@react-navigation/native"


export default function Home() {
    const navigation=useNavigation()
    return (
        <View style={{backgroundColor:"#000000a0"}} className="flex-1 flex justify-center items-center">
            <FlatList
                data={CATEGORIES}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: item.color, height: 150, elevation: 4 }} className="m-4 overflow-hidden flex-1 rounded-xl">
                            <Pressable onPress={()=>navigation.navigate("Meal",{meal:item})} android_ripple={{color:"#ccc"}} className="flex-1 p-4 flex items-center justify-center">
                                <Text className="text-center text-black font-bold">{item.title}</Text>
                            </Pressable>
                        </View>
                    )
                }}
                numColumns={2}
                className="w-screen "
            />
        </View>
    );
}
