import React, { useEffect, useState } from 'react'

function CountProgram() {


  const [numbers, setNumbers] = useState(0);

  const vowels = ["a", "e", "i", "o", "u"];

  const name = "kalaisuryaaaaaaooo";
  const changename = Array.from(name);

  useEffect(() => {
    var count = 0;
    changename?.map((item, index) => {
      if (vowels.includes(item)) {
        count++;
      }
    })
    setNumbers(count);
  }, [changename, numbers])
  return (
    <div>CountProgram in Vowels {numbers}</div>
  )
}

export default CountProgram