// 1. Welcome message
console.log("Welcome to Dorcas Portfolio!");
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Download CV
    const downloadBtn = document.querySelector('.secondary-btn');
    if(downloadBtn && downloadBtn.tagName === 'BUTTON'){
        downloadBtn.addEventListener('click', () => {
            alert("Add your CV as 'Dorcas-CV.pdf' in folder to make download work!");
        });
    }

    // 2. View Project - inafungua link
    document.querySelectorAll('.viewBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            if(link && link !== 'https://github.com/'){
                window.open(link, '_blank');
            } else {
                alert("Project link not added yet! Weka link yako ya GitHub au Live demo hapo kwenye data-link");
            }
        });
    });


    // 3. Delete Project - inafuta card
    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            if(confirm("Are you sure you want to delete this project?")){
                btn.closest('.project-card').remove();
            }
        });
    });

    // 4. Hire Me - scroll to contact
    const hireBtn = document.querySelector('.primary-btn');
    if(hireBtn){
        hireBtn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
