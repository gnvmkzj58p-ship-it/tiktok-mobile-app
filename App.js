import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import UploadScreen from './src/screens/UploadScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MessagesScreen from './src/screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: 'home',
  Discover: 'compass',
  Upload: 'add-circle',
  Inbox: 'chatbubble-ellipses',
  Notifications: 'notifications',
  Profile: 'person',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#ff2f5b',
            tabBarInactiveTintColor: '#9ca3af',
            tabBarStyle: {
              backgroundColor: '#111111',
              borderTopColor: '#1f2937',
              height: 72,
              paddingBottom: 10,
              paddingTop: 8,
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tabIcons[route.name]} size={size} color={color} />
            ),
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Upload" component={UploadScreen} />
          <Tab.Screen name="Inbox" component={MessagesScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
