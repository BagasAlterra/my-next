import axios from "axios";
import React, { useEffect } from "react";

export const getServerSideProps = async () => {
  const response = await axios.get(`http://worldtimeapi.org/api/ip`);
  const dateTime = response.data;
  return {
    props: {
      dateTime: dateTime,
    },
  };
};

const ServerSideRendering = ({ dateTime }) => {
  console.log("date time: ", dateTime.datetime);
  return (
    <div>
      <p>Ini Server Side Rendering</p>
      <p>{dateTime.datetime}</p>
    </div>
  );
};

export default ServerSideRendering;
