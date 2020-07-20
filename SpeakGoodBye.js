(
	function(window){
		var ByeSpeaker=new Object();
		var speakword="GoodBye";
		ByeSpeaker.speak=function(name){
			console.log(speakword+" "+name);
		};
		window.ByeSpeaker=ByeSpeaker;
		}
		// var speakbye=function(name){
		// 	console.log("bye "+name);
		// }
		// window.speakbye=speakbye;
	)(window);
