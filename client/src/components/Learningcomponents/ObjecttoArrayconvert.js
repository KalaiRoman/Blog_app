import React from 'react'

function ObjecttoArrayconvert() {

  const data1 = {
    name: "kalai",
    age: 20,
    place: "chennai"

  }
  const data2 = {
    name: "kalai1",
    age: 25,
    place: "chennai1"

  }

  const forms = [data1, data2];

  return (
    <div>ObjecttoArrayconvert

      <div>
        <h2> {forms?.length}</h2>
      </div>
      {forms?.map((item, index) => {
        return (
          <div key={index}>
            {item?.name}
          </div>
        )
      })}
    </div>
  )
}

export default ObjecttoArrayconvert