import React, { useState } from 'react';

const AppComponent = () => {
  const [data, setData] = useState({});

  const handlesubmit = () => {
    Liferay.Util.fetch(
      `${Liferay.ThemeDisplay.getPortalURL()}/SERVICE URL`,
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  return (
    <>
      <button onClick={() => handlesubmit()}>Call Service</button>
      <h1>{JSON.stringify(data, null, 3)}</h1>
    </>
  );
};

export default AppComponent;
