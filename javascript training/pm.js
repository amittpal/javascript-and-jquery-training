function demo() {
	var unum=parseInt(document.getElementById('txt').value);
	class primenumber 
	{
		constructor(p) 
		{
			this.num = p;
		}
		prime() 
		{
			var ares=(this.num)/2;
			alert(ares);
			var msg;
			if(ares==0)
			{
			msg="this is not prime number";
			}
			else
			{
			msg="this is a prime number";
			}
			return msg;
		}

	}
	var obj = new primenumber(unum);
	var fres = obj.prime();
	document.getElementById('para').innerHTML = "<h1>" + fres + "</h2>";
}