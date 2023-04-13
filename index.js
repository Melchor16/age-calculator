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

let actual_date = new Date;

$date_form.addEventListener('submit', e=>{
    e.preventDefault();
    let day = Number($day.value),
    month = Number($month.value),
    year = Number($year.value);

    let proceed = true; //if there's an error in one of the fields the program doesn't proceed

    $day.value === '' ? $req_day.classList.remove('vis-hidden') : $req_day.classList.add('vis-hidden');
    $month.value === '' ? $req_month.classList.remove('vis-hidden') : $req_month.classList.add('vis-hidden');
    $year.value === '' ? $req_year.classList.remove('vis-hidden') : $req_year.classList.add('vis-hidden');

    // VALID FORM LOGIC
    if(day > 0 && day < 32){    //validates day
        if((month===4||month===6||month===9||month===11) && day>30){    //validates 30 days months
            console.log('error')
            proceed=false;
        }else if(month===2 && day>28){      //validates fabruary (doesn't accept leap-years)
            console.log('error')
            proceed=false;
        }else{
            console.log('ok')
            proceed=true;
        }
    }else if((day <= 0 || day > 31 || isNaN(day)) && $day.value !== ''){    //day error
        console.log('error')
        proceed=false;
    }

    if(month > 0 && month < 13){    //validates month
        console.log('ok')
        proceed=true;
    }else if((month <= 0 || month > 12 || isNaN(month)) && $month.value !== ''){    //month error
        console.log('error')
        proceed=false;
    }

    if(year > 0 && year <= actual_date.getFullYear()){    //validates year
        console.log('ok')
        proceed=true;
    }else if((year <= 0 || year > actual_date.getFullYear() || isNaN(year)) && $year.value !== ''){  //year error
        console.log('error')
        proceed=false;
    }

    //PROCEED LOGIC
    if(proceed){
        let input_date = new Date(`${year}-${month}-${day}`);

        if(input_date<actual_date){ //validates that the input date is in the past
            let age_day = actual_date.getDate() - input_date.getDate(),
            age_month = actual_date.getMonth() - input_date.getMonth(),
            age_year = actual_date.getFullYear() - input_date.getFullYear();
            
        }else{
            console.log('false')
        }
    }
    
})