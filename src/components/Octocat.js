import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <section className="image-card">
        <div className="octocat-img">
          <img
            className="octocat"
            src={this.props.imageUrl}
            alt={this.props.imageAlt}
          />
        </div>
        <div className="octocat-info">
          <h2 className="image-title">{this.props.imgTitle}</h2>
          <q className="image-number">{this.props.imgNumber}</q>
        </div>
      </section>
    )
  }
}

export default Octocat
