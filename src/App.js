import React, { Component } from 'react';
import { View, Text, Controller, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './components/Chat/Chat';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home Screen '
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Up and running</Text>
                <Button onPress={() => { navigate('Chat') }}
                    title="Chat with lucy" >
                </Button>
            </View>
        )
    }
}

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen }
})

export default App;