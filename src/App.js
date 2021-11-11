import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
//import PropTypes from "prop-types";

//#3 Making the Movie web
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {data: { data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({ movies, isLoading: false }); // es6사용 movies : movies
  };
  componentDidMount() {
    this.getMovies();
    // console.log(' i mounted')
    // setTimeout (() => {
    //   this.setState({ isLoading: false});
    // }, 6000);
  }

  render() {
    console.log('i rendered');
    const { isLoading, movies } = this.state; // es6
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))} 
          </div>
        )}
      </section>
    );
  }
}

export default App;

// #1. jsx & porps
// function Food({name, picture, rating}){
//   return <div>
//     <h1>I like {name}</h1>
//     <h4>{rating}/5.0</h4>
//     <img src = {picture} alt = {name}></img>
//     </div>
// }
// Food.propTypes ={
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// const foodILike = [
//   { id:1,
//     name: 'kim',
//     image :'./image/IU1.jpg',
//     rating : 5
//   },

//   {id:2,
//     name: 'IU',
//     image:'./image/IU1.jpg',
//     rating: 4.9
//     },

//   { id:3,
//     name: 'yang',
//     image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ideashomegarden.com%2Fstorage%2Fposts%2Fgallery%2F2013%2FJun%2F14413%2Fthe-concept-of-yin-and-yang.jpg&imgrefurl=https%3A%2F%2Fwww.ideashomegarden.com%2Ffeng-shui%2Fthe-concept-of-yin-and-yang&tbnid=plaBQ6jdM029hM&vet=12ahUKEwiDtcGa07DzAhU7y4sBHVCXDg4QMygEegUIARCpAQ..i&docid=0g35-TR1B00ZzM&w=1152&h=768&q=yang&ved=2ahUKEwiDtcGa07DzAhU7y4sBHVCXDg4QMygEegUIARCpAQ',
//     rating : 4.8
//   }]

// function App() {
//   return (
//     <div className="App">
//     {foodILike.map(dish => (<Food rating={dish.rating} key={dish.id} name = {dish.name} picture = {dish.image}/> ))}
//     {/* { <img src = {require("./image/IU1.jpg").default}></img>} */}
//     {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

//#2. state
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     console.log("hello")

//   }
//   state = {
//     count : 0
//   };
//   Add = () => {
//     console.log('Add')
//     this.setState(current => ({count: current.count + 1}))
//   }
//   Minus = () => {
//     console.log('Minus')
//     this.setState(current => ({count: current.count - 1}))
//   }
//   componentDidMount(){
//     console.log("compnent rendered")
//   }
//   componentDidUpdate(){
//     console.log(' I just updated')
//   }
//   componentWillUnmount(){
//     console.log('Goodbye component')
//   }
//     render(){
//       console.log("I'm rendering")
//         return (
//           <div>
//             <h1> The number is: {this.state.count}</h1>
//             <button onClick ={this.Add} >Add</button>
//             <button onClick = {this.Minus}>Minus</button>
//           </div>
//         )

//     }
// }
