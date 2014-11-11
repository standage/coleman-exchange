var kids = ["Stephanie", "Nathan", "Rachel", "Sarah", "Johannah",
            "Charles", "Jessica", "Jared", "John", "Isaac"];

function FillTable()
{
  var gt = document.getElementById("GiftTable");
  var ys = document.getElementById("YearSelect");
  var sv = ys.options[ys.selectedIndex].value;
  if(sv == "---")
    return;
  
  gt.innerHTML = "";
  var thead = document.createElement("thead");
  var hrow = document.createElement("tr");
  var gheader = document.createElement("th");
  gheader.innerHTML = "Giver";
  gheader.style.textAlign = "right";
  hrow.appendChild(gheader);
  var rheader = document.createElement("th");
  rheader.innerHTML = "Receiver";
  rheader.style.textAlign = "left";
  hrow.appendChild(rheader);
  thead.appendChild(hrow);
  gt.appendChild(thead);
  
  var offset = sv - 1;
  while(offset > 9)
    offset -= 9;
  for(var i = 0; i < kids.length; i++)
  {
    var row = document.createElement("tr");
    var giver = document.createElement("td");
    giver.style.textAlign = "right";
    giver.innerHTML = kids[i];
    row.appendChild(giver);
    
    var receiver = document.createElement("td");
    var rindex = i-offset;
    if(rindex < 0)
      rindex += 10;
    receiver.style.textAlign = "left";
    receiver.innerHTML = kids[rindex];
    row.appendChild(receiver);
    gt.appendChild(row);
  }
}

function FillSelect()
{
  var opt = document.createElement("option");
  opt.innerHTML = "---";
  document.getElementById("YearSelect").appendChild(opt);
  for(var i = 2014; i < 2034; i++)
  {
    opt = document.createElement("option");
    opt.innerHTML = i;
    document.getElementById("YearSelect").appendChild(opt);
  }
}