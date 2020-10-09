import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

class PlayerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingItemIndex: -1,
      playlist: this.props.navigation.state.params.item.tracks,
    };
  }

  renderMusicItem(item, index) {
    const active = this.state.playingItemIndex === index;
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.setState({playingItemIndex: index})}
        style={styles.musicItem}>
        {active ? (
          <Image
            style={styles.playIcon}
            source={require('../../assets/images/pause_round.png')}
          />
        ) : (
          <Image
            style={styles.playIcon}
            source={require('../../assets/images/play_purple.png')}
          />
        )}
        <View style={styles.musicItemSubGroup}>
          <Text style={styles.musicItemText}>{item.name}</Text>
        </View>
        <View style={styles.musicItemSubGroup} />
      </TouchableOpacity>
    );
  }

  render() {
    const navigation = this.props.navigation;
    const {item} = navigation.state.params;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Root')}>
          <Text style={styles.backText}>{'< albums'}</Text>
        </TouchableOpacity>

        <Text style={styles.titleText}>{item.name}</Text>

        <View style={styles.playlistContainer}>
          {item.tracks.map((e, i) => {
            return this.renderMusicItem(e, i);
          })}
        </View>
      </View>
    );
  }
}

export default PlayerView;
