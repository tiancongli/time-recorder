import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect} from 'react-redux';
import { Header } from 'react-native-elements';

import Pie from '../components/Pie';


class DayModalScreen extends Component {
  constructor(props) {
    super(props);
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
          <Pie data={this.props.record}/>
        </View>
        <View style={ styles.conclusion }>
          <Text>keep working!</Text>
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
  conclusion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(DayModalScreen);