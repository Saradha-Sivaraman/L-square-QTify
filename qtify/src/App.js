import { fetchTopSongs, fetchNewSongs, fetchSongs } from "./api/api";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { Outlet } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import FAQAccordion from "./components/FAQAccordion/FAQAccordion";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState({});

  const getData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    getData("topAlbums", fetchTopSongs);
    getData("newAlbums", fetchNewSongs);
    getData("songs", fetchSongs);
  });
  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <div className="App">
      <>
        <StyledEngineProvider injectFirst>
          <Navbar searchAlbums={[...topAlbums, ...newAlbums]} />
          <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
          <FAQAccordion />
        </StyledEngineProvider>
      </>
    </div>
  );
}