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
  addButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 1,
    alignItems: "flex-end",
    margin: 15,
  },
});
