import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { calculateTimeDifference } from "../../utilities/calculateTimeDifference"
import { cardStyle as styles } from "./Card.styles"
import { CardProps, Order } from "../types/OrderType"
import { useEffect, useState } from "react"

export const Card: React.FC<CardProps> = ({item, handleUpdateTime, handleDeleteTable}) => {
    const [order, setOrder] = useState<Order>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [timeDifference, setTimeDifference] = useState<string>("");

    useEffect(() => {
      setOrder(item)
      setIsLoading(false)
    }, [item])

    useEffect(() => {
      if (order) {
          const updateTimeDifference = () => {
              const lastReplacement = order.replacements[order.replacements.length - 1];
              setTimeDifference(calculateTimeDifference(lastReplacement));
          };

          const interval = setInterval(updateTimeDifference, 1000);
          return () => clearInterval(interval);
      }
  }, [order]);

    
    return (
        <View style={styles.card}>
          {order && <>
          <Text style={styles.table}>{order.name}</Text>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {order?.replacements.map((rep, idx) => {
                const [hours, minutes] = rep.split(':')
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
                onPress={() => handleUpdateTime(order.id)}
              >
                <Text style={styles.buttonText}>Заменил</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={() => handleDeleteTable(order.id)}
              >
                <Text style={styles.buttonText}>Закрыл</Text>
              </TouchableOpacity>
            </View>
        </>}
            
          </View>
    )
}