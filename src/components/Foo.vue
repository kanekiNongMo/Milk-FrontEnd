<template>
  <div id="foo">
    <img src="../assets/images/logo2.png">
    <br/>
    {{username}}
  </div>
</template>

<script>
export default {
  name: "foo",
  data() {
    return {};
  },
  methods: {},
  computed:{
    username: function(){
      return this.$store.getters.getUsername
    }
  }
};
</script>

<style lang="scss">
#foo {
  text-align: center;
  margin-top: 60px;
}
</style>
