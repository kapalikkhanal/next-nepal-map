/* eslint-disable prettier/prettier */
import React from 'react'
import districtMapData from '../metadatas/districtMapData'
import {
  defaultColor,
  getRandomColor,
  defaultProvinceColor
} from '../helpers/color'

export default function DistrictMap({
  onMapClick,
  randomSectorColor,
  sectorClassName,
  containerClassName,
  color,
  hoverColor,
  provinceColor,
  stroke,
  strokeWidth,
  districtStyles = {},
  onDistrictHover,
}) {
  const handleMapClick = (item) => {
    if (onMapClick) {
      onMapClick({
        name: item.name,
        zip: item.zip,
        province: item.province,
        area: item.area
      })
    }
  };

  const handleMouseOver = (item) => {
    if (onDistrictHover) {
      onDistrictHover(item.name);
    }
  };

  const handleMouseOut = (item) => {
    if (onDistrictHover) {
      onDistrictHover(null);
    }
  };

  return (
    <div style={{ maxWidth: '100%' }} className={containerClassName || ''}>
      <svg viewBox='0 0 1026.077 519.136'>
        <g transform='translate(-52.379 -15.971)'>
          {districtMapData.map((item, index) => {
            const pathColorList = provinceColor || defaultProvinceColor
            let pathColor =
              pathColorList.length > item.province - 1
                ? pathColorList[item.province - 1]
                : defaultProvinceColor[item.province - 1]
            if (color) pathColor = color
            if (randomSectorColor) pathColor = getRandomColor()

            // Apply individual district style if available
            if (districtStyles[item.name]) {
              pathColor = districtStyles[item.name].fill || pathColor;
            }

            return (
              <path
                className={sectorClassName || ''}
                style={{ cursor: 'pointer', fill: pathColor }}
                key={index}
                stroke={stroke || '#000'}
                strokeWidth={strokeWidth || '1px'}
                d={item.shape}
                onMouseOver={(event) => {
                  event.target.style.fill = districtStyles[item.name]?.fill || pathColor;
                  handleMouseOver(item);
                }}
                onMouseOut={(event) => {
                  event.target.style.fill = pathColor;
                  handleMouseOut(item);
                }}
                onClick={() => handleMapClick(item)}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}
