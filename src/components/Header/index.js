import  React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions
} from 'react-native';

import { styles } from './styles';


export default class Header extends Component{

    constructor(props){
        super(props)
        this.state = { 
            isMessage: true
        }

        setInterval(() => {
            this.setState(previousState =>{
                return { isMessage: !previousState.isMessage}
            })
        }, 1000)
    }

    render(){
        let display = this.state.isMessage ? this.props.msg : ' '
        
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{display}</Text>
            </View>
        );
    }
};
