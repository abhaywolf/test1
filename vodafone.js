(function() {
    try{
        var imginsert=setInterval(function(){
        if(typeof jQuery!='undefined'){
	 
	    var Selector="#mph-flex-container-632063 > div > div" // Selector Before/After which we want to put our banner.
	
	    var insertPosition="before";//before/after
	
        var imgUrl="";// image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg
	    var backgroundColor="#464343";
	
	    var autoHide=""; //type yes to activate auto hide
	    var autoHideTime=3000;
	
	    var closeButton="yes";	// type yes to activate close Button
	    var closeButtonImageUrl="http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png";
	
	    var collapseButton="yes"; // type yes to activate collapse Button
	    var collapseButtonImageUrl="https://icon-library.com/images/up-icon-png/up-icon-png-4.jpg";//https://icon-library.com/images/up-icon-png/up-icon-png-4.jpg
	    var thinLine="yes";
	    
		var SingleCTA=""; //type "none" to show  
	
	    
		
		
		
		
		
		var banner = document.createElement("div");																												
            banner.className="psb";
            banner.style.width="100%";
	        banner.style.display="block";
	
	//uncomment below line to show image as background of banner
	    if(imgUrl==""){
	//banner.style.backgroundImage= "url('"+imgUrl+"')";
	    }
	    else{
	        banner.style.backgroundColor=backgroundColor;
	        }
	
	 
	//border style
	        //Right Border 
	        banner.style.borderRightWidth= "3px";
	        banner.style.borderRightStyle="solid";
	        banner.style.borderRightColor="white";
            
			//Left Border
	        banner.style.borderLeftWidth= "3px";
	        banner.style.borderLeftStyle="solid";
	        banner.style.borderLeftColor="white";
            
			//Bottom Border
	        banner.style.borderBottomWidth= "3px";
	        banner.style.borderBottomStyle="solid";
	        banner.style.borderBottomColor="white";
	        
			//Top Border
	        banner.style.borderTopWidth= "3px";
            banner.style.borderTopStyle="solid";
	        banner.style.borderTopColor="white";
   
	        banner.style.backgroundColor=backgroundColor;
    
	
	    //33 
	    var heading=document.createElement("h3");
	        heading.innerText="This is Heading Offer";//max length should be 33
	        heading.style.textDecoration="underline";
	        heading.style.textAlign="center";
	        heading.style.fontSize= "20px";
	        heading.style.padding= "34px 0px 0px 0px";
	        heading.style.marginBottom= "10px";
	        heading.style.color="white";
	    //44
	    var description=document.createElement("div");
	        description.innerHTML="Samsung Galaxy S10 mit dem Red S 10 GB";//max length should be 44
            description.style.textAlign="center";
	        description.style.fontSize= "30px";
	        description.style.padding= "0px 10px 5px";
	        description.style.color="white";
	
	
	
	
		
	//Button1 Element
	    var btn= document.createElement("div");
	        btn.classList.add('btn');
	        btn.id="bannerBtn1";
	//btn.style.marginLeft= "0px";
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
	
	    var btn2= document.createElement("div");
	        btn2.classList.add('btn');
	        btn2.id="bannerBtn1";
	//btn2.style.marginLeft= "0px";
	        btn2.style.borderRadius= "0px";
	        btn2.style.backgroundColor="blue";
	    var btn_S2=document.createElement("A");
	        btn_S2.setAttribute("href", "");
	        btn_S2.setAttribute("target", "_blank");
	        btn_S2.innerHTML="Close Offer";
	        btn_S2.style.fontFamily= "Vodafone";
            btn_S2.style.color= "white";
	        btn_S2.style.textDecoration= "none";
            btn_S2.style.fontSize= "18px";
	        btn2.appendChild(btn_S2);
	
	
	
	
        //subheading Element
	    var subheading1="anbbbgggdddl";
	    var subheading2="ahababjajajm";
	    var subheading3="akakakakkaka";
	
	
	    var lnk= document.createElement("div")
	        lnk.innerText=subheading1+" | "+subheading2+" | "+subheading3;
	        lnk.style.textAlign="center";
	        lnk.style.fontSize= "15px";
	        lnk.style.padding= "0px 0px 30px";
	        lnk.style.color="white";
	
	    //close button element
	    var closeBtn=document.createElement("span");
	        closeBtn.id="close";
	
	    if (closeButtonImageUrl==""){
	        closeBtn.innerHTML="x";
            closeBtn.style.fontSize= "25px";
	    }
	    else{
	        var closeImage=document.createElement("img");
	            closeImage.className="manImg";
	            closeImage.setAttribute("src",closeButtonImageUrl);
	            closeImage.style.width="30px";
	            closeImage.style.height="30px";
	            closeBtn.appendChild(closeImage);
	    }
	
	    //collapse and expand button element
	    var dd= document.createElement("div");
	        if (collapseButtonImageUrl=="")
	        {
		        dd.className="dd-main";
		        dd.id="dd-mainID";
			
		    var ddbtn=document.createElement("div");
                        ddbtn.className="dd-button";
		        ddbtn.id="dd-buttonID";
		
		
		    dd.appendChild(ddbtn);
	        }
	        else
	        {
	     	    dd.className="dd-main1";
			    dd.id="dd-mainID";
			    dd.style.width="34px";
			    dd.style.position="relative";		
			    dd.style.margin="0vh auto 0";
			    dd.style.marginBottom= "-18px";
                dd.style.marginTop= "-18px";       
			    dd.style.zIndex= "2";
			var ddbtnn=document.createElement("div");
			//ddbtnn.className="dd-button";
			    ddbtnn.id="dd-buttonID";
	        var ddImage=document.createElement("img");
	            ddImage.className="downImg";
	            ddImage.setAttribute("src",collapseButtonImageUrl);
	            ddImage.style.width="30px";
	            ddImage.style.height="30px";
	            ddbtnn.appendChild(ddImage);
	        dd.appendChild(ddbtnn);
			
	        }
    
	
	    // Append all the element in the banner element
	    //check point for close Button
		if(closeButton=="yes"){
	        banner.appendChild(closeBtn);
	    }
	
        banner.appendChild(heading);
	
	    description.appendChild(btn);
	    
		// check point for Single Cta
	    if(SingleCTA=="none"){
	        description.appendChild(btn2);
	    }
	    banner.appendChild(description);
	
	    banner.appendChild(lnk);
	
		
	
	
	
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
        
		// check point for collapse Button
        if(collapseButton=="yes"){
	
	        var hr=document.createElement("hr");
	            hr.id="horizontalLine";
	            hr.style.margin="0px";
	            hr.style.borderTopWidth="4px";
	            hr.style.borderTopStyle="solid";
	            hr.style.borderTopColor="white";
	
	        insertBefore(dd,sel);
	        insertBefore(hr,sel);
	    }       

    $("#dd-buttonID").click(function () {
	    if(collapseButtonImageUrl ==""){
            if($(".psb").css("display")=="block"){
                $(".psb").hide();
                if(thinLine==""){
	                $("#horizontalLine").hide();
	                $("#dd-mainID").hide();
	            }
	
                $(this).toggleClass("down");
            }
            else{
	            $(".psb").css("display","block")
                $(this).toggleClass("down");
                }	
        }

        else {
            if($(".psb").css("display")=="block"){
                $(".psb").hide();
                if(thinLine==""){
	                $("#horizontalLine").hide();
	                $("#dd-mainID").hide();
	            }
	            $("#dd-mainID").css("top","12px");
	            $(".downImg").css( "transform", "scaleY(-1)");
            }
            else{
	            $(".psb").css("display","block")
	            $("#dd-mainID").css("top","auto");
	            $(".downImg").css( "transform", "scaleY(1)");
            }	
        }
    })




	
    $("#close").click(function () {
        $(".psb").hide();
	
	})
    if(autoHide=="yes"){
	    setTimeout(function() {
        $('.psb').fadeOut('fast');
        }, autoHideTime);
    }

$("body").append("<style>.dd-button { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; transition:0.3s ease; border-color:white;}.dd-main { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;}.dd-button.down { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(135deg); top: 11px; } #close {float:right;display:inline-block;padding:2px 5px; color:white;}#close:hover {float:right;display:inline-block;padding:2px 5px;color:#fff; cursor: pointer;}#bannerBtn1{margin-left:20px;} @media only screen and (max-width: 638px){ #bannerBtn1{margin-left:0px;}}</style>");
	
    clearInterval(imginsert)
}
    },100);
      }
      catch(e){}
  })();
 
  
