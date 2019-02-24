<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="manifest" href="site.webmanifest">
        <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
        <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
        <link rel="apple-touch-icon" href="icon.png">
    </head>
    <body>
        <header class="header">
            <div class="header__top">
                <div class="container">
                    <div class="contact">
                        <a href="#"><i class="fas fa-phone-volume"></i> +977-9737366333</a>
                        <a href="#"><i class="fas fa-envelope"></i>info@cyclingnepal.com</a>
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/cyclingnepal/"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="header__bottom">
                <nav class="header__nav">
                    <div class="container">
                        <div class="header__nav--wrapper">
                            <div class="logo">
                                <a href="index.php">
                                    <img src="assets/images/logo.png">
                                </a>
                            </div>
                            <div class="menu-toggle">
                                <span>
                                    <i class="fas fa-bars"></i>
                                </span>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="<?php if ($page=='home'){echo 'active';} ?>"><a href="index.php">Home</a></li>
                                    <li class="<?php if ($page=='about'){echo 'active';} ?>"><a href="about.php">About</a></li>
                                    <li class="<?php if ($page=='biking-trips'){echo 'active';} ?>"><a href="biking-trips.php">Biking Trips</a></li>
                                    <li class="<?php if ($page=='trekking-trips'){echo 'active';} ?>"><a href="trekking-trips.php">Trekking Trips</a></li>
                                    <li class="<?php if ($page=='trailor-made-trips'){echo 'active';} ?>"><a href="trailor-made-trips.php">Trailor Made Trips</a></li>
                                    <li class="<?php if ($page=='blogs'){echo 'active';} ?>"><a href="blogs.php">Blogs</a></li>
                                    <li class="<?php if ($page=='contact'){echo 'active';} ?>"><a href="contact.php">Contact</a></li> 
                                    <li class="<?php if ($page=='customize-trip'){echo 'active';} ?> menu-customize-trip"><a href="customize-trip.php">Customize Your Trip</a></li> 

                                </ul>
                            </div>
                            <div class="navigation-form">
                                <button class="btn btn-search" id="search-toggler" data-search-expanded="false"><i class="fas fa-search trigger-icon"></i></button>
                                <form class="form-search" autofill="false">
                                    <input type="text" name="q" placeholder="Search..." autocomplete="false">
                                    <button type="submit" name="button" class="btn btn-search"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <!-- /.Header -->