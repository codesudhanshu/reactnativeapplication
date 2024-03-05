import { Button, Text } from "react-native"
import { View } from "react-native"

const Page1 = (props) =>{
    return(
        <View>
            <Text>This is Home Page</Text>
            <Button title='Click For Login' onPress={()=>props.navigation.navigate("Login")}/>
        </View>
    )
}
export default Page1