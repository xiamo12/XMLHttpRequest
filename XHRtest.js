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
	/*POST方法向服务器发送信息，需要在open()与send()之间加上setRequestHeader()设置头部信息，
	send()里的字符串内容不能省略*/

	// request.open('GET','XHRtest.txt',true);
	// request.send();
	/*GET方法从服务器获取信息，send()内容可以省略*/
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