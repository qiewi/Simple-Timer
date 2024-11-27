import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import Timer from "./components/Timer";
import styles from "./components/styles";

const TimerApp = () => {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("30");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const resetInputs = () => {
    setMinutes("0");
    setSeconds("30");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {!isRunning && !isTimeUp && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>⌚ </Text>
          <Text style={styles.title}>TIME-ME</Text>
        </View>
      )}

      <Timer
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        isTimeUp={isTimeUp}
        setIsTimeUp={setIsTimeUp}
        resetInputs={resetInputs}
      />

      {!isRunning && !isTimeUp && (
        <View style={styles.inputRow}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={minutes}
              onChangeText={(text) =>
                setMinutes(Math.min(parseInt(text.replace(/[^0-9]/g, ""), 10) || 0, 59).toString())
              }
            />
            <Text style={styles.label}>minutes</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={seconds}
              onChangeText={(text) =>
                setSeconds(Math.min(parseInt(text.replace(/[^0-9]/g, ""), 10) || 0, 59).toString())
              }
            />
            <Text style={styles.label}>seconds</Text>
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        {!isRunning && !isTimeUp && (
          <>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => setIsRunning(true)}
            >
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetInputs}
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
