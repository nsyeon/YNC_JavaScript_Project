function nm()
{
  text="";
  text+="<img src='img/nm.jpg' class='subposter'>";
  text+="<br>";
  text+="<br>";
  text+="<table>";
  text+="<th><h1>뉴 문</h1></th>";
  text+="<tr><td>감독 : 크리스 웨이츠 </td></tr>";
  text+="<tr><td>개봉년도 : 2009년 </td></tr>";
  text+="<tr><td>줄거리</td></tr>";
  text+="<tr><td><p> 초능력을 가진 뱀파이어 에드워드는 인간 벨라가 자신 때문에 위험해지자 냉정하게 그녀를 떠난다.\
  이제 벨라를 지키는 것은 오랜 친구 제이콥. 하지만 제이콥은 뱀파이어와 적을 이루는 늑대인간 ‘퀼렛족’의 일원으로 벨라와 에드워드를 떼어놓고자 한다.\
  그러던 어느 날 벨라는 자신이 위험한 사고를 당할 때마다 에드워드의 환영이 보인다는 것을 알고 급기야 절벽에서 떨어지는 무모한 행동을 한다.\
  그리고 이 사건은 누구도 예상치 못할 결과를 초래하는데…</p></td></tr>";
  text+="</table>";
  document.getElementById("main").innerHTML=text;
  document.getElementById("rolling_img").style.display="none";
  window.scroll(0,0);
}