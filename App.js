import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <img
        src="https://i.ytimg.com/an_webp/UBBHpoW3AKA/mqdefault_6s.webp?du=3000&sqp=CMDew4AG&rs=AOn4CLCWO6WT8OCC1jcxa_CAoO_vyHn83Q"
        alt=""
        style={{ margin: "10px" }}
      />
      <input style={{ outlineWidth: 0 }} type="text" placeholder="input.." />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
});
