<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          
        </div>
        <div class="column is-5">
          
        </div>
        <div class="column is-4">
          
        </div>
      </div>

      <div class="columns">
        <div class="column center">
          <small>
            <svg viewBox="0 0 512 512" class="icon-code">
              <g>
                <path d="M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112   c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029   c9.371,9.373,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z"/>
                <path d="M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112   c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029   c-9.371,9.373-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z"/>
              </g>
            </svg>
            &nbsp;with&nbsp;
            <svg viewBox="0 0 512 512" class="icon-heart">
              <g>
                <path d="M429.9,95.6c-40.4-42.1-106-42.1-146.4,0L256,124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4,0c-45.5,47.3-45.5,124.1,0,171.4   L256,448l173.9-181C475.4,219.7,475.4,142.9,429.9,95.6z"/>
              </g>
            </svg> by Irfan Maulana
          </small>
          <p>
            <a href="https://bulma.io/made-with-bulma/">
              <img src="https://bulma.io/images/made-with-bulma.png" 
              alt="Made with Bulma" 
              width="128" 
              height="24">
            </a>
          </p>
          <small>Copyright &copy; 2017</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-section"
};
</script>

<style scoped>
.footer {
  background-color: #fff;
  padding: 2em 1.5em 0;
}
.icon-code {
  height: 16px;
  vertical-align: middle;
  color: red;
  fill: currentColor;
}
.icon-heart {
  height: 16px;
  vertical-align: middle;
  color: red;
  fill: currentColor;
}
.center {
  text-align: center;
}
</style>