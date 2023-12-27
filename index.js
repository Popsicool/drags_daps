const txt = document.querySelector('#copyText').innerText
const button = document.querySelector('#cooop')
button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Address copied to clipboard")
    } catch (err) {
      console.error(err.name, err.message);
    }
  });

  const txt2 = document.querySelector('#copyText2').innerText
  const button2 = document.querySelector('#ccpp')
  button2.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(txt2);
        alert("Address copied to clipboard")
      } catch (err) {
        console.error(err.name, err.message);
      }
    });