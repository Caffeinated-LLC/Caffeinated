<template>
  <div class="auth">
      <template v-if="!authStore.user">
          <title>Login</title>

              <h2>Login</h2>
              <input type="text" v-model="user.email" placeholder="Email"/>
              <input type="password" v-model="user.password" placeholder="Password"/>
              <button @click="login()">Log in</button>
              <br>
              <br>
              <h3>Don't have an account? Click this button to sign up!</h3>
              <RouterLink to="/Signup"><button>Sign Up</button></RouterLink>
      </template>

      <template v-if="authStore.user">
          <title>Sign out</title>
              <RouterLink to="/Login"><button @click="logout()">Sign Out</button></RouterLink>
      </template>
  </div>
</template>

<script>
    import { ref } from "vue";
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
            async login(){
                try{
                    this.notFound = false;
                    this.invalidPswd = false;
                    console.log('logging in...');
                    await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
                    this.authStore.setUser(this.user);
                    console.log('successfully logged in!')
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
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
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