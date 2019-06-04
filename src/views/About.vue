<template>
    <div class="home">
        <div class="parallax parallax-intro">
            <b-container>
                <div class="intro intro-left">
                    <h1>M Aesthetics</h1>
                    <h2>Ageless Aesthetics</h2>
                </div>
            </b-container>
        </div>
        <div class="regular-content parallax-2">
            <b-container>
                <div class="intro-2 intro-left">
                    <h1>CUSTOMIZE YOUR ENHANCEMENT OPTIONS</h1>
                </div>
            </b-container>
        </div>
        <div class="parallax parallax-3">
            <b-container>
                <div class="intro-2 intro-right">
                    <h1>PERSONAL<br>DOCTOR-PATIENT<br>INTERACTION</h1>
                </div>
            </b-container>
        </div>
        <div class="regular-content parallax-4">
            <b-container>
                <div class="intro-2 intro-left">
                    <h1>PREMIUM<br>INDIVIDUALLY<br>FOCUSED<br>TREATMENT</h1>
                </div>
            </b-container>
        </div>
        <div class="address-section">
            <b-container>
                <div class="address-flex">
                    <img src="../assets/M logo.png">
                    <div class="address-detail">
                        Katipunan Ave, White Plains, Quezon City,<br>
                        1110 Metro Manila<br>
                        Email: info@maesthetics.com<br>
                        Phone: (+632) 795 2154<br>
                        Mobile: (+63917) 892 6319<br>
                        Website: www.maesthetics.com
                    </div>
                </div>
            </b-container>
        </div>
        <div class="footer-section">
            <b-container>
                Copyright © 2019 M Ageless Aesthetics. All Rights Reserved.
            </b-container>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
    .address-section {
        padding: 50px 0px;
    }
    .address-flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .address-section img {
        width: 15%;
    }
    .address-section .address-detail {
        text-align: left;
        margin-left: 15px;
    }
    .footer-section {
        background-color: #0A0A0A;
        color: #fff;
        padding: 15px 0px;
        text-align: left;
    }
    body {
        background-color: #000;
        overflow-x: hidden;
    }
    .parallax {
        height: 100vh;
        background-attachment: fixed;
        background-size: cover;
        background-attachment: fixed;
        background-size: cover;
    }
    .parallax-intro {
        background-image: url('../assets/parallax-1.jpg');
    }
    .parallax-1 {
        background-image: url('../assets/parallax-1.jpg');
    }
    .parallax-2 {
        background-image: url('../assets/parallax-2.jpg');
    }
    .parallax-3 {
        background-image: url('../assets/parallax-3.jpg');
    }
    .parallax-4 {
        background-image: url('../assets/parallax-4.jpg');
    }
    .regular-content {
        height: 100vh;
        width: 1348px;
    }
    .intro, .intro-2 {
        color:#e5e510;
        line-height: 61px;
        position: relative;
    }
    .intro {
        top: 180px;
    }
    .intro h1 {
        font-size: 80px;
    }
    .intro h2 {
        font-size: 50px;
    }
    .intro-2 {
        width: 50%;
        top: 210px;
    }
    .intro-2 h1 {
        font-size: 50px;
    }
    .intro-left {
        float: left;
        text-align: left;
    }
    .intro-right {
        float: right;
        text-align: right;
    }
</style>
