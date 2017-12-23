function submit(){
	window.localStorage["ID"]=document.getElementById("ID").value;
	window.localStorage["PW"]=document.getElementById("PW").value;
	window.localStorage["auto"]=document.getElementById("auto").checked;
	//alert("保存成功，设置将在重新打开浏览器后生效");
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	//填入原设置
	if(window.localStorage["ID"]!=undefined)document.getElementById("ID").value=window.localStorage["ID"];
	if(window.localStorage["PW"]!=undefined)document.getElementById("PW").value=window.localStorage["PW"];
	document.getElementById("auto").checked=(window.localStorage["auto"]=='true')?true:false;

	document.getElementById("submit").addEventListener('click',submit);
});