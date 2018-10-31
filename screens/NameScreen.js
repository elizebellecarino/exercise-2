import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,ImageBackground, TextInput} from 'react-native';
import { Header, Left, Icon } from 'native-base';
import background from '../assets/background.jpg';
import HeadingText from '../components/UI/TextHeading';


class NameScreen extends Component {
    static navigationOptions = {
        header: null
    }

render() {
    return (
        <ImageBackground source={background} style={styles.backgroundImage}>
        <Header style={{backgroundColor:'transparent'}}>
        <Left style={{marginLeft:"-40%"}}>
              <Icon name='ios-arrow-back' style={{paddingRight:50, color:'black'}}
                onPress={() => this.props.navigation.navigate('Home') }/>
          </Left>
        </Header>
        <View style={styles.container}>
        <HeadingText>What is your name?</HeadingText>
        <Text style={{color:'white', marginLeft:'-70%',fontSize:13}}>First Name</Text>
        <TextInput style={styles.input} underlineColorAndroid='white'/>
        <Text style={{color:'white',marginLeft:'-70%',fontSize:13}}>Last Name</Text>
        <TextInput style={styles.input} underlineColorAndroid='white'/>
        <Icon name='ios-arrow-dropright-circle' style={{color:'white', marginRight:'-70%'}} onPress={() => this.props.navigation.navigate('Email') }/>
        </View>
        </ImageBackground>

    );
  }
}

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  
  input: {
    width: '90%'
},
backgroundImage: {
    width: "100%",
    flex: 1
 }
});
