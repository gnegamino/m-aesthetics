<template>
    <div class="about pushed-content">
        <SubNavigation/>
        <div class="regular-content parallax-2">
            <b-container>
                <div class="hero-title hero-title--left">
                    <h1>OUR COMPANY</h1>
                    <h2>Your beauty, our expertise.</h2>
                    <h2>Allure and shine!</h2>
                </div>
            </b-container>
        </div>
        <div class="content-section section--slate">
            <b-container>
                <div class="content-header">
                    WHO ARE WE
                </div>
                <p class="content-paragraph">
                    M Aesthetics Clinic is a world class facility which offer various products and procedures designed to enhance one's beauty and fulfill one's fantasy of magnificence. Procedures offered include Facials, Drips and Lasers. We are equipped with brandnew, state of the art machines that produce exceptional results. Our center also houses an Operating Theater designed to accommodate all aesthetic surgeries. Patients can rest in our Recovery Room after each surgery.
                </p>
                <p class="content-paragraph">
                    Our Surgeon is a member of the Philippine Association of Plastic, Reconstructive and Aesthetic Surgeons (PAPRAS), the only society recognized by the Philippine Medical Association. This recognition assures you the best results. 
                </p>
                <p class="content-paragraph">
                    We are located in the heart of Quezon City's business district with ample parking and valet service. Easy access to public transporation is also available. We can also arrange accomodation, recreation and transportation for patients.
                </p>
            </b-container>
        </div>
        <div class="content-section section--light">
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
        </div>
        <div class="content-section section--slate">
            <b-container>
                <div class="content-header">
                    WHERE WE DO IT
                </div>
                <p class="content-paragraph">
                    Our clinic was designed to be warm and welcoming, with emphasis on comfort. We want your experience to be as pleasant as we can possibly make it. You enter with the feeling of ease and from entry to exit it is our goal that each of our valued patients has a sense that a meaningful and trustworthy relationship has been formed between our establishment and yourself.
                </p>
                <div class="gallery">
                    <img src="../assets/place1.jpg">
                    <img src="../assets/place2.jpg">
                    <img src="../assets/place3.jpg">
                    <img src="../assets/place4.jpg">
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SubNavigation from '@/components/SubNavigation.vue'

    export default {
        name: 'about',
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
    .owner-section {
        display: flex;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 30px 0px;
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
                    color: $dark-color;
                    margin-bottom: 20px;
                }
                h3 {
                    font-size: 20px;
                    color: $dark-color;
                }
            }
            &-affiliations {
                margin-top: 25px;
                h3 {
                    color: $dark-color;
                }
                h6 {
                    margin-bottom: 20px;
                    color: $dark-color;
                }
            }
        }
    }
    .our-team {
        .member-name {
            font-size: 25px;
            text-align: left;
            font-weight: 700;
        }
        .member-position {
            font-size: 20px;
            text-align: left;
        }
        .team-detail {
            margin-top: 30px;
            display: flex;
            img {
                width: 25%;
            }
            .detail {
                margin-left: 30px;
                p {
                    text-align: left;
                    line-height: 2;
                    margin-top: 10px;
                    font-size: 16px;
                }
            }
        }
    }
    .gallery {
        display: flex;
        flex-wrap: wrap;
        img {
            flex: 1;
            width: 20%;
            height: 256px;
            padding: 15px;
            &:hover {
                opacity: .7;
            }
        }
    }
</style>
