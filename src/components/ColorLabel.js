import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CATEGORY_BG, CATEGORY } from '../constant';

export default class ColorLabel extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          Object.keys(CATEGORY).map((category, index) => 
            <View 
              style={[styles.item, styles[category]]}
              key={index}
            >
              <Text>{category}</Text>
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    padding: 5
  },
  ...CATEGORY_BG
});