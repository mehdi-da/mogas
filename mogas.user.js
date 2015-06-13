// ==UserScript==
// @name        mogas
// @namespace   http://mogas.tejaratasan.ir/*
// @include     http://mogas.tejaratasan.ir/*
// @version     1.1.1
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
    MANaftGazYaraneMovafeghatLitresookht.value = NaftGazYaraneDarkhastLitre.innerHTML
    MANaftGazYaraneMovafeghatLitre.value = NaftGazYaraneDarkhastLitre.innerHTML
    MANaftGazYaraneMovafeghatTozihat.value = 'سوخت موتورپمپ چاه آب کشاورزي'
    MANaftGazYaraneMovafeghatLitreKhorak.value = '0'
    MANaftGazYaraneMovafeghatZakhireh.value = '0'
    MAbtnApprove.click();
    document.onload = aprove_f();
}
