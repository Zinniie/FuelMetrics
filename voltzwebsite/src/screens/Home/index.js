// import images from "./image.js";
// import ImageSlider from "../../Components/ImageSlider";
import "./style.css";
import images from "./images";
import ImageSlider from "./imageSlider.js";
import PhoneImg from "../../assets/images/centerphone.png";
import LeftImg from "../../assets/images/leftpicture.png";
import RightImg from "../../assets/images/rightpicture.png";
import CenterImg from "../../assets/images/footerphonee.png";
import Man1 from "../../assets/images/man2.jpg";
import Man2 from "../../assets/images/man6.jpg";
import Woman1 from "../../assets/images/woman.jpg";
import Woman2 from "../../assets/images/woman2.jpg";
import Gadgets from "../../assets/images/gadgets.png";
import text from "./text";
import TextSlider from "./TextSlider.js";
// import ScrollText from 'react-scroll-text';

const Home = () => {
  return (
    <div >
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

          <div className=" col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <div className="right-hero-content mt-1 rounded-3 ">
            <ImageSlider images={images}/>
            </div>
          </div>
        </div>
      </div>

      <div className="second-content">
        <div className="phone-container">
          <div className="d-flex align-items-center justify-content-center"> <img className="middlephone" src={ PhoneImg }alt="App Store" /></div>
          <div className="temperature bg-white rounded-4 px-3 py-3 shadow-lg d-flex">
            <div className="temperature-icon px-3  d-flex align-items-center justify-content-center rounded-4 mx-2"><i class="fa-solid fa-temperature-full text-white fs-3"></i></div>
            <div>Temperature <br/> control</div>
          </div>
          <div className="alarm bg-white rounded-4 px-3 py-3  shadow-lg d-flex">
            <div className="alarm-icon px-3  d-flex align-items-center justify-content-center rounded-4 mx-2"><i class="fa-solid fa-house-user text-white fs-3"></i></div>
            <div className="mx-2">Alarm <br/> system</div>
          </div>
          <div className="spotlight bg-white rounded-4 px-3 py-3 shadow-lg d-flex">
            <div className="spotlight-icon px-3  d-flex align-items-center justify-content-center rounded-4 mx-2"><i class="fa-sharp fa-solid fa-lightbulb text-white fs-3"></i></div>
            <div>Smart <br/> spotlights</div>
          </div>
          <div className="detector bg-white shadow-lg rounded-4 px-3 py-3 shadow-lg  d-flex">
            <div className="detector-icon px-3  d-flex align-items-center justify-content-center rounded-4 mx-2"><i class="fa-solid fa-fire text-white fs-3"></i></div>
            <div>Smoke <br/> detector</div>
          </div>
          {/* <div className="scrolley"><marquee> Easy Controling</marquee></div> */}
           
          
         </div>
         
      </div>

      <div className="container features-content ">
        <div className="feature-container d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex feat">
            <div className="mx-1 dash-icon"><ion-icon name="remove"></ion-icon></div>
             <div className="feature"> Our features</div>
          </div>
         
          <div className="enhance-feature text-center">Enhance Your Space <br/>
with The Amazing <br/> Features</div>
        </div>

          <div className="row feature-row mt-4">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="feature-container-detailed ">
          <div className="feature-img-container bg-black">
            <div className="feature-img d-flex align-items-center justify-content-center"> <img className="leftphone mt-3" src={ LeftImg }alt="App Store" /></div>
          </div>
          
          <div className="feature-text mt-3">01</div>
          <div className="feature-text2 mt-3">Monthly summary and <br/>
statistics right on <br/> your fingertips</div>
          <div className="feature-text3 mt-3">Voltz helps you to understand your monthly <br/>
summary, spending, and usage better. <br/>Download now to get started</div>
        </div>
            </div>
            
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
              <div className="feature-container-detailed ">
          <div className="feature-img-container2 ">
            <div className="feature-img d-flex align-items-center justify-content-center"> <img className="leftphone mt-3" src={ CenterImg }alt="App Store" /></div>
          </div>
          <div className="feature-textt mt-3">02</div>
          <div className="feature-textt2 mt-3">Fully control your<br/>
home by rooms or by<br/> the devices</div>
          <div className="feature-text3 mt-3">Voltz gives you detailed information of any<br/>
devices in any room you have. You also have <br/> a full control of them.</div>
        </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
              <div className="feature-container-detailed ">
          <div className="feature-img-container bg-black">
            <div className="feature-img d-flex align-items-center justify-content-center"> <img className="leftphone mt-3" src={ RightImg }alt="App Store" /></div>
          </div>
          <div className="feature-text mt-3">03</div>
          <div className="feature-text2 mt-3">Automate everything<br/>
and let us get all things<br/>ready for you</div>
          <div className="feature-text3 mt-3">Voltz newest feature, we help you to create <br/>an automton to autom your work, we <br/>
Will get anthing ready for you</div>
        </div>
            </div>
          </div> 
      </div>

      <div className="container about-content mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <div className="about-text-container">
            <div className="about-text">
              {/* <div className="about-text-icon">icon</div> */}
              <div className="about-text-text text-center"> Voltz</div>
            </div>
            <div className="about-text-main text-center">The Best Smart Home App You Can Get</div>
          </div>
          {/* <div className="about-text-container3">With Voltz,</div> */}
        </div>
        <div className="download-container text-center mt-3">
          Control Your Home Electricity More Efficiently From Your Mobile Device
        </div>
        <div className="text-center mt-3">A single experience that supports your whole home</div>
       
        {/* <div className="download-icons">
          <img className="gadgets mt-3" src={ Gadgets }alt="App Store" />
        </div> */}
         <div className="download-text text-center mt-3">
          You will get the latest experience like you've never felt before
        </div>
      </div>

      

      {/* <div className="testimonial-content mt-5 border border-danger ">
        
        {/* <div className=" mt-1 py-5"><TextSlider text={text}/></div>  */}
      
      {/* </div> */} 

      <div className="container-fluid ">
        
          <div className="row d-flex align-items-center justify-content-center">
            {/* <div className="testimonial-heading pt-3"> */}
          
        {/* </div> */}
            <div className="col-first col-sm-10 col-md-5 col-lg-4 col-xl-3 ">
              <div className="testimonial-heading">
                <div className="testimonial-heading-text d-flex "><i class="fa-solid fa-quote-left"></i>Real Stories from <br/> Real customers</div>
          <div className="testimonial-heading-text2">Get inspired by our client stories</div>
              </div>
                <div className="w-100 h1 bg-white shadow-lg p-5">
                  <div className="review-text d-flex">
                    <i class="fa-solid fa-quote-left"></i>
                    <div className="reviews-text1">We found Voltz <br/> through audiophile channels <br/> but have found so many <br/> other uses. We've turned <br/>
                    hedge fund managers on to some of the tools. We've sent our staff acoustian the 'white noise' files which he seemingly uses</div>
                  </div>
                
                <div className="review-text d-flex mt-5">
                  <div className="reviewimg"><img className="reviewimage" src={ Man1 }alt="App Store" /></div>
                  <div className="review-text-rev">
                    <div>Jerry Colliano</div>
                    <div>Home Theater Review</div>
                  </div>
                </div>
                </div>

                
            </div>
             <div className="col-sm-10 col-md-5 col-lg-4 col-xl-4 mt-3">
              <div className="row ">
                <div className="mt-5 col-sm-12 col-md-11 col-lg-11 ">
<div className="w-100 bg-white shadow-lg ht p-5">
   <div className="review-text d-flex">
                    <i class="fa-solid fa-quote-left"></i>
                    <div className="reviews-text1">We found Voltz when we were searching for a way to gather unbiased review data when publishing our articles.</div>
                  </div>
                  <div className="review-text d-flex mt-5">
                  <div className="reviewimg"><img className="reviewimage" src={ Woman1 }alt="App Store" /></div>
                  <div className="review-text-rev">
                    <div>Jerry Colliano</div>
                    <div>Home Theater Review</div>
                  </div>
                </div>

                </div>
                </div>
                 <div className=" mt-5 col-sm-12 col-md-10 col-lg-10 ">
<div className="w-100 bg-white shadow-lg p-5 ht">
  <div className="review-text d-flex">
                    <i class="fa-solid fa-quote-left"></i>
                    <div className="reviews-text1">We found Voltz when we were searching for a way to gather unbiased review data when publishing our articles.</div>
                  </div>

                    <div className="review-text d-flex mt-5">
                  <div className="reviewimg"><img className="reviewimage" src={ Man2 }alt="App Store" /></div>
                  <div className="review-text-rev">
                    <div>Jerry Colliano</div>
                    <div>Home Theater Review</div>
                  </div>
                </div>

                </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* <div className="container testimonial2">
        
        <div className="">
          <div className="testimonial-text">
            <div className="testimonial-text"><span>"</span>we foundfhnidf</div>
            <div className="testimonial-text2 d-flex">
              <div>img</div>
              <div >
                <div className="testimonial-text3">Jeffrey Harp</div>
                <div className="testimonial-text3">CEO, HomeMe</div>
              </div>
              </div>  
           </div>

           <div>
            <div className="testimonial-text">
            <div className="testimonial-text"><span>"</span>we foundfhnidf</div>
            <div className="testimonial-text2 d-flex">
              <div>img</div>
              <div >
                <div className="testimonial-text3">Jeffrey Harp</div>
                <div className="testimonial-text3">CEO, HomeMe</div>
              </div>
              </div>  
           </div>

           <div className="testimonial-text">
            <div className="testimonial-text"><span>"</span>we foundfhnidf</div>
            <div className="testimonial-text2 d-flex">
              <div>img</div>
              <div >
                <div className="testimonial-text3">Jeffrey Harp</div>
                <div className="testimonial-text3">CEO, HomeMe</div>
              </div>
              </div>  
           </div>
           </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
