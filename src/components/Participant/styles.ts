import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },

  name: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 16
  },

  button: {
    width: 56,
    height: 56,
    marginLeft: 12,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },
})