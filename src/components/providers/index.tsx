import { GluestackUIProvider } from "@components/ui/gluestack-ui-provider";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IRootProviderProps } from "@lib/types/providers";

export default function RootProviders({ children }: Readonly<IRootProviderProps>) {
    const { colorScheme } = useColorScheme();

    return (
        <SafeAreaProvider>
            <GluestackUIProvider mode="light">
                <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
                {children}
            </GluestackUIProvider>
        </SafeAreaProvider>
    );
}
