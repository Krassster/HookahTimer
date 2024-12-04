export type Order = {
  id: string;
  name: string;
  replacements: string[];
};

export interface CardProps {
  item: Order;
  handleUpdateTime: (id: string) => void;
  handleDeleteTable: (id: string) => void;
}
