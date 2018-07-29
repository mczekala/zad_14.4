var MoviesList = React.createClass({
  getInitialState: function () {
    return {
      movies: [{
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
    };
  },
  answer: function () {
    this.state.movies.map(function (movie) {
      return React.createElement(Movie, {
        movie: movie,
        key: movie.id
      });
    })
  },
  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'lista filmow'),
        React.createElement('ul', {}, this.answer),
      )
    )
  }
});

var Movie = React.createClass({
  render: function () {
    return (
      React.createElement('li', {
          key: this.props.movie.id
        },
        React.createElement('img', {
          src: this.props.movie.image
        }),
        React.createElement('MovieTitle', {
          title: this.props.movie.title
        }),
        React.createElement('MovieDescription', {
          desc: this.props.movie.desc
        })
      )
    )
  },
});

var MovieTitle = React.createClass({
  render: function () {
    return (
      React.createElement('h2', {}, this.props.movie.title)
    )
  },
});

var MovieDescription = React.createClass({
  render: function () {
    return (
      React.createElement('p', {}, this.props.movie.desc)
    )
  },
});
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
];
var movie = movies[0];
ReactDOM.render(React.createElement('MoviesList', {}), document.getElementById('app'));