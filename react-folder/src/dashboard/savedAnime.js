import React, { Component } from "react";
import AnimeRow from "../anime/AnimeRow";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class savedAnime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: []
    };
  }

  componentDidMount() {
    this.getSavedAnime();
  }

  getSavedAnime = () => {
    Axios.get(`/api/anime/myanime/${this.props.user}`)
      .then(res => {
        this.setState({
          anime: res.data
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        {this.state.anime &&
          this.state.anime.map((a, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">score: {a.score}</p>
                <p>
                  aired: {a.start_date} - {a.end_date}
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(savedAnime);
