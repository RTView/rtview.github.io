document.addEventListener('DOMContentLoaded', () => {
    const modelButton = document.getElementById('model-button');
    const materialButton = document.getElementById('material-button');
    const modelGroup = document.getElementById('model-group');
    const materialGroup = document.getElementById('material-group');

    modelButton.addEventListener('click', () => {
        hideGroup(materialGroup);
        toggleGroup(modelGroup);
    });

    materialButton.addEventListener('click', () => {
        hideGroup(modelGroup);
        toggleGroup(materialGroup);
    });

    function toggleGroup(group) {
        const isVisible = group.classList.contains('show');
        if (isVisible) {
            hideGroup(group);
        } else {
            showGroup(group);
        }
    }

    function showGroup(group) {
        group.classList.add('show');
        setTimeout(() => {
            const buttons = group.querySelectorAll('.option-button');
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.classList.add('show');
                }, index * 100);
            });
        }, 10);
    }

    function hideGroup(group) {
        const buttons = group.querySelectorAll('.option-button');
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.remove('show');
            }, index * 100);
        });
        setTimeout(() => {
            group.classList.remove('show');
        }, buttons.length * 100);
    }
});