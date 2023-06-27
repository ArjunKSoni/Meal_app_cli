import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux"
import { addfav, removefav } from "../redux/favorite"

export default function MealDesc({ route, navigation }) {
    const meal = route.params.meal;
    const meala = useSelector(state => state.favMeals.ids)
    const dispatch = useDispatch()
    const pressedHeart = () => {
        if (meala.includes(meal.id)) navigation.navigate("FavMeal");
        else {
            dispatch(addfav({ id: meal.id }))
            navigation.navigate("FavMeal")
        }
    }
    useEffect(() => {
        navigation.setOptions({
            title: meal.title, headerRight: () => {
                return (<Pressable onPress={pressedHeart}><Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require("../img/heart.png")} /></Pressable>)
            }
        })
    }, [])
    return (
        <View style={{ backgroundColor: "#000000a0" }} className="flex flex-1 items-center justify-start">
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <View style={{ width: "100%" }} className="flex items-center justify-center">
                    <View style={{ width: "100%" }} className="flex items-center justify-center gap-3">
                        <Image style={{ width: "100%", height: 250, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} source={{ uri: meal.imageUrl }} resizeMethod="scale" />
                        <Text className="text-2xl font-bold text-center">{meal.title}</Text>
                    </View>
                    <View className=" flex flex-row items-center justify-center gap-3">
                        <Text className="text-slate-400">{meal.duration}m</Text>
                        <Text className="text-slate-400">{meal.complexity.toUpperCase()}</Text>
                        <Text className="text-slate-400">{meal.affordability.toUpperCase()}</Text>
                    </View>
                    <View className="bg-gray-300 m-2" style={{ height: 2, width: "90%" }}></View>
                    <View style={{ width: "100%" }} className="p-3 px-6 flex items-center justify-center">
                        <Text className="text-2xl font-bold">Ingredients</Text>
                        <View className="bg-yellow-300 m-2" style={{ height: 2, width: "80%" }}></View>
                        {meal.ingredients.map(e => {
                            return <Text className="bg-orange-200 p-1 text-center rounded-xl m-1 text-black font-bold text-lg" style={{ width: "100%" }} key={e}>{e}</Text>
                        })}
                    </View>
                    <View style={{ width: "100%" }} className="p-3 px-6 flex items-center justify-center">
                        <Text className="text-2xl font-bold">Steps</Text>
                        <View className="bg-yellow-300 m-2" style={{ height: 2, width: "80%" }}></View>
                        {meal.steps.map((e, i) => {
                            return (<Text className="bg-orange-200 p-1 text-center rounded-xl m-1 text-black font-bold text-lg" style={{ width: "100%" }} key={e}>{e}</Text>)
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
