import React, { useState } from 'react';
import { View, TextInput, Button, Picker } from 'react-native';

const AddMenuScreen = ({ addMenuItem }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('starter');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    addMenuItem({ name, course, price });
    setName('');
    setPrice('');
  };

  return (
    <View>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
};

export default AddMenuScreen;
