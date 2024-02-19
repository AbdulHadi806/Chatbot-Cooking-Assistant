import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Message = ({ role, content }: { role: string; content: string }) => {
    return (
        <View style={[styles.container, role=='user' ? styles.containerHuman : styles.containerBot]}>
            <Text style={role=='user' ? styles.textHuman : styles.textBot}>
            {content}
            </Text>
        </View>
    );
}

export default Message;

const styles = StyleSheet.create({
    container: {
        maxWidth: '80%', 
        alignSelf: 'flex-start',
        margin: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    containerHuman: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end',
    },
    containerBot: {
        backgroundColor: '#eee',
        alignSelf: 'flex-start',
    },
    textHuman: {
        color: "#fff",
        fontSize: 16,
    },
    textBot: {
        color: "#000",
        fontSize: 16,
    }
});
