import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>✕</Text>
        </TouchableOpacity>
      </View>
      {/* Center Icons */}
      <View style={styles.centerIcons}>
        <TouchableOpacity style={styles.smallIconButton}>
          <Text style={styles.iconText}>🖼️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigIconButton}>
          <Text style={styles.iconTextBig}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallIconButton}>
          <Text style={styles.iconText}>🌀</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.captureButton}>
          <Text style={styles.captureText}>Capture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryButton}>
          <Text style={styles.galleryText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    paddingBottom: 8,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
    color: '#181111',
  },
  centerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  smallIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 12,
  },
  bigIconButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 12,
  },
  iconTextBig: {
    fontSize: 32,
    color: '#181111',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  captureButton: {
    flex: 1,
    backgroundColor: '#e92932',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  galleryButton: {
    flex: 1,
    backgroundColor: '#f4f0f0',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  captureText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  galleryText: {
    color: '#181111',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 