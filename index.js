$(function() {

$("#js-shopping-list-form").on('submit', function(event){
    event.preventDefault();
    const itemEntry = $("#shopping-list-entry").val();
    $("#shopping-list-entry").val('');
    $(".shopping-list").append(
      `<li>
        <span class="shopping-item">${itemEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

    });

$("body").on("click", ".shopping-item-toggle", function(event){
  $(this).closest('li').find('.shopping-item')
  .toggleClass("shopping-item__checked");
});

$("body").on("click", ".shopping-item-delete", function(){
  $(this).closest('li').remove();
});

});
