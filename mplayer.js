// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
    // Clickイベントを設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;// クリックされた要素を取得
            var file = li.getAttribute('data-file');// ファイル名を取得
            var audio = document.querySelector('audio');// audio要素を選択
            audio.setAttribute('src', file);//src属性をセット
            audio.play();//再生開始
        }
    );
}