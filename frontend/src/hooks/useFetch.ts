import axios from "axios"
import { useState, useEffect } from "react"

import * as config from "../config/enviroments"

const useFetch = (path : string, params = {}, deps = []) => {
  const [data, setData] = useState([])
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(config.API_URL + path, params)
        setData(res.data)
      } catch (error) {
        setError(error)
      }
    };
    path && fetchData()
  }, deps)

  return { data, error }
};

export default useFetch
