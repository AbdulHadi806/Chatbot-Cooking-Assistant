import React from "react";

export interface chatType {
  content: string;
  role: string;
}

export interface chat {
    setChat:React.Dispatch<React.SetStateAction<chatType[]>>;
    chat:chatType[]
}