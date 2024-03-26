import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (options) => {
    const API_URI = import.meta.env.REACT_APP_API_URI;
    console.log(API_URI);
    const url = API_URI + options;
    console.log(url);
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('network response was not ok')
      }
      const result = await response.json();
      setData(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData }
}

export default useFetch;