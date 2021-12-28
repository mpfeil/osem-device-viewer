import React, { useState } from 'react'
import GithubCorner from 'react-github-corner'
import DeviceContainer from './components/DeviceContainer'
import Search from './components/Search'
import { Device } from './types/Device'

import 'tailwindcss/tailwind.css'

function App() {

  const [selectedDevice, setSelectedDevice] = useState<Device>()

  const handleDeviceChange = (device: Device) => {
    console.log("handelDeviceChange", device);
    setSelectedDevice(device);
  }

  return (
    <div className="container">
      <GithubCorner href="https://github.com/mpfeil/osem-device-viewer" target="_blank"/>
      <div className="my-5">
        <h3 className="font-sans text-xl text-center pb-1 sm:pt-5">Enter a device name to get an overiew</h3>
      </div>
      <Search handleDeviceChange={handleDeviceChange} />
      {/* <Container>
        <GithubCorner href="https://github.com/mpfeil/osem-device-viewer" target="_blank"/>
        <div className="my-5">
          <h3 className="text-center pb-1">Enter a device name to get an overview</h3>
        </div>
        <Search handleDeviceChange={handleDeviceChange} />
        {selectedDevice && <DeviceContainer device={selectedDevice}/>}
      </Container> */}
      {selectedDevice && <DeviceContainer device={selectedDevice}/>}
    </div>
  )
}

export default App
