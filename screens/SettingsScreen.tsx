import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <Text style={styles.arrowIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 48 }} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <SettingItem label="Notifications" />
        <SettingItem label="Account Management" />
        <SettingItem label="Change Password" />
        <SettingItem label="Delete Account" />
        <SettingItem label="App Information" />
        <SettingItem label="Version" rightText="1.0.0" />
        <SettingItem label="Developer Info" />
        <SettingItem label="Terms of Service" />
        <SettingItem label="Privacy Policy" />
      </ScrollView>
    </View>
  );
}

function SettingItem({ label, rightText }: { label: string; rightText?: string }) {
  return (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>{label}</Text>
      {rightText ? (
        <Text style={styles.settingRightText}>{rightText}</Text>
      ) : (
        <Text style={styles.settingArrow}>›</Text>
      )}
    </TouchableOpacity>
  );
}

function TabBarItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <TouchableOpacity style={styles.tabBarItem}>
      <Text style={[styles.tabBarIcon, active && styles.tabBarIconActive]}>{icon}</Text>
      <Text style={[styles.tabBarLabel, active && styles.tabBarLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#181111',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181111',
    paddingRight: 48,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    minHeight: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f0f0',
    justifyContent: 'space-between',
  },
  settingLabel: {
    color: '#181111',
    fontSize: 16,
    flex: 1,
  },
  settingArrow: {
    color: '#181111',
    fontSize: 20,
    marginLeft: 8,
  },
  settingRightText: {
    color: '#181111',
    fontSize: 16,
    marginLeft: 8,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f4f0f0',
    backgroundColor: '#fff',
    paddingBottom: 12,
    paddingTop: 6,
    paddingHorizontal: 8,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  tabBarIcon: {
    color: '#886364',
    fontSize: 24,
    marginBottom: 2,
  },
  tabBarLabel: {
    color: '#886364',
    fontSize: 12,
    fontWeight: '500',
  },
  tabBarIconActive: {
    color: '#181111',
  },
  tabBarLabelActive: {
    color: '#181111',
  },
}); 