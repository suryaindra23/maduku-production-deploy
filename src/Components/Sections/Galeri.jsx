import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"

// Image Gallery
import Pictone from "../../Assets/img/Peternakan (3).jpg"
import Pictotwo from "../../Assets/img/Peternakan (4).jpg"
import Pictthree from "../../Assets/img/Peternakan (13).jpg"
import Pictfour from "../../Assets/img/Peternakan (25).jpg"
import Pictfive from "../../Assets/img/Peternakan (26).jpg"
import Pictsix from "../../Assets/img/Peternakan (27).jpg"
import Pictseven from "../../Assets/img/Peternakan (40).jpg"

export default function Galeri() {
  const images = [
    {
      original: Pictone,
      thumbnail: Pictone,
      description: "Peternakan",
    },
    {
      original: Pictotwo,
      thumbnail: Pictotwo,
      description: "Peternakan",
    },
    {
      original: Pictthree,
      thumbnail: Pictthree,
      description: "Peternakan",
    },
    {
      original: Pictfour,
      thumbnail: Pictfour,
      description: "Peternakan",
    },
    {
      original: Pictfive,
      thumbnail: Pictfive,
      description: "Peternakan",
    },
    {
      original: Pictsix,
      thumbnail: Pictsix,
      description: "Peternakan",
    },
    {
      original: Pictseven,
      thumbnail: Pictseven,
      description: "Peternakan",
    },
  ]

  return (
    <div className="galeri-app">
      <div className="title">
        <h1>
          <span>Galeri</span>
        </h1>
      </div>
      <div className="container">
        <ImageGallery
          items={images}
          lazyLoad={true}
          useTranslate3D={false}
          showPlayButton={false}
          showBullets={true}
        />
      </div>
    </div>
  )
}
