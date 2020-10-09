import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Image, Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
import Images from '../../config/images';
import {styles} from './styles';

function formatTime(duration) {
  // Hours, minutes and seconds
  var hrs = Math.round(duration / 3600);
  var mins = Math.round((duration % 3600) / 60);
  var secs = Math.round(duration % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
}

export default function Player(props) {
  const playbackState = usePlaybackState();
  // const [trackTitle, setTrackTitle] = useState('');
  // const [trackArtwork, setTrackArtwork] = useState();
  // const [trackArtist, setTrackArtist] = useState('');
  const [playState, setPlayState] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      // const track = await TrackPlayer.getTrack(event.nextTrack);
      // const {title, artist, artwork} = track || {};
      // setTrackTitle(title);
      // setTrackArtist(artist);
      // setTrackArtwork(artwork);
    }
  });

  const {style} = props;

  const play = async () => {

  };
  const pause = async () => {
 
  };

  const forward = async () => {
    
  };
  const backward = async () => {

  };

  if (playbackState !== playState) {
    setPlayState(playbackState);
  }

  return (
    <View style={[styles.card, style]}>
      {props.fullMode && !props.liveMode && (
        <Text style={styles.moduleNameText}>{'Narrarator:\n Jill Scott'}</Text>
      )}
      <View style={styles.controls}>
        {props.fullMode && (
          <TouchableOpacity onPress={() => backward()}>
            <Image source={Images.images.back} style={styles.pauseIcon} />
          </TouchableOpacity>
        )}
        {playState === 'paused' ? (
          <TouchableOpacity onPress={() => play()}>
            <Image source={Images.images.play} style={styles.pauseIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => pause()}>
            <Image source={Images.images.pause} style={styles.pauseIcon} />
          </TouchableOpacity>
        )}
        {props.fullMode && (
          <TouchableOpacity onPress={() => forward()}>
            <Image source={Images.images.forward} style={styles.pauseIcon} />
          </TouchableOpacity>
        )}
      </View>

      {!props.liveMode && (
        <View style={props.fullMode ? styles.controls : styles.controlsSmall}>
          <TouchableOpacity onPress={() => props.openPlayList()}>
            <Image
              source={
                !props.fullMode && !props.showComments
                  ? Images.images.playlist_active
                  : Images.images.playlist
              }
              style={styles.bottmoIcons}
            />
            <View style={styles.playListCountContainer}>
              <Text style={styles.playListCountText}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.openCommentsList()}>
            <Image
              source={
                !props.fullMode && props.showComments
                  ? Images.images.comments_active
                  : Images.images.comments
              }
              style={styles.bottmoIcons}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
