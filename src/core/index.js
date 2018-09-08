"use strict"
export default class NSSConsole {
  static colors = ['#b5cdf1', '#f8674f', '#a7cd79', '#c9a0dc', '#ffef00', '#fb9912']
  static colorsCurrentIndex = 0
  static getBox (width, height) {
    return {
      string: '+',
      style: 'font-size: 1px; padding: ' + Math.floor(height / 2) + 'px ' + Math.floor(width / 2) + 'px; line-height: ' + height + 'px;'
    }
  }
  static message (message, color = undefined, invertColor = false) {
    let colorBase = '#030307'
    if (color === undefined) {
      color = NSSConsole.colors[NSSConsole.colorsCurrentIndex]
      NSSConsole.colorsCurrentIndex++
      if (NSSConsole.colorsCurrentIndex >= NSSConsole.colors.length) {
        NSSConsole.colorsCurrentIndex = 0
      }
    }
    if (invertColor) {
      let temp = color
      color = colorBase
      colorBase = temp
    }
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      let args = [
        '%c %c ' + message + ' %c %c',
        'padding: 1px;border-radius: 3px 0 0 3px;background: ' + color,
        'padding: 1px; color: ' + color + '; background: ' + colorBase + ';',
        'padding: 1px;border-radius: 0 3px 3px 0;background: ' + color,
        'background: ' + colorBase + ';'
      ]
      console.log.apply(console, args)
    } else {
      console.log(message)
    }
  }
  static image (url, scale) {
    scale = scale || 1
    return new Promise((resolve, reject) => {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
          var img = new Image()
          img.onload = function () {
            var dim = NSSConsole.getBox(this.width * scale, this.height / 2 * scale)
            console.log('%c' + dim.string, dim.style + 'background: url(' + url + ') no-repeat; background-size: ' + (this.width * scale) + 'px ' + (this.height * scale) + 'px; color: transparent;')
            resolve()
          }
          img.src = url
        } else {
          console.log('failed to show this image: ' + url)
          resolve()
        }
      })
  }
  static log (){
    console.log(Array.prototype.slice.call(arguments))
  }

}