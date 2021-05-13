let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');

for (let btn of buttons) {
  btn.addEventListener('click', () => {
    let cmd = btn.dataset['command'];
    if (cmd === 'createlink') {
      let url = prompt("Informe o link: ", "http:\/\/");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }

    if (cmd === 'fontSize') {
      let size = prompt("Informe o tamanho entre 1-7: ", 3);
      document.execCommand(cmd, false, size);
    } else {
      document.execCommand(cmd, false, null);
    }

    if (cmd === 'formatBlock') {
      let tag = prompt("Informe a tag HTML que deseja formatar: ", "<p>");
      document.execCommand(cmd, false, tag);
    } else {
      document.execCommand(cmd, false, null);
    }
  })
}