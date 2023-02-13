import { Car } from "./car";

export interface State {
  cars: Car[],
  loading: boolean,
  error: string
}

