
import React, { Component } from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Icon from '../../node_modules/react-native-vector-icons/EvilIcons'

export default class Item extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.item}>
        <Text style={styles.textItemDate}> {this.props.val.date} </Text>
        <Text style={styles.textItem}> {this.props.val.item} </Text>
        <TouchableOpacity
          onPress={this.props.deleteItem}
          style={styles.deleteIcon}>
          <Icon name="close" style={styles.deleteButton} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    padding: 16,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed'
  },
  textItemDate: {
    fontSize: 10,
    color: 'gray',
    paddingLeft: 1,
    marginBottom: 3,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63'
  },
  textItem: {
    fontSize: 18,
    fontWeight: '200',
    paddingLeft: 0,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63'
  },
  deleteIcon: {
    position: 'absolute',
    right: '10',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  deleteButton: {
    color: 'red',
    fontSize: 40,
    paddingTop: 2
  }
})