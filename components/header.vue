<template>
  <div>
    <header role="header" class="site__header header">
      <div class="header__wrapper">
          <div class="header__brand">
              <a href="#">
                  <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana">
              </a>
              <div class="header__title">
                  Irfan Maulana
              </div>
          </div>
          <nav role="nav" class="header__nav">

              <ul class="header__nav--desktop">
                  <li>
                    <nuxt-link :to="'/'" exact>
                      Home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="'/about'" exact>
                      About
                    </nuxt-link>
                  </li>
              </ul>

              <div class="header__nav--mobile">
                  <div class="header__nav-btn" id="menu-toggle">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>

          </nav>

      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
.header {
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.075);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.075);
    box-shadow: 0 1px 2px rgba(0,0,0,.075);
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    background: rgba(255,255,255,.95294);
}
.header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2em;
}
.header__brand img {
    width: 50px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.header__title {
    font-style: italic;
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: .5em;
}
.about__title, .header__title {
    font-family: Lobster,cursive;
}
.header__nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.header__nav ul li {
    display: inline-block;
    margin-right: 1.2em;
}
.header__nav--desktop {
    display: block;
}
.header__nav--mobile {
    display: none;
}
.header__nav-btn {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    position: relative;
    margin: .7em;
    width: 40px;
    height: 20px;
    cursor: pointer;
}
.header__nav-btn span {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -ms-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background: #4d4d4d;
    opacity: 1;
}
.header__nav-btn span:nth-child(1) {
    top: 0;
}
.header__nav-btn span:nth-child(2), .header__nav-btn span:nth-child(3) {
    top: 10px;
}
.header__nav-btn span:nth-child(4) {
    top: 20px;
}
</style>
