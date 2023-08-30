<template>
    <div class="signup-screen">
      <!-- Logo area -->
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
        <!-- <router-link to="/create-account">
          <button class="create-account-button">Create Account</button>
        </router-link> -->
      </div>
    </div>
  </template>