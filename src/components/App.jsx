import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
export class App extends Component {
  state = {
    searchQuery: '',
  };
  
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar onSubmit = {this.handleFormSubmit}/>
    </div>
  );
}};
