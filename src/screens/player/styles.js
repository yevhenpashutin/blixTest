import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40
    
  },
  darkOverlay: {
    opacity: 0.4,
    flex: 1,
    backgroundColor: 'black',
  },
  player: {
    backgroundColor: 'transparent',
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
