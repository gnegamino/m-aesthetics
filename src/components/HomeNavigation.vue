<template>
    <div>
        <div id="main-navigation-bar" class="navigation-bar">
            <div class="navigation-bar-content">
                <router-link to="/about">
                    About
                </router-link>
            </div>
            <div class="navigation-bar-content">
                <router-link to="/services">
                    Services
                </router-link>
            </div>
            <div class="navigation-bar-content">
                <router-link to="/contact">
                    Contact Us
                </router-link>
            </div>
        </div>
        <div id="sub-navigation-bar" class="navigation-bar">
            <div class="client-contact">
                <div class="client-contact-item">
                    <span class="fas fa-envelope"></span>
                    <span class="client-contact-text">info@maesthetics.com</span>
                </div>
                <div class="client-contact-item">
                    <span class="fas fa-phone"></span>
                    <span class="client-contact-text">(+632) 756 2154</span>
                </div>
                <div class="client-contact-item">
                    <span class="fas fa-mobile"></span>
                    <span class="client-contact-text">(+63917) 829 6319</span>
                </div>
            </div>
            <div class="container">
                <div class="sub-navigation-bar">
                    <div class="left">
                        <router-link to="/">
                            <div class="sub-client-logo">
                                <img class="client-logo-img" src="../../src/assets/client-logo.png">
                            </div>
                        </router-link>
                        <div class="navigation-bar-group">
                            <div class="navigation-bar-content">
                                <router-link to="/about">
                                    About
                                </router-link>
                            </div>
                            <div class="navigation-bar-content">
                                <router-link to="/services">
                                    Services
                                </router-link>
                            </div>
                            <div class="navigation-bar-content">
                                <router-link to="/contact">
                                    Contact Us
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="navigation-bar-group social-media">
                            <div class="social-media-link facebook">
                                <i class="fab fa-facebook-square fa-2x"></i>
                            </div>
                            <div class="social-media-link instagram">
                                <i class="fab fa-instagram fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce';

    export default {
        methods: {
            handleScroll() {
                if (window.scrollY > 670) {
                    document.getElementById('sub-navigation-bar').style.visibility = "visible";
                    document.getElementById('sub-navigation-bar').style.opacity = "1";
                    document.querySelector('.client-floating-contact').style.display = "none";
                } else {
                    document.getElementById('sub-navigation-bar').style.visibility = "hidden";
                    document.getElementById('sub-navigation-bar').style.opacity = "0";
                    document.querySelector('.client-floating-contact').style.display = "block";
                }
            }
        },

        created() {
            this.handleDebouncedScroll = debounce(this.handleScroll, 50);
            window.addEventListener('scroll', this.handleDebouncedScroll);
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.handleDebouncedScroll);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    #main-navigation-bar {
        margin-top: 40px;
        height: 80px;
    }
    #sub-navigation-bar {
        display: flex;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 10000;
        background-color: lighten($dark-color, 10%);
        .client-contact {
            width: 100%;
        }
        .sub-navigation-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 0px;
            > .left {
                display: flex;
                .sub-client-logo img {
                    width: 80px;
                }
                .navigation-bar-group {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 20px;
                }
            }
            > .right {
                display: flex;
                align-items: center;
                justify-content: center;
                .social-media {
                    display: flex;
                    .social-media-link {
                        padding: 15px;
                        transition: .4s;
                        cursor: pointer;
                        &.facebook:hover {
                            color: #3b5998;
                        }
                        &.instagram:hover {
                            color: #D62976;
                        }
                    }
                }
            }
        }
    }
</style>
