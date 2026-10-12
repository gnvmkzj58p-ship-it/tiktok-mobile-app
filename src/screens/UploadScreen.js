import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, discoverTags, creatorCards } from '../data/mockData';

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Discover</Text>

      <View style={styles.tagRow}>
        {discoverTags.map((tag) => (
          <TouchableOpacity key={tag} style={styles.tagChip}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Popular creators</Text>
        <Ionicons name="arrow-forward" size={18} color={theme.white} />
      </View>

      {creatorCards.map((card) => (
        <View key={card.id} style={styles.creatorCard}>
          <Image source={{ uri: card.image }} style={styles.creatorImage} />
          <View style={styles.creatorDetails}>
            <Text style={styles.creatorName}>{card.name}</Text>
            <Text style={styles.creatorHandle}>{card.handle}</Text>
            <Text style={styles.creatorFollowers}>{card.followers} followers</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    padding: 16,
    paddingTop: 50,
  },
  heading: {
    color: theme.white,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 22,
  },
  tagChip: {
    backgroundColor: '#18181b',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: theme.white,
    fontWeight: '600',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: theme.white,
    fontSize: 20,
    fontWeight: '700',
  },
  creatorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  creatorImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    marginRight: 12,
  },
  creatorDetails: {
    flex: 1,
  },
  creatorName: {
    color: theme.white,
    fontWeight: '700',
    fontSize: 16,
  },
  creatorHandle: {
    color: theme.muted,
    fontSize: 13,
  },
  creatorFollowers: {
    color: '#d1d5db',
    fontSize: 12,
    marginTop: 4,
  },
  followButton: {
    backgroundColor: theme.primary,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  followText: {
    color: theme.white,
    fontWeight: '700',
  },
});
