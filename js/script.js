document.addEventListener('DOMContentLoaded', function() {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            document.querySelector('.cookies').style.display = 'none';
        });
    }
});

const today = new Date();

// Calcular la fecha de hace 2 días
const last2Days = new Date(today);
last2Days.setDate(today.getDate() - 2);

// Formatear la fecha en formato ISO 8601 (YYYY-MM-DD)
const fromDate = last2Days.toISOString().split('T')[0];

// Función para obtener noticias de salud en español
async function fetchNews() {
    const url = `https://newsapi.org/v2/everything?q="salud pública"&language=es&from=${fromDate}&pageSize=5&sortBy=relevancy&apiKey=e72cd6b40e6c43d8a99181b9fd6edf13`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Datos recibidos (ES):', data);
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching the news (ES):', error);
    }
}

// Nueva función para obtener noticias de salud en inglés
async function fetchNewsInEnglish() {
    const url = `https://newsapi.org/v2/everything?q="public health"&language=en&from=${fromDate}&pageSize=5&sortBy=relevancy&apiKey=e72cd6b40e6c43d8a99181b9fd6edf13`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Datos recibidos (EN):', data);
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching the news (EN):', error);
    }
}

// Mostrar noticias en el contenedor
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Limpiar contenido previo
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'news-article';
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Leer más</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función de noticias según el idioma
    if (document.documentElement.lang === 'en') {
        fetchNewsInEnglish();  // Llamar noticias en inglés
    } else {
        fetchNews();  // Llamar noticias en español
    }
});


// Configuración de la API de Nutritionix
const baseUrl = 'https://api.nutritionix.com/v1_1/search';
const appId = 'c88d99a4';
const appKey = '0b677506daca79eeb0a28dfbbba308c6';

const query = 'healthy';
const fields = 'item_name,brand_name,nf_calories,nf_total_fat,nf_sugars,nf_protein';

// Construir la URL para buscar alimentos relacionados con "dieta saludable"
const dietUrl = `https://api.nutritionix.com/v1_1/search?query=healthy&appId=c88d99a4&appKey=0b677506daca79eeb0a28dfbbba308c6`;

// Obtener datos de alimentos saludables
fetch(dietUrl)
  .then(response => response.json())
  .then(data => {
    if (data.hits && data.hits.length > 0) {
      displayDietTips(data.hits);
    } else {
      console.log('No se encontraron alimentos para la dieta saludable.');
    }
  })
  .catch(error => {
    console.error('Error al hacer la solicitud a Nutritionix:', error);
  });

// Mostrar los consejos de dieta en el contenedor
function displayDietTips(items) {
    const dietContainer = document.getElementById('diet-container');
    items.slice(0, 5).forEach(item => {
        const foodItem = item.fields;

        // Crear un nuevo div para cada alimento
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('food-item');
        foodDiv.innerHTML = `
            <h3>${foodItem.item_name}</h3>
            <p><strong>Marca:</strong> ${foodItem.brand_name}</p>
            <p><strong>Calorías:</strong> ${foodItem.nf_calories} kcal</p>
            <p><strong>Grasas:</strong> ${foodItem.nf_total_fat}g</p>
            <p><strong>Azúcares:</strong> ${foodItem.nf_sugars}g</p>
            <p><strong>Proteínas:</strong> ${foodItem.nf_protein}g</p>
        `;
        dietContainer.appendChild(foodDiv);
    });
}
