var myHtml = `<iframe title="Bobbe Webstory" id="bobbe-webstory-iframe" style="display: block; border: none;
position: fixed; bottom: 5vh; left: 3vw; right: auto; width: 264px; height: 94px;
opacity: 1; background-image: none !important; background-color: transparent; max-height: 100vh;
max-width: 100vw; transform: translateY(0px); transition: none !important; visibility: visible;
z-index: 999999999 !important; background-position: initial initial !important;
background-repeat: initial initial !important;" srcdoc='<html>
       <head>
           <link rel="stylesheet" href="https://bobbewebstories.s3.eu-central-1.amazonaws.com/mystyle.css">
       </head>
       <body> 
           <div id="frm-root"></div>
           
           <script src="https://bobbewebstories.s3.eu-central-1.amazonaws.com/runtime-main.0560d71e.js"></script>
           <script src="https://bobbewebstories.s3.eu-central-1.amazonaws.com/2.b98d31f8.chunk.js"></script>
           <script src="https://bobbewebstories.s3.eu-central-1.amazonaws.com/main.1333965f.chunk.js"></script>
       </body>
       </html>'>
</iframe>
`;

var wrapper= document.createElement('div');
wrapper.innerHTML= myHtml;
var div = wrapper.firstChild;

document.body.appendChild(div);
