import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
  },
  order: {
    textAlign: "center",
    fontWeight: "bold",
    overflow: "hidden",
  },
  cell: {
    textAlign: "left",
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
  },
  replaceButton: {
    backgroundColor: "#4CAF50",
  },
  closeButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timeHasPassed: {
    fontWeight: "light",
    padding: 10,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
