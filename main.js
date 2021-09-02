var bill=document.getElementById('bill');
var pourcent_5=document.getElementById('5_pourcent');
var pourcent_10=document.getElementById('10_pourcent');
var pourcent_15=document.getElementById('15_pourcent');
var pourcent_25=document.getElementById('25_pourcent');
var pourcent_50=document.getElementById('50_pourcent');
var pourcent_custom=document.getElementById('custom_pourcent');
var nb_people=document.getElementById('nb_people');
var tip_amount=document.getElementById('tip_amount');
var total_person=document.getElementById('total_person');
var reset=document.getElementById('reset');

var pourcent, error = document.getElementById('error');

pourcent_5.addEventListener('click',event =>{
  pourcent=5/100;
  pourcent_5.style.color = 'hsl(183, 100%, 15%)';
    pourcent_5.style.backgroundColor =  'hsl(172, 67%, 45%)';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
});
pourcent_10.addEventListener('click',event =>{
  pourcent=10/100;
  pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = 'hsl(183, 100%, 15%)';;
    pourcent_10.style.backgroundColor =  'hsl(172, 67%, 45%)';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
});
pourcent_15.addEventListener('click',event =>{
  pourcent=15/100;
  pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = 'hsl(183, 100%, 15%)';
    pourcent_15.style.backgroundColor =  'hsl(172, 67%, 45%)';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
});
pourcent_25.addEventListener('click',event =>{
  pourcent=25/100;
  pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = 'hsl(183, 100%, 15%)';
    pourcent_25.style.backgroundColor =  'hsl(172, 67%, 45%)';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
});
pourcent_50.addEventListener('click',event =>{
  pourcent=50/100;
  pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = 'hsl(183, 100%, 15%)';
    pourcent_50.style.backgroundColor =  'hsl(172, 67%, 45%)';
});
pourcent_custom.addEventListener('input',event =>{
  pourcent=pourcent_custom.value/100;
  pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
});

nb_people.addEventListener('input', event =>{
  if(nb_people.value=='0'){
    error.style.display='block';
    nb_people.style.backgroundColor = 'hsl(13, 59%, 60%)';
  }
  else if (nb_people.value=='') {
    tip_amount.textContent='$0.00';
    total_person.textContent='$0.00';
    nb_people.style.backgroundColor = '';
  }
  else{
    error.style.display='none';
    nb_people.style.backgroundColor = '';
    tip_amount.textContent='$'+((bill.value / nb_people.value) * pourcent).toFixed(2);
    total_person.textContent='$'+((bill.value / nb_people.value) + (bill.value / nb_people.value) * pourcent).toFixed(2);
  }
});

reset.addEventListener('click', event => {
    bill.value = '';
    nb_people.value = '';
    pourcent_5.style.color = '';
    pourcent_5.style.backgroundColor =  '';
    pourcent_10.style.color = '';
    pourcent_10.style.backgroundColor =  '';
    pourcent_15.style.color = '';
    pourcent_15.style.backgroundColor =  '';
    pourcent_25.style.color = '';
    pourcent_25.style.backgroundColor =  '';
    pourcent_50.style.color = '';
    pourcent_50.style.backgroundColor =  '';
    pourcent_custom.value = '';
    tip_amount.textContent = '$0.00';
    total_person.textContent = '$0.00';
});
