$(document).ready(function() {
  $("#add-facts").click(function() {
    $("#new-facts").append('<div class="new-facts">' +
                            '<div class="form-group">' +
                              '<label for="new-feel">feel</label>' +
                              '<input type="text" class="form-control new-feel">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="new-perfect-for">perfect for</label>' +
                              '<input type="text" class="form-control new-perfect-for">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="new-notes">notes</label>' +
                              '<input type="text" class="form-control new-notes">' +
                            '</div>' +
                          '</div>');
});

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var insertedPlaceName = $("input#new-place-name").val();
    var insertedPlaceNeighborhood = $("input#new-place-neighborhood").val();
    var insertedPlaceType = $("input#new-place-type").val();

    var newPlace = { placeName: insertedPlaceName, placeNeighborhood: insertedPlaceNeighborhood, placeType: insertedPlaceType, facts: [] };

    $(".new-facts").each(function() {
      var insertedFeel = $(this).find("input.new-feel").val();
      var insertedPerfectFor = $(this).find("input.new-perfect-for").val();
      var insertedNotes = $(this).find("input.new-notes").val();

      var newFacts = { feel: insertedFeel, perfectFor: insertedPerfectFor, notes: insertedNotes };
      newPlace.facts.push(newFacts);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".place-neighborhood").text(newPlace.placeNeighborhood);
      $(".place-type").text(newPlace.placeType);

      $("ul#facts").text("");
      newPlace.facts.forEach(function(fact) {
        $("ul#facts").append("<li>" + fact.feel + " | " + fact.perfectFor + " | " + fact.notes + "</li>");
      });
    });

    $("input#new-place-name").val("");
    $("input#new-place-neighborhood").val("");
    $("input#new-place-type").val("");
    $("input.new-feel").val("");
    $("input.new-perfect-for").val("");
    $("input.new-notes").val("");
    });
  });
