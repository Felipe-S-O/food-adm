import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
    width: Dimensions.get("window").width,
    paddingLeft: 14,
    marginTop: -80,
    marginBottom: -30
  },
  image: {
    height: '100%',
    width: 150,
    marginHorizontal: 15,
    backgroundColor: '#FFF'
  }
})