import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ type, setType }) => (
  <View style={styles.container}>
    {['All', 'Active', 'Complete'].map((tabType) => (
      <TouchableOpacity
        key={tabType}
        style={[styles.tab, type === tabType && styles.activeTab]}
        onPress={() => setType(tabType)}
      >
        <Text style={[styles.tabText, type === tabType && styles.activeText]}>
          {tabType}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  tabText: {
    fontSize: 16,
    color: '#666'
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000'
  }
});

export default TabBar;
