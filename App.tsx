import { OrdersProvider } from "./app/context/orders.context";
import Main from "./app/main";

export default function App() {
  return (
    <OrdersProvider>
      <Main />
    </OrdersProvider>
  );
}
