'use stript';

// これは、次のことを行っています。

// - HTML要素をJavaScript変数に割り当てます。
const boy = document.getElementById("boy");
const cheese = document.getElementById("cheese");
const obstacle = document.getElementById("obstacle");
const scoreValue = document.getElementById("score-value");
const gameover = document.getElementById("gameover");
// - ゲームで使用される変数を初期化します。


// - 障害物を動かす関数（moveObstacle）を作成し、障害物を左に移動させ、スコアを更新します。また、衝突検出関数（collision）を使用して、男の子と障害物が衝突したかどうかを確認し、必要に応じてゲームオーバーにします。


// - ゲームオーバー時に表示されるメッセージを表示する関数（gameOver）を作成します。




// - ArrowUpキーが押されたときに男の子をジャンプさせるリスナーを追加します。




// - 最後に、moveObstacle関数を呼び出してゲームを開始します。
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
	// ゲームを開始するコードをここに追加する
	let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
	// ゲームを開始するコードを追加する
	let boy = document.getElementById("boy");//男の子ルフィー
	let obstacle = document.getElementById("obstacle");//障害物
	let gameover = document.getElementById("gameover");//ゲームオーバーの表示
	let scoreValue = document.getElementById("score");//スコア
	let score = 0;
	let speed = 5;
	let obstaclePosition = 1000;
	let isGameOver = false;

  function collision(element1, element2) {
		let rect1 = element1.getBoundingClientRect();
		let rect2 = element2.getBoundingClientRect();
		return !(
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom ||
			rect1.right < rect2.left ||
			rect1.left > rect2.right
		);
	}


  function gameOver() {
		isGameOver = true;
		gameover.style.display = "block";
	}
	//ゲームの障害物が動くことに関する関数の定義
	function moveObstacle() {
		obstaclePosition -= speed;
		obstacle.style.left = obstaclePosition + "px";
		score++;
		scoreValue.innerText = score;
		speed += 0.5;

		if (obstaclePosition < -60) {
			obstaclePosition = 1000;
			score++;
			scoreValue.innerText = score;
			speed += 0.5;
		}

		if (collision(boy, obstacle)) {
			gameOver();//ぶつかったら
		}

		if (!isGameOver) {
			requestAnimationFrame(moveObstacle);
		}
	}

moveObstacle();
// boy要素がクリックされたときにジャンプするようにする
boy.addEventListener("click", function() {
  // boy要素にジャンプするアニメーションを追加する
  boy.style.animation = "jump 0.5s";
  
  // 0.5秒後にアニメーションを元に戻す
  setTimeout(function() {
    boy.style.animation = "";
  }, 500);
});

	//キーを下に押した時の設定
	document.addEventListener("keydown", function(event) {
		if (event.code === "ArrowUp" && boy.style.bottom === "0px") {
			boy.style.bottom = "100px";
			setTimeout(function() {
				boy.style.bottom = "0px";
			}, 500);
		}
	});

	moveObstacle();
});
});

//ゲームのスコアに関すること
let score = 0;
let speed = 3;
let obstaclePosition = 1000;
let isGameOver = false;

function moveObstacle() {
	obstaclePosition -= speed;
	obstacle.style.left = obstaclePosition + "px";

	if (obstaclePosition < -100) {
		obstaclePosition = 1000;
obstacle.style.left = obstaclePosition + "px";
score++;
scoreValue.innerText = score;
speed += 0.5;
  };

  if (collision(boy, obstacle)) {
	gameOver();
}

if (!isGameOver) {
	requestAnimationFrame(moveObstacle);
}
}



