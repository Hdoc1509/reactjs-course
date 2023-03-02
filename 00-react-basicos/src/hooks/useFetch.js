import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw {
            error: true,
            status: res.status,
            statusText: res?.statusText || "Ocurrió un error",
          };
        }

        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError(error);
      }
    };

    getData();
  }, [url]);

  return { data, isPending, error };
};
