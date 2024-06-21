import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity , Text} from 'react-native';
import {Dimensions } from 'react-native';
import ProfileButton from './ProfileButton';
import { AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

class MailView extends Component {
  render() {
    const Mcolor = this.props.bgcolor;
    const Mletter = this.props.letter;
    const title = this.props.title;
    const content = this.props.content;
    const clock = this.props.clock;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{width:screenWidth*0.9*0.2}}>
            <ProfileButton bgcolor={Mcolor} letter={Mletter}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:screenWidth*0.9*0.5}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </TouchableOpacity>
        <View style={{width:screenWidth*0.9*0.1,justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:10}}>{clock}</Text>
            <TouchableOpacity style={{marginTop:5}}>
                <AntDesign name="star" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:screenWidth,
    height:100,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  title:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },
  content:{
    color:'#fff',
    fontSize:14
  },
 
});

export default MailView;
