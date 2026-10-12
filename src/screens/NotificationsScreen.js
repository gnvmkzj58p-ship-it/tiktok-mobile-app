import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../data/mockData';

export default function UploadScreen() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickVideo = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission needed', 'Please allow access to your media library to upload a video.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setSelectedVideo(result.assets[0]);
    }
  };

  const handlePost = () => {
    if (!selectedVideo) {
      Alert.alert('No video selected', 'Choose a video before posting.');
      return;
    }

    Alert.alert('Upload ready', 'Your video is ready to publish to the app.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create</Text>

      {selectedVideo ? (
        <View style={styles.previewCard}>
          <Video
            source={{ uri: selectedVideo.uri }}
            style={styles.preview}
            useNativeControls
            resizeMode="cover"
            shouldPlay={false}
          />
          <Text style={styles.previewLabel}>Selected video</Text>
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No video selected yet.</Text>
        </View>
      )}

      <TouchableOpacity style={styles.primaryButton} onPress={pickVideo}>
        <Text style={styles.primaryText}>Select video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handlePost}>
        <Text style={styles.secondaryText}>Post video</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  previewCard: {
    backgroundColor: '#121212',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  preview: {
    width: '100%',
    height: 420,
    backgroundColor: '#000',
  },
  previewLabel: {
    color: theme.white,
    fontWeight: '600',
    padding: 12,
  },
  emptyState: {
    backgroundColor: '#121212',
    borderRadius: 20,
    height: 420,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyText: {
    color: theme.muted,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: theme.primary,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: theme.white,
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.border,
  },
  secondaryText: {
    color: theme.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
