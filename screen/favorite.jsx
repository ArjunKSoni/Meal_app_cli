import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux"
import { MEALS } from '../data/dummy-data';


export default function FavMeal() {
    const favMeals = useSelector((state) => state.favMeals.ids)
    return (
        <View className="flex-1 flex items-center justify-start" style={{ backgroundColor: "#000000a0" }}>
            {favMeals.map((e, i) => {
                return <Text key={i}>{e}</Text>
            })}
        </View>
    );
}
