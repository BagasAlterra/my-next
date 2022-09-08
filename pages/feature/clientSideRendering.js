import axios from "axios";
import React, { useEffect, useState } from "react";

const ClientSideRendering = () => {
  const [dateTime, setDateTime] = useState();

  const getDateTime = async () => {
    axios
      .get(`http://worldtimeapi.org/api/ip`)
      .then((response) => {
        setDateTime(response.data.datetime);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getDateTime();
    }, 10000);
  });

  return (
    <div>
      <div>
        <h1>{dateTime}</h1>
      </div>
    </div>
  );
};

export default ClientSideRendering;
