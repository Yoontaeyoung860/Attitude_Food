/*
 * Warning Message를 처리하기 위해 생성
 */
jQuery.jQueryMsgAlert = function (msg) {
    var $messageBox = $.parseHTML('<div id="alertBox"></div>');
    
    $($messageBox).dialog({
        open: $($messageBox).append(msg),
        title: "경고창",
        autoOpen: true,
        modal: true,
        dialogClass: 'ui-widget-alert',
        buttons: {
           "닫기": function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) { $(this).remove(); }
    });
};

/*
 * 작업 결과 등 확인을 위한 alert
 */
jQuery.jQueryMsgOk = function (msg) {
    var $messageBox = $.parseHTML('<div id="alertBox"></div>');
    
    $($messageBox).dialog({
        open: $($messageBox).append(msg),
        title: "확인창",
        autoOpen: true,
        modal: true,
        dialogClass: 'ui-widget-ok',
        buttons: {
           "닫기": function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) { $(this).remove(); }
    });
};

/*
 * 내용을 확인하기 위한 confirm alert
 */
jQuery.jQueryConfirmAlert = function (msg) {
	var dfd = new jQuery.Deferred();

    var $messageBox = $.parseHTML('<div id="alertBox"></div>');
    $("body").append($messageBox);

    var tmpMsg = "";
    var subject = "";
    if (msg.indexOf("*") > 0) {
    	var msgSplit = msg.split("-");
    	tmpMsg = msgSplit[0];
    	subject = msgSplit[1];
    } else {
    	tmpMsg = msg;
    	subject = "선택창";
    }
    
    $($messageBox).dialog({
        open: $($messageBox).append(tmpMsg),
        title: subject,
        autoOpen: true,
        modal: true,
        dialogClass: 'ui-widget-confirm',
        buttons: {
            확인: function () {
                $(this).dialog("close");
                dfd.resolve(true);
            },
            취소: function () {
                $(this).dialog("close");
                dfd.resolve(false);
            }
            
        },
        close: function (event, ui) { $(this).remove(); }
    });
    return dfd.promise();
};


/**
 * @Function Name : isHangul
 * @Description : 한글여부 체크
 * @params : str
 * @return : boolean
 * @usage : isHangul('홍길동');
 *
 **/
function isHangul(str) {
	var len;
	len = s.length;
	for (var i = 0; i < len; i++) {
		if (s.charCodeAt(i) != 32 && (s.charCodeAt(i) < 44032 || s.charCodeAt(i) > 55203)) {
			return false;
		}
	}
	
	return true;
}

/**
 * @Function Name : isNumber
 * @Description : 문자열 중 첫글자가 숫자인지 체크
 * @params : str
 * @return : boolean
 * @usage : isNumber('a12345');
 *
 * @param str
 * @returns {Number}
 **/
function isNumber(str) {
	var cmpStr = new RegExp(/^[0-9]+$/);
	var retVal = 0;

	if (cmpStr.test(str)) {
		retVal = 1;
	} else {
		retVal = 0;
	}
	
	return retVal;
}



/**
 * @Function Name : openDialogPopUp
 * @Description : jQuery UI Dialog를 통한 팝업 구현시 호출
 * @params : targetObjNm, width
 * @return : none
 * @usage : openDialogPopUp('targetObj', '850');
 *
 **/
function openDialogPopUp(targetObjNm, width) {
	var $targetObj = $("#" + targetObjNm);
	var defaultWidth = 450;
	
	if (typeof width === 'undefined' || width == '' || width == '0') {
		width = defaultWidth;
	}
	
	$targetObj.dialog({
		closeOnEscape: false,
		autoOpen: false,
		modal : true,
		minWidth : width,
		resizable : true,
		dialogClass: "popUp",
		height : 'auto',
		beforeShow : function(input){
   			$(input).css({
				"position": "relative",
				"z-index": 1000
        	});
       	}
	});
}

