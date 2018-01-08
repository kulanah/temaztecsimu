let data = [
  {
    "name" : "Gun",
    "topics" : [ 
      { "name" : "Gun Tilt", 
      "steps" : [{ "text" : "Advice: Select gun lens setting suitable for mode (TEM or STEM)." + "\nRemove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um)." + "\nCenter beam (Beam shift track ball)." + "\nIf beam not visible:" + "\n- Make sure HT is on and FEG is on Operate." + "\n- Retract specimen holder." + "\n- Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask" },{ "text" : "Maximize screen intensity (MF-X,Y). //MX MY change intensity (brightness) of the mask" },] }, 
      { "name" : "Gun Tilt Pivot Point", 
      "steps" : [{ "text" : "Focus (INT) and center (Beam shift track ball) beam." },
      { "text" : "# mask wobbling" + "\nMinimize spot movement (MF-X). //MX MY change the wobbling" },
      { "text" : "Minimize spot movement (MF-X). //MX MY change the wobbling" }, 
      { "text" : "// MX MY change intensity of the mask" + "\nUse Focus step to adjust modulation amplitude." }, 
      { "text" : "Use Focus step to adjust modulation amplitude." },
      { "text" : "Maximize screen intensity (MF-X,Y)." },] }, 

      { "name" : "Gun Shift", 
      "steps" : [{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary. // MX MY Condenser Stigmation (Skew) " },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary." + "\nFocus (INT) and center (MF-X,Y) beam. // //MX MY Condenser Stigmation (Skew) //MX MY change intensity (brightness) of the mask// center (MF-X,Y) beam;" + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary" },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary. //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam;" },] },
      { "name" : "Spot-size Dependent Gun Shift",      
      "steps" : [{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nIf beam not visible:" + "\n- Lower magnification." + "\n- Adjust intensity setting (INTENSITY)." + "\nToggle (R2) to condenser stigmator and back, if necessary." },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\nToggle (R2) to condenser stigmator and gun tilt, if necessary." },{ "text" : "Focus (INT) and center (MF-X,Y) beam." + "\n\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back." },{ "text" : "Center beam (MF-X,Y)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\n\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back. //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam; " },{ "text" : "For all spot sizes repeat://Set Spot size to 11, mask size in smallest, lowest brightness" + "\n- Focus beam (INTENSITY)." + "\n- Center beam (MF-X,Y)." + "\n- Select next spot size (L3).//step increase the mask size and brightness" + "\n\nIf necessary, toggle (R2) MF knobs to condenser stigmator and back.  //MX MY Condenser Stigmation (Skew) // center (MF-X,Y) beam;" },] },     ]
  }, {
    "name" : "Beam HM-TEM",
    "topics" : [ { "name" : "Preparation", "steps" : [{ "text" : "Remove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um." + "\nMake sure specimen is at eucentric height." + "\nCenter (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },] }, { "name" : "Minicondenser Lens", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Unless required for special applications, keep minicondenser lens at default (DEFAULT)." + "\nOtherwise set with MF-X." },] }, { "name" : "Beam Shift Pivot Point", "steps" : [{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Minimize spot movement (MF-X,Y)." },{ "text" : "Minimize spot movement (MF-X,Y)." },] }, { "name" : "Beam Tilt Pivot Point", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "AC Beam Tilt Pivot Point", "steps" : [{ "text" : "Make sure TIA is running." }, { "text" : "Focus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "Dyn. Conical DF Distortion", "steps" : [{ "text" : "Make sure TIA is running." }, { "text" : "Focus image (FOCUS)." + "\nCenter beam (MF-X,Y)." },{ "text" : "Focus (FOCUS) and center (MF-X,Y) diffraction (spot) pattern." },{ "text" : "Turn MF-X until central beam is at 4 cm circle." },{ "text" : "Make beam movement circular (MF-Y)." + "\nIf necessary, adjust amplitude of scan (MF-X)." }, { "text" : "Use toggle (R2) to switch MF-X,Y to diffraction shift and back as needed." + "\nMake beam movement circular (MF-Y)." + "\nIf necessary, adjust amplitude of scan (MF-X)." }, { "text" : "Use toggle (R2) to switch MF-X,Y to diffraction shift and back as needed." + "\nRepeat this and previous step as needed." },] }, { "name" : "Rotation Center", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Focus image (FOCUS)." + "\nCenter (Beam shift track ball) beam." + "\nMinimize image movement (MF-X,Y)." + "\n(Use FOCUS STEP to adjust modulation)" },] }, { "name" : "Calibrate Trackball", "steps" : [{ "text" : "Focus beam (INTENSITY)." + "\nAccurately center beam (MF-X,Y)." },{ "text" : "Move (Beam shift) track ball from left to right." + "\nAdjust beam shift until beam also goes from left to right (MF-Y)." },] }, { "name" : "Calibrate Beamshift", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Move beam exactly to 40 mm circle (MF-X)." + "\nBeam shift is calculated in help page." + "\nAdjust MF-Y until BeamShift X equals calculated beam shift." },{ "text" : "Move beam exactly to 40 mm circle (MF-X)." + "\nBeam shift is calculated in help page." + "\nAdjust MF-Y until BeamShift Y equals calculated beam shift." },{ "text" : "If necessary, center (MF-X,Y) beam." },] }, { "name" : "Calibrate Beam Tilt", "steps" : [{ "text" : "Insert specimen with gold particles." + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Focus (FOCUS) diffraction pattern to spot pattern." + "\nCenter pattern accurately with (MF-X,Y)." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." + "\nFor a table of tilt angles, see on-line help." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." + "\nFor a table of tilt angles, see on-line help." },] }, { "name" : "Calibrate AC Beam Tilt", "steps" : [{ "text" : "Make sure TIA is running." + "\nInsert cross-grating." + "\nFocus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nCenter pattern accurately with (MF-X,Y)." },{ "text" : "Move (MF-X) diffraction ring to center." + "\nAdjust MF-Y until DF Tilt (nm) equals d spacing." },] }, { "name" : "Spot Size-Intensity Calibration", "steps" : [{ "text" : "Advice: Do this only for gun lens setting suitable for TEM mode." + "\nCenter beam (MF-X,Y)." + "\nAccurately focus beam (INTENSITY)." },{ "text" : "For each spot size (except #3):" + "\n- Center beam (Beam shift track ball)." + "\n- Accurately focus beam (INTENSITY)." + "\n- Adjust stigmation (MF) if needed." + "\n- Select next spot size (R3)." },] }, { "name" : "Coma-free Amplitude", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Focus (FOCUS) diffraction pattern to spot pattern." + "\nCenter pattern with (MF-X,Y)." },{ "text" : "Set amplitude to desired value (MF-X)." },] }, { "name" : "Coma-free Pivot Points", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "Coma-free Alignment", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nDefocus (INT) and center beam (MF-X,Y)." },{ "text" : "Make images for both wobble directions give same defocus (MF-X)." + "\nIf necessary change image focus (FOCUS)." },{ "text" : "Make images for both wobble directions give same defocus (MF-X)." + "\nIf necessary change image focus (FOCUS)." },] },     ]
  }, {
      "name" : "Image HM-TEM",
      "topics" : [
  { "name" : "Preparation HM Image", "steps" : [{ "text" : "Remove Objective and SA apertures." + "\nSelect and center Condenser aperture of ~70um." + "\nMake sure specimen is at eucentric height." + "\nCenter (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },] }, { "name" : "Image Shift Pivot Point", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Focus (FOCUS) and center (MF-X,Y) diffraction (spot) pattern." },{ "text" : "Minimize beam movement (MF-X,Y)." },{ "text" : "Minimize beam movement (MF-X,Y)." },] }, { "name" : "Diffraction Shift Pivot Point SA", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Minimize image movement (MF-X,Y)." },{ "text" : "Minimize image movement (MF-X,Y)." },] }, { "name" : "Objective Preset SA", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Accurately focus image (FOCUS)." + "\n(Sets eucentric focus value for SA)" },] }, { "name" : "Diffraction Shift Pivot Point Mh", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nFocus image (FOCUS)." },{ "text" : "Turn MF-X clockwise until beep." + "\n(Lowers Mh magnification.)" + "\nPress R2 to switch to image align." + "\nFocus (INT) and center (MF-X,Y) beam (with image shift!)." },{ "text" : "Focus image (FOCUS)." + "\nMinimize image movement (MF-X,Y)." + "\nIf beam moves too far, use R2 to toggle to image shift, recenter beam (MF-X,Y), toggle back (R2) and continue." },{ "text" : "Minimize image movement (MF-X,Y)." + "\nIf beam moves too far, use R2 to toggle to image shift, recenter beam (MF-X,Y), toggle back (R2) and continue." },] }, { "name" : "Image Shift Pivot and Focus Mh", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus (FOCUS) image." + "\nAccurately center image feature (STAGE)." },{ "text" : "Center (MF-X,Y !) beam." + "\nAccurately focus image (FOCUS)." + "\n(Sets eucentric focus for High M)" + "\nIf image not visible, toggle (R2) MF-X to P1 lens, turn clockwise (reduces magn.)." + "\nDefocus beam (INT) until light visible." + "\nWhen done, turn magnification up and down and toggle back." },{ "text" : "For all High M magnifications:" + "\n- Focus image (FOCUS)." + "\n- Center image feature (MF-X,Y)." + "\n- Increase magnification (MAGN)." + "\nIf image not visible, toggle (R2) MF-X to P1 lens, turn clockwise (reduces magn.)." },] }, { "name" : "Image Shift SA", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus (FOCUS) image." + "\nCenter image feature (STAGE)." },{ "text" : "For all SA magnifications:" + "\n- Decrease magnification (MAGN)." + "\n- Focus image (FOCUS)." + "\n- Center feature (MF-X,Y)." },] }, { "name" : "Diffraction Shift Pivot Point Mi", "steps" : [{ "text" : "Center (MF-X,Y) beam." + "\nDefocus beam (INT) and focus image (FOCUS)." },{ "text" : "Minimize image movement (MF-X,Y)." },{ "text" : "Minimize image movement (MF-X,Y)." },] }, { "name" : "Image Shift Pivot and Focus Mi", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nCenter beam (MF-X,Y)." + "\nCenter image feature (STAGE)." },{ "text" : "Accurately focus image (FOCUS)." + "\n(Sets eucentric focus for Int. M)" },{ "text" : "For all Int. M magnifications:" + "\n- Accurately focus image (FOCUS)." + "\n- Center feature (MF-X,Y)." + "\n- Decrease magnification (MAGN)." },] }, { "name" : "Align Diffraction Pattern", "steps" : [{ "text" : "Focus (FOCUS) diffraction (spot) pattern." + "\nAccurately center (MF-X,Y) pattern." },] }, { "name" : "Camera Length", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nCenter beam (MF-X,Y)." },{ "text" : "Focus (FOCUS) and center (MF-X,Y) diffraction (spot) pattern." },{ "text" : "For each camera length:" + "\n- Focus (FOCUS) diffraction (spot) pattern." + "\n- Center pattern (MF-X,Y)." + "\n- Increase camera length (MAGN)." },] }, { "name" : "Calibrate Image Shift", "steps" : [{ "text" : "Focus image (FOCUS)." + "\nFocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Move beam (with Image Shift) exactly to 40 mm circle (MF-X)." + "\nImage shift is calculated in help page." + "\nAdjust MF-Y until ImageShift X equals calculated image shift." },{ "text" : "Move beam (with Image Shift) exactly to 40 mm circle (MF-X)." + "\nImage shift is calculated in help page." + "\nAdjust MF-Y until ImageShift Y equals calculated image shift." },{ "text" : "If necessary, center (MF-X,Y) beam." },] }, { "name" : "Calibrate Diffraction Shift", "steps" : [{ "text" : "Insert specimen with gold particles." + "\nFocus image (FOCUS)." + "\nDefocus (INT) and center (MF-X,Y) beam." + "\nMake sure help page is visible." + "\nFlap out Alignment Control Panel and select Deflectors tab." },{ "text" : "Focus and center (MF-X,Y) diffraction pattern." },{ "text" : "Move (MF-X) known d spacing exactly to screen center." + "\nAdjust MF-Y until Diffr.Shift (nm) equals d spacing." + "\nFor a table of d spacings, see on-line help." },{ "text" : "Move (MF-X) known d spacing exactly to screen center." + "\nAdjust MF-Y until Diffr.Shift (nm) equals d spacing." + "\nFor a table of d spacings, see on-line help." },] }, { "name" : "Image/Beam Calibration", "steps" : [{ "text" : "Focus (INT) and center (MF-X,Y) beam accurately." },{ "text" : "Open on-line help." + "\nChange beam shift-image shift (MF-X) until either:" + "\n- Beam is at screen edge." + "\n- Shift is > 50% OR one of the coils is > 80%." + "\nNote: Beam may become blocked by specimen (move stage)." },{ "text" : "Move beam back to screen center (MF-X,Y).If previous step went to screen edge, step back and repeat." },{ "text" : "Open on-line help." + "\nChange beam shift-image shift (MF-X) until either:" + "\n- Beam is at screen edge." + "\n- Shift is > 50% OR one of the coils is > 80%." + "\nNote: Beam may become blocked by specimen (move stage)." },{ "text" : "Move beam back to screen center (MF-X,Y).If previous step went to screen edge, step back and repeat." },{ "text" : "Proceed further (this step simply resets Image-Beam Shift)." }]}]}
]