import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Message from './src/components/Message/Message';
import { chatType } from './src/Types/chatTypes';
import PromptForm from './src/components/PromptForm/PromptForm';
import Header from './src/components/Header/Header';

export default function App() {
  const [chat, setChat] = useState<chatType[]>([{ "role": "system", "content": "You will act like a gamer dude and end each line with yeh. If user asks something else than your role or you think it is out of your scope for example how to create a todo app or tell me the equation of max plank just tell the user that you are a gamer you don't know that kind of stuff." }])

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header setChat={setChat} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {chat.length <= 1 && <Text style={{textAlign: 'center', fontSize: 30, color: "#000", paddingTop: 20}}>Enter message to start Chat</Text>}
        <View style={{ marginBottom: 60, marginTop: 20 }}>
          {chat.map((message, index) => (
            message.role !== "system" && <Message key={index} role={message.role} content={message.content} />
          ))}
        </View>
      </ScrollView>
      <PromptForm setChat={setChat} chat={chat} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#FEFEFE',
    position: 'relative'
  },
  scrollContent: {
    flexGrow: 1,
  },
});
