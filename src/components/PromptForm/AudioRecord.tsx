import React, { useState } from 'react'
import CustomBtn from '../Common/CustomBtn'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

const AudioRecord = () => {
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const testHandler = () => {
        setIsRecording(!isRecording)
    }
    return (
        <View style={styles.recordBtn}>
            {isRecording ?
                <CustomBtn
                    onPress={testHandler}
                    icon={<FontAwesome name="microphone-slash" size={24} color="#000" />}
                />
                :
                <CustomBtn
                    onPress={testHandler}
                    icon={<FontAwesome name="microphone" size={24} color="#000" />}
                />
            }
        </View>
    )
}

export default AudioRecord

const styles = StyleSheet.create({
    recordBtn: {
        position: 'absolute',
        right: 60,
        bottom: 16
    }
});