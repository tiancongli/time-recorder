import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { BLOCK } from './constant';
import Block from './components/Block';
import BlockAdd from './components/BlockAdd';
import BlockOverlay from './components/BlockOverlay';

/************* main app **************/

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.bg}>
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
        </View>
    );
  }
}

const mapStateToProps = state => {
  const { block } = state;
  const blocks = block.blocks;
  return { blocks };
};

/************* styles ***************** */
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'bisque'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: BLOCK.MARGIN,
    alignItems: 'center',
    // alignContent: 'center',
  },
});

export default connect(mapStateToProps)(App);