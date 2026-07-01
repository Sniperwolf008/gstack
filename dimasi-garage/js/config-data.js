/* =====================================================
   Dimasi Garage — Konfigurator-Datensatz
   Struktur: Marke -> Modell -> Baujahr -> [Motoren]
   Je Motor:
     label : Anzeigename inkl. Serien-PS
     fuel  : Kraftstoff
     ps/nm : Serienwerte (Original)
     stages: { "Stage 1": {ps, nm}, "Stage 2": {ps, nm} }
   Es sind ausschliesslich gepruefte Werte aus dem realen
   Ergebnis-Screen hinterlegt. Neue Motoren kommen dazu, sobald der
   echte Ergebnis-Screenshot vorliegt.
   ===================================================== */
window.DIMASI_TUNING = {
  "Abarth": {
    "124": {
      "2017→": [
        {
          label: "1.4 Multiar Turbo 140hp", fuel: "Benzin", ps: 140, nm: 240,
          stages: { "Stage 1": { ps: 190, nm: 300 }, "Stage 2": { ps: 205, nm: 315 } }
        }
      ]
    },
    "500": {
      "2014 – 2016": [
        {
          label: "1.4 T-Jet 135hp", fuel: "Benzin", ps: 135, nm: 206,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 160hp", fuel: "Benzin", ps: 160, nm: 230,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        }
      ]
    },
    "Punto": {
      "2010→": [
        {
          label: "1.4 Multi-Air 165hp", fuel: "Benzin", ps: 165, nm: 250,
          stages: { "Stage 1": { ps: 180, nm: 300 }, "Stage 2": { ps: 200, nm: 320 } }
        },
        {
          label: "1.4 Multi-Air 180hp", fuel: "Benzin", ps: 180, nm: 270,
          stages: { "Stage 1": { ps: 200, nm: 320 }, "Stage 2": { ps: 210, nm: 340 } }
        },
        {
          label: "1.4 T-Jet 155hp", fuel: "Benzin", ps: 155, nm: 230,
          stages: { "Stage 1": { ps: 177, nm: 280 }, "Stage 2": { ps: 186, nm: 294 } }
        },
        {
          label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 320 }, "Stage 2": { ps: 210, nm: 340 } }
        }
      ]
    }
  }
};
