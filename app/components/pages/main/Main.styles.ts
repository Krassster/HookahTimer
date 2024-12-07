import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    fontSize: 32,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    backgroundColor: "#4354FF",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
