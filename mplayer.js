// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i=0; i<listitems.length; i++){
    // Clickイベントを設定
    listitems[i].addEventListener('click',
        (e)=>{
            var li = e.target;// クリックされた要素を取得
            var file = document.querySelector('audio');
        }
    );
}