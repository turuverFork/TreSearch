let searchCompleted = false;

const SMART_SITES_DATABASE = {
    programming: [
        {
            name: 'GitHub',
            url: 'https://github.com',
            searchTemplate: 'https://github.com/search?q={query}',
            description: 'Платформа для хранения кода и совместной работы'
        },
        {
            name: 'Stack Overflow',
            url: 'https://stackoverflow.com',
            searchTemplate: 'https://stackoverflow.com/search?q={query}',
            description: 'Вопросы и ответы по программированию'
        },
        {
            name: 'MDN Web Docs',
            url: 'https://developer.mozilla.org',
            searchTemplate: 'https://developer.mozilla.org/search?q={query}',
            description: 'Документация по веб-разработке'
        },
        {
            name: 'W3Schools',
            url: 'https://www.w3schools.com',
            searchTemplate: 'https://www.w3schools.com/search.php?q={query}',
            description: 'Учебники по веб-разработке'
        },
        {
            name: 'CodePen',
            url: 'https://codepen.io',
            searchTemplate: 'https://codepen.io/search/pens?q={query}',
            description: 'Онлайн редактор кода и сообщество'
        },
        {
            name: 'Habr',
            url: 'https://habr.com',
            searchTemplate: 'https://habr.com/ru/search/?q={query}',
            description: 'IT-сообщество и статьи'
        }
    ],

    video: [
        {
            name: 'YouTube',
            url: 'https://youtube.com',
            searchTemplate: 'https://www.youtube.com/results?search_query={query}',
            description: 'Платформа для просмотра и загрузки видео'
        },
        {
            name: 'Vimeo',
            url: 'https://vimeo.com',
            searchTemplate: 'https://vimeo.com/search?q={query}',
            description: 'Платформа для видео высокого качества'
        },
        {
            name: 'Twitch',
            url: 'https://twitch.tv',
            searchTemplate: 'https://www.twitch.tv/search?term={query}',
            description: 'Платформа для прямых трансляций'
        },
        {
            name: 'Rutube',
            url: 'https://rutube.ru',
            searchTemplate: 'https://rutube.ru/search/?q={query}',
            description: 'Российская видеоплатформа'
        }
    ],

    social: [
        {
            name: 'ВКонтакте',
            url: 'https://vk.com',
            searchTemplate: 'https://vk.com/search?c%5Bq%5D={query}',
            description: 'Социальная сеть'
        },
        {
            name: 'Telegram',
            url: 'https://telegram.org',
            searchTemplate: 'https://t.me/search?q={query}',
            description: 'Мессенджер и платформа'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com',
            searchTemplate: 'https://twitter.com/search?q={query}',
            description: 'Платформа для микроблогов'
        },
        {
            name: 'Reddit',
            url: 'https://reddit.com',
            searchTemplate: 'https://www.reddit.com/search/?q={query}',
            description: 'Социальная новостная платформа'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com',
            searchTemplate: 'https://www.instagram.com/explore/tags/{query}/',
            description: 'Платформа для фото и видео'
        }
    ],

    education: [
        {
            name: 'Википедия',
            url: 'https://wikipedia.org',
            searchTemplate: 'https://ru.wikipedia.org/w/index.php?search={query}',
            description: 'Свободная энциклопедия'
        },
        {
            name: 'Khan Academy',
            url: 'https://khanacademy.org',
            searchTemplate: 'https://www.khanacademy.org/search?page_search_query={query}',
            description: 'Бесплатные онлайн курсы'
        },
        {
            name: 'Coursera',
            url: 'https://coursera.org',
            searchTemplate: 'https://www.coursera.org/search?query={query}',
            description: 'Платформа онлайн обучения'
        },
        {
            name: 'Stepik',
            url: 'https://stepik.org',
            searchTemplate: 'https://stepik.org/search?q={query}',
            description: 'Образовательная платформа'
        },
        {
            name: 'GeekBrains',
            url: 'https://gb.ru',
            searchTemplate: 'https://gb.ru/search?query={query}',
            description: 'Онлайн образование IT'
        }
    ],

    news: [
        {
            name: 'Яндекс.Новости',
            url: 'https://news.yandex.ru',
            searchTemplate: 'https://news.yandex.ru/yandsearch?text={query}',
            description: 'Новостной агрегатор'
        },
        {
            name: 'Google News',
            url: 'https://news.google.com',
            searchTemplate: 'https://news.google.com/search?q={query}',
            description: 'Новостной агрегатор'
        },
        {
            name: 'РИА Новости',
            url: 'https://ria.ru',
            searchTemplate: 'https://ria.ru/search/?query={query}',
            description: 'Российское новостное агентство'
        },
        {
            name: 'ТАСС',
            url: 'https://tass.ru',
            searchTemplate: 'https://tass.ru/search?search_str={query}',
            description: 'Информационное агентство'
        }
    ],

    search: [
        {
            name: 'Яндекс',
            url: 'https://yandex.ru',
            searchTemplate: 'https://yandex.ru/search/?text={query}',
            description: 'Поисковая система'
        },
        {
            name: 'Google',
            url: 'https://google.com',
            searchTemplate: 'https://www.google.com/search?q={query}',
            description: 'Поисковая система'
        },
        {
            name: 'DuckDuckGo',
            url: 'https://duckduckgo.com',
            searchTemplate: 'https://duckduckgo.com/?q={query}',
            description: 'Приватная поисковая система'
        },
        {
            name: 'Mail.ru',
            url: 'https://mail.ru',
            searchTemplate: 'https://go.mail.ru/search?q={query}',
            description: 'Поиск от Mail.ru'
        }
    ],

    shopping: [
        {
            name: 'Яндекс.Маркет',
            url: 'https://market.yandex.ru',
            searchTemplate: 'https://market.yandex.ru/search?text={query}',
            description: 'Интернет-магазин'
        },
        {
            name: 'OZON',
            url: 'https://ozon.ru',
            searchTemplate: 'https://www.ozon.ru/search/?text={query}',
            description: 'Интернет-магазин'
        },
        {
            name: 'Wildberries',
            url: 'https://wildberries.ru',
            searchTemplate: 'https://www.wildberries.ru/catalog/0/search.aspx?search={query}',
            description: 'Интернет-магазин'
        },
        {
            name: 'AliExpress',
            url: 'https://aliexpress.com',
            searchTemplate: 'https://www.aliexpress.com/wholesale?SearchText={query}',
            description: 'Китайский онлайн-ритейлер'
        }
    ],

    music: [
        {
            name: 'YouTube Music',
            url: 'https://music.youtube.com',
            searchTemplate: 'https://music.youtube.com/search?q={query}',
            description: 'Музыкальная платформа'
        },
        {
            name: 'Яндекс.Музыка',
            url: 'https://music.yandex.ru',
            searchTemplate: 'https://music.yandex.ru/search?text={query}',
            description: 'Музыкальный сервис'
        },
        {
            name: 'Spotify',
            url: 'https://spotify.com',
            searchTemplate: 'https://open.spotify.com/search/{query}',
            description: 'Музыкальный стриминг'
        },
        {
            name: 'VK Музыка',
            url: 'https://vk.com/music',
            searchTemplate: 'https://vk.com/audio?q={query}',
            description: 'Музыкальный сервис'
        }
    ]
};

