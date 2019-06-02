import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect} from 'react-redux';
import { Header } from 'react-native-elements';

import { APP, CATEGORY } from '../constant';
import Pie from '../components/Pie';


class DayModalScreen extends Component {
  constructor(props) {
    super(props);
    this.categories = {};
    this.createDailyReport();
  }

  createDailyReport() {
    // sum up category proportions
    this.props.blocks.map(block => {
      if (!(block.category in this.categories)) {
        this.categories[block.category] = 0;
      }
      this.categories[block.category] += block.acc;
    });

    // change milisecs to hour
    let left = 24 - this.props.sleepHr;
    for (var key in this.categories) {
      this.categories[key] = Math.round( (this.categories[key] / APP.HOUR) * 100 ) / 100;
      left -= this.categories[key];
    }

    // assign undistributed time if existed
    if(left > 0) {
      this.categories[CATEGORY.UNDISTRIBUTED] = left;
    } 
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header
          leftComponent={
            {
              icon: 'keyboard-arrow-down',
              type: 'MaterialIcons',
              color: '#fff',
              onPress: () => this.props.navigation.goBack()
            }
          }
          centerComponent={{ text: 'Report', style: { color: '#fff' } }}
        />
        <View style={ styles.pieContainer }>
          <Pie data={this.categories}/>
        </View>
        <View style={ styles.conclusion }>
          <Text>keep working!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pieContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  conclusion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(DayModalScreen);