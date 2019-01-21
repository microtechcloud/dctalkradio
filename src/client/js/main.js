(function(){
  /**
   * NAV LINKS
   */

   let _class = "current-item";
   let _current_link;
   let _previous_link;
   let _nextlink;

   let _homelink = document.getElementById("homelink");
   let _podcasts = document.getElementById("podcastslink");
   let _aboutlink = document.getElementById("aboutlink");
   let _contact = document.getElementById("contactlink");

   let link_ids = [{id:"home", url:"/"},{id:"podcasts",url:"/podcasts"},{id:"about",url:"/about"}, {id:"contact", url:"/contact-us"}];
    console.log(window.location.pathname)
    if(window.location.pathname){
        switch(window.location.pathname){
            case "/":
                    if(_current_link){
                        //remove class
                        _current_link.classList.remove(_class);
                        _nextlink = _homelink;
                    };

                    //attach new class
                    _nextlink ? false : _nextlink = _homelink;

                    _nextlink.classList.add(_class);
                break;
            case "/about":
            console.log("about")
                break;
            case "/podcasts":
            console.log("podcasts")
                break;
            case "/contact-us":
            console.log("contact-us")
                break;
            default:
        }
    }

   /** 
    * NEWS LETTER 
    *  */

    let _newsletterform;
    let _newsletterbutton;
    let _newsletteremail;
    if( document.getElementById("_newsletter_subcribe")){
        _newsletterform = document.getElementById("_newsletter_subcribe");
    _newsletterbutton = document.getElementById("_sub_button");
    _newsletteremail = document.getElementById("_newsletteremailfield")

    _newsletterform.addEventListener("submit",function(e){e.preventDefault()});

    _newsletterbutton.addEventListener("click",function(e){
        fetch("http://dctalkradio.co.zm/newsletter",{
            body:JSON.stringify( _newsletteremail.value)
        }).then(res=>_newsletteremail.value = "").catch(err=>_newsletteremail.value = "")
        
    });
    }
    
    /**
     * CONTACT US
     *  */

     if(document.getElementById("contactform")){

        let _guestname = document.getElementById("guestname");
        let _guestemail = document.getElementById("guestemail");
        let _guestmessage = document.getElementById("guestmessage");
        let _submitmessage = document.getElementById("_submitmessage");
        let _guestform = document.getElementById("contactform");

        //disable form
        _guestform.addEventListener("submit",function(e){e.preventDefault()});
        
        _submitmessage.addEventListener("click",function(e){
            fetch("http://dctalkradio.co.zm/contact-us?guest=true").then(res=>{
                _guestname.value = "";
                _guestemail.value = "";
                _guestmessage.value = ""
            }).catch(err=>{
                _guestname.value = "";
                _guestemail.value = "";
                _guestmessage.value = ""
            })
        })
      
     }
     
     /**
      * PLAYER
      *  */
})()