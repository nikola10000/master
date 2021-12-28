import React,  {Component} from 'react'
import MyNavbar from '../components/MyNavbar'

class HomePage extends Component {

    

    render () {
        
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="css/style.css" />
                    <title>Master rad: Glavna strana</title>
                </head>
                <body>
                    <div align="center" style={{backgroundColor: 'rgb(146, 239, 252)'}}>
                        <MyNavbar></MyNavbar>
                        <table> 
                            <tr>
                                <td style={{paddingRight: '30px', align: 'center'}}>
                                    <h2 align='center'><br />Optimizacija baze podataka upotrebom indeksa</h2>
                                    <p>
                                        Količina podataka kojima se danas služimo veća je nego ikad i ubrzano raste. Jedna od posledica <br />
                                        toga jeste izazov pronalaženja tačno onih podataka koji nam trebaju u što kraćem vremenskom roku. <br />
                                        Kada su u pitanju relacione baze podataka, jedan od osnovnih mehanizama za ubrzano dobavljanje <br />
                                        podataka predstavlja indeks. U ovom radu želim da vidim kako će indeksi i količina podataka uticati <br /> 
                                        na brzinu odziva tebela na upite, i da ishode grafički prikažem. <br /><br />
                                        Indeksi su strukture podataka koje se pridružuju tabelama i sadrže probrane podatke iz baze, poređane u <br />
                                        određenom poretku. Ukoliko su podaci nad kojima se vrši upit svi prisutni u indeksu, moguće je izvršiti <br />
                                        upit čitanjem podaka u indeksu, bez pristupa podataka u tabeli. Ukoliko nisu, indeks bi trebao da ubrza <br />
                                        pronalaženje memorijske adrese željenih podataka iz tabela. <br /> <br />
                                        U opštem slučaju, indeksi mogu da značajno ubrzaju odziv upita tabele. Na to da li i koliko neki indeks <br />
                                        može da ubrza upite utiču sami podaci sa kojima radimo, tip indeksa, željeni upit i sistem za upravljanje <br />
                                        bazom podataka sa kojim radimo. Sa druge strane, tabela sa indeksom će uvek zahtevati više memorijskog <br />
                                        prostora od tabele bez indeksa, što može da predstavlja problem ukoliko smo ograničeni dostupnom količinom <br />
                                        memorije. Indeksi takođe mogu da uspore operacije ubacivanja, modifikovanja i brisanja podataka u bazi, <br />
                                        što ih čini nepogodnim za sisteme u kojima se podaci često menjaju. Ja sam u ovom radu odlučio da radim <br />
                                        sa dva često korištena tipa indeksa: indeks tipa B-stablo i binarni indeks. <br /><br />
                                        <b >B-stablo</b> indeks čuva podatke u strukturi tipa balansirano binarno stablo. Pretraga polja indeksa <br />
                                        svodi se na obilazak stabla od korena do onog čvora koji sarži podatke koje tražimo. Većina sistema za <br />
                                        upravljanje bazama podataka ih podržava. Pogotovo su korisni kada je selektivnost podataka sa kojima se <br />
                                        radi velika, tj. kada je domen mogućih vrednosti indeksiranih polja velik. Sa druge strane, prilikom bilo <br />
                                        kakve izmene podataka u bazi mogu značajno usporiti te operacije, jer može potrebno restrukturirati <br />
                                        stablo da bi ispratilo promene podataka. <br /><br />
                                        <b>Binarni indeks</b> čuva podatke u binarnoj listi. Najbolje funkcioniše kada je selektivnost <br />
                                        indeksiranih podataka relativno mala, tj. kada je domen indeksiranih polja manji. Takođe može dati odlične <br />
                                        rezultate kada upiti sadrže skupovne operacije, poput spajanja tabela. Sa druge strane, porastom domena <br />
                                        podataka indeksiranog polja količina memorije potrebna za čuvanje ovakvog indeksa linearno raste, i lako <br />
                                        može postati ogroman i izgubiti svoju korist. <br /><br />
                                    </p>
                                </td>
                                <td style={{paddingLeft: '30px'}}>
                                    <h2 align='center'>Proces </h2>
                                    <p align='center'>
                                        Tabele sa kojima sam radio imitiraju tabelu Radnik koja se koristi na predmetu Baze Podataka 1 na više smerova Fakulteta <br />
                                        Tenhičkih Nauka u Novom Sadu. Tabela sadrži podatke o radnicima hipotetske kompanije. Pošto je količina podataka sa kojom <br />
                                        sam radio velika, odlučio sam da ignorišem sva ograničenja osim ograničenja primarnog ključa, radi efikasnosti. Sledi pregled <br />
                                        podataka u tabeli: <br /> <br />
                                        <table style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid'}} align='center'>
                                            <tr style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid'}}>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>mbr</b>
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>ime</b>
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>prz</b>
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>sef</b>
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>plt</b>
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'20px', paddingRight:'20px'}}>
                                                    <b>pre</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                                <td style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', paddingLeft:'30px', paddingRight:'20px'}}>
                                                    ...
                                                </td>
                                            </tr>
                                        </table> <br /> 
                                        ; gde polja predstavljaju: <br />
                                        <ul>
                                            <li>mbr - Matični broj radnika; prirodni broj, takođe i primarni ključ</li>
                                            <li>ime - Ime radnika; string od do 20 znakova</li>
                                            <li>prz - Prezime radnika; string od do 25 znakova</li>
                                            <li>sef - Matični broj radnika koji je ovom radniku šef; prirodni broj</li>
                                            <li>plt - Plata radnika; realni broj</li>
                                            <li>pre - Premija radnika; realni broj</li>
                                        </ul> <br />
                                        Sistem za upravljanje bazama podataka koji sam koristio može da meri brzinu operacija za operacije koje su duže od 1ms. <br />
                                        Pošto su za tabelu sa malo polja, poput gore prikazane tabele Radnik, sa par stotina redova upiti često kraći od toga te <br />
                                        ne mogu da se izmere, trebala mi je velika količina podataka za rad. Da bi ih dobavio, napisao sam program u Javi koja <br />
                                        je napisala insert skripte u sql. Da bih video kako različite količine podataka utiču na odziv, napravio sam 20 instanci <br />
                                        radnik tabele i napunio ih sa po 1, 2, 3, 4, ..., 20 miliona redova generisanih podataka. Sa toliko podataka je gotovo sigurno <br />
                                        da će bez indeksa upiti trajati duže od 10ms. Ipak, u nekim slučajevima su trajali kraće od toga, i u tim slučajevima je <br />
                                        izmerena vrednost za dužinu odziva 0s (videti stranicu Maksimum). <br />
                                        Nakon što sam generisao podatke, izabrao sam 6 često korištenih upita koji su nabrojani u vrhu ekrana. Napisao sam skripte u PL/SQL <br />
                                        koje svaki od upita izvrše po 100 puta, svaki put mereći koliko je vremena bilo potrebno da se upit izvrši, i prosek izmerenog <br />
                                        vremena upišu u posebnu tabelu. Svaki upit se izvrši nad svakom tabelom po 100 puta bez inteksa, sa binarnim indeksom i sa indeksom <br />
                                        tipa B-stablo. Pošto tabela ne može imati više indeksa u isto vreme, merenja bez indeksa sam vršio pre nego što sam kreirao indeks, <br />
                                        pa sam potom kreirao jedan indeks, merio, pa ga obrisao, kreirao drugi indeks i merio sa njim. <br />
                                        Na ostalim stranicama na ovom sajtu možete videti grafički prikaz rezultata, kao i kratki opis upita koje sam radio. <br />
                                    </p>
                                </td>
                            </tr>

                        </table>
                        
                    </div>
                </body>
            </html>
        )
    }

}

export default HomePage