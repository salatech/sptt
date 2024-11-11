// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SpeechToTextApp from "./components/SpeechToTextApp/SpeechToTextApp";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<SpeechToTextApp />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
