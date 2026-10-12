import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme, messages } from '../data/mockData';

export default function MessagesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.avatar} />
      <View style={styles.textWrap}>
        <Text style={styles.name}>{item.user}</Text>
        <Text style={styles.preview}>{item.preview}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inbox</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: theme.primarySoft,
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  name: {
    color: theme.white,
    fontWeight: '700',
    marginBottom: 4,
  },
  preview: {
    color: theme.muted,
    fontSize: 13,
  },
  time: {
    color: theme.muted,
    fontSize: 11,
    marginLeft: 8,
  },
});
