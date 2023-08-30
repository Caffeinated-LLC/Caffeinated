<template>
    <div class="signup-screen">

      <div class="header">
        <div class="logo" @click="goToLandingPage">
          <img   src="/caffeinated-2-1@2x.png" alt="Your Logo" />
        </div>
      </div>
      <div class="back-button" @click="goToLandingPage">
        <img src="/arrow-1.svg" alt="Back" />
      </div>
      <div class="form">
        <div class="input-container">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
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
        <button class="sign-up-button" @click="signUp">Sign Up</button>
        <div style="margin-top: 10px;"></div>
        <router-link to="/create-account">
          <button class="create-account-button">Create Account</button>
        </router-link>
      </div>
    </div>
</div>
  </template>

<!-- <template>
    <div class="Signup">
      <title>Signup</title>
      <header>Create an account!</header>
        
      <div class="header">
        <div class="logo" @click="goToLandingPage">
          <img   src="/caffeinated-2-1@2x.png" alt="Your Logo" />
        </div>
      </div>
      <div class="back-button" @click="goToLandingPage">
        <img src="/arrow-1.svg" alt="Back" />
      </div>

      <div class="wrapper">
        <input type="text" v-model="user.name" placeholder="Username" />
        <input type="text" v-model="user.email" placeholder="Email" />
        <input type="password" v-model="user.password" placeholder="Password" />
        <RouterLink to="/Login">
          <button @click="createAccount()">Create Account</button>
        </RouterLink>
        <h3>Have an account? Click this button to Log in!</h3>
        <RouterLink to="/Login"><button>Log In </button></RouterLink>
      </div>
    </div>
  </template> -->

<script>
export default {
    data() {
      return {
        user: {
          email: null,
          password: null,
          name: null,
        },
        authStore: useAuthStore(),
      };
    },
    mounted() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.authStore.setUser(user.email);
        } else {
          this.authStore.setUser(null);
        }
      });
    },
    methods: {
      async createAccount() {
        try {
          console.log("creating...");
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            this.user.email,
            this.user.password
          );
          console.log("account created!");
          this.authStore.setUser(this.user);
          const uid = userCredentials.user.uid;
          await setDoc(doc(db, "users", uid), this.user);
          console.log("Current user", auth.currentUser);
        } catch (err) {
          console.error("Couldn't create account", err);
        }
      },
    },
  };
  </script>

<style scoped>

.signup-screen {
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


/* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
</style>
