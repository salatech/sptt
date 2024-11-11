import { ConnectionType } from "../components/SpeechToTextApp/types";

export const toggleConnectionType = (
	currentType: ConnectionType
): ConnectionType => (currentType === "WebSocket" ? "gRPC" : "WebSocket");
