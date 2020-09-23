(function() {
    try{
     var imginsert=setInterval(function(){
if(typeof jQuery!='undefined'){
	//var parentNodeSelector="#mph-flex-container-632063 > div"; //parent Node Selector of banner. 
	var Selector="#mph-flex-container-632063 > div > div" // Selector Before/After which we want to put our banner.
	var insertPosition="before";//before/after
    var imgUrl="";// image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg
	var backgroundColor="#464343";
	var autoHide=""; //type yes to activate auto hide
	var autoHideTime=3000;
	var closeButton="yes";	// type yes to activate close Button
	var closeButtonImageUrl="http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png";
	var collapseButton="yes"; // type yes to activate collapse Button
	
	
	var banner = document.createElement("div");
    banner.className="psb";
    banner.style.width="100%";
	banner.style.display="block";
	//banner.style.backgroundImage= "url('https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg')";
	/* banner.style.borderWidth="3px";  
    banner.style.borderStyle="solid";
	banner.style.borderColor="white";
	 */
	 
	//border style
	banner.style.borderRightWidth= "3px";
	banner.style.borderRightStyle="solid";
	banner.style.borderRightColor="white";
    
	banner.style.borderLeftWidth= "3px";
	banner.style.borderLeftStyle="solid";
	banner.style.borderLeftColor="white";
    
	banner.style.borderBottomWidth= "3px";
	banner.style.borderBottomStyle="solid";
	banner.style.borderBottomColor="white";
	
	banner.style.borderTopWidth= "10px";
    banner.style.borderTopStyle="solid";
	banner.style.borderTopColor="white";
   
	banner.style.backgroundColor=backgroundColor;
    
	
	
	var heading=document.createElement("h3");
	heading.innerText="This is Heading Offer";
	heading.style.textDecoration="underline";
	heading.style.textAlign="center";
	heading.style.fontSize= "20px";
	heading.style.padding= "30px 0px 0px 0px";
	heading.style.marginBottom= "10px";
	heading.style.color="white";
	
	var description=document.createElement("div");
	//centext.style.width="100%";
	description.innerHTML="Samsung Galaxy S10 mit dem Red S 10 GB";
    description.style.textAlign="center";
	description.style.fontSize= "30px";
	description.style.padding= "0px 10px 5px";
	description.style.color="white";
	//centext.style.backgroundColor="grey";
	
	
	
	/* var btn=document.createElement("button");
	btn.style.backgroundColor="#7b3c6e";
	btn.innerHTML="Check Offer";
	btn.style.margin="0px 0px 0px 20px";
	btn.style.fontSize= "20px";
	btn.style.borderRadius= "1px";
	btn.style.paddingRight="10px";
	btn.style.paddingLeft="10px";
	btn.style.color="white"; */
	
	//Button Element
	var btn= document.createElement("div");
	btn.classList.add('btn');
	btn.id="bannerBtn1";
	btn.style.marginLeft= "20px";
	btn.style.borderRadius= "0px";
	btn.style.backgroundColor="red"
	var btn_S1=document.createElement("A");
	btn_S1.setAttribute("href", "");
	btn_S1.setAttribute("target", "_blank");
	btn_S1.innerHTML="Check Offer";
	btn_S1.style.fontFamily= "Vodafone";
    btn_S1.style.color= "white";
	btn_S1.style.textDecoration= "none";
    btn_S1.style.fontSize= "18px";
	btn.appendChild(btn_S1);

	//Button2 Element
	var btn2 = btn.cloneNode(true);
    btn2.id="bannerBtn2";
	btn2.style.backgroundColor="blue";
	
	
    
	var subheading1="anbbbgggdddl";
	var subheading2="ahababjajajm";
	var subheading3="akakakakkaka";
	
	
	var lnk= document.createElement("div")
	lnk.innerText=subheading1+" | "+subheading2+" | "+subheading3;
	lnk.style.textAlign="center";
	lnk.style.fontSize= "15px";
	lnk.style.padding= "0px 0px 30px";
	lnk.style.color="white";
	
	
	var closeBtn=document.createElement("span");
	closeBtn.id="close";
	
	var closeImage=document.createElement("img");
	closeImage.className="manImg";
	closeImage.setAttribute("src",closeButtonImageUrl);
	closeImage.style.width="30px";
	closeImage.style.height="30px";
	closeBtn.appendChild(closeImage);
	
	
	
	var dd= document.createElement("div");
    dd.className="dd-main";
    var ddbtn=document.createElement("div");
    ddbtn.className="dd-button";
    dd.appendChild(ddbtn);
	
	
	if(closeButton=="yes"){
	banner.appendChild(closeBtn);
	}
	
    banner.appendChild(heading);
	
	description.appendChild(btn);
	
	description.appendChild(btn2);
	
	banner.appendChild(description);
	
	banner.appendChild(lnk);
	
		
	
	/* if(collapseButton=="yes"){
	//banner.appendChild(dd);
	document.querySelector(".psb").parentNode.insertBefore(dd, document.querySelector(".psb").nextSibling);
	} */
	
	
	//var node=document.querySelector(parentNodeSelector);
	var sel=document.querySelector(Selector);
	
	function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
	
	function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}

if (insertPosition=="before"){
	insertBefore(banner,sel);
}
else if(insertPosition=="after"){
	insertAfter(banner,sel);
}	 

if(collapseButton=="yes"){
	//banner.appendChild(dd);
	var hr=document.createElement("hr");
	hr.style.margin="0px";
	hr.style.borderTopWidth="4px";
	hr.style.borderTopStyle="solid";
	hr.style.borderTopColor="white";
	
	insertBefore(dd,sel);
	insertBefore(hr,sel);
	}       

$(".dd-button").click(function () {
  if($(".psb").css("display")=="block"){
$(".psb").hide();
 $(this).toggleClass("down");
}
else{
	$(".psb").css("display","block")
 $(this).toggleClass("down");
}	
	})
	/* $(".dd-button.down").click(function () 
{
$(".psb").css("display","block");
 $(this).removeClass("down");
	
	}) */
$("#close").click(function () 
{
$(".psb").hide();
	
	})
/* document.getElementById('close').onclick = function(){
        this.parentNode.parentNode
        .removeChild(this.parentNode);
        return false;
    }; */
if(autoHide=="yes"){
	setTimeout(function() {
    $('.psb').fadeOut('fast');
}, autoHideTime);
}
$("body").append("<style>.dd-button { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; transition:0.3s ease; border-color:white;}.dd-main {  border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;}.dd-button.down { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(135deg); top: 11px; } #close {float:right;display:inline-block;padding:2px 5px; color:white;}#close:hover {float:right;display:inline-block;padding:2px 5px;color:#fff; cursor: pointer;}</style>");
	
    clearInterval(imginsert)
}
    },100);
      }
      catch(e){}
  })();
  
  
  