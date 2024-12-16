import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Props } from "@/app/types/navigation";

import { styles } from "./Welcome.styles";

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
        <Text style={styles.subtitle}>Created by @krassster</Text>
      </View>
    </View>
  );
};

export default Welcome;
