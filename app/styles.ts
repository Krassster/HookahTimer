import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#e1f7fe' 
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center',  
    padding: 10,
    marginBottom: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    
  },
  controls: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20 
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