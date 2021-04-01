<template>
  <div>
    <div class="body-txt">
      <h1 >{{ Header }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut
        ratione libero vero provident animi sed deleniti labore esse, possimus
        inventore minima repellendus sunt. Nihil, delectus autem veritatis quasi
        aperiam dolore nemo quod eum saepe voluptate at possimus quo fuga amet
        esse deserunt suscipit, temporibus molestiae beatae natus quaerat
        provident sed exercitationem? Sequi ipsum provident iste, itaque totam,
        natus amet voluptatum accusantium est non sapiente quis. Nisi illum,
        ipsum vel animi vitae voluptatem, nulla ipsa reprehenderit adipisci aut
        odit eius voluptate delectus! Laborum repellat perferendis, officiis
        tenetur, et nobis sint pariatur nulla error nam adipisci alias sapiente
        minus iure repellendus.
      </p>
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
.body-txt {
  margin: 0px 10px;
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
h1:hover{
  text-decoration-style: inherit;
}
p {
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  background-color: red;
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
  p {
    font-size: 12px;
  }
}
</style>