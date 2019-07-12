/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.onload = function() {
    let containerImages = document.querySelector('.container-images');
    let childrenImages = containerImages.children;
    let colorList = document.querySelector('#colorList');
  
    function makeColorPicker() {
      for(let i = 0; i < childrenImages.length; i++) {
        let colorBG = childrenImages[i].getAttribute('productcolor');
        let spanElement = document.createElement('span');
        spanElement.style.backgroundColor = colorBG;
        spanElement.setAttribute('pickcolor', colorBG);
        colorList.appendChild(spanElement);
      }
    }
  
    makeColorPicker();
  
    let spanList = colorList.children;
    for(let i = 0; i < spanList.length; i++) {
      spanList[i].onclick = function() {
        let selfColor = this.getAttribute('pickcolor');
        let theImage = document.querySelector(`img[productcolor='${selfColor}']`);
        for(let index = 0; index < childrenImages.length; index++) {
          childrenImages[index].style.display = "none";
        }
        theImage.style.display = "block";
      }
    }
  }

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',

});


  