import React from 'react';
import Navbar from './Navbar';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Navbar />
        <main className="categories">
          <button type="button">Check Status</button>
        </main>
      </>
    );
  }
}

export default Categories;
