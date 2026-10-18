import React from 'react';
import { Modal, View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;
  const { title, date, body, heroUri, moodUri } = entry;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image 
            source={{ uri: heroUri || moodUri }} 
            style={styles.hero} 
          />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Tutup</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.surface 
  },
  scrollContent: {
    paddingBottom: SPACE.xl,
  },
  hero: {
    width: '100%',
    height: 240,
    backgroundColor: '#ddd',
  },
  content: { 
    padding: SPACE.l, 
    gap: SPACE.s 
  },
  title: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: COLORS.text 
  },
  date: { 
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: SPACE.xs 
  },
  body: { 
    fontSize: TYPO.body, 
    color: COLORS.text, 
    lineHeight: 22 
  },
  footer: {
    padding: SPACE.l,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  button: {
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '700',
    fontSize: 16,
  },
});