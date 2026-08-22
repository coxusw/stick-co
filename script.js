const requestButton = document.getElementById('requestButton');
const phone = '2192526944';
const message = `Hi! I'd like to ask about a Stick Co cleanup job.\n\nName:\nTown/Area:\nWhat needs cleaned up:\n\nI'll send a few pictures of the area too.`;

if (requestButton) {
  const encoded = encodeURIComponent(message);
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  requestButton.href = `sms:${phone}${isiOS ? '&' : '?'}body=${encoded}`;
}
