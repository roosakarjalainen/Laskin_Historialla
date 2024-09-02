import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function Calculator({ navigation }) {
  const [ekaNumero, setEkaNumero] = useState('');
  const [tokaNumero, setTokaNumero] = useState('');
  const [tulos, setTulos] = useState(null);
  const [historia, setHistoria] = useState([]);

  const handleSumma = () => {
    Keyboard.dismiss();
    const summa = parseFloat(ekaNumero) + parseFloat(tokaNumero);
    setTulos(summa);
    updateHistoria(ekaNumero, tokaNumero, '+', summa);
  };

  const handleVahennys = () => {
    Keyboard.dismiss();
    const vahennys = parseFloat(ekaNumero) - parseFloat(tokaNumero);
    setTulos(vahennys);
    updateHistoria(ekaNumero, tokaNumero, '-', vahennys);
  };

  const updateHistoria = (numero1, numero2, toiminto, tulos) => {
    const uusiEntry = `${numero1} ${toiminto} ${numero2} = ${tulos}`;
    setHistoria([...historia, uusiEntry]);
  };

  return (
    <View style={styles.container}>
      {tulos !== null && (
        <Text style={styles.tulos}>Result: {tulos}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Type a number"
        keyboardType="numeric"
        value={ekaNumero}
        onChangeText={setEkaNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a number"
        keyboardType="numeric"
        value={tokaNumero}
        onChangeText={setTokaNumero}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSumma}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVahennys}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History', { historia })}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 26,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    width: '80%',
  },
  button: {
    backgroundColor: '#4da6ff',
    padding: 10,
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  tulos: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
});
