import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		color: "#333",
		marginBottom: 20,
	},
	transcriptInput: {
		height: 150,
		fontSize: 16,
		backgroundColor: "#fff",
		marginBottom: 20,
		textAlignVertical: "top",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	recordButton: {
		backgroundColor: "#6200ea",
		padding: 16,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		width: 64,
		height: 64,
	},
	switchContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	switchLabel: {
		marginRight: 10,
		fontSize: 16,
		color: "#333",
	},

	waveContainer: {
		width: 300,
		height: 100,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
	bar: {
		width: 4,
		marginHorizontal: 2,
		backgroundColor: "#007AFF",
	},
});
