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

  const button2 = document.querySelector('#ccpp')
  button2.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(txt);
        alert("Address copied to clipboard")
      } catch (err) {
        console.error(err.name, err.message);
      }
    });