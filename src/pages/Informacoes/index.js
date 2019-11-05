import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

export default class Informacoes extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Este aplicativo tem como objetivo fornecer ao usuário uma mobilidade para consultar qualquer CEP do Brasil na palma da sua mão.</Text>
            </View>
        )
    }
}