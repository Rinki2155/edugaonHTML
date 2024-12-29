document.addEventListener("DOMContentLoaded", () => {
  // Total course fee
  const totalFee = 70000;

  // Fetch student data and populate the table
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Sort data in descending order of percentage
      data.sort((a, b) => parseFloat(b.Percentage) - parseFloat(a.Percentage));

      const tableBody = document.getElementById("student-table");
      if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7">No data available</td></tr>`;
      } else {
        data.forEach((student) => {
          let discount = 0; // Initialize discount
          let pay = totalFee; // Initialize pay amount

          // Apply discount based on Percentage
          if (student.Percentage >= 80) {
            discount = 35000;
          } else if (student.Percentage >= 70) {
            discount = 25000;
          } else if (student.Percentage >= 60) {
            discount = 15000;
          } else {
            discount = 5000;
          }

          // Calculate payable amount after discount
          pay = totalFee - discount;

          // Update student object with Course_fees, Discount, and Pay
          student.Course_fees = totalFee;
          student.Discount = discount;
          student.Pay = pay;

          // Append row to the table
          const row = `
              <tr>
                <td>${student.Name}</td>
                <td>${student.Total_Marks}</td>
                <td>${student.Marks}</td>
                <td>${student.Percentage}%</td>
                <td>${student.Course_fees}</td>
                <td>${student.Discount}</td>
                <td>${student.Pay}</td>
              </tr>    
            `;
          tableBody.innerHTML += row;
        });
      }
    })
    .catch((error) => {
      console.error("Error loading JSON data:", error);
      const tableBody = document.getElementById("student-table");
      tableBody.innerHTML = `<tr><td colspan="7">Error loading data</td></tr>`;
    });
});
