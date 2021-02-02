

chrome.tabs.query({active:true}, function (tab){
    callQrgen(tab[0].url);
} )


function callQrgen(text = document.getElementById("QRtext").value) {
    //document.getElementById("urltext").innerText = text;
    var qrcode = new QRCode({
        content: text,
        container: "svg", //Responsive use
        join: true, //Crisp rendering and 4-5x reduced file size
		width: 256,
		height: 256
    });
    document.getElementById("qrcode").innerHTML = qrcode.svg();
}
