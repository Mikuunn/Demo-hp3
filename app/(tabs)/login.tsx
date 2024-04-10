import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen(): React.ReactNode {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Yesh</Text>
      <View style={styles.position}>
        <View>
          <Text style={styles.text}> Email</Text>
          <TextInput style={styles.input} placeholder="e.g. example@mail.com" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} placeholder="password" />
        </View>
        <View style={styles.signup}>
          <Link href="/(tabs)/signup" style={styles.text}>
            Don't have an account
          </Link>
          <Text style={styles.text}> Forget Password? </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  input: {
    textAlign: 'center',
    height: '45%',
    borderColor: '#000',
    opacity: 20,
    borderWidth: 1,
    width: 300,
    borderRadius: 15,
    margin: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  position: {
    height: '20%',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: '7%',
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});
