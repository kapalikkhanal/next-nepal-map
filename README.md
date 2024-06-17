# Map of Nepal

> Next component for Map of Nepal

[![NPM](https://img.shields.io/npm/v/react-nepal-map.svg)](https://www.npmjs.com/package/react-nepal-map) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save next-nepal-map
```

## Live Demo

[https://mapofnepal.vercel.app/](https://mapofnepal.vercel.app/)

## Usage

```jsx

import React, { useState } from 'react';
import { DistrictMap } from 'next-nepal-map';

const App = () => {
  const districtStyles = {
    'Bhaktapur': { fill: 'red' },
    'Kathmandu': { fill: 'green' },
    'Lalitpur': { fill: 'blue' },
  };

  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handleHover = (districtName) => {
    setHoveredDistrict(districtName);
  };

  const handleMapClick = (val) => {
    console.log(val);
  };

  return (
    <div className='flex justify-center items-center w-full max-h-screen flex-col py-4'>
      <div className='relative h-auto w-full lg:px-[10%] p-4'>
        <div className='h-4 absolute top-1/4 left-2/3'>
          {hoveredDistrict && (
            <div className="hover-overlay text-white border-2 border-white p-1.5 rounded-3xl px-4">
              {hoveredDistrict}
            </div>
          )}
        </div>
        <DistrictMap
          stroke='#000'
          strokeWidth={1}
          districtStyles={districtStyles}
          onMapClick={handleMapClick}
          showDistrictLabels={true}
          onDistrictHover={handleHover}
        />
      </div>
    </div>
  );
};

export default App;

```
## References
This project utilizes a modified version of the [react-nepal-map](https://github.com/keyrunpay/react-nepal-map) library and is available [here](https://github.com/keyrunpay/react-nepal-map).

## License

MIT © [keyrunpay](https://github.com/keyrunpay)
