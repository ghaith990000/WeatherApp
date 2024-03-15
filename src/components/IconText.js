import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const IconText = ({iconName, iconColor, bodyText, bodyTextStyles }) => {
    return (
        <View>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    }
});

export default IconText