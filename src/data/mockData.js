export const theme = {
  background: '#000000',
  surface: '#111111',
  surfaceAlt: '#1a1a1a',
  primary: '#ff2f5b',
  primarySoft: '#ff6d89',
  white: '#ffffff',
  muted: '#9ca3af',
  border: '#2a2a2a',
  success: '#22c55e',
  warning: '#fbbf24',
};

export const mockVideos = [
  {
    id: '1',
    user: {
      name: 'Ava',
      handle: '@ava.reels',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    caption: 'Sunset run before the city lights 🔥',
    likes: 12400,
    comments: 320,
    shares: 187,
    music: 'Original Audio',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    user: {
      name: 'Noah',
      handle: '@noahclips',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    caption: 'Never miss a moment ⚡',
    likes: 9800,
    comments: 410,
    shares: 260,
    music: 'Night Drive',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    user: {
      name: 'Mila',
      handle: '@mila.vlog',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    },
    caption: 'Street food, city vibes, good energy 🧋',
    likes: 16500,
    comments: 530,
    shares: 312,
    music: 'Easygoing',
    videoUrl: 'https://media.istockphoto.com/id/474054681/video/road-to-a-daylight-sea.mp4?s=mp4-640x640-is&k=20&c=Z4tUl7wXgA7t0JxR1E8KMuAq4YqP2iLwKfY_-_-M9gc=',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
];

export const discoverTags = ['#travel', '#music', '#fashion', '#food', '#fitness', '#tech'];

export const notifications = [
  { id: 'n1', type: 'like', text: 'Ava liked your video', time: '2m ago' },
  { id: 'n2', type: 'follow', text: 'Noah started following you', time: '15m ago' },
  { id: 'n3', type: 'comment', text: 'Mila commented: “Love this!”', time: '1h ago' },
  { id: 'n4', type: 'mention', text: 'You were mentioned in a story', time: '3h ago' },
];

export const messages = [
  { id: 'm1', user: 'Liam', preview: 'Can you share that clip?', time: '2m ago' },
  { id: 'm2', user: 'Sophie', preview: 'Nice edit, do you have the link?', time: '18m ago' },
  { id: 'm3', user: 'Maya', preview: 'Let’s collab this weekend', time: '1h ago' },
];

export const creatorCards = [
  { id: 'c1', name: 'Ava', handle: '@ava.reels', followers: '1.2M', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { id: 'c2', name: 'Milo', handle: '@milo.vibes', followers: '870K', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { id: 'c3', name: 'Diana', handle: '@diana.live', followers: '2.1M', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80' },
];
