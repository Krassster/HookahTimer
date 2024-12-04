import { StyleSheet } from "react-native";

export const MenuStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: 230,
    alignItems: "flex-start",
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
});
