import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
//import Player from '../../components/player/Player';
import {styles} from './styles';
import {TextInput} from 'react-native';

class PlayerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullMode: true,
      showComments: false,
      playingItemIndex: 1,
      playlist: this.props.navigation.state.params.item.tracks

    };
    this.openPlayList = this.openPlayList.bind(this);
    this.openCommentsList = this.openCommentsList.bind(this);
  }

  openPlayList() {
    if (this.state.fullMode) {
      this.setState({fullMode: !this.state.fullMode, showComments: false});
    } else if (!this.state.showComments) {
      this.setState({fullMode: !this.state.fullMode, showComments: true});
    } else {
      this.setState({showComments: false});
    }
  }
  openCommentsList() {
    if (this.state.fullMode) {
      this.setState({fullMode: !this.state.fullMode, showComments: true});
    } else if (this.state.showComments) {
      this.setState({fullMode: !this.state.fullMode, showComments: false});
    } else {
      this.setState({showComments: true});
    }
  }
  renderMusicItem(item, index) {
    const play = async () => {
      await TrackPlayer.play();
    };
    const stop = async () => {
      await TrackPlayer.stop();
    };

    return (
      <View style={styles.musicItem}>
        <View style={styles.musicItemSubGroup}>


          <Text style={styles.musicItemText}>{item.name}</Text>
        </View>
        <View style={styles.musicItemSubGroup}>


        </View>
      </View>
    );
  }

  render() {
    const {fullMode, showComments} = this.state;
    const navigation = this.props.navigation;
    const {item} = navigation.state.params;
console.log('this', this.props)
console.log('item', item)
    return (
      <View
        style={styles.container}>
           <TouchableOpacity
                     onPress={() => navigation.navigate('Root')}>
           <Text>back to albums</Text>
          </TouchableOpacity>
       


      
          <Text style={ styles.titleText}>
            {item.name}
          </Text>

    
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
