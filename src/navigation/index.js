import React, {Component} from 'react';
import NavigationStack from './navigationStack';
import NavigationService from './navigationService';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        player={this.props.player}
      />
    );
  }
}

export default AppNavigator;
