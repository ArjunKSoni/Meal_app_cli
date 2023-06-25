import React,{useEffect} from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default function Meals({ route,navigation }) {
    let a = []
    const meal = route.params.meal;
    const displayMeals = MEALS.filter((e) => {
        return e.categoryIds.indexOf(meal.id) >= 0;
    })
    useEffect(() => {
        navigation.setOptions({ title: meal.title })
    }, [])
        
    return (
        <View style={{backgroundColor:"#000000a0"}}  className="flex-1 flex items-center justify-start">
            {/* <Text className="text-center text-2xl text-black font-bold">{meal.title}</Text> */}
            <FlatList
            style={{width:"90%"}}
                data={displayMeals}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{elevation:4}} className=" overflow-hidden m-3 rounded-xl bg-white">
                            <Pressable onPress={()=>navigation.navigate("MealDesc",{meal:item})} android_ripple={{color:"#ccc"}} className="pb-4">
                                {console.log(item.imageUrl)}
                                <View className="flex items-center justify-center gap-3">
                                    <Image style={{ width: "98%", height: 200, borderRadius: 10 }} source={{ uri: item.imageUrl }} resizeMethod="scale" />
                                    <Text className="text-black text-xl font-bold text-center">{item.title}</Text>
                                </View>
                                <View className=" flex flex-row items-center justify-center gap-3">
                                    <Text className="text-slate-400">{item.duration}m</Text>
                                    <Text className="text-slate-400">{item.complexity.toUpperCase()}</Text>
                                    <Text className="text-slate-400">{item.affordability.toUpperCase()}</Text>
                                </View>
                            </Pressable>
                        </View>
                    )
                }}
            />
        </View>
    );
}
