let data = [
  {
    "name" : "1. Gun",
    "topics" : [
      {
        "name" : "Gun Tilt",
        "steps" : [
          {
            "text" : "Advice: Select gun lens setting suitable for mode (TEM or STEM)." +
            "\nRemove Objective and SA apertures." +
            "\nSelect and center Condenser aperture of ~70um)." +
            "\nCenter beam (Beam shift track ball)." +
            "\nIf beam not visible:" +
            "\n- Make sure HT is on and FEG is on Operate." +
            "\n- Retract specimen holder." +
            "\n- Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask",
            "flags" : "wx"
          }, {
            "text": "Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask",
            "flags" : "wx"
          }
        ]
      }, {
        "name" : "Gun Tilt Pivot Point" ,
        "steps" : [
          {
            "text" : "Focus (INT) and center (Beam shift track ball) beam.",
            "flags" : "pivotpoint"
          }, {
            "text" : "# mask wobbling" +
            "\nMinimize spot movement (MF-X). //MX MY change the wobbling",
            "flags" : "pivotpoint" 
          }, {
            "text" : "Toggle (R2) to gun tilt, if necessary. // MX MY change intensity of the mask" +
            "\nUse Focus step to adjust modulation amplitude.",
            "flags" : "pivotpoint" 
          }, {
            "text" : "Maximize screen intensity (MF-X,Y).",
            "flags" : "pivotpoint" 
          }
        ]
      }, {
        "name" : "Gun Shift",
        "steps" : [
          {
            "text" : "Focus (INT) and center (MF-X,Y) beam."
            + "\nIf beam not visible:"
            + "\n- Lower magnification."
            + "\n- Adjust intensity setting (INTENSITY)."
            + "\nToggle (R2) to condenser stigmator and back, if necessary. // MX MY Condenser Stigmation (Skew)",
            "flags" : "wx"
          }
        ]
      }
    ]
  }, {
    "name" : "2. Beam HM-TEM",
    "topics" : [
      {
        "name" : "Preparation", 
        "steps" : [
          {
            "text" : "Remove Objective and SA apertures."
            + "\nSelect and center Condenser aperture of ~70um."
            + "\n Make sure specimen is at eucentric height."
            + "\nCenter (MF-X,Y) beam."
            + "\nDefocus beam (INT) and focus image (FOCUS).",
            "flags" : "abc"
          }
        ]
      }
    ]
  }
]