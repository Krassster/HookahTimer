import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
  card: {
    margin: 20,
    marginBottom: 0,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  order: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    overflow: "hidden",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#333",
    borderRadius: 20,
  },
  cell: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  lastCell: {
    backgroundColor: "#fff",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
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
    textAlign: "center",
    padding: 10,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
