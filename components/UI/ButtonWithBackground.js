import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]} >
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor:"black",
        alignItems:'center'
    }
})

export default buttonWithBackground;