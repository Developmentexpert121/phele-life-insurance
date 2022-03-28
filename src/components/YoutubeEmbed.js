import React from "react";
import PropTypes from "prop-types";
const YoutubeEmbed = () =>{
    return(
        <div className="video-responsive">
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/F4esRkg1078`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    )
}


export default YoutubeEmbed;