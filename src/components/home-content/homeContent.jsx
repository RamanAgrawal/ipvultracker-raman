import react from "react";
import "./homeContent.css";
import img1 from '../../img/rd.svg';
import img2 from '../../img/webby.svg';
import img3 from '../../img/pmi.svg';
import img4 from '../../img/wf.svg';
import img5 from '../../img/adweek.svg';
import img6 from '../../img/forbes.svg';
import Video from "../../img/video.mp4";

import imgpg4 from '../../img/page4.jpg';
import imgpg42 from '../../img/pg42.jpg';
import imgpg43 from '../../img/pg43.jpg';

import img441 from '../../img/pg441.jpg';
import img442 from '../../img/pg442.jpg';
import img443 from '../../img/pg443.jpg';
import img444 from '../../img/pg444.jpg';
import img445 from '../../img/pg445.jpg';

import imgpg4bg1 from '../../img/pg4bg1.jpg';
import imgpg4bg2 from '../../img/pg4bg2.jpg';


const HomeContent = () => {
  return (
    <>


      <div className="main">
        <div id="page1">
          <h1>IP VULNERABILTY</h1>
          <h1>TRACKER</h1>
          <p>
            {" "}
            IP analyzer Lorem iillo sdf sdf sdf sdf sdfsaepe labore?
            <br></br>
            INFORMATION ASSETS
          </p>
          <div id="page1-bubble">
            <h4> Information </h4>
            <h4> Data </h4>
            <h4> Vulnerablity </h4>
          </div>


          <div id="moving-div">
            <div id="blur-left"></div>

            <div className="move">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>

            <div className="move">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <div id="blur-right"></div>
          </div>
        </div>

        <div id="page2">
        <div id= "linear-gradient">
        <h1>HI <span>THIS IS </span> 
          <br />MY WEBPAGE</h1>
        </div>
        </div>



        <div id="page3">
        <div id="pattern"></div>

       <div id="video-box">
          <div id="video-container">
              <video autostart autoPlay loop muted src={Video} type="video/mp4"/>
            </div>

            <div id="text-box">
                <h2>MARTIN GARRIX LIVE @ IDEM (Amsterdam RAI 2023)</h2>
                <p>Thanks to everybody for partying and the amazing energy at the 2 shows in my hometown last year, love you guys a lot!!</p>
              </div>
       </div>
    
        {/* 
            <div class="page3-center">
                <div className="icon">
                    <img src={play} alt="" />
                </div>
                <h5>Watch Showrfddevel</h5>
            </div> */}

        </div>




        <div id="page4">
        <img className="imgpg4bg1" src={imgpg4bg1} alt="" />
        <img className="imgpg4bg2" src={imgpg4bg2} alt="" />
        <div id= "images">
            <img className="img2"  src={imgpg42} alt="" />
            <img className="img1"  src={imgpg4}  alt="" />
            <img className="img3"  src={imgpg43} alt="" />
            <img className="img41" src={img441} alt="" />
            <img className="img42" src={img442} alt="" />
            <img className="img43" src={img443} alt="" />
            <img className="img44" src={img444} alt="" />
            <img className="img45" src={img445} alt="" />
          </div>
          
        <div id="captions">
            <div id="card1">
                <h1>Akshat Negi</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum quisquam accusamus dignissimos laboriosam culpa voluptatibus corrupti magnam iusto delectus non suscipit exercitationem cumque tempore quasi ea alias asperiores optio.</p>
            </div>

            <div id="card2">
                <h2>HI BOYS</h2>
                <p2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum quisquam accusamus dignissimos laboriosam culpa voluptatibus corrupti magnam iusto delectus non suscipit exercitationem cumque tempore quasi ea alias asperiores optio.</p2>
            </div>

            <div id="card3">
                <h2>At Visual Identity,<span>we're not just another</span> Program</h2>
            </div>

            </div>
          
        </div>




        <div id="page5">

        </div>
      </div>
    </>
  );
};

export default HomeContent;
