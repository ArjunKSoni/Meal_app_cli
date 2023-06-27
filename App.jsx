import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Home from './screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Meals from './screen/meals';
import MealDesc from './screen/mealDesc';
import FavMeal from './screen/favorite';
import { store } from "./redux/store"
const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux';


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle='light-content' />
      <Provider store={store}>


      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white", headerTitleAlign: "center", headerTitleStyle: { fontSize: 25, fontWeight: "bold" } }}>
        <Stack.Screen  name="Home" component={Home} options={{ title: 'Food Category',headerShown:true,}}/>
        <Stack.Screen name="Meal" component={Meals} options={{ title: 'Meal',headerShown:true,animation:"slide_from_right" }}/>
            <Stack.Screen name="MealDesc" component={MealDesc} options={{ title: 'Meal Desc', headerShown: true, presentation: "modal", animation: "slide_from_right", headerBackVisible: false, headerTitleStyle: { fontSize: 18, fontWeight: "bold" } }} />
            <Stack.Screen name="FavMeal" component={FavMeal} options={{ title: 'Favorite Meal', headerShown: true, animation: "slide_from_right" }} />
      </Stack.Navigator>
    </NavigationContainer>
      </Provider>
    </>
  );
};


export default App;