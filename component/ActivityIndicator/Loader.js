import { useState } from "react"
import { ActivityIndicator } from "react-native"
import { Button } from "react-native"
import { View } from "react-native"

const Loader = () =>{
    const [showloader,setloader] = useState(false)
    const showdisplayloader = () =>{
        setloader(true)
        setTimeout(()=>{
            setloader(false)
        },5000)
    }
    return(
        <View>
            {
                showloader ? <ActivityIndicator size={60} color="gold" animating={showloader}/> : null
            }
            <Button title="Clicked Here" value={showloader} onPress={showdisplayloader}/>
        </View>
    )
}
export default Loader