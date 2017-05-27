
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos:[],
      newTodo:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(text) {
    this.setState({newTodo:text});
  }

  handlePress() {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo:''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          adb reverse tcp:8081 tcp:8081
        </Text>
        <TextInput style={styles.textInput} value={this.state.newTodo} onChangeText={this.handleChange}/>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Board Tap</Text>
        </TouchableHighlight>
        <View>
          {this.state.todos.map((todo,i)=><Text key={i}>{todo}</Text>)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor:'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width:'90%'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});