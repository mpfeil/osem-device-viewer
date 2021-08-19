import React, { useEffect, useState } from 'react';
import { Device } from '../types/Device';
import { Sensor as SensorType } from '../types/Sensor';
import Sensor from './Sensor';

type Props = {
  device?: Device
}

const DEVICE_URI = "https://api.testing.opensensemap.org/boxes";

const DeviceContainer: React.FC<Props> = ({device}) => {

  const [sensors, setSensors] = useState<SensorType[]>()

  const getDeviceData = () => {
    fetch(`${DEVICE_URI}/${device?.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSensors(data.sensors)
      })
  };

  useEffect(() => {
    getDeviceData()
  }, [device])

  return (
    <div className="device-container mt-3">
      {/* <Row>
        {
          sensors &&
          sensors.length > 0 &&
          sensors.map((sensor, index) => {
            return (
              <Col md={3} className="my-1" key={index}>
                <Sensor data={sensor}></Sensor>
              </Col>
            )
          })
        }
      </Row> */}
    </div>
  )
}

export default DeviceContainer