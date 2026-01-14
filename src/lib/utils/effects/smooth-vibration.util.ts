import * as Haptics from "expo-haptics";

export const smoothVibrationEffect = () => {
    return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
};

export const smoothVibrationEffect2 = () => {
    return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
};
