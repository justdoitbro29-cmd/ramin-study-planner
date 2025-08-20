// Wait until splash screen finishes
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
  }, 3000); // 3 sec splash
});

// Auto Study Planner Algorithm (Simple Example)
function generatePlan() {
  const syllabus = [
    "Bangla - 20 Chapters",
    "English - 18 Chapters",
    "Math - 25 Chapters",
    "Science - 22 Chapters",
    "ICT - 10 Chapters",
    "Religion - 14 Chapters",
    "Social Science - 15 Chapters"
  ];

  let days = parseInt(prompt("Enter how many days you have until SSC 2026 exam:"));
  let dailyPlan = [];

  syllabus.forEach(subject => {
    let parts = subject.split(" - ");
    let name = parts[0];
    let chapters = parseInt(parts[1]);
    let perDay = Math.ceil(chapters / days);

    dailyPlan.push(`${name}: ~${perDay} chapters per day`);
  });

  alert("📅 Your Auto Study Plan:\n\n" + dailyPlan.join("\n"));
}

// Notification Reminder
function showNotification() {
  if (Notification.permission === "granted") {
    new Notification("📚 Reminder: Time to Study!", {
      body: "Open your planner and complete today's tasks.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
}

// Export Plan as PDF
function exportPDF() {
  const content = document.querySelector("main").innerText;
  const blob = new Blob([content], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "study-plan.pdf";
  a.click();
  URL.revokeObjectURL(url);
}

// Share with Friends
function sharePlan() {
  if (navigator.share) {
    navigator.share({
      title: "My Study Plan",
      text: "Here is my SSC 2026 study plan!",
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

// Attach buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate-plan-btn")?.addEventListener("click", generatePlan);
  document.getElementById("notify-btn")?.addEventListener("click", showNotification);
  document.getElementById("export-btn")?.addEventListener("click", exportPDF);
  document.getElementById("share-btn")?.addEventListener("click", sharePlan);
});
