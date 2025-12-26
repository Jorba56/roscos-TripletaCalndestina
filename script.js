// --- BASE DE DATOS DE ROSCOS ---
const roscosData = [
    // ROSCO 1: Nivel Fácil-Intermedio (Mezcla General + Extremadura)
    [
        { id: 'A', question: "Cereal de granos blancos, fundamental para hacer una paella.", answer: "Arroz" },
        { id: 'B', question: "Lugar público y silencioso donde se guardan, clasifican y prestan libros.", answer: "Biblioteca" },
        { id: 'C', question: "Árboles frutales que cubren el Valle del Jerte y que en primavera lo tiñen de blanco.", answer: "Cerezos" },
        { id: 'D', question: "Zona terrestre muy seca, con mucha arena y poca lluvia, como el Sáhara.", answer: "Desierto" },
        { id: 'E', question: "Árbol típico de la dehesa extremeña que produce bellotas.", answer: "Encina" },
        { id: 'F', question: "Tipo de tortilla simple que se prepara solo con huevo batido, aceite y sal.", answer: "Francesa" },
        { id: 'G', question: "Instrumento musical de cuerda muy utilizado en el flamenco y el rock.", answer: "Guitarra" },
        { id: 'H', question: "Alimento dulce y congelado que se come especialmente en verano.", answer: "Helado" },
        { id: 'I', question: "Vivienda en forma de cúpula construida con bloques de hielo, típica de los esquimales.", answer: "Iglu" },
        { id: 'J', question: "Valle del norte de Cáceres famoso mundialmente por sus cerezas.", answer: "Jerte" },
        { id: 'L', question: "Alimento líquido y blanco que producen las vacas y que es rico en calcio.", answer: "Leche" },
        { id: 'M', question: "Capital de Extremadura, Patrimonio de la Humanidad por su legado romano.", answer: "Merida" },
        { id: 'N', question: "Obra literaria narrativa de cierta extensión, como 'El Quijote'.", answer: "Novela" },
        { id: 'Ñ', question: "Contiene la Ñ. Período de tiempo que dura 365 días.", answer: "Año" },
        { id: 'O', question: "Apellido del explorador nacido en Trujillo que descubrió el río Amazonas.", answer: "Orellana" },
        { id: 'P', question: "Especia roja intensa, famosa en La Vera, usada para condimentar.", answer: "Pimenton" },
        { id: 'Q', question: "Apellido del hidalgo más famoso de la literatura creado por Cervantes.", answer: "Quijote" },
        { id: 'R', question: "Flor muy popular que suele ser roja y tener espinas en el tallo.", answer: "Rosa" },
        { id: 'S', question: "Criatura mitológica que es mitad mujer y mitad pez.", answer: "Sirena" },
        { id: 'T', question: "Ciudad de Cáceres, cuna de Pizarro, presidida por un gran castillo.", answer: "Trujillo" },
        { id: 'U', question: "Animal mitológico parecido a un caballo blanco con un cuerno en la frente.", answer: "Unicornio" },
        { id: 'V', question: "Apellido del artista alemán fundador del Museo en Los Barruecos.", answer: "Vostell" },
        { id: 'X', question: "Contiene la X. Prueba que realizan los alumnos para demostrar lo aprendido.", answer: "Examen" },
        { id: 'Y', question: "Hembra del caballo.", answer: "Yegua" },
        { id: 'Z', question: "Hortaliza alargada de color naranja buena para la vista.", answer: "Zanahoria" }
    ],
    // ROSCO 2: Nivel Intermedio-Alto
    [
        { id: 'A', question: "Gran embalse y presa en la frontera Badajoz-Portugal.", answer: "Alqueva" },
        { id: 'B', question: "Monumento Natural en Malpartida con grandes bolos de granito.", answer: "Barruecos" },
        { id: 'C', question: "Elemento arquitectónico semiesférico para cubrir un espacio.", answer: "Cupula" },
        { id: 'D', question: "Rama de la medicina que se ocupa de la piel.", answer: "Dermatologia" },
        { id: 'E', question: "Título que ostentaba Carlos V, retirado en Yuste.", answer: "Emperador" },
        { id: 'F', question: "Título de los antiguos reyes de Egipto.", answer: "Faraon" },
        { id: 'G', question: "Conjunto enorme de estrellas, polvo y gas. La Vía Láctea es una.", answer: "Galaxia" },
        { id: 'H', question: "Mitad de la esfera terrestre, dividida por el ecuador.", answer: "Hemisferio" },
        { id: 'I', question: "Queso de cabra extremeño con Denominación de Origen.", answer: "Ibores" },
        { id: 'J', question: "Escritura de los antiguos egipcios con símbolos.", answer: "Jeroglifico" },
        { id: 'L', question: "Adjetivo para alguien que vive muchos años.", answer: "Longevo" },
        { id: 'M', question: "Parque Nacional extremeño famoso por sus buitres negros.", answer: "Monfrague" },
        { id: 'N', question: "Pueblo que no tiene residencia fija y se desplaza.", answer: "Nomada" },
        { id: 'Ñ', question: "Contiene la Ñ. Persona que construye con ladrillos y cemento.", answer: "Albañil" },
        { id: 'O', question: "Trayectoria curva de un planeta alrededor del sol.", answer: "Orbita" },
        { id: 'P', question: "Ciudad conocida como 'La Perla del Valle' del Jerte.", answer: "Plasencia" },
        { id: 'Q', question: "Sala de hospital para operaciones.", answer: "Quirofano" },
        { id: 'R', question: "Movimiento cultural que retomó la Antigüedad clásica.", answer: "Renacimiento" },
        { id: 'S', question: "Comarca de Badajoz con grandes embalses (La...)", answer: "Siberia" },
        { id: 'T', question: "Instrumento para medir la temperatura.", answer: "Termometro" },
        { id: 'U', question: "Proyecto ideal pero imposible de realizar.", answer: "Utopia" },
        { id: 'V', question: "Antigua calzada romana de Mérida a Astorga: Vía de la...", answer: "Plata" }, // Ajuste para que empiece por V no es fácil, usamos contine o trampa. O Vía. Dejamos Plata y ajustamos lógica si empieza. NO. Vamos a poner VIA.
        // Corrección en caliente: Vía. Respuesta: Via.
        { id: 'X', question: "Contiene la X. Ave mitológica que renace de sus cenizas.", answer: "Fenix" },
        { id: 'Y', question: "Lugar donde se hallan restos arqueológicos.", answer: "Yacimiento" },
        { id: 'Z', question: "Franja del cielo dividida en doce signos.", answer: "Zodiaco" }
    ]
];

