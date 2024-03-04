import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const Screen1 = () => {
    const images = [
        require("../../images/all.jpg"),
        require("../../images/images.jpg"),
        require("../../images/java.png"),
        require("../../images/web.jpg"),
    ];

    return (
        <View style={style.main}>
            <View>

                {/* Creating SLider */}
                <SliderBox
                    images={images}
                    dotColor="red"
                    inactiveDotColor="black"
                    dotStyle={{ height: 20, width: 20, borderRadius: 50 }}
                    imageLoadingColor="black"
                    autoplay={true}
                    autoplayInterval={3000}
                    circleLoop={true}
                    onCurrentImagePressed={(index)=>alert(index+1)}
                    firstItem={3}
                    paginationBoxVerticlePadding={50}
                />
            </View>
        </View>
    );
};

export default Screen1;
