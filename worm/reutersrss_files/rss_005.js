document.write('<!-- Template Id = 1 Template Name = Banner Creative (Flash) -->\n<!-- Copyright 2002 DoubleClick Inc., All rights reserved. --><script src=\"http://m1.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');
 
var dcswf = "http://m1.2mdn.net/1003947/hc_nost_160x600.swf"; 
var dcgif = "http://m1.2mdn.net/1003947/hc_nost_160x600.gif"; 
var advurl = "http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/u%3B149742090%3B0-0%3B0%3B21033787%3B2321-160/600%3B23114889/23132742/1%3B%3B%7Eaopt%3D0/ff/ff/ff%3B%7Efdr%3D143708865%3B0-0%3B0%3B9672315%3B933-120/600%3B23144342/23162194/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://www.history.com/nostradamus";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dcmaxversion = 9;
var plugin = false;
var dccreativewidth = "160";
var dccreativeheight = "600";
var dcwmode = "opaque";
var dcbgcolor = "";

if (((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Mozilla") != -1) && (parseFloat(navigator.appVersion) >= 4) && (navigator.javaEnabled()) && navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
var plugname=navigator.plugins['Shockwave Flash'].description;var plugsub=plugname.substring(plugname.indexOf("."),-1); var plugsubstr=plugsub.substr(-1)
if( plugsubstr >= dcminversion) { plugin = true;}
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Opera")<0) && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0) && document.all) 
{
document.write('<script language=VBScript>' + '\n' +
   'dcmaxversion = '+dcmaxversion + '\n' +
   'dcminversion = '+dcminversion + '\n' +
   'Do' + '\n' +
    'On Error Resume Next' + '\n' +
    'plugin = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" & dcmaxversion & \"\")))' + '\n' +
    'If plugin = true Then Exit Do' + '\n' +
    'dcmaxversion = dcmaxversion - 1' + '\n' +
    'Loop While dcmaxversion >= dcminversion' + '\n' +
  '<\/script>');
}
if ( plugin )  {
 adcode = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
  ' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">'+
  '<PARAM NAME=movie VALUE="' + dcswf + '?clickTAG='+ dcadvurl +'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'><PARAM NAME="AllowScriptAccess" VALUE="always">'+
  '<EMBED src="' + dcswf + '?clickTAG='+ dcadvurl +'" quality=high wmode='+dcwmode+
  ' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor+
  ' TYPE="application/x-shockwave-flash" AllowScriptAccess="always"></EMBED></OBJECT>';
if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
} else {
 document.write('<A TARGET="_blank" HREF="http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/u%3B149742090%3B0-0%3B0%3B21033787%3B2321-160/600%3B23114889/23132742/1%3B%3B%7Eaopt%3D0/ff/ff/ff%3B%7Efdr%3D143708865%3B0-0%3B0%3B9672315%3B933-120/600%3B23144342/23162194/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://www.history.com/nostradamus"><IMG SRC="' + dcgif + '" alt="" BORDER=0></A>');
}
//-->

document.write('<NOSCRIPT><A TARGET=\"_blank\" HREF=\"http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/u%3B149742090%3B0-0%3B0%3B21033787%3B2321-160/600%3B23114889/23132742/1%3B%3B%7Eaopt%3D0/ff/ff/ff%3B%7Efdr%3D143708865%3B0-0%3B0%3B9672315%3B933-120/600%3B23144342/23162194/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://www.history.com/nostradamus\"><IMG SRC=\"http://m1.2mdn.net/1003947/hc_nost_160x600.gif\" alt=\"\" BORDER=0></A></NOSCRIPT>');
