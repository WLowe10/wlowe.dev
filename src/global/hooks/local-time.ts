import { useState, useEffect } from 'react';

const getTime = () => new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: "US/Central"}); 

export const useLocalTime = () => {
  const [time, setTime] = useState<string | null>();

  useEffect(() => {
    setTime(getTime());

    const intervalId = setInterval(() => setTime(getTime()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    time
  }
}
