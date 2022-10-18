import "./style.css";
import PhoneImg2 from "../../assets/images/footerphonee.png";
import google from "../../assets/images/google_play_store.png";
import apple from "../../assets/images/App_store.png";

const Footer = () => {
    return ( 
        <div>
            
            <div class="footer">
              <div className="container-fluid top-footer-content ">
                  <div className="foot d-flex align-items-center justify-content-between">
                    {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> */}
                      <div className="d-flex align-items-center justify-content-center "><img className="footer-img" src={ PhoneImg2 }alt="download" /></div>
                    
                    {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> */}
                      <div className="top-footer-text">
                        <div className="top-footer-text1">Manage your smart <br/>device from your <br/>mobile</div>
                        <div className="top-footer-text2 mt-3">Download the app to manage your projects, keep track of the <br/>
                         progress and complete tasks without procastinating.</div>
                         <div className="mt-4 get">Get the App</div>
                         <div className="auth-store mt-2 d-flex">
                          <div><img class="googlebtn " src={ google} alt="App Store"/></div>
                          <div><img class="googlebtn " src={ apple} alt="App Store"/></div>
                         </div>
                      </div>
                    
                  </div>
              </div>

              <div className="container-fluid ">
                 <div class="row pt-5">
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="f rounded-1 card-info_cover">
                      <div class="py-4">
                        <div class="d-flex">
                        <div>logo</div>
                        <div className="footer-brand fs-1">Voltz</div>
                        </div>            
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="footer-categories  rounded-1 card-info_cover ">
                      <div class="">
                        <h4 className="">Resources</h4>
                        
                        <p className="mt-3">Tutorial</p>
                        <p>Learn</p>
                        <p>Help & Support</p>
                        <p>Blog</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="footer-categories border border-success rounded-1 card-info_cover ">
                      <div class="">
                        <h4>Company</h4>
                        <p className="mt-3">About</p>
                        <p>Careers</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                      </div>
                    </div>
    
                  </div>
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="footer-categories  rounded-1 card-info_cover d-flex align-items justify-content-center">
                      <div>
                        <div>Subscribe to News</div>
                        <div class="subscribe-auth d-flex p-3 shadow-lg mt-3 rounded-3">
                            <input placeholder="Your e-mail"></input>
                            <div><i class="fa-solid fa-arrow-right"></i></div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-5">
                            <div><i class="fa-brands fa-square-instagram"></i></div>
                            <div><i class="fa-brands fa-linkedin"></i></div>
                            <div><i class="fa-brands fa-twitter"></i></div>
                            <div><i class="fa-brands fa-square-facebook"></i></div>
                            <div><i class="fa-brands fa-tiktok"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                 

              </div>
        </div>
     );
}
 
export default Footer;