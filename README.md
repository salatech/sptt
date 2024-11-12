# Speech-to-Text App

A React Native application that allows users to convert speech to text using the device's microphone. The app utilizes `expo-av` for audio recording and includes mock functionality for transcription.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **Audio Recording**: Records audio through the device's microphone.
- **Speech Transcription**: Displays a placeholder transcript (mock transcription).
- **Switch between WebSocket and gRPC**: Mock feature to toggle connection type.
- **UI Feedback**: Displays an activity indicator while loading and shows a snackbar message for recording start/stop.

## Screenshots

![Screenshot](path_to_screenshot_image)

## Installation

### Prerequisites

- Node.js
- Expo CLI
- React Native environment setup ([Guide for setting up React Native](https://reactnative.dev/docs/environment-setup))

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/speech-to-text-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd speech-to-text-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npx expo start
   ```

## Usage

1. Open the app in your emulator or on a physical device.
2. Press the microphone icon to start recording.
3. Press the microphone icon again to stop recording.
4. View the mock transcription displayed in the text area.
5. Toggle between WebSocket and gRPC (mock feature).

## Code Overview

### Components

- **SpeechToTextApp**: The main component that handles recording, transcription, and UI.

### Important Functions

- `startRecording`: Requests microphone permissions, sets up recording configuration, and starts recording audio.
- `stopRecording`: Stops the audio recording and sets a mock transcription result.
- `toggleConnectionType`: Switches between WebSocket and gRPC (for future backend integration).

## Dependencies

- [React Native](https://reactnative.dev/) - A framework for building native apps using React.
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/) - Expo library for audio and video playback and recording.
- [react-native-paper](https://callstack.github.io/react-native-paper/) - Material Design library for React Native.
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) - Icon library for Expo projects.

## Future Improvements

- Implement actual transcription functionality using a third-party speech-to-text API.
- Enhance error handling for various edge cases during recording.
- Add a settings screen to configure recording options.
