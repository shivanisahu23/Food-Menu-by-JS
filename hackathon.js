// let input = require('readline-sync');
// let n = input.question("Enter your input");
// console.log(n);
console.log("Welcome to Sizzle spott\n")
 let input = require("readline-sync");
 console.log('1.Monday\n2.Tuesday\n3.Wednessday\n4.Thrusday\n5.Friday\n6.Saturday\n7.Sunday\n\n');
 let Day = Number(input.question("Enter Day's Number\n"));
 if(Day === 1) {
    console.log('1.Breakfast\n2.Lunch\n3.Dinner\n');
    let time = Number(input.question("Enter your Time\n"));
    if(time > 3){
        console.log("Invalid Input")
    } else if(time === 1) {
        console.log('1.Classic Breakfast\n2.Healthy Start\n3.Brunch Special\n4.International Flavors\n');
        let type = Number(input.question("Enter Type's Number\n"));
        if(type === 1) {
            console.log('1.Scrambled Eggs \n2.Fresh fruit slices\n3.Masala Dosa\n4.Idli-Sambar\n5.Paratha with Aloo Bhaji\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 60/-\n2.Half-plate 35/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                
                if(plateType === 1){
                    console.log("Payable amount = 60/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 60){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 60;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 60 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 35/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 35){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 35 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 75/-\n2.Half-plate 40/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 75/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 75){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 75){
                        paidExtra = pay - 75;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 75 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
                
            }else if( Dish === 3) {
                console.log('1.Full-plate 40/-\n2.Half-plate 25/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else if(plateType === 2){
                    console.log("Payable amount = 25/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 25){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 25){
                        paidExtra = pay - 25;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 25 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 5) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 2) {
            console.log('1.Oats Upam \n2.Moong Dal Cheela\n3.Sprouts Salad\n4.Yougurt with fresh Berries\n5.Fruit Smoothie with Almond Milk\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 40/-\n2.Half-plate 25/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 25/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 25){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 25){
                        paidExtra = pay - 25;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 25 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 5) {
                console.log('1.Full-plate 60/-\n2.Half-plate 35/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 60/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 60){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 60;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 60 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 35/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 35){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 35;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 35 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 3) {
            console.log('1.Pav Bhaji \n2.Egg Cury & Roti\n3.Chole Bhature\n4.Masala Omlette\n5.Paneer Bhurji & Roti\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 5) {
                console.log('1.Full-plate 60/-\n2.Half-plate 35/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 60/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 60){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 60;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 60 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 35/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 35){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 35;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 35 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 4) {
            console.log('1.Baked Beans\n2.Sweet corn\n3.Fluffy Pancake with maple syrup\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }
            }
        }
    }else if(time === 2) {
        console.log('1.Appetizer\n2.Main Course\n3.Side Dishes\n4.Desert\n');
        let type = Number(input.question("Enter Type's Number\n"));
        if(type === 1) {
            console.log('1.Vegetable Pakora \n2.Vegetable pakora\n3.Paneer Tikka\n4.Spring Rolls\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 2) {
            console.log('1.Veg Biryani with Panner \n2.Butter Chicken\n3.Dal Makhni\n4.Veg stir-fry with tofu\n5.\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 400/-\n2.Half-plate 250/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 300/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 300){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 300){
                        paidExtra = pay - 300;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 400 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 160/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 160){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 160){
                        paidExtra = pay - 160;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 160 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 400/-\n2.Half-plate 250/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 400/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 400){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 400){
                        paidExtra = pay - 400;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 400 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 250/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 250){
                        paidExtra = pay - 250;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 250 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 250/-\n2.Half-plate 130/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 250/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 250){
                        paidExtra = pay - 250;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 250 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 130/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 130){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 130){
                        paidExtra = pay - 130;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 130 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 350/-\n2.Half-plate 180/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 350/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 350){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 350){
                        paidExtra = pay - 350;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 350 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 180/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 180){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 180){
                        paidExtra = pay - 180;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 180 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 3) {
            console.log('1.Cucumber Raita \n2.Rosted Vegetable\n3.Palak Paneer\n\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 60/-\n2.Half-plate 30/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 60/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 60){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 60;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 60 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 4) {
            console.log('1.Gulab Jamun\n2.Rasgulla\n3.Chocolate Mousse\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 50/-\n2.Half-plate 25/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 25/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 25){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 25){
                        paidExtra = pay - 25;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 25 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }
    }else if(time === 3) {
        console.log('1.Appetizer\n2.Main Course\n3.Side Dishes\n4.Desert\n5.Beverage\n');
        let type = Number(input.question("Enter Type's Number\n"));
        if(type === 1) {
            console.log('1.Papdi Chaat \n2.Veg Cutlets\n3.Stuffed Mushroom\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 30/-\n2.Half-plate 15/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 15/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 15){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 15){
                        paidExtra = pay - 15;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 15 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 2) {
            console.log('1. Dal Tadka \n2.Spaghetti Carbonar\n3.Desi Thali\n4.Paneer Butter Masala\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 400/-\n2.Half-plate 250/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 300/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 300){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 300){
                        paidExtra = pay - 300;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 400 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 160/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 160){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 160){
                        paidExtra = pay - 160;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 160 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 100/-\n2.Half-plate 50/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 100/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 100){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 100){
                        paidExtra = pay - 100;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 100 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 250/-\n2.Half-plate 130/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 250/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 250){
                        paidExtra = pay - 250;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 250 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 130/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 130){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 130){
                        paidExtra = pay - 130;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 130 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 4) {
                console.log('1.Full-plate 350/-\n2.Half-plate 180/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 350/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 350){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 350){
                        paidExtra = pay - 350;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 350 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 180/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 180){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 180){
                        paidExtra = pay - 180;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 180 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 3) {
            console.log('1.Baigan Bharta \n2.Bhindi Masala\n3.Mushroom Ristta\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 50/-\n2.Half-plate 30/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 30/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 30){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 30){
                        paidExtra = pay - 30;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 30 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                } else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 80/-\n2.Half-plate 40/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 80/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 80){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 80){
                        paidExtra = pay - 80;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 80 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else {
                    console.log("Invalid Input, Please Try Again")
                }
            }
        }else if(type === 5) {
            console.log('1.Mango Lasi\n2.Mojito\n3.Masala Chai\n');
            let Dish = Number(input.question("Enter Dish's Number\n"));
            if( Dish === 1) {
                console.log('1.Full-plate 40/-\n2.Half-plate 20/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 40/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 40){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 40){
                        paidExtra = pay - 40;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 40 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 20/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 20){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 20){
                        paidExtra = pay - 20;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 20 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 2) {
                console.log('1.Full-plate 120/-\n2.Half-plate 65/-\n\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 120/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 120){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 120){
                        paidExtra = pay - 120;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 120 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 60/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 60){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 60){
                        paidExtra = pay - 60;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 60 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else if( Dish === 3) {
                console.log('1.Full-plate 50/-\n2.Half-plate 25/-\n');
                let plateType = Number(input.question("Enter PlateType's Number\n"));
                if(plateType === 1){
                    console.log("Payable amount = 50/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 50){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 50){
                        paidExtra = pay - 50;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 50 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else if(plateType === 2){
                    console.log("Payable amount = 25/-");
                    let pay = Number(input.question("Enter the required Amount for the Food"));
                    let amount = pay;
                    if(pay === 25){
                        console.log("Order Placed Sucessfully");
                        console.log("ThankYou");
                    } else if(pay > 25){
                        paidExtra = pay - 25;
                        console.log("You have paid extra you can collect the excess amount", paidExtra , "which you paid from the coounter Thankyou!")
                    } else {
                        restToPay = 25 - amount;
                        console.log( restToPay, "= Pay The Rest amount");
                        let payAgain = Number(input.question("Enter the rest of required Amount for the Food"));
                        if(payAgain === restToPay) {
                            console.log("Order Placed Sucessfully");
                            console.log("ThankYou");
                        } else {
                            console.log("Order Cancled");
                        }
                    }
                }else {
                    console.log("Invalid Input, Please Try Again")
                }
            }else {
                console.log("Invalid Input, Please Try Again")
            }
        }else {
            console.log("Invalid Input, Please Try Again")
        }
    }else {
        console.log("Invalid Input, Please Try Again")
    }
 } else {
    console.log("Invalid Input, Please Try Again")
}
