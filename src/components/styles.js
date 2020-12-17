import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'orange',
  },
  heading: {
    display: 'flex',
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 12,
    margin: 2,
    width: 300,
  },
  container: {
    flex: 1,

    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'white',
    marginLeft: 30,
  },
  label: {
    fontSize: 14,
  },
  submitButton: {
    color: 'orange',
  },
  stretch: {
    width: 320,
    height: 250,
    resizeMode: 'stretch',
  },
  flex: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22
  },
  // add below
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18
  }
  
});


export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#f8f8f2',
  primaryRed: '#ff5555',
  primaryPink: '#ff80bf',
  primaryYellow: '#ffff80',
  primaryOrange: '#ff9580'
};

export default styles;
