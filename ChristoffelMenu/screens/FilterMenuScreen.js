// screens/FilterMenuScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Button } from 'react-native';

const FilterMenuScreen = ({ route }) => {
  const { menuItems } = route.params;
  const [filter, setFilter] = useState('');
  const filteredItems = menuItems.filter((item) => item.course.toLowerCase().includes(filter.toLowerCase()));

  return (
    <View>
      <TextInput placeholder="Filter by Course" value={filter} onChangeText={setFilter} />
      <FlatList
        data={filteredItems}
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
    </View>
  );
};

export default FilterMenuScreen;
