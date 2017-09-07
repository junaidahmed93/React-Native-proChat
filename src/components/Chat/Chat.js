import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ChatScreen extends Component {
    static navigationOptions = {
        title: "Chat Screen"
    }
    render() {
        return (
            <View>
                <Text>Chat Screen</Text>
            </View>
        )
    }
}

export default ChatScreen;