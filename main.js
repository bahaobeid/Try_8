
/* ***title*** */

let t1=document.getElementsByTagName("H1").item(0);
    
document.title=t1.textContent;

/* -------------------------------------------------------*/

/*second title*/

let a1=document.createElement("h4"),
    b1=document.createTextNode("You Are Welcome To Our New Magazine");

a1.appendChild(b1);
document.body.appendChild(a1);

/* -------------------------------------------------------*/

/* ***all let*** */

let maindiv=document.createElement("div"),
    header=document.createElement("header"),
    main=document.createElement("main"),
    div1=document.createElement("div"),
    div2=document.createElement("div"),
    div3=document.createElement("div"),
    div4=document.createElement("div"),
    div5=document.createElement("div"),
    div6=document.createElement("div"),
    div7=document.createElement("div"),
    div8=document.createElement("div"),
    div9=document.createElement("div"),
    div10=document.createElement("div"),
    div11=document.createElement("div"),
    div12=document.createElement("div"),
    div13=document.createElement("div"),
    div14=document.createElement("div"),
    div15=document.createElement("div"),
    div16=document.createElement("div"),
    div17=document.createElement("div"),
    div18=document.createElement("div"),
    div19=document.createElement("div"),
    div20=document.createElement("div"),
    div21=document.createElement("div"),
    div22=document.createElement("div"),
    div23=document.createElement("div"),
    div24=document.createElement("div"),
    div25=document.createElement("div"),
    mainbody=document.getElementsByTagName('body').item(0);
    // img1=document.createElement("img")
    // "http://placehold.it/100/100";

/* -------------------------------------------------------*/
    
/* ** insert div position** */
document.body.insertBefore(maindiv,t1);
document.body.insertBefore(header,t1);
maindiv.appendChild(header);
header.appendChild(t1);
header.appendChild(a1);
maindiv.appendChild(main);
main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
main.appendChild(div4);
main.appendChild(div5);
main.appendChild(div6);
main.appendChild(div7);
main.appendChild(div8);
main.appendChild(div9);
main.appendChild(div10);
main.appendChild(div11);
main.appendChild(div12);
main.appendChild(div13);
main.appendChild(div14);
main.appendChild(div15);
main.appendChild(div16);
main.appendChild(div17);
main.appendChild(div18);
main.appendChild(div19);
main.appendChild(div20);
main.appendChild(div21);
main.appendChild(div22);
main.appendChild(div23);
main.appendChild(div24);
main.appendChild(div25);


/* -------------------------------------------------------*/

/* *** style of page *** */


// let mainbody=document.getElementsByTagName('body').item(0);
mainbody.style.boxSizing = "border-box";
mainbody.style.background='rgba(93, 114, 91, 0.197)';
t1.style.fontSize = '50px';
t1.style.color= 'rgb(25, 31, 25, 0.8)' ;
t1.style.textAlign='center';
a1.style.textAlign='center';
main.style.display="grid";
main.style.height='250vh';
main.style.gridTemplateColumns='repeat(auto-fit,minmax(100px,240px))';
main.style.gridTemplateRows='repeat(auto,minmax(250px,300px))';
main.style.justifyContent='space-evenly';
main.style.alignItems='space-between';
main.style.gridGap='10px';



let magclass=document.createAttribute('class');
magclass.value='allmag';
div1.classList.add('magclass');
div2.classList.add('magclass');
div3.classList.add('magclass');
div4.classList.add('magclass');
div5.classList.add('magclass');
div6.classList.add('magclass');
div7.classList.add('magclass');
div8.classList.add('magclass');
div9.classList.add('magclass');
div10.classList.add('magclass');
div11.classList.add('magclass');
div12.classList.add('magclass');
div13.classList.add('magclass');
div14.classList.add('magclass');
div15.classList.add('magclass');
div16.classList.add('magclass');
div17.classList.add('magclass');
div18.classList.add('magclass');
div19.classList.add('magclass');
div20.classList.add('magclass');
div21.classList.add('magclass');
div22.classList.add('magclass');
div23.classList.add('magclass');
div24.classList.add('magclass');
div25.classList.add('magclass');



let divstyle=document.querySelectorAll('.magclass');
for(var i=0 ;i < divstyle.length ; i++){
    // divstyle[i].style.width='200px';
    divstyle[i].style.height='220px';
    divstyle[i].style.background='rgb(25, 31, 25, 0.8)';
    divstyle[i].style.textAlign='center';
    let img1=document.createElement("img"),
        label1=document.createElement("label");
    img1.style.width='100%';
    img1.style.height='85%';
    divstyle[i].appendChild(img1);
    divstyle[i].appendChild(label1);
    label1.style.color='white';
    label1.style.letterSpacing='4px';
    };


