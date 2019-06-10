import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { BLOCK } from '../constant';

export default function Container(props) {
  return (
    <View style={ styles.container }>
      <Header
        centerComponent={{ text: props.header, style: { color: 'white' }}}
      />
      <View style={ styles.content }>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'bisque',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});