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
});

export default styles;
