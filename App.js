import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import User from './component/User';
import Form from './component/From';

export default function App() {
  const [num, setnum] = useState(0) 
  return (
    <ScrollView scrollEnabled={true}>
      <View style={styles.container}>
        <StatusBar  backgroundColor="#4CAF50" barStyle="dark-content" translucent={false} /> 
        {/* hidden={true} barStyle="light-content" */}
        <Text>Hello Welcome Sudhanshu! You are one of the best programmer in the world {num}</Text>
        <Button accessibilityLabel='click here' title='click here' onPress={()=>setnum(num+1)}/>
        <Text>Hello User</Text>
        <User />
        <Form />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
