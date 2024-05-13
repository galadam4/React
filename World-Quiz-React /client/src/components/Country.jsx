import React, { useEffect } from "react";


function Country(props) {
  
  return (
    <h1 className="countryName">
      {props.country.country}
    </h1>
  );
}

export default Country;
