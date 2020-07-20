(
	function(){
		var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(name in names){
		var first=names[name].charAt(0).toLowerCase();
		if(first==="j"){
			// ByeSpeaker.speak(names[name]);
			ByeSpeaker.speak(names[name]);
		}
		else{
			// helloSpeaker.speak(names[name]);
			helloSpeaker.speak(names[name]);
	}
		}
})();