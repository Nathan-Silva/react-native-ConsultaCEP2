import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        alignItems: 'center'
    },

    containerResultado: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingTop: 70,
        alignItems: 'stretch'
    },

    textoResultado: {
        fontSize: 23,
        color: '#000000',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },

    header: {
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    

    text: {
        fontSize: 20,
        fontFamily: 'arial',
        backgroundColor: '#fff',
        marginTop: 40,
        marginLeft: 30
    },

    input: {
        fontSize: 20,
        fontFamily: 'arial',
        marginTop: 40,
        borderColor: '#000000',
        width: 200,
        fontSize: 20,
        marginTop: 30
    },

    botaoConsultar: {
        backgroundColor: '#008000',
        marginTop: 20,
        height: 50,
        width: 200,
        paddingTop: 4,
        borderRadius: 10
    },

    textoBotaoEnviar: {
        color: '#ffff',
        textAlign: 'center',
        fontSize: 30,

    },

    imagem: {
        marginBottom: 20,
    
    }

});



