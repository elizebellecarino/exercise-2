import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,ImageBackground, TextInput, Switch} from 'react-native';
import { Header, Left, Icon } from 'native-base';
import background from '../assets/background.jpg';
import HeadingText from '../components/UI/TextHeading';


class EmailScreen extends Component {
    static navigationOptions = {
        header: null
    }

render() {
    return (
        <ImageBackground source={background} style={styles.backgroundImage}>
        <Header style={{backgroundColor:'transparent'}}>
        <Left style={{marginLeft:"-40%"}}>
              <Icon name='ios-arrow-back' style={{paddingRight:50, color:'black'}}
                onPress={() => this.props.navigation.navigate('Name') }/>
          </Left>
        </Header>
        <View style={styles.container}>
        <HeadingText>And, your email?</HeadingText>
        <Text style={{color:'white', marginLeft:'-78%',fontSize:13}}>Email</Text>
        <TextInput style={styles.input} underlineColorAndroid='white'/>
        <Text></Text>
       
        <Icon name='ios-arrow-dropright-circle' style={{color:'white', marginRight:'-70%'}} />
        </View>
        </ImageBackground>

    );
  }
}

export default EmailScreen;

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
