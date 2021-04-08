<template>
  <div>
    <div class="pt-1">
      <h1>{{ Header }}</h1>
      <p class="header">
        &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatem aut ratione libero vero provident animi sed deleniti labore
        esse, possimus inventore minima repellendus sunt. Nihil, delectus autem
        veritatis quasi aperiam dolore nemo quod eum saepe voluptate at possimus
        quo fuga amet esse deserunt suscipit, temporibus molestiae beatae natus
        quaerat provident sed exercitationem? Sequi ipsum provident iste, itaque
        totam, natus amet voluptatum accusantium est non sapiente quis. Nisi
        illum, ipsum vel animi vitae voluptatem, nulla ipsa reprehenderit
        adipisci aut odit eius voluptate delectus! Laborum repellat perferendis,
        officiis tenetur, et nobis sint pariatur nulla error nam adipisci alias
        sapiente minus iure repellendus.
      </p>
    </div>
    <div class="pt-2">
      <div id="aboutme" class="about-me">
        <h2>
          <a id="aboutmehash" href="/#aboutme">#</a>
          About Me
        </h2>
        <p class="about-me-text">
          &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dolorum animi modi neque culpa dignissimos, nam laboriosam quam
          delectus, et, perferendis at ipsum voluptates nesciunt! Iure, quod
          dolores pariatur fugiat odio laudantium eveniet quae quas repudiandae
          nulla nisi, mollitia aliquam suscipit ipsa nostrum consectetur neque
          ullam ut quos cupiditate laborum nemo.
        </p>
      </div>

      <div id="skills" class="skills">
        <h2>
          <a href="/#skills">#</a>
          My Skills
        </h2>
        <ul class="skills-list">
          <ul class="skills-list-item language">
            Programming Languages
            <li>C++</li>
            <li>Javascript</li>
            <li>Python</li>
          </ul>
          <ul class="skills-list-item frontend">
            Frontend
            <li>HTMl</li>
            <li>CSS</li>
            <li>Js</li>
          </ul>
          <ul class="skills-list-item jsframeworks">
            Javascript Frameworks
            <li>Vue</li>
            <li>React</li>
          </ul>
          <ul class="skills-list-item hosting">
            Hosting
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Firebase Hosting</li>
            <li>Github Pages</li>
            <li>000Webhost</li>
          </ul>
          <ul class="skills-list-item cloud">
            Cloud
            <li>GCloud</li>
            <li>Firebase</li>
          </ul>
          <ul class="skills-list-item other">
            Other
            <li>Git and Github</li>
            <li>Auth0 (Authentication)</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  data() {
    return {
      Header: "Hi I'm Satvik Gaikwad",
    };
  },
};
</script>

<style scoped>
.pt-1 {
  margin: 5px;
  padding: 10px 10px;
  border: 3px solid springgreen;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    rgba(5, 12, 101, 1) 4%,
    rgba(19, 54, 140, 1) 38%,
    rgb(37, 89, 148) 73%,
    rgb(30, 85, 136) 93%
  );
}
h1 {
  font-family: fantasy;
  color: yellowgreen;
  letter-spacing: 2px;
  font-size: 50px;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  display: inline;
}
.header {
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    rgba(250, 205, 40, 1) 4%,
    rgb(224, 50, 26) 93%
  );
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  font-weight: 550;
  font-family: serif;
}
@media screen and (max-width: 600px) {
  h1{
    font-weight: 500;
    font-size: 30px;
  }
  .header {
    font-size: 18px;
  }
}
</style>
<style scoped>
.pt-2 {
  margin: 0px 5px;
}
h2 {
  font: 30px "Big Shoulders Stencil Display";
  background-color: #6461a0;
  border-radius: 6px 6px 0px 0px;
}
.about-me {
  border: 3px solid springgreen;
  border-radius: 10px;
}
.about-me h2 {
  padding: 5px 10px;
}
.about-me-text {
  font: 400 22px serif;
  text-align: justify;
  text-justify: inter-word;
  background-color: #9586a2;
  border-radius: 0px 0px 6px 6px;
  padding: 0px 10px 5px 10px;
}
</style> 

<style scoped>
.skills {
  font: 30px "Big Shoulders Stencil Display";
  border: 3px solid springgreen;
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px 10px;
  background: linear-gradient(
    180deg,
    #6461a0 6%,
    #9586a2 6% 21%,
    #9a8ba8 21% 35%,
    #a396b0 35% 47%,
    #aba0b7 45% 68%,
    #b3a9be 68% 79%,
    #bab1c4 79% 100%
  );
}
.skills-list-item {
  margin: 5px 0px 5px 10px;
  font-weight: 700;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 22px;
}
.skills-list-item::before {
  content: "\21A0";
}
li {
  margin-left: 45px;
  font-weight: normal;
  font-family: "Fira Code", cursive;
  font-size: 0.85em;
  list-style: disc;
  letter-spacing: -0.5px;
}
</style>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
<style scoped>
@media screen and (max-width: 600px) {
  .pt-1 {
    margin: 5px 2px;
  }
  .pt-2 {
    margin: 5px 2px;
  }
}
</style>