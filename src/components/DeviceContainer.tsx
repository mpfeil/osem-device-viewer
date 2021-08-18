import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
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
    console.log("get device data")
    fetch(`${DEVICE_URI}/${device?.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSensors(data.sensors);
      })
  };

  useEffect(() => {
    getDeviceData()
  }, [device])

  return (
    <div className="weather-container mt-3">
      <Row>
        {
          sensors &&
          sensors.length > 0 &&
          sensors.map((sensor, index) => {
            console.log(sensor)
            return (
              <Col md={3} className="my-1">
                <Sensor data={sensor}></Sensor>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default DeviceContainer