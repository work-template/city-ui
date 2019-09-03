require ('./index.css')
import test from './img/test.png'
import {say} from './js/feature.js'
import print from './js/print.js'
import $ from 'jquery'
say()
print('666')
document.querySelector('#app').innerHTML = '222'
console.log($('#app').text())
var img = new Image()
img.src = test
document.body.appendChild(img)
document.querySelector('#app').innerHTML = _.join('aa','bb')
