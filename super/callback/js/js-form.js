// JavaScript Document

jQuery(document).ready(function() {
// Форма обратной связи................................./

var regVr22 = "<div><img style='margin-bottom:-4px;' src='callback/load.gif' alt='Отправка...' width='32' height='32'><span style='font: 11px Verdana; color:#333; margin-left:6px;'></span></div><br />";

jQuery("#send").click(function(){
		jQuery("#loadBar").html(regVr22).show();
		var posName = jQuery("#posName").val();
		var posCompany = jQuery("#posCompany").val();
		var posEmail = jQuery("#posEmail").val();
		var posPhone = jQuery("#posPhone").val();
		var posText = jQuery("#posText").val();
		var fromURL = jQuery("#fromURL").val();
		var URL = jQuery("#URL").val();
		var IP = jQuery("#IP").val();
		var FORM = jQuery("#FORM").val();
		jQuery.ajax({
			type: "POST",
			url: "callback/send.php",
			data: {"posName": posName, "posCompany": posCompany, "posEmail": posEmail, "posPhone": posPhone, "posText": posText, "fromURL": fromURL, "URL": URL, "IP": IP, "FORM": FORM},
			cache: false,
			success: function(response){
        		var messageResp = "<p style='font-family:Verdana; font-size:11px; color:green; border:1px solid #00CC00; padding:10px; margin:20px; border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; background-color:#fff;'>Спасибо!<strong>";
        		var resultStat = "</strong> Ваше сообщение отправлено!</p>";
        		var oll = (messageResp + posName + resultStat);

        		if(response == 1){
        				jQuery("#loadBar").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName").val("");
        				jQuery("#posEmail").val("");
        				jQuery("#posPhone").val("");
        				jQuery("#posText").val("");
        				/*location.href='/callback/faq/succes.html';*/
                        jQuery(".col-md-6").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes.html'></iframe>");
        				}
        		if(response == 2){
        				jQuery("#loadBar").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName").val("");
        				jQuery("#posEmail").val("");
        				jQuery("#posPhone").val("");
        				jQuery("#posText").val("");
        				/*location.href='/callback/faq/succes_wt.html';*/
                        jQuery(".col-md-6").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes_wt.html'></iframe>");
        				}
        		if(response == 3){
        				jQuery("#loadBar").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName").val("");
        				jQuery("#posEmail").val("");
        				jQuery("#posPhone").val("");
        				jQuery("#posText").val("");
        				/*location.href='/callback/faq/succes_nw.html';*/
                        jQuery(".col-md-6").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes_nw.html'></iframe>");
        				}
        		if(response != 1 || response != 2 || response != 3){
        		jQuery("#loadBar").html(response).fadeIn(1000).delay(2000).fadeOut(1000);
        				}
		    }
		});
		return false;
});


$("#send2").click(function(){
		$("#loadBar2").html(regVr22).show();
		var posName = jQuery("#posName2").val();
		var posCompany = jQuery("#posCompany2").val();
		var posEmail = jQuery("#posEmail2").val();
		var posPhone = jQuery("#posPhone2").val();
		var posText = jQuery("#posText2").val();
		var fromURL = jQuery("#fromURL2").val();
		var URL = jQuery("#URL2").val();
		var IP = jQuery("#IP2").val();
		var FORM = jQuery("#FORM2").val();
		$.ajax({
			type: "POST",
			url: "callback/send.php",
			data: {"posName": posName, "posCompany": posCompany, "posEmail": posEmail, "posPhone": posPhone, "posText": posText, "fromURL": fromURL, "URL": URL, "IP": IP, "FORM": FORM},
			cache: false,
			success: function(response){
        		var messageResp = "<p style='font-family:Verdana; font-size:11px; color:green; border:1px solid #00CC00; padding:10px; margin:20px; border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; background-color:#fff;'>Спасибо!<strong>";
        		var resultStat = "</strong> Ваше сообщение отправлено!</p>";
        		var oll = (messageResp + posName + resultStat);

        		if(response == 1){
        				jQuery("#loadBar2").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName2").val("");
        				jQuery("#posEmail2").val("");
        				jQuery("#posPhone2").val("");
        				jQuery("#posText2").val("");
        				/*location.href='/callback/faq/succes.html';*/
                        jQuery(".modal-body").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes.html'></iframe>");
        				}
        		if(response == 2){
        				jQuery("#loadBar2").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName2").val("");
        				jQuery("#posEmail2").val("");
        				jQuery("#posPhone2").val("");
        				jQuery("#posText2").val("");
        				/*location.href='/callback/faq/succes_wt.html';*/
                        jQuery(".modal-body").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes_wt.html'></iframe>");
        				}
        		if(response == 3){
        				jQuery("#loadBar2").html(oll).fadeIn(1000).delay(2000).fadeOut(1000);
        				jQuery("#posName2").val("");
        				jQuery("#posEmail2").val("");
        				jQuery("#posPhone2").val("");
        				jQuery("#posText2").val("");
        				/*location.href='/callback/faq/succes_nw.html';*/
                        jQuery(".modal-body").html("<iframe id='fancybox-frame' name='fancybox-frame1456769347245' frameborder='0' hspace='0' scrolling='auto' src='/callback/faq/succes_nw.html'></iframe>");
        				}
        		if(response != 1 || response != 2 || response != 3){
        		jQuery("#loadBar2").html(response).fadeIn(1000).delay(2000).fadeOut(1000);
        				}
			}
		});
		return false;
});



});