/**
 * @Function Name : openDialogPopUp
 * @Description : jQuery UI Dialog를 통한 팝업 구현시 호출
 * @params : targetObjNm, width
 * @return : none
 * @usage : openDialogPopUp('targetObj', '850');
 *
 **/
function openDialogPopUp(targetObjNm, width, height) {
	var $targetObj = $("#" + targetObjNm);
	var defaultWidth = 450;
	
	if (typeof width === 'undefined' || width == '' || width == '0') {
		width = defaultWidth;
	}
	
	$targetObj.dialog({
		closeOnEscape: false,
		autoOpen: false,
		modal : true,
		width : width,
		height : height,
		dialogClass: "popUp",
		beforeShow : function(input){
   			$(input).css({
					"position": "relative",
					"z-index": 1000
        	});
       	}
	});
}

/**
 * @Function Name : openDialogPopUp
 * @Description : jQuery UI Dialog를 통한 팝업 구현시 호출
 * @params : targetObjNm, width
 * @return : none
 * @usage : openDialogPopUp('targetObj', '850');
 *
 **/
function openDialogPopUp(targetObjNm, width, height,top,left) {
	var $targetObj = $("#" + targetObjNm);
	var defaultWidth = 450;
	var defaultHeight = 650;
	var defaultLeft = 10;
	var defaultTop = 30;
	
	if (typeof width === 'undefined' || width == '' || width == '0') {
		width = defaultWidth;
	}
	if (typeof height === 'undefined' || height == '' || height == '0') {
		height = defaultHeight;
	}
	if (typeof top === 'undefined' || top == '' || top == '0') {
		top = defaultLeft;
	}
	if (typeof left === 'undefined' || left == '' || left == '0') {
		left = defaultTop;
	}
	
	$targetObj.dialog({
		closeOnEscape: false,
		autoOpen: false,
		modal : true,
		width : width,
		height : height,
		dialogClass: "popUp",
		beforeShow : function(input){
   			$(input).css({
					"position": "relative",
					"z-index": 1000
        	});
       	}
	});
}


function getCurrDate(dispTp) {
	var newDate = new Date();
	var year = newDate.getFullYear();
	var month = newDate.getMonth() + 1;
	var day = newDate.getDate();
	var curr_hour = newDate.getHours();
	var curr_min = newDate.getMinutes();
	var curr_sec = newDate.getSeconds();
	
	month = (String(month).length == 1) ? "0" + month : month;
	day = (String(day).length == 1) ? "0" + day : day;
	
	curr_hour = (String(curr_hour).length == 1) ? "0" + curr_hour : curr_hour;
	curr_min = (String(curr_min).length == 1) ? "0" + curr_min : curr_min;
	curr_sec = (String(curr_sec).length == 1) ? "0" + curr_sec : curr_sec;
	
	if (dispTp) {
		var todayMesg = year + "." + month + "." + day + "  " + curr_hour + ":" + curr_min + ":" + curr_sec;
	} else {
		var todayMesg = curr_hour + ":" + curr_min + ":" + curr_sec;
	}	
	return todayMesg;
}

//동적 Form 생성
function createForm( actionURL, targetz ) {
    var f = document.createElement("form"); 
    f.name = "hideFrm";
    f.action = actionURL;
    f.method = "post";
    if(targetz) f.target = targetz; 
    return f;
}

//동적 Input 생성
function addData(name, value) {	 
    var elem = document.createElement("input"); 
    elem.setAttribute("type", "hidden");
    elem.setAttribute("name", name);
    elem.setAttribute("value", value); 
    return elem;
}

//동적 Input 생성
function addData(name, id, value) {	 
    var elem = document.createElement("input"); 
    elem.setAttribute("type", "hidden");
    elem.setAttribute("name", name);
    elem.setAttribute("id", id);
    elem.setAttribute("value", value); 
    return elem;
}

