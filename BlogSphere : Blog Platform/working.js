document.addEventListener("DOMContentLoaded", function () {
    const visibleSections = document.querySelectorAll('.fifth-sec-right-arrow-text-visible');

    visibleSections.forEach((section, index) => {
        const arrow = section.querySelector('img');
        arrow.style.transition = "transform 250ms ease";

        section.addEventListener('click', function () {

            const hiddenSection = section.nextElementSibling;
            if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
                hiddenSection.style.display = "block";
            } else {
                hiddenSection.style.display = "none";
            }

            if (arrow.style.transform === "rotate(180deg)") {
                arrow.style.transform = "rotate(0deg)";
            } else {
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const resourcesVisible = document.getElementById("res-visible");
    const resourcesHidden = document.getElementById("res-hidden");
    const creatorsVisible = document.getElementById("cre-visible");
    const creatorsHidden = document.getElementById("cre-hidden");
    const exploreVisible = document.getElementById("exp-visible");
    const exploreHidden = document.getElementById("exp-hidden");

    function toggleSection(visibleSection, hiddenSection, arrowSelector) {
        visibleSection.addEventListener("click", function () {
            if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
                hiddenSection.style.display = "block";
                if (hiddenSection == resourcesHidden) {
                    resourcesVisible.style.marginBottom = "-14vh";
                    resourcesHidden.style.marginBottom = "-30vh";
                }
                else if (hiddenSection == creatorsHidden) {
                    creatorsVisible.style.marginBottom = "-20vh";
                    creatorsHidden.style.marginBottom = "-20vh";
                }
                else {
                    exploreVisible.style.marginBottom = "-10vh";
                    exploreHidden.style.marginBottom = "-10vh";
                }

            }
            else {
                hiddenSection.style.display = "none";
                resourcesVisible.style.marginBottom = "35vh";
                creatorsVisible.style.marginBottom = "35vh";
                exploreVisible.style.marginBottom = "35vh";
            }
        });
    }

    toggleSection(resourcesVisible, resourcesHidden, 'img');
    toggleSection(creatorsVisible, creatorsHidden, 'img');
    toggleSection(exploreVisible, exploreHidden, 'img');

    const allHiddenSections = document.querySelectorAll(".nav2-res-hidden-text, .nav2-cre-hidden-text, .nav2-exp-hidden-text");
    allHiddenSections.forEach(hidden => {
        hidden.style.transition = "max-height 250ms ease";
        hidden.style.overflow = "hidden";
    });
});
