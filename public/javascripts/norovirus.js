var List = {
   
  setup: function() {
	
	$(".user").each( function() {
	  var user = $(this);
	  user.click( function() {
		if (user.hasClass("active")){
		  List.contractAll();
		}
		else{
		  if (List.contractAll()) List.expand(user);
		}
	  });
	});
	
  },
   
  expand: function(user) {
	user.addClass("active").find(".story").removeClass("hidden");
  },

  contractAll: function() {
    $(".user").each( function() {
	  var user = $(this);
	  user.removeClass("active").find(".story").addClass("hidden");
	});
	return true;
  }
	
}

List.setup();