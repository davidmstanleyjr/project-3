import React from "react";
import Axios from "axios";
//manga row stuff
class MangaRow extends React.Component {
  saveManga = e => {
    e.preventDefault();
    Axios.post("/api/manga/savemanga", {
      title: this.props.manga.title,
      chapters: this.props.manga.chapters,
      volumes: this.props.manga.volumes,
      score: this.props.manga.score,
      start_date: this.props.manga.start_date,
      end_date: this.props.manga.end_date,
      firebaseUID: this.props.firebaseUID,
      mal_id: this.props.manga.mal_id
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  navigateMAL = event => {
    window.open(this.props.manga.url);
  };
  render() {
    return (
      <section className="mangaBody" key={this.props.manga.mal_id}>
        <figure>
          <img
            className="mangaPoster"
            src={this.props.manga.image_url}
            alt="manga Image"
            title="manga Image"
          />
        </figure>
        <article className="mangaContent">
          <header>
            <p className="heading">{this.props.manga.title}</p>
          </header>
          <p className="subHeading">Synopsis</p>
          <p className="mangaSynopsis">{this.props.manga.synopsis}</p>
          <table className="dataTable">
            <thead>
              <tr>
                <th>Type</th>
                <th>Chapters</th>
                <th>Volumes</th>
                <th>Score</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.manga.type}</td>
                <td>
                  {this.props.manga.chapters
                    ? this.props.manga.chapters
                    : "None"}
                </td>
                <td>
                  {this.props.manga.volumes ? this.props.manga.volumes : "None"}
                </td>
                <td>
                  {this.props.manga.score ? this.props.manga.score : "None"}
                </td>
                <td>
                  {this.props.manga.start_date
                    ? this.props.manga.start_date.slice(0, 10)
                    : "None"}
                </td>
                <td>
                  {this.props.manga.end_date
                    ? this.props.manga.end_date.slice(0, 10)
                    : "None"}
                </td>
              </tr>
            </tbody>
          </table>
          <section className="buttonContainer">
            <button className="malButton" onClick={this.navigateMAL}>
              MyAnimeList
            </button>
            <button className="malButton" onClick={e => this.saveManga(e)}>
              Save Manga
            </button>
          </section>
        </article>
      </section>
    );
  }
}

export default MangaRow;
