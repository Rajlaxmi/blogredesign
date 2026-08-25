import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <section className="mx-auto max-w-page px-6 sm:px-10">
      <div className="max-w-2xl border-t border-rule pb-24 pt-10">
        <About />
      </div>
    </section>
  </Layout>
);

export default Home;