const CATEGORY_KEYWORDS = {
    programming: [
        'программирование', 'код', 'разработка', 'github', 'stackoverflow', 'javascript', 'python', 'java', 
        'html', 'css', 'react', 'vue', 'angular', 'node', 'php', 'sql', 'база данных', 'api', 'фреймворк', 
        'библиотека', 'алгоритм', 'отладка', 'компиляция', 'синтаксис', 'функция', 'переменная', 'класс', 
        'объект', 'цикл', 'массив', 'строка', 'число', 'булево', 'git', 'репозиторий', 'коммит', 'ветка', 
        'мерж', 'пул реквест', 'бэкенд', 'фронтенд', 'фуллстек', 'мобильный', 'веб', 'приложение', 'софт', 
        'железо', 'ос', 'терминал', 'командная строка', 'ide', 'vs code', 'sublime', 'webstorm', 'android studio',
        'кодинг', 'скрипт', 'программа', 'исходный код', 'компилятор', 'интерпретатор',
        'programming', 'code', 'developer', 'coding', 'software', 'web development', 'mobile development',
        'backend', 'frontend', 'fullstack', 'debug', 'compile', 'syntax', 'function', 'variable', 'class',
        'object', 'loop', 'array', 'string', 'integer', 'boolean', 'repository', 'commit', 'branch', 'merge'
    ],
    
    video: [
        'youtube', 'ютуб', 'видео', 'смотреть', 'стрим', 'twitch', 'vimeo', 'rutube', 'кино', 'фильм', 
        'клип', 'обучение', 'музыкальное видео', 'прямой эфир', 'плэйлист', 'канал', 'подписка', 'просмотр', 
        'лайк', 'комментарий', 'поделиться', 'загрузить', 'скачать', 'встроить', 'плеер', '4к', 'hd', 
        'качество', 'разрешение', 'частота кадров', 'битрейт', 'кодек',
        'video', 'watch', 'stream', 'movie', 'film', 'clip', 'tutorial', 'music video', 'live stream',
        'vod', 'playlist', 'channel', 'subscribe', 'view', 'like', 'comment', 'share', 'upload', 'download'
    ],
    
    social: [
        'вконтакте', 'vk', 'telegram', 'телеграм', 'twitter', 'твиттер', 'reddit', 'реддит', 'instagram', 
        'инстаграм', 'социальная сеть', 'соцсеть', 'пост', 'твит', 'статус', 'обновление', 'профиль', 'друг', 
        'подписчик', 'подписки', 'лайк', 'поделиться', 'комментарий', 'сообщение', 'чат', 'группа', 'страница', 
        'хэштег', 'тренды', 'вирусный', 'инфлюенсер', 'сообщество', 'сеть', 'связь', 'лента', 'история', 'рил', 
        'live', 'трансляция', 'стрим',
        'facebook', 'social', 'media', 'post', 'tweet', 'status', 'update', 'profile', 'friend', 'follower',
        'following', 'message', 'chat', 'group', 'page', 'hashtag', 'trending', 'viral', 'influencer'
    ],
    
    education: [
        'википедия', 'учить', 'изучать', 'курс', 'обучение', 'урок', 'класс', 'школа', 'университет', 
        'колледж', 'образование', 'знание', 'исследование', 'академический', 'наука', 'математика', 'история', 
        'география', 'физика', 'химия', 'биология', 'литература', 'искусство', 'музыка', 'язык', 'английский', 
        'испанский', 'французский', 'немецкий', 'китайский', 'японский', 'русский', 'онлайн курс', 'mooc', 
        'сертификат', 'степень', 'диплом', 'профессор', 'учитель', 'студент', 'домашняя работа', 'экзамен', 
        'тест', 'квиз', 'задание', 'проект', 'диссертация',
        'wikipedia', 'learn', 'study', 'course', 'tutorial', 'lesson', 'school', 'university', 'college',
        'education', 'knowledge', 'research', 'academic', 'science', 'math', 'history', 'physics', 'chemistry'
    ],
    
    news: [
        'новости', 'обновление', 'последние', 'срочные', 'заголовок', 'статья', 'отчет', 'журналистика', 
        'медиа', 'пресса', 'освещение', 'событие', 'политика', 'экономика', 'спорт', 'развлечения', 
        'технологии', 'здоровье', 'наука', 'мир', 'местные', 'национальные', 'международные', 'яндекс новости', 
        'google news', 'ria', 'тасс', 'лента', 'новостной канал', 'новостной сайт', 'новостной портал', 
        'новостной агрегатор',
        'news', 'update', 'latest', 'breaking', 'headline', 'article', 'report', 'journalism', 'media',
        'press', 'coverage', 'event', 'politics', 'economy', 'sports', 'entertainment', 'technology'
    ],
    
    shopping: [
        'яндекс маркет', 'ozon', 'wildberries', 'aliexpress', 'авито', 'купить', 'покупка', 'заказ', 
        'товар', 'продукт', 'цена', 'стоимость', 'скидка', 'распродажа', 'дешево', 'предложение', 
        'доставка', 'отправка', 'возврат', 'возмещение', 'гарантия', 'отзыв', 'рейтинг', 'покупатель', 
        'продавец', 'вендор', 'маркетплейс', 'интернет магазин', 'онлайн магазин', 'ecommerce', 'розница', 
        'опт', 'аукцион', 'ставка', 'корзина', 'оформление заказа', 'оплата', 'кредитная карта', 'paypal', 
        'банковский перевод', 'наложенный платеж', 'трекинг', 'посылка', 'логистика',
        'amazon', 'ebay', 'shop', 'buy', 'purchase', 'order', 'product', 'item', 'price', 'cost', 'discount',
        'sale', 'deal', 'offer', 'shipping', 'delivery', 'return', 'refund'
    ],
    
    music: [
        'музыка', 'песня', 'трек', 'альбом', 'исполнитель', 'плейлист', 'яндекс музыка', 'vk музыка',
        'spotify', 'youtube music', 'слушать', 'скачать музыку', 'онлайн музыка', 'стриминг', 'радио',
        'подкаст', 'аудио', 'звук', 'бит', 'мелодия', 'текст песни', 'клип', 'концерт',
        'music', 'song', 'track', 'album', 'artist', 'playlist', 'spotify', 'youtube music', 'listen',
        'streaming', 'audio', 'sound', 'beat', 'melody', 'lyrics'
    ]
};

