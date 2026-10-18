import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  variant = 'list',
  onPress,
}) {
  const isGrid = variant === 'grid';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isGrid ? styles.cardGrid : styles.cardList,
        pressed && styles.pressed,
      ]}
    >
      {moodUri ? (
        <Image source={{ uri: moodUri }} style={styles.avatar} />
      ) : null}
      <View style={styles.textWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={2}>
          {preview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: RADIUS.card,
    padding: SPACE.m,
    gap: SPACE.m,
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardGrid: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pressed: {
    opacity: 0.8,
  },
  avatar: {
    width: RADIUS.avatar,
    height: RADIUS.avatar,
    borderRadius: RADIUS.avatar / 2,
    backgroundColor: '#E5E7EB',
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: TYPO.title,
    fontWeight: '600',
    color: COLORS.text,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginVertical: 2,
  },
  preview: {
    fontSize: TYPO.body,
    color: COLORS.muted,
  },
});