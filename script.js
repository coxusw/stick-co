const requestButton = document.getElementById('requestButton');
const copyStatus = document.getElementById('copyStatus');
const message = `Hi! I'd like to ask about a Stick Co cleanup job.\n\nName:\nTown/Area:\nWhat needs cleaned up:\n\nI'll send a few pictures of the area too.`;
requestButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message);
    copyStatus.textContent = 'Cleanup request copied — paste it into a text to Dad!';
  } catch {
    copyStatus.textContent = 'Send Dad a text with your name, town, a description, and a few pictures of the job.';
  }
});
