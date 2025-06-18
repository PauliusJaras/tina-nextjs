---
autoplius: 'https://autoplius.lt'
logo: 'https://tinacmsbucket.s3.eu-north-1.amazonaws.com/logos/subaru-logo.png'
subLinks:
  - label: Naujienos
    url: /naujienos
  - label: Kodėl Subaru?
    url: /puslapiai/kodel-subaru
  - label: Kodėl JMA centras?
    url: /puslapiai/kodel-jma-centras
  - label: Kontaktai
    url: /kontaktai

navButtons:
  - label: Automobiliai
    sublinks:
      - label: Subaru modeliai
        componentObjects:
          - object: content/cars/forester-2025.md
            label: Naujasis Forester
          - object: content/cars/crosstrek.md
            label: Crosstrek
          - object: content/cars/forester-e-boxer.md
            label: Forester E-Boxer
          - object: content/cars/outback.md
            label: Outback
          - object: content/cars/solterra.md
            label: Solterra
        renderComponent: Car Component
        redirectButton:
          label: Plačiau
          url: /modeliai
          status: true
        link:
          url: /modeliai
      - label: Modelių palyginimas
        link:
          isLink: true
          url: /modeliu-palyginimas
      - label: Automobiliai salone
        componentObjects:
          - object: content/dealershipCars/Subaru-Outback-20l-Dyzelis-CVT.md
            label: Subaru Outback 2.0 CVT
          - object: content/dealershipCars/SUBARU-FORESTER-20-CVT.md
            label: Subaru Forester 2.0 CVT
        renderComponent: Car Component
        redirectButton:
          label: Visi
          url: /salono-ir-naudoti-automobiliai
          status: true
        link:
          url: /salono-ir-naudoti-automobiliai
    border: true
    order: 2
  - label: Servisas
    sublinks:
      - label: Autorizuotas servisas
        componentObjects:
          - object: content/pages/servisas.mdx
            label: Servisas
        renderComponent: Page Component
        redirectButton:
          label: Daugiau
          url: /puslapiai/servisas
          status: false
        link:
          url: /puslapiai/servisas
      - label: Dalys ir aksesuarai
        componentObjects:
          - object: content/pages/dalys-ir-aksesuarai.mdx
            label: Dalys ir Aksesuarai
        renderComponent: Page Component
        redirectButton:
          label: Daugiau
          url: /puslapiai/dalys-ir-aksesuarai
          status: false
        link:
          url: /puslapiai/dalys-ir-aksesuarai
    border: true
    order: 3
navLinks:
  - label: Specialūs pasiūlymai
    url: /specialus-pasiulymai
    border: true
    order: 1
  - label: Kėbulų remontas
    url: /puslapiai/kebulo-remontas
    border: false
    order: 4
navImages:
  - image: /logos/jma-logo.png
    url: 'https://jmac.lt/'
    label: JMA Centras logo
sideMenu:
  items:
    - label: Naujienlaiškis
      url: /formos/subaru-naujienlaiskis
      icon: newsletter
    - label: Bandomasis važiavimas
      url: /formos/registracija-bandomajam-vaziavimui
      icon: drive
    - label: Registracija į servisą
      url: /formos/registracija-servisui
      icon: service
    - label: Žalos registracija
      url: /formos/zalos-registracija
      icon: register
dropDownMenu:
  phoneNumbers:
    - label: Salonas
      number: (+370) 5 273 17 35
      buttonLabel: ''
    - label: Servisas
      number: (+370) 5 213 55 65
    - label: Kėbulo remonto darbai
      number: (+370) 5 210 30 62
    - label: Dalys ir aksesuarai
      number: (+370) 5 213 98 29
  addresses:
    - label: 'Verkių g. 39B, Vilnius, 09109 Vilniaus m. sav.'
      mapLink: 'https://maps.app.goo.gl/WL4TXhhLCwJfaDNF7'
      buttonLabel: Google Maps
---

