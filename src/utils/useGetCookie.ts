import { useState, useEffect } from 'react';

const useCookieValue = (cookieName: string): string => {
  const [cookieValue, setCookieValue] = useState<string>('');

  const getCookieValue = (name: string): string => {
    return (
      document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1] || ''
    );
  };

  useEffect(() => {
    const value = getCookieValue(cookieName);
    setCookieValue(value);
  }, [cookieName]);

  return cookieValue;
};

export default useCookieValue;
