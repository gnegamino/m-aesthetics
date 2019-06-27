<template>
    <div class="home">
        <div class="background bg-initial">
            <!-- <img v-parallax.modifier="0.08" src="../../src/assets/bg-1.png"> -->
        </div>
        <div class="intro-container">
            <div class="intro-text">More Confident</div>
            <div class="intro-text">●</div>
            <div class="intro-text">More Beautiful</div>
            <div class="intro-text">●</div>
            <div class="intro-text">More You</div>
        </div>
        <div class="client-logo">
            <img class="client-logo-img" src="../../src/assets/client-logo.png">
        </div>
        <HomeNavigation/>
        <div class="book-now">
            <h2>
                Dr. Michael "Mike” Verzosa, M.D., D.P.B.P.S
            </h2>
            <h3>
                Board Certified Plastic Surgeon
            </h3>
            <div class="book-appointment">
                <p>BOOK APPOINTMENT NOW!</p>
                <p>+632 962 5744 / +639 25 536 3651</p>
            </div>
        </div>
        <!-- <div class="client-floating-contact">
            <table>
                <tr>
                    <td width="30px"><span class="fas fa-envelope"></span></td>
                    <td align="left"><span>info@maesthetics.com</span></td>
                </tr>
                <tr>
                    <td><span class="fas fa-phone"></span></td>
                    <td align="left"><span>(+632) 756 2154</span></td>
                </tr>
                <tr>
                    <td><span class="fas fa-mobile"></span></td>
                    <td align="left"><span>(+63917) 829 6319</span></td>
                </tr>
            </table>
            <hr>
            <table>
                <tr>
                    <td width="30px"><span class="fab fa-facebook-square"></span></td>
                    <td><span>/maesthetics</span></td>
                </tr>
                <tr>
                    <td><span class="fab fa-instagram"></span></td>
                    <td><span>@maesthetics</span></td>
                </tr>
            </table>
        </div> -->
        <div class="bg-bldg">
            <div class="intro-client-brand">
                <h1>M AESTHETICS</h1>
                <p>
                    A world class facility which offer various products and procedures designed to enhance one's beauty and fulfill one's fantasy of magnificence.
                </p>
            </div>
        </div>
        <div class="owner-section">
            <div class="container">
                <div class="doctor-mike">
                    <img class="doctor-mike-image" src="../../src/assets/mike-versoza.jpeg">
                    <div class="doctor-mike-details">
                        <h2>Dr. Michael "MIKE" Verzosa, M.D., D.P.B.P.S</h2>
                        <h3>Board Certified Plastic Surgeon</h3>
                        <h3>Volunteer, Operation Smile</h3>
                        <h3>Volunteer, Smile Train</h3>
                        <div class="doctor-mike-affiliations">
                            <h3>Affiliations:</h3>
                            <h6>Philippine Association of Plastic Reconstructive and Aesthetic Surgeons (PAPRAS)</h6>
                            <img src="../../src/assets/papras.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-2">
            <div class="container">
                <div class="home-services">
                    <h1>SERVICES</h1>
                    <div class="home-services-group">
                        <div class="home-services-list">
                            <h1>Face, skin and body services</h1>
                            <ul>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Anti-Acne Services</li>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Whitening Services</li>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Anti-aging Facial Services</li>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Carbon Laser Facial</li>
                            </ul>
                        </div>
                        <div class="home-services-list">
                            <h1>Surgical Services</h1>
                            <ul>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Liposuction</li>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Rhinoplasty</li>
                                <li><i class="fa fa-arrow-right service-list-icon"></i> Tattoo Removal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeNavigation from '@/components/HomeNavigation.vue'

    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        },
        components: {
            HomeNavigation
        },
        mounted() {
            window.scroll(0, 0);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    .book-now {
        color: $light-color;
        font-weight: bold;
        width: 50%;
        margin: 25px auto 0px auto;
        h3 {
            font-size: 24px;
        }
        .book-appointment {
            color: $light-color;
            font-size: 32px;
            margin-top: 35px;
            p {
                margin-bottom: 0px;
            }
        }
    }
    .intro-container {
        padding-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .intro-text {
        color: rgba(255, 255, 255, .5);
        padding: 15px;
        font-size: 21px;
    }
    .client-logo {
        justify-content: center;
        .client-logo-img {
            width: 300px;
        }
    }
    .background {
        width: 100vw;
        z-index: -9999;
        background: no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .bg-initial {
        background-image: url('../../src/assets/bg-1.png');
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100vh;
        img {
            width: 100%;
        }
    }
    .bg-bldg {
        background: url('../../src/assets/stock/stock-1.jpg');
        height: 980px;
        width: 100%;
        position: relative;
        top: 300px;
    }
    .bg-2 {
        background: url('../../src/assets/stock/stock-2.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 900px;
    }
    .owner-section {
        display: flex;
        position: relative;
        top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 30px 0px;
        color: #444;
        background: lighten($dark-color, 8%);
        h2 {
            font-weight: 300;
        }
        .doctor-mike {
            display: flex;
            &-image {
                width: 300px;
                height: 440px;
                border: 4px $dark-color solid;
            }
            &-details {
                margin-left: 40px;
                flex: 1;
                text-align: left;
                h2 {
                    color: $primary-color;
                    margin-bottom: 20px;
                }
                h3 {
                    font-size: 20px;
                    color: $light-color;
                }
            }
            &-affiliations {
                margin-top: 25px;
                h3 {
                    color: $primary-color;
                }
                h6 {
                    margin-bottom: 20px;
                    color: $light-color;
                }
            }
        }
    }
    .home-services {
        position: relative;
        top: 260px;
        &-group {
            display: flex;
            justify-content: space-evenly;
            margin-top: 40px;
        }
        &-list {
            h1 {
                color: $primary-color;
                font-size: 28px;
                text-transform: uppercase;
                text-align: left;
            }
            ul {
                padding-left: 10px;
                list-style: none;
                li {
                    font-size: 28px;
                    text-align: left;
                    padding: 20px 0px;
                    .service-list-icon {
                        color: $primary-color;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>