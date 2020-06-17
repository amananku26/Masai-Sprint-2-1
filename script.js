//function to get values, store them into an array and display them one below other. 

arr = []
arr1 = []

function IncomeAmountEntry() {
    // get value of income from the first input box
    var showIncome = Number(document.getElementById('incomeAmountValues').value)
    var showIncomeSource = document.getElementById('income1').value;
    // console.log(showIncome)
    arr.push(showIncome)
        // console.log(showIncomeSource)
        // arr.push(incomeAmountValues)
        // var amount = ''
    var AmountValue = document.createElement('div')

    // AmountValue.setAttribute("class", "amtdiv")

    var sourceValue = document.createElement('div')

    // sourceValue.setAttribute("class", "txtdiv")
    AmountValue.innerHTML = showIncome
    sourceValue.innerHTML = showIncomeSource


    // for (var i = 0; i < arr.length; i++) {
    //     amount = amount + arr[i]
    // }IncomeSource
    // var x = document.getElementById('IncomeAmount').innerHTML = showIncome
    // var y = document.getElementById('IncomeSource').innerHTML = showIncomeSource
    document.getElementById("IncomeAmount").append(AmountValue)
    document.getElementById("IncomeSource").append(sourceValue)
    console.log(arr)

}

function IncomeSpentEntry() {
    var showSpent = Number(document.getElementById('spentAmount').value)
    var showSpentSource = document.getElementById('spent').value;
    arr1.push(showSpent)
        // console.log(p)
        //     var q = document.getElementById('spentAmountShow').innerHTML = p
        //     var y = document.getElementById('spentSource').innerHTML = showSpentSource
    var SpentValue = document.createElement('div')
    var IncomesourceValue = document.createElement('div')

    SpentValue.innerHTML = showSpent
    IncomesourceValue.innerHTML = showSpentSource


    document.getElementById("spentAmountShow").append(SpentValue)
    document.getElementById("spentSource").append(IncomesourceValue)
    console.log(arr1)

}

function total() {
    var sum = 0
    var count = 0



    for (var j = 0; j < arr1.length; j++) {
        count = count + arr1[j]

    }
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
    console.log(count)
    var showTotal = sum - count
    console.log(showTotal)
    if (showTotal == 0) {
        var out = "ZERO BALANCE"
    } else if (showTotal < 0) {
        out = "YOUR SPENT IS MORE THEN INCOME"
    } else if (showTotal > 0 && showTotal < 5000) {
        out = "BALANCE IS LOW:.. " + showTotal
    } else if (showTotal >= 5000) {
        out = "WOW! YOUR BALANCE IS " + showTotal
    }
    document.getElementById('total-amount').innerHTML = out

}