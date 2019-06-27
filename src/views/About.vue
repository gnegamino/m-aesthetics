<template>
    <div class="about pushed-content">
        <SubNavigation/>
        <div class="regular-content parallax-2">
            <b-container>
                <div class="hero-title hero-title--left">
                    <h1>OUR COMPANY</h1>
                    <h2></h2>
                </div>
            </b-container>
        </div>
        <div class="content-section section--slate">
            <b-container>
                <div class="content-header">
                    WHO ARE WE
                </div>
                <p class="content-paragraph">
                    M Aesthetics Clinic is a worldclass facility which offer various products and procedures designed to enhance one's beauty and fulfill one's fantasy of magnificence. Procedures offered include Facials, Drips and Lasers. We are equipped with brandnew, state of the art machines that produce exceptional results. Our center also houses an Operating Theater designed to accommodate all aesthetic surgeries. Patients can rest in our Recovery Room after each surgery.
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
            <b-container>
                <div class="content-header">
                    OUR TEAM
                </div>
                <div class="our-team">
                    <div class="team-detail">
                        <img src="../assets/mike-versoza.jpeg">
                        <div class="detail">
                            <div class="member-name">
                                Dr. Michael "Mike” Verzosa, M.D., D.P.B.P.S
                            </div>
                            <div class="member-position">
                                M-Aesthetics Owner
                            </div>
                            <p class="content-paragraph">
                                Board Certified Plastic Surgeon

                                Diplomate, Philippine Board of Plastic Surgery

                                Philippine Association of Plastic Reconstructive and Aesthetic Surgeons (PAPRAS)

                                Volunteer, Operation Smile 

                                Volunteer, Smile Train
                            </p>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
        <div class="parallax parallax-1 content-section">
            <b-container>
                <div class="content-header">
                    WHAT WE DO
                </div>
                <p class="content-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt culpa facere repellat tempora obcaecati eius. Autem excepturi consectetur omnis perspiciatis repellendus culpa libero architecto, vitae soluta corrupti, voluptates officiis!
                </p>
                <p class="content-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt culpa facere repellat tempora obcaecati eius. Autem excepturi consectetur omnis perspiciatis repellendus culpa libero architecto, vitae soluta corrupti, voluptates officiis!
                </p>
                <p class="content-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt culpa facere repellat tempora obcaecati eius. Autem excepturi consectetur omnis perspiciatis repellendus culpa libero architecto, vitae soluta corrupti, voluptates officiis!
                </p>
                <p class="content-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, incidunt culpa facere repellat tempora obcaecati eius. Autem excepturi consectetur omnis perspiciatis repellendus culpa libero architecto, vitae soluta corrupti, voluptates officiis!
                </p>
            </b-container>
        </div>
        <div class="content-section section--light">
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
            padding: 15px;
            &:hover {
                opacity: .7;
            }
        }
    }
</style>
