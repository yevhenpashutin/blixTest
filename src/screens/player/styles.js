import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
  },
  backTest: {
    color: '#655976',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#655976',
  },
  musicItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  musicItemSubGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicItemText: {
    fontSize: 16,
    color: '#655976',
    marginLeft: 20,
  },
  playIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
