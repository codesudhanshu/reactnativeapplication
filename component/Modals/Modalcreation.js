import { useState } from "react"
import { View , Button, Modal, Text, StyleSheet} from "react-native"

const style = StyleSheet.create({
    button:{
        flex:1,
        justifyContent:"flex-end"
    },
    viewmodal:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    modal:{
        backgroundColor:"#fff",
        padding:50,
        borderRadius:25,
        shadowColor: 'black',
        elevation:5,
    }
})

const Modalcreation = () =>{
    const [showmodal,setmodal] = useState(false)
    const showmodals = () =>{
        setmodal(true)
    }
    return(
        <View>
            <View>
               {
                showmodal ? 
                <Modal transparent={true} animationType="slide" visible={showmodal}>
                    <View style={style.viewmodal}>
                        <View style={style.modal}>
                            <Text>Here is Your Modal</Text>
                            <Button title="Close" onPress={()=>setmodal(false)}/>
                        </View>
                    </View>
                </Modal> :null
               }
            </View>
            <View>
           <View style={style.button} >
           <Button title="Modal Is Here" onPress={showmodals}/>
           </View>
            </View>
        </View>
    )
}
export default Modalcreation