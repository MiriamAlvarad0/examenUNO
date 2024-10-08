import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Video } from "expo-av";

const StackScreen = () => {
  const background = require('../video/monster.mp4'); // Asegúrate de que este archivo existe

  return (
    
    <View style={styles.container}>
      <Video
        source={background}
        style={styles.backgroundVideo}
        useNativeControls
        resizeMode="contain"
        isLooping
      />  <Text style={styles.title}>Video edit de Monster</Text>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top: 10,
    left: 500,
    bottom: 0,
    right: 100,
    marginTop: 100 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    right: 65,
    marginTop: 40 
},
});

export default StackScreen;
