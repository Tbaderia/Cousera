(
	function(window){
		var helloSpeaker=new Object();
		var speakword="Hello";
		helloSpeaker.speak=function(name){
			console.log(speakword+" "+name);
		};
		window.helloSpeaker=helloSpeaker;
		}
		// var speakhello=function(name){
		// 	console.log("hello "+name);
		// }
		// window.speakhello=speakhello;
	)(window);
