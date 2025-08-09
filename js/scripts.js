document.addEventListener('DOMContentLoaded', function() {
    const properties = [
        {
            image: 'images/image1.jpg',
            alt: 'Недвижимость 1',
            title: 'Прекрасный пентхаус',
            description: 'Просторная квартира с видом на океан. Имеет 3 спальни, 2 ванные комнаты, кухню с современным оборудованием и большую террасу.',
            price: '$1,500,000'
        },
        {
            image: 'images/image2.jpg',
            alt: 'Недвижимость 2',
            title: 'Уютный коттедж',
            description: 'Просторный дом с приватным двором и бассейном. Имеет 4 спальни, 3 ванные комнаты, гараж на две машины и современную кухню.',
            price: '$2,200,000',
            specialPrice: '$2,000,000'
        }
    ];

    const mainElement = document.querySelector('main');
    let propertiesHTML = '';

    properties.forEach(property => {
        let priceHTML = '';
        if (property.specialPrice) {
            priceHTML = `
                <div class="price">
                    <span class="original-price">${property.price}</span>
                    <span class="special-price">${property.specialPrice}</span>
                </div>
            `;
        } else {
            priceHTML = `<div class="price">${property.price}</div>`;
        }

        propertiesHTML += `
            <div class="property">
                <img src="${property.image}" alt="${property.alt}">
                <div class="details">
                    <h2>${property.title}</h2>
                    <p>${property.description}</p>
                    ${priceHTML}
                </div>
            </div>
        `;
    });

    propertiesHTML += '<!-- Добавьте больше недвижимости по вашему желанию -->';

    mainElement.innerHTML = propertiesHTML;
});
