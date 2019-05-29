import React, { Component } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux';

import { startBlock, stopBlock } from '../redux/actions';
import { BLOCK, CATEGORY } from '../constant';
import { getShowTime } from '../utils';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: getShowTime(this.props.block.acc, 
        this.props.block.start, this.props.block.stop)
    }

    if (!this.props.block.stop) {
      this.resumeTiming();
    }
  }

  tiktok() {
    this.setState({
      showTime: getShowTime(this.props.block.acc, 
        this.props.block.start, this.props.block.stop)
    });
  }

  startTiming() {
    this.props.startBlock(this.props.bid);
    this.timer = setInterval(() => this.tiktok(), 1000);
  }

  stopTiming() {
    this.props.stopBlock(this.props.bid);
    this.timer && clearInterval(this.timer);
  }

  toggleTiming() {
    if (this.props.block.stop) {
      this.startTiming();
    } else {
      this.stopTiming();
    }
  }
  
  resumeTiming() {
    this.timer = setInterval(() => this.tiktok(), 1000);
  }

  componentWillUnmount() {
    this.stopTiming();
  }

  alert() {
    const alertContent = this.props.block.stop ? 'START' : 'STOP';
    Alert.alert(
      this.props.block.name,
      alertContent,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.toggleTiming()},
      ]
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.block, styles[this.props.block.category]]}
        onPress={() => this.alert()}
      >
        <Text
          style={styles.blockText}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {this.props.block.name}
        </Text>
        <Text>
          {Math.floor(this.state.showTime/1000)}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    width: BLOCK.CONTENT_SIZE,
    height: BLOCK.CONTENT_SIZE,
    margin: BLOCK.MARGIN,
    padding: 5,
  },
  blockText: {
    fontSize: BLOCK.TEXT_SIZE
  },
  [CATEGORY.STUDY]: {
    backgroundColor: 'dodgerblue',
  },
  [CATEGORY.WORK]: {
    backgroundColor: 'lightslategrey',
  },
  [CATEGORY.ZEN]: {
    backgroundColor: 'coral'
  },
  [CATEGORY.PHONE]: {
    backgroundColor: 'gold'
  },
  [CATEGORY.GAME]: {
    backgroundColor: 'blueviolet'
  },
  [CATEGORY.MUSIC]: {
    backgroundColor: 'lawngreen'
  },
  [CATEGORY.FUN]: {
    backgroundColor: 'olive',
  },
});

export default connect(null, { startBlock, stopBlock })(Block);