//for next question...

var qn=1;
function nextt()
{
var fid=document.getElementById('q'+qn);
fid.style.display="none";
qn++;
if(qn>5)
{
	alert("no more questions...");
}
else
{
	var qu=document.getElementById('q'+qn);
	fid.style.display="block";
}

}

