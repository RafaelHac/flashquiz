import { StackNavigator } from 'react-navigation';
import { amber, white } from '../utils/globalLayout';
import Tabs from './Tabs';
import DeckDetails from './DeckDetails';
import NewCard from './NewCard';
import CardList from './CardList';
import Quiz from './Quiz';
import ScoreScreen from './ScoreScreen';

const MainNavigator = StackNavigator({
    Home: {
      screen: Tabs
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: amber,
          height: 30,
          paddingBottom: 20
        }
      }
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        headerTintColor: white,
        title: "New Card",
        headerStyle: {
          backgroundColor: amber,
          height: 30,
          paddingBottom: 20
        }
      }
    },
    CardList: {
      screen: CardList,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: amber,
          height: 30,
          paddingBottom: 20
        }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: amber,
          height: 30,
          paddingBottom: 20
        }
      }
    },
    ScoreScreen: {
      screen: ScoreScreen,
      navigationOptions: {
        header: null
      }
    }
  })

export default MainNavigator;