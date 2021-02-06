import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
          <Image source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/220px-Labrador_on_Quantock_%282175262184%29.jpg",
              height: 50,
              width : 50
          }} />
          <Image source={{
              uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
              height: 50,
              width : 50
          }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
