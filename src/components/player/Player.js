import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import TrackPlayer, {
//   useTrackPlayerProgress,
//   usePlaybackState,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';
import {Image, Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
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

  });

  const {style} = props;

  const play = async () => {};
  const pause = async () => {};

  const forward = async () => {};
  const backward = async () => {};

  if (playbackState !== playState) {
    setPlayState(playbackState);
  }

  return <View style={[styles.card, style]} />;
}
