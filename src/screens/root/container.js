import React, {Component} from 'react';
import RootView from './view';

class RootContainer extends Component {
  state = {
    data: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <RootView {...this.props} data={this.state.data} />;
  }
}

export default RootContainer;
