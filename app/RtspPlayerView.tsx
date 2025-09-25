import React from "react";
import {
    requireNativeComponent,
    ViewStyle,
    StyleProp,
} from "react-native";

type Props = {
    url: string;
    style?: StyleProp<ViewStyle>;
};

// Faz o binding com o nome definido no Manager Java: "RtspPlayerView"
const NativeRtspPlayerView =
    requireNativeComponent<Props>("RtspPlayerView");

export default function RtspPlayerView(props: Props) {
    return <NativeRtspPlayerView {...props} />;
}
