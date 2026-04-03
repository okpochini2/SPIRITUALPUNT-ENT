import axios from "axios";

export const getSubscribers = async () => {
  try{
    const res =await axios.get("https://jsonplaceholder.typicode.com/users");
    return 22;
  }catch{
    return 22;
  }
};