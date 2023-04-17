interface IDataChart {
  value: number;
  date: Date;
}

export interface IChart {
  id: string;
  name: string;
  data: IDataChart[];
}
