// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { menuItems } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{`Price: $${item.price}`}</Text>
            <Text>{`Course: ${item.course}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem', { menuItems })} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('FilterMenu', { menuItems })} />
    </View>
  );
};

export default HomeScreen;