function initializeSearch() {
    console.log("Initializing smart search...");
    
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = query;
    }
    
    if (query && !searchCompleted) {
        console.log("Smart searching for:", query);
        performSmartSearch(query);
    } else {
        showWelcomeMessage();
    }
}

function performSmartSearch(query) {
    searchCompleted = true;
    
    const resultsInfo = document.getElementById('resultsInfo');
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (resultsInfo) {
        resultsInfo.textContent = `Результаты для "${query}"`;
    }
    
    if (resultsContainer) {
        resultsContainer.innerHTML = '<div class="loading">Анализируем ваш запрос...</div>';
        
        setTimeout(() => {
            const results = generateSmartResults(query);
            displayResults(results, resultsContainer);
            
            if (resultsInfo) {
                const categories = detectCategories(query);
                const categoryText = categories.length > 0 ? ` в категориях: ${categories.join(', ')}` : '';
                resultsInfo.textContent = `Найдено ${results.length} результатов для "${query}"${categoryText}`;
            }
        }, 800);
    }
}

function detectCategories(query) {
    const queryLower = query.toLowerCase();
    const detectedCategories = [];
    
    for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
        if (keywords.some(keyword => queryLower.includes(keyword.toLowerCase()))) {
            detectedCategories.push(category);
        }
    }
    
    return detectedCategories.length > 0 ? detectedCategories : ['general'];
}

