import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

interface CustomBtnProps {
    onPress: () => void;
    propStyle?: ViewStyle;
    icon: JSX.Element;
  }

const CustomBtn = ({onPress, propStyle, icon}: CustomBtnProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={propStyle}>
            {icon}
        </TouchableOpacity>
    )
}

export default CustomBtn
