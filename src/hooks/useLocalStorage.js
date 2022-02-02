import { useState, useEffect } from 'react';
const LS_KEY = 'name_id';
export default function useLocalStorage(LS_KEY, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(state));
  }, [LS_KEY, state]);

  return [state, setState];
}
