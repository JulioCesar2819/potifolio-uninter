document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('external-link-btn');
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#0056b3';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#007BFF';
    });
});