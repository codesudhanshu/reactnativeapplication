import { useEffect, useState } from "react"
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"


const style = StyleSheet.create({
    container:{
        width:350,
        height: 500,
    }
})


const User = () =>{ 
    const [name, setname] = useState('Aman')

    const clicked = () =>{
        setname(name)
        console.warn(`Hello ${name} This is me`)
    }  
     
    return(
        <View>
            <Text>Hi! User This is Me. {name}</Text>
            <Image source={require('../images/attest.jpg')} style={style.container}/>
            <Button title="Warning is Here" onPress={clicked} />
            <TextInput placeholder="Enter Your Name" />
        </View>
    )
}

export default User