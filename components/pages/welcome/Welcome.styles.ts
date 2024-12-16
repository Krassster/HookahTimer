import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    color: "#7f7679",
    alignContent: "flex-end",
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
