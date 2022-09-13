import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Text style={styles.title2}>Designed by Lemaun</Text>
      <StatusBar style="auto" backgroundColor="#d0ff00"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f5f5f5',
    fontSize: 22
  },
  title2: {
    color: '#d0ff00',
    fontSize: 18,
    textDecoration: 'italic'
  }
});
