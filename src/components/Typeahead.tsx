import React, { SyntheticEvent, useCallback } from 'react'

type Props = {
  id: string;
  placeholder: string;
  isLoading: boolean;
  minLength?: number;
  onSearch: (query: string) => void
}

const Typeahead: React.FC<Props> = ({id, placeholder, isLoading, minLength = 3, onSearch}) =>{

  const onInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.persist()

    if (event.currentTarget.value.length >= minLength) {
      onSearch(event.currentTarget.value)
    }
  }

  const handleInputChange = useCallback((query: string, e: SyntheticEvent<HTMLInputElement>) => {
    console.log('test');
  }, [onInputChange])

  return(
    <div className="relative w-full">
      <input className={`w-full ${isLoading ? 'pr-7' : ''} border rounded border-gray-200 p-1.5 focus:outline-none focus:ring-4 focus:ring-purple-600 transition duration-150 ease-in-out`} type="text" name="" id={id} placeholder={placeholder}
        onChange={onInputChange}
      />
      {
        isLoading && (
          <div className="bg-transparent flex justify-center items-center top-0 right-0 pointer-events-none bottom-0 absolute">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )
      }
    </div>
  )
}

export default Typeahead;