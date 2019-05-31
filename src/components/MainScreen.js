import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header } from 'react-native-elements';

import { BLOCK } from '../constant';
import Block from './Block';
import BlockAdd from './BlockAdd';
import BlockOverlay from './BlockOverlay';

class MainScreen extends Component {
  constructor(props) {
    super(props);
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
              onPress={() => this.props.navigation.navigate('Modal')}
            />
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

export default connect(mapStateToProps)(MainScreen);