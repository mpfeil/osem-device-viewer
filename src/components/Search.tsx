import React, { useState } from 'react'
//@ts-ignore
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Device } from '../types/Device';
import Typeahead from './Typeahead';

type Props = {
  handleDeviceChange: (device: Device[]) => void
};

const SEARCH_URI = "https://api.testing.opensensemap.org/boxes";

const Search: React.FC<Props> = ({handleDeviceChange}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Device[]>([]);
  const filterBy = () => true;

  const handleSearch = (query: string) => {
    setIsLoading(true);

    fetch(`${SEARCH_URI}?name=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const options = data
          //@ts-ignore
          .map((item) => {
            return {
              name: item.name,
              id: item._id
            };
          });

        setResults(options);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex md:justify-center">
      <div className="w-full md:w-1/3">
        <div className="flex px-5">
          <Typeahead
            id="device-searc-form"
            placeholder="Type a device name"
            isLoading={isLoading}
            onSearch={handleSearch}
          />
        </div>
        {/* <AsyncTypeahead
          filterBy={filterBy}
          placeholder="Type a device name"
          id="device-search-form"
          labelKey="name"
          isLoading={isLoading}
          onSearch={handleSearch}
          options={results}
          onChange={handleDeviceChange}
        /> */}
      </div>
    </div>
    // <Row className="justify-content-md-center">
    //   <Col md={4}>
    //     <AsyncTypeahead
    //       filterBy={filterBy}
    //       placeholder="Type a device name"
    //       id="device-search-form"
    //       labelKey="name"
    //       isLoading={isLoading}
    //       onSearch={handleSearch}
    //       options={results}
    //       onChange={handleDeviceChange}
    //     />
    //   </Col>
    // </Row>
  )
}

export default Search;