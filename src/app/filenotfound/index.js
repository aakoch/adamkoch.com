function run() {
    let h1 = document.querySelector('.large-text');
    const words = h1.innerText.split(' ');
    function wrap(word) {
      const node = document.createElement('span')
      node.classList.add('word')

      const letters = word.split('');
      //- console.log(letters)
      

      node.innerHTML = letters.map(l => {
        const n = document.createElement('span')
        n.classList.add('letter')
        n.textContent = l
        return n.outerHTML
      }).join(' ')

      return node.outerHTML
    }
    h1.innerHTML = words.map(wrap).join(' ')
}

export default run;