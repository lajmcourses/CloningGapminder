# Gapminder Klonas

**Projekto tikslai:**

    - Išmokti Python Bokeh darbo pargindus
    - Suprasti dinaminių vizualizacijų veikimo principus
    - Atkartoti Gapminder vizualizaciją panauduojant Python Bokeh

**Papildoma užduotis pažymiui pagerinti (+1)**

Mūsų projekte mes realizavome Gapminder vizualizaciją kaip **standalone document**.
http://docs.bokeh.org/en/latest/docs/user_guide/embed.html

Bokeh Gapminder projekto serverinę versiją (**Bokeh application**) galima surasti čia:

http://demo.bokeh.org/gapminder

Projekto Python kodas:

https://github.com/bokeh/bokeh/tree/branch-3.0/examples/app/gapminder

Dabartinis vizualizacijos metų diapazonas yar 1964-2012 metai. 
Jūsų tikslas yra pakeisti serverinę vizualizacijos versiją ir atvaizduoti metų diapazoną nuo 1960 iki 2020 (vietoj 1964-2012)

Apribojimas: jus galite rašyti ir keisti tik Python kodą, Javascript naudoti negalima.



## Naudingos nuorodos

1. Garsioji Hanso Roslingo kalbą, kurioje jis paneigia keletą mitų apie pasaulio vystymąsi ir pristato 
**Gapminder** duomenų vizualizacijos įrankį.

    https://www.youtube.com/watch?v=hVimVzgtD6w

2. Nuoroda į Gapminder projekto realizaciją su Bokeh:

    http://demo.bokeh.org/gapminder
    

## Python paketų instaliacija

Tam, kad paleisti projektinius notebook'us, reikia instaliuoti

    a) Python, projekte buvo panaudota 3.10.1 versija
    b) Python paketus įvardintus faile **requirements.txt**

Paketų instaliacija:

    pip install -r requirements.txt