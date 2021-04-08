<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -webkit-font-smoothing: subpixel-antialiased;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: #707070;
  border-radius: 16px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
::-webkit-scrollbar-track {
  background: black;
}
body {
  background-color: black;
}
::selection{
  color: black;
  background-color: mediumturquoise;
}
</style>
