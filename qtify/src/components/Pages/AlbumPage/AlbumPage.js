import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import styles from "./AlbumPage.module.css";


export default function AlbumPage() {
  // const { albumId } = useParams();
  const { data } = useOutletContext();
  const { songs } = data;
  return (
  <div className={styles.wrapper}>
  <div className={styles.albumcontainer}>
    <div className={styles.child}>
      <img
        alt="album"
        src="https://img.discogs.com/grVTPVqiRonKp5ly_ey-moBmO0c=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11826116-1524151283-4015.jpeg.jpg"
        width={200}
      />
    </div>
    <div className={styles.child}>
      <h2>Best of Punjabi hits in 2022</h2>
      <p>Catch the most romantic punjabi tracks of 2022 #spotifyWrapped</p>
      <p>2022</p>
      <button className={styles.shufflebutton}>Shuffle</button>
      <button className={styles.librarybutton}>Add to library</button>
    </div>
  </div>
  <div className={styles.songwrapper}>
    <div>Title</div>
    <div>Artist</div>
    <div>Duration</div>
  </div>
  <div className={styles.songtable}>
    {songs.map((song) => (
      <div className={styles.songs}>
        <div className={styles.titlewrapper}>
          <img
            className={styles.imagewrapper}
            src={song.image}
            alt="album"
            loading="lazy"
          />
          <div>
            <p>{song.title}</p>
          </div>
        </div>
        <div className={styles.artist}>
          <p>{song.artists}</p>
        </div>
        <div>
          <p>{song.durationInMs / 10000}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}