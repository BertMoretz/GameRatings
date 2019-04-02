import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

import style from './all-games.css'


export const GameCard = ({ game, handleDetailsClick }) => (
  <GridListTile key={game.name} className={style.elem}>
      <a href="#" className={style.coverlink} onClick={handleDetailsClick}>
        <div className={style.detailscover}>
            Details
        </div>

        <img src={game.cover? "https://images.igdb.com/igdb/image/upload/t_cover_big/" + game.cover.image_id + ".jpg" : ""} alt={game.name} className={style.elem} />


      <GridListTileBar
        className={style.caption}
        title={game.name}
        subtitle={<span> {game.genres? game.genres[0].name: "  "}</span>}
        actionIcon={
          <IconButton >
            <div className={style.score}>
            { ('aggregated_rating' in game)? parseInt(game.aggregated_rating )+"%" : "tbd" }
            </div>
          </IconButton>
        }
      />
     </a>
  </GridListTile>
)
