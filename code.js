$(document).ready(function () {
    $("form").on("submit", loanApproved)
});

function loanApproved() {
    event.preventDefault();

    let creditScoreInput = parseFloat($("input#creditScore").val());
    let salary = parseFloat($("input#salary").val());
    let months = parseFloat($("input#monthsAtJob").val());
    let approval;
    if (salary>=40000){
        if(creditScoreInput >=600){
            approval = "Loan Approved";
        }
        else if(months>12){
            approval = "Loan Approved"
        }
        else{
            approval = "Loan Denied"
        }
    }
    else if (salary<40000){
        if(creditScoreInput >=600){
            if (months > 12){
                approval = "Loan Approved"
            }
        }
        else{
            approval = "Loan Denied"
        }
    }

    $("#output").text(approval);
}

