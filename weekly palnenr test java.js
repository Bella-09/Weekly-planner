<!DOCTYPE html>
<html>
<head>
<title>Weekly Planner</title>
<style>
  body {
    font-family: sans-serif;
  }
  .planner {
    width: 800px; /* Adjust as needed */
    margin: 20px auto;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .header {
    text-align: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
  }
  .days {
    display: flex;
  }
  .day {
    flex: 1;
    padding: 10px;
    border-right: 1px solid #ccc;
  }
  .day:last-child {
    border-right: none;
  }
  .day h3 {
    text-align: center;
    margin-bottom: 5px;
  }
  .task {
    margin-bottom: 5px;
  }

  /* Style for PDF output */
  @media print {
    .no-print {
      display: none;
    }
    .planner {
      width: 100%; /* Take up full width when printing */
      box-shadow: none; /* Remove shadow when printing */
      border: none;
    }
    .day {
      border-right: 1px solid #ccc !important; /* Ensure borders are visible */
    }
  }
</style>
</head>
<body>

<div class="planner">
  <div class="header">
    <h2>Weekly Planner</h2>
    <p id="dateRange">Loading Date Range...</p>
  </div>
  <div class="days">
    <div class="day">
      <h3>Monday</h3>
      <div class="tasks" id="monday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
      </div>
    </div>
    <div class="day">
      <h3>Tuesday</h3>
      <div class="tasks" id="tuesday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
      </div>
    </div>
    <div class="day">
      <h3>Wednesday</h3>
      <div class="tasks" id="wednesday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
      </div>
    </div>
    <div class="day">
      <h3>Thursday</h3>
      <div class="tasks" id="thursday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
      </div>
    </div>
    <div class="day">
      <h3>Friday</h3>
      <div class="tasks" id="friday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
      </div>
    </div>
    <div class="day">
      <h3>Saturday</h3>
      <div class="tasks" id="saturday">
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <div class="task"><input type="checkbox"> <input type="text"></div>
        <![spinner](place)

