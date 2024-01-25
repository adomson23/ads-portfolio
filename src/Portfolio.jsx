import React from "react"; import './index.css'; 
import IMG from './img/Search.png'; import IMG1 from './img/Day View.png'; import IMG2 from './img/Business Report.png';
import IMG3 from './img/Notification.png'; import IMG4 from './img/User.png'; import IMG5 from './img/Down Button.png';
import IMG6 from './img/Chain Start.png'; import IMG7 from './img/Attach.png'; import IMG8 from './img/Email Send.png';
import IMG9 from './img/View Quilt.png'; import IMG10 from './img/Data Quality.png'; import IMG11 from './img/Link.png';
import IMG12 from './img/Logout.png';
const Portfolio = () => {
    return (
            <div className="container">
                <svg className="mog" xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
                    <path d="M22 40C32.9365 40 42 31.5996 42 21C42 10.4004 32.9365 2 22 2C11.0635 2 2 10.4004 2 21C2 31.5996 11.0635 40 22 40Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                </svg>
                <div className="gorizontal"> 
                    <img className='start' src={IMG6} />
                    <img className='attach' src={IMG7}/>
                    <img className="send" src={IMG8}/>
                    <img className="view" src={IMG9} />
                    <div className="grafic">
                        <img className="nastgrafic" />
                    </div>
                    <img className="datas" src={IMG10} />
                    <img className="link" src={IMG11} />
                    <img className="logout" src={IMG12} />
                </div>
                <div>
                    <img  className='day' src={IMG1}/>
                    <p className="overview">Overview</p>
                    <img src={IMG2} className="file"/> 
                    <p className="reports">Reports</p>
                </div>
                <div className="instrument">
                    <img  className='poisk' src={IMG} />
                    <img className="yved" src={IMG3}></img>
                    <svg className="krasn" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"> <circle cx="2" cy="2" r="2" fill="#FF0000"/>
                    </svg>
                    <img className="user" src={IMG4}></img>
                    <img className="down" src={IMG5}></img>
                </div>
                <div className="underinstrument"></div>
                <div className="vertical"></div>
                <div className="worlds">
                    <p className="world0">The World’s Leading <br/> crypto Software</p>
                    <p className="world1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lorem mi quis mauris iaculis <br/> quis faucibus. Est id faucibus vulputate eget in id erat sit donec. Amet, ultrices ullamcorper <br/> faucibus
                    </p>
                    <button className="start-now">Start now</button>
                    <button className="view-now">View Exchanges</button>
                    <p className="overview-now">Overview</p>
                </div>
                <div className="gorizontal-now-text0">
                    <div className="in500"> 
                        <p>500</p>
                    </div>
                    <div className="gorizontal-now2"></div>
                    <p>400</p>
                    <div className="gorizontal-now"></div>
                    <p>300</p>
                    <div className="gorizontal-now"></div>
                    <p>200</p>
                    <div className="gorizontal-now"></div>
                    <p>100</p>
                    <div className="gorizontal-now">
                        <div className="svgobchie">
                            <svg className="svgich" xmlns="http://www.w3.org/2000/svg" width="1100" height="242" viewBox="0 0 1050 222" fill="none">
                                <g filter="url(#filter0_f_85_130)">
                                    <path d="M108 97.5L4.5 155.5V217.5H1045V50.5L954.5 106.5L849.5 125L739.5 45.5L631 101.5L517.5 36L414 4.5L310 65.5L210.5 155.5L108 97.5Z" fill="url(#paint0_linear_85_130)" fill-opacity="0.27"/>
                                    <path d="M108 97.5L4.5 155.5V217.5H1045V50.5L954.5 106.5L849.5 125L739.5 45.5L631 101.5L517.5 36L414 4.5L310 65.5L210.5 155.5L108 97.5Z" stroke="#0029FF" stroke-opacity="0.22" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_85_130" x="0" y="0" width="1049.5" height="219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_85_130"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_85_130" x1="524.75" y1="4.5" x2="524.75" y2="217.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0989583" stop-color="#0029FF"/>
                                        <stop offset="1" stop-color="#0029FF" stop-opacity="0.08"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg  className='circle' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg>
                            <svg  className='circle2' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg>
                            <svg  className='circle3' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg>
                            <svg  className='circle4' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg>
                            <svg  className='circle5' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle6' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle7' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle8' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle9' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle10' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg> 
                            <svg  className='circle11' xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 16C14.0614 16 18 13.1919 18 9C18 4.80806 14.0614 2 10 2C5.93864 2 2 4.80806 2 9C2 13.1919 5.93864 16 10 16Z" fill="white" stroke="#0029FF" stroke-width="4"/>
                            </svg>
                            
                        </div>         
                    </div>
                    <p>0</p>
                    <div className="gorizontal-now"></div>
                </div>
                <div className="gorizontal-new-text1">
                    <p>Jan 23</p>
                    <div className="feb">
                        <p>Feb 23</p>
                    </div>
                    <div className="march">
                        <p>March 23</p>
                    </div>
                    <div className="april">
                        <p>April 23</p>
                    </div>
                    <div className="may">
                        <p>May 23</p>
                    </div>
                    <div className="june">
                        <p>June 23</p>
                    </div>
                    <div className="jule">
                        <p>Jule 23</p>
                    </div>
                    <div className="aug">
                        <p>Aug 23</p>
                    </div>
                    <div className="sep">
                        <p>Sep 23</p>
                    </div>
                    <div className="oct">
                        <p>Oct 23</p>
                    </div>
                    <div className="nove">
                        <p>Nov 23</p>
                    </div>
                </div>
                <div className='lineali'>
                </div>
            </div>
    ); }; export default Portfolio;