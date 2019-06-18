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
        <div class="client-floating-contact">
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
        </div>
        <div class="bg-bldg">
            <div class="intro-client-brand">
                <h1>M AESTHETICS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste sed blanditiis facilis, delectus, magnam porro rerum sunt in ex eligendi veritatis eaque cum consectetur maxime consequatur ullam laborum laboriosam.
                </p>
            </div>
        </div>
        <div class="client-important-content">
            <h2>This is an important advertisement content.</h2>
        </div>
        <div class="bg-2">
            <div class="intro-left">
                <h1>M AESTHETICS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste sed blanditiis facilis, delectus, magnam porro rerum sunt in ex eligendi veritatis eaque cum consectetur maxime consequatur ullam laborum laboriosam.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeNavigation from '@/components/HomeNavigation.vue'

    export default {
        components: {
            HomeNavigation
        },
        mounted() {
            window.scroll(0, 0);
        }
    }
</script>

<style lang="scss">
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
        display: flex;
        flex-direction: row;
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
        background: url('../../src/assets/bg-bldg.png');
        height: 980px;
        width: 100%;
        position: relative;
        top: 300px;
    }
    .bg-2 {
        background: url('../../src/assets/parallax-2.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 900px;
    }
    .client-important-content {
        position: relative;
        top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 30px 0px;
        color: #444;
        background: #fff;
        h2 {
            font-weight: 300;
        }
    }
    .home-footer {
        background: #000;
        .home-footer-left {
            padding: 20px;
            color: #fff;
        }
    }
</style>