import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CHeaderParams {
  title: string;
}
const CHeader = (params: CHeaderParams) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{params.title}</Text>
  </View>
);
const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#f8f9fa', // Exemplo de cor de fundo
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default CHeader;
