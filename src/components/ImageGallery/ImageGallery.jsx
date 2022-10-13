
import { Component } from 'react';
import { axiosPicture } from '../Services/picture-api';

export class Gallery extends Component {
    state = {
      gallery: [],
      loading: false,
      error: null,

      };
      componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.searchQuery;
        const nextQuery = this.props.searchQuery;
    
        if (prevQuery !== nextQuery) {
          this.setState({ loading: true, gallery: axiosPicture});
    
        //   setTimeout(() => {
            axiosPicture(nextQuery) 
              
              .then(searchQuery => this.setState({ searchQuery }))
              .catch(error => this.setState({ error }));
        //   }, 1000);
        }
      }}