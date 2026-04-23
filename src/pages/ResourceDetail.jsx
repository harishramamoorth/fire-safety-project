import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ResourceDetail = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Resource Details | FireSafe</title>
      </Helmet>
      <div className="container section-padding">
        <h1>Resource: {id}</h1>
        <p>Detailed information about this resource...</p>
      </div>
    </>
  );
};

export default ResourceDetail;