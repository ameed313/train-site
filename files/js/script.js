var result = '<table>';

for (i = 0; i <= 5; i++)
     {
    result += '<tr>';
    for (j = 1; j <= 10; j++) {
        result += '<td>' + (i) * (j) + '</td>';
    }
    result += '</tr>';
}
result += '</table>';
document.getElementById('box').innerHTML = result;


