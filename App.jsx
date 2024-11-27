import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import styles from "./components/styles";

const TimerApp = () => {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("30");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false); // New state for "Time's Up"
  const [lastMinutes, setLastMinutes] = useState("0"); // Store the user's last input for minutes
  const [lastSeconds, setLastSeconds] = useState("30"); // Store the user's last input for seconds

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    let interval = null;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsTimeUp(true); // Set "Time's Up" when the timer ends
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const startTimer = () => {
    const totalSeconds =
      parseInt(minutes || "0", 10) * 60 + parseInt(seconds || "0", 10);
    if (totalSeconds > 0) {
      setLastMinutes(minutes); // Save current input as last input
      setLastSeconds(seconds); // Save current input as last input
      setRemainingSeconds(totalSeconds);
      setIsRunning(true);
      setIsPaused(false); // Ensure pause is reset
      setIsTimeUp(false); // Reset "Time's Up"
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false); // Reset pause
    setIsTimeUp(false); // Reset "Time's Up"
    setRemainingSeconds(0);
    setMinutes("0");
    setSeconds("30");
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false); // Reset pause
    setIsTimeUp(false); // Reset "Time's Up"
    setMinutes(lastMinutes); // Restore last input for minutes
    setSeconds(lastSeconds); // Restore last input for seconds
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
      {!isRunning && !isTimeUp && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>⌚ </Text>
          <Text style={styles.title}>TIME-ME</Text>
        </View>
      )}

      {isTimeUp ? (
        <View style={styles.timesUpContainer}>
          <Text style={styles.timesUpText}>Time's Up!</Text>
          <TouchableOpacity
            style={styles.backToMenuButton}
            onPress={() => {
              // Restore last input and show the menu/input screen
              stopTimer();
            }}
          >
            <Text style={styles.backToMenuButtonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      ) : isRunning ? (
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {formatTime(displayMinutes)}:{formatTime(displaySeconds)}
          </Text>
          <View style={styles.runningLabelsContainer}>
            <Text style={styles.runningLabel}>minutes</Text>
            <Text style={styles.runningLabel}>seconds</Text>
          </View>
        </View>
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
        {isRunning && !isTimeUp && (
          <>
            {isPaused ? (
              <TouchableOpacity
                style={styles.resumeButton}
                onPress={() => setIsPaused(false)}
              >
                <Text style={styles.resumeButtonText}>Resume</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.pauseButton}
                onPress={() => setIsPaused(true)}
              >
                <Text style={styles.pauseButtonText}>Pause</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.stopButton}
              onPress={stopTimer}
            >
              <Text style={styles.stopButtonText}>Stop</Text>
            </TouchableOpacity>
          </>
        )}

        {!isRunning && !isTimeUp && (
          <>
            <TouchableOpacity
              style={styles.startButton}
              onPress={startTimer}
            >
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetTimer}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default TimerApp;
