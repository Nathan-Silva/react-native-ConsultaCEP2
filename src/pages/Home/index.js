import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';

import {styles} from './styles'


export default class Main extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                
                <StatusBar backgroundColor="#008000" barStyle="ligth-content"/>
                <Image source={require('../../assets/logoviacep.png')}
                
                style={styles.imagem}/>

                <TouchableOpacity style={styles.botoaoConsultar} onPress={() => this.props.navigation.navigate('Pesquisa')}>
                    <Text style={styles.textoBotoes}>Consultar CEP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoInformacoes} onPress={() => this.props.navigation.navigate('Informacoes')}>
                    <Text style={styles.textoBotoes}>Informações sobre o Aplicativo</Text>
                </TouchableOpacity>

            </View>
        )
    }
}