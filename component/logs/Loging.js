import { StyleSheet, View , Text} from "react-native"

const style = StyleSheet.create({
    flexing:{
        flex:1,
        flexDirection: "row",
        flexWrap:"wrap",
    }
})

const Loging = () =>{
    return(
        <View>
            <Text>This is Your Important question asked in interview</Text>
            <View style={style.flexing}>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>DBMS</Text>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>NETWORKING</Text>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>OOPS</Text>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>DSA</Text>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>PROGRAMMING LANGUAGE</Text>
                <Text style={{color: "black", backgroundColor: "red", margin:10,padding:20, width:120, height:100}}>SYSTEM DESIGN</Text>
            </View>
        </View>
    )
}

export default Loging