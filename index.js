// var image = {
//   name: 'Kotek',
//   src: 'http://imgur.com/n8OYCzR.png'
// };

// var GalleryItem = React.createClass({
//   propTypes: {
//     image: React.PropTypes.object.isRequired,
//   },

//   render: function() {
//     return(
//       React.createElement('div', {},
//         React.createElement('h2', {}, this.props.image.name),
//         React.createElement('img', { src: this.props.image.src })
//       )
//     )
//   },
// });

var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'hp.jpg'
  },
  {
    id: 2,
    title: 'Krol Lew',
    desc: 'Film o krolu sawanny',
    image: 'kl.jpg'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'film o apokalipsie',
    image: 'mx.jpg'
  },
  {
    id: 4,
    title: 'Wlatca pierscieni',
    desc: 'film o ratowaniu swiata',
    image: 'lotr.jpg'
  }
]
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return(
      React.createElement('li', { key: this.props.movie.id },
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('img', { src: this.props.movie.image })
      )
    )
  },
});

var answer = movies.map(function(movie) {
  return React.createElement(Movie, { movie: movie, key: movie.id });
})


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'lista filmow'),
    React.createElement('ul', {}, answer)
  );

ReactDOM.render(element, document.getElementById('app'));