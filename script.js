const messagesFriends = [
  {
    autora: "Gabicita 🤍",
    foto: "images/gabs.jpeg",
    texto: "Amo muito seu jeitinho, você é maravilhosa e DIVA KKKKKK!"
  },
  {
    autora: "Gabicita 🩷",
    foto: "images/gabs.jpeg",
    texto: "A melhor titia/babá do Noah 😂❤️ Obrigada por ser uma amiga tão boa, por sempre ouvir, aconselhar e por ser uma das poucas amizades sinceras que realmente ficam."
  },
  {
    autora: "Gabicita 🤍",
    foto: "images/gabs.jpeg",
    texto: "E claro, não posso esquecer das melhores massagens KKKKKK 😂💆🏻‍♀️❤️"
  },

  {
    autora: "Mamis 🩷",
    foto: "images/vanessa.jpeg",
    texto: "Para minha 'Laricosa'... Tchutchucones de mamamis, ou Cucones… Te amar é fácil, Lari! ♥️♥️"
  },
  {
    autora: "Mamis 🤍",
    foto: "images/vanessa.jpeg",
    texto: "Sou tão feliz por 22 primaveras que estás compartilhando a tua vida com as nossas. Pode ter certeza que contigo a casa é cheia."
  },
  {
    autora: "Mamis 🩷",
    foto: "images/vanessa.jpeg",
    texto: "Obrigada por me ajudar em mtas coisas, principalmente no papel que posso desempenhar como tua mãe! Aproveita mto o teu dia… seja mto feliz, sempre!"
  },
  {
    autora: "Mamis 🤍",
    foto: "images/vanessa.jpeg",
    texto: "Continue sendo essa guria inteligente, esperta, dedicada, que vai atrás dos teus sonhos e que qdo tem um objetivo, vai em busca. Te admiro mto meu amor! Feliz aniversário! Te amo mais que tudo nesta vida!♥️♥️♥️"
  },

  {
    autora: "Papis 🩷",
    foto: "images/leonardo.jpeg",
    texto: "Larilinda, minha cocurucha linda e maravilhosa. Ainda lembro da emoção de descobrir que você era uma menina, somente no dia do seu nascimento. Foi um sentimento que ficou marcado, uma alegria imensa!"
  },
  {
    autora: "Papis 🤍",
    foto: "images/leonardo.jpeg",
    texto: "Temos muito orgulho de você, da sua dedicação aos estudos de Medicina, e dos seus tantos talentos, como livros, pinturas e desenhos. Somos muito felizes e gratos por você ter nascido e por fazer parte da nossa família."
  },
  {
    autora: "Papis 🩷",
    foto: "images/leonardo.jpeg",
    texto: "Que o Pai Celestial te abençoe sempre e que este novo ano da tua vida seja cheio de sabedoria, saúde, conquistas, realizações e momentos felizes. Feliz aniversário, filha! Te amamos muito."
  },

  {
    autora: "Melcita 🤍",
    foto: "images/mel.jpeg",
    texto: "Parabéns pra melhor irmã e companheira de vida! Tu é a pessoa mais incrível desse mundo e a minha maior inspiração diária. 👯‍♀️✨"
  },
  {
    autora: "Melcita 🩷",
    foto: "images/mel.jpeg",
    texto: "Ver tua dedicação na Medicina e teu talento com a arte me dá um orgulho gigante. Nenhuma meta é grande demais pra ti, vai com tudo!"
  },
  {
    autora: "Melcita 🤍",
    foto: "images/mel.jpeg",
    texto: "Are you lost, baby girl? 365 dias novos pra tu brilhar e eu estarei aqui do teu lado pra ver cada conquista! Te amo demais! 😂💖"
  },
  {
    autora: "Brubscita 🩷",
    foto: "images/brubs.jpeg",
    texto: "Eu ADMIRO MUCHO o teu jeitinho de cuidar das pessoas que ama!"
  },
  {
    autora: "Brubscita 🤍",
    foto: "images/brubs.jpeg",
    texto: "A dedicação tua nas metinhas, desde malhar todo dia até os cursos que tu sempre acha algum pra fazer!"
  },
  {
    autora: "Brubscita 🩷",
    foto: "images/brubs.jpeg",
    texto: "AMO o teu humor!! Diva que mais me envia reels no Instagram."
  },
  {
    autora: "Brubscita 🤍",
    foto: "images/brubs.jpeg",
    texto: "Tu é inteligentíssima e talentosíssima! Nossa futura médica que vai fazer nossos atestados 🙏🏼"
  },

  {
    autora: "Niviacita 🩷",
    foto: "images/nivis.jpeg",
    texto: "Tu é uma amiga parceira para todas as horas! Agora quem vai te ajudar sou eu!"
  },
  {
    autora: "Niviacita 🤍",
    foto: "images/nivis.jpeg",
    texto: "Sempre disposta a ajudar aqueles que ama! Tu é uma amiga incrível, Lari!"
  },
  {
    autora: "Niviacita 🩷",
    foto: "images/nivis.jpeg",
    texto: "Te admiro muitoo!"
  },
  {
    autora: "Niviacita 🤍",
    foto: "images/nivis.jpeg",
    texto: "Ter tua amizade e teu apoio não tem preço! Tu é a mais mais!"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const randomMessages = shuffleArray([...messagesFriends]);


const btnSocorro = document.getElementById('btn-socorro');
const modalMotivacao = document.getElementById('modal-motivacao');
const closeModal = document.getElementById('close-modal');
const modalMessageText = document.getElementById('modal-message-text');
const btnOutraMensagem = document.getElementById('btn-outra-mensagem');

function openMessageMotivacional() {
    if (!modalMessageText || !modalMotivacao) return;

    const sorteada = messagesFriends[Math.floor(Math.random() * messagesFriends.length)];
    const fotoExibicao = sorteada.foto || "images/brubs.jpeg";
    modalMessageText.innerHTML = `
        <div class="author-profile">
            <img src="${fotoExibicao}" alt="${sorteada.autora}" class="author-photo">
            <strong>${sorteada.autora}:</strong> 
        </div>
        <p class="author-text">"${sorteada.texto}"</p>
    `;
    
    modalMotivacao.classList.remove('hidden');
}


function closeMessage(){
    if(modalMotivacao) {
        modalMotivacao.classList.add('hidden');
    }
}

if (btnSocorro) btnSocorro.addEventListener('click', openMessageMotivacional);
if (closeModal) closeModal.addEventListener('click', closeMessage);
if (btnOutraMensagem) btnOutraMensagem.addEventListener('click', openMessageMotivacional);

window.addEventListener('click', (Event) => {
    if (Event.target === modalMotivacao){
        closeMessage();
    }
});

let timerInterval = null;
let tempoRestante = 25 * 60;

const timerDisplay = document.getElementById('timer-display');
const btnStart = document.getElementById('btn-start-timer');
const btnReset = document.getElementById('btn-reset-timer');
const btnAdd5Min = document.getElementById('btn-add-5min');
const btnLess5Min = document.getElementById('btn-less-5min');

function atualizarDisplayTimer(){
    if(!timerDisplay) return;
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    timerDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

if (btnStart){
    btnStart.addEventListener('click', () => {
        if(timerInterval){
            clearInterval(timerInterval);
            timerInterval = null;
            btnStart.textContent = "start ⏱️";
        } else {
            btnStart.textContent = "pause ⏸️";
            timerInterval = setInterval(() => {
                if (tempoRestante > 0){
                    tempoRestante--;
                    atualizarDisplayTimer();
                } else {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    alert("Hora da pausa! Tome uma água ou um Monster geladinhp e descanse! 🥤✨");
                    tempoRestante = 25 * 60;
                    atualizarDisplayTimer();
                    btnStart.textContent = "start ⏱️";
                 }
            }, 1000);
        }
    });
}

if (btnReset){
    btnReset.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        tempoRestante = 25 * 60;
        atualizarDisplayTimer ();
        if (btnStart) btnStart.textContent = "start ⏱️";
    });
}

if (btnLess5Min){
    btnLess5Min.addEventListener('click', () => {
        tempoRestante -= 5 * 60;
        atualizarDisplayTimer();
    });
}

if (btnAdd5Min){
    btnAdd5Min.addEventListener('click', () => {
        tempoRestante += 5 * 60;
        atualizarDisplayTimer();
    });
}

const listFitness = document.getElementById('list-fitness');
const inputFitness = document.getElementById('input-fitness');
const btnAddFitness = document.getElementById('btn-add-fitness');

let metasFitness = JSON.parse(localStorage.getItem('metasFitness')) || [
    "Treino do dia pago",
    "Beber +2L de água",
    "Pausa pro Monster White Zero Açúcar"
];

function renderFitness() {
    if (!listFitness) return;
    listFitness.innerHTML = '';
    metasFitness.forEach((texto, index) => {
        const li = document.createElement('li');
        li.innerHTML = ` 
        <label><input type="checkbox"> ${texto}</label>
        <button onclick="window.removerFitness(${index})" class="btn-remove-task" title="Remover">×</button>`;
        listFitness.appendChild(li);
    });
}

window.removerFitness = function(index) {
    metasFitness.splice(index, 1);
    localStorage.setItem('metasFitness', JSON.stringify(metasFitness));
    renderFitness();
};

if (btnAddFitness && inputFitness) {
    btnAddFitness.addEventListener('click', () => {
        const texto = inputFitness.value.trim();
        if (texto !== ''){
            metasFitness.push(texto);
            localStorage.setItem('metasFitness', JSON.stringify(metasFitness));
            renderFitness();
            inputFitness.value = '';
        }
    });

    inputFitness.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btnAddFitness.click();
    });
}

