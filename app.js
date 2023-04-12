const $gifZone = $('#gif-zone');
const $searchBar = $('#search-bar');


function newGIF(res) {
    let results = res.data.length;
    if (results) {
      let randResult = Math.floor(Math.random() * results);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGIF = $("<img>", {
        src: res.data[randResult].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGIF);
      $gifZone.append($newCol);
    }
  }

$('form').on('submit', async function(evt) {
    evt.preventDefault();

    let searchGIF = $searchBar.val();
    $searchBar.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchGIF,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    newGIF(response.data);
});

$('#remove').on('click', function() {
    $gifZone.empty();
})

