import {Dimensions} from 'react-native'

import {StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#008000'
    },

    botoaoConsultar: {
        marginTop: 60,
        marginLeft: 55,
        backgroundColor:'#808000',
        borderRadius: 3,
        width: 300,
        height: 60,
        borderRadius: 15,
        paddingTop: 7
    },

    botaoAlgumaCoisa: {
        marginTop: 60,
        marginLeft: 55,
        backgroundColor:'#808000',
        borderRadius: 3,
        width: 300,
        height: 80,
        borderRadius: 15,
        justifyContent: 'center'
    },

    textoBotoes: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'arial',
        alignSelf: 'center',
        textAlign:'center'
    },

    imagem: {
        marginLeft: 65,
        marginTop: 130

     
    }

})