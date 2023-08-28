<template>
  <div :class="$style.LoginScreen">
    <div :class="$style.registerlogInWrapper">
      <div :class="$style.registerlogIn">REGISTER/LOG-IN</div>
    </div>
    <img :class="$style.caffeinated31" alt="" src="/caffeinated-3-1@2x.png" />
    <div :class="$style.letsGetCaffeinated">Let’s get caffeinated.</div>
    <div :class="$style.LoginScreenChild" />
    <img
      :class="$style.caffeinated21"
      alt=""
      src="/caffeinated-2-1@2x.png"
      @click="onCaffEINATED21Click"
    />
    <img :class="$style.icon" alt="" src="/3-1@2x.png" />
    <div :class="$style.backButton" @click="onBackButtonContainerClick">
      <div :class="$style.backButtonChild" />
      <img :class="$style.backButtonItem" alt="" src="/arrow-1.svg" />
    </div>
    <div :class="$style.email">Email</div>
    <div :class="$style.password">Password</div>
    <div :class="$style.LoginScreenItem" />
    <div :class="$style.LoginScreenInner" />
    <div :class="$style.rectangleDiv" />
    <div :class="$style.LoginScreenChild1" />
    <div :class="$style.createUser">Create User</div>
    <div :class="$style.logIn">Log in</div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "LoginScreen",
    methods: {
      onCaffEINATED21Click() {
        // Please sync "landing-high" to the project
      },
      onBackButtonContainerClick() {
        // Please sync "landing-high" to the project
      },
    },
  });
</script>
<style module>
  .registerlogIn {
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
    display: inline-block;
    width: 152.38px;
    height: 85px;
  }
  .registerlogInWrapper {
    position: absolute;
    top: 359px;
    left: 551px;
    width: 152.38px;
    height: 85px;
    font-size: 28px;
    color: var(--color-sienna);
  }
  .caffeinated31 {
    position: absolute;
    top: 1030px;
    left: 0px;
    width: 801px;
    height: 601px;
    object-fit: cover;
  }
  .letsGetCaffeinated {
    position: absolute;
    top: 233px;
    left: 426px;
    font-size: 30px;
    font-weight: 300;
    display: inline-block;
    width: 401px;
    height: 42px;
  }
  .LoginScreenChild {
    position: absolute;
    top: 1612px;
    left: 0px;
    background-color: var(--color-sienna);
    width: 1254px;
    height: 122px;
  }
  .caffeinated21 {
    position: absolute;
    top: 0px;
    left: 524px;
    width: 206px;
    height: 206px;
    object-fit: cover;
    cursor: pointer;
  }
  .icon {
    position: absolute;
    top: 426px;
    left: 871px;
    width: 383px;
    height: 366.67px;
    object-fit: cover;
  }
  .backButtonChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 12px;
    background-color: var(--color-sienna);
    width: 114px;
    height: 49px;
  }
  .backButtonItem {
    position: absolute;
    top: 10.3px;
    left: 22.97px;
    width: 66.14px;
    height: 29.46px;
  }
  .backButton {
    position: absolute;
    top: 105px;
    left: 74px;
    width: 114px;
    height: 49px;
    cursor: pointer;
  }
  .email {
    position: absolute;
    top: 531px;
    left: 407px;
    font-family: var(--font-inter);
    text-align: left;
    display: inline-block;
    width: 68px;
    height: 26px;
  }
  .password {
    position: absolute;
    top: 607px;
    left: 405px;
    font-family: var(--font-inter);
    text-align: left;
    display: inline-block;
    width: 106px;
    height: 26px;
  }
  .LoginScreenItem {
    position: absolute;
    top: 522px;
    left: 538px;
    border-radius: var(--br-5xs);
    background-color: var(--color-white);
    width: 270px;
    height: 43px;
  }
  .LoginScreenInner {
    position: absolute;
    top: 598px;
    left: 538px;
    border-radius: var(--br-5xs);
    background-color: var(--color-white);
    width: 270px;
    height: 43px;
  }
  .rectangleDiv {
    position: absolute;
    top: 765px;
    left: 565px;
    border-radius: var(--br-3xs);
    background-color: #3a3a3a;
    width: 146px;
    height: 36px;
  }
  .LoginScreenChild1 {
    position: absolute;
    top: 831px;
    left: 551px;
    border-radius: var(--br-3xs);
    background-color: var(--color-sienna);
    width: 174px;
    height: 36px;
  }
  .createUser {
    position: absolute;
    top: 769px;
    left: 579px;
    font-weight: 500;
    color: var(--color-white);
    display: inline-block;
    width: 117px;
    height: 27px;
  }
  .logIn {
    position: absolute;
    top: 833px;
    left: 579px;
    font-weight: 500;
    color: var(--color-white);
    display: inline-block;
    width: 117px;
    height: 27px;
  }
  .LoginScreen {
    position: relative;
    background-color: #fff4e6;
    width: 100%;
    height: 1734px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--font-jost);
  }
</style>
