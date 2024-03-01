import { Image, StyleSheet, Text, View } from "react-native"


const style = StyleSheet.create({
    container:{
        width:350,
        height: 500,
    }
})

const User = () =>{
    return(
        <View>
            <Text>Hi! User This is Me.</Text>
            <Image source={require('../images/attest.jpg')} style={style.container}/>
        </View>
    )
}

export default User