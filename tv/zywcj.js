function updata() {
var res = {};
var items = [];
items.push({
title:'该版本已停用，点击更新最新版',
desc:'请更新新规则',
url:'',
col_type: 'text_center_1'
});
res.data=items;
setHomeResult(res);
}

function tell_filter(key) { // 判断是否含有关键字
    // var filter_keys = ["伦理","福利","写真","VIP","美女","里番","性感","倫理","论理"];
    var filter_keys = [];

    for(var i=0;i<filter_keys.length;i++){
        if(key.indexOf(filter_keys[i])>-1){
            return true;
        }
    }
    return false;
}

//图片替换函数
function picfun() {
if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){
pic="https://tu.tianzuida.com/pic/"+pic;
}else if(MY_URL.indexOf("lby")!=-1){
pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic;
}else if(MY_URL.indexOf("xjiys")!=-1){
pic=pic.replace("img.maccms.com","xjiys.com");
}else if(MY_URL.indexOf("shidian")!=-1){
pic=pic.replace("img.maccms.com","shidian.vip");
}else if(MY_URL.indexOf("17kanju")!=-1){
pic=pic.replace("img.maccms.com","img.17kanju.com");
}else if(MY_URL.indexOf("potatost")!=-1){
pic=pic.replace("http://img.maccms.com//pic=","");
}
}
//列表解析函数
function listfun() {
try{
var list=parseDomForArray(html,"rss&&video");
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0]; 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var last = parseDomForHtml(list[j],"body&&last&&Text");
if(!tell_filter(typ)){
if(html.indexOf("</pic>")!=-1){
var pic=parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch("hiker://files/rules/zywcj.js"));
picfun();
items.push({
title:title,
pic_url:pic,
desc:note,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:eval(fetch('hiker://files/rules/zywcj.js'));SSEJ();`,
col_type:"movie_3"
    });
}else{
var dt = parseDomForHtml(list[j],"body&&dt&&Text");
items.push({
title:title+"  状态:"+note,
desc:last+' '+typ+' '+dt,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:eval(fetch('hiker://files/rules/zywcj.js'));SSEJ();`,
col_type:"text_1"
})
    }
  }
}
} catch(e) {}
}
//二级规则函数
function TWEJ() {
var res = {};
var items = [];
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("=")[2];
if (getVar('zywmsort','1')=='1') {
html = getResCode();}else{html = request(MY_URL.replace('ac=list','ac=videolist'))}
//对第一页分类进行处理
if(pn=='1'){
try{
if(html.indexOf("</class>")!=-1){
rescod= getResCode();
}else{
rescod= request(arrr+"?ac=list")
}
var type = parseDomForHtml(rescod,"class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text").split('{')[0];
var url = parseDomForHtml(type[i],"body&&ty&&id");
if(!tell_filter(title)){
items.push({
title:title,
url:arrr+"?ac=list&pg=fypage&t="+url+`@rule=js:\
var arrr = MY_URL.split("?")[0];\
var pn = MY_URL.split("pg=")[1].split("&t=")[0];\
if (getVar('zywmsort','1')=='1') {html = getResCode();}else{html = request(MY_URL.replace('ac=list','ac=videolist'))}\
var res = {};var items = [];\
if(pn=='1'){\
items.push({\
	title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',\
    desc:'',\
    url:"hiker://empty@lazyRule=.js:putVar('zywmsort','1');refreshPage();'toast://切换成功！'",\
    col_type: 'text_2'\
});\
items.push({\
	title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',\
    desc:'',\
    url:"hiker://empty@lazyRule=.js:putVar('zywmsort','0');refreshPage();'toast://切换成功！'",\
    col_type: 'text_2'\
});\
items.push({\
col_type: 'line'});}\
eval(fetch('hiker://files/rules/zywcj.js'));\
listfun();\
res.data=items;setHomeResult(res);`,
col_type:"text_3"});
  }
 }
} catch(e) {}
items.push({
col_type: 'line'});
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
    desc:'',
    url:"hiker://empty@lazyRule=.js:putVar('zywmsort','1');refreshPage();'toast://切换成功！'",
    col_type: 'text_2'
});
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
    desc:'',
    url:"hiker://empty@lazyRule=.js:putVar('zywmsort','0');refreshPage();'toast://切换成功！'",
    col_type: 'text_2'
});
items.push({
col_type: 'line'});
}
//结束第一页分类处理

