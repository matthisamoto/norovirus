var List = {
   
  setup: function() {
	
	var jsp_settings = {
	  maintainPosition: true,
	  stickToBottom: true,
	  animateScroll: true,
	  animateDuration: 200,
	  animateEase: "swing",
	  verticalDragMinHeight: 35,
	  verticalDragMaxHeight: 150
	}
	
	if( List.apply() ) {
	  List.sp = $('#user_list').jScrollPane(jsp_settings);
	  List.pane = List.sp.data('jsp');
    }

    $(window).resize(function() {
	  List.pane.reinitialise();
	});
	
	$('form').die().live('submit', function(e) {
	  if( $('.user_name').val().length > 0 && $('.user_location').val().length > 0 && $('.user_story').val().length > 0 ) {
		  
	  } else {
		alert("Please fill out all fields.")
		return false;
	  }
	})
	
  },

  apply: function() {
	$(".user").each( function() {
	  var user = $(this);
	  user.hover( function() {
		List.expand(user);
	  }, function() {
		List.contract(user);
	  });
	});
	return true;
  },
   
  expand: function(user) {
	user.find(".story").removeClass("hidden").hide().show(200,"linear", function() { List.pane.reinitialise(); } );
  },

  contract: function(user) {
    user.find(".story").hide(200, "linear", function() { user.find(".story").addClass("hidden"); List.pane.reinitialise(); } );
  },
	
}

List.setup();