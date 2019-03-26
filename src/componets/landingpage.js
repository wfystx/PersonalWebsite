import React, { Component } from 'react';
import resume from './FuyaoWang.pdf';

class Landing extends Component{
    render(){
        return(

            <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
            <header id="header">
                <div className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="intro-text">
                                <h1>Fuyao Wang</h1>
                                    <p>Embedded Systems • Software Development• Live in Bike</p>
                                    <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="nav">
                <nav className="navbar navbar-custom">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-main-collapse"><i className="fa fa-bars"></i></button>
                        </div>

                        <div className="collapse navbar-collapse navbar-main-collapse">
                            <ul className="nav navbar-nav">
                                <li className="hidden"><a href="#page-top"></a></li>
                                <li><a className="page-scroll" href="#about">About</a></li>
                                <li><a className="page-scroll" href="#portfolio">Projects</a></li>
                                <li><a className="page-scroll" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>About Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"><img src="img/about.jpg" className="img-responsive"/>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <div className="about-text">
                                <p>I'm a current Master's student majoring in Computer Engineering in Boston University.
                                Embedded Systems and Software development are my favorate things except riding a motorcycle.
                                 I have done several projects about software design and Internet of Things. I also have learned
                                some knowledge about hardware from my computer architecture class. The internships during my
                                undergraduate were also helpful for me.</p>
                                <p>I learned many important skills during all of these experiences, but the most important
                                    thing I have learned is how to learn a new thing.
                                    I also served for military as a soldier for 2 years. This experience is really precious
                                    for me because it taught me how to be a man. I must face a challenging future with
                                    unfamiliar things, having the ability of beating them is the best way to win the future.</p>
                                <a href={resume} download="FuyaoWang.pdf" className="btn btn-default btn-lg page-scroll">My Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Projects</h2>
                    </div>
                    {/*
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".graphic">Graphic Design</a></li>
                                    <li><a href="#" data-filter=".illustration">Illustration</a></li>
                                    <li><a href="#" data-filter=".photography">Photography</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    */}
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                                <div className="portfolio-item">

                                    <div className="hover-bg"><a  target="_blank" href="/contact" title="Intelligent Lab"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/01-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 illustration">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/02-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/02-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/03-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/03-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/04-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/04-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            {/*
                            <div className="col-sm-6 col-md-3 col-lg-3 illustration">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/05-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/05-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3 photography">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/06-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/06-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 photography">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/07-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/07-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/08-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/08-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 illustration">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/09-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/09-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 photography">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/10-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/10-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3 photography">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/11-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/11-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                                <div className="portfolio-item">
                                    <div className="hover-bg"><a href="img/portfolio/12-large.jpg" title="Project Title"
                                                                 data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Project Title</h4>
                                        </div>
                                        <img src="img/portfolio/12-small.jpg" className="img-responsive"
                                             alt="Project Title"/> </a></div>
                                </div>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title center">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name"
                                               required="required"/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email"
                                               required="required"/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4"
                                          placeholder="Message" required></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-default btn-lg">Send Message</button>
                        </form>
                        <div className="social">
                            <ul>
                                <li><a href="https://github.com/wfystx" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" /></a></li>
                                <li><a href="https://www.linkedin.com/in/fuyaowang" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <div className="fnav">
                        <p>Fuyao Wang  <i className="far fa-envelope"> fuyao@bu.edu</i>


                        </p>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="js/jquery.1.11.1.js"></script>
            <script type="text/javascript" src="js/bootstrap.js"></script>
            <script type="text/javascript" src="js/SmoothScroll.js"></script>
            <script type="text/javascript" src="js/nivo-lightbox.js"></script>
            <script type="text/javascript" src="js/jquery.isotope.js"></script>
            <script type="text/javascript" src="js/jqBootstrapValidation.js"></script>
            <script type="text/javascript" src="js/contact_me.js"></script>
            <script type="text/javascript" src="js/main.js"></script>
            </body>
        )
    }
}
export default Landing;