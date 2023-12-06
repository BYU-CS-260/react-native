import React, {Component} from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      cities:[]
    }
  }

  handleChange = (newText) => {
    this.setState({value: newText});

    let url = "https://csonline.fhtl.org?q=" + newText;
    fetch(url)
      .then((data) => {
        return (data.json());
      })
      .then((citylist) => {
        console.log(citylist)
        this.setState({cities:citylist})
      });
  }

  render() { 
    return (
      <>
      <Text>Cities API</Text>
      <TextInput
        style={{height:40}}
        placeholder="Enter a city"
        onChangeText={newText => this.handleChange(newText)}
        defaultValue={this.state.value}
      />
      {this.state.cities.map((cityName) => <Text>{cityName.city}</Text>)}

      </>
    );    
  } 
}

export default App;
