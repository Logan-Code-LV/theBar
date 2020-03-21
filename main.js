$(document).ready(function() {
  var carouselImages = [
    {
      image_url: "./Assets/alcohol-alcoholic-bar-beverage-4784.jpg"
    },
    {
      image_url: "./Assets/assorted-wine-bottles-1283219 (2).jpg"
    },
    {
      image_url: "./Assets/bar-billiards-gambling-game-261043.jpg"
    },
    {
      image_url:
        "./Assets/depth-of-field-photo-of-two-pilsner-glasses-681847.jpg"
    },
    {
      image_url: "./Assets/alcohol-alcoholic-background-beer-301692.jpg"
    }
  ]
  var htmlStr = ""
  carouselImages.forEach(function(item, i) {
    htmlStr += `
       <div id="image${i}" class="pics">
          <div><img src="${item.image_url}" /></div>
           <div class= "prev">&laquo</div>
           <div class= "next">&raquo</div>
       </div>
       `
  })
  $(".section5").html(htmlStr)
  $(".pics:first-child").addClass("current opacity")

  $(".next").on("click", function() {
    var current = $(".current")
      .attr("id")
      .substr(5)
    var nextIndex = Number(current) + 1

    if (nextIndex === carouselImages.length) {
      nextIndex = 0
    }

    $(`#image${current}`).removeClass("current opacity")
    $(`#image${nextIndex}`).addClass("current opacity")
  })
  $(".prev").on("click", function() {
    var current = $(".current")
      .attr("id")
      .substr(5)
    var prevIndex = Number(current) - 1

    if (prevIndex === -1) {
      prevIndex = carouselImages.length - 1
    }

    $(`#image${current}`).removeClass("current opacity")
    $(`#image${prevIndex}`).addClass("current opacity")
  })
})
$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food", function(data) {
    var html = data.appetizers.map(function(item) {
      return `
      <div class="item">
      <p class="itemname">${item.name}</p>
      <p class="itemprice">${item.price}</p>
      <p class="itemdesc">${item.description}</p>
      </div>
      `
    })
    document.querySelector(".appetizer").innerHTML = html

    var html = data.entrees.map(function(item) {
      return `
      <div class="item">
      <p class="itemname">${item.name}</p>
      <p class="itemprice">${item.price}</p>
      <p class="itemdesc">${item.description}</p>
      </div>
      `
    })
    document.querySelector(".entrees").innerHTML = html

    var html = data.desserts.map(function(item) {
      return `
      <div class="item">
      <p class="itemname">${item.name}</p>
      <p class="itemprice">${item.price}</p>
      <p class="itemdesc">${item.description}</p>
      </div>
      `
    })
    document.querySelector(".dessert").innerHTML = html
  })
})
