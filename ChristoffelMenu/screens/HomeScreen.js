import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const HomeScreen = ({ menuItems }) => {
  return (
    <View>
      <Text>Total Menu Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.course}</Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;