const listSkincare = document.getElementById('list-skincare');
const inputSkincare = document.getElementById('input-skincare');
const btnAddSkincare = document.getElementById('btn-add-skincare');

let metasSkincare = JSON.parse(localStorage.getItem('metasSkincare')) || [
    "Sabonete Facial",
    "Hidratante + Sérum",
    "Protetor Solar"
];

function renderSkincare() {
    if (!listSkincare) return;
    listSkincare.innerHTML = '';
    metasSkincare.forEach((texto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <label><input type="checkbox"> ${texto}</label>
      <button onclick="window.removerFitness(${index})" class="btn-remove-task" title="Remover">×</button>`;
        listSkincare.appendChild(li);
    });
}

window.removerSkincare = function(index) {
    metasSkincare.splice(index, 1);
    localStorage.setItem('metasSkincare', JSON.stringify(metasSkincare));
    renderSkincare();
};

if (btnAddSkincare && inputSkincare) {
    btnAddSkincare.addEventListener('click', () => {
        const texto = inputSkincare.value.trim();
        if (texto !== ''){
            metasSkincare.push(texto);
            localStorage.setItem('metasSkincare', JSON.stringify(metasSkincare));
            renderSkincare();
            inputSkincare.value = '';
        }
    });

    inputSkincare.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') btnAddSkincare.click();
    });
}

renderFitness();
renderSkincare();

const moviesGrid = document.getElementById('movies-grid');
const inputMovieTitle = document.getElementById('input-movie-title');
const inputMovieFile = document.getElementById('input-movie-file');
const selectMovieStars = document.getElementById('select-movie-stars');
const btnAddMovie = document.getElementById('btn-add-movie');

let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos')) || [];

function renderFilmes() {
  if (!moviesGrid) return;
  moviesGrid.innerHTML = '';
  
  filmesFavoritos.forEach((filme, index) => {
    const card = document.createElement('div');
    card.className = 'movie-poster-card';
    card.innerHTML = `
      <button onclick="removerFilme(${index})" class="btn-remove-media" title="Remover filme">×</button>
      <img src="${filme.img}" alt="${filme.titulo}">
      <div class="movie-info">
        <strong>${filme.titulo}</strong>
        <span class="stars">${filme.estrelas}</span>
      </div>
    `;
    moviesGrid.appendChild(card);
  });
}

window.removerFilme = function(index) {
  let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos')) || [];
  filmesFavoritos.splice(index, 1);
  localStorage.setItem('filmesFavoritos', JSON.stringify(filmesFavoritos));
  location.reload();
};

if (btnAddMovie) {
  btnAddMovie.addEventListener('click', (e) => {
    e.preventDefault();
    const titulo = inputMovieTitle ? inputMovieTitle.value.trim() : '';
    const file = inputMovieFile && inputMovieFile.files ? inputMovieFile.files[0] : null;
    const estrelas = selectMovieStars ? selectMovieStars.value : '★★★★★';

    if (titulo !== '' && file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        filmesFavoritos.push({ 
          titulo: titulo, 
          img: evt.target.result, 
          estrelas: estrelas 
        });
        localStorage.setItem('filmesFavoritos', JSON.stringify(filmesFavoritos));
        renderFilmes();
        
        inputMovieTitle.value = '';
        inputMovieFile.value = '';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, preencha o nome do filme e escolha uma imagem!');
    }
  });
}

renderFilmes();

const favBooksGrid = document.getElementById('books-grid');
const inputFavBookTitle = document.getElementById('input-fav-book-title');
const inputFavBookFile = document.getElementById('input-fav-book-file');
const selectFavBookStars = document.getElementById('select-fav-book-stars');
const btnAddFavBook = document.getElementById('btn-add-fav-book');

let livrosFavoritos = JSON.parse(localStorage.getItem('livrosFavoritos')) || [];

function renderLivros() {
  if (!favBooksGrid) return;
  favBooksGrid.innerHTML = '';
  
  livrosFavoritos.forEach((livro, index) => {
    const card = document.createElement('div');
    card.className = 'movie-poster-card';
    card.innerHTML = `
      <button onclick="removerLivro(${index})" class="btn-remove-media" title="Remover livro">×</button>
      <img src="${livro.img}" alt="${livro.titulo}">
      <div class="movie-info">
        <strong>${livro.titulo}</strong>
        <span class="stars">${livro.estrelas}</span>
      </div>
    `;
    favBooksGrid.appendChild(card);
  });
}

window.removerLivro= function(index) {
  livrosFavoritos.splice(index, 1);
  localStorage.setItem('livrosFavoritos', JSON.stringify(livrosFavoritos));
  location.reload();
}


if (btnAddFavBook) {
  btnAddFavBook.addEventListener('click', (e) => {
    e.preventDefault();
    const titulo = inputFavBookTitle ? inputFavBookTitle.value.trim() : '';
    const file = inputFavBookFile && inputFavBookFile.files ? inputFavBookFile.files[0] : null;
    const estrelas = selectFavBookStars ? selectFavBookStars.value : '⭐';

    if (titulo !== '' && file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        livrosFavoritos.push({ titulo, img: evt.target.result, estrelas });
        localStorage.setItem('livrosFavoritos', JSON.stringify(livrosFavoritos));
        renderLivros();
        inputFavBookTitle.value = '';
        inputFavBookFile.value = '';
      };
      reader.readAsDataURL(file);
    }
  });
}
renderLivros();

const userBooksGrid = document.getElementById('user-books-grid');
const btnAddBook = document.getElementById('btn-add-book');

function renderBooks() {
  if (!userBooksGrid) return;

  const userBooks = JSON.parse(localStorage.getItem('user_books_list')) || [];
  userBooksGrid.innerHTML = '';

  userBooks.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'book-item';

    const coverHTML = book.cover 
      ? `<img src="${book.cover}" alt="${book.title}" class="book-cover-img">`
      : `<div class="book-cover-placecholder">📖</div>`;

    card.innerHTML = `
      <button onclick="removeBook(${index})" class="btn-remove-media" title="Remover livro">×</button>
      ${coverHTML}
      <h4>${book.title}</h4>
      <p class="book-author">${book.author}</p>
      <div class="books-links">
        ${book.shop ? `<a href="${book.shop}" target="_blank" rel="noopener noreferrer" class="book-btn">shopping 🛒</a>` : ''}
        ${book.pdf ? `<a href="${book.pdf}" target="_blank" rel="noopener noreferrer" class="book-btn pdf">pdf 📄</a>` : ''}
      </div>
    `;

    userBooksGrid.appendChild(card);
  });
}

window.removeBook = function(index) {
  let userBooks = JSON.parse(localStorage.getItem('user_books_list')) || [];
  userBooks.splice(index, 1);
  localStorage.setItem('user_books_list', JSON.stringify(userBooks));
  renderBooks();
};

if (btnAddBook) {
  btnAddBook.addEventListener('click', (e) => {
    e.preventDefault();

    const inputTitle = document.getElementById('input-book-title');
    const inputAuthor = document.getElementById('input-book-author');
    const inputCover = document.getElementById('input-book-cover');
    const inputShop = document.getElementById('input-book-shop');
    const inputPdf = document.getElementById('input-book-pdf');

    const title = inputTitle ? inputTitle.value.trim() : '';
    const author = inputAuthor ? inputAuthor.value.trim() : '';
    const cover = inputCover ? inputCover.value.trim() : '';
    const shop = inputShop ? inputShop.value.trim() : '';
    const pdf = inputPdf ? inputPdf.value.trim() : '';

    if (!title) {
      alert('Por favor, informe ao menos o título do livro!');
      return;
    }

    let userBooks = JSON.parse(localStorage.getItem('user_books_list')) || [];
    userBooks.push({ 
        title: title, 
        author: author || 'Autor Desconhecido', 
        cover: cover, 
        shop: shop,
        pdf: pdf
    });

    localStorage.setItem('user_books_list', JSON.stringify(userBooks));
    renderBooks();

    if (inputTitle) inputTitle.value = '';
    if (inputAuthor) inputAuthor.value = '';
    if (inputCover) inputCover.value = '';
    if (inputShop) inputShop.value = '';
    if (inputPdf) inputPdf.value = '';
  });
}

renderBooks();

const btnEditVerse = document.getElementById('btn-edit-verse');
const btnSaveVerse = document.getElementById('btn-save-verse');
const verseDisplayContainer = document.getElementById('verse-display-container');
const verseEditContainer = document.getElementById('verse-edit-container');

const dailyVerse = document.getElementById('daily-verse');
const verseRefDisplay = document.getElementById('verse-ref-display');
const inputVerseText = document.getElementById('input-verse-text');
const inputVerseRef = document.getElementById('input-verse-ref');

function loadSavedVerse() {
  const savedText = localStorage.getItem('user_favorite_verse_text');
  const savedRef = localStorage.getItem('user_favorite_verse_ref');

  if (savedText) {
    dailyVerse.textContent = `"${savedText}"`;
  }
  if (savedRef) {
    verseRefDisplay.textContent = savedRef.startsWith('—') ? savedRef : `— ${savedRef}`;
  }
}

btnEditVerse.addEventListener('click', () => {
  inputVerseText.value = dailyVerse.textContent.replace(/^"|"$/g, '');
  inputVerseRef.value = verseRefDisplay.textContent.replace(/^—\s*/, '');

  verseDisplayContainer.style.display = 'none';
  verseEditContainer.style.display = 'flex';
});

btnSaveVerse.addEventListener('click', () => {
  const newText = inputVerseText.value.trim();
  const newRef = inputVerseRef.value.trim();

  if (newText !== '') {
    dailyVerse.textContent = `"${newText}"`;
    localStorage.setItem('user_favorite_verse_text', newText);
  }

  if (newRef !== '') {
    const formattedRef = newRef.startsWith('—') ? newRef : `— ${newRef}`;
    verseRefDisplay.textContent = formattedRef;
    localStorage.setItem('user_favorite_verse_ref', formattedRef);
  }

  verseEditContainer.style.display = 'none';
  verseDisplayContainer.style.display = 'block';
});

loadSavedVerse();

const faithGoalsList = document.getElementById('faith-goals-list');
const inputFaithGoal = document.getElementById('input-faith-goal');
const btnAddFaithGoal = document.getElementById('btn-add-faith-goal');

function loadFaithGoals() {
  const savedGoals = JSON.parse(localStorage.getItem('user_faith_goals')) || [];
  faithGoalsList.innerHTML = ''; // Limpa a lista antes de renderizar

  savedGoals.forEach((goalText, index) => {
    createGoalElement(goalText, index);
  });
}

function createGoalElement(goalText, index) {
  const li = document.createElement('li');
  li.className = 'goal-item-y2k';
  
  li.innerHTML = `
    <span>⤷${goalText}</span>
    <button class="btn-delete-item" onclick="removeFaithGoal(${index})" title="Remover meta">🗑️</button>
  `;

  faithGoalsList.appendChild(li);
}

function addFaithGoal() {
  const goalText = inputFaithGoal.value.trim();

  if (goalText === '') {
    alert('Por favor, digite uma meta ou pedido de oração!');
    return;
  }

  const savedGoals = JSON.parse(localStorage.getItem('user_faith_goals')) || [];
  savedGoals.push(goalText);

  localStorage.setItem('user_faith_goals', JSON.stringify(savedGoals));
  inputFaithGoal.value = '';
  loadFaithGoals();
}

function removeFaithGoal(index) {
  let savedGoals = JSON.parse(localStorage.getItem('user_faith_goals')) || [];
  
  savedGoals.splice(index, 1);

  localStorage.setItem('user_faith_goals', JSON.stringify(savedGoals));
  loadFaithGoals();
}

btnAddFaithGoal.addEventListener('click', addFaithGoal);

inputFaithGoal.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addFaithGoal();
  }
});

loadFaithGoals();

const userMuralGrid = document.getElementById('user-mural-grid');
const inputMuralFile = document.getElementById('input-mural-file');
const inputMuralCaption = document.getElementById('input-mural-caption');
const btnAddMuralPhoto = document.getElementById('btn-add-mural-photo');

let muralPhotos = JSON.parse(localStorage.getItem('user_mural_photos')) || [];

function renderMuralPhotos() {
  if (!userMuralGrid) return;

  const dynamicPhotos = userMuralGrid.querySelectorAll('.dynamic-photo');
  dynamicPhotos.forEach(photo => photo.remove());

  muralPhotos.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'photo-frame dynamic-photo';
    
    const imgSrc = typeof item === 'string' ? item : item.img;
    const captionText = (typeof item === 'object' && item.caption) ? item.caption : '';

    card.innerHTML = `
      <button onclick="removeMuralPhoto(${index})" class="btn-remove-media" title="Remover foto">×</button>
      <img src="${imgSrc}" alt="Foto da Galeria">
      ${captionText ? `<span class="photo-caption">${captionText}</span>` : ''}
    `;

    userMuralGrid.appendChild(card);
  });
}

function removeMuralPhoto(index) {
  muralPhotos.splice(index, 1);
  localStorage.setItem('user_mural_photos', JSON.stringify(muralPhotos));
  renderMuralPhotos();
}

if (btnAddMuralPhoto) {
  btnAddMuralPhoto.addEventListener('click', (e) => {
    e.preventDefault();
    const file = inputMuralFile.files[0];
    const caption = inputMuralCaption.value.trim();

    if (file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        muralPhotos.unshift({
          img: evt.target.result,
          caption: caption
        });

        localStorage.setItem('user_mural_photos', JSON.stringify(muralPhotos));
        renderMuralPhotos();

        inputMuralFile.value = '';
        inputMuralCaption.value = '';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Selecione uma imagem do seu dispositivo!');
    }
  });
}

renderMuralPhotos();

function makeSpotifyDraggable() {
  const widget = document.querySelector('.spotify-floating') || document.getElementById('spotify-floating');
  
  if (!widget) return;

  const handle = widget.querySelector('.spotify-handle') || widget;

  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  function startDrag(e) {
    if (e.target.tagName === 'IFRAME' || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

    isDragging = true;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    startX = clientX;
    startY = clientY;

    const rect = widget.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;

    const iframe = widget.querySelector('iframe');
    if (iframe) iframe.style.pointerEvents = 'none';

    document.body.style.userSelect = 'none';
  }

  function doDrag(e) {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    widget.style.left = `${initialLeft + deltaX}px`;
    widget.style.top = `${initialTop + deltaY}px`;
    widget.style.bottom = 'auto';
    widget.style.right = 'auto';
  }

  function stopDrag() {
    if (!isDragging) return;
    isDragging = false;

    const iframe = widget.querySelector('iframe');
    if (iframe) iframe.style.pointerEvents = 'auto';

    document.body.style.userSelect = '';
  }

 
  handle.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);

  handle.addEventListener('touchstart', startDrag, { passive: true });
  document.addEventListener('touchmove', doDrag, { passive: true });
  document.addEventListener('touchend', stopDrag);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', makeSpotifyDraggable);
} else {
  makeSpotifyDraggable();
}