function shortcut(s1, s2) {
  let a="";
	if(s1=='' || s2==''){
		
		return 10;
	}
	return s1.charAt(0)+s2.charAt(0);
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
