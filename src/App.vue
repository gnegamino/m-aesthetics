<template>
    <div id="app">
        <div class="fixed-link left">
            <router-link to="/contact">
                INQUIRE
            </router-link>
        </div>
        <div class="fixed-link right">
            <router-link to="/services">
                SERVICES
            </router-link>
        </div>
        <div class="navigation-header-contact">
            <b-container class="container-flexed">
                <div class="textwidget">
                    <div class="textwidget-item">
                        <i class="fas fa-envelope"></i>
                        <a href="tel:(+632) 795 2154"> info@maesthetics.com</a>
                    </div>
                    <div class="textwidget-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:(+632) 795 2154"> (+632) 795 2154</a>
                    </div>
                    <div class="textwidget-item">
                        <i class="fas fa-mobile"></i>
                        <a href="tel:(+63917) 892 6319"> (+63917) 892 6319</a>
                    </div>
                </div>
                <div class="social-media">
                    <div class="social-media-item">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div class="social-media-item">
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </b-container>
        </div>
        <b-navbar fixed="top" toggleable="lg" type="dark" class="navigation-bar">
            <b-container>
                <img class="maesthetics-logo" src="../src/assets/M logo.png">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="navigation-link"><router-link to="/">Home</router-link></b-nav-item>
                        <b-nav-item class="navigation-link"><router-link to="/about">About</router-link></b-nav-item>
                        <b-nav-item class="navigation-link"><router-link to="/services">Services</router-link></b-nav-item>
                        <b-nav-item class="navigation-link"><router-link to="/contact">Contact Us</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        <router-view/>
  </div>
</template>

<style lang="scss">
    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .navigation-bar {
        padding-top: 32px;
        background-color: #000;
    }
    .navigation-spacer {
        height: 34px;
    }
    .navigation-header-contact {
        background: #000;
        padding: 5px 0px;
        position: relative;
        z-index: 99999;
    }
    .navigation-header-contact .textwidget,
    .navigation-header-contact .textwidget a {
        color: #fff;
        text-decoration: none;
    }
    .navigation-header-contact {
        display: flex;
        justify-content: space-between;
    }
    .textwidget {
        display: flex;
    }
    .textwidget-item {
        margin-left: 10px;
    }
    .container-flexed {
        display: flex;
        justify-content: space-between;
    }
    .social-media {
        display: flex;
    }
    .social-media .social-media-item {
        margin-right: 10px;
    }
    .maesthetics-logo {
        width: 10%;
    }
    .navigation-link a {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 20px;
        text-decoration: none;
    }
    .navigation-link a:hover {
        color: #FCFF0D;
    }
    img {
        max-width: 100%;
    }
    .fixed-link {
        position: fixed;
        top: 70%;
        background-color: #fff;
        a {
            color: #333333;
            text-decoration: none;
            padding: 20px;
            display: block;
            font-family: 'Segoe UI';
        }
        &.left {
            left: 0px;
        }
        &.right {
            right: 0px;
        }
    }
</style>
