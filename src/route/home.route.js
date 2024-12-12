import Index from "../app/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export function  HomeStackGroup () {
  return (
    <HomeStack.Navigator initialRouteName='Home'  >
      <HomeStack.Screen name='Home' component={Index}></HomeStack.Screen> 
    </HomeStack.Navigator>
  )
}