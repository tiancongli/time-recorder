import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { BLOCK } from '../constant';
import { showOverlay } from '../redux/actions';

const BlockAdd = ({ showOverlay }) => (
  <TouchableOpacity
    style={[styles.block, styles.addBlock]}
    onPress={() => showOverlay()}
  >
    <Text style={styles.addText}>+</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    width: BLOCK.CONTENT_SIZE,
    height: BLOCK.CONTENT_SIZE,
    margin: BLOCK.MARGIN,
    padding: 5,
  },
  addBlock: {
    backgroundColor: 'white',
  },
  addText: {
    fontSize: BLOCK.ADD_TEXT_SIZE,
  },
});

export default connect(null, { showOverlay })(BlockAdd);