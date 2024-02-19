import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { chatType } from '../../Types/chatTypes';
import Icon from 'react-native-vector-icons/Entypo';
import CustomBtn from '../Common/CustomBtn';

interface HeaderProps {
    setChat: React.Dispatch<React.SetStateAction<chatType[]>>
}

const Header = ({setChat}: HeaderProps) => {
    const chatResetHander = () => {
        setChat([{ "role": "system", "content": "You will act like a gamer dude and end each line with yeh. If user asks something else than your role or you think it is out of your scope for example how to create a todo app or tell me the equation of max plank just tell the user that you are a gamer you don't know that kind of stuff." }])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cooking Assistant</Text>
            
            <CustomBtn 
                onPress={chatResetHander}
                icon={<Icon name="cycle" size={24} color="#fff" />}

             />
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FEFEFE'
    },
});