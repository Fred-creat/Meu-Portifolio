


  var form = document.getElementById("formulário");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Obrigado por entrar em contato!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Houve algum problema com seu contato!"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Houve algum problema com seu contato!"
    });
  }
  form.addEventListener("submit", handleSubmit)
