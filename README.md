import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../data/mockData';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Profile</Text>

      <View style={styles.headerRow}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }}
          style={styles.avatar}
        />
        <View style={styles.statsWrap}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>128K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>420</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>Videos</Text>
          </View>
        </View>
      </View>

      <Text style={styles.name}>Ava Reed</Text>
      <Text style={styles.bio}>Travel creator • Berlin • Storytelling every day</Text>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.primaryButton}><Text style={styles.primaryText}>Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}><Text style={styles.secondaryText}>Share</Text></TouchableOpacity>
      </View>

      <View style={styles.videoGrid}>
        {[1,2,3,4,5,6].map((item) => (
          <View key={item} style={styles.videoTile} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    color: theme.white,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 18,
  },
  statsWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: theme.white,
    fontWeight: '700',
    fontSize: 18,
  },
  statLabel: {
    color: theme.muted,
    fontSize: 11,
  },
  name: {
    color: theme.white,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  bio: {
    color: theme.muted,
    fontSize: 14,
    marginBottom: 18,
  },
  actionRow: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: theme.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  primaryText: {
    color: theme.white,
    fontWeight: '700',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryText: {
    color: theme.white,
    fontWeight: '700',
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoTile: {
    width: '32%',
    height: 140,
    borderRadius: 12,
    backgroundColor: '#1b1b1b',
    marginBottom: 10,
  },
});
