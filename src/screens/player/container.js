import React, {Component} from 'react';
import PlayerView from './view';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PlayerView {...this.props} />;
  }
}

export default PlayerContainer;
