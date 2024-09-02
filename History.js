import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {
  const { historia } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.historiaHeader}>History:</Text>
      <FlatList
        data={[...historia].reverse()}
        renderItem={({ item }) => <Text style={styles.historiaItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.historiaList}
      />
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
