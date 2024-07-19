document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');

            Object.keys(data).forEach(categoryKey => {
                const category = data[categoryKey];

                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category', categoryKey);

                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = `${category.total} ${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}`;
                categoryDiv.appendChild(categoryTitle);

                const cardsDiv = document.createElement('div');
                cardsDiv.classList.add('cards');

                

                Object.keys(category.by_country).forEach(countryKey => {
                    const card = document.createElement('div');
                    card.classList.add('card');

               
                    const totalCard = document.createElement('div');
                    totalCard.classList.add('total');
                    const totalData = document.createElement('p');
                    totalData.textContent = `${category.by_country[countryKey]}`;
                    totalCard.appendChild(totalData);

                    const countryCard = document.createElement('div');
                    countryCard.classList.add('country');
                    const countryData = document.createElement('p');
                    countryData.textContent = `${countryKey}`;
                    countryCard.appendChild(countryData);

                    card.appendChild(totalCard);
                    card.appendChild(countryCard);

                    cardsDiv.appendChild(card);
                });

                categoryDiv.appendChild(cardsDiv);
                container.appendChild(categoryDiv);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
