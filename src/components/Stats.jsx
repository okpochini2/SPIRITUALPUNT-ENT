import { useEffect, useState } from "react";
import { getSubscribers } from "../api/api";

export default function Stats() {
const [subs, setSubs] = useState(0);

useEffect(() => {
  getSubscribers().then(setSubs);
},[])

return <h3>Subscribers: {subs}</h3>;
}