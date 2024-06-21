import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity , Text} from 'react-native';

class ProfileButton extends Component {
  render() {
    const bgcolor = this.props.bgcolor;
    const letter = this.props.letter;
    const profile = this.props.profile;
    let size=70;
    let radius=35;

    if(profile==='1')
      {
        size=35
        radius=20
      }
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={[styles.button,{backgroundColor:bgcolor, height:size,width:size, borderRadius:radius}]}>
          <Text style={[styles.letter,{fontSize:radius}]}>{letter}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f9f9f9'
  },
  letter:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
});

export default ProfileButton;
