const logo = document.querySelectorAll('#logo > path');

for(i=0; i< logo.length; i++){
    console.log(`${i}` + logo[i].getTotalLength());
}