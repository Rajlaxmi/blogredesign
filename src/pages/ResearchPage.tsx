import React from 'react';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Research from '../components/Research';

const ResearchPage: React.FC = () => (
  <Layout>
    <PageHeading title="Research" lead="Current research directions.">
      <Research />
    </PageHeading>
  </Layout>
);

export default ResearchPage;
