import { Audio } from "expo-av";

export const startRecording = async () => {
	try {
		const permission = await Audio.requestPermissionsAsync();
		if (!permission.granted) throw new Error("Permission not granted");
		// Add recording logic
	} catch (error) {
		console.error("Error starting recording:", error);
		throw error;
	}
};

export const stopRecording = async () => {
	try {
		// Add logic to stop recording and return transcription
		return "Sample transcribed text"; // Replace with actual transcription
	} catch (error) {
		console.error("Error stopping recording:", error);
		throw error;
	}
};
