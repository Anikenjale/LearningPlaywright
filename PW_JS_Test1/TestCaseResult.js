    testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
    let pCount=0;
    let fCount=0;
    let sCount=0;
    for(let i=0;i<testResults.lenght;i++)
    {
        if(testResults[i]==="pass")
            {
                pCount++;
            }
        else if(testResults[i]==="fail")
        {
            fCount++;
        }
        else if(testResults[i]==="skip")
        {
            sCount++;
        }
    }

    const totalTests=testResults.lenght;
    const passRate=(pCount/totalTests)*100;

    let verdict="";
    if(fCount===0)
    {
        vardict="Ready for Realease";
    }
    else if(fCount<=2)
    {
        vardict="Minor failures, Review before release";
    }
    else 
    {
        vardict="Block Release";
    }

    console.log(`Total Teats:${totalTests} Passed:${pCount} Failed:${fCount} Skipped:${sCount}`);
    console.log(`Pass Rate: ${passRate.toFixed(2)}% VARDICT: ${verdict}`);