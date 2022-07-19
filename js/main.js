function pobierz () {
    let b = 'Błąd';
    
    let i = prompt('Podaj imię');
    let s = prompt('Podaj nazwisko');
    let e = prompt('Podaj email');
    
    if (i !== "") {
        document.getElementById('fname').value = i;
    } else {
        document.getElementById('fname').value = b;
    }

    if (s !== "") {
        document.getElementById('sname').value = s;
    } else {
        document.getElementById('sname').value = b;
    }

    if (e !== "") {
        document.getElementById('email').value = e;
    } else {
        document.getElementById('email').value = b;
    }
}

pobierz();
