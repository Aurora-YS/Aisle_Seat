$(document).ready(function(){

    var $arr_01 = [
        ["통로 쪽 좌석",
        "긴 여정이면 지루할테지만 그래도 기차 내에서 꽤나 편리한 자리입니다.", "지나가는 스낵카트에서 제일 먼저 간식을 고를수 있고 잠깐 자리를 비우거나, 도착지에서 내릴때도 나가기 편한 자리이죠.", "하지만 여전히 수시로 옆을 지나다니는 사람들과 곧게뻗은 직선 옆은 조금 덜 편안한 느낌을 주네요.", "이 좌석 칵테일은 마시기에는 조금 덜 편안할것 같네요 그러나 당신의 심신은 풀어드릴수 있을것 같습니다."],
        ["An Aisle Seat", "A long journey would be boring, but it's still a pretty convenient seat on the train.", "You can choose your snack first from a passing snack cart, and it's a convenient seat to leave when you're away for a while, or when you get off at the destination.", "But still, people walking by the side from time to time, and the straight line next to the seat, makes me feel a little less comfortable.", "I think this seat cocktail is a little less comfortable to drink But I think I can relax your mind and body."]
	];

    var $PF_main = `
        <div class="contents">
            <h4 class="title"></h4>
            <p class="txt01"></p>
            <p class="txt02"></p>
            <p class="txt03"></p>
            <p class="txt04"></p>
        </div>
    `;

    for(i in $arr_01){
        $("#PF_main .cover").append($PF_main);
    }

    $("#PF_main .cover .contents").each(function(n){
        $(this).find("h4").text($arr_01[n][0]);
        $(this).find(".txt01").text($arr_01[n][1]);
        $(this).find(".txt02").text($arr_01[n][2]);
        $(this).find(".txt03").text($arr_01[n][3]);
        $(this).find(".txt04").text($arr_01[n][4]);
    });
    
    $("#PF_main .box button").click(function(){
        var $open = $(this).hasClass("open");
        var $idx = $(this).index();

        $("#PF_main .contents").slideUp();

        if($open == false){
            $("#PF_main .box button").removeClass("open");
            $(this).addClass("open");
            $("#PF_main .contents").eq($idx).slideDown();
        }else{
            $(this).removeClass("open");
            $("#PF_main .contents").eq($idx).slideUp();
        };
    });

});