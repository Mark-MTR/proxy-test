<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,user-scalable=no" />
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<style>
			body { font-size: 14px; padding: 2% 0 30px; line-height: 1.5; color: #666; font-family: 'Hiragino Sans GB', 'Microsoft YaHei', SimHei, 'Helvetica Neue', Helvetica, Arial, sans-serif; }
			h1, h2 { font-weight: normal; margin: 10px 0; line-height: 1.2; }
			h1 { font-size: 36px; color: #333; }
			h2 { font-size: 16px; }
			i { display: inline-block; vertical-align: middle; }
			strong { font-weight: normal; }
			.mb30 { margin-bottom: 30px; }
			.tac { text-align: center; }
			.b .sp { padding: 0 20px; }
			.b .hr { border-left: 1px dashed #ddd; border-right: 1px dashed #ddd; padding: 0 20px; }
			.fl { float: left; display: inline; }
			.auto { margin-left: auto; margin-right: auto; }
			.fr { float: right; }
			.ms { list-style: none; }
			.db { display: block; }
			.m, .n { display: inline-block; *display: inline; *zoom: 1; vertical-align: top; }
			.n { width: 166px; }
			.n-1 { border-top: 1px solid #4f71f6; border-bottom: 1px solid #4f71f6; height: 6px; margin: 45px 0; position: relative; }
			.n-1 span, .n-1 i { position: absolute; height: 0; width: 0; }
			.n1-1, .n1-1 i { border-top: 4px dashed transparent; border-right: 7px dashed transparent; }
			.n1-1 { top: -9px; right: 0; border-left: 7px solid #4f71f6; border-bottom: 4px solid #4f71f6; }
			.n1-1 i { left: -8px; top: -4px; border-left: 7px solid #fff; border-bottom: 4px solid #fff; }
			.n1-2, .n1-2 i { border-left: 7px dashed transparent; border-bottom: 4px dashed transparent; }
			.n1-2 { top: 6px; left: 0; border-top: 4px solid #4f71f6; border-right: 7px solid #4f71f6; }
			.n1-2 i { top: -3px; left: -4px; border-top: 4px solid #fff; border-right: 7px solid #fff; }
			.n-2 { border-top: 1px dashed #e65d50; margin-top: 50px; color: #e65d50; }
			.n-2 span { margin-bottom: 3px; }
			.n-2 strong { display: inline-block; background-color: #e65d50; color: #fff; padding: 0 1em; line-height: 20px; padding: 0 10px; border-radius: 10px; -webkit-border-radius: 10px; }
			.n2-in { margin-top: -18px; display: inline-block; background-color: #fff; }
			.m { width: 140px; margin-bottom: 20px; }
			.m span, .m strong { display: block; font-weight: normal; font-style: normal; margin-bottom: 5px; }
			.m strong { color: #4f71f6; }
			.m-em strong { color: #e65d50; }
			.bt { display: inline-block; padding: 0 15px; text-align: center; text-decoration: none; line-height: 30px; background-color: #4f71f6; color: #fff; border-radius: 2px; -webkit-border-radius: 2px; }
			.bt:hover { background-color: #3456db; }
			.m-hd { height: 100px; width: 100px; margin-bottom: 15px; }
			.vam { vertical-align: middle; }
			@media (max-width: 800px) {
				.text_wrapper { margin-bottom: 15px; }
				.b .sp { display: block; }
				.b .hr { border: none; }
				.m { width: 250px; margin-bottom: 0px; overflow: hidden;}
				.ms > .m { display: block; margin-left: 50%; transform: translateX(-50%); }
				.ms > div img { float: left; margin-bottom: 0; }
				.info { display: inline-block; padding-top: 30px; }
				.ms > div.n-1 { width: 50px; transform: translateX(-74px) rotate(90deg); margin: 30px 0; }
				.ms > div.n-2 { transform: translateX(-86px) rotate(90deg); margin-top: 40px; width: 100px; }
				.ms > div.n-2 .n2-in { transform: translate(-38px, -11px)rotate(-90deg); width: 140px; height: 29px; background-color: #fff; padding-top: 8px; }
				.ms > div.n-2 .n2-in span { display: none; }
				.m-em .info { transform: translateY(-20px); }
			}
		</style>
	</head>
	<body class="tac">
		<div class="mb30 text_wrapper">
			<h1>504</h1>
			<h2><span id="error_503"></span></h2>
			<p class="b"><span class="sp" >Client:<span id="client_ip"></span></span> <span class="hr">Node:578e188</span> <span class="sp">Time:<span id="time_error"></span></span></p>
		</div>
		<div class="ms">
			<div class="m">
				<img class="m-hd" width="100" height="100" src="/cdn-cgi/image/browser.jpeg" alt="">
				<div class='info'>
					<span>您的浏览器</span>
					<strong>工作正常</strong>
				</div>
			</div>
			<div class="n n-1">
				<span class="n1-1"><i></i></span>
				<span class="n1-2"><i></i></span>
			</div>
			<div class="m">
				<img class="m-hd" width="100" height="100" src="/cdn-cgi/image/node-yunaq.jpeg" alt="">
				<div class='info'>
					<span>知道创宇云防御节点</span>
					<strong>工作正常</strong>
				</div>
			</div>
			<div class="n n-2">
				<div class="n2-in">
					<span class="db"><img class="vam" width="16" height="16" src="/cdn-cgi/image/line.jpeg" alt="">线路</span>
					<strong>连接超时</strong>
				</div>
			</div>
			<div class="m m-em">
				<img class="m-hd" width="100" height="100" src="/cdn-cgi/image/origin.jpeg" alt="">
				<div class='info'>
					<span id="hostname"></span>
					<strong>服务器状态未知</strong>
					<a target="_blank" href="http://help.yunaq.com/faq/110" class="bt" title="如何修复？">如何修复？</a>
				</div>
			</div>
		</div>
	</body>
    <script>
		var data = {"client_ip":"172.183.157.178","time_error":"21\/Jul\/2025:22:49:29 +0800","error_503":"","t_msg":"","t_link":"","display":false};
		document.getElementById("hostname").innerText = document.location.hostname;
		document.getElementById('error_503').innerText = data['error_503'];
		document.getElementById('client_ip').innerText = data['client_ip'];
		document.getElementById('time_error').innerText = data['time_error'];
    </script>
</html>
