import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Spor Sağlık Uygulaması Çalışıyor!</Text>
            <Text style={styles.subtext}>Eğer bu yazıyı görüyorsanız kurulum başarılıdır.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtext: {
        color: '#aaa',
        fontSize: 16,
    },
});
