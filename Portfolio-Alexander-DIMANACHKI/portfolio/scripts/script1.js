function toggleColumnsOnHover(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', function() {
        document.getElementById('photo1').classList.remove('col-lg-4');
        this.classList.remove('col-lg-2');
        this.classList.add('col-lg-4');
    });
    element.addEventListener('mouseout', function() {
        this.classList.remove('col-lg-4');
        this.classList.add('col-lg-2');
    });
}

toggleColumnsOnHover('photo1');
toggleColumnsOnHover('photo2');
toggleColumnsOnHover('photo3');
toggleColumnsOnHover('photo4');
toggleColumnsOnHover('photo5');

document.getElementById('redsnimki').addEventListener('mouseleave', function() {
    // Add col-lg-4 class to the first photo when the mouse leaves the section
    //document.getElementById('photo1').classList.remove('col-lg-2');
    document.getElementById('photo1').classList.add('col-lg-4');
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header nav a, header img');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            let targetId = link.getAttribute('href');
            if (!targetId && link.tagName === 'IMG') {
                targetId = '#ad7'; // Replace with the section ID you want to scroll to when the logo is clicked
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
