const HomeScreen = ({ menuItems, removeMenuItem }) => {
    return (
      <View>
        <Text>Total Menu Items: {menuItems.length}</Text>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name} - {item.course}</Text>
              <Button title="Remove" onPress={() => removeMenuItem(item.name)} />
            </View>
          )}
        />
      </View>
    );
  };
  