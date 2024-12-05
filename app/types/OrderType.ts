export type Order = {
  id: string;
  name: string;
  replacements: string[];
};

export interface CardProps {
  item: Order;
  handleUpdateTime: (id: string) => void;
  handleDeleteOrder: (id: string) => void;
}
