function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        document.querySelector("#introductionMessage").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}


window.onload = function() {
    game = document.getElementById("game");
    level = document.getElementById("level");
    //欢迎语打字效果
    document.getElementById("introductionMessage").style.display = "block";
    typeWriter("从前一个阴郁的子夜<br>我独自沉思,慵懒疲竭<br>面对许多古怪而离奇<br>并早已被人遗忘的书卷<br>当我开始打盹，几乎入睡<br>突然传来一阵轻擂<br>一只神圣往昔的乌鸦降临在我的门廊上<br>带来许多关于爱和死亡的奇特谜题。", 0, function(){
        document.getElementById("startButton").style.display = "inline-block";
    });
    //显示输入框
    document.getElementById("startButton").addEventListener("click", function() {
        document.getElementById("introductionMessage").style.display = "none";
        this.style.display = "none";
        document.getElementById("nameForm").style.display = "block";
    });
    //enter键监听
    document.getElementById("nameInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitName();
        }
    });
}


function submitName() {
    var name = document.getElementById("nameInput").value.trim();
    if (name) {
        document.getElementById("nameForm").style.display = "none";
        document.getElementById("introductionMessage").style.display = "block";
        document.getElementById("introductionMessage").innerHTML = "";

        // 打字效果
        window.typeWriter(`好的，我记住你的名字了，<br>${name}。<br>乌鸦说道。<br><br>让我们开始解谜吧。<br>回答完这些问题，<br>我会给你讲一个关于你自己的故事。`, 0, function() {
            document.getElementById("startGameButton").style.display = "inline-block";
        });

        // 显示游戏界面并隐藏开始按钮
                document.getElementById("startGameButton").addEventListener("click", function() {
                    document.getElementById("game").style.display = "block"; // 显示游戏界面
                    this.style.display = "none"; // 隐藏开始按钮
                    document.getElementById("introductionMessage").style.display = "none"; // 隐藏介绍信息
                    document.getElementById("returnToHomeButton").style.display = "none"; // 显示返回主页按钮
                });

                // 返回主页功能
                document.getElementById("returnToHomeButton").addEventListener("click", function() {
                    document.getElementById("game").style.display = "none"; // 隐藏游戏界面
                    document.getElementById("startGameButton").style.display = "block"; // 显示开始按钮
                    document.getElementById("introductionMessage").style.display = "block"; // 显示介绍信息
                    this.style.display = "none"; // 隐藏返回主页按钮
                });
    }
    else {
        alert("请告诉我你的名字？");
    }
}
