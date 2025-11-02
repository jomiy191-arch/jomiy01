// Burger toggle
const burger = document.querySelector('.burger');
const headerList = document.querySelector('.header-list');

burger.addEventListener('click', () => {
    headerList.classList.toggle('active');
    burger.classList.toggle('active');
});

// Smooth scroll + burger menyu yopish
document.querySelectorAll('.header-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Agar burger menyu ochiq bo'lsa, yopish
        if(headerList.classList.contains('active')) {
            headerList.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});

// Counter animation
const counters = document.querySelectorAll(".about-list h1");
const defaultSpeed = 19000; 

counters.forEach(counter => {
    const li = counter.closest("li");
    const target = +counter.getAttribute("data-target");
    const customSpeed = li.getAttribute("data-speed");
    const speed = customSpeed ? +customSpeed : defaultSpeed; 

    let count = 0;
    const numEl = counter.querySelector(".num");
    const suffixEl = counter.querySelector(".k-suffix");
    const isK = li.classList.contains("has-k");

    if (isK) suffixEl.textContent = "K";

    const stepTime = Math.max(10, Math.floor(speed / (target || 1)));

    function formatDisplay(val) {
        if (!isK) return String(val);
        const valueInK = val / 1000;
        return Number.isInteger(valueInK)
            ? String(valueInK)
            : valueInK.toFixed(1).replace(/\.0$/, "");
    }

    function updateCounter() {
        if (li.classList.contains("pause") || count >= target) return;
        count++;
        numEl.innerText = formatDisplay(count);

        if (count >= target) {
            numEl.innerText = formatDisplay(target);
            return;
        }
        setTimeout(updateCounter, stepTime);
    }
    updateCounter();
});