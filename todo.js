import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

const Todo = () => {
  const [text, setText] = useState('Enter A Task Here');
  const [todos, setTodos] = useState(['foo', 'bar', 'goo']);
  return (
    <View style={{ padding: 100 }}>
      <Text> Todo List </Text>
      <Text> ------- </Text>
      <TextInput
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        value={text}
      />
      <Button
        title="Submit task"
        color="blue"
        underlayColor='#fff'
        //onPress={() => setText("pressed")}
        onPress={() => {
          Alert.alert('button');
          setTodos([...todos, text]);
          setText('Enter A Task');
        }}>
        Add
      </Button>
      <Text> {text} </Text>
      {todos.map((task) => (
        <Text>{task}</Text>
      ))}
    </View>
  );
};

export default Todo;
