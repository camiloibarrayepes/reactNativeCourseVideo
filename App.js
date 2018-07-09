import React, {Component} from 'react';

import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';


export default class App extends Component<Props> {
  state = {
    SuggestionList: [],
    CategoryList: [],
    loading: true,
  }
  async componentDidMount(){
    const movies     = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      SuggestionList: movies, 
      CategoryList: categories,
      loading: false,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Player/>
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        {this.state.loading ?  //si loading existe se muestra el loading scroll
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        : //si no se muesra la lista
        <View style={{flex:1}}> 
          <CategoryList list={this.state.CategoryList} />
          <SuggestionList list={this.state.SuggestionList} />
        </View>
        }
      </Home>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

