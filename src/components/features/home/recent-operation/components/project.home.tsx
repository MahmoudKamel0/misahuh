import { useRef } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

export default function ProjectsRecentSection() {
    const ref = useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    return (
        <View className="flex-1" style={{ marginTop: 24 }}>
            <Carousel
                ref={ref}
                width={width}
                height={405}
                snapEnabled={true}
                pagingEnabled={true}
                style={{backgroundColor: "red"}}
                data={data}
                onProgressChange={progress}
                renderItem={({ index }) => (
                    <ImageBackground
                        source={require("@public/images/projects/test.jpg")}
                        style={{ width: 250, height: 405, justifyContent: "center", borderRadius: 24, overflow: "hidden" }}
                    >
                        <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                    </ImageBackground>
                )}
            />
        </View>
    );
}
