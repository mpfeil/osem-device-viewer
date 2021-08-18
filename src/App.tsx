import React, { useState } from 'react'
import GithubCorner from 'react-github-corner'
import { Container } from 'reactstrap'
import DeviceContainer from './components/DeviceContainer'
import Search from './components/Search'
import { Device } from './types/Device'

function App() {

  const [selectedDevice, setSelectedDevice] = useState<Device>()

  const handleDeviceChange = (device: Device[]) => {
    setSelectedDevice(device[0]);
  }

  return (
    <div className="App">
      <Container>
        <GithubCorner href="https://github.com/mpfeil/osem-device-viewer" target="_blank"/>
        <div className="my-5">
          <h3 className="text-center pb-1">Enter a device name to get an overview</h3>
        </div>
        <Search handleDeviceChange={handleDeviceChange} />
        {selectedDevice && <DeviceContainer device={selectedDevice}/>}
      </Container>
    </div>
  )
}

export default App
