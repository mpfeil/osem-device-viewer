import { Measurement } from "./Measurement";

export type Sensor = {
  _id: string;
  title: string;
  icon: string;
  unit: string;
  sensorType: string;
  lastMeasurement?: Measurement;
};