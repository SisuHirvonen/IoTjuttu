# Mikä on IoT
IoT on esineiden ja laitteiden yhdistämistä internettiin. Esineet voivat olla mitä vaan laitteita missä on internet yhteys kuten älykellot, autot ja erillaiset anturit kuten lämpömittarit. Internetin avulla laitteet jakavat tieto toisilleen. Laitteet voivat toimi itsenöisesti tai ryhmässä muiden laitteiden kanssa. IoT laitteet eivät vain tuota dataa ne myös vastaanottavat sitä. Data ohjaa laiteteen toimintaa.

IoT on hyötyä myös kiinteistöhallinnassa. IoT ratkaisulla tehostetut Älykodit keräävät dataa itsestään. Asuntoon asennetut anturit yhdistetään keskus yksikköön ja saadan IoT kokonaisuus. Jos yhdistetään useampi kiinteitstö samaan verkkoon säästetään kuluissa ja ilmastolliset haitat vähenevät. Kiinteistöissä voidaan seurata muun muassa kosteuttas, lämpötilaa ja sähkön kulutusta. Toimintaa ja kuluja voidaan seurata vaikka sovelluksen kautta älypuhelimella. IoT avulla kiintteistön omistaja pystyy seuraamaan kiinteistön muutoksia.
# Sääasemajärjestelmän toimintakaavio
IoT-järjestelmän rakenteeseen kuuluu datan keräämiseen tarkoitetut anturit. Antureiden keräämän datan avulla ohjelmoidaan laitteita toimimaan sen mukaisesti. Antureiden keräämä data siirretään tietoverkon kautta pilvipalveluun josta dataa lähetetään eteenpäin. Data tallentuu palvelun tarjoajan tajoamalle palvelimelle. Dataa analysoidaan ja siitä tehdään käyttäjälle hyödyllisiä ratkaisuja.
### Sääaseman rakenne 
![Rakenne](/kuva.jpg)
### -Laitteistot
### -Komponentit
#### Anturit 
##### Kuulevat anturit
Kuulevilla antureita voidaan käytetään useissa eri paikoissa. Niitä voidaan opettaa tuntetmaan erillaisia äänia ja regoimaan sen mukaisesti. Ääni sensoreiden avulla voidaan myös tutkia miten melusta on haittaa eläintarhan eläimille. Anturit voivat mitata erilaisia ääniä. Kaupunkeihin asennetuissa sensoreissa käytetään antureita jotka mittaavat ääntä jota ihmiset kuulevat. Näin on helpomi verrata saatua dataa ihmiseen. Mikrofoneja voidaan myös käyttää liikenne datan keruussa. Pystytään analysoimaan esim. minkälaisia kulkuvälineitä käytetään eri paikoissa. On myös sensoreita jotka regoivat agressioon tai ampumiseen. Näitä käytetään joko vaara tilanteen estämiseksi tai sen nopeasti paikantamiseksi. Julkisuudessa puhetta kuuntelevat mikrfonit kuitenkin voivat johtaa salakuunteluun joten mikrofonin keräämä data pitäisi käsitellä samassa laitteessa mikä datan on kerännyt. Antureilla on myös käyttöä toimisto tiloissa. Toimistoissa voidaan mitata muun muassa äänen voimakkuutta ja taajuutta. Saadusta datasta voidaan analysoida haitta ääniä ja toimia niiden vähentämiseksi.
##### Tuntevat anturit
Tuntevat anturit voivat mitata kosteutta ja karjan hyvin vointia. Sensoreita voidaan myös käytttää rahdin seurannassa. Näin voidaan ennaltaehkäistä tuotteiden pilaantumista. Sensoreita voidaan käyttää laivoissa ja lentokoneissa. Erityisesti tuotteisiin jotka ovat arkoja kosteudelle tai lämpötilan vaihtelulle. Yksityiselle käyttäjälle tuntevasta sensorista voi olla hyötyö kosteus vaurion seurannassa omassa kodissaan. Antureista kerätty data lähetetään keskusyksikköön joka välittää tiedon sovellukseen mistä se on luettavissa. Dataa voidaan myös lähettää pilveen jos se on tarpeellista tai dataa halutaan käyttää johonkin muuhun. Kosteus sensoreilla pystyttäisiin seuraamaan rakennustöiden sujumista ja varoittamaan mahdollisen kosteus vaurion varalta. Sensoreiden hinta on tullut alas viime vuosien aikana joten useammat alat alakavat käyttämään tuntevia sensoreita työn seurannassa
##### Haistavat anturit
Hajuja on vaikea tunnistaa koska niissä on monia eri komponentteja. Mutta jos sensoria käytetään tiettyjen asioiden haistamiseen se toimii. Hajuja voidaan käyttää myös tautien havainnollistamisessa. Näihin tauteihin kuuluu parkinsonin tauti ja ms tauti. Antureita käytetään myös päästöjen seurannassa. Rahtilaivojen päästäjö seurataan rannalle tai saaristoon asennetuilla sensoreilla jotka mittaavat päästöistä muun muassa rikin määrää. Anturi mitttaa ilmasta kaasun osuuden. rikkiä seurataan, koska rikki on myrkyllinen kaasu ja voi seurata ihmishenkiä jos niitä ei pidetä silmällä. Antureilla myös mitataan koulutilojen ilmanlaatua. Anturit mittaavat lämpötilaa, ilmanlaatua, pienihiukkaisia ja ilmanpainetta. Tietoa ongelmasta saadaan myös koululaisista jotka voivat kertoa jos on huono olo.
##### Näkevät anturit
Näkevät anturit voivat olla liiketunnistimia vaikka sytyttämään valot tai hälyttämään mahdollisesta murtautumisesta. Niitä myös käytetään valvomaan onko rahdista hävinnyt jotain. Kone näköä aloitettiin suunnittelemaan 1960-luvulla. Anturi kerää dataa mittaamalla photoneita,kerää valoa ja värejä. Kone näköä käytetään asioissa missä ihmisnäkö ei riitä. Sitä hyödynnetään yksitoikkoisen työn laadun parantamiseksi. Myös tuotteen laadun valvonta on helpompaa koenäön avulla. Jos laadun valvonta ei ole hyvä tämä voi tulla kalliiksi yritykselle. Jos laatu ei vastaa tilausta voidaan lasti lähettää takaisin. Konenäkö vaatii tietyn valoisuuden toimiakseen parhaiten.
### -Palvelut
IoT palveluihin kuuluu muun muassa pilvipalvelut. Pilvipalvelut tarjoavat kuluttajalle palveluja. Näihin palveluihin kuuluu esim datan säilöminen ja netistä videoiden katsominen. Palvelut tapahtuvat palvelinkeskuksissa ympärin maailmaa. Pilvipalvelujen huono puoli on palvelun tarjoajan tietoisuus kaikesta mitä teet palvelulla. 
### -Ohjelmointi
Particle photon laitteen ohjelma.

