// Splash screen hide after 3 sec
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("app").style.display = "block"; // show main app
  }, 3000);
});

// Example SSC 2026 syllabus (dummy data)
const syllabus = {
  Bangla: 20,
  English: 18,
  Math: 25,
  Physics: 15,
  Chemistry: 14,
  Biology: 16,
  ICT: 10,
};

// Auto Study Plan Generator
function generatePlan() {
  const totalDays = 200; // ধরে নিচ্ছি ২০০ দিনে শেষ করতে হবে (তুমি চাইলে dynamic input নিতে পারো)
  let output = "<h3>📅 তোমার Auto Study Plan (SSC 2026)</h3><ul>";

  for (let subject in syllabus) {
    const chapters = syllabus[subject];
    const daysPerSubject = Math.floor(totalDays / Object.keys(syllabus).length);
    const chaptersPerDay = (chapters / daysPerSubject).toFixed(2);

    output += `<li><b>${subject}</b>: প্রতি দিনে প্রায় ${chaptersPerDay} chapter (মোট ${chapters} অধ্যায়, সময় ${daysPerSubject} দিন)</li>`;
  }

  output += "</ul>";

  // Calendar-style daily breakdown
  output += "<h3>📖 Day by Day Plan (Calendar View)</h3>";
  output += "<div style='display:grid;grid-template-columns:repeat(7,1fr);gap:5px;'>";

  let day = 1;
  for (let i = 0; i < totalDays; i++) {
    output += `<div style='border:1px solid #555;padding:5px;border-radius:4px;text-align:center;'>Day ${day}</div>`;
    day++;
  }
  output += "</div>";

  document.getElementById("plan-output").innerHTML = output;
}
