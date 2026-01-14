import Svg, { Path } from "react-native-svg";

export function PlusIcon({ size = 16, className }: { size?: `${number}` | number; className?: string }) {
    return (
        <Svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4 12H20M12 4V20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}
