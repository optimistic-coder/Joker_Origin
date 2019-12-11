import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';
import mainc from './src/casts/mainc';
import subc from './src/casts/subc';
import wallpapers from './src/wallpapers/wallapers';
import wallpaper from './src/wallpapers/wallpaper';

import quotes from './src/quotes/quotes';
import quote from './src/quotes/quote';
import blogs from './src/joker_blogs/blogs';
import Movo from './src/movo/Movo';
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  mainc: {screen: mainc},
  subc: {screen: subc},
  wallpapers: {screen: wallpapers},
  wallpaper: {screen: wallpaper},

  quotes: {screen: quotes},
  quote: {screen: quote},
  blogs: {screen: blogs},
  Movo: {screen: Movo},
});

const App = createAppContainer(MainNavigator);

export default App;
