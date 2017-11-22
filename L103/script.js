while (true) {
    var x = +prompt('martivi an ara', '');
    var isPrime = true;
    if (isNaN(x)) {
        alert('arasworia');
        continue
    }
    for (var i = 2; i < x; i++) {

        if (x % i == 0) {

            isPrime = false;
            break;
        }

    }


    if (isPrime == false) {
        alert('არ არის მარტივი');
    }
    else {

        alert('მარტივია');

    }



}