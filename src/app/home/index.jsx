import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Index = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View>
            <Text>Home</Text>
            <Button title='go to auth' onPress={() => navigation.navigate('Auth')}/>
        </View>
    </SafeAreaView>
  )
}

export default Index