import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Project Details | FireSafe</title>
      </Helmet>
      <div className="container section-padding">
        <h1>Project: {id}</h1>
        <p>Detailed information about this project...</p>
      </div>
    </>
  );
};

export default ProjectDetail;