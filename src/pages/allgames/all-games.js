import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import ReactPaginate from 'react-paginate';

import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GameCard } from "./game-card"
import style from "./all-games.css"

export class AllGames extends React.Component {

    state = {
      games: void 0,
    }

    loadGames = (offset) => {
      axios
          .get(`https://cors-anywhere.herokuapp.com/http://api-v3.igdb.com/games/?fields=name,cover.*,genres.*,platforms,popularity,summary,aggregated_rating&limit=15&offset=${offset}&&expand=cover,genres&order=popularity:desc`, {headers: {
            "user-key": "bf64f9cdc5dcd51330d432e658773047"
          }})
          .then(response => {
            console.log('Axios returned', response.data)
            this.setState({
              games: response.data
            })
          });
    }

    componentDidMount() {
      if (this.props.match.params) {
          this.loadGames((this.props.match.params.page-1) * 15);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.page != this.props.match.params.page) {
          this.loadGames((nextProps.match.params.page-1) * 15);
      }
    }

    toPage = (selected) => {
      this.props.history.push(`/all/${selected+1}`)
    }

    buildDetailsClickHandler = (game) => () => {
       this.props.history.push(`/game/${game.id}`)
     }

     handlePageClick = data => {
       let selected = data.selected
       this.toPage(selected);
     }


    render() {

        const { games } = this.state

        if(!games) {
          return <div className={style.loading}> <CircularProgress /> </div>
        }

        return (
          <div>
            <GridList cellHeight={180} className={style.gridList} cellSpacing>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">All Games</ListSubheader>
              </GridListTile>

              {this.state.games.map(game =>
                <GameCard
                  key={game.name}
                  game={game}
                  handleDetailsClick={this.buildDetailsClickHandler(game)}
                  />
              )}

            </GridList>
            <div className={style.paging}>
              <ReactPaginate
                previousLabel={'previous'}
                pageRangeDisplayed = {10}
                nextLabel={'next'}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={style.active}
                pageLinkClassName={style.page}
              />
            </div>
          </div>
        )
    }
}
