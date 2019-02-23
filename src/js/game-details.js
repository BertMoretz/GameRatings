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
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "../styles.css"

export class GameDetails extends React.Component {

    state = { game: void 0 }

    loadCharacterDetails = (gameID) => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games/${gameID}?fields=name,cover.*,artworks.*,age_ratings.*,created_at,game_engines.*,platforms.*,screenshots.*,genres.*,summary,aggregated_rating&&expand=cover,artworks,genres,screenshots,platforms,game_engines,age_ratings`, {headers: {
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

        if(!game) {
          return <div className={styles.loading}> <CircularProgress /> </div>
        }

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12} justify="center">
                    <Card className={styles.detailcard}>
                        <CardMedia
                            className={styles.detailedcover}
                            image={"https://images.igdb.com/igdb/image/upload/t_screenshot_huge/" + game.screenshots[0].image_id  + ".jpg"}
                            title="Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {game.name}
                            </Typography>
                            <Typography>
                                Origin: {game.summary}
                            </Typography>

                            <hr/>

                            <Table className={''}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">genre</TableCell>
                                        <TableCell align="right">{game.genres[0].name}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Release</TableCell>
                                        <TableCell align="right">{game.created_at}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Rating</TableCell>
                                        <TableCell align="right">{game.aggregated_rating}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
