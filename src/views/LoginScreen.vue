<template>
    <div class="login-screen">
      <div class="header">
      <div class="logo" @click="goToLandingPage">
        <img   src="/caffeinated-2-1@2x.png" alt="Your Logo" />
      </div>
    </div>
    <div class="back-button" @click="goToLandingPage">
      <img src="/arrow-1.svg" alt="Back" />
    </div>

  <div class="auth">
      <template v-if="!authStore.user">
          <title>Login</title>
          <div style="margin-top: 10px;"></div>

              <h2>Login</h2>
              <div class="form">
              <div class="input-container">
             <label for="user.email">Email</label>
             <input type="text" id="user.email" v-model="user.email" />
              </div>
              <div class="input-container">
             <label for="user.password">Password</label>
              <input type="password" id="user.password" v-model="user.password" />
              </div>

              <button @click="login()">Log in</button>
            </div>
              <br>
              <br>
              <text>Don't have an account? Click this button to sign up!</text>
              <div style="margin-top: 10px;"></div>
              <RouterLink to="/signup"><button>Sign Up</button></RouterLink>
      </template>

      <template v-if="authStore.user">
  <title>Sign out</title>
  <div style="margin-top: 160px;"></div>
  <RouterLink to="/Login"><button @click="logout()">Sign Out</button></RouterLink>
  <div style="margin-top: 50px;"></div>
  <title>Write a review</title>
  <RouterLink to="/db"><button>Add Cafe</button></RouterLink>
  <div style="margin-top: 30px;"></div>
</template>

  </div>
</div>
</template>

<script>
    import { ref } from "vue";
    // import {Router} from "vue-router";
    let input = ref("");

    import { auth } from '../firebaseResources';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { fetchSignInMethodsForEmail, signOut } from 'firebase/auth';
    import { useAuthStore } from '../stores/auth';

    export default{
        data(){
            return{
                user: {
                    email: null,
                    password: null,
                },
                authStore: useAuthStore(),
            }
        },
        mounted(){
                auth.onAuthStateChanged((user) =>{
                    if(user){
                        this.authStore.setUser(user.email);
                    }
                    else{
                        this.authStore.setUser(null);
                    }
                })
            },
        methods:{
          goToLandingPage() {
      window.location.href = "/";
    },
            async login(){
                try{
                    this.notFound = false;
                    this.invalidPswd = false;
                    console.log('logging in...');
                    await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
                    this.authStore.setUser(this.user);
                    console.log('successfully logged in!')
                    this.$router.push("/");
                }
                catch(e){
                    console.error('Error in login', e);
                }
            },
            async logout(){
                try{
                    if(auth.currentUser){
                        console.log('logging out...');
                        await signOut(auth);
                        this.authStore.signOut();
                        console.log('Successfully logged out!')
                    }
                    else{
                        console.log('no user signed in');
                    }
                }
                catch(err){
                    console.log('error logging out');
                }
            },
        }
    }
</script>




<style scoped>
.login-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #fff4e6;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-jost);
  padding-top: 0px; /* Add padding to the top for spacing */
}

/* Header styling */
.header {
  text-align: center;
  width: 100%;
  padding: 10px 0;
  background-color: #854442;
}

/* Logo styling */
.logo img {
  max-width: 170px; 
  cursor: pointer; /* Making logo clickable */
}

.back-button {
  position: absolute;
  top: 40px;
  left: 50px;
  cursor: pointer;
  width: 30px; /* Reduce the width */
  height: 30px; /* Reduce the height */
}

.form {
  background-color: #fbf5f2;
  padding: 75px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 70px; /* Add margin to create space between header and form */
}

.input-container {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #854442;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #582927;
}
</style>



<!-- <script>
import { auth } from '../firebaseResources';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      email: null,
      password: null,

      userNotFound: false,
      invalidPassword: false,

      userLoggedIn: false,
    };
  },
  mounted() {
    // Check if the user is already logged in
    const user = auth.currentUser;
    if (user != null) {
      this.userLoggedIn = true;
    }
  },
  methods: {
    async login() {
      try {
        // Reset error messages
        this.userNotFound = false;
        this.invalidPassword = false;

        // Attempt to sign in using the provided email and password
        await signInWithEmailAndPassword(auth, this.email, this.password);

        // Mark that the user is now logged in
        this.userLoggedIn = true;
      } catch (err) {
        if (err.code) {
          // Handle specific authentication error codes
          if (err.code === 'auth/wrong-password') {
            console.error('Error in login, wrong password');
            this.invalidPassword = true;
          } else if (err.code === 'auth/user-not-found') {
            console.error('Error in login, user not found');
            this.userNotFound = true;
          }
        } else {
          // Log other errors to the console
          console.error('Error in login', err);
        }
      }
    },
    async createUser() {
      try {
        this.userNotFound = false;
        this.invalidPassword = false;

        if (this.password !== null && this.password.length < 6) {
          this.invalidPassword = true;
          return;
        }

        // Create a new user account using the provided email and password
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        
        // Mark that the user is now logged in
        this.userLoggedIn = true;

        // Clear input fields after successful user creation
        this.email = null;
        this.password = null;
      } catch (err) {
        console.error('Error in createUser', err);
      }
    },
    async signOut() {
      try {
        // Check if a user is signed in
        if (auth.currentUser) {
          // Sign out the user
          await signOut(auth);

          // Mark that the user is now logged out
          this.userLoggedIn = false;
        } else {
          console.warn('No user signed in');
        }
      } catch (err) {
        console.error('Error in signOut', err);
      }
    }
  }
};
</script> -->