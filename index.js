const d=document,
$date_form = d.getElementById('date-form'),
$day = d.getElementById('day'),
$month = d.getElementById('month'),
$year = d.getElementById('year'),
//results
$result_year = d.getElementById('number-year'),
$result_month = d.getElementById('number-month'),
$result_day = d.getElementById('number-day'),
//requested error
$req_day = d.getElementById('required-day'),
$req_month = d.getElementById('required-month'),
$req_year = d.getElementById('required-year'),
//incorrect error
$inc_day = d.getElementById('incorrect-day'),
$inc_month = d.getElementById('incorrect-month'),
$inc_year = d.getElementById('incorrect-year');


let actual_date = new Date,
day_miliseconds = 24 * 60 * 60 * 1000;



$date_form.addEventListener('submit', e=>{
    e.preventDefault();
    let day = Number($day.value),
    month = Number($month.value),
    year = Number($year.value);

    let proceed = true; //if there's an error in one of the fields the program doesn't proceed


    // ------- REQUIRED INPUTS ---------
    if($day.value === ''){
        $req_day.classList.remove('vis-hidden', 'hidden');
        $inc_day.classList.add('hidden')
    }else{
        $req_day.classList.add('vis-hidden');
    }

    if($month.value === ''){
        $req_month.classList.remove('vis-hidden', 'hidden');
        $inc_month.classList.add('hidden')
    }else{
        $req_month.classList.add('vis-hidden');
    }

    if($year.value === ''){
        $req_year.classList.remove('vis-hidden', 'hidden');
        $inc_year.classList.add('hidden')
    }else{
        $req_year.classList.add('vis-hidden');
    }
    
    // -------- VALID FORM LOGIC --------
    if(day > 0 && day < 32){    //validates day
        if((month===4||month===6||month===9||month===11) && day>30){    //validates 30 days months
            $inc_day.classList.remove('hidden');
            $req_day.classList.add('hidden');
            proceed=false;
        }else if(month===2 && day>28){      //validates fabruary (doesn't accept leap-years)
            $inc_day.classList.remove('hidden');
            $req_day.classList.add('hidden');
            proceed=false;
        }else{
            $inc_day.classList.add('hidden');
            $req_day.classList.add('vis-hidden');
            $req_day.classList.remove('hidden');
            proceed=true;
        }
    }else if((day <= 0 || day > 31 || isNaN(day)) && $day.value !== ''){    //day error
        $inc_day.classList.remove('hidden');
        $req_day.classList.add('hidden');
        proceed=false;
    }

    if(month > 0 && month < 13){    //validates month
        $inc_month.classList.add('hidden');
        $req_month.classList.add('vis-hidden');
        $req_month.classList.remove('hidden');
        proceed=true;
    }else if((month <= 0 || month > 12 || isNaN(month)) && $month.value !== ''){    //month error
        $inc_month.classList.remove('hidden');
        $req_month.classList.add('hidden');
        proceed=false;
    }

    if(year > 0 && year <= actual_date.getFullYear()){    //validates year
        $inc_year.classList.add('hidden');
        $req_year.classList.add('vis-hidden');
        $req_year.classList.remove('hidden');
        proceed=true;
    }else if((year <= 0 || year > actual_date.getFullYear() || isNaN(year)) && $year.value !== ''){  //year error
        $inc_year.classList.remove('hidden');
        $req_year.classList.add('hidden');
        proceed=false;
    }

    // ------- PROCEED LOGIC --------
    if(proceed){
        let input_date = new Date(`${year}-${month}-${day}`);

        if(input_date<actual_date){ //validates that the input date is in the past
            let final_age = (Math.round(Math.abs((actual_date - input_date)/day_miliseconds))-1),
            final_years = Math.floor(final_age/365),
            left_days = final_age%365,
            final_months = Math.floor(left_days/30),
            final_days = Math.floor(left_days%30);

            $result_year.innerHTML=final_years;
            $result_month.innerHTML=final_months;
            $result_day.innerHTML=final_days;

        }else{
               
        }
    }
    
})