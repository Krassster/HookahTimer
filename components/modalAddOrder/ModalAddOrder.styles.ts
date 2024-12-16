import { StyleSheet } from "react-native";

export const ModalAddOrderStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
    textAlignVertical: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  closeButton: {
    backgroundColor: "#ff4d4d",

    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#4caf50",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  cancelButtonText: {
    color: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginVertical: 3,
  },
});
