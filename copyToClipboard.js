function copyToClipboard(text, element) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Change the icon to checkmark for a short duration
    const originalIcon = element.textContent;
    element.textContent = 'Copié ✔';
    setTimeout(() => {
        element.textContent = originalIcon;
    }, 600);
}