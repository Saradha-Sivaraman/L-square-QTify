import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";
import styles from "./Section.module.css";

function Section({ title, data, filterfetch, type }) {
  const [filters, setFilters] = useState([{ key: "All", label: "All" }]);
  const [filteredIndex, setFilteredIndex] = useState(0);
  const [isShowAll, setIsShowAll] = useState(false);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterfetch) {
      filterfetch().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  // console.log(data);
  const filteredCards = data.filter((card) =>
    filteredIndex !== 0 ? card.genre.key === filters[filteredIndex].key : card
  );

  return (
    <>
      <div className={styles.sectionwrapper}>
        <div className={styles.header}>
            <h4>{title}</h4>
            <h4 className={styles.showAll} onClick={handleToggle}>{!isShowAll ? "Show All" : "Collapse"}</h4>
            
        </div>

        {filterfetch && (
          <Filter
            data={filters}
            filteredIndex={filteredIndex}
            setFilteredIndex={setFilteredIndex}
          />
        )}
        <div>
          {isShowAll ? (
            <div className={styles.cardswrapper}>
              {filteredCards.map((item) => (
                <Card data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredCards}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Section;