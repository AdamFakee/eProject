import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartStackGroup } from "./cart";
import { BagStackGroup } from "./bag.route";
import { FavoriteStackGroup } from "./favorite";
import { ProfileStackGroup } from "./profile.route";
import { HomeStackGroup } from "./home.route";


const BottomBar = createBottomTabNavigator();

export function BottomBarGroup () {
  return (
    <BottomBar.Navigator screenOptions={() => ({
      headerShown: false,
    })}>
      <BottomBar.Screen name="test" component={HomeStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="Cart" component={CartStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="Bag" component={BagStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="Favorite" component={FavoriteStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="Profile" component={ProfileStackGroup} options={{headerShown: false}}></BottomBar.Screen>
    </BottomBar.Navigator>
  )
}