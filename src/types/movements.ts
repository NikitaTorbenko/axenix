export interface IMovements {
  transport: {
    id: number;
    volume: number;
  };
  from: {
    coords: number[];
    name: string;
    type: string;
  };
  to: {
    coords: number[];
    name: string;
    type: string;
  };
  movements: [
    {
      product: {
        name: string;
        expiration_time: number;
      };
      batch: number;
      amount: number;
    }
  ];
}
