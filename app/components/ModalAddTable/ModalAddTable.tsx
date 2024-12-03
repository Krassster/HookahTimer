import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { ModalAddTableStyles as styles } from "./ModalAddTable.styles"
import { useEffect, useState } from "react";
import { Order } from "../types/OrderType";
import { getAllOrders, saveAllOrders } from "../../services/orders.services";
import { getCurrentTime } from "../../utilities/GetCurrentTime";

export const ModalAddTable = ({ onClose }: { onClose: () => void }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [newOrderName, setNewOrderName] = useState<string>('');

    useEffect(()=> {
        const fetchData = async () => {
          const saveOrders = await getAllOrders()
          setOrders(saveOrders)
          console.log(saveOrders);
          
        }
        fetchData()
      }, [])

    const addNewOrder = () => {
        if (!newOrderName.trim()) return;
        const updatedOrders = [
            ...orders,
            {
                id: Date.now().toString(),
                name: `Стол ${newOrderName}`,
                replacements: [getCurrentTime()],
            },
        ];
        console.log(orders);
        
        setOrders(updatedOrders)
        saveAllOrders(updatedOrders)
        setNewOrderName('')
        onClose()
        }


      

    return (
        <Modal transparent animationType="fade">
                <View style={styles.modalOverlay}> 
                    <View style={styles.modal}>                    
                        <TextInput
                            style={styles.input}
                            value={newOrderName}
                            placeholder="Номер стола"
                            onChangeText={setNewOrderName}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => onClose()}>
                                <Text style={styles.addButtonText}>Отмена</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addButton} onPress={addNewOrder}>
                                <Text style={styles.addButtonText}>Отнес гостю</Text>
                            </TouchableOpacity>    
                        </View>
                    </View>
            </View>
      </Modal>
    )
}