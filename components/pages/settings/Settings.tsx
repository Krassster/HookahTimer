// Не используется в данной версии

import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/app/types/navigation";
import { Menu } from "@/components/menu/Menu";

import { styles } from "./Settings.styles";

type Props = NativeStackScreenProps<RootStackParamList>;

const Settings: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Setting</Text>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

export default Settings;
