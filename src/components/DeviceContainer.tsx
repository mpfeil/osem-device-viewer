import React from 'react';
import { Device } from '../types/Device';

type Props = {
  device?: Device
}

const DeviceContainer: React.FC<Props> = ({device}) => {
  return (
    <h3>{device?.id} - {device?.name}</h3>
  )
}

export default DeviceContainer