import { AuthStackGroup } from "./auth.route";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { HomeStackGroup } from "./home.route";

const IndexStack = createNativeStackNavigator();

export function  IndexStackGroup () {
  return (
    <NavigationContainer>
        <IndexStack.Navigator initialRouteName='Index' >
            <IndexStack.Screen name='Index' component={HomeStackGroup} options={{headerShown:false}}></IndexStack.Screen> 
            <IndexStack.Screen name='Auth' component={AuthStackGroup} options={{headerShown:false}}></IndexStack.Screen> 
        </IndexStack.Navigator>
    </NavigationContainer>
  )
}