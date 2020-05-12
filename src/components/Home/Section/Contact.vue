<template>
  <div id="contact-section" class="d-flex justify-content-center">
    <router-link
      :to="{name: 'About'}"
      class="seemore text-center"
      tag="a">
      WANT TO KNOW US MORE
    </router-link>
  </div>
</template>

<style scoped>
.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

#contact-section {
  background: #2D69A3;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 90;
}

.seemore {
  margin: 25px auto;
  display: block;
  width: 300px;
  align-self: center;
  padding: 13px 20px;
  color: white;
  border: white solid 2px;
  border-radius: 15px;
  font-family: 'YoungSerif';
}
</style>
