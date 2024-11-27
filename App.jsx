import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const TimerApp = () => {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("30");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const startTimer = () => {
    const totalSeconds =
      parseInt(minutes || "0", 10) * 60 + parseInt(seconds || "0", 10);
    if (totalSeconds > 0) {
      setRemainingSeconds(totalSeconds);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(0);
    setMinutes("0");
    setSeconds("30");
  };

  const handleMinutesInput = (text) => {
    const sanitized = text.replace(/[^0-9]/g, "");
    const limited = Math.min(parseInt(sanitized || "0", 10), 59);
    setMinutes(limited.toString());
  };

  const handleSecondsInput = (text) => {
    const sanitized = text.replace(/[^0-9]/g, "");
    const limited = Math.min(parseInt(sanitized || "0", 10), 59);
    setSeconds(limited.toString());
  };

  const displayMinutes = Math.floor(remainingSeconds / 60);
  const displaySeconds = remainingSeconds % 60;

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {!isRunning && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>⌚ </Text>
          <Text style={styles.title}>TIME-ME</Text>
        </View>
      )}

      {isRunning ? (
        <Text style={styles.timerText}>
          {formatTime(displayMinutes)}:{formatTime(displaySeconds)}
        </Text>
      ) : (
        <View style={styles.inputRow}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={minutes}
              onChangeText={handleMinutesInput}
            />
            <Text style={styles.label}>minutes</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={seconds}
              onChangeText={handleSecondsInput}
            />
            <Text style={styles.label}>seconds</Text>
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        {isRunning ? (
          <TouchableOpacity style={styles.stopButton} onPress={() => setIsRunning(false)}>
            <Text style={styles.stopButtonText}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.startButton} onPress={startTimer}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    marginBottom: 30,
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
});

export default TimerApp;
