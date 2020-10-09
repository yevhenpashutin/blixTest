import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';

class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        {
          name: 'Album 1',
          image: require('../../assets/placeholders/music_1.jpg'),
          tracks: [{
            name: 'Track 1'
          },
          {
            name: 'Track 2'
          },
          {
            name: 'Track 3'
          },
          {
            name: 'Track 4'
          },
          {
            name: 'Track 5'
          }
        ]
        },
        {
          name: 'Album 2',
          image: require('../../assets/placeholders/music_2.jpg'),
        },
        {
          name: 'Album 3',
          image: require('../../assets/placeholders/music_3.jpg'),
        },
        {
          name: 'Album 4',
          image: require('../../assets/placeholders/music_4.jpg'),
        },
        {
          name: 'Album 5',
          image: require('../../assets/placeholders/music_5.jpg'),
        },
        {
          name: 'Album 6',
          image: require('../../assets/placeholders/music_6.jpg'),
        },
      ],
    }
  }

  renderAlbum(item, i) {
    return (
      <TouchableOpacity
        key={i}
        style={styles.slide}
        onPress={() => {
          console.log('this.pr', this.props)
          this.props.navigation.navigate('Player', {item})}}>
        <Image source={item.image} style={styles.slideImage} />
        <View style={styles.section}>
          <Text style={styles.courseTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {albums} = this.state;

    return (
      <View style={styles.wrapper}>
         <Text style={styles.title}>Choose your album:</Text>
        <ScrollView contentContainerStyle={styles.albumContainer}>
        {albums.map((e, i) => {
            return this.renderAlbum(e, i)
          })}
        </ScrollView>
      </View>
    );
  }
}

export default RootView;
