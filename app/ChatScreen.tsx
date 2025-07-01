import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import styles from '@/styles/chatScreenStyles';

import { useSignOut } from '@/hooks/useSignOut';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp?: any;
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { handleSignOut } = useSignOut();

  const sendAutoReply = () => {
    const reply: Message = {
      id: Date.now().toString(),
      text: 'Message received',
      sender: 'other',
    };
    setMessages((prev) => [...prev, reply]);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = {
      text: input,
      sender: 'me',
      timestamp: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, 'messages'), newMessage);
      setMessages((prev) => [...prev, { ...newMessage, id: docRef.id }]);
      setInput('');
      setTimeout(sendAutoReply, 400);
    } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Firestore Error', 'Could not send message');
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.message,
        item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text
        style={
          item.sender === 'me' ? styles.myMessageText : styles.otherMessageText
        }
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'height' : undefined}
        keyboardVerticalOffset={100}
      >
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
        />
      </KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your message"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>↑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
