
import React from 'react';
import  PhotoContainer from './PhotoContainer'
class App extends React.Component{
  constructor(props) {
    super();
    this.state = {
      photos: [],
    }
  }

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => {
  console.log('response', response);
  if(!response.ok){
    throw Error ("Error fetching ")
  }
  return response.json()
  .then(allData => {
    this.setState({photos: allData});
    console.log('allData', allData);
  })
  .catch(err => {
    throw Error(err.message)
  })
})
}
render() {
  return (
    <section className = "app">
      <p>Is this working?</p>
      <PhotoContainer photos={this.state.photos} />
    </section>
  )
}

}
export default App
