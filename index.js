const SideMenu = document.querySelector('aside');
const MenuBtn = document.getElementById('menu-btn');
const CloseBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');
MenuBtn.addEventListener('click', () => {
    SideMenu.style.display = 'block';
})

CloseBtn.addEventListener('click', () => {
    SideMenu.style.display = 'none';
})

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active')
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active')
})

Users.forEach(users => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${users.ProductNome}</td>
        <td>${users.ProductNumber}</td>
        <td>${users.ProductStatus}</td>
        <td class="${users.status === 'declined' ? 'danger' : users.status === 'pending' ? 'warning' : 'primary'}">${users.status}</td>
        <td class="primary">Detales</td>
    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})