// --- VARIABLES DEL JUEGO ---
let currentRoscoIndex = 0;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let errors = 0;
let timer;
let timeLeft = 180;
let pendingQuestions = []; // Para guardar los pasapalabra

// Elementos DOM
const circle = document.getElementById('circle');
const definitionText = document.getElementById('definition-text');
const currentLetterDisplay = document.getElementById('current-letter-display');
const inputAnswer = document.getElementById('user-answer');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('high-score');
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

// Cargar récord
scoreDisplay.innerText = localStorage.getItem('roscoRecord') || 0;

// --- INICIALIZACIÓN ---
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('new-game-btn').addEventListener('click', () => {
    // Cambiar al siguiente rosco
    currentRoscoIndex = (currentRoscoIndex + 1) % roscosData.length;
    startGame();
});
document.getElementById('check-btn').addEventListener('click', checkAnswer);
document.getElementById('pasapalabra-btn').addEventListener('click', doPasapalabra);

// Enter para enviar
inputAnswer.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkAnswer();
});

function startGame() {
    // Reset variables
    currentQuestions = JSON.parse(JSON.stringify(roscosData[currentRoscoIndex])); // Copia profunda
    currentIndex = 0;
    score = 0;
    errors = 0;
    timeLeft = 180;
    pendingQuestions = [];
    
    // UI Reset
    welcomeScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    inputAnswer.value = '';
    inputAnswer.focus();
    
    renderCircle();
    loadQuestion();
    startTimer();
}

