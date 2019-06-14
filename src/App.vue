<template>
    <div id="app">
        <div class="background">
            <img v-parallax.modifier="0.08" src="../src/assets/bg-1.png">
        </div>

        <div class="intro-container">
            <div class="intro-text">More Confident</div>
            <div class="intro-text">●</div>
            <div class="intro-text">More Beautiful</div>
            <div class="intro-text">●</div>
            <div class="intro-text">More You</div>
        </div>
        <div class="client-logo">
            <img class="client-logo-img" src="../src/assets/client-logo.png">
        </div>
        <div class="navigation-bar">
            <div class="navigation-bar-content">About</div>
            <div class="navigation-bar-content">Services</div>
            <div class="navigation-bar-content">Inquire</div>
            <div class="navigation-bar-content">Contact Us</div>
        </div>

        <div class="footer">
            <div class="footer-left">
                <span class="fas fa-envelope"></span>
                <span> info@maesthetics.com</span>
                <br>
                <span class="fas fa-phone"></span>
                <span> (+632) 756 2154</span>
                <br>
                <span class="fas fa-mobile"></span>
                <span> (+63917) 829 6319</span>
            </div>

            <div class="footer-right">
                <span class="fa fa-facebook-square"></span>
                <span> /maesthetics</span>
                <br>
                <span class="fa fa-instagram"></span>
                <span> @maesthetics</span>
            </div>
        </div>
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
    }

    .client-logo-img {
        width: 300px;
    }

    .navigation-bar {
        padding: 15px;
        background-color: rgba(0, 0, 0, .9);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .navigation-bar-content {
        font-weight: bold;
        padding-left: 20px;
        padding-right: 20px;
    }

    .background {
        z-index: -9999;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
    }

    .background img {
        width: 100%;
    }

    .footer {
        margin-top: 20px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .footer-left {
        text-align: left;
    }

    .footer-right {
        text-align: right;
    }

</style>
