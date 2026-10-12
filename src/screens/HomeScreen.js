import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../data/mockData';

const { width, height } = Dimensions.get('window');

export default function FeedVideoCard({ item, isActive }) {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);

  const formatCount = (count) => {
    if (count >= 10000) return `${(count / 10000).toFixed(1)}K`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return String(count);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: item.videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isActive}
        isLooping
        useNativeControls={false}
        onError={(error) => console.log('Video error', error)}
      />

      <View style={styles.overlay}>
        <View style={styles.bottomInfo}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.handle}>{item.user.handle}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
          <Text style={styles.music}>♫ {item.music}</Text>
        </View>

        <View style={styles.sideActions}>
          <View style={styles.actionGroup}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setLiked((prev) => !prev)}
            >
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={28}
                color={liked ? theme.primary : '#fff'}
              />
            </TouchableOpacity>
            <Text style={styles.actionText}>{formatCount(item.likes + (liked ? 1 : 0))}</Text>
          </View>

          <View style={styles.actionGroup}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.actionText}>{formatCount(item.comments)}</Text>
          </View>

          <View style={styles.actionGroup}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.actionText}>{formatCount(item.shares)}</Text>
          </View>

          <TouchableOpacity style={styles.profileBubble}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#000',
  },
  video: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  bottomInfo: {
    width: width * 0.72,
    position: 'absolute',
    left: 16,
    bottom: 72,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3,
  },
  handle: {
    color: '#e5e7eb',
    fontSize: 12,
    marginBottom: 8,
  },
  caption: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 8,
  },
  music: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.9,
  },
  sideActions: {
    position: 'absolute',
    right: 16,
    bottom: 90,
    alignItems: 'center',
  },
  actionGroup: {
    alignItems: 'center',
    marginBottom: 18,
  },
  actionButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  profileBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#111',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
