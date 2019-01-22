import React, {Component} from 'react';
import {StyleSheet, View, Text,  Dimensions, ScrollView, FlatList} from 'react-native';

const {width} = Dimensions.get('window');

export default class InstructionList extends Component {



    render() {

        return (
          <View>
              <View >
                  <Text style={styles.title}>{this.props.title}</Text>
              </View>
              <View style={styles.listArea}>
              {
                  this.props.lists &&
                  this.props.lists.map((list,index)=>{
                      return(
                          <Text key={index} style={styles.listItem}>{list}</Text>
                      )
                  })
              }
              </View>
          </View>

        )
    }
}


const styles = StyleSheet.create({
    title: {
       color:'#333',
        fontSize:15,
        fontWeight:'bold'
    },
    listArea:{
        marginTop: 5,
        marginBottom: 15,
    },
    listItem:{
      paddingLeft:14,
        marginTop:10,
        lineHeight:18,
        color:'#666',
        fontWeight:'500',
        fontSize:15
    },

});
