/* =====================================================
   Dimasi Garage — Konfigurator-Datensatz
   Unverbindliche Stage-1-Richtwerte (Software auf Seriehardware).
   Format je Motor: { label, ps:[Serie, Getunt], nm:[Serie, Getunt] }
   Zahlen sind konservative Erfahrungswerte fuer gaengige EU-Modelle
   und werden final immer individuell am Fahrzeug geprueft.
   ===================================================== */
window.DIMASI_TUNING = {
  "Audi": {
    "A3 (8V / 8Y)": [
      { label: "1.0 TSI 115 PS", ps: [115, 130], nm: [200, 250] },
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TFSI 190 PS", ps: [190, 240], nm: [320, 410] },
      { label: "1.6 TDI 116 PS", ps: [116, 140], nm: [250, 320] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "2.0 TDI 184 PS", ps: [184, 215], nm: [380, 440] },
      { label: "S3 2.0 TFSI 310 PS", ps: [310, 370], nm: [400, 490] }
    ],
    "A4 (B8 / B9)": [
      { label: "2.0 TFSI 190 PS", ps: [190, 240], nm: [320, 420] },
      { label: "2.0 TFSI 252 PS", ps: [252, 300], nm: [370, 460] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [320, 400] },
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] },
      { label: "3.0 TDI 272 PS", ps: [272, 330], nm: [600, 680] }
    ],
    "A6 (C7 / C8)": [
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] },
      { label: "3.0 TDI 272 PS", ps: [272, 330], nm: [580, 680] },
      { label: "3.0 TDI 286 PS", ps: [286, 350], nm: [620, 720] }
    ],
    "Q5": [
      { label: "2.0 TFSI 252 PS", ps: [252, 300], nm: [370, 460] },
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] },
      { label: "3.0 TDI 286 PS", ps: [286, 350], nm: [620, 720] }
    ]
  },
  "BMW": {
    "1er (F20 / F40)": [
      { label: "118i 136 PS", ps: [136, 165], nm: [220, 290] },
      { label: "120d 190 PS", ps: [190, 230], nm: [400, 470] }
    ],
    "3er (F30 / G20)": [
      { label: "318d 150 PS", ps: [150, 185], nm: [320, 400] },
      { label: "320d 190 PS", ps: [190, 230], nm: [400, 470] },
      { label: "320i 184 PS", ps: [184, 220], nm: [290, 380] },
      { label: "330i 258 PS", ps: [258, 300], nm: [400, 480] },
      { label: "330d 258 PS", ps: [258, 310], nm: [560, 680] }
    ],
    "5er (F10 / G30)": [
      { label: "520d 190 PS", ps: [190, 230], nm: [400, 470] },
      { label: "530d 265 PS", ps: [265, 320], nm: [620, 700] }
    ],
    "X3 (F25 / G01)": [
      { label: "20d 190 PS", ps: [190, 230], nm: [400, 470] },
      { label: "30d 265 PS", ps: [265, 320], nm: [620, 700] }
    ]
  },
  "VW": {
    "Golf (7 / 8)": [
      { label: "1.0 TSI 110 PS", ps: [110, 130], nm: [200, 250] },
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TSI GTI 245 PS", ps: [245, 300], nm: [370, 450] },
      { label: "2.0 TSI R 320 PS", ps: [320, 380], nm: [400, 500] },
      { label: "1.6 TDI 115 PS", ps: [115, 140], nm: [250, 320] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "2.0 TDI GTD 200 PS", ps: [200, 240], nm: [400, 460] }
    ],
    "Passat (B8)": [
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] }
    ],
    "Tiguan": [
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] }
    ]
  },
  "Mercedes-Benz": {
    "A-Klasse (W177)": [
      { label: "A180 136 PS", ps: [136, 165], nm: [200, 270] },
      { label: "A200 163 PS", ps: [163, 200], nm: [250, 320] },
      { label: "A220d 190 PS", ps: [190, 225], nm: [400, 450] }
    ],
    "C-Klasse (W205 / W206)": [
      { label: "C200 184 PS", ps: [184, 215], nm: [300, 370] },
      { label: "C220d 194 PS", ps: [194, 235], nm: [400, 460] },
      { label: "C300d 245 PS", ps: [245, 290], nm: [500, 580] }
    ],
    "E-Klasse (W213)": [
      { label: "E220d 194 PS", ps: [194, 235], nm: [400, 460] },
      { label: "E300d 245 PS", ps: [245, 290], nm: [500, 580] }
    ]
  },
  "Škoda": {
    "Octavia (5E / NX)": [
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "RS 2.0 TSI 245 PS", ps: [245, 300], nm: [370, 450] },
      { label: "RS 2.0 TDI 184 PS", ps: [184, 215], nm: [380, 440] }
    ],
    "Superb (3V)": [
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "2.0 TDI 190 PS", ps: [190, 230], nm: [400, 460] }
    ]
  },
  "Seat / Cupra": {
    "Leon (5F / KL)": [
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] },
      { label: "2.0 TDI 150 PS", ps: [150, 185], nm: [340, 400] },
      { label: "Cupra 2.0 TSI 300 PS", ps: [300, 370], nm: [400, 490] }
    ],
    "Ibiza / Arona": [
      { label: "1.0 TSI 110 PS", ps: [110, 130], nm: [200, 250] },
      { label: "1.5 TSI 150 PS", ps: [150, 180], nm: [250, 300] }
    ]
  },
  "Ford": {
    "Focus (Mk3 / Mk4)": [
      { label: "1.0 EcoBoost 125 PS", ps: [125, 145], nm: [170, 220] },
      { label: "1.5 EcoBoost 150 PS", ps: [150, 180], nm: [240, 300] },
      { label: "ST 2.3 EcoBoost 280 PS", ps: [280, 330], nm: [420, 500] },
      { label: "1.5 TDCi 120 PS", ps: [120, 145], nm: [300, 350] }
    ],
    "Fiesta (Mk7 / Mk8)": [
      { label: "1.0 EcoBoost 100 PS", ps: [100, 120], nm: [170, 210] },
      { label: "ST 1.5 200 PS", ps: [200, 230], nm: [290, 340] }
    ]
  },
  "Opel": {
    "Astra (K)": [
      { label: "1.4 Turbo 150 PS", ps: [150, 175], nm: [245, 300] },
      { label: "1.6 CDTi 136 PS", ps: [136, 160], nm: [320, 370] }
    ],
    "Corsa (F)": [
      { label: "1.2 Turbo 100 PS", ps: [100, 120], nm: [205, 250] },
      { label: "1.2 Turbo 130 PS", ps: [130, 150], nm: [230, 270] }
    ]
  }
};
