<template>
  <nav id="nav" class="nav">
    <div class="grid">
      <div id="logo-p" class="item">
        <span id="home" @click="expand">&#9776;</span>
        <span id="close" @click="expand">&bigotimes;</span>
        <router-link to="/" class="nav-link name">
          <span id="logo">Satvik</span>
        </router-link>
      </div>
      <router-link class="nav-link" to="/projects">
        <div class="item">
          Projects
        </div>
      </router-link>
      <router-link class="nav-link" to="/gallery">
        <div class="item">
          Gallery
        </div>
      </router-link>
      <router-link class="nav-link" to="/contact">
        <div class="item">
          Contact Me
        </div>
      </router-link>
      <div class="item hidden"></div>
      <div class="item hidden">
        <a class="nav-link" href="#"><span>&#128269;</span></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    expand() {
      if (mediaQuery.matches && i === 0) {
        document.getElementById("nav").style.maxHeight;
        document.getElementById("nav").style.overflow = "visible";
        document.getElementById("nav").style.marginBottom = "160px";
        document.getElementById("close").style = "display:block;";
        document.getElementById("home").style = "display:none;";
        i = 1;
      } else if (mediaQuery.matches && i === 1) {
        document.getElementById("nav").style.Height = "50px";
        document.getElementById("nav").style.overflow = "hidden";
        document.getElementById("nav").style.marginBottom = "10px";
        document.getElementById("home").style = "display:block;";
        document.getElementById("close").style = "display:none;";
        i = 0;
      }
    },
  },
};
var i = 0;
const mediaQuery = window.matchMedia("(max-width: 600px)");
// window.onload = () => {
//   var element = document.getElementById("home");
//   if (mediaQuery.matches) {
//     element.classList.add("fas", "fa-bars");
//     document.getElementById("logo").innerHTML = "SatvikG7";
//   } else {
//     element.style.display = "none";
//     document.getElementById("logo").innerHTML = "SatvikG7";
//   }
// };
window.onload = () => {
  if (mediaQuery.matches) {
    document.getElementById("close").style = "display:none;";
  }
};
</script>

<style scoped>
nav {
  display: block;
  position: static;
  top: 0px;
  margin-bottom: 5px;
  user-select: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, auto);
  column-gap: 0px;
  text-align: center;
  border-radius: 15px;
}
.item{
  background-color: #0b1d42;
  position: relative;
}
.item:not(:nth-child(6)) {
  border-right: 3px solid navy;
}
.item:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
}
.item:hover:not(:nth-child(5), :nth-child(6))::after {
  width: 100%;
  border: 1px solid khaki;
  transition: width 0.5s linear;
}
.nav-link {
  text-decoration: none;
  color: black;
  font-size: 28px;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 50px;
  align-items: center;
  color: khaki;
  padding: 0px 0px;
}
.hidden:hover {
  background-color: #0b1d42;
}
#logo {
  padding: 0px 30px;
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 30px;
}
@media screen and (max-width: 1080px) {
  .item .nav-link {
    font-size: 24;
  }
}
@media screen and (min-width: 600px) {
  #home {
    display: none;
  }
  #close {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  nav {
    display: block;
    width: 100%;
    position: static;
    height: 50px;
    overflow: hidden;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7);
    grid-row-gap: 1px;
  }
  .hidden {
    display: none;
  }
  .item .nav-link {
    line-height: 35px;
    font-size: 18px;
    float: left;
    margin-left: 10px;
    color: khaki;
    background-color: transparent;
  }
  .name {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50px; 
  }
  #home {
    position: absolute;
    left: 5px;
    top: 5px;
    bottom: 0px;
    font-size: 30px;
    font-weight: 800;
    color: khaki;
  }
  #close {
    position: absolute;
    left: 5px;
    top: 5px;
    bottom: 0px;
    font-size: 30px;
    font-weight: 800;
    color: khaki;
  }
}
</style>