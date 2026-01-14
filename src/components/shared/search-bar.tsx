import { Button, ButtonIcon } from "@components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@components/ui/input";
import { smoothVibrationEffect } from "@lib/utils/effects/smooth-vibration.util";
import { FilterIcon } from "@public/icons/filter";
import { SearchIcon } from "@public/icons/search";
import { View } from "react-native";

export default function SearchBar({ className }: { className?: string }) {
    return (
        <View className={`flex-row items-center gap-2 ${className}`}>
            <Input className="h-14 flex-1 rounded-full bg-zinc-100 px-4 py-3 data-[focus=true]:border-transparent data-[hover=true]:border-transparent">
                <InputSlot>
                    <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField className="text-lg" placeholder="search projects..." returnKeyType="search" blurOnSubmit />
            </Input>

            <Button className="h-14 w-14 rounded-full p-4" onPress={smoothVibrationEffect}>
                <ButtonIcon as={FilterIcon} />
            </Button>
        </View>
    );
}
