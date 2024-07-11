import React from "react";
import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup/Popup";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div classNameName="App">
      <section className="modal-section">
        <div className="container">
          <div
            className="modal fade modal-xl"
            id="loginModal"
            tabindex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="content p-5">
                  <span>
                    <i
                      className="fa-solid fa-xmark modal-close"
                      data-bs-dismiss="modal"
                    ></i>
                  </span>
                  <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                      <div className="col d-none d-lg-block col-lg-5">
                        <img
                          src="./images/login-img.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col col-lg-7">
                        <div className="row justify-content-center">
                          <div className="col-md-8">
                            <div className="mb-3">
                              <h3 className="text-primary">Login</h3>
                            </div>
                            <form action="#" method="post">
                              <div className="form-group first">
                                <label className="mb-1" for="username">
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  id="username"
                                />
                              </div>
                              <div className="form-group last mb-4">
                                <label className="mb-1" for="password">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                />
                              </div>
                              <div className="row row-cols-1 row-cols-xl-2 mb-2 align-items-center">
                                <div className="col">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="remember-me"
                                    checked
                                  />
                                  <label
                                    className="form-check-label me-5 pointer"
                                    for="remember-me"
                                  >
                                    Remember Me
                                  </label>
                                </div>

                                <span className="ml-auto col">
                                  <a
                                    href="#"
                                    className="forgot-pass text-decoration-none"
                                  >
                                    Forgot Password ?
                                  </a>
                                </span>
                              </div>
                              <input
                                type="submit"
                                value="Login"
                                className="btn btn-block btn-primary ps-5 pe-5 mt-3"
                              />
                              <span className="d-block text-center my-4 text-muted">
                                &mdash;&mdash; or login with &mdash;&mdash;
                              </span>
                              <div className="social-login row justify-content-center gap-2">
                                <a href="#" className="facebook">
                                  <span className="fa-brands fa-facebook-f mr-3"></span>
                                </a>
                                <a href="#" className="twitter">
                                  <span className="fa-brands fa-twitter mr-3"></span>
                                </a>
                                <a href="#" className="google">
                                  <span className="fa-brands fa-google mr-3"></span>
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-modal-section">
        <div className="container">
          <div
            className="modal fade modal-xl"
            id="signupModal"
            tabindex="-1"
            aria-labelledby="signupModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content modal-dialog-scrollable rounded-4 p-3 p-md-4 p-lg-5">
                <span>
                  <i
                    className="fa-solid fa-xmark modal-close"
                    data-bs-dismiss="modal"
                  ></i>
                </span>
                <div className="row">
                  <h2 className="text-primary mb-3">Publisher Sign up Form</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate vero accusantium earum consequuntur
                    fugit sunt iste hic molestiae, natus quis impedit libero
                    iusto ut! Architecto corrupti quibusdam impedit. Natus,
                    accusamus culpa eos libero sapiente id obcaecati ratione,
                    animi quae deserunt doloremque assumenda excepturi ducimus
                    aliquid voluptate aut, unde est.
                  </p>
                  <p className="fw-bold">
                    This star field mean this field is required (
                    <span className="req">*</span>)
                  </p>
                </div>
                <div className="row ps-0">
                  <h4 className="text-primary mt-3 mb-3">
                    Personal Information:
                  </h4>
                </div>
                <form action="#" method="post" className="row g-3">
                  <div className="col-md-4">
                    <label for="firstName" className="form-label">
                      First Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="lastName" className="form-label">
                      Last Name <span className="req">*</span>
                    </label>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                  <div className="col-md-4">
                    <label for="company" className="form-label">
                      Company Name
                    </label>
                    <input type="text" className="form-control" id="company" />
                  </div>
                  <div className="col-md-6">
                    <label for="emailAdd" className="form-label">
                      Email Adress <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAdd"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="confEmal" className="form-label">
                      Confirm Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="confEmal"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="reg-password" className="form-label">
                      Password <span className="req">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="reg-password"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="confPass" className="form-label">
                      Confirm Password <span className="req">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confPass"
                    />
                  </div>
                  <div className="row">
                    <h4 className="text-primary mt-5">Address:</h4>
                  </div>
                  <div className="col-md-6">
                    <label for="inputAddress" className="form-label">
                      Address <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputAddress2" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputCity" className="form-label">
                      City <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="state" className="form-label">
                      State / Province <span className="req">*</span>
                    </label>
                    <input type="text" className="form-control" id="state" />
                  </div>
                  <div className="col-md-4">
                    <label for="zip" className="form-label">
                      ZIP / Postal Code <span className="req">*</span>
                    </label>
                    <input type="text" className="form-control" id="zip" />
                  </div>
                  <div className="col-md-4">
                    <label for="inputCountry" className="form-label">
                      Country <span className="req">*</span>
                    </label>
                    <select id="inputCountry" className="form-select">
                      <option selected>Select Country</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia-Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BR">Brazil</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="TP">East Timor</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="FP">French Polynesia</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GP">Guadeloupe (French)</option>
                      <option value="GT">Guatemala</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macau</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique (French)</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="MD">Moldavia</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia (French)</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="KP">North Korea</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion (French)</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SK">Slovak Republic</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="KR">South Korea</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="VI">US Virgin Islands</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City State</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis and Futuna Islands</option>
                      <option value="YE">Yemen</option>
                      <option value="YU">Yugoslavia</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label for="inputZip" className="form-label">
                      Zip <span className="req">*</span>
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-md-4">
                    <label for="inputNum" className="form-label">
                      Number <span className="req">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputNum"
                    />
                  </div>
                  <div className="row">
                    <h4 className="text-primary mt-5">Website Information:</h4>
                  </div>
                  <div className="col-md-12">
                    <label for="websiteUrl" className="form-label">
                      Website URL <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="websiteUrl"
                      value="https://"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="websiteDesc" className="form-label">
                      Website Description <span className="req">*</span>
                    </label>
                    <textarea
                      className="form-control websiteDesc"
                      id="websiteDesc"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label for="phoneVerify" className="form-label">
                      Do you want phone verification on your site?
                    </label>
                    <select
                      name="phoneVerify"
                      id="phoneVerify"
                      className="form-select"
                    >
                      <option value="selected" selected>
                        Choose Option...
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="whearHear" className="form-label">
                      How did you hear about Affiliate Track?
                    </label>
                    <textarea
                      className="form-control whearHear"
                      id="whearHear"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="privacyCheck"
                      />
                      <label className="form-check-label" for="privacyCheck">
                        I have read and agree to the privacy policy
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary pt-2 pb-2 ps-5 pe-5"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- MODAL SECTION ENDED -->

    <!-- HEADER SECTION STARTS --> */}
      <header>
        {/* <!-- Navar Starts --> */}
        <section id="navar-section">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
               <h2>Acrredian</h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#advertisers">
                      Advertisers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#publishers">
                      Publishers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item me-lg-1 ms-lg-1 mb-md-1 mb-sm-1 mb-cs">
                    <a
                      href="#"
                      className="nav-link fw-bold shadow btn btn-info text-white btn-sm pd-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link fw-bold shadow s-d text-white btn-sm pd-btn btn"
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        {/* <!-- Navar Ended -->

      <!-- Hero Section Starts --> */}
        <section className="hero-section">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active bg-1">
                <div className="carousel-caption d-md-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 banner-text-area text-center">
                        
                        <h1 className="fw-bolder main-heading">
                          Let's Learn and Earn
                        </h1>
                        <p className="fs-4">
                          Get a chance to win up-to Rs.15,000                       </p>
                      
                        
                            <button className="btn hero-btn btn-outline-light" onClick={()=>setIsOpen(true)}>
                        
                              Refer and Earn
                            </button>
                            <Popup trigger={isOpen}  setIsOpen={setIsOpen}>
                              <div className="PopForm">
                                <form>
                                <div>  <input 
                      type="text"
                    
                      placeholder="Enter Your Name"
                    />
                   </div>     
                  
             
              <div>
              <input
                      type="text"
                    
                    
                      placeholder="Enter Your Email"
                    />
              </div>
                   
                
               
               <div>   <input
                      type="text"
                     
                  
                      placeholder="Enter Your Contact "
                    /></div>
                 
                 <button type="submit">Submit</button>

                                </form>
                   
                   
                 
                              </div>
                            </Popup>
                      
                        
                     
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="carousel-item bg-2">
                <div className="carousel-caption d-md-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 banner-text-area text-center">
                        <h4 className="fw-light">
                          #Clear Cut, Straight Forward & Honest
                        </h4>
                        <h2 className="fw-bolder main-heading">
                          Affiliate Marketing
                        </h2>
                        <p className="fs-4">
                          Where advertisers, affiliaters, and site owners meet
                        </p>
                        <a
                          href="#contact"
                          className="btn btn-outline-light hero-btn"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-3">
                <div className="carousel-caption d-md-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 banner-text-area text-center">
                        
                        <h2 className="fw-bolder main-heading">Advertiser</h2>
                        <p className="fs-4">
                          We are open to new affiliate programs and campaigns,
                          if you are interested please get in touch with us and
                          we will find the best solution for your needs.
                        </p>
                        <a
                          href="#advertisers"
                          className="btn btn-outline-light hero-btn"
                        >
                          Become an Advertiser
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-4">
                <div className="carousel-caption d-md-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 banner-text-area text-center">
                        <h4 className="fw-light">
                          #promoting brand names you love
                        </h4>
                        <h2 className="fw-bolder main-heading">Publisher</h2>
                        <p className="fs-4">
                          By becoming a publisher for advertisers you can make
                          money online.Here are the best affiliate networks for
                          publishers in 2022.
                        </p>
                        <a
                          href="#publishers"
                          className="btn btn-outline-light hero-btn"
                        >
                          Become an Publisher
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </header>
      {/* <!-- HEADER SECTION ENDED -->

    <!-- SCROLL ARROW SEC STARS --> */}
      <span id="up-arrow">
        <a href="#">
          <i className="fa-regular fa-circle-up rounded-circle"></i>
        </a>
      </span>
      {/* <!-- SCROLL ARROW SEC ENDED --> */}
      <main>
        {/* <!-- ABOUT SECTION STARTS --> */}
        <section id="about" className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2 className="fw-bold fs-1">
                    About <span className="text-primary">Us</span>
                  </h2>
                  <p className="sec-icon">
                    <i className="fa fa-user"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5 mt-md-2">
              <div className="p-sm-3 col-md-5 col-sm-12 col-xs-12">
                <div className="about-img w-100 h-100">
                 <img src="./images.AboutUs.png"></img>
                </div>
              </div>
              <div className="p-sm-3 col-md-7 col-sm-12 col-xs-12 mt-5 mt-md-2 AboutUs" >
                <h2 className="section-heading">
                How do I Refer
                </h2>
                <p className="mt-3 mt-md-2 mt-lg-4">
                 <div>Submit referrals easily via our website’s referral section.</div>
                 <div>Earn rewards once your referral joins an Accredian program.</div> 
                 <div>Both parties receive a bonus 30 days after program enrollment.</div>
                </p>
                <p className="text-bg-primary d-inline-block pe-1 ps-1">
                  Thank you for visiting us today. We hope you like it here.
                </p>
                <div>
                  <a
                    className="pt-2 pb-2 pe-5 ps-5 mt-3 d-inline-block rounded-5 text-decoration-none text-bg-primary btn mb-3"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ABOUT SECTION ENDED -->
      <!-- COUNTER SECTION STARTS --> */}
        <section id="counter" className="counter-sec">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xl-3 col-lg-6">
                  <div className="card l-bg-cherry">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Publishers</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            3,243
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            12.5% <i className="fa fa-arrow-up"></i>
                          </span>
                        </div>
                      </div>
                      <div
                        className="progress mt-1"
                        data-height="8"
                        style={{ height: "8px" }}
                      >
                        <div
                          className="progress-bar l-bg-cyan"
                          role="progressbar"
                          data-width="25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="card l-bg-blue-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Exclusive Campaigns</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            15.07k
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            9.23% <i className="fa fa-arrow-up"></i>
                          </span>
                        </div>
                      </div>
                      <div
                        className="progress mt-1"
                        data-height="8"
                        style={{ height: "8px" }}
                      >
                        <div
                          className="progress-bar l-bg-green"
                          role="progressbar"
                          data-width="25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="card l-bg-green-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-ticket-alt"></i>
                        <i className="fa-solid fa-calendar-days"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Days Worked</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            578
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            10% <i className="fa fa-arrow-up"></i>
                          </span>
                        </div>
                      </div>
                      <div
                        className="progress mt-1"
                        data-height="8"
                        style={{ height: "8px" }}
                      >
                        <div
                          className="progress-bar l-bg-orange"
                          role="progressbar"
                          data-width="25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="card l-bg-orange-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-dollar-sign"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">
                          Paid out to publishers
                        </h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            $11.61k
                          </h2>
                        </div>
                        <div className="col-4 text-right">
                          <span>
                            2.5% <i className="fa fa-arrow-up"></i>
                          </span>
                        </div>
                      </div>
                      <div
                        className="progress mt-1"
                        data-height="8"
                        style={{ height: "8px" }}
                      >
                        <div
                          className="progress-bar l-bg-cyan"
                          role="progressbar"
                          data-width="25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- COUNTER SECTION ENDED -->
      <!-- ADVERTISERS SERVICE SECTION STARTS --> */}
        <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="fw-bold fs-1">
                  Our
                  <span className="b-className-secondary">Advertiser </span>
                  Services
                </h2>
                <p className="sec-icon">
                  <i className="fa-solid fa-gear"></i>
                </p>
              </div>
            </div>
            <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h3>Tracking Lead</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-arrows-down-to-people"></i>
                  </div>
                  <h3>Advanced Targeting solution</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <h3>Global Reach & Quality Traffic</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-money-check-dollar"></i>
                  </div>
                  <h3>Flexible pricing models</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                  <h3>Advanced optimization technologies & methodologies</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-people-group"></i>
                  </div>
                  <h3>Dedicated account management team</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ADVERTISERS SERVICE SECTION ENDED -->
     
      <!-- PUBLISHER SERVICE SECTION STARTS --> */}
        <section id="publishers" className="publishers-service-sec pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="fw-bold fs-1">
                  Our
                  <span className="text-primary"></span>Services
                </h2>
                <p className="sec-icon">
                  <i className="fa-solid fa-gear"></i>
                </p>
              </div>
            </div>
            <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                  </div>
                  <h3>Solid Payment System</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-user-secret"></i>
                  </div>
                  <h3>Private Program System</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                  </div>
                  <h3>Awesome Deveoper Tools</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-brands fa-nfc-directional"></i>
                  </div>
                  <h3>Supper Speed Redirect</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>
                  <h3>Accurate Reports Analyzing</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h3>First className Support</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- PUBLISHER SERVICE SECTION ENDED -->
      <!-- TEAM CARD SECTION STARTS --> */}
    
        {/* <!-- TEAM CARD SECTION ENDED -->
      <!-- CONTACT SECTION STARTS --> */}
        <section id="contact" className="contact-section pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="fw-bold fs-1">
                  Contact <span className="b-className-secondary">Us</span>
                </h2>
                <p className="sec-icon">
                  <i className="fa-solid fa-phone"></i>
                </p>
              </div>
            </div>
            <div className="row mt-5 mt-md-2">
              <div className="p-sm-3 col-md-7 col-sm-12 col-xs-12">
                <h2 className="b-className-secondary mb-3">
                  Send Message <i className="fa-regular fa-comment-dots"></i>
                </h2>
                <form action="#">
                  <div className="form-floating mb-3 rounded-5">
                    <input
                      type="text"
                      className="form-control fw-bold rounded-5"
                      id="name"
                      placeholder="Username"
                    />
                    <label for="name">Enter Your Name</label>
                  </div>
                  <div className="form-floating mb-3 rounded-5">
                    <input
                      type="email"
                      className="form-control fw-bold rounded-5"
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label for="email">Email address</label>
                  </div>
                  <div className="form-floating message mb-3 rounded-5">
                    <textarea
                      className="form-control message fw-bold rounded-5"
                      id="message"
                      rows="3"
                      placeholder="Password"
                    ></textarea>
                    <label for="message">Your message gose here...</label>
                    <button className="btn mt-3" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="p-sm-3 col-md-5 col-sm-12 col-xs-12 mt-5 mt-md-2">
              
                <div className="single-cta">
                  <div className="cta-text">
                    <h4 className="mb-lg-3 fw-bold mb-3 pt-2 pb-2">
                      <i className="fas fa-phone"></i> Call us
                    </h4>
                    <span className="d-block">
                      <a
                        href="tel:9027482089"
                        className="text-decoration-none"
                      >
                        1234567890
                      </a>
                    </span>
                   
                  </div>
                </div>
                <div className="single-cta">
                  <div className="cta-text">
                    <h4 className="mb-lg-3 fw-bold mb-3 pt-2 pb-2">
                      <i className="far fa-envelope-open"></i> Mail us
                    </h4>
                    <span>
                      <a href="mailto:support@affiliate.com">
                        support@acrredian.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CONTACT SECTION ENDED --> */}
      </main>
      {/* <!-- FOOTER SECTION STARTS --> */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon mb-3 mb-lg-0">
                    <span>Follow us on</span>
                    <a href="">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram insta-bg"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-linkedin linkdin-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Some Useful Links</h3>
                  </div>
                  <ul className="row ps-0">
                    <div className="col-5">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#advertisers">Advertisers</a>
                      </li>
                      <li>
                        <a href="#publishers">Publishers</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </div>
                    <div className="col-7">
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#team">Expert Team</a>
                      </li>
                      <li>
                        <a href="#work">Brand's</a>
                      </li>
                      <li>
                        <a href="#counter">Our Progress</a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                      <button>
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved
                    <a href="#">nainaparashar1feb@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
