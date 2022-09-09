import React from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const response = await axios.get(`http://worldtimeapi.org/api/ip`);
  return {
    props: {
      dateTime: response.data.datetime,
    },
  };
};

const StaticSiteGeneration = ({ dateTime }) => {
  return (
    <div>
      <p>Ini halaman Static Site Generation</p>
      <p>{dateTime}</p>
    </div>
  );
};

export default StaticSiteGeneration;