![particle](/particlec.jpg)

![particle](/csharp1.jpg)

![particle](/csharp2.jpg)

# Käytetyt kehitysympäristöt
#### Microsoft Azure
Azure tarjoaa useita erillaisia toimintoja käyttäjilleen. Näihin palveluihin kuuluu esim. nettisivujen isännöinti, pilvipalveluja, integraatio palveluja ja hallintapalveluja. Azuren on tarkoitus toimi sovellusten ja palvelujen alustana.
#### Replit
Replit on selaimessa toimiva koodaus ympäristö joten latauksia ei tarvita. Replitillä voi luoda monia eri koodeja. Myös ryhmä työskentely onnistuu, koska samaa koodia voi tehdä useampi henkilö samanaikaisesti.
#### Github
Github on versionhallinta järjestelmä.Tänne kehittäjät tallentavat projektejaan. Github on myös sosiaalinen verkko missä kehittäjät voivat tehdä yhteistyötä ja parantaa omia taitojaan. Githubissa pystyt seuraamaan kuka muuttaa mitäkin ohjelmassa. Github myös toimii replitin kanssa.
# Termihakemisto
IoT = Esineiden internet.
Anturi = Mittaa eri asioita anturistta riippuen kuten lämpöä tai ilmankosteutta.
Älykoti = Kiinteistö pystyy keräämään itsestään dataa, joka on nähtävissä esim. älypuhelimella.
# Viitteet
https://empirica.fi/iot/
https://sulava.com/pilvi-infrastruktuuri/mika-se-azure-oikein/
https://fi.if-koubou.com/articles/how-to/what-is-github-and-what-is-it-used-for.html
https://www.dna.fi/yrityksille/aistien-internet-podcast
