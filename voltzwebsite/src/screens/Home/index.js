// import images from "./image.js";
// import ImageSlider from "../../Components/ImageSlider";
import "./style.css";
import images from "./images";
import ImageSlider from "./imageSlider.js";
import PhoneImg from "./imageshome/phonev.png";

const Home = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row hero-row  ">
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 ">
            <div className="left-hero-content">
              <div className="left-hero-para">Voltz Smart Panel...</div>
              <div className="left-hero-title ">
                Created to make <br /> life much Easier
              </div>
              <div className="left-hero-para2 mt-3">
                Smart Control is helping the users to achieve <br />
                the best and comfortable atmosphere for their <br /> home.
              </div>

              <div className="left-hero-auth  mt-5">
                <div className="email-auth rounded-3 py-2 px-3 shadow-lg bg-white d-flex align-items-center justify-content-between">
                  <input placeholder="Enter your Email"></input>
                  <div className="try-btn text-white shadow-sm rounded-3 px-4 py-2">
                    Try Now
                  </div>
                </div>
                <div className="email-auth2">
                  <div className="googlebtn"></div>
                  <div className="applebtn"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5  ">
            <div className="right-hero-content mt-1 rounded-3 h-100 w-100">
            <ImageSlider images={images}/>
            </div>
          </div>
        </div>
      </div>

      <div className="second-content">
        <div className="phone-container mt-5">
          <div className="d-flex align-items-center justify-content-center"> <img  src={ PhoneImg }alt="App Store" /></div>
          <div className="temperature bg-white rounded-4 px-3 py-2 shadow-lg d-flex">
            <div className="temperature-icon px-3  d-flex align-items-center justify-content-center rounded-3 mx-2"><i class="fa-solid fa-temperature-full"></i></div>
            <div>Temperature <br/> control</div>
          </div>
          <div className="alarm bg-white shadow-lg  d-flex">
            <div className="alarm-icon"><i class="fa-solid fa-house-user"></i></div>
            <div>Alarm <br/> system</div>
          </div>
          <div className="spotlight bg-white shadow-lg  d-flex">
            <div className="spotlight-icon"><i class="fa-sharp fa-solid fa-lightbulb"></i></div>
            <div>Smart <br/> spotlights</div>
          </div>
          <div className="detector bg-white shadow-lg rounded-4  d-flex">
            <div className="detector-icon"><i class="fa-solid fa-fire"></i></div>
            <div>Smoke <br/> detector</div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
