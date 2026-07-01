/* =====================================================
   Dimasi Garage — Konfigurator-Datensatz
   Struktur: Marke -> Modell -> Baujahr -> [Motoren]
   Je Motor:
     label : Anzeigename inkl. Serien-PS
     fuel  : Kraftstoff
     ps/nm : Serienwerte (Original)
     stages: { "Stage 1": {ps, nm}, "Stage 2": {ps, nm} }
     exact : true  = Werte 1:1 aus dem realen Ergebnis-Screen
             (ohne Flag = realistischer Richtwert, noch zu bestaetigen)
   Alle Werte werden final immer individuell am Fahrzeug geprueft.
   ===================================================== */
window.DIMASI_TUNING = {
  "Fiat": {
    "124": {
      "2017→": [
        { label: "1.4 Multiair Turbo 140hp", fuel: "Benzin", ps: 140, nm: 240,
          stages: { "Stage 1": { ps: 170, nm: 290 }, "Stage 2": { ps: 180, nm: 310 } } },
        { label: "1.4 Multiair Turbo 170hp", fuel: "Benzin", ps: 170, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 310 }, "Stage 2": { ps: 215, nm: 330 } } }
      ]
    },
    "500": {
      "2014 – 2016": [
        { label: "1.4 T-Jet 135hp", fuel: "Benzin", ps: 135, nm: 206,
          stages: { "Stage 1": { ps: 165, nm: 250 }, "Stage 2": { ps: 180, nm: 270 } } },
        { label: "1.4 T-Jet 140hp", fuel: "Benzin", ps: 140, nm: 206,
          stages: { "Stage 1": { ps: 170, nm: 250 }, "Stage 2": { ps: 185, nm: 270 } } },
        { label: "1.4 T-Jet 160hp", fuel: "Benzin", ps: 160, nm: 230,
          stages: { "Stage 1": { ps: 185, nm: 270 }, "Stage 2": { ps: 200, nm: 290 } } },
        { label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 290 }, "Stage 2": { ps: 215, nm: 310 } } },
        { label: "1.4 T-Jet Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          stages: { "Stage 1": { ps: 210, nm: 300 }, "Stage 2": { ps: 220, nm: 320 } } }
      ],
      "2016 – 2023": [
        { label: "1.4 T-Jet 595 145hp", fuel: "Benzin", ps: 145, nm: 206,
          stages: { "Stage 1": { ps: 175, nm: 250 }, "Stage 2": { ps: 190, nm: 270 } } },
        { label: "1.4 T-Jet 595 Competizione 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 290 }, "Stage 2": { ps: 215, nm: 310 } } },
        { label: "1.4 T-Jet 595 Pista 160hp", fuel: "Benzin", ps: 160, nm: 230,
          stages: { "Stage 1": { ps: 185, nm: 270 }, "Stage 2": { ps: 200, nm: 290 } } },
        { label: "1.4 T-Jet 595 Turismo 165hp", fuel: "Benzin", ps: 165, nm: 230,
          stages: { "Stage 1": { ps: 190, nm: 270 }, "Stage 2": { ps: 205, nm: 290 } } },
        { label: "1.4 T-Jet 695 Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          stages: { "Stage 1": { ps: 210, nm: 300 }, "Stage 2": { ps: 220, nm: 320 } } }
      ]
    },
    "Punto": {
      "2010→": [
        { label: "1.4 Multi-Air 165hp", fuel: "Benzin", ps: 165, nm: 250, exact: true,
          stages: { "Stage 1": { ps: 180, nm: 300 }, "Stage 2": { ps: 200, nm: 320 } } },
        { label: "1.4 Multi-Air 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } } },
        { label: "1.4 T-Jet 155hp", fuel: "Benzin", ps: 155, nm: 230,
          stages: { "Stage 1": { ps: 180, nm: 280 }, "Stage 2": { ps: 195, nm: 300 } } },
        { label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 290 }, "Stage 2": { ps: 215, nm: 310 } } }
      ]
    }
  }
};
