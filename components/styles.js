import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "Poppins_700Bold", // Use Poppins font
  },
  timerText: {
    fontSize: 60,
    fontFamily: "Poppins_400Regular",
    color: "#FFFFFF",
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 20, // Spacing below the timer
  },
  runningLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150, // Adjust width to align the labels
    marginTop: 10, // Add spacing above the labels
  },
  runningLabel: {
    fontSize: 16,
    color: "#9CA3AF",
    fontFamily: "Poppins_400Regular",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  inputWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    width: 60,
    height: 60,
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    borderWidth: 1,
    borderColor: "#4B5563",
  },
  label: {
    color: "#9CA3AF",
    marginTop: 5,
    fontSize: 16,
    fontFamily: "Poppins_400Regular", // Label uses Poppins font
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  startButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#1E90FF",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  stopButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#FF6347",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  resetButton: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "#1E90FF",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  stopButtonText: {
    color: "#FF6347",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  pauseButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#FFA500", // Orange for pause
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
  },
  pauseButtonText: {
    color: "#FFA500",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  resumeButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#00FF7F", // Green for resume
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
  },
  resumeButtonText: {
    color: "#00FF7F",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  timesUpContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  timesUpText: {
    fontSize: 32,
    color: "#FF6347", // Red color for emphasis
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    marginBottom: 20, // Spacing between text and button
  },
  backToMenuButton: {
    width: 180,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#1E90FF", // Blue border for button
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  backToMenuButtonText: {
    color: "#1E90FF", // Blue text for button
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
