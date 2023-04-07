import { Paper, dividerClasses } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PaperClassKey } from "@mui/material";
import "./Hero.css";

import React from "react";
const Hero = () => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div className="movie-card">
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt=""></img>
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
