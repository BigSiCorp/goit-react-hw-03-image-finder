import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };


  handleSubmit = event => {
    console.dir(this.state.searchQuery);
    event.preventDefault();
    
    if (this.state.searchQuery.trim() === '') {
        console.dir(this.state.searchQuery)
      alert('Введите имя покемона.');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.searchQuery} 
          />
        </form>
      </header>
    );
  }
}
