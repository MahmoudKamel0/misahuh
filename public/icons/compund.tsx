import Svg, { Path } from "react-native-svg";

export function CompoundIcon({ size = 21, className }: { size?: `${number}` | number; className?: string }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
            <Path d="M23.6662 0.75H3.75C2.09315 0.75 0.75 2.09314 0.75 3.75V23.6662C0.75 25.3231 2.09314 26.6662 3.75 26.6662H23.6662C25.3231 26.6662 26.6662 25.3231 26.6662 23.6662V3.75C26.6662 2.09315 25.3231 0.75 23.6662 0.75Z" stroke="black" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.7144 12.7113V0.75" stroke="black" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M17.3687 12.7113V0.75" stroke="black" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.72442 26.6663V17.6953H4.7373" stroke="black" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.7397 12.8118H0.75" stroke="black" strokeWidth="2.5" />
            <Path d="M26.6161 12.8118H17.3687" stroke="black" strokeWidth="2.5" />
            <Path d="M26.7498 20.853L14.4199 20.853" stroke="black" strokeWidth="1.5" />
            <Path d="M26.4818 24.0696H14.4199" stroke="black" strokeWidth="1.5" />
            <Path d="M14.688 26.7499V17.9045H26.7498" stroke="black" strokeWidth="2.5" />
        </Svg>
    );
}
