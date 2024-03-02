import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button} from "react-native"
import { CheckBox } from "react-native-elements"

const Form = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [password, setpassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [dispatch, setdispatch] = useState(false)

    return (
        <View>
            <TextInput placeholder="What is Your Name" value={name} onChangeText={(text) => setname(text)} style={style.textinput} />
            <TextInput placeholder="what is Your Email" value={email} onChangeText={(text) => setemail(text)} style={style.textinput} />
            <TextInput placeholder="What is Your PhoneNumber" value={phoneNumber} onChangeText={(text) => setphoneNumber(text)} style={style.textinput} />
            <TextInput placeholder="what is Your Password" value={password} onChangeText={(text) => setpassword(text)} style={style.textinput} secureTextEntry={!showPassword} />

            <View style={{ margin: 5 }}>
                <CheckBox value={showPassword} onPress={() => setShowPassword(!showPassword)} />
                <Text>Show Password</Text>
            </View>

            <View style={{ margin: 5 }}>
                <Button color={"green"} title="Submit Value" onPress={() => setdispatch(true)} />
            </View>
            <View>
                <Button color={"red"} title="Clear Value" onPress={() => setdispatch(false)} />
            </View>
            <View>
                {dispatch ?
                    <View>
                        <Text>Your Good Name is : {name}</Text>
                        <Text>Your Email is: {email}</Text>
                        <Text>Your PhoneNumber is : {phoneNumber}</Text>
                        <Text>Your Password is : {password ? `******${password.substring(5, password.length)}` : 'Enter your password'}</Text>
                    </View> : null
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textinput: {
        width: 320,
        height: 60,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        flex: 0,
        justifyContent: "flex-start",
        alignItems: "baseline"
    }
})

export default Form
