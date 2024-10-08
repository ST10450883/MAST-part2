// screens/AddMenuItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddMenuItemScreen = ({ navigation, route }) => {
  const { menuItems, setMenuItems } = route.params;
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const addMenuItem = () => {
    if (dishName && description && price && course) {
      setMenuItems([
        ...menuItems,
        { id: Math.random().toString(), dishName, description, price, course },
      ]);
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />
      <TextInput placeholder="Course" value={course} onChangeText={setCourse} />
      <Button title="Add Menu Item" onPress={addMenuItem} />
    </View>
  );
};

export default AddMenuItemScreen;