function generateSmartResults(query) {
    const queryLower = query.toLowerCase();
    const categories = detectCategories(query);
    const results = [];
    
    console.log("Detected categories:", categories);
    
    categories.forEach(category => {
        const sites = SMART_SITES_DATABASE[category];
        if (sites) {
            sites.forEach(site => {
                if (!results.some(r => r.url === site.url)) {
                    results.push(createSmartResult(site, query));
                }
            });
        }
    });
    
    SMART_SITES_DATABASE.search.forEach(site => {
        if (!results.some(r => r.url === site.url)) {
            results.push(createSmartResult(site, query));
        }
    });
    
    if (results.length < 5) {
        Object.values(SMART_SITES_DATABASE).flat().forEach(site => {
            if (results.length < 10 && !results.some(r => r.url === site.url)) {
                results.push(createSmartResult(site, query));
            }
        });
    }
    
    return results.slice(0, 12);
}

function createSmartResult(site, query) {
    const searchUrl = site.searchTemplate ? site.searchTemplate.replace('{query}', encodeURIComponent(query)) : site.url;
    
    return {
        title: site.name + (site.searchTemplate ? ` - ${query}` : ''),
        url: searchUrl,
        displayUrl: new URL(searchUrl).hostname,
        description: site.description + (site.searchTemplate ? ` Поиск "${query}"` : ''),
        category: Object.keys(SMART_SITES_DATABASE).find(cat => 
            SMART_SITES_DATABASE[cat].some(s => s.url === site.url)
        )
    };
}

function displayResults(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Результаты не найдены</h3>
                <p>Попробуйте использовать другие ключевые слова или проверьте предложения ниже.</p>
                <div class="fallback-links">
                    <a href="https://yandex.ru/search/?text=${encodeURIComponent(document.getElementById('searchInput').value)}" target="_blank">Поиск в Яндексе</a>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(document.getElementById('searchInput').value)}" target="_blank">Поиск в Google</a>
                </div>
            </div>
        `;
        return;
    }
    
    const groupedResults = {};
    results.forEach(result => {
        if (!groupedResults[result.category]) {
            groupedResults[result.category] = [];
        }
        groupedResults[result.category].push(result);
    });
    
    Object.entries(groupedResults).forEach(([category, categoryResults]) => {
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        const categoryNames = {
            'programming': 'Программирование',
            'video': 'Видео',
            'social': 'Социальные сети',
            'education': 'Образование',
            'news': 'Новости',
            'search': 'Поисковые системы',
            'shopping': 'Покупки',
            'music': 'Музыка',
            'general': 'Общее'
        };
        categoryHeader.innerHTML = `<h3>${categoryNames[category] || category}</h3>`;
        container.appendChild(categoryHeader);
        
        categoryResults.forEach((result, index) => {
            const resultElement = createResultElement(result, index);
            container.appendChild(resultElement);
        });
    });
}

function createResultElement(result, index) {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.style.animationDelay = (index * 0.1) + 's';
    
    div.innerHTML = `
        <div class="result-url">${result.displayUrl}</div>
        <h3 class="result-title">
            <a href="${result.url}" target="_blank" rel="noopener noreferrer">${result.title}</a>
        </h3>
        <p class="result-desc">${result.description}</p>
    `;
    
    return div;
}

function showWelcomeMessage() {
    const container = document.getElementById('resultsContainer');
}

function searchThis(query) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = query;
    }
    performSearchAction();
}

function performSearchAction() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}

function goToHome() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing smart search...");
    
    initializeSearch();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearchAction();
            }
        });
    }
    
    document.addEventListener('copy', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});

window.performSearch = performSearchAction;
window.goToHome = goToHome;
window.searchThis = searchThis;


// Кто решит пример тот молодец -  9 * 9 = 81. 9 + 1 + 81 – 9 = ?