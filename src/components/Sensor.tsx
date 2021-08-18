import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { Sensor as SensorType } from '../types/Sensor'

type Props = {
  data: SensorType
}

const Sensor: React.FC<Props> = ({data}) => {
  const [titleColor, setTitleColor] = useState<string>('blue');
  return(
    <Card>
      <CardBody>
        <div className="text-center">
          {/* <div>
            <img
              alt="Weather image"
              src={`${ICON_URL}${weather.icon}@2x.png`}
            />
          </div> */}
          <small className="text-muted">
            {data.unit}
          </small>
          <h5 className="card-title" style={{color: titleColor}}>{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.sensorType}</h6>
        </div>
      </CardBody>
    </Card>
  )
}

export default Sensor