import { Heading } from "@components/ui/heading";
import { View } from "react-native";
import { Link } from "expo-router";
import { Text } from "@components/ui/text";

import ProjectsRecentSection from "./components/project.home";

export default function RecentOperationSection() {
    return (
        <View className="mt-9">
            <View className="flex-row items-center justify-between">
                <Heading className="text-2xl">Recent Operation</Heading>
                <Link href="/test-page">
                    <Text className="text-[#888] underline">View all</Text>
                </Link>
            </View>
            <ProjectsRecentSection />
        </View>
    );
}
