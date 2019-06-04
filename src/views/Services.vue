<template>
    <div class="services">
        <div class="regular-content parallax-3">
            <b-container>
                <div class="intro intro-3">
                    <h1>SERVICES</h1>
                </div>
            </b-container>
        </div>
        <div class="content-section white">
            <b-container>
                <div class="content-and-picture">
                    <img src="../assets/girl1.jpg">
                    <div class="detail">
                        <p class="content-paragraph">
                            FAT TRANSFER FILLERS
                        </p>
                        <p class="content-paragraph">
                            One basic principle of reconstructive plastic surgery is straightforward: ” Replacing like with like would give the most natural outcome. ” Restoring volume where it is needed with one’s own cells gives the best possible outcome. So if fat is missing, the ideal solution is obvious.
                        </p>
                        <p class="content-paragraph">
                            This is possible to restore volume to the lips, cheeks or temples, or to fill in a crease or depression such as the nasolabial folds or marionette lines (or all of the above), the ideal material is quite clearly one’s own fat. Since the fat cells are your own, there is a distinct advantage of not inciting an immune response, producing a more natural look and feel, and is well tolerated.
                        </p>
                        <button type="button" class="detail-button">VIEW MORE</button>
                    </div>
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
    .content-and-picture {
        display: flex;
        justify-content: center;
        align-items: center;
        .detail {
            margin-left: 25px;
            text-align: left;
            .detail-button {
                background-color: #000;
                color: #fff;
                padding: 6px 12px;
                border: none;
            }
        }
    }
    .address-section {
        padding: 50px 0px;
        margin-top: 60px;
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
    .our-team {
        .team-detail {
            margin-top: 30px;
            display: flex;
            img {
                width: 35%;
                height: 440px;
            }
            .detail p {
                text-align: left;
                margin-left: 15px;
                line-height: 2;
            }
        }
    }
    .regular-content {
        height: 100vh;
        width: 1348px;
    }
    .content-section {
        &.white {
            background-color: #fff;
            color: #000;
        }
        padding: 25px 0px;
        background-color: #000;
        .content-header {
            font-size: 40px;
            color: #e5e510;
        }
        .content-paragraph {
            margin-top: 15px;
            font-size: 20px;
            color: #e5e#fff510;
            text-align: left;
        }
    }
    .intro {
        &.intro-3 {
            top: 280px;
            color:#e5e510;
            h1 {
                font-size: 70px;
            }
        }
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
    .gallery {
        display: flex;
        flex-wrap: wrap;
        img {
            flex: 1;
            padding: 15px;
            &:hover {
                opacity: .7;
            }
        }
    }
</style>
