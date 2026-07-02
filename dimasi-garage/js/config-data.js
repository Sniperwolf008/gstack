/* =====================================================
   Dimasi Garage — Konfigurator-Datensatz
   Struktur: Marke -> Modell -> Baujahr -> [Motoren]
   Je Motor:
     label : Anzeigename inkl. Serien-PS
     fuel  : Kraftstoff
     ps/nm : Serienwerte (Original)
     stages: { "Stage 1": {ps, nm}, "Stage 2": {ps, nm} }
     addons: optionale Zusatzleistungen dieses Motors (Namen aus
             ADDON_DESC in konfigurator.js), z.B. ["E85 Flexfuel","Vmax OFF"]
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
        },
        {
          label: "1.4 Multiar Turbo 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["E85 Flexfuel", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 300 }, "Stage 2": { ps: 205, nm: 315 } }
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
          label: "1.4 T-Jet 140hp", fuel: "Benzin", ps: 140, nm: 206,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 160hp", fuel: "Benzin", ps: 160, nm: 230,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          stages: { "Stage 1": { ps: 220, nm: 340 }, "Stage 2": { ps: 230, nm: 360 } }
        }
      ],
      "2016 – 2023": [
        {
          label: "1.4 T-Jet 595 145hp", fuel: "Benzin", ps: 145, nm: 210,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 595 Competizione 180hp", fuel: "Benzin", ps: 180, nm: 250,
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 595 Pista 160hp", fuel: "Benzin", ps: 160, nm: 230,
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 310 } }
        },
        {
          label: "1.4 T-Jet 595 Turismo 165hp", fuel: "Benzin", ps: 165, nm: 230,
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 695 Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          stages: { "Stage 1": { ps: 220, nm: 340 }, "Stage 2": { ps: 225, nm: 360 } }
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
