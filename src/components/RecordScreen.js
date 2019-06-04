import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from "react-native-elements";
import { connect } from 'react-redux';

import ColorLabel from './ColorLabel';
import AreaPic from './AreaPic';

class RecordScreen extends Component {
  render() {
    const lastReportDisabled = this.props.records.length == 0 ? true : false;
    return (
      <View style={styles.container}>
        <View style={styles.lastReport}>
          <Button
            icon={
              <Icon
                name="add-circle-outline"
                type="MaterialIcons"
                size={20}
                color="white"
                iconStyle={{margin: 3}}
              />
            }
            title="Last Report"
            onPress={() => this.props.navigation.navigate('RecordModal')}
            disabled={lastReportDisabled}
          />
        </View>
        <View style={styles.areaContainer}>
          <AreaPic data={this.props.records}/>
        </View>
        <View>
          <ColorLabel/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let { records } = state;
  records = records.records;
  return { records };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lastReport: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 30

  },
  areaContainer: {
    justifyContent: 'center',
    marginTop: 30
  },

});

export default connect(mapStateToProps)(RecordScreen);