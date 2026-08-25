import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound: React.FC = () => (
  <Layout>
    <section className="mx-auto max-w-page px-6 sm:px-10">
      <div className="max-w-2xl pb-24 pt-28 sm:pt-36">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-display font-normal text-fg">Nothing here.</h1>
        <p className="mt-6 text-[0.9rem] text-muted">
          <Link to="/" className="link">
            Back to the beginning
          </Link>
          .
        </p>
      </div>
    </section>
  </Layout>
);

export default NotFound;
