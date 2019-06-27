<template>
    <div class="services pushed-content">
        <SubNavigation/>
        <div class="regular-content parallax-3">
            <b-container>
                <div class="hero-title hero-title--right">
                    <h1>SERVICES</h1>
                    <h2>Feeling tired and stressed? No worries! A surprise is waiting for you! Pamper yourself with our extraordinary services done by the professionals/experts.</h2>
                </div>
            </b-container>
        </div>
        <div class="content-section section--light">
            <b-container>
                <div class="content-and-picture">
                    <img src="../assets/girl1.jpg">
                    <div class="detail">
                        <div class="content-sub-header">
                            FAT TRANSFER FILLERS
                        </div>
                        <p class="content-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea cum quisquam eaque in placeat omnis dolore? Quae hic atque quisquam, earum nulla quod minima, maxime velit sunt dicta cupiditate!
                        </p>
                        <button type="button" class="detail-button">VIEW MORE</button>
                    </div>
                </div>
                <div class="content-and-picture">
                    <img src="../assets/girl1.jpg">
                    <div class="detail">
                        <div class="content-sub-header">
                            FAT TRANSFER FILLERS
                        </div>
                        <p class="content-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea cum quisquam eaque in placeat omnis dolore? Quae hic atque quisquam, earum nulla quod minima, maxime velit sunt dicta cupiditate!
                        </p>
                        <button type="button" class="detail-button">VIEW MORE</button>
                    </div>
                </div>
                <div class="content-and-picture">
                    <img src="../assets/girl1.jpg">
                    <div class="detail">
                        <div class="content-sub-header">
                            FAT TRANSFER FILLERS
                        </div>
                        <p class="content-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea cum quisquam eaque in placeat omnis dolore? Quae hic atque quisquam, earum nulla quod minima, maxime velit sunt dicta cupiditate!
                        </p>
                        <button type="button" class="detail-button">VIEW MORE</button>
                    </div>
                </div>
                <div class="content-and-picture">
                    <img src="../assets/girl1.jpg">
                    <div class="detail">
                        <div class="content-sub-header">
                            FAT TRANSFER FILLERS
                        </div>
                        <p class="content-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea cum quisquam eaque in placeat omnis dolore? Quae hic atque quisquam, earum nulla quod minima, maxime velit sunt dicta cupiditate!
                        </p>
                        <button type="button" class="detail-button">VIEW MORE</button>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SubNavigation from '@/components/SubNavigation.vue'

    export default {
        name: 'services',
        components: {
            SubNavigation
        },
        mounted() {
            window.scroll(0, 0);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    .content-and-picture {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        .detail {
            margin-left: 25px;
            text-align: left;
            .detail-button {
                background-color: $dark-color;
                color: $light-color;
                padding: 6px 12px;
                border: none;
            }
        }
    }
</style>
