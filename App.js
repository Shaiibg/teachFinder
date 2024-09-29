import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.login}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>
          <TextInput style={styles.textInput} placeholder='Correo Electrónico' />
          <TextInput style={styles.textInput} placeholder='Contraseña'/>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singUp}>
          <Text style={styles.subtitle}>¿Aún no tienes una cuenta?</Text>
          <Text style={styles.text}>Regístrate para que puedas iniciar sesión</Text>
          <TouchableOpacity style={styles.singButton}>
            <Text style={styles.singButtonText}>Regístrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box:{
    flex: 1,
    flexDirection: 'row',//Permite que los contenedores estén alineados.
    alignItems: 'center',
    margin: 'auto',
  },
  login:{
    flex: 1,
    borderLeftWidth: 9,
    borderLeftColor: '#FF1111',
    padding: 10,

  },
  singUp:{
    flex: 1,
    backgroundColor: '#FF1111',
    padding: 30,
  },
  titulo: {
    fontSize: 32,
    color: '#FF1111',
    marginBottom: 20,
    paddingVertical: 5,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: 24,
    color: '#fff',
    paddingVertical: 5,
  },
  textInput: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
  },
  text: {
    color: '#fff',
    paddingVertical: 20,
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',

  },
  singButton:{
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  singButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },

});
