function exampleFetch() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(async response => {
            var status = response.statusText;

            console.info('response status: ' +  status);

            if (response.ok) {
                console.info('response ok');
            } else {
                console.error('response error');
            }

            let responseJson = await response.json();

            console.info('json: ');
            console.info(responseJson);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

exampleFetch();