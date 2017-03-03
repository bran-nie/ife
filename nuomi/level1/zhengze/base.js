window.onload = function () {
	// 点击按钮的绑定
	var numBtn = document.getElementById('numBtn');
	var strBtn = document.getElementById('strBtn');
	
	// 输入值的绑定
	var numValue = document.getElementById('numValue');
	var strValue = document.getElementById('strValue');

	// 显示检测后的结果
	var numResult = document.getElementById('numResult');
	var strResult = document.getElementById('strResult');

	// 手机号的正则检测 函数 
	numBtn.onclick = function () {
		var a = numValue.value.trim();

		// 限制输入的只是数字
		if (!a.match(/^\d+$/)) {
			numResult.innerHTML = '输入只限11位的数字哦~ 且数字中间要连续';
			numResult.style.color = '#d8c51f';
			return;
		}

		// 电话号码的匹配正则
		var reNum = /[1][34578]\d{9}/;

		if (reNum.exec(a)) {
			numResult.innerHTML = '匹配成功, 您输入的数字是正确的手机号码';
			numResult.style.color = 'green';
		}
		else{
			numResult.innerHTML = "匹配失败, 您输入的数字不是正确的手机号码";
			numResult.style.color = 'red';
		}
			
	}
	// 检测按键编码是 13 即enter按键, 则执行点击确认btn一样的行为.
	numValue.onkeyup = function (event) {
		if (event.keyCode === 13) {
			numBtn.onclick();
		}
	}

	strBtn.onclick = function () {
		var a = strValue.value.trim();
		
		// 限制输入的只是英文字符串
		if (!a.match(/^[A-Za-z\s]+$/)) {
			strResult.innerHTML = '只可以输入英文字符串哦~';
			strResult.style.color = '#d8c51f';
		}
		var reStr = /(\s|^)([A-Za-z]+(-[A-Za-z]+)*)\s+\2(?=\s|$)/;

		if (reStr.exec(a)) {
			strResult.innerHTML = '匹配成功' + '<br> <span>匹配到的有: '+ reStr.exec(a)[0]+ '</span>';
			strResult.style.color = 'green';
			console.log(reStr.exec(a));
		}
		else {
			strResult.innerHTML = '匹配失败';
			strResult.style.color = 'red';
		}

	}

	// 检测按键编码是 13 即enter按键, 则执行点击确认btn一样的行为.
	strValue.onkeyup = function (event) {
		if (event.keyCode === 13) {
			strBtn.onclick();
		}
	}
	


	var reStr;
}