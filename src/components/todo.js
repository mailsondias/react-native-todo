
import React, { Component } from 'react'

import { StyleSheet, StatusBar, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'

import Icon from '../../node_modules/react-native-vector-icons/Ionicons'

import Item from './item'

require

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemArray: [],
      itemText: ''
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true)

    let items = this.state.itemArray.map(( val, key ) => {
      return <Item key={key} val={val} deleteItem={() => this.deleteItem(key)} />
    })

    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.header}>
            <Image source={require('../images/mussum.jpg')} style={styles.bgMussum} />
            <Text style={styles.headerTitle}>Todo list</Text>
          </View>
          {items}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            onChangeText={(itemText) => this.setState({itemText})}
            placeholder="Say somenthing!"
            placeholderTextColor="white"
            style={styles.textInput} />
          <TouchableOpacity
            onPress={this.addItem.bind(this)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  addItem() {
    if (this.state.itemText)
    {
      var d = new Date()

      this.state.itemArray.push({
        'date': d.getFullYear() +  '/' + (d.getMonth() + 1) +  '/' + d.getDate(),
        'item': this.state.itemText
      })

      this.setState({ itemArray: this.state.itemArray })
      this.setState({ itemText: '' })

      this.state.textText = ''
    }
  }

  deleteItem(key) {
    this.state.itemArray.splice(key, 1)
    this.setState({ itemArray: this.state.itemArray })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // statusbar: {
  //   backgroundColor: '#111',
  //   height: 20 
  // },
  header: {
    position: 'relative'
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
    paddingHorizontal: 30,
    paddingVertical: 6,
    position: 'absolute',
    bottom: 0,
  },
  bgMussum: {
    flex: 1,
    resizeMode: 'cover',
    height: 100,
    width: null,
    paddingTop: 200,
  },
  footer: {
    position: 'absolute',
    'bottom': 0,
    'left': 0,
    'right': 0,
    zIndex: 1
  },
  textInput: {
    color: 'white',
    alignSelf: 'stretch',
    padding: 30,
    fontSize: 20,
    fontWeight: '200',
    backgroundColor: '#222',
    marginBottom: 60
  },
  addButton: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#42A5F5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  addButtonText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '200',
  }
})