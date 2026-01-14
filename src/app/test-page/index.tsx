import { Text } from "react-native";
import { Link } from "expo-router";

export default function TestPage() {
    return (
        <Text className="mt-14">
            <Link href="/">back index page</Link>
        </Text>
    );
}
