import React from 'react';
import {requireNativeComponent, StyleSheet, View, ViewStyle} from 'react-native';

type RtspPlayerProps = {
    style?: ViewStyle;
    url: string;
}

const RtspPlayerView = requireNativeComponent<RtspPlayerProps>('RtspPlayerView');

export default function App() {
    return (
        <View style={styles.container}>
            <RtspPlayerView style={styles.video} url="rtsp://admin:Jarag1986@191.9.112.84:554/Streaming/Channels/201" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        width: "100%",
        height: 300,
    }
})
