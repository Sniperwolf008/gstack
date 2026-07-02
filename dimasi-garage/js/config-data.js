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
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
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
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 140hp", fuel: "Benzin", ps: 140, nm: 206,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 160hp", fuel: "Benzin", ps: 160, nm: 230,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 340 }, "Stage 2": { ps: 230, nm: 360 } }
        }
      ],
      "2016 – 2023": [
        {
          label: "1.4 T-Jet 595 145hp", fuel: "Benzin", ps: 145, nm: 210,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 595 Competizione 180hp", fuel: "Benzin", ps: 180, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 595 Pista 160hp", fuel: "Benzin", ps: 160, nm: 230,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 310 } }
        },
        {
          label: "1.4 T-Jet 595 Turismo 165hp", fuel: "Benzin", ps: 165, nm: 230,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 300 }, "Stage 2": { ps: 215, nm: 320 } }
        },
        {
          label: "1.4 T-Jet 695 Biposto 190hp", fuel: "Benzin", ps: 190, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 340 }, "Stage 2": { ps: 225, nm: 360 } }
        }
      ]
    },
    "Punto": {
      "2010→": [
        {
          label: "1.4 Multi-Air 165hp", fuel: "Benzin", ps: 165, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 300 }, "Stage 2": { ps: 200, nm: 320 } }
        },
        {
          label: "1.4 Multi-Air 180hp", fuel: "Benzin", ps: 180, nm: 270,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 320 }, "Stage 2": { ps: 210, nm: 340 } }
        },
        {
          label: "1.4 T-Jet 155hp", fuel: "Benzin", ps: 155, nm: 230,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 177, nm: 280 }, "Stage 2": { ps: 186, nm: 294 } }
        },
        {
          label: "1.4 T-Jet 180hp", fuel: "Benzin", ps: 180, nm: 250,
          addons: ["E85 Flexfuel", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 320 }, "Stage 2": { ps: 210, nm: 340 } }
        }
      ]
    }
  },
  "Aixam": {
    "Mega": {
      "e-Scouty": [
        {
          label: "iBSG 48V - Electric", fuel: "Elektro", ps: 8, nm: 48,
          stages: { "Stage 1": { ps: 10, nm: 52 } }
        }
      ]
    }
  },
  "Alfa Romeo": {
    "147": {
      "2001-2005": [
        {
          label: "1.6 T-Spark 105hp", fuel: "Benzin", ps: 105, nm: 140,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 115, nm: 155 }, "Stage 2": { ps: 128, nm: 171 } }
        },
        {
          label: "1.6 T-Spark 120hp", fuel: "Benzin", ps: 120, nm: 146,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 130, nm: 161 }, "Stage 2": { ps: 144, nm: 177 } }
        },
        {
          label: "1.9 JTD 100hp", fuel: "Diesel", ps: 100, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 135, nm: 265 }, "Stage 2": { ps: 148, nm: 292 } }
        },
        {
          label: "1.9 JTD 115hp", fuel: "Diesel", ps: 115, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 330 }, "Stage 2": { ps: 160, nm: 363 } }
        },
        {
          label: "1.9 JTD 136hp", fuel: "Diesel", ps: 136, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 140hp", fuel: "Diesel", ps: 140, nm: 305,
          addons: ["DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "2.0 T-Spark 150hp", fuel: "Benzin", ps: 150, nm: 172,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 165, nm: 192 }, "Stage 2": { ps: 181, nm: 211 } }
        },
        {
          label: "3.2 V6 GTA 250hp", fuel: "Benzin", ps: 250, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 270, nm: 320 }, "Stage 2": { ps: 298, nm: 352 } }
        }
      ],
      "2005→": [
        {
          label: "1.6 T-Spark 105hp", fuel: "Benzin", ps: 105, nm: 140,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 115, nm: 155 }, "Stage 2": { ps: 128, nm: 171 } }
        },
        {
          label: "1.6 T-Spark 120hp", fuel: "Benzin", ps: 120, nm: 146,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 130, nm: 161 }, "Stage 2": { ps: 144, nm: 177 } }
        },
        {
          label: "1.9 JTD 100hp", fuel: "Diesel", ps: 100, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 135, nm: 265 }, "Stage 2": { ps: 148, nm: 292 } }
        },
        {
          label: "1.9 JTD 115hp", fuel: "Diesel", ps: 115, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 350 }, "Stage 2": { ps: 165, nm: 385 } }
        },
        {
          label: "1.9 JTD 120hp", fuel: "Diesel", ps: 120, nm: 285,
          addons: ["DPF OFF", "EGR OFF"],
          stages: { "Stage 1": { ps: 155, nm: 360 }, "Stage 2": { ps: 165, nm: 370 } }
        },
        {
          label: "1.9 JTD 126hp", fuel: "Diesel", ps: 126, nm: 330,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 136hp", fuel: "Diesel", ps: 136, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 140hp", fuel: "Diesel", ps: 140, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 380 }, "Stage 2": { ps: 204, nm: 418 } }
        },
        {
          label: "1.9 JTD 170hp", fuel: "Diesel", ps: 170, nm: 330,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 190, nm: 390 }, "Stage 2": { ps: 209, nm: 429 } }
        },
        {
          label: "2.0 T-Spark 150hp", fuel: "Benzin", ps: 150, nm: 180,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 165, nm: 200 }, "Stage 2": { ps: 181, nm: 220 } }
        },
        {
          label: "3.2 V6 GTA 250hp", fuel: "Benzin", ps: 250, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 275, nm: 325 }, "Stage 2": { ps: 302, nm: 358 } }
        }
      ]
    },
    "156": {
      "1997-2003": [
        {
          label: "1.6i 120hp", fuel: "Benzin", ps: 120, nm: 146,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 133, nm: 165 }, "Stage 2": { ps: 147, nm: 182 } }
        },
        {
          label: "1.8 T.Spark 16v 144hp", fuel: "Benzin", ps: 144, nm: 169,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 154, nm: 184 }, "Stage 2": { ps: 169, nm: 202 } }
        },
        {
          label: "1.9 JTD 105hp", fuel: "Diesel", ps: 105, nm: 255,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 140, nm: 315 }, "Stage 2": { ps: 154, nm: 347 } }
        },
        {
          label: "1.9 JTD 110hp", fuel: "Diesel", ps: 110, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 140, nm: 330 }, "Stage 2": { ps: 154, nm: 363 } }
        },
        {
          label: "1.9 JTD 115hp", fuel: "Diesel", ps: 115, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 325 }, "Stage 2": { ps: 160, nm: 358 } }
        },
        {
          label: "1.9 JTD 136hp", fuel: "Diesel", ps: 136, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 140hp", fuel: "Diesel", ps: 140, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 380 }, "Stage 2": { ps: 204, nm: 418 } }
        },
        {
          label: "2.4 JTD 136hp", fuel: "Diesel", ps: 136, nm: 310,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 380 }, "Stage 2": { ps: 188, nm: 418 } }
        },
        {
          label: "2.4 JTD 150hp", fuel: "Diesel", ps: 150, nm: 304,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 385 }, "Stage 2": { ps: 204, nm: 424 } }
        },
        {
          label: "2.5 V6 190hp", fuel: "Benzin", ps: 190, nm: 220,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 240 }, "Stage 2": { ps: 220, nm: 264 } }
        },
        {
          label: "3.2 V6 GTA 250hp", fuel: "Benzin", ps: 250, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 270, nm: 320 }, "Stage 2": { ps: 298, nm: 352 } }
        }
      ],
      "2002-2005": [
        {
          label: "1.9 JTD 115hp", fuel: "Diesel", ps: 115, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 330 }, "Stage 2": { ps: 160, nm: 363 } }
        },
        {
          label: "1.9 JTD 126hp", fuel: "Diesel", ps: 126, nm: 330,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 136hp", fuel: "Diesel", ps: 136, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 140hp", fuel: "Diesel", ps: 140, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 380 }, "Stage 2": { ps: 193, nm: 418 } }
        },
        {
          label: "1.9 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 380 }, "Stage 2": { ps: 204, nm: 418 } }
        },
        {
          label: "2.0 JTS 165hp", fuel: "Benzin", ps: 165, nm: 206,
          stages: { "Stage 1": { ps: 175, nm: 220 }, "Stage 2": { ps: 193, nm: 242 } }
        },
        {
          label: "2.4 JTD 136hp", fuel: "Diesel", ps: 136, nm: 310,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 168, nm: 380 }, "Stage 2": { ps: 185, nm: 418 } }
        },
        {
          label: "2.4 JTD 140hp", fuel: "Diesel", ps: 140, nm: 304,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 173, nm: 382 }, "Stage 2": { ps: 190, nm: 420 } }
        },
        {
          label: "2.4 JTD 150hp", fuel: "Diesel", ps: 150, nm: 304,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 370 }, "Stage 2": { ps: 197, nm: 407 } }
        },
        {
          label: "2.4 JTD 20V 175hp", fuel: "Diesel", ps: 175, nm: 385,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 480 }, "Stage 2": { ps: 242, nm: 528 } }
        }
      ]
    },
    "159": {
      "2005→": [
        {
          label: "1,8 MPI 140hp", fuel: "Benzin", ps: 140, nm: 163,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 154, nm: 184 }, "Stage 2": { ps: 169, nm: 202 } }
        },
        {
          label: "1.750 TBI 200hp", fuel: "Benzin", ps: 200, nm: 320,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 255, nm: 400 }, "Stage 2": { ps: 270, nm: 420 } }
        },
        {
          label: "1.9 JTDm 115hp", fuel: "Diesel", ps: 115, nm: 275,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 350 }, "Stage 2": { ps: 160, nm: 385 } }
        },
        {
          label: "1.9 JTDm 120hp", fuel: "Diesel", ps: 120, nm: 280,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 155, nm: 350 }, "Stage 2": { ps: 160, nm: 385 } }
        },
        {
          label: "1.9 JTDm 136hp", fuel: "Diesel", ps: 136, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 380 }, "Stage 2": { ps: 197, nm: 418 } }
        },
        {
          label: "1.9 JTDm 16V 150hp", fuel: "Diesel", ps: 150, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 380 }, "Stage 2": { ps: 197, nm: 418 } }
        },
        {
          label: "1.9 JTS 160hp", fuel: "Benzin", ps: 160, nm: 190,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 205 }, "Stage 2": { ps: 188, nm: 226 } }
        },
        {
          label: "2.0 JTDm 140hp", fuel: "Diesel", ps: 140, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 420 }, "Stage 2": { ps: 197, nm: 462 } }
        },
        {
          label: "2.0 JTDm 170hp", fuel: "Diesel", ps: 170, nm: 360,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 425 }, "Stage 2": { ps: 220, nm: 468 } }
        },
        {
          label: "2.2 JTS 185hp", fuel: "Benzin", ps: 185, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 240 }, "Stage 2": { ps: 214, nm: 270 } }
        },
        {
          label: "2.4 JTD 200hp", fuel: "Diesel", ps: 200, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 235, nm: 480 }, "Stage 2": { ps: 245, nm: 520 } }
        },
        {
          label: "2.4 JTDm 20v Q4 210hp", fuel: "Diesel", ps: 210, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 235, nm: 480 }, "Stage 2": { ps: 245, nm: 520 } }
        },
        {
          label: "3.2 JTS V6 239hp", fuel: "Benzin", ps: 239, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 260, nm: 325 }, "Stage 2": { ps: 286, nm: 358 } }
        }
      ]
    },
    "166": {
      "1999-2002": [
        {
          label: "2.4 JTD 136hp", fuel: "Diesel", ps: 136, nm: 310,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 380 }, "Stage 2": { ps: 188, nm: 418 } }
        },
        {
          label: "2.4 JTD 140hp", fuel: "Diesel", ps: 140, nm: 304,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 173, nm: 382 }, "Stage 2": { ps: 190, nm: 420 } }
        },
        {
          label: "2.4 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 385 }, "Stage 2": { ps: 204, nm: 424 } }
        }
      ],
      "2003-2010": [
        {
          label: "2.4 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 385 }, "Stage 2": { ps: 204, nm: 424 } }
        },
        {
          label: "2.4 JTD 163hp", fuel: "Diesel", ps: 163, nm: 385,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 440 }, "Stage 2": { ps: 242, nm: 484 } }
        },
        {
          label: "2.4 JTD 175hp", fuel: "Diesel", ps: 175, nm: 385,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 450 }, "Stage 2": { ps: 242, nm: 495 } }
        }
      ]
    },
    "4C": {
      "2013": [
        {
          label: "1750 TBI 240hp", fuel: "Benzin", ps: 240, nm: 340,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 255, nm: 400 }, "Stage 2": { ps: 282, nm: 440 } }
        }
      ]
    },
    "Brera": {
      "2006-2008": [
        {
          label: "2.2 JTS 185hp", fuel: "Benzin", ps: 185, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 202, nm: 258 }, "Stage 2": { ps: 223, nm: 284 } }
        },
        {
          label: "2.4 JTDm 20V 200hp", fuel: "Diesel", ps: 200, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 235, nm: 480 }, "Stage 2": { ps: 247, nm: 504 } }
        },
        {
          label: "3.2 JTS V6 260hp", fuel: "Benzin", ps: 260, nm: 322,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 270, nm: 340 }, "Stage 2": { ps: 298, nm: 374 } }
        }
      ],
      "2008-2011": [
        {
          label: "1750 TBI 200hp", fuel: "Benzin", ps: 200, nm: 320,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 255, nm: 400 }, "Stage 2": { ps: 270, nm: 420 } }
        },
        {
          label: "2.0 JTDm 163hp", fuel: "Diesel", ps: 163, nm: 360,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 425 }, "Stage 2": { ps: 205, nm: 451 } }
        },
        {
          label: "2.0 JTDm 170hp", fuel: "Diesel", ps: 170, nm: 360,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 425 }, "Stage 2": { ps: 214, nm: 446 } }
        },
        {
          label: "2.2 JTS 185hp", fuel: "Benzin", ps: 185, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 240 }, "Stage 2": { ps: 205, nm: 252 } }
        },
        {
          label: "2.4 JTDm 20V 200hp", fuel: "Diesel", ps: 200, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 240, nm: 480 }, "Stage 2": { ps: 252, nm: 504 } }
        },
        {
          label: "2.4 JTDm 20V 210hp", fuel: "Diesel", ps: 210, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 235, nm: 480 }, "Stage 2": { ps: 238, nm: 504 } }
        },
        {
          label: "3.2 JTS V6 260hp", fuel: "Benzin", ps: 260, nm: 322,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 270, nm: 325 }, "Stage 2": { ps: 283, nm: 341 } }
        }
      ]
    },
    "Crosswagon": {
      "2005-2007": [
        {
          label: "1.9 JTD 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 182, nm: 385 }, "Stage 2": { ps: 200, nm: 424 } }
        }
      ]
    },
    "Giulia": {
      "2016→": [
        {
          label: "2.0T 200hp", fuel: "Benzin", ps: 200, nm: 330,
          addons: ["E85 Flexfuel", "Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 300, nm: 450 }, "Stage 2": { ps: 315, nm: 473 } }
        },
        {
          label: "2.0T Veloce 280hp", fuel: "Benzin", ps: 280, nm: 400,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 300, nm: 450 }, "Stage 2": { ps: 315, nm: 473 } }
        },
        {
          label: "2.2 JTD 136hp", fuel: "Diesel", ps: 136, nm: 380,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 558 } }
        },
        {
          label: "2.2 JTD 150hp", fuel: "Diesel", ps: 150, nm: 380,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Lambda OFF", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 557 } }
        },
        {
          label: "2.2 JTD 160hp", fuel: "Diesel", ps: 160, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Lambda OFF", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 553 } }
        },
        {
          label: "2.2 JTD 180hp", fuel: "Diesel", ps: 180, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Lambda OFF", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 557 } }
        },
        {
          label: "2.2 JTD 190hp", fuel: "Diesel", ps: 190, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Lambda OFF", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 557 } }
        },
        {
          label: "2.2 JTD 210hp", fuel: "Diesel", ps: 210, nm: 470,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 230, nm: 550 }, "Stage 2": { ps: 242, nm: 578 } }
        },
        {
          label: "2.9 V6 Quadrifoglio 510hp", fuel: "Benzin", ps: 510, nm: 600,
          addons: ["DTC OFF", "E85 Flexfuel", "Exhaust flaps open", "Lambda OFF", "OPF OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 540, nm: 720 }, "Stage 2": { ps: 567, nm: 756 } }
        }
      ]
    },
    "Giulietta": {
      "2010-2014": [
        {
          label: "1.4 Turbo 105hp", fuel: "Benzin", ps: 105, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 280 }, "Stage 2": { ps: 165, nm: 308 } }
        },
        {
          label: "1.4 Turbo 120hp", fuel: "Benzin", ps: 120, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 280 }, "Stage 2": { ps: 165, nm: 308 } }
        },
        {
          label: "1.4 Turbo Multiair 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 300 }, "Stage 2": { ps: 197, nm: 330 } }
        },
        {
          label: "1.6 JTDm 105hp", fuel: "Diesel", ps: 105, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 130, nm: 360 }, "Stage 2": { ps: 144, nm: 396 } }
        },
        {
          label: "1.750 TBi Quadrifoglio Verde 235hp", fuel: "Benzin", ps: 235, nm: 340,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 265, nm: 400 }, "Stage 2": { ps: 292, nm: 440 } }
        },
        {
          label: "2.0 JTDm 140hp", fuel: "Diesel", ps: 140, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 420 }, "Stage 2": { ps: 197, nm: 462 } }
        },
        {
          label: "2.0 JTDm 170hp", fuel: "Diesel", ps: 170, nm: 350,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 425 }, "Stage 2": { ps: 220, nm: 468 } }
        }
      ],
      "2014-2016": [
        {
          label: "1.4 Turbo 105hp", fuel: "Benzin", ps: 105, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 280 }, "Stage 2": { ps: 165, nm: 308 } }
        },
        {
          label: "1.4 Turbo 120hp", fuel: "Benzin", ps: 120, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 280 }, "Stage 2": { ps: 165, nm: 308 } }
        },
        {
          label: "1.4 Turbo Multiair 150hp", fuel: "Benzin", ps: 150, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.4 Turbo Multiair 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.6 JTDm 105hp", fuel: "Diesel", ps: 105, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 130, nm: 360 }, "Stage 2": { ps: 144, nm: 396 } }
        },
        {
          label: "1.750 TBi Quadrifoglio Verde 240hp", fuel: "Benzin", ps: 240, nm: 340,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 255, nm: 400 }, "Stage 2": { ps: 282, nm: 440 } }
        },
        {
          label: "2.0 JTDm 150hp", fuel: "Diesel", ps: 150, nm: 380,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 440 }, "Stage 2": { ps: 197, nm: 484 } }
        },
        {
          label: "2.0 JTDm 175hp", fuel: "Diesel", ps: 175, nm: 350,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 205, nm: 425 }, "Stage 2": { ps: 226, nm: 468 } }
        }
      ],
      "2016→": [
        {
          label: "1.4 Turbo 120hp", fuel: "Benzin", ps: 120, nm: 215,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 300 }, "Stage 2": { ps: 165, nm: 330 } }
        },
        {
          label: "1.4 Turbo Multiair 150hp", fuel: "Benzin", ps: 150, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.4 Turbo Multiair 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.6 JTDm 120hp", fuel: "Diesel", ps: 120, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 380 }, "Stage 2": { ps: 160, nm: 418 } }
        },
        {
          label: "1.750 TBi 240hp", fuel: "Benzin", ps: 240, nm: 340,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 255, nm: 400 }, "Stage 2": { ps: 282, nm: 440 } }
        },
        {
          label: "2.0 JTDm 150hp", fuel: "Diesel", ps: 150, nm: 380,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 215, nm: 460 }, "Stage 2": { ps: 237, nm: 506 } }
        },
        {
          label: "2.0 JTDm 175hp", fuel: "Diesel", ps: 175, nm: 350,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 205, nm: 425 }, "Stage 2": { ps: 226, nm: 468 } }
        }
      ]
    },
    "GT": {
      "Alle Baujahre": [
        {
          label: "1.9 JTD 16v 150hp", fuel: "Diesel", ps: 150, nm: 305,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 380 }, "Stage 2": { ps: 204, nm: 418 } }
        },
        {
          label: "1.9 JTD 16V 170hp", fuel: "Diesel", ps: 170, nm: 330,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 200, nm: 400 }, "Stage 2": { ps: 220, nm: 440 } }
        },
        {
          label: "2.0 JTS 165hp", fuel: "Benzin", ps: 165, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 177, nm: 218 }, "Stage 2": { ps: 194, nm: 240 } }
        },
        {
          label: "3.2 V6 240hp", fuel: "Benzin", ps: 240, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Vmax OFF"],
          stages: { "Stage 1": { ps: 260, nm: 325 }, "Stage 2": { ps: 286, nm: 358 } }
        }
      ]
    },
    "MiTo": {
      "2008-2013": [
        {
          label: "0.9 Twinair 85hp", fuel: "Benzin", ps: 85, nm: 145,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 95, nm: 190 }, "Stage 2": { ps: 105, nm: 209 } }
        },
        {
          label: "1.3 JTDM 85hp", fuel: "Diesel", ps: 85, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 250 }, "Stage 2": { ps: 121, nm: 275 } }
        },
        {
          label: "1.3 JTDM 90hp", fuel: "Diesel", ps: 90, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 250 }, "Stage 2": { ps: 121, nm: 275 } }
        },
        {
          label: "1.3 JTDM 95hp", fuel: "Diesel", ps: 95, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 115, nm: 240 }, "Stage 2": { ps: 128, nm: 264 } }
        },
        {
          label: "1.3 JTDM S&S 95hp", fuel: "Diesel", ps: 95, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 115, nm: 240 }, "Stage 2": { ps: 128, nm: 264 } }
        },
        {
          label: "1.4 Multiair 135hp", fuel: "Benzin", ps: 135, nm: 205,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 270 }, "Stage 2": { ps: 165, nm: 297 } }
        },
        {
          label: "1.4 Turbo 115hp", fuel: "Benzin", ps: 115, nm: 200,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 250 }, "Stage 2": { ps: 165, nm: 275 } }
        },
        {
          label: "1.4 Turbo 120hp", fuel: "Benzin", ps: 120, nm: 200,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 250 }, "Stage 2": { ps: 165, nm: 275 } }
        },
        {
          label: "1.4 Turbo 155hp", fuel: "Benzin", ps: 155, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 175, nm: 300 }, "Stage 2": { ps: 193, nm: 330 } }
        },
        {
          label: "1.4 Turbo 163hp", fuel: "Benzin", ps: 163, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.4 Turbo 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 290 }, "Stage 2": { ps: 204, nm: 319 } }
        },
        {
          label: "1.4i 16v 78hp", fuel: "Benzin", ps: 78, nm: 120,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 100, nm: 130 }, "Stage 2": { ps: 110, nm: 143 } }
        },
        {
          label: "1.4i 16v 95hp", fuel: "Benzin", ps: 95, nm: 120,
          addons: ["Exhaust flaps open", "Lambda OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 100, nm: 130 }, "Stage 2": { ps: 110, nm: 143 } }
        },
        {
          label: "1.6 JTDM 115hp", fuel: "Diesel", ps: 115, nm: 320,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 380 }, "Stage 2": { ps: 160, nm: 418 } }
        },
        {
          label: "1.6 JTDM 120hp", fuel: "Diesel", ps: 120, nm: 300,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 145, nm: 380 }, "Stage 2": { ps: 160, nm: 418 } }
        },
        {
          label: "GTA 235hp", fuel: "Benzin", ps: 235, nm: 340,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 265, nm: 380 }, "Stage 2": { ps: 292, nm: 418 } }
        }
      ],
      "2013-2016": [
        {
          label: "0.9 TwinAir 105hp", fuel: "Benzin", ps: 105, nm: 145,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 190 }, "Stage 2": { ps: 121, nm: 209 } }
        },
        {
          label: "1.3 JTDm 85hp", fuel: "Diesel", ps: 85, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 250 }, "Stage 2": { ps: 121, nm: 275 } }
        },
        {
          label: "1.4 MultiAir 140hp", fuel: "Benzin", ps: 140, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 285 }, "Stage 2": { ps: 197, nm: 314 } }
        },
        {
          label: "1.4 MultiAir 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 300 }, "Stage 2": { ps: 204, nm: 330 } }
        },
        {
          label: "1.4 TwinAir 120hp", fuel: "Benzin", ps: 120, nm: 206,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 150, nm: 250 }, "Stage 2": { ps: 165, nm: 275 } }
        }
      ],
      "2016→": [
        {
          label: "0.9 TwinAir 90hp", fuel: "Benzin", ps: 90, nm: 145,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 190 }, "Stage 2": { ps: 121, nm: 209 } }
        },
        {
          label: "0.9 TwinAir 105hp", fuel: "Benzin", ps: 105, nm: 145,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 110, nm: 190 }, "Stage 2": { ps: 121, nm: 209 } }
        },
        {
          label: "1.3 JTDm 80hp", fuel: "Diesel", ps: 80, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 105, nm: 250 }, "Stage 2": { ps: 116, nm: 275 } }
        },
        {
          label: "1.3 JTDm 95hp", fuel: "Diesel", ps: 95, nm: 200,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 115, nm: 250 }, "Stage 2": { ps: 128, nm: 275 } }
        },
        {
          label: "1.4 Multiair 140hp", fuel: "Benzin", ps: 140, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 180, nm: 285 }, "Stage 2": { ps: 197, nm: 314 } }
        },
        {
          label: "1.4 Multiair 170hp", fuel: "Benzin", ps: 170, nm: 250,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 185, nm: 300 }, "Stage 2": { ps: 204, nm: 330 } }
        }
      ]
    },
    "Spider": {
      "Alle Baujahre": [
        {
          label: "1750 Turbo 200hp", fuel: "Benzin", ps: 200, nm: 320,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 240, nm: 400 }, "Stage 2": { ps: 265, nm: 440 } }
        },
        {
          label: "2.0 JTD 163hp", fuel: "Diesel", ps: 163, nm: 360,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 425 }, "Stage 2": { ps: 214, nm: 468 } }
        },
        {
          label: "2.0 JTD 170hp", fuel: "Diesel", ps: 170, nm: 360,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 425 }, "Stage 2": { ps: 214, nm: 468 } }
        },
        {
          label: "2.2 JTS 185hp", fuel: "Benzin", ps: 185, nm: 230,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 195, nm: 240 }, "Stage 2": { ps: 214, nm: 264 } }
        },
        {
          label: "2.4 JTDm 20V 200hp", fuel: "Diesel", ps: 200, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 235, nm: 470 }, "Stage 2": { ps: 258, nm: 517 } }
        },
        {
          label: "2.4 JTDm 20V 210hp", fuel: "Diesel", ps: 210, nm: 400,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Vmax OFF"],
          stages: { "Stage 1": { ps: 240, nm: 480 }, "Stage 2": { ps: 265, nm: 528 } }
        },
        {
          label: "3.2 V6 JTS 260hp", fuel: "Benzin", ps: 260, nm: 300,
          addons: ["Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 275, nm: 325 }, "Stage 2": { ps: 302, nm: 358 } }
        }
      ]
    },
    "Stelvio": {
      "2017→": [
        {
          label: "2.0T 200hp", fuel: "Benzin", ps: 200, nm: 330,
          addons: ["E85 Flexfuel", "Exhaust flaps open", "Lambda OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 310, nm: 460 }, "Stage 2": { ps: 326, nm: 483 } }
        },
        {
          label: "2.0T 280hp", fuel: "Benzin", ps: 280, nm: 400,
          addons: ["Exhaust flaps open", "Lambda OFF", "OPF OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 310, nm: 460 }, "Stage 2": { ps: 327, nm: 483 } }
        },
        {
          label: "2.2 JTD 150hp", fuel: "Diesel", ps: 150, nm: 380,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 556 } }
        },
        {
          label: "2.2 JTDm 160hp", fuel: "Diesel", ps: 160, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 553 } }
        },
        {
          label: "2.2 JTD 180hp", fuel: "Diesel", ps: 180, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 556 } }
        },
        {
          label: "2.2 JTDm 190hp", fuel: "Diesel", ps: 190, nm: 450,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Exhaust flaps open", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 220, nm: 530 }, "Stage 2": { ps: 232, nm: 553 } }
        },
        {
          label: "2.2 JTD 210hp", fuel: "Diesel", ps: 210, nm: 470,
          addons: ["Adblue OFF", "DPF OFF", "EGR OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 230, nm: 550 }, "Stage 2": { ps: 240, nm: 560 } }
        },
        {
          label: "2.9 V6 Turbo 510hp", fuel: "Benzin", ps: 510, nm: 600,
          addons: ["E85 Flexfuel", "Exhaust flaps open", "Lambda OFF", "OPF OFF", "Pop & Bang", "Start Stop OFF", "Vmax OFF"],
          stages: { "Stage 1": { ps: 580, nm: 700 }, "Stage 2": { ps: 609, nm: 735 } }
        }
      ]
    },
    "Tonale": {
      "2022→": [
        {
          label: "1.5T 130hp", fuel: "Benzin", ps: 130, nm: 240,
          addons: ["E85 Flexfuel", "Vmax OFF"],
          stages: { "Stage 1": { ps: 170, nm: 300 }, "Stage 2": { ps: 180, nm: 320 } }
        },
        {
          label: "1.5T 160hp", fuel: "Benzin", ps: 160, nm: 240,
          addons: ["E85 Flexfuel", "Vmax OFF"],
          stages: { "Stage 1": { ps: 190, nm: 300 }, "Stage 2": { ps: 200, nm: 320 } }
        },
        {
          label: "2.0 Multiair 260hp", fuel: "Benzin", ps: 260, nm: 400,
          addons: ["CAT OFF", "E85 Flexfuel", "Vmax OFF"],
          stages: { "Stage 1": { ps: 300, nm: 460 }, "Stage 2": { ps: 315, nm: 483 } }
        }
      ]
    }
  }
};
