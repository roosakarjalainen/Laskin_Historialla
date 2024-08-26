import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [ekaNumero, setEkaNumero] = useState('');
  const [tokaNumero, setTokaNumero] = useState('');
  const [tulos, setTulos] = useState(null);
  const [historia, setHistoria] = useState([]);

  const handleSumma = () => {
    const summa = parseFloat(ekaNumero) + parseFloat(tokaNumero);
    setTulos(summa);
    updateHistoria(ekaNumero, tokaNumero, '+', summa);
  };

  const handleVahennys = () => {
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
      </View>

      <View style={styles.historiaContainer}>
        <Text style={styles.historiaHeader}>History:</Text>
        <FlatList
          data={historia}
          renderItem={({ item }) => <Text style={styles.historiaItem}>{item}</Text>}
          style={styles.historiaList}
        />
      </View>

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
    width: '60%',
  },
  button: {
    backgroundColor: '#4da6ff',
    padding: 10,
    width: 50,
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
  historiaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '80%',
  },
  historiaHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historiaList: {
    width: '100%',
  },
  historiaItem: {
    fontSize: 20,
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
});
