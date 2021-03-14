const contactBtn = document.querySelector('.contact-button');
const copyText = document.querySelector('.copy-text');
let oldText;

const copyBtnText = () => {
    copyText.select();
    document.execCommand('copy');
    contactBtn.innerText = 'Copied!';
}

contactBtn.addEventListener('mouseenter', (e) => {
    oldText = e.target.innerText;
    e.target.innerText = 'Copy to clipboard';
    e.preventDefault();
})

contactBtn.addEventListener('mouseleave', (e) => {
    e.target.innerText = oldText;
    e.preventDefault();
})

contactBtn.addEventListener('click', copyBtnText);

