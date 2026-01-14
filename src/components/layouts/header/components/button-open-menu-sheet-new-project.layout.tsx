import { Button, ButtonIcon } from "@components/ui/button";
import { Text } from "@components/ui/text";
import { smoothVibrationEffect } from "@lib/utils/effects/smooth-vibration.util";
import { PlusIcon } from "@public/icons/plus";
import { useRef } from "react";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { Alert, Pressable, View } from "react-native";
import { TYPES_REAL_ESTATE } from "@lib/constants/common/types-realestate.constant";
import { Link } from "expo-router";
import { onPressOpenMenuSheetHandler } from "@lib/utils/handlers/onpress-open-menu-sheet.util";

export default function ButtonOpenMenuSheetNewProjectLayout() {
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const handleSelect = (type: string) => {
        Alert.alert(`use select ${type}`);
        smoothVibrationEffect();
        actionSheetRef.current?.hide();
    };

    return (
        <>
            <Button className="rounded-full p-5" onPress={() => onPressOpenMenuSheetHandler(actionSheetRef)}>
                <ButtonIcon as={PlusIcon} />
            </Button>

            <ActionSheet ref={actionSheetRef} gestureEnabled>
                <View className="pb-8">
                    <Text className="p-5 text-center text-xl font-bold">Please choose type your project</Text>

                    {TYPES_REAL_ESTATE.map((item) => (
                        <Link href="/" asChild key={item.id}>
                            <Pressable
                                className="flex-row items-center gap-3 px-5 py-4 active:bg-gray-100"
                                onPress={() => handleSelect(item.name)}
                            >
                                {item.icon}
                                <Text className="text-lg">{item.name}</Text>
                            </Pressable>
                        </Link>
                    ))}
                </View>
            </ActionSheet>
        </>
    );
}
