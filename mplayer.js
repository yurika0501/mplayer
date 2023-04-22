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
            
            var activeli = document.querySelector('.active');
            
            activeli.className = '';//class属性をから文字にする
            li.className = 'active';//クリックした要素にクラス名を設定
        }
    );
}

//再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');//audio要素を取得
audio.addEventListener('play',//playイベントを設定
    (e)=>{
        var img = document.querySelector('img');//img要素を取得
        img.setAttribute('src', 'pict_play.png');//画像を変更
    }
);
audio.addEventListener('pause',
    (e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');
    }
);