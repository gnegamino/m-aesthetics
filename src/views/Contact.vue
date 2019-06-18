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
    .contact-form {
        .contact-form-header {
            color: gold;
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
        background-color: #ffd700;
        border-color :#968006;
        transition: .4s;
        &:hover {
            background-color: #ffe359;
            outline: none;
        }
    }
</style>
