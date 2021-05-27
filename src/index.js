
function displayHello() {
    const a = 1;
    const obj = {
        a,
        ...{
            b: 1,
            c: 2,
        }
    };
    console.log(obj);
    document.body.innerHTML = `
        <h1>Welcome</h1>
    `;
}

displayHello();
