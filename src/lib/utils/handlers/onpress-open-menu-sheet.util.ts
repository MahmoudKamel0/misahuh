import { smoothVibrationEffect } from "../effects/smooth-vibration.util";

export const onPressOpenMenuSheetHandler = (actionSheetRef: any) => {
    smoothVibrationEffect();
    actionSheetRef.current?.show();
}