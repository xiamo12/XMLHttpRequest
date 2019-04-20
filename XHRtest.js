document.getElementById('btn').onclick=function(){
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest;
	}
	else{
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}
	request.open('POST','XHRtest.txt',true);
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	var data = document.getElementById('root').innerHTML;
	request.send(data);

	// request.open('GET','XHRtest.txt',true);
	// request.send();
	request.onreadystatechange=function(){
		if (request.readyState === 4) {
			if (request.status === 200) {
				console.log(request.responseText);
				document.getElementById('root').innerHTML = request.responseText;
			}//request.status->if
			else{
				alert('啊哦，出现一个错误' + request.status);
			}//request.status->else
		}//request.readystate
		else{console.log('there is an error');}
	}//request.onreadystatechange
}//'btn'.onclick函数结束