let img_list=document.querySelectorAll('img');
img_list[0].setAttribute('src','https://images-platform.99static.com//W0MaSA5r19Po1zxU4cdoJJ5XQ4Y=/134x134:1199x1199/fit-in/590x590/99designs-contests-attachments/118/118812/attachment_118812865');

img_list[1].setAttribute('src','https://images-workbench.99static.com/bnKyAF_UrFEiils-Z-03reAK6cw=/99designs-contests-attachments/85/85370/attachment_85370457');

img_list[2].setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/7/7f/LIFE_magazine_logo.svg');
img_list[3].setAttribute('src','https://image.shutterstock.com/image-vector/book-logo-vector-600w-615133982.jpg');
img_list[4].setAttribute('src','https://image.shutterstock.com/image-vector/book-logo-icon-template-600w-1007573617.jpg');
img_list[5].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2019/11/bitcoin-magazine-vector-logo.png');
img_list[6].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/06/bankid-vector-logo.png');
img_list[7].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/08/british-association-for-shooting-and-conservation-basc-vector-logo.png');
img_list[8].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/baumgartner-schreinerei-ag-vector-logo.png');
img_list[9].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/06/bialetti-vector-logo.png');
img_list[10].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/06/sala-giochi-3m-vector-logo.png');
img_list[11].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/08/synlawn-vector-logo.png');
img_list[12].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/08/sud-appro-solutions-transport-vector-logo.png');
img_list[13].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/stiftung-braendi-vector-logo.png');
img_list[14].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/08/safwall-vector-logo.png');
img_list[15].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/schp-cr-svaz-chemickeho-prumyslu-ceske-republiky-vector-logo.png');
img_list[16].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/swedish-national-heritage-board-riksantikvarieambetet-vector-logo.png');
img_list[17].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/1177-vardguiden-vector-logo.png');
img_list[18].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/odesa-international-film-festival-oiff-vector-logo.png');
img_list[19].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/07/orbotech-ltd-vector-logo.png');
img_list[20].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/optigreen-international-ag-vector-logo.png');
img_list[21].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/123erfasst-vector-logo.png');
img_list[22].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/online-karrieretag-vector-logo.png');
img_list[23].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/olffi-logo-vector.png');
img_list[24].setAttribute('src','https://getvectorlogo.com/wp-content/uploads/2020/05/evn-ag-vector-logo.png');


let not1=document.createTextNode("magazin 1"),
    not2=document.createTextNode("magazin 2"),
    not3=document.createTextNode("magazin 3"),
    not4=document.createTextNode("magazin 4"),
    not5=document.createTextNode("magazin 5"),
    not6=document.createTextNode("magazin 6"),
    not7=document.createTextNode("magazin 7"),
    not8=document.createTextNode("magazin 8"),
    not9=document.createTextNode("magazin 9"),
    not10=document.createTextNode("magazin 10"),
    not11=document.createTextNode("magazin 11"),
    not12=document.createTextNode("magazin 12"),
    not13=document.createTextNode("magazin 13"),
    not14=document.createTextNode("magazin 14"),
    not15=document.createTextNode("magazin 15"),
    not16=document.createTextNode("magazin 16"),
    not17=document.createTextNode("magazin 17"),
    not18=document.createTextNode("magazin 18"),
    not19=document.createTextNode("magazin 19"),
    not20=document.createTextNode("magazin 20"),
    not21=document.createTextNode("magazin 21"),
    not22=document.createTextNode("magazin 22"),
    not23=document.createTextNode("magazin 23"),
    not24=document.createTextNode("magazin 24"),
    not25=document.createTextNode("magazin 25"),
    label_group=document.querySelectorAll('label');
    
label_group[0].appendChild(not1);
label_group[1].appendChild(not2);
label_group[2].appendChild(not3);
label_group[3].appendChild(not4);
label_group[4].appendChild(not5);
label_group[5].appendChild(not6);
label_group[6].appendChild(not7);
label_group[7].appendChild(not8);
label_group[8].appendChild(not9);
label_group[9].appendChild(not10);
label_group[10].appendChild(not11);
label_group[11].appendChild(not12);
label_group[12].appendChild(not13);
label_group[13].appendChild(not14);
label_group[14].appendChild(not15);
label_group[15].appendChild(not16);
label_group[16].appendChild(not17);
label_group[17].appendChild(not18);
label_group[18].appendChild(not19);
label_group[19].appendChild(not20);
label_group[20].appendChild(not21);
label_group[21].appendChild(not22);
label_group[22].appendChild(not23);
label_group[23].appendChild(not24);
label_group[24].appendChild(not25);