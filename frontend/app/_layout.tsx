
import React, { useState } from 'react';
import Login from './login';
import Registration from './registration';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from './index';

const Stack = createStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registration" component={Registration} />
                </>
            ) : (
                <Stack.Screen name="MainApp" component={MainApp} />
            )}
        </Stack.Navigator>
    );
}
