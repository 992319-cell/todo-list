let data = JSON.parse(localStorage.getItem("todoData")) || [];
//資料初始化
const list = document.querySelector(".list");
function init() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li>${item.content}
                <input type="button" value="刪除" class="delete" data-num=${index}>
            </li>
    `;
  });
  list.innerHTML = str;
  // 【新增這行】將資料轉換成字串，並存入 localStorage
  localStorage.setItem("todoData", JSON.stringify(data));
}
// init();
//新增待辦
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
function add() {
  if (txt.value.trim() == "") {
    alert("請輸入待辦事項");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  txt.value = "";
  data.push(obj);
  init();
}
save.addEventListener("click", add);
txt.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    add();
  }
});
//刪除代辦
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    return;
  }
  let num = e.target.getAttribute("data-num");
  data.splice(num, 1);
  init();
});
// 網頁打開時，先讀取舊資料並顯示出來
init();
