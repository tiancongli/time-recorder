import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect} from 'react-redux';
import { Header } from 'react-native-elements';

import Pie from './Pie';
import ColorLabel from './ColorLabel';


class DayModalScreen extends Component {
  constructor(props) {
    super(props);
    this.header = 'REPORT';
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
          centerComponent={{ text: this.header, style: { color: '#fff' } }}
        />
        <View style={ styles.pieContainer }>
          <Pie data={this.props.record}/>
        </View>
        <View style={ styles.colorLabel }>
          <ColorLabel/>
        </View>
        <View style={ styles.conclusion }>
          <Text style={ styles.conclusionText }>keep working!</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let { records } = state;
  records = records.records;
  const record = records[records.length-1];
  return { record };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pieContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  colorLabel: {
    flex: 0.5
  },
  conclusion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conclusionText: {
    fontSize: 30
  }
});

export default connect(mapStateToProps)(DayModalScreen);