//동적 Form 생성후 전송
function hiddenSubmit(url,data){
	var frm = createForm(url,"_self");
    //frm.appendChild(addData("rtype",rtype));
	var params = data;
	for(var key in params) {
		var hiddenField = document.createElement('input');
		hiddenField.setAttribute('type', 'hidden');
		hiddenField.setAttribute('name', key);
		hiddenField.setAttribute('value', params[key]);
		frm.appendChild(hiddenField);
	}
    document.body.appendChild(frm);
    frm.submit();
}


//링크이동
function goUrl(url){
	location.href = url;
}
//뒤로가기
function goBack(){
	history.back();
}

//새창 팝업
function windowPopup(url, name, w, h){
	if(!name){
		name = "에토펫";
	}
	window.open(url, name, "width="+w+",height="+h+",location=no,toolbars=no,status=no");
}

//이미지 미리보기
function imagePreView(input, target){
	var id = $(input).attr("id");
	var name = $(input).attr("name");
	var regex = /[^0-9]/g;
	var num = name.replace(regex, '');
	$("#o"+id).attr("name", "dimg_"+num);
	var ver = getBrowserVersion();
	if(ver.browser == "Explorer"){
		if(ver.version > 9 ){
			imagePreView_jq(input, target);
		}else{
			imagePreView_jc(input, target);
			//$("#"+target).attr("src",input.value);
		}
	}else{
		preView(input, target);
	}		
}
	
//이미지 미리보기(1) - jquery 버전
function imagePreView_jq(input, target){
	if (input.files && input.files[0]) {
        var reader = new FileReader();	 
        reader.onload = function (e) {
            $('.'+target).attr('src', e.target.result);
        }	 
        reader.readAsDataURL(input.files[0]);
    }
}
//이미지 미리보기(2) - javascript 버전
function imagePreView_jc(thisObj, preViewer) {
    if(!/(\.gif|\.jpg|\.jpeg|\.png)$/i.test(thisObj.value)) {
    	alert("이미지 형식의 파일을 선택하십시오");
    	return;
    }
	preViewer = (typeof(preViewer) == "object") ? preViewer : document.getElementById(preViewer);
	var ua = window.navigator.userAgent;

	if (ua.indexOf("MSIE") > -1) {
		var img_path = ""
		if (thisObj.value.indexOf("\\fakepath\\") < 0) {
			img_path = thisObj.value;
		} else {
	       	thisObj.select();
	       	var selectionRange = document.selection.createRange();
	       	img_path = selectionRange.text.toString();
	      	thisObj.blur();
		}
		preViewer.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='fi" + "le://" + img_path + "', sizingMethod='scale')";
	} else { 
        preViewer.innerHTML = "";
        var W = preViewer.offsetWidth;
        var H = preViewer.offsetHeight;
        var tmpImage = document.createElement("img");
        preViewer.appendChild(tmpImage);

        tmpImage.onerror = function () {
            return preViewer.innerHTML = "";
        }

        tmpImage.onload = function () {
        if (this.width > W) {
            this.height = this.height / (this.width / W);
            this.width = W;
        }
        if (this.height > H) {
        	this.width = this.width / (this.height / H);
        	this.height = H;
        }
	}
	if (ua.indexOf("Firefox/3") > -1) {
		var picData = thisObj.files.item(0).getAsDataURL();
		tmpImage.src = picData;
	} else {
		tmpImage.src = "file://" + thisObj.value;
		}
	}
}


//접속 환경 ( 브라우저 , 버전 ) 가져오기
function getBrowserVersion() { 
	 
	if((match = agent.match(/MSIE ([0-9]+)/)) || (match = agent.match(/Trident.*rv:([0-9]+)/))) app = 'Explorer';
	else if(match = agent.match(/Chrome\/([0-9]+)/)) app = 'Chrome';
	else if(match = agent.match(/Firefox\/([0-9]+)/)) app = 'Firefox';
	else if(match = agent.match(/Safari\/([0-9]+)/)) app = 'Safari';
	else if((match = agent.match(/OPR\/([0-9]+)/)) || (match = agent.match(/Opera\/([0-9]+)/))) app = 'Opera';
	else app = 'Unknown';

	if(app !== 'Unknown') version = match[1];

	return {"browser":app, "verion":version}; 

}

