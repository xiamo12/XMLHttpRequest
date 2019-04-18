# XMLHttpRequest
XMLHttpRequest学习过程实例代码。  
1、ajax：异步加载页面内容的技术;  
2、ajax的核心是XMLHttpRequest对象;  
3、创建站点（将文件夹拖到sublime里，用sublime里的SublimeServer->Start SublimeServer）  
--> 创建服务器(xammp --> general-start --> Services-Start All --> network-Enable   
--> Volumes-Mount --> 将文件夹拖到访达的位置 --> 192.168.64.2 --> lampp --> htdocs文件夹里面。)  
4、注意：在使用POST方法发送请求时，在open()和send()之间需要设置请求头的信息：request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  
5、POST方法的send()方法里需要传递字符串参数。  
6、可以定义该参数，例如：  
    request.open('POST','serverce.php',true);
    var data = 'number=' + document.getElementById('').value + ‘&name=’ + document.getElementById('').value + '&sex=' + document.getElementById('').value  
    request.send(data)
