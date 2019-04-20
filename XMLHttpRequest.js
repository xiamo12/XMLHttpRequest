    var request;
	if (window.XMLHttpRequest) {
		request=new XMLHttpRequest;
	}
	else{
		request=new ObjectXObject('Microsoft.XMLHTTP')
	}
document.getElementById('search').onclick=function(){
	request.open('GET',"server.php?number="+document.getElementById('keyword').value,true);
	request.send();
	request.onreadystatechange=function(){
		if (request.readyState === 4) {
			if (request.status === 200) {document.getElementById('searchResult').innerHTML = request.responseText;}
			else{alert('发生错误:'+request.status);}
		}
	}

}


document.getElementById('save').onclick=function(){
	request.open('POST','server.php',true);
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	data = 'name=' + document.getElementById('staffName').value
		  +'&number=' + document.getElementById('staffNumber').value
		  +'&sex=' + document.getElementById('staffSex').value
		  +'&job=' + document.getElementById('staffJob').value;
	request.send(data);
	request.onreadystatechange=function(){
		if (request.readyState === 4) {
			if (request.status === 200) {document.getElementById('createResult').innerHTML = request.responseText;}
			else{alert('发生错误:'+request.status);}
		}
	}
}