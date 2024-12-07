import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../types/navigation";
import { styles } from "./Welcome.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const Welcome: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>HookahTimer</Text>

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
