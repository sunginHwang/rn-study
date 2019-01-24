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
                      return(<View style={styles.listItemArea} key={index} >
                              <Text style={styles.listBullet} >{'\u2022'}</Text>
                              <Text style={styles.listItem} >{list}</Text>
                          </View>
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
    listItemArea:{
        marginTop:10,
        flexDirection: 'row',
    },
    listItem:{
        lineHeight:15,
        color:'#666',
        fontWeight:'500',
        fontSize:15,
    },
    listBullet:{
        lineHeight:15,
        color:'#666',
        fontWeight:'500',
        fontSize:15,
        paddingRight:10,
    }

});
