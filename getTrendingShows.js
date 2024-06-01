import { Show } from "./show.js";

function getTrendingShows() {
  const shows = createShows();
  return shows;
}

function createShows() {
  const narutoShppudenImg =
    "https://rukminim2.flixcart.com/image/850/1000/jcc9ci80/poster/s/r/r/medium-pl-anime-shippuden-naruto-hokage-photoswall-wall-poster-original-imaet3geg8zyqhzm.jpeg?q=90&crop=false";
  const narutoShippudenWatchLink =
    "https://cinemana.shabakaty.com/video/en/18395?showInfo=true";
  const narutoShippuden = new Show(
    "Naruto Shippuden",
    narutoShppudenImg,
    narutoShippudenWatchLink
  );

  const onepieceImg =
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/y/4/c/medium-one-piece-monkey-d-luffy-hd-anime-characters-matte-finish-original-imagmdhmmgapczhv.jpeg?q=90&crop=false";
  const onepieceWatchLink =
    "https://cinemana.shabakaty.com/video/en/38834?showInfo=true";
  const onePiece = new Show("One Piece", onepieceImg, onepieceWatchLink);

  const dragonBallImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CcFjhq1ZP-Bflgnm5h8XKAs9nQPhNb4cMw&s";
  const dragonBallWatchLink =
    "https://cinemana.shabakaty.com/video/en/57930?showInfo=true";
  const dragonBall = new Show(
    "Dragon Ball",
    dragonBallImg,
    dragonBallWatchLink
  );

  const demonSlayerImg =
    "https://images.fineartamerica.com/images/artworkimages/medium/3/demon-slayer-group-artwork-big-mart.jpg";
  const demonSlayerWatchLink =
    "https://cinemana.shabakaty.com/video/en/279789?showInfo=true";
  const demonSlayer = new Show(
    "Demon Slayer",
    demonSlayerImg,
    demonSlayerWatchLink
  );

  const myHeroAcademiaImg =
    "https://ungvanguard.org/wp-content/uploads/2021/10/IMG_4242-900x510.jpg";
  const myHeroAcademiaWatchLink =
    "https://cinemana.shabakaty.com/video/en/67767?showInfo=true";
  const myHeroAcademia = new Show(
    "My Hero Academia",
    myHeroAcademiaImg,
    myHeroAcademiaWatchLink
  );

  const bleachImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpdZsgThxzvtcRqgKJls10_VTXKxQljtUlA&s";
  const bleachWatchLink =
    "https://cinemana.shabakaty.com/video/en/105562?showInfo=true";
  const bleach = new Show("Bleach", bleachImg, bleachWatchLink);
  return [
    narutoShippuden,
    onePiece,
    dragonBall,
    demonSlayer,
    myHeroAcademia,
    bleach,
  ];
}

export { getTrendingShows };
