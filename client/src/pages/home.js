import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="hero_area ">
                    {/* <!-- header section strats --> */}
                    <header class="header_section">
                        <div class="container-fluid">
                            <nav class="navbar navbar-expand-lg custom_nav-container">
                                <a class="navbar-brand" href="index.html">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>
                                <div class="" id="">
                                    <div class="User_option">
                                        <form class="form-inline my-2  mb-3 mb-lg-0">
                                            <input type="search" placeholder="Search" />
                                            <button class="btn my-sm-0 nav_search-btn" type="submit"></button>
                                        </form>
                                    </div>

                                    <div class="custom_menu-btn">
                                        <button onclick="openNav()">
                                            <span class="s-1"> </span>
                                            <span class="s-2"> </span>
                                            <span class="s-3"> </span>
                                        </button>
                                    </div>
                                    <div id="myNav" class="overlay">
                                        <div class="overlay-content">
                                            <a href="index.html">Home</a>
                                            <a href="about.html">About</a>
                                            <a href="donate.html">Donate</a>
                                            <a href="contact.html">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    {/* <!-- end header section --> */}

                    {/* <!-- slider section --> */}
                    <section class="slider_section">
                        <button class="plus_btn">
                            <img src="assets/images/plus.png" alt="" />
                        </button>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-lg-7">
                                    <div class="img-box">
                                        <img src="assets/images/slider-img.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-5">
                                    <div class="detail-box">
                                        <h1>
                                            My <br />
                                            <span>
                                                Love Pet
                                            </span>
                                        </h1>
                                        <div class="btn-box">
                                            <a href="" class="btn-1">
                                                Donate Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- end slider section --> */}
                </div>

                {/* <!-- animal section --> */}

                <section class="animal_section layout_padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="detail-box">
                                    <div class="heading_container">
                                        <h2>
                                            Save Animals
                                        </h2>
                                    </div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                                    </p>
                                    <div class="btn-box">
                                        <a href="" class="btn-1">
                                            Donate Now
                                        </a>
                                        <a href="" class="btn-2">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="img-box">
                                    <img src="assets/images/animal-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end animal section --> */}


                {/* <!-- forest section --> */}

                <section class="forest_section layout_padding-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="img-box">
                                    <img src="assets/images/forest-img.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-box">
                                    <div class="heading_container">
                                        <h2>
                                            Save Forest
                                        </h2>
                                    </div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                                    </p>
                                    <div class="btn-box">
                                        <a href="" class="btn-1">
                                            Donate Now
                                        </a>
                                        <a href="" class="btn-2">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end forest section --> */}


                {/* <!-- about section --> */}

                <section class="about_section layout_padding2-bottom">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-10 col-lg-9 mx-auto">
                                <div class="detail-box">
                                    <div class="heading_container">
                                        <h2>
                                            About Forest
                                        </h2>
                                    </div>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like </p>
                                    <div class="btn-box">
                                        <a href="" class="btn-2">
                                            Donate Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img-box">
                        <img src="assets/images/about-img.jpg" alt="" />
                    </div>
                </section>


                {/* <!-- end about section --> */}

                {/* <!-- client section --> */}

                <section class="client_section ">
                    <button class="plus_btn">
                        <img src="assets/images/plus.png" alt="" />
                    </button>
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                What says Donators
                            </h2>
                        </div>
                        <div class="box">
                            <div class="img-box">
                                <img src="assets/images/client.png" alt="" />
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Carry Mork
                                </h6>
                                <h6 class="profession">
                                    Business
                                </h6>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end client section --> */}

                {/* <!-- contact section --> */}

                <section class="contact_section layout_padding">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5 col-lg-4 offset-md-1">
                                <div class="form_container">
                                    <div class="heading_container">
                                        <h2>
                                            Request A Call back
                                        </h2>
                                    </div>
                                    <form action="">
                                        <div>
                                            <input type="text" placeholder="Full Name " />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone number" />
                                        </div>
                                        <div>
                                            <input type="text" class="message-box" placeholder="Message" />
                                        </div>
                                        <div class="d-flex ">
                                            <button>
                                                SEND
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 px-0">
                                <div class="map_container">
                                    <div class="map">
                                        <div id="googleMap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end contact section --> */}

                {/* <!-- subscribe section --> */}

                <section class="subscribe_section layout_padding-bottom">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                Subscribe Our Newsletter
                            </h2>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-7 mx-auto">
                                <div class="subscribe_form ">
                                    <form action="">
                                        <input type="email" placeholder="" />
                                        <button>
                                            subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end subscribe section --> */}

                {/* <!-- info section --> */}

                <section class="info_section  layout_padding2">
                    <div class="footer_img fi1">
                        <img src="assets/images/footer-animal1.png" alt="" />
                    </div>
                    <div class="footer_img fi2">
                        <img src="assets/images/footer-animal2.png" alt="" />
                    </div>
                    <div class="container">
                        <div class="social_container">
                            <div class="social_box">
                                <a href="">
                                    <img src="assets/images/fb.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="assets/images/twitter.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="assets/images/linkedin.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="assets/images/instagram.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="assets/images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="contact_items">
                            <a href="">
                                <div class="item ">
                                    <div class="img-box ">
                                        <img src="assets/images/location.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <p>
                                            Location
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="item ">
                                    <div class="img-box ">
                                        <img src="assets/images/call.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <p>
                                            Call +01 1234567890
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="item ">
                                    <div class="img-box ">
                                        <img src="assets/images/mail.png" alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <p>
                                            demo@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="info_container ">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-lg-3 ">
                                    <h6>
                                        About
                                    </h6>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav </p>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <h6>
                                        Useful Link
                                    </h6>
                                    <div class="info_link-box">
                                        <ul>
                                            <li class="active">
                                                <a href="index.html">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="about.html">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="donate.html">
                                                    Donate
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 text-center">
                                    <h6>
                                        Forest
                                    </h6>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav
                                    </p>
                                </div>
                                <div class="col-md-6 col-lg-3 text-center">
                                    <h6>
                                        Animals
                                    </h6>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end info section --> */}


                {/* <!-- footer section --> */}
                <section class="container-fluid footer_section ">
                    <p>
                        &copy; <span id="displayDate"></span> All Rights Reserved. Design by
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </section>
                {/* <!-- end  footer section --> */}

                <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
                <script type="text/javascript" src="js/bootstrap.js"></script>
                <script type="text/javascript" src="js/custom.js"></script>
                {/* <!-- Google Map --> */}
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
                {/* <!-- End Google Map --> */}

            </div>
        );
    }
}

export default Home;