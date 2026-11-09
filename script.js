const icons = {
  deck: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="m8 21 4-4 4 4m-9-9 4-4 3 3 3-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-10A9 9 0 0 1 21 11.5Z"/><path d="M7 11h10m-10 4h6"/>'
};
const profile = window.profile;
document.getElementById('name').replaceChildren(document.createTextNode(profile.name), Object.assign(document.createElement('span'), {textContent: '.'}));
document.title = `${profile.name} | ScaleX Hub`;
document.getElementById('bio').replaceChildren(...profile.bio.flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
const avatar = document.getElementById('avatar');
avatar.textContent = profile.initials;
if (profile.avatarUrl) {
  const img = new Image(); img.src = profile.avatarUrl; img.alt = profile.name;
  img.onload = () => avatar.replaceChildren(img);
}
for (const item of profile.links) {
  const card = document.createElement(item.url ? 'a' : 'div');
  card.className = `link-card${item.featured ? ' featured' : ''}${item.url ? '' : ' pending'}`;
  if (item.url) { card.href = item.url; if (!item.url.startsWith('mailto:')) card.target = '_blank'; card.rel = 'noopener noreferrer'; }
  else { card.setAttribute('aria-disabled', 'true'); }
  const icon = document.createElement('span'); icon.className = 'link-icon';
  icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[item.icon] || icons.message}</svg>`;
  const text = document.createElement('span'); text.className = 'link-text';
  const label = document.createElement('span'); label.className = 'link-label'; label.textContent = item.label;
  const title = document.createElement('strong'); title.textContent = item.title;
  const description = document.createElement('span'); description.className = 'description'; description.textContent = item.description;
  text.append(label, title, description);
  const end = document.createElement('span'); end.className = item.url ? 'arrow' : 'soon'; end.textContent = item.url ? '↗' : 'EM BREVE';
  if (item.url) end.setAttribute('aria-hidden', 'true');
  card.append(icon, text, end); document.getElementById('links').append(card);
}
document.getElementById('year').textContent = new Date().getFullYear();
let toastTimer;
function notify(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500); }
document.getElementById('share').addEventListener('click', async () => {
  try {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else { await navigator.clipboard.writeText(location.href); notify('Link da bio copiado.'); }
  } catch (error) { if (error.name !== 'AbortError') notify('Copie o endereço da página para compartilhar.'); }
});
