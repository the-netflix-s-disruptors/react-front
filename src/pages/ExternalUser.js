import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { API_ENDPOINT } from "../constant";

export default function ExternalUser(props) {
  const [user, setUser] = useState(null);
  function getUser() {
    fetch(`${API_ENDPOINT}/user/external/${props.match.params.uuid}`, {
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        setUser(res);
      });
  }
  if (user === null) getUser();
  return (
    <div>
      <NavBar />
    </div>
  );
}
