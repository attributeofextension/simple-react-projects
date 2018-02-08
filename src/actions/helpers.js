export function makeWikipediaURL(str) {
	return "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + customURIEncoding(str);
	
	function customURIEncoding(str) {
		/* re handles three case scenarios 
			- whitepsace -> + 
			- special chars that are not handled by built-in encodeURIComponent() 
			- special chars that are handled by encodeURIComponent() */
		var re = /(\s+)|([`!|'{}\*\(\)\.])|([@#$%^&+=\\:;,<>?\/])/g;  //`!*()|'.{}
	
		return str.replace(re, processRE);
	
		//Passed as callback function in str.replace()
		function processRE(match,p1,p2,p3,p4) {
			if(p1) { return "+"; }
			if(p2) { return convertToUTF8(match); }
			if(p3) { return encodeURIComponent(match);}
  		return match; 
		}
	
		//custom encode URI function use in processRE
		function convertToUTF8(char) {
			var str = "";
			switch(char) {
				case "`": str = "%60";break;
				case "!": str = "%21";break;
				case "*": str = "%2A";break;
				case "(": str = "%28";break;
				case ")": str = "%29";break;
				case "|": str = "%7C";break;
				case "'": str = "%27";break;
				case ".": str = "%2E";break;
				case "{": str = "%7B";break;
				case "}": str = "%7D";break;
			}
			return str;
		}	
	}
}