import React, { Component } from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Button, Overlay, Text, Divider, Input, Icon } from 'react-native-elements';
// import { Text } from 'react-native';
import { connect} from 'react-redux';
import { hideOverlay, addBlock } from '../redux/actions';

import { OVERLAY, CATEGORY } from '../constant';

class BlockOverlay extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.state = {
      name: null,
      category: CATEGORY.PHONE,
      name_valid: true
    }
  }

  validate() {
    return this.state.name != null && 
    this.state.name.trim().length !=0 ? true : false; 
  }

  submit() {
    const name_valid = this.validate()
    this.setState({name_valid})
    if (!name_valid) {
      this.textInput && (this.textInput.focus(), this.textInput.shake());
    } else {
      const { addBlock, hideOverlay } = this.props;
      addBlock(this.state.name, this.state.category);
      hideOverlay();
      this.setState({
        name: null
      });
    }
  }

  render() {
    const { isVisible, hideOverlay } = this.props;
    return (
      <Overlay 
        isVisible={isVisible}
        onBackdropPress={() => hideOverlay()}
        height={OVERLAY.OVERLAY_SIZE}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text h3> ADD ITEM </Text>
          </View>
          <Divider/>
          <Input
            leftIcon={
              <Icon
                name="pencil"
                type="font-awesome"
                color="rgba(171, 189, 219, 1)"
                iconStyle={styles.inputIcon}
              />
            }
            placeholder="NAME"
            shake={true}
            ref={el => this.textInput = el}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            errorMessage={this.state.name_valid ? null : "empty name"}
            errorStyle={styles.inputError}
            autoFocus={true}
          />
          <Picker
            selectedValue={this.state.category}
            onValueChange={(category, index) => 
              this.setState({category})
            }
          >
            <Picker.Item label="STUDY" value={CATEGORY.STUDY}/>
            <Picker.Item label="WORK" value={CATEGORY.WORK}/>
            <Picker.Item label="ZEN" value={CATEGORY.ZEN}/>
            <Picker.Item label="PHONE" value={CATEGORY.PHONE}/>
            <Picker.Item label="GAME" value={CATEGORY.GAME}/>
            <Picker.Item label="MUSIC" value={CATEGORY.MUSIC}/>
            <Picker.Item label="FUN" value={CATEGORY.FUN}/>
          </Picker>

          <Button
            title="Add"
            onPress={() => this.submit()}
          />
        </View>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  const { overlay } = state;
  const isVisible = overlay.visible;
  return { isVisible };
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-around',
    padding: 20
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    marginRight: 15
  },
  inputError: {
    textAlign: 'center', 
    fontSize: 12
  }
});

export default connect(mapStateToProps, { hideOverlay, addBlock })(BlockOverlay);