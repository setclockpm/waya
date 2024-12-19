import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WAYA</Text>
      <Text style={styles.subheader}> (When Are You Available)</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: '#23e5d5',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
  },
  subheader: {
    color: '#333',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
  }
})
