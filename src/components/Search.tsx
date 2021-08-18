import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
//@ts-ignore
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Device } from '../types/Device';

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
        console.log(data);
        const options = data
        //@ts-ignore
          .map((item) => {
            return {
              name: item.name,
              id: item._id
            };
          });
        console.log(options);
        setResults(options);
        setIsLoading(false);
      });
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={4}>
        <AsyncTypeahead
          filterBy={filterBy}
          placeholder="Type a device name"
          id="device-search-form"
          labelKey="name"
          isLoading={isLoading}
          onSearch={handleSearch}
          options={results}
          onChange={handleDeviceChange}
        />
      </Col>
    </Row>
  )
}

export default Search;