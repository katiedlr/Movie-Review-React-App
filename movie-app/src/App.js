import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      title: 'EVERYTHING EVERYWHERE ALL AT ONCE',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1f7vq1AwuL._AC_SL1500_.jpg',
      synopsis: 'This film, directed by Daniel Kwan, Daniel Scheinert, and Jonathan Wang, follows a woman named Michelle Yeoh who discovers she has the power to travel between parallel universes.',
    },
    {
      title: 'ALL QUIET ON THE WESTERN FRONT',
      imageUrl: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/all-quiet-on-the-western-front-2022/large_all-quiet-on-the-western-front-movie-poster-2022.jpg',
      synopsis: 'Based on a novel by Erich Maria Remarque, this film takes place during World War I and follows a group of German soldiers as they face the horrors of war.',
    },
    {
      title: 'AVATAR: THE WAY OF WATER',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Lvqoov42L._AC_SL1500_.jpg',
      synopsis: 'A sequel to James Cameron\'s 2009 film \"Avatar,\" this movie follows a new adventure set in the same fictional world of Pandora.',
    },
    {
      title: 'THE BANSHEES OF INISHERIN',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61IO9Vd0aUL._SX342_.jpg',
      synopsis: 'This dark comedy, directed by Martin McDonagh, centers around a small Irish town and the eccentric characters who live there.',
    },
    {
      title: 'ELVIS',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814DOk-0i3L._AC_SL1000_.jpg',
      synopsis: 'This biographical film tells the story of the rise of Elvis Presley, with Austin Butler playing the role of the legendary musician.',
    },
    {
      title: 'THE FABELMANS',
      imageUrl: 'https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2023/01/TheFabelmans_PosterArt.webp?itok=W_DeBwzZ',
      synopsis: 'Directed by Steven Spielberg, this coming-of-age drama follows a young boy growing up in Arizona in the 1950s.',
    },
    {
      title: 'TÁR',
      imageUrl: 'https://d21ehp1kf1k9m9.cloudfront.net/wp-content/uploads/2022/09/27171913/Tar-poster-cropped-392x580.jpg',
      synopsis: 'This drama, directed by Todd Field, is about a family that moves to a small town in Montana and becomes embroiled in a controversy involving a local grizzly bear.',
    },
    {
      title: 'TOP GUN: MAVERICK',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71BokibfVUL._AC_SL1500_.jpg',
      synopsis: 'A sequel to the 1986 classic "Top Gun," this film follows a new generation of fighter pilots as they train at the Navy\'s elite TOPGUN school.',
    },
    {
      title: 'TRIANGLE OF SADNESS',
      imageUrl: 'https://www.trigon-film.org/en/shop/DVD/Triangle_of_Sadness/cover_240.jpg',
      synopsis: 'This satire, directed by Ruben Östlund, takes a critical look at the art world and the wealthy elite who inhabit it.',
    },
    {
      title: 'WOMEN TALKING',
      imageUrl: 'https://images.savoysystems.co.uk/GCL/578009.jpg',
      synopsis: 'Based on a novel by Miriam Toews, this film follows a group of women in a Mennonite community who come together to discuss the aftermath of a series of sexual assaults.',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Oscar Nominees for Best Picture 2023</h1>
        <h4> Share your ratings for the Best Picture nominations from the 95th Academy Awards.</h4>
        <h4> Let's hear your opinions on the year's most critically acclaimed films! </h4>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;

