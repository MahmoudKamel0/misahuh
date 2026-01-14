import { useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

export default function AnalysisSection() {
    const ref = useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    return (
        <View className="flex-1 mt-9">
            <Carousel
                ref={ref}
                width={width}
                height={250}
                data={data}
                // style={{ backgroundColor: "red" }}
                onProgressChange={progress}
                renderItem={({ index }) => (
                    <View className="flex-1 justify-center bg-zinc-200 rounded-2xl" style={{ width: width / 2 }}>
                        <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                    </View>
                )}
            />
        </View>
    );
}
