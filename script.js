```css
/* ================================
   GENERAL
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    background: #0b0f19;
    color: #ffffff;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

section {
    min-height: 100vh;
}


/* ================================
   NAVBAR
================================ */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(11, 15, 25, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 26px;
    font-weight: 700;
    color: #00d9ff;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    font-size: 14px;
    color: #d7d7d7;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #00d9ff;
}


/* ================================
   HERO
================================ */

.hero {
    min-height: 100vh;
    padding: 120px 10% 60px;

    display: flex;
    align-items: center;

    background:
        radial-gradient(circle at 80% 30%, rgba(0, 217, 255, 0.12), transparent 30%),
        radial-gradient(circle at 20% 70%, rgba(120, 70, 255, 0.10), transparent 30%),
        #0b0f19;
}

.hero-content {
    max-width: 850px;
}

.hello {
    color: #00d9ff;
    font-size: 16px;
    letter-spacing: 3px;
    font-weight: 600;
    margin-bottom: 12px;
}

.hero h1 {
    font-size: clamp(45px, 8vw, 85px);
    line-height: 1.1;
    margin-bottom: 15px;
}

.hero h2 {
    font-size: clamp(24px, 4vw, 40px);
    font-weight: 500;
    color: #d9d9d9;
}

.hero h2 span {
    color: #00d9ff;
}

.intro {
    max-width: 700px;
    margin-top: 20px;
    color: #aeb5c2;
    font-size: 17px;
}

.buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 13px 25px;
    border-radius: 30px;
    background: #00d9ff;
    color: #061018;
    font-weight: 600;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.25);
}

.btn.secondary {
    background: transparent;
    color: #ffffff;
    border: 1px solid #00d9ff;
}


/* ================================
   SECTIONS
================================ */

.section {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 110px 0 80px;
}

.section-title {
    text-align: center;
    font-size: 42px;
    margin-bottom: 60px;
}

.section-title span {
    color: #00d9ff;
}


/* ================================
   ABOUT
================================ */

.about-content {
    display: flex;
    justify-content: center;
}

.about-card {
    max-width: 850px;
    padding: 40px;

    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;

    transition: 0.3s;
}

.about-card:hover {
    transform: translateY(-5px);
    border-color: #00d9ff;
}

.about-card h3 {
    color: #00d9ff;
    font-size: 25px;
    margin-bottom: 20px;
}

.about-card p {
    color: #b7beca;
    margin-bottom: 15px;
}


/* ================================
   SKILLS
================================ */

.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.skill-card {
    background: #111827;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-7px);
    border-color: #00d9ff;
}

.skill-card h3 {
    color: #00d9ff;
    margin-bottom: 25px;
    font-size: 22px;
}

.skill {
    margin-bottom: 20px;
}

.skill p {
    margin-bottom: 7px;
    color: #dce1e8;
}

.progress {
    width: 100%;
    height: 7px;
    background: #252c3a;
    border-radius: 10px;
    overflow: hidden;
}

.progress span {
    display: block;
    height: 100%;
    background: #00d9ff;
    border-radius: 10px;
}


/* ================================
   EDUCATION
================================ */

.education-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.education-card {
    padding: 30px;
    background: #111827;
    border-radius: 20px;
    border-left: 4px solid #00d9ff;
    transition: 0.3s;
}

.education-card:hover {
    transform: translateY(-7px);
}

.education-card span {
    color: #00d9ff;
    font-size: 14px;
}

.education-card h3 {
    margin: 15px 0;
    font-size: 21px;
}

.education-card p {
    color: #b7beca;
    margin-bottom: 8px;
}

.education-card strong {
    color: #ffffff;
}


/* ================================
   PROJECTS
================================ */

.projects-section {
    max-width: 1200px;
}

.projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.project-card {
    background: #111827;
    padding: 30px;
    border-radius: 20px;

    border: 1px solid rgba(255, 255, 255, 0.08);

    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: #00d9ff;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.project-icon {
    font-size: 45px;
    margin-bottom: 15px;
}

.project-card h3 {
    font-size: 21px;
    margin-bottom: 15px;
}

.project-card p {
    color: #b7beca;
    font-size: 14px;
    margin-bottom: 20px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tags span {
    padding: 5px 10px;
    border-radius: 20px;
    background: #1c2635;
    color: #00d9ff;
    font-size: 12px;
}


/* ================================
   SOFT SKILLS
================================ */

.soft-skills {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.soft-skills div {
    padding: 15px 25px;
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 30px;
    color: #dce1e8;
    transition: 0.3s;
}

.soft-skills div:hover {
    color: #00d9ff;
    border-color: #00d9ff;
    transform: translateY(-4px);
}


/* ================================
   CONTACT
================================ */

.contact-section {
    text-align: center;
}

.contact-section > p {
    color: #b7beca;
    margin-bottom: 35px;
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.contact-info a {
    padding: 13px 20px;
    background: #111827;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.3s;
}

.contact-info a:hover {
    color: #00d9ff;
    border-color: #00d9ff;
    transform: translateY(-4px);
}


/* ================================
   FOOTER
================================ */

footer {
    text-align: center;
    padding: 25px;
    background: #080c14;
    color: #858d9b;
    font-size: 14px;
}


/* ================================
   RESPONSIVE DESIGN
================================ */

@media (max-width: 900px) {

    .nav-links {
        gap: 15px;
    }

    .skills-container,
    .education-container,
    .projects-container {
        grid-template-columns: 1fr;
    }

    .hero {
        padding-left: 7%;
        padding-right: 7%;
    }
}


@media (max-width: 650px) {

    .navbar {
        height: auto;
        padding: 18px 0;
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }

    .hero {
        padding-top: 160px;
        text-align: center;
    }

    .intro {
        font-size: 15px;
    }

    .buttons {
        justify-content: center;
    }

    .section {
        padding-top: 100px;
    }

    .section-title {
        font-size: 34px;
    }

    .about-card {
        padding: 25px;
    }
}
```

### 3️⃣ `script.js`

```javascript
// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Simple scroll reveal animation
const cards = document.querySelectorAll(
    ".about-card, .skill-card, .education-card, .project-card, .soft-skills div"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});
```

### 📁 Folder ila undali

```text
Gangothri-Portfolio/
│
├── index.html
├── style.css
├── script.js
└── resume.pdf
```

**Important:** `resume.pdf` place lo nee actual resume PDF ni same folder lo copy chesi **`resume.pdf`** ani rename cheyyi. Appudu **Download Resume** button work avutundi.

Nee resume lo unna actual profile details ni base chesi build chestunnam.

Next manam **portfolio ni inka attractive ga** cheddam: **nee photo + Java Full Stack skill icons + GitHub/LinkedIn buttons + project live-demo buttons + mobile hamburger menu** add cheyyachu.

