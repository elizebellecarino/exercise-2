import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import background from '../assets/background.jpg';
import HeadingText from '../components/UI/TextHeading';
import ButtonWithBackground from '../components/UI/ButtonWithBackground';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
  
  render() {
    return (
     <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
      <HeadingText>Welcome to Ting</HeadingText>
      <View style={{width:'90%'}}>
      <ButtonWithBackground>Login</ButtonWithBackground>
      <ButtonWithBackground onPress={() => this.props.navigation.navigate('Name')}>Sign Up</ButtonWithBackground>
      </View>
      </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
},

backgroundImage: {
   width: "100%",
   flex: 1
}

});
