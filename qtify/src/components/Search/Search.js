import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
//import useAutocomplete from "@mui/base/useAutocomplete";
import useAutocomplete from '@mui/material/useAutocomplete';
//import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";


const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  zIndex: 10,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  color: "var(--color-white)",
  overflow: "auto",
  height: "max-content",
  maxHeight: "500px",
  inset: "60px 0px 0px",
  border: "1px solid var(--color-primary)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer"
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white"
  }
}));

function Search({ searchAlbums, placeholder }) {
  const navigate = useNavigate();
  const {
    getRootProps,
    getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchAlbums || [],
    getOptionLabel: (option) => option.title
  });

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/album/${value.slug}`);
  };
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.searchbar}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              className={styles.listItem}
            >
              {" "}
              <li className={styles.imgcontainer}>
                <img
                  className={styles.imagewrapper}
                  src={option.image}
                  alt="album"
                  loading="lazy"
                />
                <div>
                  <p className={styles.albumtitle}>{option.title}</p>
                  <p className={styles.artistsname}>
                    {option.songs[0].artists}
                  </p>
                </div>
              </li>
              {option.follows} Follows
            </li>
          ))}
        </Listbox>

      ) : null}
    </div>
  );
}

export default Search;