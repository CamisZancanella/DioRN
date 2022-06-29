import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const imageProfileGithub =
    'https://avatars.githubusercontent.com/u/101130880?v=4';
const urlToMyGitHub = 'https://github.com/CamisZancanella';

const App = () => {

    const handlePressGoToGitHub = async () =>{
        console.log('Verificando link');
     const res = await Linking.canOpenURL(urlToMyGitHub);
     if (res){
        console.log('Link aprovado');
        console.log('Abrindo link...');
       await Linking.openURL(urlToMyGitHub);
     }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image 
                AcessibilityLabel="Camila de óculos" 
                style={style.avatar} 
                source={{ uri: imageProfileGithub}}
                />
                <Text AcessibilityLabel='Nome: Camila Zancanella' style={[style.defaultText, style.name]}>Camila Zancanella</Text>
                <Text AcessibilityLabel= 'Nickname: Camis Zancanella' style={[style.defaultText, style.nickname]}>Camis Zancanella</Text>
                <Text AcessibilityLabel= 'Descrição: Camila Zancanella' style={[style.defaultText, style.description]}>Engenheira de software, futura estagiária do Avanade</Text>
                <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.buttom}>
                    <Text style={[style.defaultText, style.textButtom]}> Open in GitHub</Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    ); 
};

export default App; 

const style = StyleSheet.create({
    container: {
        //Column
        backgroundColor: colorGithub, 
        flex:1, //Expandi para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row', 
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200, 
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
defaultText:{
    color: colorFontGitHub,
},
name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
},
nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
},
description: {
    fontWeight: 'bold',
    fontSize: 16,
},
buttom: {
marginTop: 20,
backgroundColor: colorDarkFontGitHub,
borderRadius: 10,
padding: 20,
},
textButtom: {
    fontWeight: 'bold',
    fontSize: 16,
},
});