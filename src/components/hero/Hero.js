import { Paper, dividerClasses } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PaperClassKey } from "@mui/material";
import "./Hero.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Trailer from "../trailer/Trailer";
const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt=""></img>
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>

                    <div className="movie-buttons-container">
                      <div className="play-button-icon-container">
                        <FontAwesomeIcon
                          className="play-button-icon"
                          icon={faCirclePlay}
                        />
                      </div>
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
