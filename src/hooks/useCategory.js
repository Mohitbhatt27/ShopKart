import axios from "axios";
import { useEffect, useState } from "react";
import { getAllCategories } from "../apis/fakeStoreProdApis";

export function useCategory() {
  const [categories, setCategories] = useState(null);

  async function downloadAllCategories() {
    const response = await axios.get(getAllCategories(),{withCredentials: true});
    setCategories(response.data);
  }

  useEffect(() => {
    downloadAllCategories();
  }, []);

  return { categories };
}
