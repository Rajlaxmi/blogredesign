import React from 'react';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Publications from '../components/Publications';

const PublicationsPage: React.FC = () => (
  <Layout>
    <PageHeading
      title="Publications"
      lead="Selected publications, sorted by most recent. * denotes equal contribution."
    >
      <Publications />
    </PageHeading>
  </Layout>
);

export default PublicationsPage;
