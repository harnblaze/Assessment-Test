export interface IDataChart {
  value: number;
  date: number;
}

export interface IChart {
  id: string;
  type: string;
  name: string;
  data: IDataChart[];
  color: string;
}

export type ModalData = Omit<IChart, "data">;
