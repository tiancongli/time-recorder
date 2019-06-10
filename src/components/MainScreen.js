import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { APP, BLOCK, CATEGORY } from '../constant';
import Block from './Block';
import BlockAdd from './BlockAdd';
import BlockOverlay from './BlockOverlay';
import Container from './Container';

import { addRecord } from '../redux/actions';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.header = 'MAIN MENU'
  }

  createDailyReport() {
    let report = {};
    // initiate report
    for (var key in CATEGORY) {
      report[key] = 0;
    }

    // sum up category proportions
    this.props.blocks.map(block => {
      report[block.category] += block.acc;
    });

    // change milisecs to hour
    let left = 24 - this.props.sleepHr;
    for (var key in report) {
      report[key] = report[key] / APP.HOUR;
      left -= report[key];
    }

    // assign undistributed time if existed
    if(left > 0) {
      report[CATEGORY.UNDISTRIBUTED] = left;
    } 

    return report;
  }

  endTheDay() {
    const report = this.createDailyReport();
    this.props.addRecord(report);
    this.props.navigation.navigate('Modal');
  }

  render() {
    return (
      <Container header={this.header}>
        <BlockOverlay/>
        <View style={styles.boxes}>
          {
            this.props.blocks.map(
              (block, index) => 
              <Block 
                block={block}
                bid={index}
                key={index}
              />
            )
          }
          <BlockAdd/>
        </View>
        <View style={styles.endBtn}>
          <Button
            title="End the Day"
            onPress={() => this.endTheDay()}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { block, userSettings } = state;
  const blocks = block.blocks;
  const sleepHr = userSettings.sleepHr;
  return { blocks, sleepHr };
};

const styles = StyleSheet.create({
  boxes: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: BLOCK.MARGIN,
    alignItems: 'center',
    alignContent: 'center',
  },
  endBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, { addRecord })(MainScreen);