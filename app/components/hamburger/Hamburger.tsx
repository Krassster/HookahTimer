import { IoMdMenu } from "react-icons/io";
import { TouchableOpacity } from "react-native";

interface HamburgerProps {
  onPress: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IoMdMenu size={"30px"} />
    </TouchableOpacity>
  );
};
