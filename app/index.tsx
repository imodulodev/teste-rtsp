import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import RtspPlayerView from "./RtspPlayerView"; // seu native component

export default function App() {
    const [myRtsp, setMyRtsp] = useState("");
    const [url, setUrl] = useState("");

    return (
        <View style={styles.container}>
            {/* Input para digitar a URL */}
            <TextInput
                style={styles.input}
                value={myRtsp}
                onChangeText={setMyRtsp}
                placeholder="Digite a URL RTSP"
                placeholderTextColor="#888"
            />

            {/* Botão para carregar no player */}
            <Button title="Carregar vídeo" onPress={() => setUrl(myRtsp)} />

            {/* Só mostra o player se tiver URL definida */}
            {url ? <RtspPlayerView style={styles.video} url={url} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        marginBottom: 12,
    },
    video: {
        width: "100%",
        height: 300,
        backgroundColor: "#000",
        marginTop: 20,
    },
});
