import {StyleSheet, Platform} from 'react-native';
import globalStyles from '../../config/globalStyles';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignItems: 'center',
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: 2,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlsSmall: {
    marginVertical: 0,
    flexDirection: 'row',
  },
  moduleNameText: {
    color: 'white',
    fontSize: 12,
    fontFamily: globalStyles.fonts.medium,
    textAlign: 'center',
    width: '100%',
    marginTop: -5,
  },
  pauseIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  timeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  time: {
    color: 'white',
    fontFamily: globalStyles.fonts.medium,
  },
  bottmoIcons: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 8,
    marginBottom: Platform.OS === 'android' ? 30 : 8,
  },
  playListCountContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 5,
    borderRadius: 10,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playListCountText: {
    fontSize: 10,
    fontFamily: globalStyles.fonts.bold,
    color: globalStyles.color.purple,
    paddingLeft: 1,
    paddingTop: 1,
  },
});
