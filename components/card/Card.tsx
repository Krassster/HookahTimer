import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { CardProps } from "@/app/types/OrderType";
import { calculateTimeDifference } from "@/app/utilities/calculateTimeDifference";

import { cardStyle as styles } from "./Card.styles";

export const Card: React.FC<CardProps> = ({
  item,
  handleUpdateTime,
  handleDeleteOrder,
}) => {
  const [timeDifference, setTimeDifference] = useState<string>("");
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const updateTimeDifference = () => {
      const lastReplacement = item.replacements[item.replacements.length - 1];
      setTimeDifference(calculateTimeDifference(lastReplacement));
    };
    updateTimeDifference();
    const interval = setInterval(updateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, [item]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [item.replacements]);

  return (
    <View style={styles.card}>
      <Text style={styles.order}>Стол {item.name}</Text>
      <View style={styles.row}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          {item?.replacements.map((rep, idx) => {
            const [hours, minutes] = rep.split(":");
            const isLast = idx === item.replacements.length - 1;
            return (
              <Text key={idx} style={[styles.cell, isLast && styles.lastCell]}>
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
          <Text style={styles.buttonText}>заменил</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.closeButton]}
          onPress={() => handleDeleteOrder(item.id)}>
          <Text style={styles.buttonText}>закрыл</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
