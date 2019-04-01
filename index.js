
var app = new Vue({
  el: '#top-nav',
  data: {
    navLabels: [
      { 
        text: 'About',
        link: '' 
      },
      { 
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/annieyezhou/'
      },
      { 
        text: 'Email me',
        link: 'mailto:hello@anniezhou.me'
      }
    ]
  }
}
)

var gallery = new Vue({
  el: '#gallery',
  methods: { 
    enlargeImg: function () {
      this.isZoomed = !this.isZoomed
    }
  },
  data: {
    isZoomed: false,
    gallery: [
      {
        src: './resources/img/learn-touch-hold.mp4',
        type: 'video',
        caption: 'Google Assistant',
        style: {
          gridArea: '13 / 8 / span 6 / span 5'
        },
        to: ''
      },
      {
        src: './resources/img/googlego.jpg',
        type: 'image',
        caption: 'Google Go',
        style: {
          gridArea: '2 / 4 / span 7/ span 4'
        },
        to:'https://play.google.com/store/apps/details?id=com.google.android.apps.searchlite&hl=en_US'
      },
      {
        src: './resources/img/grandcanal-venice.jpg',
        type: 'image',
        caption: 'Grand Canal in Venice',
        style: {
          gridArea: '4 / 11 / span 7 / span 5 '
        },
        to:''
      },
      {
        src: './resources/img/edinburgh.jpg',
        type: 'image',
        caption: 'Edinburgh, Scotland',
        style: {
          gridArea: ' 10 / 3 / span 7 / span 3 '
        }
      },
      {
        src: './resources/img/stpaul.jpg',
        type: 'image',
        caption: 'St Paul\'s Cathedral',
        style: {
          gridArea: ' 20 / 5 / span 8 / span 10 '
        },
        to:''
      },
    ]
  }
}
)