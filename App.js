import { useState } from 'react';
import { Button, ScrollView, StyleSheet, View, StatusBar} from 'react-native';
// import User from './component/User';
// import Form from './component/From';
// import Loader from './component/ActivityIndicator/Loader';
// import Modalcreation from './component/Modals/Modalcreation';
// import Screen1 from './component/ImageSlider/Screen1';
// import Loging from './component/logs/Loging';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './component/PageNavigation/Page1';
import Page2 from './component/PageNavigation/Page2';
import Page3 from './component/PageNavigation/Page3';

const Stack = createNativeStackNavigator()

export default function App() {
  const [num, setnum] = useState(0) 
  return (
    // <ScrollView scrollEnabled={true}>
    //   <View style={styles.container}>
    //     <StatusBar  backgroundColor="#4CAF50" barStyle="dark-content" translucent={false} /> 
    //     hidden={true} barStyle="light-content"
    //     <Text>Hello Welcome Sudhanshu! You are one of the best programmer in the world {num}</Text>
    //     <Button accessibilityLabel='click here' title='click here' onPress={()=>setnum(num+1)}/>
    //     <Text>Hello User</Text>
    //     <User />
    //     <Form />
    //     <Loader />
    //     <Modalcreation />
    //     <Screen1 />
    //     <Loging />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Page1} />
            <Stack.Screen name='Login' component={Page2} />
            <Stack.Screen name='Signup' component={Page3} />
          </Stack.Navigator>
        </NavigationContainer>


    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});