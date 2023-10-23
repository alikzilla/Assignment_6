const tds = document.querySelectorAll('td');

    tds.forEach((td) => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = td.innerText;
        td.appendChild(tooltip);

        td.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        td.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });