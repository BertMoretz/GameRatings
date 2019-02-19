import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';


import style from '../styles.css'

export const CharacterCard = ({ character }) => (
      <GridListTile key={character.name} className={style.elem}>
          <a href="#" className={style.coverlink}>
            <div className={style.detailscover}>
                Details
            </div>

            <img src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" + character.cover.image_id + ".jpg"} alt={character.name} className={style.elem} />
          </a>

          <GridListTileBar
            title={character.name}
            subtitle={<span> {character.genres[0].name}</span>}
            actionIcon={
              <IconButton >
                <div className={style.score}>
                { ('aggregated_rating' in character)? parseInt(character.aggregated_rating )+"%" : "tbd" }
                </div>
              </IconButton>
            }
          />
      </GridListTile>

)
