import AnalysisSection from "@components/features/home/analysis";
import RecentOperationSection from "@components/features/home/recent-operation";
import SearchBar from "@components/shared/search-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderLayout from "@components/layouts/header";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <SafeAreaView className="flex-1 px-7">
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <HeaderLayout />
                <SearchBar className="mt-6" />
                <AnalysisSection />
                <RecentOperationSection />
            </ScrollView>
        </SafeAreaView>
    );
}
