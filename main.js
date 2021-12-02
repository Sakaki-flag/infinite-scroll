
$(function() {
  add(0);

  $(window).on("scroll", function() {
    console.log($(window).scrollTop(), $(window).height(), $("html").height());

    if($("html").height() <= $(window).scrollTop() + $(window).height()) {
      // 最後のインデックスを取得
      const obj = $(".added").last();
      const lastIndex = obj.find("p").text() - 0;
      // 追加
      add(lastIndex + 1);
    }
  })
});


function add(firstIndex) {
  const content = document.querySelector("#templateAdded").content;
  const flagment = document.createDocumentFragment();
  for(let idx = 0; idx < 10; idx++) {
    const clone = document.importNode(content, true);
    $(clone.firstElementChid).find("p").text((idx + firstIndex) + "");
    flagment.appendChild(clone);
  }
  $(".AddArea").append(flagment);
}