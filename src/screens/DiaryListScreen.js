import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

import {
  COLORS,
  SPACE,
  TYPO,
  BREAKPOINTS,
  RADIUS,
} from '../styles/tokens';

const USER_PROFILE = {
  name: 'Reva',
  bio: 'Menulis cerita kecil & perjalanan harian.',
  avatarUri: 'https://picsum.photos/seed/useravatar/200',
};

const DATA = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Menikmati suasana pagi yang tenang.',
    body: 'Hari ini saya memulai aktivitas dengan suasana yang tenang. Saya berharap semua kegiatan berjalan dengan lancar.',
    moodUri: 'https://picsum.photos/seed/happy/200',
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan tugas dan belajar di kampus.',
    body: 'Hari ini saya berusaha menyelesaikan tugas kuliah dan memahami materi yang diberikan. Walaupun cukup melelahkan, banyak hal yang bisa dipelajari.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati pemandangan sore hari.',
    body: 'Saya menghabiskan waktu sore dengan menikmati suasana taman. Waktu sebentar untuk beristirahat membuat pikiran terasa lebih segar.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
  {
    id: '4',
    title: 'Belajar Pemrograman',
    date: '2025-10-03',
    preview: 'Mencoba memahami kode program.',
    body: 'Hari ini saya belajar pemrograman dan mencoba memahami cara kerja kode. Ada beberapa bagian yang masih membingungkan, tetapi saya akan terus berlatih.',
    moodUri: 'https://picsum.photos/seed/code/200',
    heroUri: 'https://picsum.photos/seed/codehero/800/450',
  },
  {
    id: '5',
    title: 'Waktu Bersama Teman',
    date: '2025-10-02',
    preview: 'Mengobrol dan menghabiskan waktu bersama.',
    body: 'Hari ini saya bisa menghabiskan waktu bersama teman-teman. Kami mengobrol dan saling berbagi cerita sehingga suasana menjadi lebih menyenangkan.',
    moodUri: 'https://picsum.photos/seed/friends/200',
    heroUri: 'https://picsum.photos/seed/friendshero/800/450',
  },
  {
    id: '6',
    title: 'Semangat Hari Baru',
    date: '2025-10-07',
    preview: 'Memulai hari dengan semangat baru.',
    body: 'Saya mencoba menjalani hari dengan lebih semangat dan menyelesaikan kegiatan satu per satu. Semoga kebiasaan baik ini bisa terus dipertahankan.',
    moodUri: 'https://picsum.photos/seed/morning/200',
    heroUri: 'https://picsum.photos/seed/morninghero/800/450',
  },
  {
    id: '7',
    title: 'Belajar Hal Baru',
    date: '2025-10-08',
    preview: 'Menambah pengalaman dan pengetahuan.',
    body: 'Hari ini saya mencoba mempelajari hal baru yang bisa menambah pengetahuan. Saya sadar bahwa belajar membutuhkan proses dan latihan yang konsisten.',
    moodUri: 'https://picsum.photos/seed/learn/200',
    heroUri: 'https://picsum.photos/seed/learnhero/800/450',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(
    () => (twoCols ? 'grid2' : 'list1'),
    [twoCols]
  );

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.profileBox}>
        <Image source={{ uri: USER_PROFILE.avatarUri }} style={styles.avatar} />
        <View style={styles.profileTextWrap}>
          <Text style={styles.profileName}>{USER_PROFILE.name}</Text>
          <Text style={styles.profileBio}>{USER_PROFILE.bio}</Text>
        </View>
      </View>
      <Text style={styles.header}>Buku Harian</Text>
      <Text style={styles.subtitle}>Cerita kecil dari hari-hariku</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        columnWrapperStyle={twoCols ? styles.columnWrapper : undefined}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada catatan harian.</Text>
        }
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  headerContainer: {
    marginBottom: SPACE.m,
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACE.m,
    marginHorizontal: SPACE.l,
    marginTop: SPACE.l,
    backgroundColor: '#F3F4F6',
    borderRadius: RADIUS.card,
    gap: SPACE.m,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.border,
  },
  profileTextWrap: {
    flex: 1,
  },
  profileName: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },
  profileBio: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginTop: 2,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.m,
  },
  subtitle: {
    fontSize: TYPO.body,
    color: COLORS.muted,
    paddingHorizontal: SPACE.l,
    marginTop: SPACE.xs,
  },
  listContent: {
    paddingBottom: SPACE.xl,
  },
  itemWrap: {
    paddingHorizontal: SPACE.l,
    marginBottom: SPACE.m,
  },
  itemWrap2: {
    flex: 1,
    paddingHorizontal: SPACE.s,
  },
  columnWrapper: {
    paddingHorizontal: SPACE.m,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});