//对列表处理开始
eval(fetch('hiker://files/rules/zywcj.js'));
listfun();
//对列表处理结束
res.data=items;
setHomeResult(res);
}
//搜索二级函数
function SSEJ() {
var res = {};
var items = [];
refreshX5WebView("");
items.push({
	title: '',
    desc:'240&&float',
    url:'',
    col_type: 'x5_webview_single'
});
var html = getResCode();
try{
var pic = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch('hiker://files/rules/zywcj.js'));
picfun();
var typ = parseDomForHtml(html,"body&&type&&Text");
if(!tell_filter(typ)){
var des=parseDomForHtml(html, "rss&&des&&Text");
items.push({
title:'演员：'+'\n'+parseDomForHtml(html, "rss&&actor&&Text"),
desc:'导演：'+parseDomForHtml(html, "rss&&director&&Text"),
pic_url:pic,
url:pic,
col_type: 'movie_1_vertical_pic'
});

items.push({
title: "剧情简介：",
desc:des,
col_type: 'text_1'
});
var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){

if (getVar('zywlsort','1')=='1') {
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
  }else{
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#").reverse();
  }
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
url:"hiker://empty@lazyRule=.js:putVar('zywlsort', getVar('zywlsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(MY_URL.indexOf('bbkdj')!=-1){url='http://jx.yparse.com/index.php?url='+url}
if(flag=='ddyunp'||flag=='xin'){url='https://player.90mm.me/play.php?url='+url.replace(/第.*?集/g,'')}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else if(flag=='tudou'){url='https://sf1-ttcdn-tos.pstatp.com/obj/'+url+'#.mp4';}else{url=url};}
if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}
if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
if(flag=='pll'){url='https://jx.baipiaozy.com/player/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/analysis.php?v='+url}
if(flag=='kdyx'||flag=='kdsx'){url='http://api.kudian6.com/jm/pdplayer.php?url='+url}
if(flag=='789pan'){url='https://play.789pan.cn/player/tm.php?url='+url}
var title=(list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0]);
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/zywcj.js'));lazyRu();`,
col_type: title.length>=6?'text_2':'text_3'});
   }
  }
 }
  ;}else{items.push({
title:'珍爱生命，远离情色',
col_type: 'text_center_1'
})}
} catch(e) {}
res.data=items;
setHomeResult(res);
}

//动态解析
function lazyRu() {
var src=input.replace(/amp;/g,"").replace(/^\s*/,"");
if(src.indexOf("html")!=-1){
if(!fetch("hiker://files/rules/parse.js",{})){
var fileUrl="https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
}else{
var fileUrl="hiker://files/rules/parse.js"}
eval(fetch(fileUrl,{}));
var play=vodkey.toUrl(src.split('"')[0]);
return play!=""?play:getUrl(src.split('"')[0]);
}else if(src.indexOf("135-cdn")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("/share/")!=-1){
try{
var link=src.split("/share")[0];
var fc=fetch(src,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
var play=(main.indexOf("http")!=-1?main:link+main);
}else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
var play=(main.indexOf("http")!=-1?main:link+main)};
return play;
} catch(e) {
refreshX5WebView(src);
return "toast://请等待加载选集！"};
}else if(src.indexOf("meiju11")!=-1){
var meiju=fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("leduotv")!=-1){
var pla=request(src,{}).split("var url=\'")[1].split("\'")[0];
if(pla.indexOf("m3u8")!=-1){
return pla.split("=")[1];}else{return src};
}else if(src.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(src.split("&")[0]));
}else if(src.indexOf("haodanxia")!=-1||src.indexOf("cqzyw")!=-1){
var ul=JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withStatusCode:true}));
if(ul.statusCode=="302"){
var play=ul.headers.location[0];
}else{
var play=src+"#isVideo=true#"};
return play;
}else if(src.indexOf("shenma4480")!=-1){
var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];
return fetch(sm,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");
}else if(src.indexOf("mlkioiy")!=-1){
if(src.indexOf("ShowVideo")!=-1){
var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(request(fileUrl,{}));
return realUrl;
}else{
return src+"#isVideo=true#"};
}else if(src.indexOf("ddyunp")!=-1||src.indexOf("90mm.me")!=-1){
if(!fetch("hiker://files/rules/js/kem.js",{})){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else{
var fileUrl="hiker://files/rules/js/kem.js";
var ddjs=fetch(fileUrl,{});
eval(ddjs);
return tools.DdyunPlayer.toUrl(src).replace("ddyunp.com","90mm.me")};
}else if(src.indexOf("xsp1")!=-1){
var pli=parseDomForHtml(fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];
if(!fetch("hiker://files/rules/parse.js",{})){
var fileUrl="https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
}else{
var fileUrl="hiker://files/rules/parse.js"}
eval(fetch(fileUrl,{}));
var play=yqjx.toUrl(pli);
return play!=""?play:getUrl(pli);
}else if(src.indexOf("kudian6.com")!=-1||src.indexOf("789pan.cn")!=-1){
var html=request(src);
return html.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("www.bilibili.com")!=-1){
if(!fetch("hiker://files/rules/parse.js",{})){
var fileUrl="https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
}else{
var fileUrl="hiker://files/rules/parse.js"}
eval(fetch(fileUrl,{}));
var play=llqplay.toUrl(src);
return play==''?getUrl(src):play;
}else if(src.indexOf("47api")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("yparse.com")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("//520.com")!=-1){
refreshX5WebView("https://titan.mgtv.com.o8tv.com/jiexi/?url="+src);
return "toast://请等待加载选集！";
}else{return src}
}
