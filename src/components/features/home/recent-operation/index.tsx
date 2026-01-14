import { Heading } from "@components/ui/heading";
import { View } from "react-native";
import ProjectsRecentSection from "./components/project.home";
import { Link } from "expo-router";
import { Text } from "@components/ui/text";

export default function RecentOperationSection() {
    return (
        <View className="mt-9">
            <View className="flex-row items-center justify-between">
                <Heading className="text-2xl">Recent Operation</Heading>
                <Link href="/test-page">
                    <Text className="underline text-[#888]">View all</Text>
                </Link>
            </View>
            <ProjectsRecentSection />
        </View>
    );
}
