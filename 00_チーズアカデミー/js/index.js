'use stript';

  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  } else {
    if ($('#page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
};

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// 今週のチーズは？チーズボタンの設定　ランダムで表示
document.getElementById("omikuji-btn1").onclick = function () {
  var rnd = Math.floor( Math.random()*6 );
var omikuji;
if (rnd === 0) omikuji = "ゴーダ";
if (rnd === 1) omikuji = "青カビ";
if (rnd === 2) omikuji = "モッツアレラ";
if (rnd === 3) omikuji = "チェダー";
if (rnd === 4) omikuji = "ゴルゴンゾーラ";
if (rnd === 5) omikuji = "リコッタ";
alert(omikuji);
}

document.getElementById("omikuji-btn2").onclick = function () {
  var rnd = Math.floor( Math.random()*6 );
var omikuji;
if (rnd === 0) omikuji = "ゴーダ";
if (rnd === 1) omikuji = "青カビ";
if (rnd === 2) omikuji = "モッツアレラ";
if (rnd === 3) omikuji = "チェダー";
if (rnd === 4) omikuji = "ゴルゴンゾーラ";
if (rnd === 5) omikuji = "リコッタ";
  alert(omikuji);
}

document.getElementById("omikuji-btn3").onclick = function () {
  var rnd = Math.floor( Math.random()*6 );
var omikuji;
if (rnd === 0) omikuji = "ゴーダ";
if (rnd === 1) omikuji = "青カビ";
if (rnd === 2) omikuji = "モッツアレラ";
if (rnd === 3) omikuji = "チェダー";
if (rnd === 4) omikuji = "ゴルゴンゾーラ";
if (rnd === 5) omikuji = "リコッタ";
alert(omikuji);
}

document.getElementById("omikuji-btn4").onclick = function () {
  var rnd = Math.floor( Math.random()*6 );
var omikuji;
if (rnd === 0) omikuji = "ゴーダ";
if (rnd === 1) omikuji = "青カビ";
if (rnd === 2) omikuji = "モッツアレラ";
if (rnd === 3) omikuji = "チェダー";
if (rnd === 4) omikuji = "ゴルゴンゾーラ";
if (rnd === 5) omikuji = "リコッタ";
  alert(omikuji);
}

document.getElementById("omikuji-btn5").onclick = function () {
  var rnd = Math.floor( Math.random()*6 );
var omikuji;
if (rnd === 0) omikuji = "ゴーダ";
if (rnd === 1) omikuji = "青カビ";
if (rnd === 2) omikuji = "モッツアレラ";
if (rnd === 3) omikuji = "チェダー";
if (rnd === 4) omikuji = "ゴルゴンゾーラ";
if (rnd === 5) omikuji = "リコッタ";
alert(omikuji);
}


//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});