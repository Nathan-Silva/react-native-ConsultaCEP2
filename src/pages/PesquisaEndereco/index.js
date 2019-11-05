/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';

import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { styles } from './styles';

import  Header  from '../../components/Header';


export default class ConsultaCEP extends Component {

    constructor(props){
        super(props)
        this.state = {
            endereco: [],
            inputCEP: ''
        }
    }
    
    componentDidMount(text){
        fetch('https://viacep.com.br/ws/' + text + '/json/unicode/')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({endereco: responseJson})
        })
    }

    consultarCEP(){
        this.componentDidMount(this.state.inputCEP)
    }

    render(){
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

                <View style={styles.header}>
                    <Header msg='Bem-vindo ao ConsultaCEP!!!'/>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Text style={styles.text}>CEP: </Text>
                    <TextInput style={styles.input}
                                placeholder='Digite Seu CEP aqui.' 
                                keyboardType='numeric'
                                onChangeText={(texto => this.setState({inputCEP: texto}))}/>
                </View>

                <View>
                    <TouchableOpacity style={styles.botaoConsultar} onPress={this.consultarCEP.bind(this)}>
                        <Text style={styles.textoBotaoEnviar}>Consultar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.containerResultado}>
                    <Text style={styles.textoResultado}>CEP: {this.state.endereco.cep}</Text>
                    <Text style={styles.textoResultado}>Logradouro: {this.state.endereco.logradouro}</Text>
                    <Text style={styles.textoResultado}>Complemento: {this.state.endereco.complemento}</Text>
                    <Text style={styles.textoResultado}>Bairro: {this.state.endereco.bairro}</Text>
                    <Text style={styles.textoResultado}>Localidade: {this.state.endereco.localidade}</Text>
                    <Text style={styles.textoResultado}>UF: {this.state.endereco.uf}</Text>
                    <Text style={styles.textoResultado}>Unidade: {this.state.endereco.unidade}</Text>
                    <Text style={styles.textoResultado}>IBGE: {this.state.endereco.ibge}</Text>
                    <Text style={styles.textoResultado}>GIA: {this.state.endereco.gia}</Text>
                </View>

                <ImageBackground source={require('../../assets/logoviacepverde.png')} style={styles.imagem}/>
            </View>
        )
    }
}