import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#e1f7fe' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  card: { 
    marginBottom: 15, 
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 3 
  },
  row: { 
    flexDirection: 'row', 
  },
  table: {
    textAlign: 'center',
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  cell: { 
    textAlign: 'left', 
    padding: 5 
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  button: { 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '48%' 
  },
  replaceButton: { 
    backgroundColor: '#4CAF50' 
  },
  closeButton: { 
    backgroundColor: '#F44336' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  controls: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20 
  },
  timeHasPassed: {
    fontWeight: 'light',
    padding: 10
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginRight: 10, 
    padding: 10, 
    borderRadius: 5 
  },
  addButton: { 
    backgroundColor: '#007BFF', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5 
  },
  addButtonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
});
