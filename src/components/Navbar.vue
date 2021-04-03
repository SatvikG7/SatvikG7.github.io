<template>
  <nav id="nav" class="nav">
    <div class="grid">
      <div id="logo-p" class="item br1">
        <span id="home" @click="expand">&#9776;</span>
        <span id="close" @click="expand">&bigotimes;</span>
        <router-link to="/" class="nav-link name">
          <span id="logo">Satvik</span>
        </router-link>
      </div>
      <div class="item">
        <router-link class="nav-link" to="/projects">Projects</router-link>
      </div>
      <div class="item">
        <router-link class="nav-link" to="/gallery">Gallery</router-link>
      </div>
      <div class="item">
        <router-link class="nav-link" to="/contact">Contact Me</router-link>
      </div>
      <div class="item hidden"></div>
      <div class="item br2">
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
        document.getElementById("nav").style.marginBottom = "220px";
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
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
  column-gap: 0px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 5px #999090;
}

div.item {
  border-right: 3px solid navy;
  background-color: #0b1d42;
}

.item .nav-link {
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 50px;
  align-items: center;
  color: khaki;
  padding: 8px 0px;
}
.item:hover {
  background-color: #007e94;
}
.hidden:hover {
  background-color: #0b1d42;
}
.br1 {
  border-radius: 0px 0px 0px 15px;
}
.br2 {
  border-radius: 0px 0px 15px 0px;
}
.lorem1 {
  font-size: 35px;
}
.lorem2 {
  font-size: 30px;
}
#logo {
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 30px;
}
@media screen and (max-width: 1080px) {
  .item .nav-link {
    font-size: 20px;
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
    box-shadow: none;
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
  }
  .br1 {
    border-radius: 0px;
  }
  .br2 {
    border-radius: 0px;
    float: right;
  }
  .lorem1 {
    font-size: 20px;
  }
  .lorem2 {
    font-size: 15px;
  }
  #home {
    position: absolute;
    left: 5px;
    top: 0px;
    font-size: 30px;
    font-weight: 800;
    color: khaki;
  }
  #close {
    position: absolute;
    left: 5px;
    top: -2px;
    font-size: 30px;
    font-weight: 800;
    color: khaki;
  }
}
</style>
