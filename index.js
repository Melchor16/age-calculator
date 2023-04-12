const d=document,
$date_form = d.getElementById('date-form'),
$day = d.getElementById('day'),
$month = d.getElementById('month'),
$year = d.getElementById('year'),
$result_year = d.getElementById('number-year'),
$result_month = d.getElementById('number-month'),
$result_day = d.getElementById('number-day'),
$req_day = d.getElementById('required-day'),
$req_month = d.getElementById('required-month'),
$req_year = d.getElementById('required-year');


$date_form.addEventListener('submit', e=>{
    e.preventDefault();
    let day = Number($day.value),
    month = Number($month.value),
    year = Number($year.value);

    day === 0 ? $req_day.classList.remove('vis-hidden') : $req_day.classList.add('vis-hidden');
    month === 0 ? $req_month.classList.remove('vis-hidden') : $req_month.classList.add('vis-hidden');
    year === 0 ? $req_year.classList.remove('vis-hidden') : $req_year.classList.add('vis-hidden');

    if(day > 0 && day < 32){
        console.log('ok')
    }else if(day < 1 || day > 31){
        console.log(day)
    }

  
})