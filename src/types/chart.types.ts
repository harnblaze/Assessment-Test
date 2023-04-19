export interface IDataChart {
  value: number;
  date: number;
}

export interface IChart {
  id: string;
  name: string;
  data: IDataChart[];
  color: string;
}
