import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';


import style from './styles.css'

export const SearchElement = ({ game, handleDetailsClick }) => (
  <ListItem button onClick={handleDetailsClick}>
    <ListItemIcon>
      <img src={game.cover? "https://images.igdb.com/igdb/image/upload/t_micro/" + game.cover.image_id + ".jpg" : ""} alt={game.name} className={style.elem}/>
    </ListItemIcon>
    <ListItemText primary={game.name} />
    <ListItemSecondaryAction>
      <ListItemText primary={<div className={"aggregated_rating" in game ? game.aggregated_rating < 70 ? game.aggregated_rating < 50 ? `${style.gamerating} ${style.bad}`: `${style.gamerating} ${style.okay}`: `${style.gamerating} ${style.good}`: `${style.gamerating} ${style.tbd}`}> { ('aggregated_rating' in game)? parseInt(game.aggregated_rating ) : "tbd" } </div>} />
    </ListItemSecondaryAction>
  </ListItem>
)
