import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Profile() {
  return (
    <main>
      <Header title="Profile" search={ false } />
      <Footer />
    </main>
  );
}

export default Profile;
