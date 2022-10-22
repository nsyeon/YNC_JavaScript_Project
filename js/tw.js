function tw()
{
  text="";
  text+="<img src='img/tw.jpg' class='subposter'>";
  text+="<br>";
  text+="<br>";
  text+="<table>";
  text+="<th><h1>트와일라잇</h1></th>";
  text+="<tr><td>감독 : 캐서린 하드윅 </td></tr>";
  text+="<tr><td>개봉년도 : 2008년 </td></tr>";
  text+="<tr><td>줄거리</td></tr>";
  text+="<tr><td><p> 17세의 평범한 고등학생 소녀 ‘벨라’는 집안 사정으로 워싱턴 주 포크스에 있는 아빠의 집으로 이사를 온다.\
  전학 첫날, ‘벨라’는 냉담하지만 자신을 무장 해제시킬 정도로 잘생긴 ‘에드워드’와 마주치고, 전율과 두려움 넘치는 인생의 전환을 맞이한다.\
  ‘에드워드’와 돌이킬 수 없는 사랑에 빠져든 ‘벨라’. 하지만 ‘에드워드’와 그의 가족이 뱀파이어 일족이라는 사실을 알게 되고, 예기치 못한 운명에 빠져든다. </p></td></tr>";
  text+="</table>";
  document.getElementById("main").innerHTML=text;
  document.getElementById("rolling_img").style.display="none";
  window.scroll(0,0);
}