import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Audio } from "expo-av";
import {
	Button,
	TextInput,
	ActivityIndicator,
	Snackbar,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

const SpeechToTextApp = () => {
	const [recording, setRecording] = useState<Audio.Recording | null>(null);
	const [transcript, setTranscript] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [useWebSocket, setUseWebSocket] = useState(true);

	const startRecording = async () => {
		setLoading(true);
		try {
			const { status } = await Audio.requestPermissionsAsync();
			if (status === "granted") {
				const recording = new Audio.Recording();
				await recording.prepareToRecordAsync({
					android: {
						extension: ".m4a",
						outputFormat: 3, // MPEG_4
						audioEncoder: 3, // AAC
						sampleRate: 44100,
						numberOfChannels: 2,
						bitRate: 128000,
					},
					ios: {
						extension: ".caf",
						audioQuality: 96,
						sampleRate: 44100,
						numberOfChannels: 2,
						bitRate: 128000,
						linearPCMBitDepth: 16,
						linearPCMIsBigEndian: false,
						linearPCMIsFloat: false,
					},
					web: {
						mimeType: "audio/webm",
						bitsPerSecond: 128000,
					},
				});
				await recording.startAsync();
				setRecording(recording);
				setShowSnackbar(true);
			} else {
				console.log("Permission not granted");
			}
		} catch (err) {
			console.error("Failed to start recording", err);
		}
		setLoading(false);
	};

	const stopRecording = async () => {
		setLoading(true);
		if (recording) {
			await recording.stopAndUnloadAsync();
			const uri = recording.getURI();
			setRecording(null);
			// Call your API with the audio file URI here and get the transcription
			setTranscript("Transcription result goes here...");
		}
		setLoading(false);
	};
	// Toggle function for switching between WebSocket and gRPC
	const toggleConnectionType = () => {
		setUseWebSocket((prev) => !prev);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Speech-to-Text</Text>
			<TextInput
				label="Transcript"
				value={transcript}
				mode="outlined"
				multiline
				style={styles.transcriptInput}
				editable={false}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.recordButton}
					onPress={recording ? stopRecording : startRecording}
					disabled={loading}
				>
					{loading ? (
						<ActivityIndicator
							animating={true}
							color="#fff"
						/>
					) : (
						<Icon
							name={recording ? "microphone-off" : "microphone"}
							size={28}
							color="#fff"
						/>
					)}
				</TouchableOpacity>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.switchLabel}>
					Use {useWebSocket ? "WebSocket" : "gRPC"}
				</Text>
				<Switch
					value={useWebSocket}
					onValueChange={toggleConnectionType}
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					thumbColor={useWebSocket ? "#f5dd4b" : "#f4f3f4"}
				/>
			</View>
			<Snackbar
				visible={showSnackbar}
				onDismiss={() => setShowSnackbar(false)}
				duration={Snackbar.DURATION_SHORT}
			>
				{recording ? "Recording started" : "Recording stopped"}
			</Snackbar>
		</View>
	);
};

export default SpeechToTextApp;
