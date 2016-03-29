/**
 * This code replaces double spaces in the titles of cards into <br>.
 */

/**
 * A flag used to ignore the modification by this code.
 */
let replacedProgrammatically = false;

/**
 * Get all the titles in cards and replace double spaces int <br>
 */
function replace() {
    let titles = document.getElementsByClassName('list-card-title');
    titles = [].slice.call(titles);
    titles.forEach((title) => {
        const newTitle = title.innerHTML.replace(/ {2}/g, '<br>');
        title.innerHTML = newTitle;
    });
    replacedProgrammatically = true;
}

/**
 * Defines card creation/modification/deletion listener.
 */
const observer = new MutationObserver(() => {
    if (replacedProgrammatically) {
        replacedProgrammatically = false;
        return;
    }
    replace();
});

observer.observe(document.body, { childList: true, subtree: true });
