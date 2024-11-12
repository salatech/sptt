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
			// Request microphone permissions
			const { status } = await Audio.requestPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access microphone was denied");
				setLoading(false);
				return;
			}

			// Set up and start recording
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
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording:", err);
		}
		setLoading(false);
	};

	const stopRecording = async () => {
		setLoading(true);
		if (recording) {
			try {
				await recording.stopAndUnloadAsync();
				const uri = recording.getURI();
				setRecording(null);

				// Mock transcription logic for now
				setTranscript("Transcription result goes here...");
				console.log("Recording stopped and saved at", uri);
			} catch (err) {
				console.error("Failed to stop recording:", err);
			}
		}
		setLoading(false);
	};

	// Toggle between WebSocket and gRPC (mock functionality)
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
