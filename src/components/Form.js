import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <form>
        <h2>ADD NEW BOOK</h2>
        <input type="text" id="title" name="title" required />
        <input type="text" id="category" name="category" required />
        <button type="submit">ADD BOOK</button>
      </form>
    );
  }
}

export default Form;
