<template>
  <div class="login-screen">
    <div class="header">
      <!-- Logo area -->
      <div class="logo">
        <img src="/caffeinatedLogo.png" alt="Your Logo" />
      </div>
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
      // Implement the logic to go back to the previous page
    },
    signIn() {
      // Implement the logic to sign in
    },
    createAccount() {
      // Implement the logic to create an account
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
  padding-top: 20px; /* Add padding to the top for spacing */
}

/* Header styling */
.header {
  text-align: center;
  width: 100% 0%;
  padding: 10px 55; /* Add padding to create space for the logo */
  background-color: #fbf5f2; /* Adjust background color as needed */
}

/* Logo styling */
.logo img {
  max-width: 150px; /* Adjust the max width as needed */
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.form {
  background-color: #fbf5f2;
  padding: 55px;
  border-radius: 27px;
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
</style>
