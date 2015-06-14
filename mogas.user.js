// ==UserScript==
// @name        mogas
// @namespace   http://mogas.tejaratasan.ir/*
// @include     http://mogas.tejaratasan.ir/*
// @version     2.0
// @grant       none
// ==/UserScript==
if (window.location == 'http://mogas.tejaratasan.ir/protected/reqlist.aspx')
{
    function reqlist_f() {
        GridView1_ctl02_LinkButton1.href = GridView1_ctl02_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl03_LinkButton1.href = GridView1_ctl03_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl04_LinkButton1.href = GridView1_ctl04_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl05_LinkButton1.href = GridView1_ctl05_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl06_LinkButton1.href = GridView1_ctl06_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl07_LinkButton1.href = GridView1_ctl07_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl08_LinkButton1.href = GridView1_ctl08_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl09_LinkButton1.href = GridView1_ctl09_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl10_LinkButton1.href = GridView1_ctl10_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl11_LinkButton1.href = GridView1_ctl11_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl12_LinkButton1.href = GridView1_ctl12_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl13_LinkButton1.href = GridView1_ctl13_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl14_LinkButton1.href = GridView1_ctl14_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl15_LinkButton1.href = GridView1_ctl15_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl16_LinkButton1.href = GridView1_ctl16_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl17_LinkButton1.href = GridView1_ctl17_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl18_LinkButton1.href = GridView1_ctl18_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl19_LinkButton1.href = GridView1_ctl19_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl20_LinkButton1.href = GridView1_ctl20_LinkButton1.href.replace('window.close();', '');
        GridView1_ctl21_LinkButton1.href = GridView1_ctl21_LinkButton1.href.replace('window.close();', '');
        
    }
    document.onload = reqlist_f();
} 
else if (window.location == 'http://mogas.tejaratasan.ir/protected/default.aspx')
{
    function default_f() {
        ddlOperations.value = 3;
        btnDoIt.click();
    }
    document.onload = default_f();
} 
else if (window.location == 'http://mogas.tejaratasan.ir/protected/approve.aspx')
{
    try{
        MANaftGazYaraneMovafeghatLitresookht.value = NaftGazYaraneDarkhastLitre.innerHTML
        MANaftGazYaraneMovafeghatLitre.value = NaftGazYaraneDarkhastLitre.innerHTML
        MANaftGazYaraneMovafeghatTozihat.value = 'سوخت موتورپمپ چاه آب کشاورزي'
        MANaftGazYaraneMovafeghatLitreKhorak.value = '0'
        MANaftGazYaraneMovafeghatZakhireh.value = '0'
    }
    catch(err){
        MAnaftGazMovafeghatLitresookht.value = naftGazDarkhastLitre.innerHTML
        MAnaftGazMovafeghatLitre.value = naftGazDarkhastLitre.innerHTML
        MAnaftGazMovafeghatTozihat.value = 'سوخت موتورپمپ چاه آب کشاورزي'
        MAnaftGazMovafeghatLitreKhorak.value = '0'
        MAnaftGazMovafeghatZakhireh.value = '0'
    }
    RBLMAAction_0.checked="checked" ;
    var thisDay = getTodayPersian();
    var y,m,d;
    y=thisDay[0];
    m=thisDay[1];
    d=thisDay[2];

    y.toString();
    if(m<10){
       m='0'+m;
       m.toString();
    }
    else
       m.toString();

    if(d<10){
       d='0'+m;
       d.toString();
    }
    else
       d.toString();

    var pdate=y+'/'+m+'/'+d;
    pdate.toString();
    

    MAtarikhBazdid.value=pdate;
    
    MAbtnApprove.click();
    document.onload = aprove_f();
}
