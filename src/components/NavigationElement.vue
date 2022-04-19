<template>
  <div class="header">
    <h1>Coline Peetermans</h1>
    <button>Menu</button>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  h1 {
    font-size: 1.3em;
    font-weight: 600;
  }
  button{
    text-transform: uppercase;
    font-size: 1em;
    background: transparent;
    border: none;
    font-weight: 300;
  }
}
.menu {
  nav {
    li {
      display: inline-block;
      list-style: none;
      margin: 0 10px;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>
