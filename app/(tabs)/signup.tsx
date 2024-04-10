import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen(): React.ReactNode {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={styles.contain}>
        <View>
          <Text style={styles.text}> Email</Text>
          <TextInput style={styles.input} placeholder="e.g. example@mail.com" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} placeholder="password" />
        </View>
        <View>
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="confirm password" />
        </View>
        <View style={styles.signup}>
          <Link href="/(tabs)/login" style={styles.text}>
            Have an account
          </Link>
          <Text style={styles.text}> Forget Password? </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  contain: {
    height: '20%',
    gap: 5,
  },
  input: {
    textAlign: 'center',
    borderColor: '#000',
    opacity: 20,
    borderWidth: 1,
    width: 300,
    borderRadius: 15,
    height: '45%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    height: '7%',
    width: 300,
    borderRadius: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  buttonText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
