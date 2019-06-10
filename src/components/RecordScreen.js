import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from "react-native-elements";
import { connect } from 'react-redux';

import ColorLabel from './ColorLabel';
import AreaPic from './AreaPic';
import Container from './Container';
import { BLOCK } from '../constant';

class RecordScreen extends Component {
  constructor(props) {
    super(props);
    this.header = 'RECORD';
  }

  render() {
    const lastReportDisabled = this.props.records.length == 0 ? true : false;
    return (
      <Container header={ this.header }>
        <View style={styles.lastReport}>
          <Button
            icon={
              <Icon
                name="remove-red-eye"
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
        <View style={ styles.colorLabel }>
          <ColorLabel/>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let { records } = state;
  records = records.records;
  return { records };
};

const styles = StyleSheet.create({
  lastReport: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 30,
    paddingLeft: BLOCK.MARGIN,
    flex: 1

  },
  areaContainer: {
    justifyContent: 'center',
    flex: 2
  },
  colorLabel: {
    flex: 1
  },
});

export default connect(mapStateToProps)(RecordScreen);