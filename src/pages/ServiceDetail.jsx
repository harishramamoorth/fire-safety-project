import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServiceDetail = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Service Details | FireSafe</title>
      </Helmet>
      <div className="container section-padding">
        <h1>Service: {id}</h1>
        <p>Detailed information about this service...</p>
      </div>
    </>
  );
};

export default ServiceDetail;