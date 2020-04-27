function gradeEvaluate() {
    var math = document.getElementById("math").value;
    var sci = document.getElementById("science").value;
    var eng = document.getElementById("english").value;
    var fil = document.getElementById("filipino").value;
    var pe = document.getElementById("pe").value;

    maths = parseInt(math);
    scis = parseInt(sci);
    engs = parseInt(eng);
    fils = parseInt(fil);
    pes = parseInt(pe);

    //Math
    if(maths >= 90 && maths <= 100)
    {
        document.querySelector("#mathRemarks").textContent = "Excellent";
    }
    if(maths >= 80 && maths <= 89)
    {
        document.querySelector("#mathRemarks").textContent = "Good";
    }
    if(maths >= 70 && maths <= 79)
    {
        document.querySelector("#mathRemarks").textContent = "Average";
    }
    if(maths >= 60 && maths <= 69)
    {
        document.querySelector("#mathRemarks").textContent = "Poor";
    }
    if(maths >= 0 && maths <= 59)
    {
        document.querySelector("#mathRemarks").textContent = "Fail";
    }
    //Science
    if(scis >= 90 && scis <= 100)
    {
        document.querySelector("#sciRemarks").textContent = "Excellent";
    }
    if(scis >= 80 && scis <= 89)
    {
        document.querySelector("#sciRemarks").textContent = "Good";
    }
    if(scis >= 70 && scis <= 79)
    {
        document.querySelector("#sciRemarks").textContent = "Average";
    }
    if(scis >= 60 && scis <= 69)
    {
        document.querySelector("#sciRemarks").textContent = "Poor";
    }
    if(scis >= 0 && scis <= 59)
    {
        document.querySelector("#sciRemarks").textContent = "Fail";
    }
    //English
    if(engs >= 90 && engs <= 100)
    {
        document.querySelector("#engRemarks").textContent = "Excellent";
    }
    if(engs >= 80 && engs <= 89)
    {
        document.querySelector("#engRemarks").textContent = "Good";
    }
    if(engs >= 70 && engs <= 79)
    {
        document.querySelector("#engRemarks").textContent = "Average";
    }
    if(engs >= 60 && engs <= 69)
    {
        document.querySelector("#engRemarks").textContent = "Poor";
    }
    if(engs >= 0 && engs <= 59)
    {
        document.querySelector("#engRemarks").textContent = "Fail";
    }
    //Filipino
    if(fils >= 90 && fils <= 100)
    {
        document.querySelector("#filRemarks").textContent = "Excellent";
    }
    if(fils >= 80 && fils <= 89)
    {
        document.querySelector("#filRemarks").textContent = "Good";
    }
    if(fils >= 70 && fils <= 79)
    {
        document.querySelector("#filRemarks").textContent = "Average";
    }
    if(fils >= 60 && fils <= 69)
    {
        document.querySelector("#filRemarks").textContent = "Poor";
    }
    if(fils >= 0 && fils <= 59)
    {
        document.querySelector("#filRemarks").textContent = "Fail";
    }
    //P.E
    if(pes >= 90 && pes <= 100)
    {
        document.querySelector("#peRemarks").textContent = "Excellent";
    }
    if(pes >= 80 && pes <= 89)
    {
        document.querySelector("#peRemarks").textContent = "Good";
    }
    if(pes >= 70 && pes <= 79)
    {
        document.querySelector("#peRemarks").textContent = "Average";
    }
    if(pes >= 60 && pes <= 69)
    {
        document.querySelector("#peRemarks").textContent = "Poor";
    }
    if(pes >= 0 && pes <= 59)
    {
        document.querySelector("#peRemarks").textContent = "Fail";
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 90 && maths != 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis != 90 && scis != 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs != 90 && engs != 100)
            {
                if(fils != 90 && fils != 100)
                {
                    if(pes != 90 && pes != 100)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 80 && maths != 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis != 80 && scis != 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs != 80 && engs != 89)
            {
                if(fils != 80 && fils != 89)
                {
                    if(pes != 80 && pes != 89)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    //
    if(maths != 70 && maths != 74)
    {
        if(maths != 70 && maths != 74)
        {
            if(maths != 70 && maths != 74)
            {
                if(maths != 70 && maths != 74)
                {
                    if(maths >= 70 && maths <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(maths != 70 && maths != 74)
        {
            if(maths != 70 && maths != 74)
            {
                if(maths >= 70 && maths <= 74)
                {
                    if(maths != 70 && maths != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(maths != 70 && maths != 74)
        {
            if(maths >= 70 && maths <= 74)
            {
                if(maths != 70 && maths != 74)
                {
                    if(maths != 70 && maths != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(maths >= 70 && maths <= 74)
        {
            if(maths != 70 && maths != 74)
            {
                if(maths != 70 && maths != 74)
                {
                    if(maths != 70 && maths != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(maths != 70 && maths != 74)
        {
            if(maths != 70 && maths != 74)
            {
                if(maths != 70 && maths != 74)
                {
                    if(maths != 70 && maths != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 70 && maths <= 74)
    {
        if(maths >= 70 && maths <= 74)
        {
            if(maths >= 70 && maths <= 74)
            {
                if(maths >= 70 && maths <= 74)
                {
                    if(maths != 70 && maths != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(maths >= 70 && maths <= 74)
        {
            if(maths >= 70 && maths <= 74)
            {
                if(maths != 70 && maths != 74)
                {
                    if(maths >= 70 && maths <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(maths >= 70 && maths <= 74)
        {
            if(maths != 70 && maths != 74)
            {
                if(maths >= 70 && maths <= 74)
                {
                    if(maths >= 70 && maths <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(maths != 70 && maths != 74)
        {
            if(maths >= 70 && maths <= 74)
            {
                if(maths >= 70 && maths <= 74)
                {
                    if(maths >= 70 && maths <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(maths >= 70 && maths <= 74)
        {
            if(maths >= 70 && maths <= 74)
            {
                if(maths >= 70 && maths <= 74)
                {
                    if(maths >= 70 && maths <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths != 70 && maths != 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 70 && maths != 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis != 70 && scis != 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs != 70 && engs != 74)
            {
                if(fils != 70 && fils != 74)
                {
                    if(pes != 70 && pes != 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths != 75 && maths != 79)
    {
        if(maths != 75 && maths != 79)
        {
            if(maths != 75 && maths != 79)
            {
                if(maths != 75 && maths != 79)
                {
                    if(maths >= 75 && maths <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(maths != 75 && maths != 79)
        {
            if(maths != 75 && maths != 79)
            {
                if(maths >= 75 && maths <= 79)
                {
                    if(maths != 75 && maths != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(maths != 75 && maths != 79)
        {
            if(maths >= 75 && maths <= 79)
            {
                if(maths != 75 && maths != 79)
                {
                    if(maths != 75 && maths != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(maths >= 75 && maths <= 79)
        {
            if(maths != 75 && maths != 79)
            {
                if(maths != 75 && maths != 79)
                {
                    if(maths != 75 && maths != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(maths != 75 && maths != 79)
        {
            if(maths != 75 && maths != 79)
            {
                if(maths != 75 && maths != 79)
                {
                    if(maths != 75 && maths != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 75 && maths <= 79)
    {
        if(maths >= 75 && maths <= 79)
        {
            if(maths >= 75 && maths <= 79)
            {
                if(maths >= 75 && maths <= 79)
                {
                    if(maths != 75 && maths != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(maths >= 75 && maths <= 79)
        {
            if(maths >= 75 && maths <= 79)
            {
                if(maths != 75 && maths != 79)
                {
                    if(maths >= 75 && maths <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(maths >= 75 && maths <= 79)
        {
            if(maths != 75 && maths != 79)
            {
                if(maths >= 75 && maths <= 79)
                {
                    if(maths >= 75 && maths <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(maths != 75 && maths != 79)
        {
            if(maths >= 75 && maths <= 79)
            {
                if(maths >= 75 && maths <= 79)
                {
                    if(maths >= 75 && maths <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(maths >= 75 && maths <= 79)
        {
            if(maths >= 75 && maths <= 79)
            {
                if(maths >= 75 && maths <= 79)
                {
                    if(maths >= 75 && maths <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths != 75 && maths != 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths != 75 && maths != 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis != 75 && scis != 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs != 75 && engs != 79)
            {
                if(fils != 75 && fils != 79)
                {
                    if(pes != 75 && pes != 79)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    //1
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Summer Student";
                    }
                }
            }
        }
    }
    //
    
    //
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Fifth Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 70 && maths <= 74)
    {
        if(scis >= 70 && scis <= 74)
        {
            if(engs >= 70 && engs <= 74)
            {
                if(fils >= 70 && fils <= 74)
                {
                    if(pes >= 70 && pes <= 74)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Third Honorable Student";
                    }
                }
            }
        }
    }
    //Rank
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Top Honor Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Fourth Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass"; 
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Fourth Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Fourth Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Fourth Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Fourth Honorable Student";
                    }
                }
            }
        }
    }
    //4
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    //Second Hon 3
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 80 && pes <= 89)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 80 && fils <= 89)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 80 && engs <= 89)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    if(maths >= 80 && maths <= 89)
    {
        if(scis >= 80 && scis <= 89)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Second Honorable Student";
                    }
                }
            }
        }
    }
    //2
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    //1
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    //
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 75 && pes <= 79)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 75 && fils <= 79)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 75 && engs <= 79)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 90 && maths <= 100)
    {
        if(scis >= 75 && scis <= 79)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    if(maths >= 75 && maths <= 79)
    {
        if(scis >= 90 && scis <= 100)
        {
            if(engs >= 90 && engs <= 100)
            {
                if(fils >= 90 && fils <= 100)
                {
                    if(pes >= 90 && pes <= 100)
                    {
                        document.querySelector("#result").textContent = "Pass";
                    }
                }
            }
        }
    }
    //Repeater
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //4 & 1- Repeater Poor
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //4 - Repeater Fail
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //3 & 2 Repeater Poor
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    //3 & 2 Repeater Fail
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 9)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 9)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 0 && maths <= 59)
    {
        if(scis >= 60 && scis <= 69)
        {
            if(engs >= 60 && engs <= 69)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 60 && pes <= 69)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 60 && fils <= 69)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 0 && scis <= 59)
        {
            if(engs >= 60 && engs <= 9)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
    if(maths >= 60 && maths <= 69)
    {
        if(scis >= 60 && scis <= 9)
        {
            if(engs >= 0 && engs <= 59)
            {
                if(fils >= 0 && fils <= 59)
                {
                    if(pes >= 0 && pes <= 59)
                    {
                        document.querySelector("#result").textContent = "Repeater";
                    }
                }
            }
        }
    }
}