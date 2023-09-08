import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const recipesData = [
  { id: 1, title: 'Pasta', image: 'pasta.jpg', ingredients: ['egg', 'Pasta of your choice', 'flour', 'Butter', 'water', 'semolina','durum' ,'Salt and pepper'], instructions: 'Step 1: ' },
  { id: 2, title: 'Margherita Pizza', image: 'image2.jpg', ingredients: ['Flour', 'Yeast', 'Salt', 'Olive oil', 'Basting sauce of your choice', 'Mozarella', 'Parmesan'], instructions: 'Step 1: ...' },
  { id: 3, title: 'Butter Chicken', image: 'butter chicken.jpg', ingredients: [' garam masala', 'ground cumin', 'chili powder', 'paprika', 'turmeric', 'fresh cream', 'Onion, '], instructions: 'Step 1: ...' },
  { id: 4, title: 'Chicken Curry', image: 'download 1.jpeg', ingredients: ['chicken', 'masala', 'oil', 'water' , 'Unions' , 'Tomatoes' , 'butter' , 'garlic' ], instructions: 'Step 1: ...' },
];

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const renderRecipeItem = ({item}) => (
    <TouchableOpacity onPress={() => setSelectedRecipe(item)}>
      <View style={styles.recipeItem}>
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRecipeDetails = () => (
    <ScrollView style={styles.recipeDetails}>
      <Image source={{ uri: selectedRecipe.image }} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{selectedRecipe.title}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {selectedRecipe.ingredients.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text>{selectedRecipe.instructions}</Text>
      <Button title="Close" onPress={() => setSelectedRecipe(null)} />
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Recipe App</Text>
      <FlatList
        data={recipesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecipeItem} 
      />
      {selectedRecipe && renderRecipeDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  recipeTitle: {
    fontSize: 18,
  },
  recipeDetails: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default App;






