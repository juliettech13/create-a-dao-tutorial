import React from 'react';
import Banner from '../components/Banner';
import CreateDAOForm from '../components/CreateDAOForm';
import NavBar from '../components/NavBar';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Banner />
      <CreateDAOForm />
    </>
  )
}
