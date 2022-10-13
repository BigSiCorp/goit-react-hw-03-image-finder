
import { Component } from 'react';
import { axiosPicture } from '../../Services/picture-api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1
  };

  //   async componentDidMount() {
  //   // window.addEventListener('resize', this.handleResizeScreen);
    
  //   try {
  //     // Встановлюємо індикатор завантаження та обнуляємо помилку, якщо була
  //     this.setState({ isLoading: true, error: '' });

  //     const pictureData = await axiosPicture(this.props.searchQuery);

  //     this.setState({ gallery: [...pictureData] });
  //   } catch (err) {
  //     this.setState({ error: err.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }


  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    // const hits = this.fetchGallery()
    // console.log(axiosPicture(nextQuery, this.state.page))
            
    if (prevQuery !== nextQuery) {
      
      try {
      // Встановлюємо індикатор завантаження та обнуляємо помилку, якщо була
      this.setState({ isLoading: true, error: '' });

      const pictureData = await axiosPicture(this.props.searchQuery);

      this.setState({ gallery: [...pictureData] });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
    
      //this.setState({ loading: true, gallery: [...this.fetchGallery()] });
    
      //   setTimeout(() => {
      // axiosPicture(nextQuery) 
              
      //   .then(searchQuery => this.setState({ searchQuery }))
      //   .catch(error => this.setState({ error }));
      //   }, 1000);
    }
  }
  render() {
    console.log(this.state.gallery)
       return(<ul className="gallery">
         {!!this.state.gallery.length && <GalleryItem gallery={this.state.gallery} />}
     </ul>)
     }
  }
