const services = [
    {
        title: 'Website Design & Development',
        description: 'Beautiful, responsive websites that engage your audience and drive results.',
        icon: '<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />'
    },
    {
        title: 'Python Development',
        description: 'Custom Python applications and solutions tailored to your needs.',
        icon: '<path d="M16 18L22 12L16 6"></path><path d="M8 6L2 12L8 18"></path>'
    },
    {
        title: 'Streamlit Applications',
        description: 'Interactive data applications and dashboards using Streamlit.',
        icon: '<path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path>'
    },
    {
        title: 'Testing & QA',
        description: 'Comprehensive testing solutions including regression testing and test automation.',
        icon: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path>'
    },
    {
        title: 'Deployment Services',
        description: 'Seamless deployment and hosting solutions for your applications.',
        icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>'
    },
    {
        title: 'Documentation',
        description: 'Detailed software documentation and testing procedures.',
        icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>'
    }
];

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';

    card.innerHTML = `
        <div class="service-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                ${service.icon}
            </svg>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
    `;

    return card;
}

function initServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach(service => {
        servicesGrid.appendChild(createServiceCard(service));
    });
}
