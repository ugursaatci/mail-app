import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, ScrollView} from 'react-native';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfileButton from './ProfileButton';
import MailView from './MailView';

const screenWidth = Dimensions.get('window').width;

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.searchBox}>
          <TouchableOpacity>
            <Feather name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <TextInput 
            style={styles.input}
            placeholder='Search in Emails' 
            placeholderTextColor={'#adb7b8'}
          />
          <ProfileButton bgcolor='#b968c7' letter='U' profile='1'/>
        </View>

        <View style={styles.header}>
            <Text style={styles.headerText}>Inbox</Text>
        </View>
        <ScrollView>
            <MailView bgcolor='#b968c7' letter='U' title='Meeting Reminder' content='Dont forget about the meeting tomorrow at 10 AM.' clock='9:30 AM'/>
            <MailView bgcolor='#5bc0de' letter='V' title='Vacation Request Approved' content='Your vacation request has been approved. Enjoy your time off!' clock='11:31 AM'/>
            <MailView bgcolor='#f0ad4e' letter='W' title='Invoice Payment Due' content='Your invoice payment of $500 is due by the end of the week.' clock='2 days ago'/>
            <MailView bgcolor='#d9534f' letter='X' title='Important Update' content='Please read the attached document for an important update regarding our project.' clock='1 hour ago'/>
            <MailView bgcolor='#5cb85c' letter='Y' title='Feedback Request' content='We value your opinion! Please take a moment to provide feedback on our services.' clock='3 days ago'/>
            <MailView bgcolor='#0275d8' letter='Z' title='New Product Announcement' content='Introducing our latest product, now available for pre-order.' clock='Last week'/>
            <MailView bgcolor='#f0ad4e' letter='A' title='Welcome New Employee' content='Please join us in welcoming our newest team member, John Doe.' clock='Just now'/>
            <MailView bgcolor='#d9534f' letter='B' title='Holiday Closure' content='Please note that our office will be closed on Monday for the holiday.' clock='Next week'/>
            <MailView bgcolor='#5cb85c' letter='C' title='Feedback Survey' content='Help us improve by completing our short feedback survey.' clock='4 hours ago'/>
            <MailView bgcolor='#0275d8' letter='D' title='Account Update' content='Your account information has been updated. Please review the changes.' clock='Yesterday'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#0b1516'
  },
  searchBox: {
    width: screenWidth * 0.9,
    height: 50,
    backgroundColor: '#222c2d',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:20
  },
  input: {
    color: '#fff',
    width: screenWidth * 0.5,
  },
  header:{
    marginTop:15,
    width:screenWidth,
    alignItems:'flex-start',
    left:25
  },
  headerText:{
    color:'#c0cacb',
    fontSize:18
  }
});

export default Home;
