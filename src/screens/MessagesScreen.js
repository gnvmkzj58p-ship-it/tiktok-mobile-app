import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { notifications, theme } from '../data/mockData';

const iconMap = {
  like: 'heart',
  follow: 'person-add',
  comment: 'chatbubble',
  mention: 'at',
};

export default function NotificationsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.iconWrap}>
        <Ionicons name={iconMap[item.type]} size={18} color={theme.white} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    color: theme.white,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  text: {
    color: theme.white,
    fontSize: 15,
    fontWeight: '600',
  },
  time: {
    color: theme.muted,
    fontSize: 12,
    marginTop: 4,
  },
});
