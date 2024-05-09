let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".sidebar");
let main = document.querySelector(".main-body");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// add hovered class to selected list item
let list = document.querySelectorAll(".sidebar li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

$(document).ready(function () {
    // Initial row count
    var rowCount = 1;

    // Add button click event
    $(".btn-primary").click(function () {
      rowCount++;

      // Clone the first "row add" div
      var newRow = $(".row.add:first").clone();

      // Update the index in the cloned div
      newRow.find(".col-1 p").text(rowCount + ".");

      // Clear the input values in the cloned div
      newRow.find("input").val("");

      // Append the cloned div after the last "row add" div
      $(".row.add:last").after(newRow);
    });

    // Remove button click event
    $(".btn-danger").click(function () {
      if (rowCount > 1) {
        rowCount--;

        // Remove the last "row add" div
        $(".row.add:last").remove();
      }
    });
  });

    // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




// add sales script

function addToSales() {
    // Get selected product and quantity
    var selectedProduct = document.getElementById("select_product").value;
    var quantity = document.getElementById("sales_quantity").value;
    var price = document.getElementById("sales_price").value;

     // Check if other required fields are not empty
     if (selectedProduct.trim() === "" || quantity.trim() === "" || price.trim() === "") {
      alert("Please fill in all required fields.");
      return; // Stop execution if any required field is empty
    }
    
    // Add product to the table
    var tableBody = document.getElementById("salesTableBody");
    var row = tableBody.insertRow(tableBody.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = selectedProduct;
    cell2.innerHTML = quantity;
    cell3.innerHTML = 4000;
    cell4.innerHTML = price;


    // Clear the product selection and quantity input
    document.getElementById("select_product").value = "";
    document.getElementById("sales_quantity").value = "1";
}
