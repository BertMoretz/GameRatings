import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./details.css"

export class GameDetails extends React.Component {

    state = { game: void 0 }

    loadCharacterDetails = (gameID) => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games/${gameID}?fields=name,cover.*,artworks.*,created_at,game_engines.*,platforms.*,screenshots.*,genres.*,summary,aggregated_rating,involved_companies.company.*&&expand=cover,artworks,genres,screenshots,platforms,game_engines,involved_companies, involved_companies.company`, {headers: {
              "user-key": "861c079a35348acf2360c08a2efc2e90"
            }})
            .then(response => {
              console.log('Axios returned', response.data)
              this.setState({
                game: response.data[0]
              })
            });
    }

    componentDidMount() {
        if (this.props.match.params) {
            this.loadCharacterDetails(this.props.match.params.id)
        }
    }


    render() {

        const { game } = this.state

        const ratingClass = {
          backgroundColor: 'green',

        };

        if(!game) {
          return <div className={styles.loading}> <CircularProgress /> </div>
        }

        if (game) {
          if ("aggregated_rating" in game) {
            if (game.aggregated_rating <= 70)
            ratingClass.backgroundColor = "#ffcf48"
            if (game.aggregated_rating < 50)
            ratingClass.backgroundColor = "#ca3a27"
          } else {
            ratingClass.backgroundColor = "#383838"
          }
        }

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12} justify="center">
                  <div className={styles.hey}>
                    <img src={"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/" + game.screenshots[0].image_id  + ".jpg"} className={styles.back}/>
                  </div>
                  <div className={styles.gamecover}>
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={12} md={4} lg={3} justify="center">
                        <img src={"https://images.igdb.com/igdb/image/upload/t_cover_big/" + game.cover.image_id + ".jpg"} alt={game.name} className={styles.elem} />
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs={12} sm container direction="column" spacing={40}>
                          <Grid item >
                            <div className={styles.gamename}> {game.name} </div>
                            <div className={styles.gamegenre}> {game.genres[0].name} </div>
                            <br/>
                            <div className={styles.gamecomp}> Developed by {game.involved_companies[0].company.name} </div>
                          </Grid>
                          <Grid item className={styles.hm}>
                            <div className={styles.rate}> {game.summary} </div>
                          </Grid>

                        </Grid>
                      </Grid>

                      <Grid item xs={12} md={4} lg={3}>
                        <div className={styles.gamerating} style={ratingClass}> { ('aggregated_rating' in game)? parseInt(game.aggregated_rating ) : "tbd" } </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="styles.screens">
                    <GridList className={styles.gridList} cols={2.3} cellHeight={300}>
                      {game.screenshots.map(screen => (
                        <GridListTile key={screen.image_id}>
                          <img src={"https://images.igdb.com/igdb/image/upload/t_screenshot_med/" + screen.image_id + ".jpg"} alt={screen.image_id}/>
                        </GridListTile>
                      ))}
                    </GridList>
                </div>
              </Grid>
            </Grid>
        )
    }
}