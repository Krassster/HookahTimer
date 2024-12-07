import { TouchableOpacity, View } from "react-native";
import { MenuStyles as styles } from "./Menu.styles";
import { useState } from "react";
import { ModalAddOrder } from "../modalAddOrder/ModalAddOrder";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import Icon from "react-native-vector-icons/Ionicons";

type MenuProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const Menu: React.FC<MenuProps> = ({ navigation }) => {
  const [isAddOrderVisible, setIsAddOrderVisible] = useState(false);

  const handleAddOrder = () => {
    setIsAddOrderVisible(true);
  };

  const handleCloseShift = () => {
    navigation.goBack();
  };

  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1]?.name;

  const getIconStyle = (route: string) => {
    const isActive = currentRoute === route;
    return {
      backgroundColor: isActive ? "#fff" : "#000",
      color: isActive ? "#000" : "#fff",
      borderColor: "#fff",
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconWrapper,
          {
            backgroundColor: getIconStyle("Main").backgroundColor,
            borderColor: getIconStyle("Main").borderColor,
          },
        ]}
        onPress={() => navigation.navigate("Main")}>
        <Icon name="home" size={25} color={getIconStyle("Main").color} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={handleAddOrder}>
        <Icon name="add" size={25} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={handleCloseShift}>
        <Icon name="exit" size={25} color="#fff" />
      </TouchableOpacity>
      {isAddOrderVisible && (
        <ModalAddOrder onClose={() => setIsAddOrderVisible(false)} />
      )}
    </View>
  );
};
