import { Avatar, AvatarFallbackText, AvatarImage } from "@components/ui/avatar";
import { Button, ButtonIcon } from "@components/ui/button";
import { Text } from "@components/ui/text";
import { View } from "react-native";
import { NotificationIcon } from "@public/icons/notification";
import { getFirstName } from "@lib/utils/helpers/get-firstname.util";
import { smoothVibrationEffect2 } from "@lib/utils/effects/smooth-vibration.util";

import ButtonOpenMenuSheetNewProjectLayout from "./components/button-open-menu-sheet-new-project.layout";

export default function HeaderLayout() {
    const NAME_USER = "Mahmoud Kamel";
    const USERNAME = "mahmoud0";

    return (
        <View className="mt-5 flex-row items-center justify-between">
            {/* new-project & notification - display sections new-project & notification */}
            <View className="flex-row items-center gap-2">
                <Button
                    className="max-w-8 rounded-full bg-zinc-200 focus-within:bg-zinc-200 data-[active=true]:bg-zinc-200 data-[hover=true]:bg-zinc-200"
                    onPress={smoothVibrationEffect2}
                >
                    <ButtonIcon as={NotificationIcon} />
                </Button>

                <ButtonOpenMenuSheetNewProjectLayout />
            </View>

            <View className="flex-row items-center gap-2">
                <View className="flex items-end">
                    <Text className="text-xl font-bold">Hi, {getFirstName(NAME_USER)} 👋</Text>
                    <Text className="text-[#888]">@{USERNAME}</Text>
                </View>

                <Avatar size="md">
                    <AvatarFallbackText>MK</AvatarFallbackText>
                    <AvatarImage source={require("@public/images/global/user.jpg")} />
                </Avatar>
            </View>
        </View>
    );
}
