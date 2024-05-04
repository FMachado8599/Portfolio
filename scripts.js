let icons = [];
fetch("./json/icons.json")
    .then( (resp) => resp.json() )
    .then( (data) => {
        data.forEach((post) => {
            icons.push(post);
        });
    })
    .catch((error) => {
        console.error("Error al cargar icons.", error);
    });
