import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert('Hello', 'You typed: ' + message);
  }

  const [message, setMessage] = useState('');

  const startGame = () => {
    //Generate random number 1-100
    //Initialize message state
    // reset counts
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style={{width: 200, borderColor: 'grey', borderWidth: 1}}
      onChangeText={text => setMessage(text)}
      />
      <Button title='Press me' onPress={showAlert}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
