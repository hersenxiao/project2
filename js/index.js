function addListener(element, type, callback) {
		    if (element.addEventListener) {
		        element.addEventListener(type, callback);
		    } else if (element.attachEvent) {
		        element.attachEvent('on' + type, callback);
		    }
		}

		addListener(document, 'DOMContentLoaded', function () {
		    
		    var mq = window.matchMedia("(max-width: 760px)");
		    if (mq.matches) {
		        document.getElementById("menu_list").classList.add("hidden");
		    }
		    
		    addListener(window, 'resize', function () {
		        var width = window.innerWidth ||
		                    document.documentElement.clientWidth ||
		                    document.body.clientWidth;
		        
		        if (width > 760) {
		            document.getElementById("menu_list").classList.remove("hidden");
		        } else {
		            document.getElementById("menu_list").classList.add("hidden");
		        }
		    });
		    
		});