<template>

    <section class="p-5 w-100">
        <div class="row">
            <div class="col-12">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center text-body h1 fw-bold mb-5 mt-4">Sign up</p>

                                <form @submit.prevent="uploadFile">

                                    <div class="d-flex flex-row align-items-center mb-4">

                                        <div data-mdb-input-init="" class="form-outline flex-fill mb-0"
                                            data-mdb-input-initialized="true">
                                            <label class="form-label" for="form3Example1c"
                                                style="margin-right: 20px;">Your Name</label>
                                            <input type="text" name="name" v-model="name" placeholder="Your Name">
                                            <div class="form-notch">

                                                <div class="form-notch-middle"
                                                    style="padding-top: 20px; font-size: 10px;"></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row align-items-center mb-4">

                                        <div data-mdb-input-init="" class="form-outline flex-fill mb-0"
                                            data-mdb-input-initialized="true">
                                            <label class="form-label" for="form3Example1c"
                                                style="margin-right: 20px;">Your Email</label>
                                            <Field type="email" name="email" v-model="email" :rules="isEmail" required
                                                placeholder="Email" />
                                            <div class="form-notch">

                                                <div class="form-notch-middle"
                                                    style="padding-top: 20px; font-size: 10px;">
                                                    <ErrorMessage name="email" class="alert alert-danger" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div data-mdb-input-init="" class="form-outline flex-fill mb-0"
                                        data-mdb-input-initialized="true">
                                        <label class="form-label" for="form3Example1c"
                                            style="margin-right: 20px;">Password</label>
                                        <Field type="password" name="password" required placeholder="password" />
                                        <div class="form-notch">

                                            <div class="form-notch-middle" style="padding-top: 20px; font-size: 10px;">
                                                <ErrorMessage name="email" class="alert alert-danger" />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">

                                        <div data-mdb-input-init="" class="form-outline flex-fill mb-0"
                                            data-mdb-input-initialized="true">
                                            <label class="form-label" for="form3Example4c"
                                                style="margin-right: 20px;">Upload File</label>
                                            <input type="file" @change="onFileChange" ref="fileUpload" multiple />

                                            <div class="form-notch">
                                                <div class="form-notch-middle"
                                                    style="padding-top: 20px; font-size: 10px;">
                                                    <ErrorMessage name="file" class="alert alert-danger" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" data-mdb-button-init="" data-mdb-ripple-init=""
                                            class="btn btn-primary btn-lg"
                                            data-mdb-button-initialized="true">Register</button>
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="assets/img/signup.webp" class="img-fluid" alt="Sample image">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            selectedFile: null,
            validExtensions: ['jpg', 'jpeg', 'png', 'gif'],
            maxSize: 2 * 1024 * 1024, // 2 MB,
            isEmail: yup.string().required().email(),
        };
    },
    methods: {
        onFileChange(event) {

            //console.log("g")
            const file = event.target.files[0];
            if (file) {
                const fileExtension = file.name.split('.').pop().toLowerCase();
                if (!this.validExtensions.includes(fileExtension)) {
                    alert("Invalid file type. Only jpg, jpeg, png, and gif files are allowed.");
                    this.selectedFile = null;
                    return;
                }
                if (file.size > this.maxSize) {
                    alert("File size exceeds the 2 MB limit.");
                    this.selectedFile = null;
                    return;
                }
                this.selectedFile = file;
            }
        },
        async uploadFile() {
            // if (!this.selectedFile) {
            //     alert("Please select a valid file first!");
            //     return;
            // }`
            // 
            // console.log(this.selectedFile)

            // Create a FormData instance
            const formData = new FormData();
            formData.append('file', this.selectedFile);

            // Make an API request to upload the file using Axios
            try {
                const response = await axios.post('http://172.23.128.93:3000/upload-single', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(response.data)
            } catch (error) {
                console.error('Error uploading file:', error);
            }

        }
    }
};
</script>
