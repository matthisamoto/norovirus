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
	  var name  = $.trim($('.user_name').val())
	  var loc   = $.trim($('.user_location').val())
	  var story = $.trim($('.user_story').val())
	  if( name.length > 0 && loc.length > 0 && story.length > 0 && name.toLowerCase() != "NAME ( FIRST, LAST INITIAL )".toLowerCase()) {
		if(story.toLowerCase() == "SHARE YOUR STORY\n( IT'S OKAY TO LEAVE STUFF OUT )".toLowerCase()) $('.user_story').val("");
		if(loc.toLowerCase() == "LOCATION ( CITY, STATE )".toLowerCase()) $('.user_location').val("");
	  } else {
		alert("Please fill out all fields.")
		return false;
	  }
	})
	
	$("input[type=text]").each( function() {
	  var elem = $(this)
	  elem.click( function () {
		elem.val("");
		elem.unbind("click");
	  })
	})
	
	$("textarea").each( function() {
	  var elem = $(this)
	  elem.click( function () {
		elem.val("");
		elem.unbind("click");
	  })
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