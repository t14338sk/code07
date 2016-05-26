function campaignNumber(customer){
if (customer.age>=30&&
customer.sex==1&&
customer.maried){
return 1;
}

else if(customer.sex==2&&
customer.maried){
return 3;
}

else if(customer.age>19&&
customer.age<30&&
customer.sex==2&&
customer.maried){
return 2;
}
return 4;
}
