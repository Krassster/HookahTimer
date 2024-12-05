import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../types/navigation";
import { styles } from "./Welcome.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const Welcome: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./clock.jpg")} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>HookahTime</Text>
        <Text style={styles.subtitle}>
          Следить за временем легчем, чем кажется
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Main")}>
          <Text style={styles.buttonText}>Открыть смену</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
