let superheroData= [
  {name: 'Super Man',      phone_number:'925-664-4137',   comic:'DC', img_url:'http://www.badazzmofo.com/wp-content/uploads/2013/05/superman-the-movie-1.jpg'},
  {name: 'Batman',         phone_number: '486-243-5565',  comic:'DC', img_url:'http://cartoonbros.com/batman/batman-4/'},
  {name: 'Green Lantern',   phone_number: '262-913-2673',  comic:'DC', img_url:'http://www.dccomics.com/sites/default/files/HJFLC_Cv1_R3_gallery_57fc3635f2c6a2.45566872.jpg'},
  {name: 'Wonder Woman',    phone_number:'545-436-5225',   comic:'DC', img_url:'http://vignette3.wikia.nocookie.net/dcanimated/images/f/f5/Wonder_Woman.png/revision/latest?cb=20090407084402'},
  {name: 'The Flash',      phone_number: '788-333-6860',   comic:'DC', img_url:'https://teespring-storecontent.s3.amazonaws.com/JaNUYUxSHb7ds6yU0cIysw_store_header_image'},
  {name: 'Captain American', phone_number:'424-752-4030',   comic:'Marvel',   img_url:'https://www.google.com/search?q=super+man&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjYuaCI7dbTAhUDTSYKHQD4CyAQ_AUICigB&biw=1038&bih=696#tbm=isch&q=captain+america&imgrc=Gr8cXRrxHy4CPM'},
]


angular
  .module("superheroApp", [])
  .controller("SuperheroController", [
    SuperheroControllerFunction
  ])

  function SuperheroControllerFunction () {
      this.superheroes =  superheroData
       this.newSuperhero = ''
       this.newPhonenumber = ''
       this.newComic = ''
       this.newImg_url = ''
        this.addSuperhero = function(){
        let superhero= {name: this.newSuperhero, phone_number: this.newPhonenumber, comic:this.newComic, img_url:this.newImg_url}
        this.superheroes.push(superhero)
        this.newSuperhero = ''
      }

    }
