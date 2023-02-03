import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24, 
    backgroundColor: '#131016' 
  },

  eventName: {
    fontSize: 24, 
    marginTop: 48,
    fontWeight: 'bold', 
    color: '#FDFCFE', 
  },

  eventDate: { 
    fontSize: 16,
    color: '#6B6B6B', 
  },

  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: '#FDFCFE',
    flex: 1
  },

  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    marginLeft: 12,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    marginTop:36,
    width: '100%',
    marginBottom: 42,
    flexDirection: 'row',
  },

  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
})