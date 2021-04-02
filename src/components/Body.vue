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
          <a href="/#aboutme">#</a>
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
          Skills
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
      Header: "Welcome",
    };
  },
};
</script>

<style scoped>
.pt-1 {
  margin: 5px 10px 5px 10px;
  padding: 10px 10px;
  border: 3px solid springgreen;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    rgba(5, 12, 101, 1) 4%,
    rgba(19, 54, 140, 1) 38%,
    rgba(37, 110, 192, 1) 73%,
    rgba(44, 133, 214, 1) 93%
  );
  user-select: none;
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
h1:hover {
  text-decoration-style: inherit;
}
.header {
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: transparent;
  background-image: linear-gradient(
    135deg,
    rgba(250, 205, 40, 1) 4%,
    rgba(214, 81, 44, 1) 93%
  );
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  font-weight: 900;
  font-family: "Noto Serif", serif;
}
@media screen and (max-width: 600px) {
  .header {
    font-size: 12px;
  }
}
</style>



<style scoped>
.pt-2 {
  margin: 0px 10px;
}
h2 {
  font: 30px "Big Shoulders Stencil Display";
  background-color: #6461A0;
}
.about-me {
  border: 3px solid springgreen;
  border-radius: 10px;
}
.about-me-text {
  font: 400 22px "Noto serif";
  text-align: justify;
  text-justify: inter-word;
  background-color: #9586A2;
}
</style> 

<style scoped>
.skills {
  font: 30px "Big Shoulders Stencil Display";
  border: 3px solid springgreen;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px 10px;
  background: linear-gradient(
    180deg,
    #6461A0 7%,
    #9586A2 7% 21%,
    #9A8BA8 21% 35%,
    #A396B0 35% 47%,
    #ABA0B7 45% 68%,
    #B3A9BE 68% 79%,
    #BAB1C4 79% 100%
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
  font-family: cursive;
  font-size: 0.85em;
  list-style: disc;
}
</style>

<style scoped>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>
<style scoped>
@media screen and (max-width: 600px) {
  .pt-1{
    margin: 5px 2px;
  }
  .pt-2{
    margin: 5px 2px;
  }
}
</style>