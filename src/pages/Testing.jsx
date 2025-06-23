import React, { useState, useEffect } from 'react';

function Testing() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

  }, []);

  return <p>Timer: {seconds}s</p>;
}
export default Testing
