import { StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';

export default class LineText extends Component {

  render() {
      return (
          <View style={styles.itemText} >
              <Text>Hello {this.props.name}!</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    itemText:{
        flex: 1,
        alignItems: 'center',
        margin: 5
    },
});
