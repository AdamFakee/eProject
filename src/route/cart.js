import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../app/cart/cart';

const CartStack = createNativeStackNavigator();

export function  CartStackGroup () {
  return (
    <CartStack.Navigator >
      <CartStack.Screen name='Cart' component={Cart}></CartStack.Screen> 
    </CartStack.Navigator>
  )
}