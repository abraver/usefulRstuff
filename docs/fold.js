$(document).ready(function() {


$chunks = $('.fold');

// For each chunk...
$chunks.each(function () {
  
    // Wrap source code into a group
    if ($(this).hasClass("s")) {
      console.log("SOURCE");
      if($(this).hasClass("g")) {
          this_input_group = $(this).find("div.sourceCode");
          this_input_group.wrapAll("<div class = 'ab_grouped_source collapse' />");
        } else {
          this_input = $(this).find("div.sourceCode");
          this_input.wrap("<div class = 'ab_source collapse' />");
        }
    }
    // Wrap output into a group
    if ($(this).hasClass("o")) {
      if ($(this).hasClass("g")) {
          this_output_group = $(this).find("div.cell-output, div.cell-output-display");
          this_output_group.wrapAll("<div class = 'ab_grouped_output collapse' />");
        } else {
          this_output = $(this).find("div.cell-output, div.cell-output-display");
          this_output.after("<br>");
          this_output.wrap("<div class = 'ab_output collapse' />");
        }
    } // end for output

}); // end each chunk


 $('.ab_grouped_source, .ab_source').each(function(){
  $(this).before(
      '<button class="btn btn-outline-secondary btn-sm source_collapser" \
        type="button"> \
        Toggle code \
        </button>'
    );
 });
 
 $('.ab_grouped_output, .ab_output').each(function(){
  $(this).before(
      '<button class="btn btn-outline-secondary btn-sm output_collapser" \
        type="button"> \
        Toggle output \
        </button>'
    );
 });

  
    $(".source_collapser").click(function() {
      $(this).next("div.ab_grouped_source, div.ab_source").toggle("collapse");
    });

    $(".output_collapser").click(function() {
      $(this).next("div.ab_grouped_output, div.ab_output").toggle("collapse");
    });

    // console.log($(this).find(".ab_grouped_output"));






}); //end document