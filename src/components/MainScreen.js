import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header } from 'react-native-elements';

import { APP, BLOCK, CATEGORY } from '../constant';
import Block from './Block';
import BlockAdd from './BlockAdd';
import BlockOverlay from './BlockOverlay';

import { addRecord } from '../redux/actions';

class MainScreen extends Component {
  constructor(props) {
    super(props);
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
      report[key] = Math.round( (report[key] / APP.HOUR) * 100 ) / 100;
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
        <View style={styles.bg}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <View style={styles.container}>
            <BlockOverlay/>
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
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { block, userSettings } = state;
  const blocks = block.blocks;
  const sleepHr = userSettings.sleepHr;
  return { blocks, sleepHr };
};

/************* styles ***************** */
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'bisque'
  },
  container: {
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