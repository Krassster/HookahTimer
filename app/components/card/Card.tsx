import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { calculateTimeDifference } from "../../utilities/calculateTimeDifference";
import { cardStyle as styles } from "./Card.styles";
import { CardProps } from "./../../types/OrderType";
import { useEffect, useState } from "react";

export const Card: React.FC<CardProps> = ({
  item,
  handleUpdateTime,
  handleDeleteOrder,
}) => {
  const [timeDifference, setTimeDifference] = useState<string>("");

  useEffect(() => {
    const updateTimeDifference = () => {
      const lastReplacement = item.replacements[item.replacements.length - 1];
      setTimeDifference(calculateTimeDifference(lastReplacement));
    };
    updateTimeDifference();
    const interval = setInterval(updateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, [item]);

  return (
    <View style={styles.card}>
      <Text style={styles.order}>{item.name}</Text>
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {item?.replacements.map((rep, idx) => {
            const [hours, minutes] = rep.split(":");
            return (
              <Text key={idx} style={styles.cell}>
                {`${hours}:${minutes}`}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.timeHasPassed}>
        прошло с последней смены: {timeDifference}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.replaceButton]}
          onPress={() => handleUpdateTime(item.id)}>
          <Text style={styles.buttonText}>Заменил</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.closeButton]}
          onPress={() => handleDeleteOrder(item.id)}>
          <Text style={styles.buttonText}>Закрыл</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
