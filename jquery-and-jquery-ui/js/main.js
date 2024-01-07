$(function () {
  let list = [];
  $("#save-todo").on("click", function () {
    let value = $("#todo-input").val();
    let new_todo = {
      name: value,
    };
    list.push(new_todo);
    printList();
    alert("todo added");
    $("#todo-input").val("");
  });

  function printList() {
    console.log(list);

    // map method to recreate array
    // join method to convert array to a string

    let newArray = list.map(function (todo, index) {
      return `<tr>
                <td width="90%">${todo.name}</td>
                <td width="10%" class="text-center">
                  <button data-id="${index}" class="btn btn-danger fa fa-trash remove-todo"></button>
                </td>
              </tr>`;
    });
    let tableRows = newArray.join("");
    $("#todo-list-tbody").html(tableRows);
  }

  $(document).on("click", ".remove-todo", function () {
    let button = this;
    let id = $(button).data("id");

    // remove value from array
    list.splice(id, 1); // index,delCount
    alert("todo removed");
    printList(); // re-paint list
  });
});
