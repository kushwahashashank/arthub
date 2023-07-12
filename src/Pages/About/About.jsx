import React from "react";
import "./About.css";
function About() {
  document.title = "About";

  return (
    <>
      <div className="about">
        <div className="about_image">
          <img src={require("../../Asset/Images/photo.png")} alt="" />
        </div>
        <div className="describe">
          <p className="des_intro">
            Author Name (b.2001) is a self-taught artist living and working in
            Lucknow, Uttar Pradesh, India.
          </p>
          <p className="des_describe">
            Author's large-scale graphite drawings take as subject emotions and
            its metaphors, and consider the complexities of identity. Common to
            all his work is the empty darkness that surrounds his figures, who
            stand alone against the black. Author's drawings are at once
            hyperreal and surreal – his highly-detailed scenes described in
            pencil with photographic precision.
            <br></br> &nbsp;&nbsp;&nbsp;&nbsp; In composition, Author is largely
            influenced by mythology and returns often to the images of
            archetypes to evoke a momentary recognition in the viewer, a sense
            of passing familiarity. The recurring motifs of animal horns,
            ikebana flower arrangements, fabric, and hot air balloons lend to
            the artist’s work an obscure symbolism. There is to his drawings a
            confusion of fact and fiction, the real and unreal, each image
            appearing as a dark dream.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
