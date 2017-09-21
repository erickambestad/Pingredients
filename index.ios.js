import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import RecipeList from './src/components/RecipeList'

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Pingredients'} />
    <RecipeList/>
  </View>
);


AppRegistry.registerComponent('Pingredients', () => App);
