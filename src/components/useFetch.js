import { useEffect,useState } from "react";
const useFetch=(url)=>{

    const [data, setData] = useState(null);
        const [isPending,setIsPending]=useState(true);
        const [error,setError]=useState(null);
    useEffect(() => {
        setTimeout(() => {
          fetch(url) 
            .then(response => {
              if (!response.ok) {
                throw new Error("Failed to fetch data from server");
              }
              return response.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch(err => {
              setError(err.message);
              setIsPending(false);
            });
        }, 1000);
      }, [url]);

      return {data,isPending,error};
}
export default useFetch;