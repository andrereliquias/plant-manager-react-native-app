import React from 'react';
import {
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions, //Obtem info do tamanho da tela de forma dinamica
    View
} from "react-native";
import { Feather } from '@expo/vector-icons'; //Importa de uma API de icones


import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
    const navigation = useNavigation(); //Com esse cara aqui que conseguimos fazer a navegacao

    function handleStart() {
        navigation.navigate('UserIdentification'); //Isso aq faz navegar ate a pagina UserIdentification
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} suas plantas de {'\n'} forma facil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Nao esqueca mais de regar suas plantas.
                    Nos cuidamos de lembrar voce sempre que precisar.
                </Text>

                <TouchableOpacity style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart} //Quando apertar no botao vai chamar essa funcao para navegar
                >

                    <Feather name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around', //nao cola nas bordas
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})