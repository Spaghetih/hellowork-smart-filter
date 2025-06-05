document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("blacklist");
  const saveBtn = document.getElementById("save");
  const status = document.getElementById("status");

  chrome.storage.sync.get(["blacklist"], (data) => {
    textarea.value = (data.blacklist || []).join("\n");
  });

  saveBtn.addEventListener("click", () => {
    const list = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
    chrome.storage.sync.set({ blacklist: list }, () => {
      status.textContent = "✅ Liste mise à jour ! Actualisez la page pour appliquer les changements.";
      setTimeout(() => status.textContent = "", 4000);
    });
  });
});
