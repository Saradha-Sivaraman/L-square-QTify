import { Chip, Tooltip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs, slug } = data;
        return (
          <Link to={`/album/${slug}`}>
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <div className={styles.wrapper}>
                <div className={styles.cardwrapper}>
                  <img src={image} alt="album" loading="lazy" />
                  <div className={styles.cardbody}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.followwrapper}
                    />
                  </div>
                </div>
                <div className={styles.titlewrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Tooltip>
          </Link>
        );
      }
      case "song": {
        const { image, likes, title } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.cardwrapper}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.cardbody}>
                <div className={styles.followwrapper}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titlewrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;