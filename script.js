// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Раскрываем на весь экран
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;

if (user) {
    document.getElementById('userName').textContent = user.first_name || 'Пользователь';
    document.getElementById('userId').textContent = `[${user.id}]`;
} else {
    document.getElementById('userName').textContent = 'Тестовый пользователь';
    document.getElementById('userId').textContent = '[000000000]';
}

// Функции для кнопок
function connectVPN() {
    tg.showAlert('Здесь будет переход на сайт с инструкциями по подключению');
    // В будущем: window.location.href = 'https://your-site.com/connect';
}

function extendSubscription() {
    tg.showAlert('Здесь будет переход к оплате подписки');
    // В будущем: tg.sendData('extend_subscription');
}

function inviteFriend() {
    const referralLink = `https://t.me/${tg.initDataUnsafe.user?.username || 'your_bot'}?start=ref_${user?.id || 0}`;
    tg.showPopup({
        title: 'Пригласить друга',
        message: `Поделись ссылкой:\n${referralLink}\n\nЗа каждого друга ты получишь бонус!`,
        buttons: [
            {type: 'default', text: 'Поделиться'},
            {type: 'cancel'}
        ]
    });
}

function openChannel() {
    tg.openTelegramLink('https://t.me/your_channel');
}

function showHelp() {
    tg.showPopup({
        title: 'Помощь',
        message: 'Как подключить VPN:\n\n1. Нажми "Подключить VPN"\n2. Выбери устройство\n3. Следуй инструкциям\n\nНужна помощь? Напиши: @your_support',
        buttons: [{type: 'ok'}]
    });
}

function showProfile() {
    tg.showPopup({
        title: 'Профиль',
        message: `ID: ${user?.id || 0}\nИмя: ${user?.first_name || 'Пользователь'}\n\nПодписка: активна\nДо: 28 июля 2026`,
        buttons: [{type: 'ok'}]
    });
}

function showAbout() {
    tg.showPopup({
        title: 'О сервисе',
        message: 'Мы предоставляем быстрый и надежный VPN-сервис с 2024 года.\n\n✅ Более 10,000 клиентов\n✅ Серверы в Европе\n✅ Поддержка 24/7',
        buttons: [{type: 'ok'}]
    });
}

// Сообщаем Telegram, что приложение готово
tg.ready();
