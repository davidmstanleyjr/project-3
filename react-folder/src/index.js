import React, { Component } from 'react';
import { render } from 'react-dom';
import './assets/style/style.scss';
import AnimeRow from './AnimeRow.js';
import MangaRow from './MangaRow.js';


//searchbar stuff
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      picked: 0,
      value: 0,
      disabled: false,
      manga: false,
      anime: true,
      rows: [
        <h2 className="heading" key="1">
          Use the Searchbar above to find Anime/Manga
        </h2>
      ]
    };
  }

  performSearch = () => {
    console.log("starting search")
    const query = this._urlQuery();
    this._executeQuery(query);
  }
  _handleChange = (event) => {
    this.setState({ searchString: event.target.value });
    console.log(this.state.searchString)
  }
  _submitPressed = (event) => {
    if (event.key === 'Enter')
    {
      this.performSearch();
    }
  }

  //onclick events
  _onAnimeButtonPressed = () => {
    this.setState({
      value: 0,
      anime: true,
      manga: false,
    })
  }
  _onMangaButtonPressed = () => {
    this.setState({
      value: 1,
      anime: false,
      manga: true,
    })
  }

  //url stuff
  _urlQuery = () => {
    const params = {
      q: this.state.searchString,
      limit: 50,
      //type: this.state.picked
    };
    var key;
    key = params[key];
    var options = ["anime", "manga"]
    var selectedOption = options[this.state.value]

    const querystring = Object.keys(params)
      .map(key => key + '=' + encodeURIComponent(params[key]))
      .join('&');
    switch (this.state.value)
    {
      case 0:
      case 1:
        return `https://api.jikan.moe/v3/search/${ selectedOption }?` + querystring;
        break;
    }
  }
  _executeQuery = (query) => {
    this.setState(
      {
        disabled: true,
      });
    switch (this.state.value)
    {
      case 0:
        fetch(query)
          .then(response => response.json())
          .then(responseJson => {
            const results = responseJson.results
            var animeRows = []

            results.forEach((animeResult) => {
              console.log(animeResult.title)
              const anime = <AnimeRow anime={animeResult} key={animeResult.mal_id} />
              animeRows.push(anime)
            })

            this.setState({
              disabled: false,
              rows: animeRows
            });
          })
          .catch(error => {
            console.error(error);
          });
        break;
      case 1:
        fetch(query)
          .then(response => response.json())
          .then(responseJson => {
            const mangaResults = responseJson.results
            var mangaRows = []

            mangaResults.forEach((mangaResult) => {
              console.log(mangaResult.title)
              const manga = <MangaRow manga={mangaResult} key={mangaResult.mal_id} />
              mangaRows.push(manga)
            })

            this.setState({
              disabled: false,
              rows: mangaRows,
            });
          })
          .catch(error => {
            console.error(error);
          });
        break;
    }
  }


  //buttons
  render() {
    let abtn_class = this.state.anime ? "button-selected" : "medium-button";
    let mbtn_class = this.state.manga ? "button-selected" : "medium-button";
    return (
      <main className="mainContent">
        <nav className="navBar">
          <ul className="navList">
            <img className="logo" src="https://files.slack.com/files-pri/TL5B79PS6-FSGHWP2BA/sushi_roll.png" width="50" />
            <li className="navTitle">SushiRoll</li>
            <li className="navItem"><button className={abtn_class} onClick={this._onAnimeButtonPressed} disabled={this.state.anime}>Anime</button></li>
            <li className="navItem"><button className={mbtn_class} onClick={this._onMangaButtonPressed} disabled={this.state.manga}>Manga</button></li>
          </ul>
        </nav>
        <section className="searchBar">
          <input
            className="inputBar"
            style={{ paddingTop: 8, paddingLeft: "2%", paddingBottom: 8 }}
            disabled={this.state.disabled}
            value={this.state.searchString}
            onChange={this._handleChange}
            onKeyPress={this._submitPressed}
          />
          <button className="searchButton" disabled={this.state.disabled} onClick={this.performSearch}>
            <img src="https://image.flaticon.com/icons/svg/25/25313.svg" className="imageButton" />
          </button>
        </section>
        <div className="contentRow">
          {this.state.rows}
        </div>
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
