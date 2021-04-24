import React, {useState, useEffect} from 'react';
import Stories from 'react-insta-stories';

const isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
const frmHeight = isMobile ? "100vh" : "750px";
const frmWidth = isMobile ? "100vw" : "420px";
const proxyUrl = "./apps/bobbestory?";
const queryParam = "shopOrigin="+window.parent.Shopify.shop;

function App() {

const imgLogo = "https://bucketeer-b5a34af7-a090-456b-9309-1f290564647b.s3.amazonaws.com/public/bobbetest.myshopify.com-logo.png";
  const storyImgs = [
    "https://bucketeer-b5a34af7-a090-456b-9309-1f290564647b.s3.amazonaws.com/public/bobbetest.myshopify.com-0.jpeg",
    "https://bucketeer-b5a34af7-a090-456b-9309-1f290564647b.s3.amazonaws.com/public/bobbetest.myshopify.com-1.jpeg",
    "https://bucketeer-b5a34af7-a090-456b-9309-1f290564647b.s3.amazonaws.com/public/bobbetest.myshopify.com-2.jpeg"
];

  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({
    logo: "",
    images : [
      ""
    ]
  });
  
  
  useEffect(async () => {
    
    //setData({logo: imgLogo, images: storyImgs});
    //console.log("url", proxyUrl+queryParam);
    const response= await fetch(
      
       proxyUrl + queryParam
    );
      const data = await response.json() 
      console.log("useeffect", data)
      
      setData(data);
  }, []);

  

  const buttonPress = () => {
    if(isOpen) {
      setOpen(false);
      close();
    }
    else {
      setOpen(true);
      open()
    }
  };

  const open = () => {
    let ifrm = window.parent.document.getElementById("bobbe-webstory-iframe");
    ifrm.style.height = frmHeight;
    ifrm.style.width = frmWidth;
    console.log(isMobile)
    ifrm.style.top = isMobile ? 0 : "100px";
    ifrm.style.left = isMobile ? 0 : "400px";

    
  }

  const close = () => {
    let ifrm = window.parent.document.getElementById("bobbe-webstory-iframe");
    ifrm.style.height = "94px";
    ifrm.style.width = "264PX";
    ifrm.style.top = "auto";
    ifrm.style.left = "3vw";
  }

    
    let heightOfFrm = window.parent.document.getElementById("bobbe-webstory-iframe").style.height;
    let widthOfFrm = window.parent.document.getElementById("bobbe-webstory-iframe").style.width;
    
    return (
        <div>
          {isOpen && (
          <div>
            <div style={{height:"10px", backgroundColor: "black"}}>
            </div>
        <Stories
        stories={data.images}
			defaultInterval={3500}
			width={widthOfFrm}
			height={heightOfFrm}
      />
      <span className="bobbe-close" onClick={() => buttonPress()}></span>
      </div>)
        }
        
      {!isOpen && <div id="bobbe-button-div" onClick={() => buttonPress()}>
        <img id="bobbe-button-img" alt="" src={data.logo}/>
      </div>}

      
      </div>
    )
  
  
}

export default App;