//쿠키 저장
function setCookie( name, value, expiredays )
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}

//쿠키 가져오기
function getCookie(name) 
{ 
    var obj = name + "="; 
    var x = 0; 
    while ( x <= document.cookie.length ) 
    { 
        var y = (x+obj.length); 
        if ( document.cookie.substring( x, y ) == obj ) 
        { 
            if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) ); 
        } 
        x = document.cookie.indexOf( " ", x ) + 1; 
        if ( x == 0 ) 
            break; 
    } 
    return ""; 
}

//상위 테이블 모두 선택 /선택 해제
function allCheckOfTable(item){
	$(item).parents("table").find("input[type=checkbox]").each(function(){
		$(this).prop("checked", item.checked);
	});
}

//상위 TR 모두 선택 /선택 해제
function allCheckOfTr(item){
	$(item).parents("tr").find("input[type=checkbox]").each(function(){
		$(this).prop("checked", item.checked);
	});
}

function navigation(target_class){
	$("ul."+target_class+" > li").each(function(index, item){
		var $_target = $(item).find("a");
		if($_target.pathname == location.pathname){
			$(item).addClass("on");
		}else{
			$(item).removeClass("on");
		}
	});
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function formatNumber(data){
	return parseInt(data.replace(/[^0-9]/g,""));
}

$(function(){
	
	//팝업 띄우기 : data-target : 띄울 대상 클래스명
	$(".popup-opener").on("click",function(){
		$target = $(this).attr("data-target");
		target_class = ".cd-popup."+$target;
		if(! $(target_class).hasClass("is-visible") )
		{
			$(target_class).addClass("is-visible");
		}
	});
	
	//팝업 닫기 : data-target : 닫을 대상 클래스명
	$(".popup-closer").on("click",function(){
		$target = $(this).attr("data-target");
		if($target == undefined || $target == ""){
			$(this).parents("div.cd-popup").removeClass("is-visible");
		}else{
			var target_class = ".cd-popup."+$target;
			$(target_class).removeClass("is-visible");
		}		
	});
	
	$(document).ready(function() {
		$(".star_rating a").click(function () {
		    $(this).parent().children("a").removeClass("on");
		    $(this).addClass("on").prevAll("a").addClass("on");
		    return false;
		});
		
		$('.find_box > .head > ul > li').click(function () {
	        var $this = $(this);
	        var $current = $('.find_box > .head > ul > li.active');
	        $current.removeClass('active');
	        $this.addClass('active');

	        var index = $this.index();
	        var $part5 = $this.closest('.find_box');
	        $part5.find('>.content>div.active').removeClass('active');
	        $part5.find('>.content>div').eq(index).addClass('active');
	    });

	    $('.find_id_box .find_idpw_lst li span').click(function () {
	        var $this = $(this).parent();
	        var index = $this.index();
	        var $findid = $this.closest('.find_id_box');
	        $findid.find('>.tab_cont > div.active').removeClass('active');
	        $findid.find('>.tab_cont > div').eq(index).addClass('active');
	    });
	    
	    var path = $(location).attr("pathname");
		var subPath = $(location).attr("pathname").split("/")[1];
		var menu = $(location).attr("pathname").split("/")[2];
	    var item = subPath == "shop"  ? subPath : menu;
		var url = "/"+subPath+"/get"+item+"ListInfo";
		
		
		$("input:text[numberOnly]").on("keyup", function() {
		    $(this).val($(this).val().replace(/[^0-9]/g,""));
		 });
		
		$("input:text[numberOnly]").on("blur", function() {
		    $(this).val($(this).val().replace(/[^0-9]/g,""));
		 });
	});
	
});