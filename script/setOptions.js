function submit(){
	window.localStorage["ID"]=document.getElementById("ID").value;
	window.localStorage["PW"]=document.getElementById("PW").value;
	window.localStorage["auto"]=document.getElementById("auto").checked;
	alert("保存成功，设置将在重新打开浏览器后生效");
}

document.addEventListener('DOMContentLoaded', function () {
	//填入原设置
	document.getElementById("ID").value=window.localStorage["ID"];
	document.getElementById("PW").value=window.localStorage["PW"];
	document.getElementById("auto").checked=window.localStorage["auto"];

	document.getElementById("submit").addEventListener('click',submit);
});