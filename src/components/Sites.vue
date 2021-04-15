<template>
  <div
    class="site-tile"
    :key="site.id"
    v-for="site in reversedSitesArray"
    v-bind:style="{ backgroundImage: `url( ${site.BgImg})` }"
  >
    <span class="site-title">
      <span class="site-name">
        {{ site.SiteName }}
      </span>
      <span class="link">
        <a
          draggable="false"
          class="site-link"
          target="_blank"
          v-bind:href="site.Link"
        >
          <span class="fas fa-arrow-circle-right fa-2x"></span>
        </a>
      </span>
    </span>
    <span class="description">
      <p>
        {{ site.Description }}
      </p>
    </span>
    <span class="github">
      <p v-if="site.NoRepo">No Repo for this project</p>
      <a draggable="false" v-else v-bind:href="site.Source"
        ><i class="fab fa-github fa-2x"></i
      ></a>
    </span>
  </div>
</template>

<script>
export default {
  name: "Sites",
  data() {
    return {
      SitesArray: [],
    };
  },
  created() {
    this.SitesArray = [
      {
        id: 1,
        SiteName: "The Chat App",
        Link: "https://www.thechatapp.tk/",
        Description:
          "This is my first Firebase project built using Firebase and Codelab Tutorial",
        NoRepo: false,
        Source: "https://github.com/SatvikG7/The-Chat-App",
        BgImg: require("../assets/img/1.png"),
      },
      {
        id: 2,
        SiteName: "Fullpage Scroll",
        Link: "https://satvikg7.github.io/Fullpage-Scroll/",
        Description:
          "This is a simple website that demonstrates the Javascript code to make SPAs",
        NoRepo: false,
        Source: "https://github.com/SatvikG7/Fullpage-Scroll",
        BgImg: require("../assets/img/2.png"),
      },
      {
        id: 3,
        SiteName: "Pop Out Menu",
        Link: "https://satvikg7.github.io/Pop-out-Menu/",
        Description:
          "Another responsive Element with transition and can be used for Social links",
        NoRepo: false,
        Source: "https://github.com/SatvikG7/Pop-out-menu",
        BgImg: require("../assets/img/3.png"),
      },
      {
        id: 4,
        SiteName: "Switch",
        Link: "https://neumorphic-switch.netlify.app/",
        Description: "Neumorphic Switch element for theme switching",
        NoRepo: false,
        Source: "https://github.com/SatvikG7/Neumorphic-Switch",
        BgImg: require("../assets/img/4.png"),
      },
      {
        id: 5,
        SiteName: "Random Dog image Generator",
        Link: "https://randomdog.netlify.app/",
        Description:
          "This is my first VueJs Site. I took reference from a VueJs Crash Course uploaded on https://www.youtube.com/TraversyMedia",
        NoRepo: true,
        Source: "https://github.com",
        BgImg: require("../assets/img/5.png"),
      },
      {
        id: 6,
        SiteName: "Pencil Loading Animation",
        Link: "https://pencil-loading-animation.satvikg7.repl.co/",
        Description:
          "Single <div> Loading Animation from Youtube --> https://youtu.be/9TFqdS3RnII",
        NoRepo: true,
        Source: "#",
        BgImg: require("../assets/img/6.png"),
      },
    ];
  },
  computed: {
    reversedSitesArray() {
      return this.SitesArray.reverse();
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  display: flex;
  width: 32vw;
  height: 33vh;
  background-color: khaki;
  border-radius: 20px;
  margin: 5px 0px;
  transition: transform 1000ms;
  transition-delay: 50ms;
  -webkit-font-smoothing: subpixel-antialiased;
}
div:hover {
  backface-visibility: hidden;
  box-shadow: 0 0 50px rgb(17 17 17 / 50%);
  transform: rotate(-0.5deg) translateY(-2px) scale(1.02);
}
.site-title {
  display: flex;
}
.site-name {
  position: absolute;
  font-size: 28px;
  font-family: "Big Shoulders Stencil Display", cursive;
  top: 7px;
  left: 15px;
  user-select: none;
  background: linear-gradient(#f7ecec88 30%, #ffffff44 100%);
}
.link {
  position: absolute;
  right: 15px;
  top: 7px;
}
.site-link {
  color: #81f7e5;
}
.description {
  position: absolute;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 400;
  left: 17px;
  top: 50px;
  color: yellow;
  background: linear-gradient(#aaa6a622 30%, #ffffff22 100%);
}
.fa-arrow-circle-right {
  transition: transform 500ms;
}
.fa-arrow-circle-right:hover {
  color: #0bad94;
  transform: scale(1.2);
}

.github {
  position: absolute;
  right: 17px;
  bottom: 10px;
  color: black;
}
.fa-github {
  color: black;
  transition: transform 500ms;

}
.fa-github:hover {
  transform: scale(1.2);
}
@media screen and (max-width: 1080px) {
  div {
    width: 48vw;
    height: 35vh;
  }
  .site-name {
    font-size: 20px;
  }
}
@media screen and (max-width: 600px) {
  div {
    width: 95vw;
    height: 40vh;
  }
  .site-name {
    font-size: 20px;
  }
}
</style>