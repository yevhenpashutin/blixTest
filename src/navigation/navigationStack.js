import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Root from '../screens/root';
import Player from '../screens/player';




const AllApp = createSwitchNavigator(
  {
    Root: Root,
    Player: Player,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Root',
  },
);

export default createAppContainer(AllApp);
