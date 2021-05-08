'use strict';
const numGu = 0;    //ぐー
const numChoki = 1; //ちょき
const numPa = 2;    //ぱー

//データ保持リスト
let count = {
    player: 0,
    cpu: 0,
    total: 0,
    cpuPlay: 0,
    countcheet: 0,
    cntCPUPlay:0,
};

const gameStart = document.getElementById("gameStart");
let cpuRandomNum = [];
cpuRandomNum = Math.floor(Math.random() * 3);

//ゴンさんモードは非表示
$('#gameDisplayGonMuteki').hide();

/******************************
 **ジャンケン(グーをクリック)**
 *******************************/
$('#gu_btn').on('click', function clickGameStart() {
    //クリックしたボタンの値
    let numPlayerGu=0;

    //CPUの出し手に合わせて勝敗と画像を設定する
    if (cpuRandomNum == numGu) {
        //あいこ
        $('#gameGonResult').text("DROW!!");
        $('#gameDisplayGon').children('img').attr('src',"img/gu.png");
        count["draw"]++;

    } else if (cpuRandomNum == numChoki) {
        //プレイヤー勝ち
        $('#gameGonResult').text("Player Win!!");
        $('#gameDisplayGon').children('img').attr('src',"img/choki.png");
        count["player"]++;

    }  else if (cpuRandomNum == numPa) {
        //プレイヤー負け
        $('#gameGonResult').text("Player Lose!!");
        $('#gameDisplayGon').children('img').attr('src',"img/pa.png");
        count["cpu"]++;

    } else {
        alert('エラー');
    }
    //試合数カウント
    count["cntCPUPlay"]++;

    //試合数の表示
    $('#dispGameCnt').text(count["cntCPUPlay"]);

    //ボタンは非活性
    //$('.clickBtnGonMode').attr('disabled', true);
});

/********************************
 **ジャンケン(チョキをクリック)**
 *******************************/
$('#choki_btn').on('click', function clickGameStart() {
    //クリックしたボタンの値
    let numPlayerChoki=1;

    //CPUの出し手に合わせて勝敗と画像を設定する
    if  (cpuRandomNum == numChoki) {
        //プレイヤーあいこ
        $('#gameGonResult').text("DROW!!");
        $('#gameDisplayGon').children('img').attr('src',"img/choki.png");
        count["draw"]++;

    } else if (cpuRandomNum == numPa) {
        //プレイヤー勝ち
        $('#gameGonResult').text("Player Win!!");
        $('#gameDisplayGon').children('img').attr('src',"img/pa.png");
        count["player"]++;

    }  else if (cpuRandomNum == numGu) {
        //プレイヤー負け
        $('#gameGonResult').text("Player Lose!!");
        $('#gameDisplayGon').children('img').attr('src', "img/gu.png");
        count["cpu"]++;

    } else {
        alert('エラー');
    }
    //試合数カウント
    count["cntCPUPlay"]++;

    //試合数の表示
    $('#dispGameCnt').text(count["cntCPUPlay"]);

    //ボタンは非活性
    //$('.clickBtnGonMode').attr('disabled', true);
});

/******************************
 **ジャンケン(パーをクリック)**
 *******************************/
$('#pa_btn').on('click', function clickGameStart() {
    //クリックしたボタンの値を取得
    let numPlayerGu=$(this).val();

    //CPUの出し手に合わせて勝敗と画像を設定する
    if (cpuRandomNum == numPa) {
        //プレイヤーあいこ
        $('#gameGonResult').text("DROW!!");
        $('#gameDisplayGon').children('img').attr('src',"img/pa.png");
        count["draw"]++;

    } else if (cpuRandomNum == numGu) {
        //プレイヤー勝ち
        $('#gameGonResult').text("Player Win!!");
        $('#gameDisplayGon').children('img').attr('src',"img/gu.png");
        count["player"]++;

    }  else if (cpuRandomNum == numChoki) {
        //プレイヤー負け
        $('#gameGonResult').text("Player Lose!!");
        $('#gameDisplayGon').children('img').attr('src',"img/choki.png");
        count["cpu"]++;

    } else {
        alert('エラー');
    }

    //試合数カウント
    count["cntCPUPlay"]++;

    //試合数の表示
    $('#dispGameCnt').text(count["cntCPUPlay"]);


    //ボタンは非活性
    //$('.clickBtnGonMode').attr('disabled', true);
});


// /*************************
//  **ジャンケン:ゴンさんモード**
//  *************************/
// $('.gu_btn_Muteki').on('click', function clickGameStart() {

//     //プレイヤー負けにする（判定は不要）
//     $('#gameGonResult').text("Player Lose!!");
//     $('#gameDisplayGon').children('img').attr('src',"img/pa.png");

// ボタンは非活性
//     $('.clickBtnGonMode').attr('disabled', true);
// });


/**********************************
 **ジャンケン(ゴンさんモードのボタン)**
 *********************************/
$('.clickBtnGonModeMuteki').on('click', function clickGameStart() {

    //出した手の値を取得する
    let clickBtnCode=$(this).val();

    //プレイヤー負け
    $('#gameGonResultMuteki').text("Player Lose!!");
    $('#gameDisplayGonMuteki').children('img').attr('src',"img/finishend.png");

    //ボタンは非活性
    $('.clickBtnGonMode').attr('disabled', true);

});


//ゴンさんモードをクリックしたら表示を切り替える
$('#modeGonMuteki').on('click', function clickFncModeGonMuteki() {
    alert("もう終わってもいい");

    //標準モードは非表示
    $('#gameDisplayGon').hide();

    //ゴンさんモードは表示
    $('#gameDisplayGonMuteki').show();

});


//カンニングモード
$('#modecheet').on('click', function clickcheet() {
const res = window.confirm("本当にみるんですか？");
    if (res == true) {
        // ２回以上チートをしたら強制ゴンさんモード
        if (count["countcheet"] > 1) {
            $('#modeGonMuteki').click();
        } else {
            if (cpuRandomNum == 0) {
                alert(`CPUの手はグーです`);
            } else if (cpuRandomNum == 1) {
                alert(`CPUの手はチョキです`);
            } else if (cpuRandomNum == 2) {
                alert(`CPUの手はパーです`);
            } else {
                alert('エラー');
            }
            count["countcheet"]++;
            console.log(count["countcheet"]);
        }
    }else {
        // キャンセルならアラートボックスを表示
        alert("さぁ勝負しよう");
    }

});

//リセット
function reloadGame() {
    document.location.reload();
}