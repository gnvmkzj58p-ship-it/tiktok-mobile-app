import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FeedVideoCard from '../components/FeedVideoCard';
import { mockVideos, theme } from '../data/mockData';

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 60 });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={mockVideos}
        renderItem={({ item, index }) => (
          <FeedVideoCard item={item} isActive={index === activeIndex} />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        snapToInterval={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
