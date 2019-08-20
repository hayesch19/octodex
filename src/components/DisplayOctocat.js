import React, { Component } from 'react'
import Octocat from './Octocat'

import octocat1 from '../images/octocat1.png'
import octocat2 from '../images/octocat2.png'
import octocat3 from '../images/octocat3.png'
import octocat4 from '../images/octocat4.jpg'
import octocat5 from '../images/octocat5.jpg'
import octocat6 from '../images/octocat6.jpg'

const octocats = [
  {
    imgTitle: 'Fintechtocat',
    imgNumber: '148',
    imageUrl: octocat1,
    imageAlt: 'octocat1'
  },
  {
    imgTitle: 'Brennatocat',
    imgNumber: '147',
    imageUrl: octocat2,
    imageAlt: 'octocat2'
  },
  {
    imgTitle: 'Filmtocats',
    imgNumber: '146',
    imageUrl: octocat3,
    imageAlt: 'octocat3'
  },
  {
    imgTitle: 'Sentrytocat',
    imgNumber: '145',
    imageUrl: octocat4,
    imageAlt: 'octocat4'
  },
  {
    imgTitle: 'Umbrellatocat',
    imgNumber: '144',
    imageUrl: octocat5,
    imageAlt: 'octocat5'
  },
  {
    imgTitle: 'Boxertocat',
    imgNumber: '143',
    imageUrl: octocat6,
    imageAlt: 'octocat6'
  }
]

class DisplayOctocat extends Component {
  render() {
    return (
      <div className="img-container">
        {octocats.map(octocats => {
          return (
            <Octocat
              imgTitle={octocats.imgTitle}
              imgNumber={octocats.imgNumber}
              imageAlt={octocats.imageAlt}
              imageUrl={octocats.imageUrl}
            />
          )
        })}
      </div>
    )
  }
}

export default DisplayOctocat
