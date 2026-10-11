import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: 'https://picsum.photos/seed/happy/80',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
  },
  {
    id: 4,
    title: 'Ngopi Sambil Coding',
    date: '2025-10-03',
    preview: 'Mencoba membuat komponen reusable di React Native. Seru dan menantang!',
    moodUri: 'https://picsum.photos/seed/coffee/80',
  },
  {
    id: 5,
    title: 'Olahraga Sore',
    date: '2025-10-02',
    preview: 'Jogging keliling kompleks bersama teman. Badan terasa lebih bugar dan segar.',
    moodUri: 'https://picsum.photos/seed/sport/80',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/reva/100' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>Halo, Reva! 👋</Text>
          <Text style={styles.subGreeting}>Catatan harianku ada di sini</Text>
        </View>
      </View>

      <Text style={styles.header}>Buku Harian</Text>

      {/* List Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  subGreeting: {
    fontSize: 13,
    color: '#6b7280',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
});