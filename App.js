import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';
import mainc from './src/casts/mainc';
import subc from './src/casts/subc';
import wallpapers from './src/wallpapers/wallapers';
import wallpaper from './src/wallpapers/wallpaper';
import comics from './src/comic/comics';
import quotes from './src/quotes/quotes';
import quote from './src/quotes/quote';
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  mainc: {screen: mainc},
  subc: {screen: subc},
  wallpapers: {screen: wallpapers},
  wallpaper: {screen: wallpaper},
  comics: {screen: comics},
  quotes: {screen: quotes},
  quote: {screen: quote},
});

const App = createAppContainer(MainNavigator);

export default App;
