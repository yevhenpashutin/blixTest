import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  albumContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  slide: {
    marginRight: 22,
    alignItems: 'center',
    marginBottom: 10,
  },
  slideImage: {
    width: 147,
    height: 147,
    borderRadius: 20,
  },
});
