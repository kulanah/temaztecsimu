let data = [
  {
    "name" : "1. Gun",
    "topics" : [ { "name" : "Gun Tilt", "steps" : [{ "text" : "Advice: Select gun lens setting suitable for mode (TEM or STEM)." + "\nRemove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um)." + "\nCenter beam (Beam shift track ball)." + "\nIf beam not visible:" + "\n- Make sure HT is on and FEG is on Operate." + "\n- Retract specimen holder." + "\n- Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask" },{ "text" : "Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask" },] }, { "name" : "Gun Tilt pivot point", "steps" : [{ "text" : "Focus (INT) and center (Beam shift track ball) beam." },{ "text" : "# mask wobbling" + "\nMinimize spot movement (MF-X). //MX MY change the wobbling" },{ "text" : "Minimize spot movement (MF-X). //MX MY change the wobbling" + "\n " + "\nToggle (R2) to gun tilt, if necessary. // MX MY change intensity of the mask" + "\nUse Focus step to adjust modulation amplitude." + "\n " + "\nToggle (R2) to gun tilt, if necessary." + "\nUse Focus step to adjust modulation amplitude." },{ "text" : "Maximize screen intensity (MF-X,Y)." },] }, { "name" : "Gun Shift", "steps" : [{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary. // MX MY Condenser Stigmation (Skew) " },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary. Focus (INT) and center (MF-X,Y) beam. // //MX MY Condenser Stigmation (Skew) //MX MY change intensity (brightness) of the mask// center (MF-X,Y) beam;" + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary" },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary. //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam;" },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary." },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary." },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\n " + "\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back." },{ "text" : "Center beam (MF-X,Y)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\n " + "\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back. //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam; " },{ "text" : "For all spot sizes repeat://Set Spot size to 11, mask size in smallest, lowest brightness" + "\n- Focus beam (INTENSITY)." + "\n- Center beam (MF-X,Y)." + "\n- Select next spot size (L3).//step increase the mask size and brightness" + "\n " + "\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back.  //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam;" },] },     ]
  }, {
    "name" : "2. Beam HM-TEM",
    "topics" : [ { "name" : "Beam HM-TEM", "steps" : [{ "text" : "Remove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um." + "\nMake sure specimen is at eucentric height." + "\nCenter (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },] }, { "name" : "Minicondenser Lens", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Unless required for special applications, keep minicondenser lens at default (DEFAULT)." + "\nOtherwise set with MF-X." },] }, { "name" : "Beam Shift Pivot Point", "steps" : [{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Minimize spot movement (MF-X,Y)." },{ "text" : "Minimize spot movement (MF-X,Y)." },] }, { "name" : "Beam Tilt Pivot Point", "steps" : [{ "text" : "" + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "AC Beam Tilt Pivot Point", "steps" : [{ "text" : "Make sure TIA is running." + "\n " + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "Dyn. Conical DF Distortion", "steps" : [{ "text" : "" + "\nMake sure TIA is running." + "\n " + "\nFocus image (FOCUS)." + "\nCenter beam (MF-X,Y)." },{ "text" : "Focus (FOCUS) and center (MF-X,Y) diffraction (spot) pattern." },{ "text" : "Turn MF-X until central beam is at 4 cm circle." },{ "text" : "Make beam movement circular (MF-Y)." + "\nIf necessary, adjust amplitude of scan (MF-X)." + "\n " + "\nUse toggle (R2) to switch MF-X,Y to diffraction shift and back as needed." + "\nMake beam movement circular (MF-Y)." + "\nIf necessary, adjust amplitude of scan (MF-X)." + "\n " + "\nUse toggle (R2) to switch MF-X,Y to diffraction shift and back as needed." + "\nRepeat this and previous step as needed." },] }, { "name" : "Rotation Center", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Focus image (FOCUS)." + "\nCenter (Beam shift track ball) beam." + "\nMinimize image movement (MF-X,Y)." + "\n(Use FOCUS STEP to adjust modulation)" },] }, { "name" : "Calibrate Trackball", "steps" : [{ "text" : "Focus beam (INTENSITY)." + "\nAccurately center beam (MF-X,Y)." },{ "text" : "Move (Beam shift) track ball from left to right." + "\nAdjust beam shift until beam also goes from left to right (MF-Y)." },] }, { "name" : "Calibrate Beamshift", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Move beam exactly to 40 mm circle (MF-X)." + "\nBeam shift is calculated in help page." + "\nAdjust MF-Y until BeamShift X equals calculated beam shift.148um" },{ "text" : "Move beam exactly to 40 mm circle (MF-X)." + "\nBeam shift is calculated in help page." + "\nAdjust MF-Y until BeamShift Y equals calculated beam shift." },{ "text" : "If necessary, center (MF-X,Y) beam." },] }, { "name" : "Calibrate beam tilt", "steps" : [{ "text" : "" + "\nInsert specimen with gold particles." + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Focus (FOCUS) diffraction pattern to spot pattern." + "\nCenter pattern accurately with (MF-X,Y)." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." + "\nFor a table of tilt angles, see on-line help." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." + "\nFor a table of tilt angles, see on-line help." },] }, { "name" : "Calibrate AC Beam Tilt", "steps" : [{ "text" : "Make sure TIA is running." + "\nInsert cross-grating." + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern accurately with (MF-X,Y)." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." },] }, { "name" : "Spot Size-Intensity Calibration", "steps" : [{ "text" : "Advice: Do this only for gun lens setting suitable for TEM mode." + "\nCenter beam (MF-X,Y)." + "\nAccurately focus beam (INTENSITY)." },{ "text" : "For each spot size (except #3):" + "\n- Center beam (Beam shift track ball)." + "\n- Accurately focus beam (INTENSITY)." + "\n- Adjust stigmation (MF) if needed." + "\n- Select next spot size (R3)." },] }, { "name" : "Coma-free Amplitude", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Focus (FOCUS) diffraction pattern to spot pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Set amplitude to desired value (MF-X)." },] }, { "name" : "Coma-free Pivot Points", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "Coma-free Alignment", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Make images for both wobble directions give same defocus (MF-X)." + "\nIf necessary change image focus (FOCUS)." },{ "text" : "Make images for both wobble directions give same defocus (MF-X)." + "\nIf necessary change image focus (FOCUS)." },] },     ]
  }, {
    "name" : "3. Image HM-TEM",
    "topics" : [
{ "name" : "Preparation HM Image", "steps" : [{ "text" : "Remove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um." + "\nMake sure specimen is at eucentric height." + "\nCenter (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS). " }]}]}

/*  {
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
  }*/
]