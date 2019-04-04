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
    ]
  }
}
)

var gallery = new Vue({
  el: '#gallery',
  methods: { 
    enlargeImg: function () {
      this.isZoomed = true
      console.log(this.isZoomed)
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
          gridArea: '12 / 8 / span 6 / span 5'
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
        src: './resources/img/postcards.jpg',
        type: 'image',
        caption: 'Red Glasses Europe Travel Postcards',
        style: {
          gridArea: '6 / 10 / span 4 / span 6 '
        },
        to:''
      },
      {
        src: './resources/img/edinburgh.jpg',
        type: 'image',
        caption: 'Edinburgh, Scotland',
        style: {
          gridArea: ' 14 / 3 / span 7 / span 3 '
        }
      },
      {
        src: './resources/g2t/screenview.mov',
        type: 'video',
        caption: 'Citrix GoToTraining',
        style: {
          gridArea: ' 22 / 5 / span 4 / span 5 '
        },
        to:'./gototraining.html'
      },
      {
        src: './resources/img/drawingwords.png',
        type: 'image',
        caption: 'Drawing words with Annie',
        style: {
          gridArea: ' 20 / 11 / span 3 / span 4'
        },
        to:''
      },
    ]
  }
}
)