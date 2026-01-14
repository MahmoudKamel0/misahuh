import "@styles/global.style.css";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import RootProviders from "@components/providers";

export default function RootLayout() {
    const { colorScheme } = useColorScheme();

    return (
        <RootProviders>
            <Stack
                screenOptions={{
                    animation: "default",
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: colorScheme === "dark" ? "black" : "white",
                    },
                }}
            />
        </RootProviders>
    );
}
