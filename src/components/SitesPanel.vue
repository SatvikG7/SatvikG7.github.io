<template>
  <div class="panel">
    <Sites />
  </div>
</template>

<script>
import Sites from "./Sites";
export default {
  name: "SitesPanel",
  components: {
    Sites,
  },
  
};
</script>

<style>
.panel {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  margin-top: 20px;
}

@media screen and (max-width: 1080px) {
  .panel {
    grid-template-columns: auto auto;
  }
}
@media screen and (max-width: 600px) {
  .panel {
    grid-template-columns: auto;
    margin-top: -10px;
  }
}
</style>
