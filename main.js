//nurunuruscript
//画像をスクロール位置で切り替えるスクリプト
//画像を配列に格納する
var img = new Array();
var i;
var Imgnum = 8;
for(i=0;i<=Imgnum;i++){
    img[i] = new Image();
    img[i].src = "image/"+i+".png";
}
//画像番号用のグローバル変数
var cnt=0;

//画像切り替え関数
function changeIMG(){
    //スクロールの取得
    var y = GSP();
    //画像番号を進める
    if (cnt > 8) cnt=0;
    else cnt = y%9; 
    //バンドの表示
    if(y > 700 && y<3900){
        document.getElementById("BAND").style.display="block";
        RotateState=0;
    }else{
        document.getElementById("BAND").style.display="none";
        RotateState=1;
    }
    //画像を切り替える
    document.getElementById("BAND").src=img[cnt].src;
}

//スクロール取得関数
function GSP() {return (document.documentElement.scrollTop || document.body.scrollTop);}
//繰り返す
setTimeout(changeIMG(),5000);


function Scroll(){
var ele = document.getElementById('message');
var bounds = ele.getBoundingClientRect();
var y = bounds.top;

    window.scroll(240, y); 
}










//googlemap api
function mapDraw(){
    
    
}
function showmaps(){
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function successCallback(position){
            var x = position.coords.latitude;
            var y = position.coords.longitude;	

            var mapOptions = {
                    center: new google.maps.LatLng(x,y),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
            var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(x,y),
                    map: map,
                    title: '現在地'
    });
            /*whileループなどでまわす。今はサンプル*/
            var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(x+0.0005,y+0.0005),
                    map: map,
                    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=サ|7FFF00|000000',
                    title: 'サロン１'
    });
            var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(x-0.0009,y-0.0009),
                    map: map,
                    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=ラ|FFFF00|000000',
                    title: 'サロン２'
    });
    }

    function errorCallback(error) {
            var err_msg = "";
            switch(error.code)
            {
                    case 1:
                            err_msg = "位置情報の利用が許可されていません";
                            break;
                    case 2:
                            err_msg = "デバイスの位置が判定できません";
                            break;
                    case 3:
                            err_msg = "タイムアウトしました";
                            break;
            }
            alert(err_msg);
    }
}