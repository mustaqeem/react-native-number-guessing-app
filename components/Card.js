import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowRadius:6,
        shadowOffset: {height: 2, width: 0},
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default Card;