
/*
// Define the API endpoints
const incomeEndpoint = "http://127.0.0.1:8000/api/v1/users/user-incomes";
const assetsEndpoint = "http://127.0.0.1:8000/api/v1/users/user-assets";
const expensesEndpoint =
  "http://127.0.0.1:8000/api/v1/expenses/current-month-expenses";
const liabilitiesEndpoint = "http://127.0.0.1:8000/api/v1/liabilities";

// Function to fetch data from an endpoint
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Function to update the dashboard with fetched data
async function updateDashboard() {
  const incomeData = await fetchData(incomeEndpoint);
  const assetsData = await fetchData(assetsEndpoint);
  const expensesData = await fetchData(expensesEndpoint);
  const liabilitiesData = await fetchData(liabilitiesEndpoint);

  // Update HTML elements with fetched data
  document.getElementById("income").textContent = incomeData
    ? `$${incomeData.amount}`
    : "N/A";
  document.getElementById("assets").textContent = assetsData
    ? `$${assetsData.amount}`
    : "N/A";
  document.getElementById("expenses").textContent = expensesData
    ? `$${expensesData.amount}`
    : "N/A";
  document.getElementById("liabilities").textContent = liabilitiesData
    ? `$${liabilitiesData.amount}`
    : "N/A";
}
function calculateNetWorth(
  incomeData,
  assetsData,
  expensesData,
  liabilitiesData
) {
  if (incomeData && assetsData && expensesData && liabilitiesData) {
    const netWorth =
      incomeData.amount +
      assetsData.amount -
      expensesData.amount -
      liabilitiesData.amount;
    document.getElementById("net-worth").textContent = `$${netWorth}`;
  } else {
    document.getElementById("net-worth").textContent = "N/A";
  }
}

// Initial call to update the dashboard
updateDashboard();

// Optional: Set up periodic updates
setInterval(updateDashboard, 60000); // Update every minute
*/
