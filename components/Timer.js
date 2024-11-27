import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Timer = ({
  minutes,
  seconds,
  setMinutes,
  setSeconds,
  isRunning,
  setIsRunning,
  isPaused,
  setIsPaused,
  isTimeUp,
  setIsTimeUp,
  resetInputs,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (isRunning && !isPaused) {
      const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
      if (remainingSeconds === 0 && totalSeconds > 0) {
        setRemainingSeconds(totalSeconds);
      }
    }
  }, [isRunning]);

  useEffect(() => {
    let interval = null;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsTimeUp(true);
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

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setIsTimeUp(false);
    const restoredMinutes = Math.floor(remainingSeconds / 60).toString();
    const restoredSeconds = (remainingSeconds % 60).toString();
    setMinutes(restoredMinutes);
    setSeconds(restoredSeconds);
  };

  const pauseTimer = () => setIsPaused(true);
  const resumeTimer = () => setIsPaused(false);

  return (
    <>
      {isTimeUp ? (
        <View style={styles.timesUpContainer}>
          <Text style={styles.timesUpText}>Time's Up!</Text>
          <TouchableOpacity
            style={styles.backToMenuButton}
            onPress={() => {
              stopTimer();
              resetInputs();
            }}
          >
            <Text style={styles.backToMenuButtonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      ) : isRunning ? (
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {Math.floor(remainingSeconds / 60).toString().padStart(2, "0")}:
            {(remainingSeconds % 60).toString().padStart(2, "0")}
          </Text>
          <View style={styles.runningLabelsContainer}>
            <Text style={styles.runningLabel}>minutes</Text>
            <Text style={styles.runningLabel}>seconds</Text>
          </View>
          <View style={styles.buttonContainer}>
            {isPaused ? (
              <TouchableOpacity
                style={styles.resumeButton}
                onPress={resumeTimer}
              >
                <Text style={styles.resumeButtonText}>Resume</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.pauseButton}
                onPress={pauseTimer}
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
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Timer;
