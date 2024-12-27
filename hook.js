document.addEventListener("DOMContentLoaded", () => {
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
        tableBody.innerHTML = `<tr><td colspan="5">No data available</td></tr>`;
      } else {
        data.forEach((student) => {
          const row = `
              <tr>
                <td>${student.Name}</td>
                <td>${student.Total_Marks}</td>
                <td>${student.Marks}</td>
                <td>${student.Percentage}</td>
                <td>${student.Course_fees}</td>
              </tr>    
            `;
          tableBody.innerHTML += row;
        });
      }
    })
    .catch((error) => {
      console.error("Error loading JSON data:", error);
      const tableBody = document.getElementById("student-table");
      tableBody.innerHTML = `<tr><td colspan="5">Error loading data</td></tr>`;
    });
});