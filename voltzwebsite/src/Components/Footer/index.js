import "./style.css";

const Footer = () => {
    return ( 
        <div>
            
            <div class="container footer">
                  <div class="row pt-5">
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                    <div class=" rounded-1 card-info_cover">
                      <div class="py-4">
                        <div class="d-flex">
                        <div>logo</div>
                        <div>S-HOME</div>
                        </div>            
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="rounded-1 card-info_cover d-flex align-items justify-content-center ">
                      <div class="mx-5">
                        <h4>Resources</h4>
                        
                        <p>Tutorial</p>
                        <p>Learn</p>
                        <p>Help & Support</p>
                        <p>Blog</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class=" rounded-1 card-info_cover d-flex align-items justify-content-center">
                      <div class="mx-5">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                      </div>
                    </div>
    
                  </div>
                  <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class=" rounded-1 card-info_cover d-flex align-items justify-content-center">
                      <div>
                        <div>Subscribe to News</div>
                        <div class="subscribe-auth d-flex p-3 shadow-sm">
                            <input placeholder="Your e-mail"></input>
                            <div>icon</div>
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
     );
}
 
export default Footer;