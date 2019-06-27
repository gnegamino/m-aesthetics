<template>
    <div class="contact pushed-content">
        <SubNavigation/>
        <div class="contact-form parallax parallax-1">
            <div class="contact-form-header">
                Get in touch with us
            </div>
            <div class="contact-form-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="text" class="form-control form-input--modified" placeholder="Name">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control form-input--modified" placeholder="Contact No.">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control form-input--modified" placeholder="E-mail Address">
                        </div>
                    </div>
                    <div class="row form-margin">
                        <div class="col-md-12">
                            <textarea class="form-control form-input--modified" rows="8" placeholder="Inquiries, Questions, Remarks"></textarea>
                        </div>
                    </div>
                    <div class="row form-margin">
                        <div class="col-md-12">
                            <button class="btn contact-submit" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="contact-detail-location">
                <div class="left">
                    <div class="location">
                        <h4>Location</h4>
                        <h2 class="emphasized">M Aesthetics Clinic</h2>
                        <h3>2nd Floor WDG Building</h3>
                        <h3>1470 Quezon Avenue Quezon City</h3>
                    </div>
                    <div class="contact-details">
                        <h4>Contact Information</h4>
                        <h3>+6329625744</h3>
                        <h3>+639255363651</h3>
                        <h3 class="emphasized">inquiry@m-aestheticsclinic.com</h3>
                    </div>
                </div>
                <div class="right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3656118342265!2d121.0209877147896!3d14.635175689780493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b64fb70082bd%3A0x33c05cd55df8f937!2sQuezon+Ave%2C+Quezon+City%2C+Metro+Manila!5e0!3m2!1sen!2sph!4v1560830148596!5m2!1sen!2sph"
                        width="100%"
                        height="600"
                        frameborder="0"
                        style="border:0"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SubNavigation from '@/components/SubNavigation.vue'

    export default {
        name: 'contact',
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

    .contact-form {
        .contact-form-header {
            color: $primary-color;
            padding: 40px 0px;
            font-size: 40px;
        }
    }
    .form-margin {
        margin-top: 25px;
    }
    .form-input--modified {
        border-radius: 0px;
        border: none;
        &:focus {
            border-color: rgba(255, 215, 0, 0.8);
            box-shadow: 0 1px 1px rgba(255, 215, 0, 0.075) inset, 0 0 8px rgba(255, 215, 0, 0.6);
            outline: 0 none;
        }
    }
    input[type="text"] {
        &.form-input--modified {
            height: 50px;
        }
    }
    .contact-submit {
        width: 150px;
        height: 70px;
        font-size: 20px;
        border-radius: 0px;
        background-color: $primary-color;
        border-color: darken($primary-color, 10%);
        transition: .4s;
        &:hover {
            background-color: darken($primary-color, 5%);
            outline: none;
        }
    }
    .contact-detail-location {
        display: flex;
        padding: 40px 0px;
        .emphasized {
            color: $primary-color;
        }
        .left {
            .location {
                text-align: left;
            }
            .contact-details {
                text-align: left;
                margin-top: 30px;
            }
            h3 {
                font-size: 18px;
            }
        }
        .right {
            flex: 1;
            margin-left: 40px;
        }
    }
</style>
