import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { chat } from '../../Types/chatTypes';
import CustomBtn from '../Common/CustomBtn';
import AudioRecord from './AudioRecord';

const PromptForm = ({ chat, setChat }: chat) => {
    const [inputText, setInputText] = useState<string>('');
    const [buttonHandler, setButtonHandler] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)
    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    async function callOpenAIAPI() {
      if(inputText.length <= 0) return console.log("Please ask something.")
      
      setIsLoading(true)
        console.log("Calling the OpenAI API", chat);
        if(chat.length <= 0) return console.log("No data in chat")
        const APIBody = {
          "model": "gpt-3.5-turbo",
          "messages": chat,
          "temperature": 0,
          "max_tokens": 60,
          "top_p": 1.0,
          "frequency_penalty": 0.0,
          "presence_penalty": 0.0,
          "stop": ['assistant:', 'user:']
        };
      
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer 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` 
            },
            body: JSON.stringify(APIBody)
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          const content = data.choices[0].message.content;
          setChat([...chat, {content, role: "assistant"}]);
          console.log(data.choices[0].message);
          setIsLoading(false)
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
        setIsLoading(false)
      }
      

      const handleCopyState = () => {
        if(inputText.length > 0){
          setChat([...chat, {role: "user", content: inputText}])
          setButtonHandler(buttonHandler + 1)
        }
    };
    useEffect(() => {
      if(buttonHandler > 0) {
        callOpenAIAPI()
      }
    }, [buttonHandler])
    return (
        <View style={styles.container}>
          {isLoading && <Text style={styles.botSpeaking}>Creating The Best Recipe...</Text>}
            <TextInput
                style={styles.input}
                onChangeText={handleInputChange}
                value={inputText}
                placeholderTextColor="#000"
                placeholder="Ask the AI..."
            />
            <AudioRecord />
            <CustomBtn 
                onPress={handleCopyState}
                propStyle={styles.searchBtn}
                icon={<AntDesign name="search1" size={30} color="#000" />}
             />
        </View>
    );
};

export default PromptForm;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        paddingBottom: 10,
        bottom: 0,
        right: 0,
        left: 0,
        padding: 10,
    },
    botSpeaking: {
      color: '#000'
    },
    input: {
        height: 40,
        borderColor: '#000',
        color: "#000",
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        width: '100%',
        borderRadius: 5
    },
    searchBtn: {
        position: 'absolute',
        right: 20,
        bottom: 21
    },
    recordBtn: {
      position: 'absolute',
      right: 60,
      bottom: 16
  }
});