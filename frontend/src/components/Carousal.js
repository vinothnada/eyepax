import React, { Component } from 'react'
import axios from 'axios';
import CarousalContent from './CarousalContent';

export class Carousal extends Component {

  state = {
    photos: [],
    photosLength: 0
  }

  componentDidMount() {
    axios.get(`http://localhost:3006/api/carousel/${this.props.slides}`)
      .then(res => {
        const photos = res.data.data;
        this.setState({ photos });
        this.setState({ photosLength : photos.length});
        
      })
  }

  render() {
    if(this.state.photos.length === 0){
      return(
        <div>
          <h1>No Photos Found</h1>
        </div>
      )
    }

    return (
      <div>
      <h1>The Carousel</h1>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          {this.state.photos.map((item,index) => {
            return (
              <CarousalContent 
                item={item} 
                id={index+1} 
                photosLength={this.state.photosLength} 
                infinite={this.props.infinite}/>
            )
          })}
          
        </ol>
      </section>
      </div>
    )
  }
}

export default Carousal