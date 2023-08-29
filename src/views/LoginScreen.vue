<!-- <template>
  <div class="login-screen">
    <div class="header">
      <router-link to="/landing">
        <div class="logo">
          <img src="/logo.png" alt="Your Logo" />
        </div>
      </router-link>
    </div>
    <div class="back-button" @click="goBack">
      <img src="/arrow.svg" alt="Back" />
    </div>
    <div class="form">
      <div class="input-container">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      
      <div class="input-container">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button class="sign-in-button" @click="signIn">Sign in</button>
      <div style="margin-top: 20px;"></div>
      <button class="create-account-button" @click="createAccount">Create Account</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    goBack() {
      // Implement logic to go back to the previous page
    },
    async signIn() {
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
    },
    createAccount() {
      // Implement logic to create an account
    },
  };
</script>
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
</script> -->
<!-- <style scoped>
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
  padding-top: 0px; 
}

/* Header styling */
.header {
  text-align: center;
  width: 100%;
  padding: -10px 0; 
  background-color: #854442; 
}

/* Logo styling */
.logo img {
  max-width: 150px; 
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.form {
  background-color: #fbf5f2;
  padding: 75px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
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
</style> --> 

<template>
  <div class="login-screen">
    <!-- Logo area -->
    <div class="header">
      <div class="logo" @click="goToLandingPage">
        <img src="/logo.png" alt="Your Logo" />
      </div>
    </div>
    <div class="back-button" @click="goToLandingPage">
      <img src="/arrow.svg" alt="Back" />
    </div>
    <div class="form">
      <div class="input-container">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      
      <div class="input-container">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button class="sign-in-button" @click="signIn">Sign in</button>
      <div style="margin-top: 10px;"></div>
      <router-link to="/create-account">
        <button class="create-account-button">Create Account</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    goToLandingPage() {
      // Implement the logic to navigate to the landing page
      // For now, you can use window.location.href or your router logic
      // Example using window.location.href:
      window.location.href = "/landing-page";
    },
    signIn() {
      // Implement the logic to sign in
      // You can use the provided login method here
      this.login();
    },
  },
};
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
  padding: -10px 0;
  background-color: #854442;
}

/* Logo styling */
.logo img {
  max-width: 150px; /* Adjust the max width as needed */
  cursor: pointer; /* Make the logo clickable */
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
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
