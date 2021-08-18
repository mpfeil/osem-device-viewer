import React from 'react'

type Props = {
  id: string;
  placeholder: string;
  isLoading: boolean;
  onSearch: (query: string) => void
}

const Typeahead: React.FC<Props> = ({id, placeholder, isLoading}) =>{
  return(
    <>
      <input className="w-full border rounded border-gray-200 p-1.5 focus:outline-none focus:ring-4 focus:ring-purple-600 transition duration-150 ease-in-out" type="text" name="" id={id} placeholder={placeholder} />
      {
        isLoading && (
          <div className="bg-white">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )
      }
    </>
  )
}

export default Typeahead;