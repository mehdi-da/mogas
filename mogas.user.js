// ==UserScript==
// @name        mogas
// @namespace   http://mogas.tejaratasan.ir/*
// @include     http://mogas.tejaratasan.ir/*
// @version     1.0
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
        /*
        GridView1_ctl02_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl03_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl04_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl05_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl06_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl07_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl08_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl09_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl10_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl11_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl12_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl13_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl14_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl15_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl16_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl17_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl18_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl19_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl20_LinkButton1.addEventListener('click', on_reql_click, false);
        GridView1_ctl21_LinkButton1.addEventListener('click', on_reql_click, false);*/
    }
    /*
    function on_reql_click()
    {
        //setTimeout('window.opener.document.onloadstart=window.document.on_load_frm();',1000);
        document.releaseEvents('loadstart', on_load_frm, false);
    }
    window.document.on_load_frm = function ()
    {
        window.opener.document.reql_is_clicked = true;
    }*/

    document.onload = reqlist_f();
    //window.opener.document.reql_is_clicked=false;
} 
else if (window.location == 'http://mogas.tejaratasan.ir/protected/default.aspx')
{
    /*
    window.document.load_default_f= function (){
        if (!document.reql_is_clicked)
        {
            document.reql_is_clicked = false;
        } 
        else
        {
            ddlOperations.value = 3;
            btnDoIt.click();
        }
        //alert(reql_is_clicked); 

    }*/
    function default_f() {
        //setTimeout('window.document.load_default_f();', 1000);
        ddlOperations.value = 3;
        btnDoIt.click();
    }
    document.onload = default_f();
} 
else if (window.location == 'http://mogas.tejaratasan.ir/protected/approve.aspx')
{
    /*
    window.document.load_approve_f= function (){
		MANaftGazYaraneMovafeghatLitresookht.value=NaftGazYaraneDarkhastLitre.innerHTML
		MANaftGazYaraneMovafeghatTozihat.value="سوخت موتورپمپ چاه آب کشاورزي"
    }
    function aprove_f() {
        setTimeout('window.document.load_approve_f();', 1000);
    }*/
    MANaftGazYaraneMovafeghatLitresookht.value = NaftGazYaraneDarkhastLitre.innerHTML
    MANaftGazYaraneMovafeghatLitre.value = NaftGazYaraneDarkhastLitre.innerHTML
    MANaftGazYaraneMovafeghatTozihat.value = 'سوخت موتورپمپ چاه آب کشاورزي'
    MANaftGazYaraneMovafeghatLitreKhorak.value = '0'
    MANaftGazYaraneMovafeghatZakhireh.value = '0'
    MAbtnApprove.click();
    document.onload = aprove_f();
}