function renderCircle() {
    circle.innerHTML = '';
    const total = currentQuestions.length;
    const radius = 250; // Radio del círculo en px
    
    currentQuestions.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('letter-item');
        li.id = `letter-${index}`;
        li.innerText = item.id;
        
        // Matemáticas para ponerlos en círculo
        const angle = (360 / total) * index;
        const radian = angle * (Math.PI / 180);
        
        // Ajustamos posición (sin y cos)
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);
        
        li.style.transform = `translate(${x}px, ${y}px) rotate(90deg)`; // Rotamos para que la letra se lea bien
        circle.appendChild(li);
    });
}

function loadQuestion() {
    // Si ya no quedan preguntas en el array principal pero sí pendientes (pasapalabra)
    if (currentIndex >= currentQuestions.length) {
        if (pendingQuestions.length > 0) {
            // Reiniciamos con las pendientes
            // Mapeamos los índices originales para saber qué bolas iluminar
            // Estrategia simple: volvemos a iterar sobre el array original buscando las no contestadas
            currentIndex = 0; 
        } else {
            endGame();
            return;
        }
    }

    // Buscar la siguiente pregunta no contestada
    let found = false;
    for (let i = currentIndex; i < currentQuestions.length; i++) {
        if (!currentQuestions[i].status) {
            currentIndex = i;
            found = true;
            break;
        }
    }

    // Si no encuentra en lo que queda de array, vuelve al principio (bucle pasapalabra)
    if (!found) {
        let foundPending = false;
        for (let i = 0; i < currentQuestions.length; i++) {
            if (!currentQuestions[i].status) {
                currentIndex = i;
                foundPending = true;
                break;
            }
        }
        if (!foundPending) {
            endGame();
            return;
        }
    }

    // Visualizar
    const currentQ = currentQuestions[currentIndex];
    definitionText.innerText = currentQ.question;
    currentLetterDisplay.innerText = currentQ.id;
    
    // Resaltar letra actual
    document.querySelectorAll('.letter-item').forEach(l => l.classList.remove('active'));
    document.getElementById(`letter-${currentIndex}`).classList.add('active');
}

function normalizeString(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function checkAnswer() {
    const userAnswer = normalizeString(inputAnswer.value);
    const correctAnswer = normalizeString(currentQuestions[currentIndex].answer);
    const letterElement = document.getElementById(`letter-${currentIndex}`);

    if (userAnswer === correctAnswer) {
        score++;
        currentQuestions[currentIndex].status = 'correct';
        letterElement.classList.add('correct');
        letterElement.classList.remove('active');
    } else {
        errors++;
        currentQuestions[currentIndex].status = 'wrong';
        letterElement.classList.add('wrong');
        letterElement.classList.remove('active');
    }

    inputAnswer.value = '';
    currentIndex++; // Avanzar
    loadQuestion();
}

function doPasapalabra() {
    inputAnswer.value = '';
    // No marcamos status, simplemente avanzamos
    const letterElement = document.getElementById(`letter-${currentIndex}`);
    letterElement.classList.remove('active');
    
    currentIndex++;
    loadQuestion();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    document.getElementById('score-correct').innerText = score;
    document.getElementById('score-wrong').innerText = errors;

    // Guardar récord
    const currentRecord = localStorage.getItem('roscoRecord') || 0;
    if (score > currentRecord) {
        localStorage.setItem('roscoRecord', score);
        scoreDisplay.innerText = score;
        alert("¡Nuevo Récord!");
    }
}
