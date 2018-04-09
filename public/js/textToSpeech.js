let ch1SpeakerNotes = [
    '	Welcome to the OEMP TEM introductory lecture! Our goal for this chapter is to give you an overview of what the TEM can do. You’ll be introduced to the applications and techniques that have made TEM so critical for the research and development of materials and devices on the micro and nano-scales.    This course was made possible by a generous grant from the W. M. Keck Foundation.    ',
    '	This course is designed to introduce the theoretical and practical concepts of  transmission electron microscopy (TEM),  and to provide hands-on opportunities for students to learn how to operate a state-of-the-art high resolution TEM and its attached analytical accessories, such as energy dispersive x-ray spectrometers (EDX) and electron energy loss spectroscopes (EELS).    ',
    '	While there are no required texts for this course, we have drawn heavily from five resources:   	the “basic” textbooks we used were:  		 Willams’ and Carter’s  Transmission Electron Microscopy (2nd ed.)  		and Fultz’ and Howe’s Transmission Electron Microscopy and Diffractometry of Materials (4th ed)  	while the “advanced” textbooks we used were:  		Reimer and Kohl’s Transmission Electron Microscopy Physics of Image Formation (5th ed) 		de Graef’s Introduction to Conventional Transmission Electron Microscopy 		and Zuo and Spence’s Advanced Transmission Electron Microscopy, Imaging and Diffraction in Nanoscience  The TEM simulator, and all TEM course materials are focused on PSU’s transmission electron microscope, the FEI Tecnai G2 F-20 S-STWIN with Oxford X-Max energy dispersive x-ray spectrometer (EDX or EDS) and GIF 2000 for EELS. Upon successful completion of the online education program, students will be eligible come to the TEM lab at the Center for Electron Microscopy and Nanofabrication at PSU for hands-on training. This on-site training will total about 2-3 hours, and will certify that the student is qualified to operate the TEM.    ',
    '	This chapter uses excerpts from Colliex’s Seeing and measuring with electrons: Transmission electron microscopy today and tomorrow – An introduction, as well as Aseyev, Weber & Ischenko’s Ultrafast Electron Microscopy for Chemistry, Biology and Material Science, Bostanjoglo and Horinek’s Pulsed TEM - A New Method to Detect Transient Structures in Fast Phase-Transitions, and Alloyeau et al.’s STEM Nanodiffraction Technique for Structure Analysis of CoPt Nanoparticles.    ',
    '	And, to give you a brief outline of this lecture: we’ll begin by defining and discussing both nanotechnology and transmission electron microscopy, or TEM, and we’ll discuss what exactly a TEM does. Then, for perspective, we’ll briefly look at the history of the TEM. Next we’ll discuss the differences between electron microscopy and “optical microscopy”, which could also be called “ light microscopy”, or “LM”. After that, we’ll examine the differences between two common types of electron microscopes: transmission electron microscopes and scanning electron microscopes. Then, we’ll talk about the components of TEM, common techniques, and examples of their applications in the field of nanocharacterization.    ',
    '	The somewhat vague term “nanotechnology” refers to science, engineering, and technology conducted at the nanoscale, which refers to materials and devices smaller than about 100 nanometers in size.   Unique properties and phenomena can be observed and manipulated through nanoscience and nanotechnology because of the dramatic reduction in size-scale compared to macroscopic science and technology. This of course means that the use or study of “nanotechnology” is not necessarily restricted to any one field! In fact, elements of nanoscience are present in many fields, like chemistry, biology, physics, materials science, and engineering.   Nanoscience and nanotechnology are broad categories, but always involves the ability to see and/or control individual atoms or molecules,.   This is problematic, however, since something as small as an atom is impossible to see with the naked eye. In fact, the instruments typically used in a high school science lab won’t help, either.    ',
    '	To give you a sense of the scales we’re talking about, let’s define some natural distances:   the smallest that we’ll discuss is the Bohr radius, which is a subatomic metric describing the distance between the nucleus and the electron of a ground-state hydrogen atom. This distance is about 0.05 nanometers.   And, scaling up, the Van der Waals radius, which is half of the distance between two unbonded atoms of an element, is 0.17 nanometers in the case of carbon – so, if we were to let individual carbon atoms roll around, they would always remain separated by at least around 0.34 nm.    Using these general ideas about the distances between the components of  atoms, and the distances between the atoms, then, we can more readily understand how a 1 nanometer line could be “drawn” with just 3 carbon atoms.   If we added two more lines of three carbon atoms, for a total of nine carbon atoms, then we’d have a 1 nm by 1 nm planar surface.   And, likewise, a 1 nm by 1 nm by 1 nm cube could be constructed with just 27 C atoms.  Constructing a cubic millimeter, though, would require “2.7 times ten to the 28” carbon atoms, so we can quickly see the enormous disparity between even a tiny macroscopic object like our cubic millimeter and nanoscale objects – they’re immensely tiny!   We actually classify nanomaterials based on how many of their dimensions are less than 100 nanometers in length –   If all three dimensions are less than 100 nm, we call them “3D nanomaterials” – nanomaterials of this type include nanoparticles, quantum dots, and nano-onions; some functional examples include gold nanoparticles, cadmium-selenide quantum dots, and carbon nano-onions.   If two dimensions are less than 100 nm, we call them 2D nanomaterials, which are exemplified by nanotubes and nanowires. Some common examples are carbon or titanium dioxide nanotubes, and silver, silicon, cold, and copper nanowires.  1D nanomaterials, so those with only one dimension being less than 100 nm, include thin films and 2D crystals. Nanodevices, graphene sheets, tungsten disulfide, and molybdenum sulfide are good examples of these.      ',
    '	So, clearly, there is great diversity under the umbrella of “nanotechnology”, and a lot of the most important components are very removed from our day-to-day experience and intuition, since everything is microscopic.   However, none of that changes the fact that new technologies and innovations are only possible through the application of a thorough understanding of the properties, behaviors, and design of objects existing at this scale.    In order to do carry out research and development and/or nanocharacterization, we need to know:   	what the material looks like; so its dimensions, structure, etc.  	what the material is made of; its component molecules, their elemental proportions, etc.  	and its properties, be they physical, chemical, or electromagnetic.   But, of course, since everything is so small, how can this information be gathered?    ',
    '	The information is gathered through nanocharacterization techniques!   This graph describes currently available analytical techniques (listed in green at the top) with their analytical spot size, which describes the dimensions that can be analyzed (on the bottom horizontal axis), and their sensitivity to chemical composition (on the right-hand vertical axis).   Essentially, we can see a dozen or so techniques here, yet when we examine techniques capable of performing analyses of materials smaller than 100 nm, or “nanocharacterization”, we see there’re only a few: FIB, or focused-ion beam; AFM, or atomic force microscopy; scanning electron microscopy, or SEM; and, far at the end there, with the smallest analytical spot size available, is TEM/STEM. While it is possible to view objects between one to five nanometers in FIB and SEM, the roles these instruments can play in nanocharacterization are limited because, at present, they can only extract chemical information from objects with at least one dimension greater than 100 nm in size. So if we need to quantitatively investigate chemical composition of and physical phenomena occurring in objects smaller than 100 nanometers, we’ll be restricted to using TEM/STEM.       ',
    '	So, we know the size constraints of the nanoscale at least require electron microscopy, if not transmission electron microscopy specifically. But, what IS transmission electron microscopy? What is a transmission electron microscope?   ➢	TEMs follow the same principle as visible light microscopes (LMs), but use:  ➢	electrons for illumination instead of light,  ➢	and electromagnetic or electrostatic lenses to change the ray path of the illuminating “beam”, instead of glass lenses.  In the simulator, we can see electrons emitted into the vacuum by the sharp, tiny “filament” subjected to high temperature or a strong electrical field within the electron gun.  High voltage (also called high tension) accelerates the emitted electrons and this increase in velocity, and therefore total energy, will make their wavelengths shorter. We’ll hear more about electron sources and electron guns in chapter two.  ➢	The condenser lenses and their apertures are used to demagnify and control the convergence or divergence angle of the electron beam, couple in the condenser lenses stop high angle electrons, meaning they reduce the beam size and thus increase resolution.  Try opening the column of the OEMP Tecnai to see how the electron beam behaves!   ➢	Similar to LM,  the objective lens is used for image formation and the objective aperture is used for contrast enhancement -- you can see the effects of aperture size on the image in the simulator as well. Moving from objective aperture number 4 to aperture number 1 will show the effects of aperture size on contrast.  ➢	One large advantage of TEM is that we can examine non-conductive samples, i.e. polymers, ceramics, and biological samples.  Pause the lecture and take a moment to review these concepts with the simulator -- open the “Microscope column” view and then press the “column valves” button. What happens? Why is this happening?   Do you notice changes in the image as you cycle through the different objective apertures? The mechanisms behind this contrast enhancement will be discussed in greater detail in later material.     ',
    '	So, if we compare the three types of microscope we’ve discussed: light, transmission electron, and scanning electron; we’ll see that the optical principles are fairly similar. In these diagrams we can see that all three depend on illumination from some sort of radiation source: maybe a light bulb or a LASER  in LM to supply it with photons, or a so-called “electron source” in TEM and SEM; the methods may be different, but the goal is the same: to provide an illuminating beam. Electron sources will be discussed in-depth in the next chapter.   That’s not the only difference, however – think about lenses! In LM we use glass lenses, but we can’t use those in TEM (for many reasons that you’ll learn about in chapter 3), so instead of glass we use one of two kinds of electronically adjustable lens: electromagnetic, and electrostatic lenses.  We can see that in all of the microscopes the rays emitted from the illumination source enter a condenser lens -- either glass in LM or electromagnetic in TEM and SEM --  and are focused into convergent or divergent beams, depending on the properties or settings of the lens.  These two terms, “convergence” and “divergence” are very important in optics, so let’s take moment to define them: “convergence” means that all the light or electron rays travel along different paths that all meet at a “focus point”. “Divergence”, the inverse, means that the light or electrons will all travel along different paths whose endpoints never meet, but instead travel outward in an expanding cone shape. You can see illustrations of “convergence” in the beams leaving the bottoms of each condenser lens, and in the “SEM”’s highly-convergent beam at the specimen, coming from the objective lens. Divergence can be seen in the beams leaving the projection lenses of both the LM and the TEM -- note the expanding cone shape.    In a LM, shown at left, a light source emits photons that travel into a condenser lens, which gathers as many photons as possible and bends them so that they converge or diverge onto the specimen. Once at the specimen, they either pass through or bounce off of the specimen. After the specimen, the rays diverge into the objective lens, which forms the image of the specimen. This image is then passed into a projection lens, which magnifies it to a suitable size for examination.    In a TEM, shown at center, electrons leaving the source enter the condenser lens, whose purpose is the same in LM, TEM, and SEM. This beam of electrons will converge or diverge from the condenser, and this is determined by the electronic state of the lens, which is how we can control how they “impinge” on, or hit, our sample. The sample thickness must be minimal for TEM -- between a few to 100 nanometers, which is much thinner than those used in LM. The electrons interact with the thin sample (also called a thin foil)  and/or pass through it (or are “transmitted”, hence the T in TEM), down into an objective system, then through diffraction and projection lenses which magnify the image. Again, despite the photon/electron difference, the lenses in an LM have the same purpose as lenses of the same name in a TEM.   Now, looking at the diagram on the far right: we can see a large difference in SEM: their sample is much lower in the system, and they apparently don’t rely on transmission to produce images, but instead use scanning to construct a picture of a surface pixel-by-pixel, or point-by-point. Other than this difference, you can see that their optics are initially still fairly similar. The major difference is the fact that SEM scans a beam across the surface of the specimen with scanning coils. The signals generated by the specimen in response to the scanning beam can be gathered and viewed as images using electron detectors.    ',
    '	So let’s summarize and compare the differences between a light microscope (LM) and a TEM:   	LMs use photons, while TEMs use electrons.   This brings us to our next point of comparison: the wavelength of the source radiation. The photons used in the average visible LM are, by definition, restricted to wavelengths between 400 to 800 nanometers, the range of the visible spectrum.   The electrons used in TEM, however, have an ideal wavelength far below one nanometer, being 0.00254 nanometers for electrons subjected to 200 kilovolts of acceleration.   These electrons, however, must travel within a vacuum. In a LM, air or immersion oil are frequently used as optical media – in TEM, this would be impossible. This is why electrons are only useful to us when they’re kept within a vacuum chamber, so for TEM we consider our “medium” to be vacuum. Vacuum systems are one of the factors contributing to the high cost of purchasing, installing, and maintaining a TEM.   And, as we already mentioned, LM uses glass lenses whereas TEM uses electromagnetic or electrostatic lensing. This is another source of expense -- glass is much cheaper!   Numerical aperture angles are also starkly different, with those in LM generally being less than sixty degrees but those in TEM are usually less than one degree. The numerical aperture, NA, is a dimensionless number that we use to describe the range of angles at which it is possible for an optical system to either emit or accept radiation.   Contrast is achieved in LM through the absorption, reflection, scattering, diffraction, or fluorescence of visible light. In TEM, though, it is achieved through the interactions of electrons – namely mass-thickness, diffraction, Z contrast, and phase.   The resolving power is what we call the microscope’s ability to produce images that contain distinguishable objects rather than blurry messes. For a LM, anything smaller than about 200 nm can’t be distinguished as its own object in an image. In modern TEMs, however, we can resolve sub-Angstrom features!   .     ',
    '	The differences between TEM and SEM are a little less stark than those between light and electron microscopes, but still, they do exist and make it easy to see why each technique is invaluable to the nanotechnologist in its own right.   SEMs work through detection of information about the specimen surface, while TEMs detect information through the specimen. This of course has practical considerations in that an SEM specimen could be a piece of minimally prepared bulk material, a FIB-milled cross-section of a semiconductor device, or even an entire silicon wafer. TEM specimens, however, usually require extensive preparation before they are both small and thin enough to be examined.   SEMs also have a spatial resolution that is a quite a bit poorer than TEM – with about 0.4 nm being the lower limit of SEM, and 0.069 nm being the lower limit of TEM.  Likewise, the spatial resolution of composition analyses in SEM is limited to a micron to a few hundred nanometers at best, while TEMs are able to give atomic resolution analyses.   The signals they rely on for data acquisition are also different – SEMs rely mainly on secondary and backscattered electrons, while TEMs use transmitted and diffracted electrons. Both systems, however, use X-ray detection for quantification.   And, as was mentioned earlier, the images are formed in different ways; SEMs “raster” or regularly scan the electron beam in a series of parallel lines across the surface of the sample – this makes them fairly dissimilar from both TEMs and VLMs, since these techniques are static and require the transmission of radiation through the specimen. Many modern TEMs also have the ability to raster their beam, however, since this is the basis of “STEM” or scanning-transmission electron microscopy.   And, since the images are formed differently, they give us different data: SEM images are 3D, while TEM images are 2D though 3D information may get by post imaging processing.       ',
    '	Of course, the TEM is a much more recent invention than the LM – in fact, the first demonstration of imaging with a TEM occurred less than one hundred years ago, in 1932! Of course prior to that important work was done that allowed the TEM to come into being; de Broglie’s 1924 PhD thesis postulated the wave-particle duality of the electron, and the wave properties of all matter – this, along with Clinton Davisson and Lester Germer discovery of electron diffraction a few years later in 1927, began to paint a picture of the electron as a particle that could be used in optical applications.   The first electron micrograph was demonstrated by Ruska and Knoll in 1932, and shortly thereafter in 1936 the first commercial TEM, the Metropolitan-Viskers EM1, went into production in the UK.  Two years later in 1938 Von Ardenne built the first scanning electron microscope, and in 1939 regular production of commercial TEM systems was underway in Germany, with Siemens and Halske.   Then, in 1941, the first electron energy loss spectrum (or EELS) was reported by Ruthermann.   TEMs became widely available from several major companies such as Hitachi, JEOL, FEI/Philips, RCA, Carl Zeiss, and many others after then end of World War Two.    ',
    '	This is the first TEM, built by German scientist Knoll and Ruska in 1932, with both men pictured. At that stage, the resolution of this microscope was actually worse than that of the light microscopes of the time. In 1986, 54 years after this initial demonstration, Ruska (along with two others, Binnig and Rohrer) received the Nobel prize for the development of the TEM.     ',
    '	In the past 60 years, however, significant improvements have been made for the development of the TEM and its techniques –   In 1951 X-ray microanalytical tools began to appear, and in 1965 the first scanning transmission electron microscope was described after being built at Argonne National Laboratory.  In 1983 Bonstanjoglo and Horinek proposed the first “ultra-fast” TEM for dynamic process research.   In 1984 Dubochet developed cryo-electron microscopy, which enables unprecedented views of important biomolecules. He won the Nobel prize in Chemistry of 2017  The first commercial image energy filter, the GIF 200, an important analytical tool, emerged around 1994.   1998 saw Haider et al. Install a spherical aberration (or Cs) corrector that allowed for 1.3 angstrom resolution in TEM, and this was repeated by Krivanek in 1999 who installed a Cs corrector on a STEM.   Then, in 2003 the first commercial, spherical aberration corrected TEMs went into production.   In 2008, the TEAM project led to the improvement in Cs correction, giving a 0.5 angstrom resolution.   2009 saw Cs and chromatic (or Cc) correctors being developed by the TEAM project, and in 2010 low voltage Cs correction for TEM was developed by the SALVE project.       ',
    '	Many groundbreaking discoveries made within the last several decades can be attributed to the assistance of a TEM --   For example, in 1958, P.B. Hirsch et al. discovered dislocation lines and loops in crystalline solids using diffraction contrast in CTEM that was pioneered in the late 1950s at Cambridge (UK) by Hirsch, Howie, and Whelan. This was one of the most significant and unexpected findings made using a TEM, since it was the starting point of the emerging impact TEM would have on microscopic studies and observations in metallurgy in the coming decades  all around the world.  The second example is the discovery of the quasicrystal in 1984 by Schechtman et al, which was  made using electron diffraction. The appearance of the diffraction pattern implied that the metal alloy under examination possessed a previously un-thinkable atomic organization. This led to the description of a beautiful new kind of crystallinity, called “quasicrystallinity” that was previously unthinkable.   The third example is the brilliant identification of carbon nanotubes by Iijima in 1991 based on a combination of HREM images with atomic resolution and microdiffraction. The unique properties of this novel material led to a surge of interest in nanotechnology.   The last example, from 1992,  is the live visualization of vortex lines in superconductors at liquid helium temperature and under dynamic magnetic field that was first reported by Tonomura and colleagues.   Clearly, then, the TEM not only has nanocharacterization capabilities, but also has a well-established and significant track record of discovery in the field!   ',
    '	As we’ve seen, many types of TEMs have been developed or improved since the 1930’s, leading to the existence of the modern TEM as a complex, computer-controlled machine.  These modern TEMs, however, are still fairly diverse, and can be classified in different ways – we can classify them by their maximum voltage, in which case those operating at or below 60,000 eV (or 60 keV) are called “low voltage”, with 80 to 300 keV instruments being classed as “intermediate voltage”, TEMs operating at or beyond one MeV being “high voltage”.   We can also classify them by function:   Generally speaking, straight-forward TEMs without scanning nor analytical capabilities are called “conventional TEMs” or “CTEM”s. They only have TEM imaging and diffraction modes.  Those that are capable of achieving very high resolutions are called “high resolution TEM”s or “HRTEM”s.   However, most modern microscopes, like PSU’s Tecnai, are both scanning AND transmission electron microscopes. These are sometimes called “S/TEMs”, but are usually just called “TEMs” because the dual functionality is so commonplace in modern instruments.     There are some platforms that only perform STEM alone -- these are called dedicated STEMs (aka DSTEMs), or just STEMs. These dedicated STEMs are designed to perform STEM and, usually, elemental analysis efficiently.  By adding X-ray dispersive  or electron energy loss spectrometers for chemical composition analyses, a TEM gains analytical capabilities, and therefore, it can be called an analytical transmission electron microscope, or ATEM. Technically, PSU’s TEM is an ATEM, since it has both EDX and EELS capabilities.   Perhaps the most modern and most fascinating, though, is the dynamic transmission electron microscope, which can probe both very small size regimes and very small time scales– using a pulsed electron beam, the so-called DTEM  has sensitive cameras that can produce sequences of images documenting the physics of “very-fast” nanoscale phenomena, that occur within nanoseconds.   Environmental TEM, or ETEM can be performed either using in-situ holders from commercial vendors or modify the stage of the TEM to produce an environmental TEM. Further reading is in chapter 2 of CB Carter and DB Williams edited Transmission Electron Microscopy Diffraction, Imaging, and Spectroscopy.  Cryo-electron microscopy specifically refers to experiments within an electron microscope taking place at liquid nitrogen or liquid helium temperatures. Any TEM may be able to perform cryo-electron microscopy as long as it has liquid nitrogen cooling, a compatibility designed cryo-holder, and cooling cryo-blades installed into the column. This is beyond the scope of this course. Further reading can be found in https://pdfs.semanticscholar.org/7bd0/8c9a161a9a7c60709122b10823d0653e5e32.pdf and Joachim Frank, Three-Dimensional Electron Microscopy of Macromolecular Assemblies: Visualization of Biological Molecules in Their Native State,         ',
    '	This  is the schematic of the so-called “pole-piece” region within an ETEM. This is where the sample sits, directly between the two halves of the objective lens. This design makes use of “differential pumping”, which allows areas of different pressures to exist within the microscope. This allows us to expose the sample to controlled amounts of a selected gas and study the interaction between the two while pumps maintain the necessary high vacuum in the gun and camera chambers.   ',
    '	Current 200 and 300 kV TEMs can combine aspects of all the different types of TEMs and STEMs we just discussed.    Three major manufacturers of TEM dominate the commercial market at the moment: FEI (now Thermo Fisher Scientific), Hitachi, and JEOL.  Pictured are current-production TEM platforms.All of these microscopes can be upgraded with different detectors, correctors, and energy filters that will allow them to achieve sub-nanometer resolutions.    ',
    '	The Hitachi HD-2700 is an 80-200 kV field-emission-gun scanning transmission electron microscope (FEG STEM) with secondary electron (SE) imaging capabilities similar to SEM.   Nion’s UltraSTEM 200 is designed for chemical analysis and imaging at the atomic scale. The microscope was designed to be optimized for high spatial and spectral resolution mapping.      ',
    '	Dynamic TEMs use laser-pulses to produce “bunches” of electrons that, combined with special sensors, enable users to investigate unstable or transient chemical and physical processes.  This is also called “4D” TEM, because data is resolved spatially and temporally.  Electron microscopy and diffraction with high temporal resolution has opened the door to the possibility of directly observing processes that occur in non-steady states of the substances being examined. A temporal resolution on the order of 100 fs corresponds to the transition of a quantum system through an energy barrier of a potential surface, describing a chemical reaction in the processes of breaking and forming new bonds of the interacting agents. The advances thus also open the possibility of investigating the coherent nuclear dynamics of molecular systems and condensed matter.       ',
    '	In the past decade, TEM/STEM performance has been pushed to sub-angstrom resolutions by the invention of the spherical and chromatic aberration correctors. In this excellent image from Haider et al.’s Design and Test of an Electric and Magnetic Dodecapole Lens, we see a  cross section of a real spherical and chromatic aberration corrector from Darmstadt that has been sawn completely in half. At the top, we can see the gold-colored “liner tube” extending down the corrector’s centerline. This is kept under high vacuum, and is where the beam travels. We can also see the copper coils of the objective lens near the very top as well – these are highly conductive and are used to wick heat away from the lenses.   Below the larger coils we see the split polepiece with its upper and lower portions, and below the bottom polepiece we can see the five multipole elements of the corrector. The central element is a long dodecapole with two coils on each pole. Below the corrector are deflectors for alignment of the beam before it enters the projectors.      ',
    '	Here we see the central part of a smaller spherical aberration corrector, used by Krivanek et al. to correct the spherical aberration of a VG STEM in 1997 (courtesy of O.L. Krivanek).   These two images are not intended to explain correctors in detail -- our aim is only to provide an introduction to these technologies within this lecture. If you’re interested, consult the given references for more information, since the specifics of aberration correction are far too detailed to be explained within the time constraints of this course.    ',
    '	Although there are many different kinds of TEMs, the typical commercial A-S/TEM we can expect to encounter will have five things:  •	an illumination system composed of a electron source and gun with high voltage power supply and 2-3 condenser lenses and apertures,   	The electron source is what is used to emit electrons via thermionic, Schottky, or cold-field emission. The condenser systems permit the variation of the illumination aperture, and the area of the specimen that is illuminated.   2) an image/diffraction system composed of an objective lens, diffraction lens, intermediate lens, and projector lens(es). 	 	These components allow the electron density distribution coming out of the specimen to be converted into an image or diffraction pattern.   3) an image or diffraction pattern recording system such as a CCD or direct electron camera, HAADF detector, phosphor screen, etc.   	which allow the data in the TEM to be converted into physical or digital records for later study.   4), a vacuum system made up of connected pumps, gauges, tubes, and valves,  	which all work together to keep the liner-tube and other areas of the column under high vacuum.   and 5) accessories like the EDX detector, Gatan GIF system, etc.   You can review the details of CEMN’s Tecnai in the “TEM Hardware Overview” video.    ',
    '	There are no speaker notes on this slide. ',
    '	Generally speaking, two spectrometers are very popular in modern TEM.   One is the x-ray energy dispersive spectrometer (EDS/EDX). This detector is usually installed on the side of the column so that X-ray signals can be collected from above the specimen. The detector can be made from lithium doped silicon (SiLi), germanium, or a silicon device senor. SiLi detectors are getting less and less usage because of their low count-rate and somewhat demanding cooling requirements.   Silicon device sensors, also called silicon drift detectors (SDDs), are becoming much more popular. The SDD detector is fabricated from high-purity silicon with a large area contact on the entrance side to detect incoming X-rays. X-rays are converted to photoelectrons within the detector, and these photoelectrons “drift” to the small anode contact, which is surrounded by a number of concentric drift electrodes on the back side of the detector,  where the photoelectrons are converted to an electrical signal. This signal is collected by a computer where it can be viewed or processed. The detected signal is proportional to the amount of X-rays that were generated by constituent elements that make up the specimen.   The working principles will be discussed in a later chapter on detector technology.    ',
    '	The other popular spectrometer is the electron energy loss spectrometer (EELS) in TEM/STEM. Some electrons lose energy due to interactions with the specimen. These are called “energy loss electrons”. In EELS, a bending magnet acts as a prism that directs electrons of different energies to different positions on the spectrometer; a slit selects electrons of desired energy loss. EELS is usually performed either by dedicated spectrometer, such EFINA, or Gatan imaging filter (GIF) camera. The GIF camera system has both spectrometer and imaging functions.  In the GIF system, the unfiltered image of the sample is formed by the TEM. The prism transforms the image into a spectrum, which is energy-filtered with an energy selecting slit. The selected part of the spectrum is transformed back into an energy-filtered image, which is then measured by a suitable detector.   ',
    '	When electrons interact with the specimen, many different signals are generated, including:   Secondary electrons Backscattered electrons Auger electrons  X-ray photons Transmitted electrons,  Inelastically diffracted beams, and  Elastically diffracted beam.   Secondary, backscattered, and Auger electrons, and X-ray photons are all signals of interest in SEM.    In a S/TEM system, we detect the elastically scattered beam in order to form diffraction patterns, and use the inelastically scattered electrons to perform EELS or other energy-filtered analyses. X-ray photons are used for elemental composition analyses in all TEM systems equipped with X-ray detectors.   To do any of this, though, the specimen must be thinned until it is electron transparent. Electron transparency is usually achieved with thicknesses between 5 – 100 nm for 100keV electrons, depending on the density and elemental composition of the object, and the resolution that is required. Since we have to get the tiny specimen so thin, special preparation techniques must be employed. Electropolishing and ion beam milling of materials specimens, ultramicrotomy of stained and embedded tissues, and cryofixation in the biosciences are examples of the preparation methods that are used to achieve this.   However, once we have prepared the sample, what can be done with it?   Well, in a TEM, we can gather images of the material with resolutions of our choosing between micro-scale and atomic resolution,   Or, when working with a crystalline specimen, we can perform electron diffraction experiments, which give us detailed, high-spatial-resolution crystallographic information like:  	crystal orientation 	lattice parameters, 	specimen thickness,  	and more.   We can also perform chemical analysis with high spatial and energy resolution. In this context, “high energy resolution” means being able to discriminate between electrons at sub-eV energy ranges, and “high spatial resolution” meaning we can resolve atomic features.    ',
    '	As a summary: in a TEM, there are many signals generated by the interactions of the beam and the specimen. Provided we have the right detectors, all of these signals can be detected. We need different types of detectors because tese signals differ based on how they were generated, with most signals being generated either by elastic or inelastic scattering processes. The scattering process will determine the appearance of contrast (or relation of bright and dark) in TEM images. This means that the scattering process shapes what we “see” with the TEM, and that by selecting different types of signals, or different types of electrons, we can change the kind of data we extract.   Elastically scattered electrons are used to form diffraction patterns, which can be seen in “diffraction mode”.   Inelastically scattered electrons can be used to determine the elemental makeup of a sample in a spectroscopy mode like EDX or EELS.  Transmitted and/or scattered electrons can be used to gather structural data, as well as to form images. This is done in imaging mode.   To select between all of these different signals, though, we must temporarily re-configure the optics and detectors of the TEM. We’ll refer to this as changing the “mode” of the TEM.        ',
    '	In CTEM, there are two major modes of operation: imaging, and diffraction.   If we examine the ray diagrams of image mode, at left, and diffraction mode at right, we can start to form an idea of what’s going on.  These two modes can be switched back and forth by changing the strength of the intermediate lens. In imaging mode, we see that stronger intermediate lens settings lead to the formation of the second image after intermediate lens, but before the projector lens. This second image is further magnified by the projector lens onto the fluorescence screen or camera, where we perceive it as an image of the sample -- this is why we call it “image” mode.  A weaker intermediate lens positions the diffraction pattern between the intermediate and projector lenses. This diffraction pattern is further magnified with the projector lens, causing it to appear on the fluorescence screen or camera in “diffraction” mode. More details will be discussed in chapter three.     ',
    '	As we have said, in modern TEM, STEM is usually integrated into the same system. But what does this mean? Well, in STEM mode:   ➢	The beam deflection coils are controlled by the STEM unit and become scanning coils ➢	A small probe is formed above the specimen ➢	scanning coils make the probe raster across the specimen ➢	The transmitted and diffracted electrons can be detected by the bright- or annular dark- field detector below the specimen. ➢	X-ray signal can be detected by an EDS detector above the specimen. ➢	EELS signal is detected “post-column”, in a curving energy filter apparatus underneath the TEM ➢	Such a configuration allows us to acquire image and spectrum information simultaneously.  This configuration also makes elemental line scanning and mapping, strain mapping possible.      ',
    '	However, if we were to compare the performance of a S/TEM like the Tecnai with that of a a dedicated STEM instrument, we would see that they permit much higher resolution microanalysis than the S/TEM and are also easier to use. The dedicated STEM works on the same principle as the normal scanning electron microscope (SEM): by forming a focused beam of electrons that is scanned over the sample, some desired signal is collected to form an image. The only differences are that the DSTEM will generally be much more powerful than the SEM, and will also have a much thinner specimen.   This figure gives an illustration of the multi-signal strategy in a modern STEM instrument with its electron source on the bottom of the microscope. Two channels of parallel information are displayed: ADF, EELS and EDX elemental mapping of the atomic structure and composition in SrTiO3 (left); ADF, EELS plasmon map and cathodoluminescence (CL = photon emission spectroscopy) on a single Ag nanoplatelet (right)      ',
    '	  So, you’re now aware of the three core modes of a S/TEM. These modes allow access to usually complementary sets of information about the specimen that we need to complete micro- and nano-analyses. Within the three modes, various techniques are available.   Starting with TEM imaging mode, the key techniques are:   bright field (BF), dark field (DF), conical dark field, centered bright field (CBF), centered dark field (CDF), weak beam dark field (WBDF), lorentz microscopy, electron holography, high resolution electron microscopy (HREM), etc.  In all BF techniques, an aperture is placed in the back focal plane of the objective lens which allows only the direct beam to pass. In this case, the image results from a weakening of the direct beam by its interaction with the sample. Therefore, mass-thickness and diffraction contrast contribute to image formation: thick areas, areas in which heavy atoms are enriched, and crystalline areas appear with dark contrast. It should be mentioned that the interpretation of images is often impeded by the simultaneous occurrence of the contrast-forming phenomena.  In all DF techniques, the direct beam is blocked by the aperture while one or more diffracted beams are allowed to pass the objective aperture. Since diffracted beams have strongly interacted with the specimen, very useful information is present in DF images, e.g., about planar defects, stacking faults or particle size.  In HREM, a large objective aperture has to be selected that allows many beams including the direct beam to pass. The image is formed by the interference of the diffracted beams with the direct beam (phase contrast). If the point resolution of the microscope is sufficiently high and a suitable crystalline sample oriented along a zone axis, then high-resolution TEM (HRTEM) images are obtained. In many cases, the atomic structure of a specimen can directly be investigated by HRTEM.   there are also three major imaging techniques available in STEM-imaging mode, depending on the configuration of the microscope:   Bright field (BF), dark field (DF), and Z contrast in HAADF  the bright field (BF) detector detects the intensity in the direct beam from a point on the specimen in BF mode.  The annular dark field (ADF) detector is a disk with a hole in its center where the BF detector is installed. The ADF detector uses scattered electrons for image formation, similar to the DF mode in TEM. The measured contrast mainly results from electrons diffracted in crystalline areas but is superimposed by incoherent Rutherford scattering.  The high-angle annular dark field detector is also a disk with a hole, but the disk diameter and the hole are much larger than in the ADF detector. Thus, it detects electrons that are scattered to higher angles, and it is mostly incoherent Rutherford scattering that contributes to the image. Z contrast imaging uses n high angle annular dark field detector to detect the electrons that had large scattering angles. Their intensity is proportional to the square of atomic number of the atom that scattered them.   I diffraction mode,  the intermediate lens is weakened so its object plane matches with the back focal plane of the objective lens. This allows the diffraction pattern to be  formed above the projector lenses. Five major diffraction techniques are available in a TEM:  selected area electron diffraction (SAED), convergent beam electron diffraction (CBED), nano-beam electron diffraction (NBED), large angle CBED (LACBED),  and Kikuchi diffraction.   In SAED, a parallel incident electron beam impinges on a large area of the specimen. The SAED pattern is formed by using the SAED aperture to select small area of the first image below the objective lens. This “selected area” is then allowed to form the diffraction pattern. These may be spot patterns in single crystal specimens, non-continuous ring patterns in polycrystalline specimens, and continuous ring patterns in amorphous specimens.  Convergent beam electron diffraction (CBED) is a diffraction technique in which the electron beam is converged in to a small probe on the specimen, rather than using parallel illumination as for SAED. CBED is a good method for navigating reciprocal space while tilting the specimen and aligning on zone axes, by way of the strong Kikuchi lines present in the off-axis CBED pattern. The on-axis CBED pattern consists of diffraction disks analogous to the spots in a SAED pattern (with the size of those discs determined by the convergence angle of the beam). However, compared to SAED, CBED patterns can be obtained from much smaller volumes of material (as determined by the size of the electron probe), thus enabling very localized crystallographic analysis. Further, unlike SAED, CBED gives information about: specimen thickness; unit cell and precise lattice parameters; crystal system and true 3D crystal symmetry (inversion centres, point group and space group); and enantiomorphism.   Nanodiffraction technique use an almost parallel beam of nanometric size. Therefore, NEBD can be used to generate diffraction patterns from single nanoparticles.  Large angle CBED is a variant of the CBED technique, in which the beam is converged below the specimen plane and so illuminates a larger area of the specimen. It provides an alternative to conventional TEM contrast methods for analysing defects such as twins and dislocations, and can be used for strain measurements and thickness determination.  Kikuchi diffraction occurs when a specimen is thicker, where diffracted beams can act as incident beams interacting with the specimen. Therefore it involves”plural” electron scattering. This pattern usually appears as one or more bands which cross each other. Kikuchi patterns serve as “roads” microscopists use to orient the specimen using known crystallography while it is inside the microscope.  There are usually two spectrometers are available for TEM/STEM spectroscopy modes: EDS and EELS.  EDS relies on X-rays generated by interactions between high energy incident electrons and the specimen. The peak intensity of the detected X-rays is proportional to the elemental composition of the sample.   EELS is performed by isolating and analysing the electron energy loss signal. EDS is faster and easier to interpret, but suffers from low energy resolution and poor sensitivity to light elements. EELS is more complicated, but has higher energy resolution, and is more sensitive to light elements such as oxygen, nitrogen etc. In combination with STEM, qualitative and quantitative line scanning profiles and elemental maps can be created with either method.  In addition, in EELS, energy filtered TEM (EFTEM) uses a slit to choose the specific range of electron energies that should be used to form an image. This technique makes elemental mapping possible in TEM mode without requiring STEM functions.   Between diffraction and spectroscopy we can combine the techniques of  CBED and Energy filtered TEM to perform CBED analyses of much thicker specimens. Usually a thicker specimen will be required for strain analysis in order to minimize the undesired artefacts caused by sample preparation. Within pure spectroscopy, however, the key techniques are EDX and energy-loss analyses like EELS. Then, coming full-circle to the overlap between spectroscopy and imaging we see elemental mapping, which utilizes both STEM imaging and EDX or EELS analyses.     ',
    '	In TEM/STEM, the contrast mechanisms vary in different imaging techniques and specimens. These contrast mechanisms include:   ➢	Mass-thickness contrast: where scattering creates contrast due to difference of atomic number (Z) and/or thickness t; scattering is proportional to Z squared t.  Higher-Z or thicker areas are darker in BF.  This contrast mechanism is applicable to crystalline or amorphous materials.  ➢	Diffraction contrast: in which scattering creates contrast due to differences in diffracted intensity. This is what produces contrast of dislocations, grain boundaries, stacking faults, second phase particles, etc.  Strongly diffracting objects are darker in BF.  This method is applicable only to crystalline materials.  ➢	Phase contrast: interference between transmitted and diffracted beams produces lattice fringes or “atomic structure images” (typically referred to as HRTEM or high-resolution TEM)), holography etc   ',
    '	Mass thickness contrast is the dominant contrast mechanism for amorphous, polymer, and biological specimens in TEM and STEM imaging. The image at left is an example of the appearance of a bright-field image of a biological cell being infected by bacteria. To the right, though, is an example of STEM ADF image of biological cells support on carbon film. The carbon film is darker than the cells due to its lesser mass.    ',
    '	Centered bright/dark field imaging is accomplished by inserting an objective aperture into the back-focal plane of the objective lens. The aperture allows us to select the transmitted (during BF) or diffracted beam (during DF) to form an image. The image at top right is a bright field view, in which strong diffraction appears dark. The image on low right is a centered dark field image of the same area. Both were taken from 3D printed Ti-6V-4Al alloy, and dislocations can be observed in both images. Dark field is better suited for defect analyses like this.   These contrast mechanisms, like those presented before this, will be discussed in-depth in later material.    ',
    '	High-Resolution Transmission Electron Microscopy, or HRTEM or HREM, is a technique capable of resolving information about individual planes of atoms in the crystalline lattice. The lines in HREM images, like these of iron (III) oxide nanoparticles and indium phosphide nanowires are (ideally) closely related to the planes of atoms in the crystalline lattice. That said, these images are not intuitively interpretable, even though they seem to be. For instance, how are we to know if the atoms are the brighter areas or the darker areas? This is just one of many issues complicating the interpretation of data from HRTEM, and is a reminder as to why HRTEM images alone should not be considered informative unless the conditions surrounding their acquisition are well-known and the conclusions informed by them have been confirmed via computer simulation.   This technique can accomplished with or without a relatively large objective aperture to select both the transmitted beam and one or more diffracted beams (so-called “multi-beam condition”) exiting the specimen. This allows for phase contrast imaging of lattice fringes, which is why these images are said to only be “related” to the position of atoms in the lattice; the dots we see are not directly related to atoms in the specimen -- . Simulation is required to confirm the locations of the atom column.    ',
    '	Here is a very good example of the visual differences between phase and Z contrast in the same object – looking at the BF and HREM images of this iron oxide nanotube vs the STEM Z contrast image, we can see the discrepancy between the apparent position of the atoms. In Z contrast image, the bright dots show the position of the atom column, but they appear to darker in the HREM image.    ',
    '	The next important mode to discuss is diffraction mode. In diffraction mode, as we’ll recall, the intermediate lens is weakened so that diffraction pattern on the back-focal plane of the objective lens is magnified by the intermediate and projector lenses.   ',
    '	You may already know about the non-TEM X-ray diffraction techniques that exist. These are very popular ways to perform diffraction analysis (including phase, crystal structure, strain, etc. analyses). X-ray diffraction is also faster and much cheaper than TEM. This of course makes us wonder why we need to study, or even use, TEM electron diffraction in the first place.   Although electron and X-ray diffraction share similar diffraction mechanisms, but they are different. XRD, of course, uses X-rays as the radiation source, whereas electron diffraction uses electrons.   The sample prep. process for XRD is usually very simple compared to that of TEM, since the former can be bulk material or powder, while the latter requires precise thin foils of material.  The speed of XRD is also usually greater than that of TEM electron diffraction (ED).   The spatial resolution, however, is much greater in TEM – XRD gives spatial resolutions between millimeters and microns, which are huge given thatTEM ED spatial resolutions are between microns and nanometers. Therefore, electron diffraction in TEM is highly desirable for nanomaterials and devices over XRD, since the latter will not be able to give precise measurements at the nano-scale.  The accuracy, or ability to correctly determine lattice parameters, of XRD is generally high. In TEM the accuracy is variable depending on the technique we use – low-angle convergent beam electron diffraction, or LACBED, tends to be the most accurate.    So, we now know that despite some of XRD’s superficial advantages, TEM electron diffraction is still critical for the analysis of nanomaterials.   Is the material highly ordered (crystalline)? Does it lack long-range order (is it amorphous)? If a crystal: what do we know about its crystallography? Is it a single crystal? Is it made of many component crystals (grains)?  If so, how can we describe the grains? (morphology, grain size distribution?) How are the grains oriented with respect to one another     ',
    '	Optical diagrams of the four diffraction diffraction techniques is presented here. SAED uses parallel illumination to form spot diffraction patterns. The area of the diffraction can be selected by an SAED aperture. Using nano-sized, nearly parallel incident illumination, nano-diffraction appears as small discs. CBED uses convergent and focused beam on the specimen. Non-overlapped discs can be formed by selecting a proper C2 aperture and spot size, which will be different for different specimens and different orientations.   Non-overlapping disks, also called a Kossel-Mollenstedt pattern, can be obtained by selecting a C2 aperture with alpha less than the Bragg diffraction angle, theta. Thus, alpha should be adjusted for the particular specimen and orientation.   In turn, a 10 um, 50 um, 70 um, or 100 um C2 aperture can be used to acquire non-overlapping disks.  Overlapped disks can be formed with large convergence semi-angle, alpha. This pattern is also called a Kossel pattern. The diffraction technique is called large angle CBED (LACBED). Both CBED and LACBED techniques can be used on (relatively) thicker specimina. Therefore, Kikuchi diffraction lines are always visible in both patterns at medium and small camera lengths. In this condition, Kikuchi lines are much more prevalent than  they are in the SAED conditions. Kossel patterns and Kikuchi lines appear at the same time if using a relatively small camera length -- this can be useful for determining specimen orientation during tilt.       ',
    '	Nanobeam electron diffraction can be carried out in STEM mode, using the smallest C2 aperture.   ',
    '	Analyses of chemical composition within the TEM are completed using an EDS system. EDS makes use of the X-ray spectrum emitted by a solid sample after it has been bombarded with a focused beam of electrons. These X-tays can then be used obtain a localized chemical analysis. This technique is possible within SEM and TEM, but the two illustrations towards the bottom of the slide illustrate the advantage of using a TEM for EDS analyses of nanomaterials.  First, let’s establish the principle behind EDS – a fine probe is directed on to the surface of a specimen, and its effects are evident within a certain volume of the sample – the “interaction volume”. This interaction volume depends on the accelerating voltage, critical excitation energy of the specimen elements, specimen density. Focused incident electron beam first penetrate into the specimen and their speed is reduced. A neck region is formed. After the neck region, the electron speed get significant reduced. Multiple scattering occurs and eventually electron speed become zero. the multiple scattering occurs inside the specimen form a large volume if the specimen is thicker enough.  If we examine the interaction volumes, we see that signal generation in SEM EDS occurs within a sphere of diameter of approximately one micrometer.  TEM EDS, on the other hand, has an interaction volume that is between half a micron and one nanometer. This difference is mainly due to two things: one having to do with the sample, and one having to do with the probe. The bulk specimen in SEM has large interaction volume because of multiple scattering. TEM specimen is thin enough for electrons only to be scattered in the “neck” region of the illustrated volume.  As far as sample preparation is concerned, the stringency of TEM forces us to thin our sample so much that there is physically not enough specimen to allow for interaction volumes similar to that of SEM, so the spatial resolution of TEM EDS is inherently greater than that of SEM EDS.   Spatial resolution is ultimately, though, on the order of probe size (which can be as low as 2-3 Å) in TEM. To get a reasonable signal noise ratio, 0.5 - 1 nm probe size is recommended. So, thanks to the option of ultra-fine probe formation within TEM/STEM, and the rigorous sample thinning requirements, we see this advantage.     ',
    '	In combination with STEM, EDS line scanning and elemental mapping are possible. Here we can see an example of this kind of analysis by STEM/EDS. Pictured is the aluminum bonding pad of a semiconductor device.  With elemental mapping, apparent oxygen and fluorine species can be found on the top of the aluminum bonding pad. It was identified to be caused by the residue of carbon tetrafluoride etchants used during semiconductor device fabrication.   ',
    '	Another form of spectrometry available in many ATEMs is “EELS” – electron energy loss spectrometry. This makes use of a post-column “energy filter” that is, at its core, an entrance aperture that allows select electrons to pass near a very precise magnetic “prism”  that bends their path of travel towards the final detector based on their energy – lower-energy electrons are easier to deflect than those of higher energy, and this is what allows us to “sort” electrons based on energy and display the data as a spectrum.      ',
    '	Here is a more detailed illustration of the action of the magnetic prism on electrons – note the analogy to a glass prism bending polychromatic light into its component spectrum.   The electrons, whose energies are different from one another, coming out of the projector lens crossover pass through an entrance aperture into the tube housing the magnetic prism. The field from the prism bends the flight paths of the electrons based on their energies, with the “zero loss” electrons, or those that have lost no energy, represented by E0, being bent less than the “energy loss” electrons that have experienced some change in energy, delta E, leading to their representation as E0 minus delta E. This separation and measurement is how the EELS is formed.    R.F. Egerton, Electron Energy-Loss Spectroscopy in the Electron Microscope, DOI 10.1007/978-1-4419-9583-4    ',
    '	Electron energy loss spectroscopy is the other important technique for chemical analysis in TEM/STEM. It is based on the fact that transmitted electrons lose energy due to plasmon excitation, or excitation of atoms by ejecting inner-shell electrons. A specific energy loss is correlated with characteristic energy state of outer shell of the specimen atoms. Instead of detecting X-ray, this technique detects electrons directly.  This spectrum ranges from 0 to 1000 eV of energy loss, but newer detectors allow for light elements to be analyzed with up to 2000 eV of energy loss.    There are 3 key regions of an EELS spectrum:   The Zero loss region— where we see the elastically scattered electrons  The Low-loss region – where we see evidence of interactions with weakly bound outer shell electrons (includes plasmon-resonance of valence electrons)  And the High loss region –  where interactions with inner shell electrons causing excitation into an unoccupied shell above the Fermi level result in characteristic elemental energy loss ”edge”.   EELS is a really powerful technique in TEM. It can be used for elemental qualification, quantification, valence state determination, bandgap determination, inter-atomic coordination, energy filtered imaging etc.  We can correlate these spectra with certain imaging modes to take advantage of energy-filtered contrast enhancement and elemental composition mapping.   Attributed to the high energy resolution, the fine edge structure of the elements can be used to determine the valence state of certain elements.   ',
    '	Here is an example, we can determine the valence state of titanium in its different compounds via the differences between the EELS of different structures – at left between trivalent titanium oxides and tetravalent oxides, and at right between TiO2 and the boundary of a dislocation.    ',
    '	There are no speaker notes on this slide. ',
    '	So far, we have learned that TEM is a powerful tool that includes various diverse techniques. What can these techniques be used for?  In TEM, we can study crystal structure, crystal defects, second-phase particles, and nanomaterials like nanoparticles, nanowires, nanorods, and more.   Within the study of crystal structure, we have the ability to determine the degree of crystallinity – single, poly, or amorphous -- as well as the exact orientation of the crystal/crystallites.  We can identify the structure through diffraction, and we can evaluate the quality of the crystal through lattice imaging.   When examining defects, we can detect the presence or absence of dislocations and stacking faults, as well as grain boundaries and twins, and even dislocation Burgers vectors that reveal the nature of stacking faults.   Second-phase particle size, shape, and distribution can be determined, as well as crystallographic orientation relative to the surrounding matrix. We can also gather chemical composition data via analytical attachments like EDXS and EELS.   Nanomaterials can be characterized based on morphology, size distribution, crystal structure and orientation, as well as crystal perfection.      ',
    '	Here is an example using SAED pattern to identify the phase of the polygrains on a semiconductor device. The BF image of the plan view thin film is shown on the top right. four different zone axes SAED patterns were taken from the grains. The SAED patterns determined it is a cubic pyrochlore phase with a lattice constant of 1.035 nm.   ',
    '	Here are examples showing centered bright field images. As you can see, these are used for crystal defects analysis, such as finding and documenting dislocations, stacking faults etc.    ',
    '	Here is an example using STEM ADF technique to observe the nanograins in the tungsten layer of a Pentium 4 CPU. This technique allows us to perform grain size analyses as small as a few nm.    ',
    '	And here, as we mentioned before, is an example of so—called “three-window mapping” in which energy-filtered elemental mapping of a thin film layer is correlated with images. This technique allows for high spatial resolution analysis of the thin film, and results in good signal-to-noise ratios in elemental maps. Again, if these terms are confusing, know that they will be explained in time.     ',
    '	Another application example, this time of atomic resolution imaging of a carbon nanotube by diffraction imaging. The nanotube seen at right is the one that was studied, and after multiple exposures of the diffraction data were integrated into the image at the far left, the data was used to construct a computer model seen at center.     ',
    '	Here we can see examples of HAADF investigations into grain boundary vacancies and precipitates – note the precision with which we can identify missing single atoms or groups of atoms in the images in group b.   These images show TEM characterizations of MoS2 layers. Image A is a Z Contras (HAADF) image of a pristine MoS2 layer and grain boundary area.    ',
    '	In this example of atomic mapping via HAADF-STEM and EELS, we can see the order of the atoms in the crystal matrix, and can quantify them after the creation of the “spectroscopic composition image” shown in e.  We can also see information about local bonding in the EELS at bottom right. “O1” in magenta and “O2” in blue are able to be both atomically resolved and quantitatively correlated to chemical information.    ',
    '	➢	“TEMs” are, in reality, a diverse group of instruments with different capabilities, though many share core common features.   ➢	All TEMs generate a tremendous range of signals we can use to obtain images, DPs, and several different kinds of spectra from the same small region of the specimen, as long as we have the proper detectors.  ➢	If you count up the different imaging, diffraction, and spectroscopic operations that are available in a TEM there are almost 40 different modes of forming an image, DP, or spectrum, each of which produces different information about your specimen.  ➢	No other characterization technique allows the same combination of versatility and quantification over an enormous range of sizes, from the micron to the sub-nanometer. This is why TEM, and an understanding of it, is crucial for nanotechnology.     ',
    '	So, when everything is said and done, TEM has many advantages:  Real (image) and reciprocal space (diffraction pattern) data can be obtained from the same region of the specimen  Chemical information can be gathered via EDX with high spatial resolution, and high spatial and energy resolution data gathering via EELS is possible with additional accessories.   Atomic resolution imaging via HREM and STEM Z contrast imaging  But, it also comes with its own unique downsides, like the fact that you must deal with a TINY sampling volume, and rather slow processing times for analyses.  The tools are also costly to purchase and maintain,   And require extensive, intensive training before one is capable of safe instrument operation, let alone correct data interpretation  One must also cope with the time consuming and high-skill sample preparation,  And unique but expensive issues, such as the fact that Magnetic samples require costly and specialized holders designed to avoid causing costly damage to the instrument.     ',
    '	And, remember, the TEM is a relatively new technology! If we look at a graph of resolution vs years, we can see just how massive the improvement made by even the earliest TEMs was.  The first jump around year 1930 corresponds to the advent of the EM in contrast with the usual light microscope of the day, and the second jump before year 2000 illustrates the value of EM aberration correction.   Since then, The TEAM project sponsored by the US Department of Energy has advanced imaging to 0.5Å spatial resolution in 2008.   And now, since our resolutions are so great that we’ve reached single-atom detection and imaging, the case for resolution improvement alone is not very strong.   If we are to continue the inquest into the “room at the bottom” that Richard Feynman spoke of, we’ll have to develop molecular or atomic resolution instruments and metrologies that can provide data about events happening over short time scales in real environments.   The automation of the TEM is also a developing field of interest.   With this, we’ll leave you with the words of Christian Colliex, from Seeing and measuring with electrons: Transmission electron microscopy today and tomorrow – An introduction:    “What will be the next to emerge from the most recent developments in TEM described above?   In which scientific domains will substantial progress in understanding and control of matter at the atomic scale be made?   Prediction is a difficult exercise, but it is obvious that electron microscopy has become an indispensable tool in many domains of materials science, extending its input far beyond the standard structural characterization. Within this context, the success in the realization of aberration correctors at the end of the 1990s, has obviously played a key role. But they have been substantially enriched by the systematic association of imaging and spectroscopy and/or by the development of nanolaboratory environments which allow dynamic studies under constraints. TEM has thus moved from the traditional fields of metallurgy and semiconductors to brand new domains. Two of them have been selected for specific description here, as they are and will be involved in major fields of use and application. Furthermore, the new potentialities of TEMs presented in all the above mentioned papers, will form a very rich mine because of the “easy-access” to the atomic-level parameters. The first one deals with the carbonaceous materials, and in particular with graphene, by Mangler and Meyer. The second one concerns metallic nanoparticles involved in heterogeneous catalysis reviewed here by Zhang and Su.  This spectacular broadening of the field of application of modern instruments has generated a strong surge of motivated users in many different domains of research beyond its traditional ones. In parallel, the new possibilities in spectroscopy, holography, tomography, in situ measurements, require a wide range of expertise which is rarely to be found in a single laboratory. For these reasons, several initiatives have been stimulated and pursued over the past years to connect a few specialized centers into networks with several priority missions: training, open access to specific tasks, mutual exchange for continuous improvement of hardware and software, around a limited number of selected microscopes. This final contribution therefore reports three experiments of TEM networking presently run at national levels (AMMRF in Australia – see Ringer and Apperley, METSA in France – see Épicier and Snoeck) and internationally”     '
]

let ch2SpeakerNotes = [
    '	Hi, and welcome back to our presentation on transmission electron microscopy.  In the last chapter you were introduced to the general fundamentals of TEM, and you were given an overview of the kinds of things we can accomplish with it.    From now on our lectures will cover more specific topics in greater depth, and, since we can\'t do TEM without electrons, we\'re going to start today by discussing electron sources.  Our goal for this lecture on is to familiarize you with the three most common types of sources, the physics behind their operation, and what they mean for us as electron microscopists. While we won\'t be teaching you everything there is to know about them, since that\'s impossible without years of study, we intend to provide you with basic theoretical and practical understandings, as well as expose you to more in-depth references that you can study on your own to gain expertise.        ',
    '	There are no lecture notes for this slide of references.  ',
    '	Before we get into it, let\'s take a look at a few questions that you can use either to aid your understanding of this lecture, or to gauge how relevant the material is for you. If you can answer these easily, you may want to skip ahead. If you can\'t, you will probably benefit from the information we\'re about to present.  So of course the first question that comes to mind is, “why do we need electrons”?  And, furthermore, what is meant by the, “wave-particle duality” of electrons?  How do we generate the beam of electrons?  And what is the relationship between accelerating voltage and the wavelength of our electrons?  How can we control that wavelength?  What are the criteria for a “good” electron gun?  What do we really need our source and our gun to do? And why do we need them to do those things?   You\'ll see that there are three main types of electron guns commonly found in commercial TEMs, so how do we characterize different types of electron guns?  Finally, once we know what sources exist, and what their differences are, what implications does the type of source we\'re using have on the analyses we can perform, or the samples we can examine?      ',
    '	In this chapter, we will start by reviewing the basic properties of the electron. We will then discuss why we want to use electrons as a method of illumination, how to control the wavelength of the electrons, how the generate electrons in a TEM, the ways by which we characterize the electron sources and the types of electron guns, and finally we will discuss practical aspects of the electron gun.  Our goals for this chapter are to provide you with the foundations of the knowledge you would need to use when deciding what kind of TEM to purchase or use for your work, and the knowledge of how to use it safely and effectively once it has been purchased. Every chapter will teach you ways to avoid destroying your microscope, and since this chapter is on electron sources, we\'re going to focus on avoiding destroying those for now.   We also hope you\'ll learn how the choice of electron source is reflected in the quality of your images and performance of your system, and that you\'ll be able to achieve optimum performance out of your microscope and source.   e hope to give you the knowledge you\'ll need to deal with a source that does not meet specifications.    ',
    '	So as you\'ll recall from general physics or general chemistry, the electron is a subatomic particle that we consider the “quanta” of negative charge -- it possesses a negative fundamental charge, so -1.6x10 to the -19 Coulombs and it\'s surrounded by its own electric field because of that charge.  In addition to their charge, electrons all have the same extremely low rest mass, m-sub-zero, of 9.109x10 to the -31 kg  Electrons don\'t exist solely within TEMs, however --they\'re everywhere! The sharing and exchange of electrons, called Coulombic interaction, is responsible for all chemical compounds and reactions that we can observe in everyday life, including consciousness.   And, since these electrons are charged but nearly massless, we can manipulate their motion using electromagnetic fields within the TEM, and we can model the changes induced in the motion of the electrons by our fields with the Lorentz force law.      ',
    '	We\'ve already mentioned that electrons have a very favorable charge-to-mass ratio, and that this makes them highly controllable -- this is how we can use the optical systems in the TEM to focus the electrons and use them to produce images! The optical systems are composed of magnetic or electric fields, and this is how we manipulate the electrons. At the bottom left you can see an illustration of an electron in an electric field, and at the right you can see an electron interacting with a magnetic field.   However, we can manipulate more than just their motion -- we can change their wavelengths as well, through adjustment of a parameter we call “accelerating voltage”. The small table here illustrates this – we see that when we\'re accelerating our electrons with 100,000 volts, their wavelength is about 0.0037 nm. If we up that to 200,000 volts, we see that we\'ve now got a smaller wavelength – 0.0025 nm! And at 300 kV we have a wavelength of 0.001969 nm, so you can see the effect of accelerating voltage on wavelength, and soon you\'ll see the effect wavelength has on resolution.   Just to stress this, though – the wavelengths of accelerated electrons are extremely small -- about 10,000 times shorter than those of the sun\'s photons we see with our eyes. This means the resolution we achieve with a TEM will be much greater than that of a LM, meaning we can examine things that are much, much smaller.   Besides the resolution, another very important advantage of electrons is the fact that if we ourselves are controlling a beam of electrons -- which we just said essentially make up everything -- that beam will be Coulombically interacting with whatever we direct the beam at, meaning we\'re not only “seeing” our sample, but can extract chemical information from it as well.        ',
    '	Let\'s take a look at the electromagnetic spectrum to see the magnitude of the differences electrons imply -- A thing to note here is that as the energy of a particle (photon or electron, either way) increases, its frequency will increase and its wavelength will decrease-- meaning, the more energy the particle has, the faster it will oscillate in space-time, and since it\'s oscillating faster, it will have to cover less linear space per oscillation, so it will have a smaller wavelength!   So we want electrons in our TEM because their wavelength is highly controllable at wavelengths much shorter than those of the photons s used in VLM and human vision, which have wavelengths of around 400 - 700 nm.  Of course, there are higher energy photons, but photons with wavelengths comparable to TEM electrons are very hard to manage, because at that point they\'re actually X or gamma rays, which are extremely hazardous and hard to focus.    However, in the average transmission electron microscope operating at about 100,000 volts of accelerating voltage, we can impart much higher energies to our electrons, and maintain a stable wavelength despite slight variations in the voltage that we use to generate them.  At these energies, our electrons are traveling and oscillating so fast with all of this energy, that their wavelengths are actually around 0.037 Angstroms (with one Angstrom being 10^-10 meters, so the wavelength is 0.0037 nm)  in well-equipped modern TEMs,.   ',
    '	When high energy electrons interact with TEM specimen, structural information can be gleaned from transmitted and diffracted electrons. Chemical information can be acquired from the characteristic X-rays and electron energy loss as well. The fine details of these techniques will be discussed further in other chapters – just know that our incident electron beam from the source produces many useful signals when it interacts with a specimen.   ',
    '	De Broglie\'s 1924 thesis relating wavelength lambda to Planck\'s constant and linear electron momentum  Wavelength relating to voltage when not considering relativistic effects, -- usually our electrons in TEM is approaching half the speed of light, so we need to factor in relativistic effects. Apparently wavelength is inversely proportional to voltage – key point.  q times v, or kinetic energy, is equal to m sub zero times v squared, all over 2  where v is accelerating voltage   Now that we know the inverse relationship between wavelength and energy and have seen it graphically with the electromagnetic spectrum, we can quantify the relationship. To do this we\'ll use a few very basic equations that you\'ve probably already seen many times before.   The inverse wavelength/energy relationship is expressed through the wave relation that Louis de Broglie postulated in 1924, and all this is doing is effectively restating mathematically what the electromagnetic spectrum showed us visually -- the fact that when we divide Planck\'s constant by the linear momentum, p, of a subatomic particle, we get a fair approximation of the wavelength of the quanta, in our case, electrons.   Since momentum isn\'t shown *exactly* as energy, if we equate it to the product of electron mass and velocity, we can get an approximate value for wavelength just by dividing 12.27 over the square-root of our accelerating voltage!   Though, if we set our accelerating voltage to anything more than around 100,000 volts, we\'ll actually be accelerating our electrons beyond half the speed of light in a vacuum, or 0.5c. To do this and still get accurate results, we\'ll have to incorporate relativistic effects, but we see that even after doing this that our equation for wavelength is still quite simple.     ',
    '	 We\'ve already mentioned that electrons have a very favorable charge-to-mass ratio, and that this makes them highly controllable -- this is how we can use the optical systems in the TEM to focus the electrons and use them to produce images!   However, we can manipulate more than just their motion -- we can change their wavelengths as well, through adjustment of a parameter we call “accelerating voltage”.   The wavelengths we achieve through this are extremely small -- about 10,000 times shorter than those of the visible photons we see with our eyes. This means the resolution we achieve with a TEM will be much greater than that of a VLM, meaning we can examine things that are much, much smaller.   Besides the resolution, another very important advantage of electrons is the fact that if we ourselves are controlling a beam of electrons -- which we just said essentially make up everything -- that beam will be Coulombically interacting with whatever it is hitting, meaning we\'re not only “seeing” our sample, but can extract chemical information from it as well.      ',
    '	So in a TEM operating with a high tension of 200,000 volts, we set V equal to 200,000.   That means that our relativistic wavelength would be 0.0025 nm, vs a non-relativistic wavelength of 0.0027 nm.   ',
    '	Here we see Abbe\'s equation, which was created to model the effect of various variables on resolution, ro, in a VL system, but can be adapted and used in TEM.  For our purposes, we\'ll define the new variables as follows: Eta is the index of refraction between the source and the lens. In VLM this could be air, or immersion oil – it\'s just the medium that the radiation travels through. Alpha, expressed in radians, is the half angle of the cone of electrons that is coming out of the specimen, going into the imaging section of the microscope. And you can just think of this as the cone of light, or the cone of electrons that will come out of the specimen then be used to form our image.  Note that you\'ll often see the entire denominator, eta Sin (alpha) of Abbe\'s equation shortened to “N.A”, or “numerical aperture”, which is a dimensionless quantity that determines the range of angles from which radiation can enter or exit an optical system.      ',
    '	Take a few minutes to explore Abbe\'s equation with this interactive module. You can enter in any value, and we\'ve provided a list of values for different optical setups, from VLM all the way to aberration-corrected TEM -- this will show you first hand that the wavelengths found in TEM are four orders of magnitude smaller than those found in VLM! Note that the leftmost values given for electron microscopes are for 100 kV of acceleration, and the rightmost are for 300 kV instruments.   Note the differences between VLM and TEM, so, photons and immersion oil vs. electrons and varying degrees of vacuum, and the difference between CTEM and aberration corrected TEM – we see wavelength differences of about 4 orders of magnitude between VLM and TEM, and an order of magnitude between the lowest and highest resolution TEM set-ups.      ',
    '	We have seen that the short wavelength of electrons can be achieved via accelerating the electron with high voltage, sometimes also called high tension. This results in a more than four-order improvement in resolution. Now let\'s take a look at how we can generate electrons. Can we think about something in our daily life that already does this? Yeah! That is right! The cathode ray tube used in older televisions is the electron generator. It consists of one or more electron guns which generate electrons. It modulates, accelerates, and deflects electron beam(s) onto the screen to create the images. Similar in principle, TEM also uses an electron gun to generate electrons. These electrons are accelerated by high tension, modulated and deflected by lenses and apertures on to the camera or phosphor screen where they create images. OK, let\'s find out how to generate electrons.   ',
    '	First let\'s take a look at this atomic model while we remember that an atom is made up of three kinds of subatomic particles: neutrons, protons, and electrons. Electrons are fermions, a classification named for particle physicist Enrico Fermi.  The Fermi level is used to describe the top of the collection of fermion energy levels, like those of electrons, at different temperatures.   The Fermi energies of metals are on the order of electron volts. This implies that the vast majority of the electrons cannot receive energy because there are no available energy states for them to go to within a fraction of an electron volt of their present energy. At higher temperatures, however, a certain fraction characterized by the Fermi function will exist above the Fermi level and become free electrons in the conduction band. Further heating, or the application of an electrical field can potentially lead to a consistently high probability of the electrons escaping from the metal surface; this process is called electron emission. This means that we\'ll always have to apply some amount of heat (anywhere between hundreds to thousands of Kelvin) to our electron source in order to facilitate emission.      ',
    '	But, how much energy do we need to encourage electron emission?   Let\'s consider a case where just one electron is emitted from the metal surface. This results in a positive charge on the metal surface, and potentials between the escaped electron and the metal surface. The potential energy V(x) can be expressed as a function of the distance between the electron and metal surface. This is an electrical field potential whose energy is related to the work function, and columbic interaction between e- and the positive charge depends on the strength of the field that is applied – you can\'t just take electrons out by hand -- you have to apply these external electric fields to “extract” them.   To address the three terms in this equation more specifically, though:   the first, q.phi, represents the work function – we can think of this as the minimum energy needed to remove electrons from the conduction band at the metal surface and pull them out into the vacuum.   	 This second term, q-squared over 16 pi eta-sub-zero all multiplied by one over x, represents the interactions between the positively charged nuclei and the negatively charged electrons that we\'re trying to remove from those nuclei. Because these particles are oppositely charged they will resist our attempts to separate them, and that is what this term models.   	 	And this third term, q times the magnitude of E times x, represents our extraction voltage – the electric field we apply to extract electrons!   So we can conceptualize this equation as the three factors that we must overcome to stimulate electron emission, and remember that these factors are represented by each of these three terms:   	The work function, which depends on the material we chose to construct our electron source out of. It is the critical barrier for electron emission.  	The Fermi energy, that is defined for materials at absolute zero, that we can therefore effect via heating our source.   	Then the final term was the extraction voltage, and again, that was an applied external electric field that the operator of the microscope controls.      ',
    '	So we just saw that the critical barrier for electron emission is the work function of the emitter material. Logically then, we should just choose a material with a very low work function, achieve emission that way, and be done with it. Sadly, that isn\'t possible, and we can examine this table of work functions for selected elements to see why.   Looking at this table, we can see that cesium has the lowest work function of the elements listed, but its melting point is only 307.1K.  This is a problem, since we must apply some heat in order overcome the work function barrier -- unfortunately we\'ll always need to heat sources to around 300 Kelvin or more, so this means the only currently viable thermionic sources are either refractory (high melting point) materials with unremarkable work functions that are useful because they can tolerate extreme heating, or compounds like rare-earth hexaborides that have low work-functions and melting points that are high enough to facilitate emission at cooler, but still elevated temperatures without melting or vaporization.  For instance: W has a melting point of 3695 K with a 4.5 eV work function, and LaB6 has a low work function Φ of 2.4 eV and a melting point of 2483 K  But if you think about it, let\'s look at copper here and tungsten, and when you look at their work functions, they\'re almost identical and tungsten is actually what we use in many electron microscopes today. So… Why do we use expensive tungsten and not the cheaper and more abundant copper? When we look at the differences in melting point between copper and tungsten, this kind of becomes clear: because we know that we need to apply around 2000 Kelvin to the filament to get it to emit electrons through thermionic emission.   So we have copper melting at 1358 Kelvin and tungsten melting at 3695 Kelvin, the problem here is that by the time we get copper to the emission temperature it will no longer be a solid -- it will be a vapor, and for our intents and purposes it effectively is useless even though it is an attractive emitter from a cost standpoint, in practice it is not used because it will just become a vapor before it can even emit, whereas tungsten has the high melting point and can withstand this.  So this is why you\'ll usually see sources restricted to materials that are called, “refractory” materials, or ones with very high melting points.   And, as we said, this isn\'t restricted specifically to metals -- you can use compounds, but again the compound has to have a melting point greater than the temperature needed to facilitate emission. Really just know that if your material melts at a temperature that is less than the emission temperature then you don\'t have an emitter, you just have a vaporized substance in your column.   Crystallography is also important to consider, because all of these materials that we\'re considering right now are in the crystalline state; it\'s a very ordered state in which the sharing of electrons is easy, meaning that we can extract them easier -- it\'s just easier to work with.   You may have noticed these the sets of integers here, and you may know what these are, or you may not, but they\'re called a “Miller index”, or “Miller indices”, and tell us how the crystal is oriented. So take note here that even within the same material, different orientations of that material have different work functions -- they can vary by up to an electron volt, so that\'s a pretty significant difference considering you\'re working with the same material.      ',
    '	Of course, no matter what materials we choose, it seems that we still need overcome the work function barrier of the emitter. So if we think about the remaining two factors from the single electron potential model we just looked at, we can see that electrons can be emitted in the three ways: heating the filament, heating and applying an electrical field to the filament, and applying an electrical field only.  These three methods correspond to the three common electron emission gun designs: thermionic, Schottky, and field.   If you\'re using a thermionic electron gun, which by definition relies primarily on an increase in temperature to achieve emission, it will get very, very hot, and it will continue heating to the point where the Fermi energy has grown so much that the work function is very small, and the electrons are emitted into vacuum.   Then the bottom, the field emission gun (FEG) relies on the application of a strong extraction voltage to a small tip-- so it\'ll leverage that last term from the equation and really just pull the electrons from their source. The filament is still heated to around 300 Kelvin, but compared to the temperatures of the other designs, this is “cold”.   In the middle, the Schottky emitter, leverages what\'s called the Schottky effect, and will rely on both an increase in temperature and an increase in electric field around the source.   So to break it down very simply, the thermionic relies on heat, the Schottky effect relies on heat and extraction voltage, and field emission guns rely purely on extraction voltage. The three correspondent electron sources are thermionic emission gun, Schottky Field emission gun (FEG), cold field emission gun (cold FEG).       ',
    '	In a thermionic emission gun, we have to heat it up, and that heating gives electrons enough kinetic energy to wiggle up into the conduction band, then hopefully out into the vacuum. The relationship between Fermi distribution and temperature can be expressed as a Fermi-Dirac function. As we heat up the filament, there is a higher and higher probability that electrons will exist in the conduction band of the emitter.  Once the temperature is high enough, electrons in the tails of the fermi distribution in the conductive band acquire enough kinetic energy to overcome the work function. This is when heat energy, kT, is larger than the work function energy barrier, q dot   And once we have emission, when you think about how many electrons we\'re getting out per time we can actually relate the number of electrons to current because of the fact that electrons possess that fundamental electric charge. This current output per time from the source is something called, “current density” -- and you can think of that as current per time, or electrons per time. So to get a measure of the performance of our cathode, we can use Richardson\'s law, and mathematically this just shows us that temperature is extremely important in emission and in current density -- it\'ll both lower the energy barrier, and as such it will increase the amount of electrons per time that we\'re getting out of our source.  This seems to suggest that the current density can be increased infinitely via increasing the heating temperature or reduce the work functions of the emitter.       ',
    '	For reasons you\'ll understand soon, we would like to get the highest emission current density possible. There are a few ways to go about this:  Richardson\'s Law seems to say that that the current density can always be increased via increasing the temperature of the filament, which is what we call the electron source because of the shape of the emitter. Sharper and smaller filaments allow for easier emission, but we will discuss that later when we learn about field emission electron guns.  Right now we need realize that although we get more electrons per time as we increase temperature, there exists a point, called “saturation”, beyond which the curve of filament heating current vs filament emission current plateaus – so, past a certain temperature the only effect you really see is quicker degradation of your source, not an increased emission current. To avoid that pointless degradation, we choose to operate just below the saturation point, but have to take care to stay near saturation, since operation too far from saturation will result in decreased brightness and analytical signal.  So, unfortunately, we\'re limited in our application of heat either by filament melting point OR the filament heating current/emission current plateau.   Another option, as we know, is to choose a material with a low work function. In practice, LaB6 and CeB6 single crystals are often used in the electron microscope because of their lower work function energy barrier. As these materials are more sensitive to gas molecules like, oxygen, water vapor, etc. they will need to be kept under high vacuum.     ',
    '	Now, since we\'ve covered the theoretical groundwork for what emission is, what it implies for our data, and what kind of things we can do to get it to happen in our TEM, let\'s dive into the physics of a thermionic electron gun.  This is a schematic illustrating your average thermionic gun. It might look a little involved at first, but when you think about it, this is a very simple circuit -- the voltages involved are a little bit extreme, but in general this is a fairly simple design and it can do quite an amazing thing.  If we start from the top, and remember that we can apply heat to overcome that work function energy barrier, so we\'re going to use resistive heating, through this resistor, and that\'ll heat the cathode to emission temperature.  The trouble is, thermionic guns typically use rather large sources – this means that our electrons aren\'t emitted as a focused beam, but rather as a cone-shaped spray, since they can be emitted from a large portion of the surface area of the source. We need the beam to be very precise, so we employ something called a, "Wehnelt cup", or a, "Wehnelt cylinder”  to restrict emission to just the tip of the source by applying a bias voltage.    Compared to the rest of the schematic you\'ll see that the the Wehnelt bias, or the electrical bias applied to the Wehnelt cup is actually quite small -- it\'s only about 500 volts. This is enough of a bias to repel the electrons from the initial broad cone towards the diagram\'s center line, which in the TEM is called the optic axis, and this means that the Wehnelt is actually acting like it is the first electrostatic lens in the system.   After we\'ve applied the bias to the Wehnelt cup, electrons are only going to be emitted from this equipotential on the tip, instead of throughout the whole lower portion of the tip. These electrons will collect between the filament tip and the hole in the bottom of the Wehnelt cup, and the collected electrons form what\'s called a, "space charge", and the tip of the space charge -- where the space charge comes out and begins to interact with this anode down here -- is called a, "crossover“.  This is a very important concept remember: the crossover is actually what illuminates our sample, not the filament tip. This is because, when you think about it, we have a very high density of electrons at the crossover-- a very high current density.  	So we\'re going to use this point here – called the “virtual source” -- for illumination instead of the actual physical filament tip.   From that crossover if we look at the anode we\'ll see that this is essentially at ground, and when we think about the fact that we have an extremely high voltage applied -- a large potential difference -- between ground and the cathode there, we realize that this is actually what will accelerate the electrons down the column; this is what will give them their high energies and their small wavelengths.   This is also a convenient place for us to see a visual illustration of what alpha, the half-angle from Abbe\'s equation.  For our purposes in electron microscopy alpha is describing that half angle between the outside edge of the cone to the optical axis.       ',
    '	Here are some examples of the two main thermionic sources, as well as a full thermionic gun assembly. At far left is a “tungsten hairpin” – a very simple, cheap, and robust type of filament made from tungsten. To the right is a computer-generated rendering of a lanthanum hexaboride (or “Lab-6”) source, which is visibly more complex. This complexity, along with the precision involved in manufacturing the crystal, mean that lab-6 sources are much more expensive than tungsten hairpins.   Shown at left in the far right image is a tungsten filament ready to be placed into the Wehnelt, shown at right.    ',
    '	When you\'re operating a thermionic electron gun, there are some things you need to keep in mind:   First and foremost, should you ever need to replace the filament, know that the distance between the emitter tip and the bottom of the Wehnelt cylinder where the electrons are emitted is crucial for proper performance. The size of this gap has to be maintained when you replace a filament, so take careful note of your manufacturer\'s specifications when you\'re dealing with that.   Additionally, we talked about that relatively low-voltage bias of about 500 volts applied to the Wehnelt, and we need to optimize this -- we need to make sure it\'s doing its job correctly, because if we apply to week of a bias we won\'t have a very strong field acting on those electrons, which means that they will be focused well -- they won\'t be condensed into a very small cross over there, which means that our illumination source will be larger, and therefore our brightness will decrease because the current density per source size is going to be proportionally weaker.   But on the other hand, if we apply too much of a bias, we\'ll have a very strong field and extremely strong focusing action that will actually take all of the electrons that are emitted and just shoot them right back up into the filament, and nothing will come down the column at all -- our emission area becomes smaller and smaller and then eventually we\'ll just get nothing and it they\'ll all be up there interacting with the filament and interacting with each other and really not doing anything useful.     ',
    '	And again, the optimization of this Wehnelt bias is a crucial factor, because if you\'re not operating at optimum parameters then you\'re really not getting the most out of your system and you\'re not getting the best quality of data for the money that you invested.   Optimum bias settings do exist, but they do depend on the distance between your filament and your Wehnelt, and the type of filament material you\'re using, and really who made your gun and how they made it -- this will all be described in manufacturer\'s specifications in your operating manuals. But the bias and the distance are adjustable parameters on most instruments. The tip-wehnelt distance is a little bit more involved -- you have to actually crack open the microscope to adjust it, and that involves a lot of careful planning and cleanliness to ensure that you don\'t contaminate your column.   The bias voltage on the other hand, is a very readily adjustable parameter.   So remember that we need to select an optimized bias -- not too high, not too low -- that will leave us with the best balance of emission current and brightness.     ',
    '	A very common type of source will see for thermionic guns is the so-called, "tungsten hairpin". As you\'ve heard, tungsten isn\'t the highest-performance source material available, but it is very robust, it\'s reliable, stable, and inexpensive, because of its simple construction.  It\'s one of the few sources we\'ll discuss that can operate in low vacuum, which could mean cost-savings if we don\'t have to invest in a high or ultra-high vacuum system, but there are some downsides to this:  at lower vacuum conditions you will still have charged ions bouncing around near your filament, and when these ions impinge on your source they\'ll actually “sputter” material away. Sputtering just means that these particles will hit with sufficient kinetic energy to knock atoms out of your source, so eventually, over time, from evaporation and erosion through high temperature and through sputtering your source will gradually wither until it is thin enough to melt and break the circuit, at which point it is “dead” and no TEM can occur until it is replaced. Here we see what a source looks like, generally, when we put it into the microscope.       ',
    '	We mentioned rare earth cathodes, and these are lanthanum and cerium hexaboride predominantly, but you\'ll mostly see lab-6.   From the Richardson equation we remember that we can increase the current density and the brightness by using a material with a lower work function, and that\'s why we\'re interested in lanthanum and cerium hexaboride. Their work functions, if you remember, were about two electron volts lower than tungsten. This is really important because when we evaluate the Richardson equation we see that as we increase our operating temperature to about 2700 Kelvin, which is approaching the operating temperatures of tungsten sources, every 0.1 eV of work function we can eliminate will result in a current density improvement of about 1.5 times.   So even though we will be operating in the same temperature regime as as tungsten, we\'ll see that since we have a lower work function we\'re going to get a much better current density, and therefore much better brightness and much better data, because of the properties of these cathodes.     ',
    '	And you\'ll notice that the construction of a lanthanum or cerium hexaboride cathode is quite different than that of a tungsten one, and that is because they operate differently.   Basically it comes down to the fact that you\'re going to use a single crystal of your cathode material, where lanthanum or cerium atoms can move around freely in the boron lattice. This means that the emitter atoms can be depleted from the tip, but performance won\'t be affected since more can still migrate to the tip from distant areas of the crystal.   As we said it has a relatively low work function compared to tungsten, and we can get an equivalent current density at about 1500 Kelvin, so we can match the tungsten hairpin emission current at a much lower temperature.   And if we continue to increase the temperature until we\'re on par with the operating T of a tungsten thermionic emitter, we see that our current density will increase to about 100 amps per square centimeter at 2000 Kelvin. This means that we\'re gonna have not just a longer life, but also higher brightess; a longer life because we\'re going to have lower operating temperatures and, mobile lanthanum and cerium within the crystal. And the higher brightness, again, because of the lower work function, which means an increase in our current density, and all of these things together contribute to a higher resolution.     ',
    '	But there are some drawbacks, one of which is the fact that they\'re very reactive when they\'re at operating temperatures, especially with carbon and fluorine. With C and F being common in semiconductor or other applications, things are a bit risky, because when rare earth borides come in contact with C or F the cathode gets what\'s called “poisoned”, and this will really change its emission properties in a way that isn\'t very useful for us, so we want to avoid that if at all possible.    Another drawback is that in order to protect these crystals from contamination, you have to use exceptionally good vacuum, levels around 10 to the -7 torr or better, and doing that itself is expensive -- you have to invest a lot of money in your facilities to install and maintain multiple stages of vacuum pumps.   And of course the crystal itself and the mountings are expensive! It costs a lot to produce these and it costs a lot to buy and install them.   And since this crystal isn\'t a metal but is really more of a ceramic compound, it\'s very brittle, so the electrical stresses and the thermal stresses it\'s exposed to will  eventually cause mechanical failure no matter how carefully we maintain it.    ',
    '	In Schottky emission we reach a balance that allows us to reach emission through applying a strong electric field to a source with a tip much smaller than that of a tungsten hairpin, in the nanometer size regime vs. the micrometer size regime, and we also apply a bit of heat to the filament -- but again, not as much as is needed in thermionic emission.   And we see here that our potential energy is just a ratio of extraction voltage over the spherical radius of the source tip, meaning that as we shrink our source size while keeping voltage constant, our potential energy will increase, so this means that we can achieve emission field at lower temperatures than we could if we were just relying on emission through thermal energy alone.   Taking this into account, we see that we have a new potential energy here, V sub s of x, -- we have the familiar terms, the work function, the coulombic interactions, and the electric field, but because we\'re using both thermal and electrical energies here, we can find this new peak potential, which is essentially our new work function or our new energy barrier that we need to overcome.   So as we use this increased electric field, as we increase this E term here, we decrease this delta W term. So as we apply a stronger electric field to the tip, our work function is further reduced.  So for example if we wanted to try to use the principles of field emission on a large tungsten hairpin source, if we would apply 10,000 V / cm of tip, we would only get a work function reduction of about 30 meV, and if we would then increase that by an order of magnitude, so we\'re having 100,000 V / cm of source size, we\'d still only see a reduction of the work function of about 100 MeV, so that means in order to get a reduction of the  work function that would allow us to achieve emission just through application of a field to this tungsten hairpin source, we\'d need to apply up to a megavolt, and voltages of this range are prohibitively expensive --the size of the microscope would increase and facility costs would skyrocket, so in order to avoid this we can instead just shrink the size of the source.         ',
    '	We can express the emission current for Schottky emitters through the corrected Richardson-Dushman equation -- and this essentially tells us that our electron emission is enhanced by the application of that electric field, because the electric field, when concentrated on a small tip, decreases the work function.  And this means that we can get a higher current density through increasing our extraction voltage, E -- we increase our emission current density through increasing the voltage that we apply to the tip.      ',
    '	So for a Schottky emitter, we see that the filament tip is actually poking through what used to be the Wehnelt, and in Schottky guns this is not a Wehnelt, but is instead called a suppressor.  The fact that the filament is now protruding from the suppressor and will be directing the electrons down, here, is an important distinction between the two gun types.   And there\'s a potential applied between the filament and the first anode, and this is our “extraction voltage”, that factor that we discussed that is going to draw electrons from our tip. And as they\'re extracted into the vacuum they approach the second anode and as they pass between the two anodes they form the crossover that we\'ll also refer to as the “virtual source”.   From the crossover they head towards the second anode, and this explains why you may hear somebody say that they\'re operating a TEM at “200 kV”, what this statement really means is that the potential difference between the filament tip and the second anode here, the “accelerating voltage”, as it\'s called, is a potential difference of 200000 volts, and that\'s really what serves to accelerate the electrons down the column.     ',
    '	Now that we know the theory and the mechanics of how they operate, let\'s examine how we make them.   Cathodes for Schottky electron guns are made from crystalline tungsten in the (100) phase, coated with ZrO. These crystals are etched to have very small tips, with radii around 0.1 – 1 microns. Remember, though, that the tungsten still had a fairly high work function, and this is why we add the zirconium oxide – it will reduce the work function!   After we etch the tungsten to a tip radius of about 0.1 to 1 microns, we coat the middle of it with zirconium II hydride, and this is all baked at 1800 Kelvin under ultra-high vacuum where the hydrogen will off-gas and leave the zirconium to diffuse into the tungsten tip.   And then after baking for a few more hours at 1600 Kelvin, under oxygen partial pressures of about 10 to the -4 or 10 to the -5 Pascal, this\'ll oxidize our zirconium into zirconium oxide, which is what we need to decrease the work function of the tungsten.        ',
    '	So to maintain stable emission in Schottky electron guns, we need to pay attention to these critical parameters:  We need to ensure that the zirconium coverage, and zirconium to oxygen ratio on the tip is correct and homogeneous enough to allow the low work function across the entire tip.   And because we\'ve decreased the tip size now -- and we know that for emission to occur the surfaces of the emitters have to be very pristine -- we now have a smaller area, meaning contaminants can build up faster. To counteract this, we need to do 2 things:  One is use a higher gun vacuum of about 10 to the -8 torr, substantially higher than is needed for thermionic emission, to prevent contamination  and two: we can keep the source hot, around, 1800 Kelvin to burn off any contaminants that may be present.   We also have to make sure that we\'re using an appropriate extraction voltage, because if we apply too much we will have an incoherent beam, since we\'re drawing electrons not just from the small tip, but from the sides and other areas that aren\'t suitable for precise emission.  But if we have to low of an extraction voltage, we won\'t have enough brightness or current density to form a useful beam.   And we also need to maintain that distance separating emitter tip and the first anode --  the extraction anode -- and that\'s a function of the extraction voltage that we\'re applying.     ',
    '	To start a Schottky FEG, open the microscope user interface and click “power” to start the pump in the gun area, IGP3. The current readout from this IGP should be less than 0.35 microAmps, otherwise the FEG won\'t start. As long as the current output is below 0.35 microamps the FEG should automatically power up.   There are two options for FEG startup: “cold start” and “warm start” – the former is much slower than the latter in order to reduce stress on the cathode. Generally, if your FEG has been off for more than 24 hours, you should select cold start. If your FEG was recently shut down, you can use a warm start.   Once the FEG is up, you can hit “operate” to turn on the extraction voltage.  It is good to start with low values and increase them slowly, in small increments, to avoid stressing the cathode.   After this has come up and stabilized, you can hit “high tension” and begin to bring up the accelerating voltage.     ',
    '	And the third type of emission we discussed, field electron emission, really operates strictly through the application of a very strong electric field to a very small tip, and we\'ll remember that was that third factor we talked about, the extraction voltage, and in field electron emission we\'re relying only on that voltage to be able to impart enough kinetic energy to allow electron emission via quantum tunneling.   We can model this emission with the Fowler-Nordheim theory, and basically what it tells us is that we\'re gonna lower our work function, and thus increase our cathode emission current, just through the application of this field . The emission current will be related to the strength of the field we apply.   This is sometimes called “cold cathode emission”, or a cold “F.E.G”. or a “cold feg”,   because we\'re operating at relatively low temperatures around 300 Kelvin since we no longer have to aggressively heat the source in order to facilitate emission, because we\'re relying purely on the field that we apply to this very small tip.      ',
    '	In order to get this emission, this cold emission through just applying that field, we need to have a very small tip.   In addition to the size requirement, it must also have a specific geometry, which we achieve by etching a tungsten crystal down to a tiny tip, oriented so that the tip is etched from the (310) plane, since that has found to be the best for cold emission.   Once we have produced it, there are really some advantages to the cold FEG –   We don\'t have to apply excessive heat, because we\'re operating at relatively low temperature .  We\'re going to have high brightness,  high current density, and we\'re also gonna have a small source size, since we just went through all the trouble of etching the (310) plane.   This is all going to contribute to high spatial coherence, and that means we\'re gonna have a very minimal energy spread.  And since we\'re not applying heat that will oxidize or otherwise damage the tip, we\'re going to have a longer source lifetime as well.   But since we\'ve removed the constant heating current flow to the cathode, we no longer have a way to prevent contamination from building up, so we will have to burn off the contamination, or “condition” the tip -- about every four hours or so nowadays -- to maintain our emission current. So the trade-off for “cold” operating conditions is decreased stability, since we\'ll have to condition the tip regularly.   And again because we\'ve lost the extreme heat, contamination is even more of a risk than in Schottky emitters, so we need to keep cold FEG cathodes under constant ultra-high vacuum, which will incur even higher facilities costs.    ',
    '	So, we\'ve now covered all three major source and gun types – thermionic, schottky, and field emission.     ',
    '	And now that we\'re familiar with them, let\'s go over what we absolutely need from sources:   First off, they must emit electrons into the vacuum, since that is essential for beam formation.  Secondly, they must be capable of operating at high accelerating voltages, since this is what is needed for the emission of electrons with very short wavelengths, which result in a higher resolution.  And, they must emit a lot of these electrons – they have to provide a high current density, and high brightness, which will ensure that we can use short exposure times and get enough signal for ATEM applications.   Once these have been satisfied, we begin to focus on the coherence of the beam that the source emits – the beam should be highly temporally coherent, which will afford us good energy resolution, and it should also be highly spatially coherent, which will allow us to perform analyses with high spatial resolution.   In terms of temporal coherence, an ideal source would emit electrons that all have the same energy. In reality, we\'ll settle for a source that emits electrons with a minimal energy spread, or a minimal difference in energy between electrons.   An ideally spatially coherent source will emit electrons from a true point-source, but in reality this is impossible. Instead, since spatial coherence is directly related to source size, we just aim to get the smallest possible source size.   And, of course, the source should also have excellent emission stability, which means that it should be able to consistently provide all of the above for a period of time adequate to accomplish the experiment.        ',
    '	So all these equations have really shown us that brightness is going to increase as we increase the accelerating voltage that we subject our electrons to, and practically, an increase in brightness has three implications:   one is that we have more electrons per area of a beam, so we\'re going to be able to put more electrons into a beam of a given size compared to a probe that is less bright, and this is extremely important for operations like nanoprobe analysis.   The second effect is that we can extract information from the specimen faster with a brighter beam, and this is important we come to things like EDX analysis, or energy dispersive X-ray.   And the third effect is actually not that great -- if we have a more powerful beam we will cause more beam damage per time. So if your specimen is sensitive to radiation damage you need to optimize your electron dose so that you can accomplish your goal without destroying your sample.   Radiation damage aside, though: brightness is really good for analytical techniques because current density is crucial for these analyses. A higher brightness will give us higher resolution, stronger signal, less noise, and lower exposure times meaning, again, that we will have less drift or blur in our imaging and elemental mapping      ',
    '	In general, the coherence of a beam of electrons is a way for defining how well the electron waves are in step, or in phase with each other.  Phase is a key property of all waves, and in ideally temporally coherent beams, all of the electrons will have a constant phase difference and a constant frequency.    We want to ensure that this is all happening over a large period of time as well, because if we have coherence moment to moment it\'s not particularly useful.   We can mathematically define the “coherence wavelength” lambda sub c, as the ratio between the product of Planck\'s constant and electron velocity and the energy spread of the beam, delta E.  If the “wave packets” from the source are all identical, they have the same coherence wavelength.   And since wavelength is related to accelerating voltage, that means our voltage also has to be stable, and these things are very crucial if we want to maintain a tight energy spread, so that the variations in energy across the electrons comprising the beam are very minimal.  Essentially this all just boils down to the fact that we want our electrons to all be as similar as possible, or, in reality, since we\'re considering them as waves here, we want all of our electron waves to be as similar as possible -- we want them to all be oscillating with the same frequency, and all be emanating from the same point and ideally we want that point to be as small as we can possibly be.  In practice, the typical delta E values for the three sources we\'ve discussed are in the 0.1 to 3 eV range, which is remarkably small compared with a total energy of 100 to 400 keV.      ',
    '	Spatial coherence, on the other hand, is related to the size of the source. Perfect spatial coherence would imply that the electrons were all emanating from the same point-source. Obviously this is physically impossible, but we can use the ideal situation as a way to help us visualize the role source size plays. So, source size governs spatial coherence, and smaller sources give better coherency.   We can define a distance, d sub c, the effective source size, for coherent illumination to be   d sub c much less than lambda over two times alpha, where lambda equals electron wavelength  and alpha is the angle subtended by the source at the specimen.   We can control alpha by inserting apertures into the path of the beam.      ',
    '	But to elaborate on spatial and temporal coherence a bit more, and to illustrate their relation, let\'s look at this diagram from Zuo\'s Advanced Transmission Electron Microscopy.   In this diagram we have a point-source of electrons, P1, which sends electrons down the optic axis. The “spread” of the electrons, or their divergence from the optic axis, is illustrated by the line between P1 and P2 -- segment P1 P2 can be pictured as the ray path of the most divergent electrons.   The electrons in a beam with ideal temporal coherence will emanate from the point source P1 and travel down the axis with constant phase differences and frequencies for the duration of their travel.   Perfect spatial coherence would mean that every electron emitted from P1 would travel straight down the axis -- in an ideally spatially coherent beam the distance between P1 and P2 is zero.   But in reality, rather than in theory, high spatial and temporal coherence just mean that the phase and frequency differences are minimal, and that the emission is confined to the smallest possible region of the smallest possible cathode tip, giving us minimal divergence.     ',
    '	And so to look at the effects of these 3 variables: the high tension, the extraction voltage, and our heating temperatures, across all the sources that we\'ve discussed, with the definition of brightness that we\'ve established as a relation of the current density per solid angle of source, with some factors of temperature and voltage applied, when we look at the thermionic sources we\'re really relying just on the heat applied -- the temperature, T here in this equation, to aid our emission and to increase our current density.  And for Schottky emitters, we established that we need to use both temperature and an extraction voltage, and that the between the extremes of the thermionic temperature and the cold FEG extraction voltages, this is really a middle ground where we\'re getting a good current density from leveraging both of these effects. And we know the cold FEG relied exclusively on the extraction voltages that we applied.     ',
    '	And to practically measure this beam current we\'ll actually use something called a Faraday cup, and this will be inserted into the TEM specimen holder and then into the microscope.  So what you see here, this kind of, rod, is the arm of the holder, and at the very tip is actually where your sample will be, or in this case, the Faraday cup.   And a Faraday cup, as you\'ll recall, is essentially a black hole for electrons -- they\'ll enter it, but they will not be able to escape, meaning that as we connect this the ground with the picoammeter between the cup and ground, we will be able to precisely measure exactly what kind of beam current we\'re getting.      ',
    '	Another of these variables that we could choose to measure via calculation, but instead we usually measure experimentally in practice, is alpha, that semi angle.   It\'s actually quite easy to determine alpha for your particular instrument based on some measurements you can take of something called a convergent beam electron diffraction pattern, and that\'s a specific kind of diffraction pattern, we will get into that later, but right now all you need to know is that to get the value of alpha -- that convergence angle of our source -- you need to make sure that your specimen is the correct thickness, otherwise discs could overlap and that would make this measurement impossible because it relies on the distances between the disks, and the width of the disk.   Total convergence angle, 2alpha, is proportional to the width the diffraction disks. So here you\'ll see this cone of 2alpha, and that\'s our beam impinging on the specimen.  These 3 circles here actually diffraction patterns, and these are going be projected below the specimen, but they\'re shown here in plan view that just for convenience.   And we use a specimen whose Bragg angle, 2theta sub b, is known, we can actually use this relation here were to alpha is equal to the Bragg angle times a ratio between a and b, and we can really easily gather a and b from this diffraction pattern.   You see here that a is the width of the 000 disk, or the transmitted disk, and b is just the distance between the centers of the hkl and the 000 disk, so the difference between a diffracted beam and the transmitted beam.       ',
    '	So, when you\'re deciding on an accelerating voltage to work with, remember that there are two very important factors to consider:   	The benefits of higher brightness and coherence,	 	And the risks of increased beam damage.   As far as benefits go, there are many – a brighter source will leave us with: One:  a better signal to noise ratio,  Two: shorter wavelengths and therefore higher resolutions,  Three: reduced beam broadening, meaning we will have better analytical spatial resolution,  Four: a smaller inelastic scattering cross section, meaning less energy will be transferred to the specimen, resulting in fewer heating effects that could distort our results, And five: our signal to background ratio in EDX will be improved.   Increasing our accelerating voltage will also allow us to examine slightly thicker specimina, but in most applications is not optimal and shouldn\'t really be considered one of the “benefits”.   The risks, however, are somewhat dire – beam damage disturbs or destroys the natural arrangement of the sample   ',
    '	 Here\'s a table of all of the sources and properties that we\'ve discussed. But keep in mind that before passing any judgment on a type of source, you really need to consider the application you want to use it for.  For instance, even though tungsten hairpins do have a short life, if you\'re trying to do biological work, or work with polymers, their high contrast will be an advantage to you. On the other hand, if you need to do advanced analytical work, or if you\'re doing work in materials science, then field emission tips with extremely high coherence and small beam size might be useful.     ',
    '	And for a more specific breakdown, you can refer to this table which was compiled from several textbooks.     ',
    '	There are no lecture notes for this slide.   '
]

let ch3SpeakerNotes = [
`	Hi; welcome back to our lecture series on transmission electron microscopy! In this chapter, we’ll be discussing the basic aspects of electron optics in a TEM. 

In this lecture we will focus on the fundamentals of the lenses, apertures, deflectors, and stigmators, since these are the basic parts of the optical system. 



`,
`	In this chapter, we’re going to discuss the electron optical system of the TEM.

 We’ll discuss the two types of lenses, electrostatic and electromagnetic; as well as how electronic lenses compare to glass lenses. There will be a brief review of optical geometry, including Newton and Gauss’s lens equations and magnification.

Then we’ll re-examine the similarities and differences between electronic and glass lenses before explaining the position and function of all of the lenses within the TEM. 

We’ll discuss each lens in detail before introducing the basic ideas surrounding a lens defect called “astigmatism”, and how we can correct it. We’ll learn about essential non-lens optical components like apertures and deflection coils. We’ll learn about how deflection coils allow us to perform beam tilts and beam shifts, and, using slides and videos, we’ll cover the practical aspects of aligning and using lenses and apertures during crucial TEM operations. 


`,
`	The additional references we used to compile this lecture were: 

Bob Hafner’s Introductory Transmission Electron Microscopy Primer, freely available from Charfac.umn.edu

Kimoto et al.’s, Practical Procedure for Coma-Free Alignment Using Caustic Figure”, from Ultramicroscopy volume 96, issue 2 (2003) pages 219-227

And John Rodenburg’s Introductory TEM Guide, an excellent web resource found at www.roderburg.org. 


`,
`	To make sure you get the most out of this lesson, keep these questions in mind as we go through the material.

What lenses and apertures are used in TEM?

Are they the same as the glass lenses used in visible light microscopy? 

If not, how do they work? 

Do they suffer from any aberrations?

If so, how do we correct them?

How do lenses and apertures control the electron beam?

How do we align them?

How do they form the images or diffraction patterns inside a TEM?





`,
`	In the previous chapter, we learned how we generate an electron beam with an electron gun, and that the beam from gun varied in size from around 100 nm, all the way up into micron scale. Remember that in a FEG, the “virtual source” of illumination is formed by the 1st crossover, between the extraction and accelerator anodes. Electron sources create a divergent beam, but different samples and different kinds of TEM analysis require a large dynamic range of different beam conditions (e.g. focus, intensity, beam size, etc.). In order to do that, we would have to create electron optics components to control it. 

We’ll also recall that the size of virtual source right in that crossover is going to be around 15 nm, which seems pretty small. 
However, since individual atoms are much smaller than this, with their sizes being expressed in Angstroms, it turns out that this beam is still too large to allow us to analyze structures at the atomic level. 

So if our virtual source is tens of nanometers too large, we’ll have to shrink it in some way. Thankfully, the lenses that allow us to magnify images of tiny things also allow us to shrink images of big things – the difference is arbitrary as far as the lens is concerned. So we rely on lenses and apertures to both magnify and demagnify different objects at different times. This is really where the utility and versatility of a modern TEM ultimately comes from – the use value of a TEM is almost entirely thanks to the sophisticated lens and aperture systems that you’ll find inside the column.



`,
`	As discussed in the chapter 1, TEM share the similar principle as the light microscope, but TEM use different lenses and apertures.  In TEM, two kinds of lenses are used for optics formation: one is electrostatic lens, the other is electromagnetic lens.

The apertures are either different size of the hole or discs with hole in the center. The figure on the left shows the cross-section schematic of objective aperture strip. The metal that the holes are cut from is called the “diaphragm”, and the holes themselves are the apertures. We can retract or insert this aperture strip around within the column and position the apertures around the beam. 

To the right, you’ll see a ray diagram of multi-colored electron beams diverging from this dashed pink line. That line, the optical (or optic) axis, is a hypothetical mid-line that runs from the electron source all the way through the optical system as a reference point. 

So now that we have an idea of what we’re looking at, let’s get to it. 

Lenses and apertures are essential for beam demagnification, as well as for image and diffraction formation within the TEM -- without these, nothing happens. 

A simple example illustrating this importance is the fact that switching between diffraction and imaging modes, which is something you’ll do almost every time you operate the microscope, is achieved by changing the strength of a single lens, called the intermediate lens. 
 
So the change in the strength of one lens gives you a radically different view of the data from your specimen, and if you didn’t have that lens you wouldn’t be able to accomplish that change at all! 

However, just lenses alone aren’t enough. 
As you can see, we use them together with apertures so that we can control what parts of the beam are allowed into the lenses. This use of apertures, or “aperturing” of the beam is how we control the angle of divergence or convergence of the beam through the lenses. 

They serve another purpose as well -- if we’re selecting a portion of the beam, some other portion must be blocked. So we’ll have less electrons in that selected beam, and hence a lower probe current at the specimen -- so this is how apertures give us some control of the probe current, too! 





`,
`	We can categorize apertures both by their location within the microscope and also by their composite materials and design. 

Three main types of apertures (or, technically, “diaphragms”) exist, with different shapes and materials depending on the intended application. 

The most common apertures are a metallic disk with a small hole. These can be used in the condenser lens 1, objective, and SAED aperture housings. These apertures are low cost, lessen the negative effects of contamination, and don’t leak electrons. The disadvantages are that they require occasional cleaning, and that the aperture shape is not as well defined as those found in thin foil apertures. 

The thick “top-hat” apertures can also be used as condenser lens 2 apertures – these will stop all unwanted electrons and hard x-rays. The disadvantages are the same as normal aperture.

The thin foil apertures can be used for objective aperture and SAED apertures. This kind of aperture has a well-defined hole with a precise size.  It remains clean and highly functional over a wide range of possible sizes. The drawback is that it has higher electron leakage at high voltages, which may lead to contrast loss artefacts when working at low magnifications.




`,
`	A TEM is usually equipped with four or five controllable apertures, depending on how many condenser lenses it has. 

-	In the illumination system, the C1 aperture is above the column valve V7, within a region of higher vacuum, so it usually stays cleaner than apertures found in the chamber, where things are generally dirtier. 

	This aperture is used as the beam-defining aperture, so that some electrons from the beam’s side lobe are scattered at the edges of the aperture and do not follow the path of the beam anymore but occur outside. 
	Usually the largest C1 aperture is used for all operation modes besides analytical modes, such as EDX and EELS. 
	Small C1 apertures are usually used to acquire cleaner EDX spectrum with lower system noise backgrounds. However, the disadvantage of using the C1 aperture is the relatively large (~0.8 nm FWHM) smallest spot size 	attainable.
	The C2/C3 aperture in C2/C3 lens is used as the beam-defining aperture (it limits the amount of the beam convergence for a fully focused beam) and it also sets the beam current at the specimen.

-The objective aperture is on the back focal plane below the objective lens, and is used to enhance contrast by eliminating the diffracted beam (in dark-field imaging in TEM mode) or transmitted beam (in bright-field imaging in TEM mode). 
	Therefore, the objective aperture is also called the “contrast-forming” aperture.
	The SAED aperture is positioned on the image plane of the objective lens, which is above the immediate lens. This aperture acts as the area-selection tool for diffraction analysis.



`,
`	We know that TEM uses electrostatic and electromagnetic lenses that are different from those found in optical microscopes, but what are these TEM lenses made from? How do they work? 

 As shown in the left figure, an electrostatic lens which can also be called a “unipotential” or “Einzel” lens, is made of two or more circular electrodes, with their negative potentials pointing towards the axis of the lens. 

 In order to generate enough negative potential, high voltage is required, which allows the negative potentials to repel the off-axis electrons towards the optic axis with an unbalanced force. To clarify this action, we can use a 2D schematic of electrons interacting with an electric field, offered by the Lorentz force, to describe the forces experienced by the electron while it travels through the lens.  

The closer an electron is to the electrodes, the more force it will experience. This “unbalanced force” will push the electron towards the optic axis, where the forces are “balanced” since they are pushing on the optic axis equally from every direction –this is why we can say that the deflection angle of an electron is proportional to the distance of that electron from the optic axis. 

- Following the Lorentz force law, the force experienced by an electron traveling through the lens is the product of the electron’s charge, negative q, and the electric field potential vector, V. 

- The direction of motion of the on-axis electrons will not be changed, because of the balanced Lorentz force found at the optic axis. This is how a point source of electrons is focused to a single point on the axis. 

- While they’re simple and effective, we don’t usually use these lenses in the imaging and diffraction systems because of their aberrations – aberrations are lens defects that we will discuss later. So to utilize Einzel lenses in TEM without introducing a lot of aberration into our final images, we end up using them for non-imaging functions, like acceleration/deceleration, and beam manipulation or deflection, which we’ll address shortly.




`,
`	Electromagnetic lenses are what we use to accomplish the precise focusing and defocusing of the beam that is needed for imaging applications. 

- This kind of lens is an electromagnet composed of copper coils wound within a cylindrical yoke of magnetically soft iron. You can see a schematics of the lens in this figure. 

- As electrical current goes through the red coils, a magnetic field is generated, and this field is concentrated by the yoke within the hollow “bore”, which is a term for the interior of the lens. 

- The field is rotationally symmetric, but its strength is heterogeneously distributed – it’s weakest in the center of the lens, and is strongest closer to the bore. 

- Because the strength of the field varies, electrons close to the bore are more strongly deflected than those passing through the lens directly along the optic axis.

- Just like we saw with an ES lens, as the electrons exit the lens, the overall effect is that electrons are focused through the lens axis, resulting in a parallel electron beam being focused into a single spot, which is sometimes called a cross-over. 






`,
`	Following the Lorentz force law as it applies to vectors like velocity and magnetic fields, the force generated by the electromagnetic lens parallel to the optic axis is the product of electron charge and the vector (or cross-) product of the velocity and the magnetic field strength vectors. 

Essentially this means that we can break down the velocity of the incident electrons into two components: V1 and V2. V2 being parallel to the magnetic, or B field, and V1 being perpendicular to it. 

- The direction of force F is given by the right hand rule. 

In the right-hand rule, imagine that you are aligning your outstretched hand North to South down the B vector, with your fingers pointing South, and representing the B field. 
Your vertical thumb represents the velocity vector of the electron, and for a negatively charged particle like the electron, the force vector acting on the electron is projected out of the backside of your hand. 

- With this, we can calculate the magnitude of the Lorentz force using the product of electron charge, the speed perpendicular to the magnetic field, and the magnetic field strength, which is controlled by the amount of electrical current running through the lens coils.

-The electrons have velocity components parallel and perpendicular to the field, as long as electrons are not traveling at 90 degree to the file direction of magnetic field B. So when theta = 0, or they’re travelling parallel to the direction of the magnetic field, there is no force on the electrons, therefore they experience no change in motion. When theta = 90 degrees we find the most force, and the greatest change in direction of motion. This change in motion of course depends on the energy of the electron as well, though, and this is why different lens designs exist for microscopes of different accelerating voltages. 

This Lorentz force causes electrons passing the point P on the optic axis to spiral through the field and intersect the axis again at P’, which when examined over time is seen to be a helical path. This helical path means that even our images will be seen as rotated when compared to the orientation of the object from which they were made. 



`,
`	The working principles of electromagnetic lenses seem much more complicated than those of glass lenses, but what kind of practical differences does that imply for us? The different mechanisms, namely that electromagnetic lenses use the Lorentz force to focus electrons, means that we will see different orientations between the image and the object, due to the helical path of electrons focused by a lens. 

So there are differences in the construction of the lenses, as well as the orientation of the images from the lenses, but: are there any similarities? 


`,
`	To a large extent, electromagnetic lenses are actually the TEM’s (geometric) equivalent of glass lenses in light microscopy. 

- So, the mechanisms of all lenses in a standard TEM on electrons are approximately the same as the mechanisms of a convex glass lens on visible light -- the lens takes all the rays emanating from a point in an object, and recreates that point in an image by focusing parallel rays to a point in the focal plane of the lens. This commonality is why we can say they share similar optical geometries. 

	Their mechanisms differ, mainly, since electromagnetic lenses use the Lorentz force, not refraction. 
	Their focuses are also achieved through different means – we change field strengths in electromagnetic lenses, but glass lenses require that the lens or object move with respect to each-other for focus to be achieved.

Objects are only inverted when imaged through glass lenses.
But objects are inverted and rotated when imaged through electromagnetic lenses. 
	
-	Both types of lenses have imperfections, and these imperfections degrade the quality of any images they form, and this is what we mean when we say they have “aberrations”.
	




`,
`	- Just like lenses in light microscopy, the optics axes of electromagnetic or electrostatic lenses are defined by the principal axis perpendicular to lens surface, passing through its center. 

- The lens plane refers to a principal plane through middles of the lens, and is sometimes called the “vertical axis” in non-TEM optical diagrams. 
- And the focal length is the distance between the focus point and the lens plane.

- The ray diagrams of electrostatic or electromagnetic lenses are analogous to those of convex VL lenses as well. Both types obey the refraction rule of a converging lens, which states that: 

 Any incident ray parallel to the optics axis of the lens will refract through the lens and go through the focal point on the opposite of the lens; 
Any incident ray that passes through the focal point on the way to the lens will refract through the lens and travel parallel to the optics axis on the image side.

All ray diagrams abide by this rule, and it is critical to remember when you are constructing your own. 




`,
`	We have been discussing how lenses bring the scattered electrons into a focused point, but we do not really know how lens can magnify or demagnify an object yet. 

In order to understand the mechanism, we have to understand the lens geometries we mentioned earlier. 

These are described by Newton’s Lens equation, or Gauss’ thin-lens equation. 

- In Newton’s lens equation, the square of focus length is the product of the distance from the focal plane to the object plane plus the distance from the back focal plane to the image plane. 

- In Gaussian thin-lens equations, the inverse of the focal length is equal to the sum of the inverse of image distance and object distance. 

- These two equations appear to be different since they are using different similar triangles in their geometrical approaches to the problem, but they can be used to construct an equation for magnification, where magnification, M, is just equal to v, the image distance, divided by, u, the object distance. 




`,
`	So, based on the Newtonian and Gaussian lens equations, we know that: 
 
If the object is placed between F, the focus length (or the distance between the lens and the focal point), to 2F, twice the focus length then the probe/image will be magnified 

And that

If the object is placed beyond 2F, then the probe/image will be demagnified 




`,
`	Knowing what we know now, let’s think about what is actually happening when we focus an image in the TEM. To see an image in clearly, so in good focus, we must position the image plane so that it coincides with some sort of detector -- camera film, imaging chip, phosphor screen, etc. 
	
	Of course the only way we can move the image plane is by either:

		Moving the lenses, like we do in light microscopy,
		Moving the object, which we do with the TEM stage
		and changing the lens voltage (in electrostatic lenses) or coil current (in electromagnetic lenses)

And, for magnification, we clearly can’t switch to different lenses like in light microscopy -- we instead stack and selectively combine TEM lenses to achieve the same effect. 

Also remember that since these images are being formed in different ways, we will experience an inversion of the image in relation to the object (like we see in light microscopy), AND there will be additional rotation of the image in TEM as well. 



`,
`	It should also be stated here that when we’ve been talking about “strong” or “weak” lenses, we’ve really been referring to the lens current within the coils, shown in red, which we know is used to generate the magnetic field whose force is used to focus the electrons.  We can vary the “strength” of the lens, or the current used to generate the magnetic field. All of this should leave you wondering: how will variations in lens current affect focal length? 

Looking at this equation here, in which focal length is represented by f, and lens current is represented by i. we can see that  the focal length, f, is equal to a constant, K, times V over i squared, where V is the  accelerating voltage of the microscope at the time in question. 

This shows us that short focal lengths are the product of strong lenses. And, as expected, long focal lengths are the product of weak lenses. 


`,
`	Using this equation, we can see that when we hold K and V to be constant, “strengthen” the lens field, or increase the lens current, our focal length gets shorter. And, of course, then, when we “weaken” our lens (i.e. decrease our lens current), the focal length will get longer. 

And, remembering that magnification is image distance divided by object distance, we can imagine how adjusting the currents of two stacked lenses could allow us to magnify or demagnify by changing the image: object distance ratio of the lower lens. 


`,
`	Until now we’ve been treating electromagnetic lenses as if they were ideal – in reality, they are imperfect and do not behave exactly as described. Even though considerable effort has been devoted to ensuring high lens quality, the symmetry of the lens field will be variable due to both: 

	Permanent inhomogeneities that are present from time of manufacture, or arise through use, such as if dust enters the vacuum system and adheres to a pole piece. 

	As well as temporary inhomogeneities, which are usually caused by any magnetism or charging of the specimen itself. 

	Any of these imperfections cause the lens to lose the ability to focus symmetrically. 

As shown in the ray diagram on the right, electrons entering the lens from one direction the lens will be focused more strongly than those entering from the perpendicular direction, causing an asymmetry called, “astigmatism”, found in both glass and magnetic lenses, when the beam, image, or diffraction pattern appear elongated or stretched. 
The word astigmatism, from the Greek word “stigma", which translates loosely to “point”, could be defined to mean, “without point”, or even, “without circle”, which makes sense when we remember that the ideal beam shape should be circular, as shown in the middle image. In the presence of astigmatism, however, the electron beam’s shape will lose its circularity, and be elongated into an oval, as shown on either side of the original beam. This distortion in the beam causes the final image and/or diffraction patterns to be distorted as well. 

Fortunately, unlike some other aberrations, the astigmatism of our lenses can be corrected by devices called “stigmators” which are built-into all modern TEMs.


`,
`	Stigmators are made up of one or more quadrupoles, which, basically, form a lens whose astigmatism can be varied continuously. This is how we use them to correct astigmatism! 

A single quadrupole has four elements, arranged at 90 degrees to one another, all around the beam. 

These elements are used together in two sets, with each set lying on opposite sides of the beam. 
If one set is given a positive value and the other a negative, then the positive elements will attract the electrons, while the negative elements repel the electrons (green arrows). 

The resulting astigmatism (dark red ellipse) from the stigmator cancels out the original astigmatism from the lens (making the beam round: red circle). 

The actual design of the stigmators inside the microscope is - as with the deflection coils - more complicated, and based on a magnetic field. (The field direction and strength shown by blue arrows).

Each stigmator consists of, at least, two of the elements, one mounted above the other and rotated by 45° with respect to each other, since this combination of two elements allows correction of astigmatism in any direction. 
Each of these elements is controlled by one of the Multifunction knobs (MF X, MF Y). 


`,
`	And, in addition to stigmators, there are also deflection coils within the column. Deflection coils play an essential role in the alignment of the microscope and are used for aligning the gun, beam, objective lens, magnification system (where they govern image and diffraction shifts of the beam to the screen center) and detector alignments (governing image or diffraction shifts of the beam to a detector that is situated off the optical axis). Deflection coils are only intended to “shift” or “tilt” the direction of the beam. 


A deflection coil is a set of coils on either side of the electron beam.

 If one is given a positive magnetic field and the other one a negative one, the electrons in the beam will be attracted by the positive field and repelled by the other, leading to a deflection towards the positive coil. 

The actual coils are extended over arcs of 120°. The arcs are used to generate a homogeneous magnetic field, which we then use to control the beam path inside the TEM.  

In general, a TEM has three sets of double deflection coils: the gun coils just underneath the electron gun (or underneath the high-tension accelerator in case of 200 or 300 kV instruments); the beam deflection coils above the objective lens; and the image deflection coils below the objective lens.



`,
`	We can roughly break the TEM down into 4 systems: The probe forming or illumination system, the imaging and diffraction system, the projection system, and any optional “post-column” analytical systems that might be included, but since these are variable we’ll ignore them for now and consider the TEM to be broken into just the top three. 

The top third goes by many names, but we can consider it to be the “beam forming”, “probe forming”, or “illumination” system, and you already even know a bit about this, because that’s where the electron gun sits!

We call the uppermost chunk the illumination system because it’s entirely devoted to shaping that crude “straight-from-the-gun” electron beam into a useful and versatile probe, so none of its lenses are doing anything directly related to forming or magnifying images of our sample -- the illumination system takes the gun crossover as its object, and the modified image of the crossover that we get out of the last lens in the system is passed on to the next chunk. 

The chunk that takes the probe exiting the illumination system as its image is the middle third -- the image or diffraction formation system. I say “or” because it could produce an image or it could produce a diffraction pattern, but more on this later. 

All you need to know right now is that the imaging system deals with the beam immediately before and after the specimen, so it will be manipulating an actual image or diffraction pattern of whatever it is we’ve put in our TEM and passing that along to the last chunk.

The lower third of the microscope, barring the electron energy loss spectrometer (or, EELS, like the fish) at the very bottom, we’ll call the magnification and/or projection system, since, remember, we used the entire beam forming system to create a tiny, tiny probe, and then sent that probe into the imaging system, through an equally tiny area of the sample (or our FOI “feature of interest”), and got an image of our FOI projected into the magnification system. The trouble is, that image is still extremely small, so we have this entire projection system to magnify the tiny image into the macro scale. 

Once it’s magnified, the rest of the projection system projects it onto some kind of surface that will allow us to view the image, either through a phosphor screen that will convert electrons to photons that we can see with our eyes, or through a CCD camera that will allow us to feed the data into a computer. 


`,
`	Since we already know from the last lecture that the electron gun is what generates our beam, we’ll start just below the extractor anode, at the gun lens. This is an electrostatic lens that sits just underneath the extractor anode we talked about last lecture. We control this lens, like all of the lenses in a modern TEM, through a computer running specialized software provided by the manufacturer. In our case, this is what the gun lens controls will look like within the software. For FEI/Thermo Fisher Scientific tools, we see that there is an integer value for the gun lens displayed here, and that we can increase or decrease this incrementally from one to eight.

 As we increase our gun lens setting, we’ll reduce the beam size and beam current, with each whole-number increment (so, moving from 2 to 3, for example) reducing the beam current that comes out of the lens by around 35%. 

Looking at this graphic, this is pretty easy to understand -- at smaller gun lens settings, the crossover generated by the lens is very close to the bottom of the lens, meaning the beam hitting C1 will contain the most possible energy, and we filter out what we don’t want with the C1 aperture.

 As we increase our gun lens setting, the crossover moves up higher within the lens, meaning the beam spreads more and more across C1, so that no matter what size of C1 aperture we insert into its path, there will be more electrons excluded by the aperture, leading to a smaller and weaker beam. 

This might seem strange since we emphasized the importance of having a “strong”, dense beam in the electron gun lecture, but that’s only because we wanted to ensure that we have the option to weaken a strong beam like this rather, than being stuck with a weak beam from the outset. 

And, again, this is the first lens-induced crossover in the microscope, and this crossover is the object that the first condenser lens sees and manipulates, because lenses are just a discrete chain of inputs and outputs, which is sort of counterintuitive when we just took a more holistic look at the optical system.




`,
`	When we’re adjusting the settings of your electron gun, it’s important to remember that the crossover has to be within the lens, and that the position of the crossover is affected by three operator-controlled factors: 

●	The high tension voltage, 
●	The extraction voltage, 
●	And the actual setting of the gun lens itself. 

In short: if the crossover it outside the gun lens, the lens, and by extension the entire TEM will be incorrectly aligned. Furthermore, changing gun lens settings means that the entire TEM will have to be re-aligned afterwards to account for the change. 

Keep in mind, HT and extraction voltages can have effects on the position of the crossover within gun lens, so you must first establish appropriate HT, an appropriate extraction voltage, and then set your gun lens at a setting that is adequate for the previous settings. 
 
Since a change of gun lens settings may decrease overall stability of the TEM, only modify them if you need to correct a misplaced gun crossover, or switch between two modes (such as from TEM to STEM or otherwise). 



`,
`	After leaving the gun lens and passing through the accelerating anode, the beam interacts with two sets of deflection coils that can be seen directly underneath the anode. 

Each set has a certain function:

The function of the first set, the gun tilt coils, is to ensure that the electron beam enters the microscope (or, really the first condenser lens, C1) parallel to the optic axis – this is accomplished by the “gun tilt” alignment, which we can only control due to the existence of these coils. 

The function of the second set, the gun shift coils, is to ensure that the beam goes through the center of the C1 lens – this is accomplished by performing the “gun shift” direct alignment. 

We’ll discuss both of these alignments in greater detail towards the end of this chapter. 




`,
`	Now that we’re out of the gun lens, with a well-placed 1st crossover thanks to correct high tension, extraction, and gun lens settings, the beam passes through properly configured gun deflection coils, emerges traveling parallel to the optic axis, and enters the first lens of the condenser system. 

This system and its relevant software settings are how we control the diameter of the beam via dynamic demagnification, and also how we can improve our beam’s coherence, as well as modulate the beam current. 

We remember that the first aperture in the system was below C1, and that there is an aperture in C2 -- we’ll use these condenser apertures in conjunction with the lenses to eliminate the very divergent (or, high angle) electrons from our beam by centering the aperture around the most coherent part of the beam, ensuring that what we’re working with from here down is as coherent as possible. 

A key thing to know is that if we increase the current of an electromagnetic lens above an aperture, the current of our beam below the aperture is reduced. This is because increasing the “strength” of the lens moves the focal point of the lens, where the beam begins to diverge, higher above the apertures, allowing a larger portion to diverge into and hence be blocked by the diaphragm, thereby reducing our measured current below the aperture! 

Generally, we get the most use out of our condenser system when we’re working at higher magnifications, usually greater than 400,000 X magnification, because we can use them to shorten the focal length of the beam in order to demagnify it into the tiny probe we’ll need to operate at those high magnifications. 




`,
`	So, knowing generally about the condenser system, let’s go over each lens individually -- 

C1, the first condenser lens, serves to demagnify the image of the gun crossover. 
This lens is how we set the “spot size”, which is the smallest beam diameter that will be available to the rest of the system below this lens. 
C1, in conjunction with its aperture will also place an upper limit on the beam current going through the rest of the column. 

So now we know that the C1 lens and aperture, in conjunction with C2 and its aperture, control spot size and can limit beam current, but how can we control the illumination area or the beam convergence angle? 

It turns out that C2 and its in-lens aperture control the convergence or divergence of the beam at the specimen, the diameter of the area on the specimen that is illuminated, and, just like C1, C2 can also set a new upper limit on the beam current for the rest of the system through appropriate lens strength selection and aperture placement.

The sometimes-present C3, which isn’t in our microscope, but can be found in more advanced tools, offers an extended area of illumination -- so if you have a microscope with a third condenser lens, you’ll be able to see a larger area of your specimen, should you desire. 





`,
`	Spot size, as we said, is the setting that determines the minimum probe size that will be available to the rest of the microscope, and that’s controlled by the condenser system. 
In the microscope software, the spot size is represented by an integer value much like the gun lens setting was, in this case the values range from 1 - 11, with 1 being the largest spot, and 11 being the smallest.

We can see in this diagram that if we have our spot size set to 1, our C1 crossover is down very close to C2, so we could say in this situation that C1 is “weakened”, or that the current running through it is relatively low, and that’s how we get that low crossover. Note that we’ve drawn the C2 aperture below the lens, just for convenience, but know that in reality this is within the lens.
 This weakened C1, with its very low crossover, means that all of the beam passing through the C1 aperture hits C2 and is permitted to pass through its aperture without any restriction, hence we have the highest beam current and the largest spot size when we’re operating at a spot size setting of “1”. 

If we take a look at the rightmost example, which is illustrative of a much higher spot size setting, we can see that C1 is strong, or “excited”, so we’ve got a relatively high lens current at C1 that is giving us a high crossover above C2, and C2 itself is weakened, meaning a large portion of the beam is blocked by the C2 diaphragm and therefore we have a decreased beam current. 

If this seems a little abstract, take a second to think about the practical implications: 
If you’re working with large, conductive structures at low magnifications, would you want a high gun lens setting?

 Well, a strong C1 and weakened C2, along with the heavy aperturing of the beam that would be occurring would make your probe small and would reduce its current substantially.  Both of these would actually be very inconvenient if your structures of interest are large, because you would only be able to see the tiny area afforded by your probe. If you tried to get around this by increasing your beam diameter, by turning your intensity knob, you would spread your beam, but since there is a relatively low current in your spot you would still be unable to see or gather useful data from your structures because the beam would be so weak that it might even be invisible to your eyes.

So for large structures or low-mag work, it’s important to remember to choose a low spot size so that you have a suitable minimum beam diameter and enough current density to work with. Conversely, it’s also important to remember to choose higher spot sizes when you’re working at extremely high magnifications so that you have a suitably small probe! 



`,
`	In the last example we mentioned a previously undefined control: the intensity knob. This is an important thing to be aware of, because it’s how we control the diameter of the beam at the specimen. This is a physical knob on the microscope controls that sends instructions to the microscope software, telling it to alter the current running through C2 depending on which way we turn it. 

We see that if we were to increase our intensity, we would be strengthening C2, pulling that crossover up, which would in turn give us a broader beam entering the rest of the system and, ultimately, give us a larger area of illumination at the specimen. Now, of course, if we’re changing the height of the C2 crossover we’re also changing something other than just the diameter of the beam at the specimen -- we’re changing the convergence angle as well. 
This is because every lens has a focusing action, so even though we’re creating a broad beam at C2 to send through the rest of the system, the lenses below it will still focus it into a crossover, so it will still converge down to a point somewhere; the intensity control will affect this, with more intense, small beams necessarily being more convergent, and less intense, broad beams being more divergent. 

And, since we’re altering the size of the beam without the influence of an aperture, the change in size means there will be a related change in electron dose at the specimen, because our beam current is fixed! So if we have a very broad beam, we’ll have a lower dose, since the fixed current is distributed across the entire sample and beyond. But, and you probably see where I’m going here by now, if we have a very focused beam, all of the available beam current is focused into that spot, meaning we’ll have a much higher electron dose there, which as we know can cause contamination to build up on the sample, or, worse, damage the sample. 




`,
`	The beam deflection coils facilitate beam tilts and beam shifts for imaging, diffraction, and microscope alignments. They also act as scan coils for rastering the beam in STEM mode. 

- A beam shift comes about by deflecting the beam through an angle g by the upper coil, and then doing the reverse (-g) with the lower coil.
In this case, both coil currents are the same.

- Since the electron beam comes out from deflection coils parallel to the optical axis and must go through a single point in the back-focal plane, shifting the beam should have no effect on the location of the beam in the back-focal plane.

- A beam tilt comes about by deflecting the beam through an angle g with the upper deflection coil, and then deflecting by -2 g by the lower coil.  In this case, the current of the bottom coil is greater than that of the top coil.  
A beam tilt will result in a beam shift in the back-focal plane, but should cause no shift in the image plane.




`,
`	So, we’ve got C1 and C2 setting our spot size, and C2 giving us control of intensity, so by now our beam is probably sufficiently small for atomic-scale imaging, right? Wrong! 
It turns out that, for our convenience, we frequently operate in “microprobe” mode, which means we’re using the minicondenser lens to purposefully magnify our probe as it exits the main condenser system, which you can see on the left in this diagram. 

Notice how the small probe is entering the minicondenser, but is then spread out by its lens at the top there, and the final probe we get coming out is actually larger than what we sent in!
 Why would we do this if we’ve already invested so much in demagnifying our beam? 

Thinking back to what we said about illumination area, it sort of makes sense that we’d want a large probe at first to make it easier to find our way around our sample, or to take low-magnification images. So we have the minicondenser there to magnify our probe for us and make these things easier. 


If we want a smaller probe for higher-mag work, all we have to do is enter “nanoprobe’ mode, which will switch the minicondenser lens optically “off” (even though, to keep the column stable,  it’s never actually off -- turning it “on” or “off” just changes the direction the current flows through it; the same current is flowing all the time in order to avoid temperature swings and field fluctuations that would interfere with our alignments). When it’s optically “off”, the probe coming into the system is not affected by the topmost lens, and instead can enter a weakened objective and continue down the column as a much finer nanoprobe. While on, the minicondenser lens field is reinforced by the field of the objective lens in the microprobe mode.








`,
`	And without turning off the minicondenser lens, we would not be able to perform STEM! 

During the formation of nanoprobes for STEM the upper polepiece of the objective lens acts as a 3rd condenser lens (C3). 

C1 is strengthened so that the image of the gun crossover is well above C3, and C2 is weakened or turned off. 

The minicondenser being powered down allows for this large demagnification of the C1 crossover. 

The beam deflection coils will also begin to act as scanning coils at this point, and, again, are how we raster the beam over the specimen. 

You can see a typical example of the optical configuration for STEM mode at right. 


`,
`	

The main function of these lenses and apertures is summarized in this table.

>The gun lens, and the first condenser lens control the beam current and final probe size.
The main role of C1 is to demagnify the image of the source, and we change this demagnification via the Spot-Size setting on the microscope controls. 
Increasing the current in the gun lens and in C1 reduces the beam current and probe size -- so, increasing the gun lens setting in the software leads to increased demagnification of the source, and to decreased current in the beam. This means that increasing the gun lens setting restricts the beam current available to the rest of the system below it. 

>The degree of beam convergence at the specimen, which we see as the size of the illuminated area, is governed by C2 (and C3 in a three condenser lens system).  We modify this with the Intensity knob. 
	
>The aspects of probe formation controlled by the minicondenser are mode-dependent – that is, TEM illumination uses the Microprobe setting (when the minicondenser lens is “on”), and fine-probe modes like STEM and nanodiffraction illumination use the Nanoprobe setting (with minicondenser lens “off”).  In Microprobe, the illuminated area and probe size are five times larger than in Nanoprobe, because the convergence angle in Microprobe is five times smaller than in Nanoprobe.   

>We see that the upper objective lens also contributes to probe formation – how is that? 





`,
`		The objective lens is the most important lens in the whole microscope.

	But we see that if the magnification is large (and in practice, it is generally a factor of 20-50, then the range of angles of rays impinging upon the first image plane is very small relative to the range the angles entering the object lens from the specimen. Of course, other lenses below the objective lens (which are in the projector system) also magnify, and as the magnification increases, then the range of angles that each subsequent lens must deal with is reduced and reduced.

	Because aberrations are worse at high angles than at low angles (with haven’t proved this, but it is generally true), then the lens which will be most affected by aberrations will be the objective lens, because it has to deal with biggest range of angles in the whole microscope. That means that our biggest single concern in electron microscopy should be to make sure that the objective lens is perfectly aligned and stigmated. In fact, if the objective lens is mis-aligned, the errors it introduces will so huge that no matter what we do with the other lenses, we will never be able to correct the error.



`,
`	Before we can understand its function, and role in probe formation, let’s get a bit of historical context, since this is a very critical piece of the optical system. 

Historically, three objective systems have been used in a TEM, and you can see these three here: 

-the conventional objective lens, 
-the symmetrical condenser-objective lens developed by Riecke and Ruska (in 1966), 
-and the twin lens design, which is shown twice; once in “microprobe” mode, and once in “nanoprobe”.


`,
`	- In the conventional objective lens, the specimen occupies 1/3rd of the lens gap, and the objective aperture is located in the second third. This type of objective lens has a number of disadvantages:

	- Since the space below the objective aperture cannot be used to accommodate a tilting specimen, and the conventional lens suffers from either a limited tilt range, or an unnecessarily wide gap, with the latter deteriorating the Cs and Cc, and thus the resolution.

	- The lack of a strong objective pre-field in the conventional lens design doesn’t allow for small spot sizes, so Scanning Transmission Electron Microscopy, Microanalysis and Convergent Beam Diffraction are severely hampered.

	- The asymmetry of the lens also results in a very restricted view of reciprocal space in the diffraction pattern, as the pattern occurs too high above the lower objective pole piece.

	- The strongly asymmetrical magnetic lens field produces a rapid change of the lens parameters, making it crucial to always work at the same objective-lens current if you want reproducible high-resolution results, which you should! 

Even though you will probably never use a TEM with a conventional objective lens design, the ability to raise and lower the specimen within the lens remains a daily necessity in TEM. 


`,
`	The limitations of the conventional objective lens led Riecke and Ruska to develop the symmetrical condenser-objective lens in 1966. 

This lens design is compatible with a side-entry, so-called “eucentric” specimen stage, making it easy to work at a fixed position in the lens. 


- In this arrangement, the specimen is located in the middle of the objective-lens pole pieces, with the objective aperture below it, just above the lower pole piece. 

- This lens reduces the pole piece gap and retains the ability to tilt the specimen to high angles, which is desirable.

- This reduction does have consequences, however. For example, 
 
	>The lens parameters far from the center are slow to change. 
	>The lens also has a large diffraction angle, and provides only small spot sizes. 
	>And the beam cannot be spread very far. 
 
-These consequences are somewhat limiting when it comes to TEM -- In fact, the maximum area that can be illuminated is typically around 1 micrometer, which severely restricts the field of view at lower magnifications. 

-Additionally, defocusing of the beam is limited by spherical aberration effects of the objective pre-field, which will give us poor coherence across the field of view as a whole.




`,
`	In the TWIN-lens design, however, the disadvantages of the original symmetrical condenser-objective lens are no longer present, and an entirely new lens has been added. 

The minicondenser lens, incorporated into the upper pole piece, can be switched 'optically' on (referred to as the microprobe mode, shown on the left), in which case a cross-over is created at the front-focal point of the objective-lens pre-field, which will give us a wide field of view, and coherent illumination on the specimen. 

When the minicondenser lens is switched 'optically' off, the lens is in the nanoprobe mode (shown on the right), and the performance of the TEM in this mode is similar to the original Riecke-Ruska design. 




`,
`	The image deflection coils, situated below the objective lens, have many uses.

	They shift the image and the diffraction pattern, to align various magnifications, camera lengths and modes (such as TEM and STEM),

	they correct image or diffraction-pattern movement caused by the objective and diffraction stigmators, respectively,

	 and set the Detector alignments that move the image or diffraction pattern to a detector that is situated off the microscope axis (STEM BF/DF, TV). 

	In addition, the image deflection coils can be used coupled to the beam deflection coils in a number of instances, for example during image shifts. 


`,
`	The Diffraction lens is the lens immediately beneath the objective lens, and above the intermediate lens. 

In diffraction mode, the diffraction lens serves to focus the diffraction pattern via
In LM mode, the diffraction lens determines image focus

The diffraction lens is able to control image focus in LM mode because the objective is automatically turned off. 

All focusing actions of the diffraction lens can be controlled through the focus knob on the microscope user interface panel. 






`,
`	Between the diffraction lens and the projection lens is the intermediate lens.

We use this lens to switch between image and the diffraction modes.
Increasing the lens current results in switching a TEM from the diffraction mode to  image mode, and decreasing the lens current leads to switching from the image mode to diffraction mode.

In modern systems, this is performed simply by pushing the diffraction button on the control panel.




`,
`	The Projector lenses are used for final magnification within the TEM.

We control the current in this lens with the aptly-named magnification knob. This is how you’ll change your image magnification in image mode, and camera length in diffraction mode.

 Similar to light microscopy, the total magnification is the product of the magnifications of all of the lenses of the system – so, here, total magnification is the product of the individual magnifications of the objective, diffraction, intermediate, and projection lenses.
In diffraction mode, instead of using magnification, we use the effective distance from the sample to the detector, or camera length, to measure the distances recorded in diffraction patterns, the total camera length in a projection system is given by the product of objective focal length, individual magnificactions of the diffraction, intermediate, and projector lenses



`,
`	So, to briefly summarize this table: We use our illumination system to control: beam demagnification, spot size, convergence, intensity, and the switch between micro- and nano-probe modes. The lenses of the illumination system are the gun, C1, C2 & possibly C3, as well as the minicondenser.  We control C1 with the L3 and R3 buttons, which incrementally decrease and increase spot-size, respectively. C2 is controlled by the intensity knob, which we use to determine the convergence of the beam on the specimen. 

The condenser stigmator is the only stigmator within the illumination system, where we also find the gun and beam deflection coils. The apertures available for use in this system are all of those associated with a condenser lens. 

The imaging and projection systems control imaging functions, diffraction functions, and magnification. Its lenses are the objective, diffraction, and intermediate, as well as the two projection lenses. We can control the intermediate lens via the diffraction button, and we can control the behavior of the projection lens with the magnification knob. 

There are two stigmators in this system: the objective stigmator, and the diffraction stigmator. The only deflection coil is the image deflection coil. Apertures in this system are paired with the objective and SAED lenses. 

`,
`	Everything that we have learned today is what we need to understand how to begin to craft optical conditions within the TEM to suit applications and experimental needs. Per discussion in the introduction chapter, TEM is one of most versatile electron microscopes for nanomaterials or device characterization because of all of the different modes that can be used for analysis. The two most common modes are imaging and diffraction mode.

In imaging mode, the critical lenses are the objective lens and the intermediate lens. The objective lens is used to form a diffraction pattern in its back-focal plane and the objective aperture, in combination with a stronger intermediate lens, is used to select the proper beam needed to form bright or dark field images on the viewing screen or electron detector. When a transmitted (also called direct) beam is selected to pass through the objective aperture, a bright field image is formed. However, if one or more diffracted beam are selected to pass through the aperture, a dark field image is generated.

 In diffraction mode, a selected area aperture may be inserted into the image plane of the objective lens, which is above the intermediate lens, so that the diffraction pattern can be formed from a specific region of the specimen with a retracted objective aperture. The object plane of the intermediate lens is coincident with the back focal plane of the objective lens.  More application examples of lens and apertures are discussed in the videos pertaining to different modes.



`,
`	The lenses in a TEM are not always functioning as they should be, though. Over time the lenses will “drift” and become misaligned. We correct misalignments in order to optimize the performance of the microscope, and we do this using the “direct alignments” included in the microscope software. These are procedural corrections for the electro-magnetic alignment of the beam with the optical axis of the optical elements, including: 

	The electron gun, aligned with the gun tilt and gun shift direct alignments,
	The illumination system, which is made symmetric and homogeneous using the beam tilt and beam shift alignments,
	And the imaging system, where the diffraction shift, image magnification, and camera length can be calibrated
	
We will also have to correct the calibration of deflection coils and lenses, which we accomplish with the pivot point direct alignment. 

Not all of the routine alignments we’ll have to perform are electronic, though! Each time we insert an aperture, we’ll have to mechanically adjust its position within the column in order for it to functions as intended. We’ll have to do this with all apertures: 
	Those associated with the condenser lenses,
	Objective,
	And SAED.

 
And, once we’ve performed these other alignments, we’ll have significantly changed the electronic state of the microscope and will probably notice the presence of astigmatism, as well as comma. We can correct comma with the relevant direct alignment, and we can correct astigmatism in the afflicted lenses by running the relevant stigmator alignment for the condenser, objective, or diffraction lens. 


	





`,
`	- We mentioned that the ability to adjust the vertical position of the specimen within the objective lens fields was critical – this is actually because all set-up, calibrations, and alignments on TEMs are based on this reference position. So for everything to work as intended, we need to preform all of our own work with our specimen at this plane, called the Eucentric plane, as well. Doing so will allow the objective lens current to remain fixed, so we know our results will be closer to being accurate and reproducible. 

-	In a twin objective lens, the eucentric height, is defined as the plane exactly between the upper and lower objective polepiece fields.
 
-	At eucentric height, the area of interest stays centered when the specimen is tilted about the tilt axis. When the specimen is not at eucentric height, proper image focus will require an objective lens current that is sub-optimum, which will affect:
	
	●The accuracy of displayed effective magnifications and camera lengths (the objective lens not only focuses the image, but also contributes the largest magnification of any lens in the system; strong changes in objective lens current change this magnification and thereby also the final magnification and camera length).
	●Proper alignments.
	●Stage drift, causing it to move away from the optic axis when the specimen is tilted
	●Image drift, causing blur in gathered images.

- Practically, there are four different methods to bring a specimen to eucentric height – to learn how to bring a specimen to eucentric height, follow this link. 


`,
`	This slide is a video showing the procedure for bringing a specimen to eucentric height. 
`,
`	It is important to have the C2 aperture centered before checking or carrying out any other alignments. The purpose of the alignment of C2 aperture is to make sure that the aperture is centered on the optic axis. The adjustment uses the screen center as a reference point. First, bring the focused beam to the center of the screen, then overfocus and spread the beam to fill the larger inner circle. Finely adjust the aperture position so that it is centered on the screen. As shown in the figures, when C2 aperture is centered, the electron beam should remain centered as we sweep through focus back and forth from under and over focused conditions. 


`,
`  	This slide is a video showing the procedure for centering the second condenser aperture. 
`,
`	The idea of the gun tilt alignment is to make the beam travel parallel to the optic axis, since this will allow us to use all of the electrons emitted from the source. It is ESSENTIAL for sufficient beam intensity and condenser astigmatism correction. The alignment is performed through changing the operating currents of the gun deflection coils

The purpose of the gun shift alignment is to make sure that the beam movement that occurs when switching between spot sizes is minimal. It is ESSENTIAL for minimizing movements between different spot sizes and for having the beam correctly aligned along the optical axis for all spot sizes

All gun tilt and shift alignments are performed through changing the current of the gun deflection coils. Gun tilt pivot point is used to change the current ratio of the upper and lower coils to avoid gun shift occurring during gun tilt.

For more details on these procedures, please watch the Direct Alignment lab video. 


`,
`	- A pivot point is simply a point around which the beam will pivot (like a seesaw on a playground). 

- The alignment of the pivot point determines the relationship between the two coils used to manipulate the beam.





`,
`	Double deflection coils are capable of two completely independent actions: a tilt and a shift.
These two actions should be decoupled, that is, when a shift is intended, only a shift and no tilt should occur (a pure shift) and vice versa (pure tilt). 

Examples of the importance of pure shift are:

• In high-resolution imaging, where a beam tilt would undo all the effort spent in correctly aligning the objective lens;
• In STEM, where a tilt in addition to the beam shift will change the magnification;
• In TEM dark-field imaging, where a beam shift with an additional beam tilt would change the incident beam direction and thus the nature of the diffracting condition.

Because of the importance of pure shift and pure tilt, considerable effort is spent correctly aligning the deflection coils by means of setting “pivot points”.

The purpose of aligning the pivot points of deflection coils is to ensure that the beam tilt and beam shift functions are “decoupled” 

Makes the beam jump between two tilt settings. If the pivot points are wrong, you see two beams separated laterally: just two blobs of intensity on the phosphor screen. 

It is then a simple matter to adjust the two correction knobs (which may well be the multi-function knobs again) until the two beams are coincident. 

The correction knobs adjust the ratio of excitation of the two sets of deflection coils. There are two ratios, because sometimes the x- and y- coils have cross-talk between them as a result of residual misalignment and the rotation effects of the objective pre-field. Don’t worry about details: just get the beams coincident. You have to do this twice – for both x- and y- tilts.



`,
`		Adjusts the lens current so that the center of the lens field corresponds to the actual center of the lens.  

	If the field is off center, electrons will be focused off axis, causing the image to rotate as you change focus.

	A common means of rotation centering involves varying (wobbling) the voltage of the gun. The beam tilts are then adjusted to ensure that electrons remain on axis through the lens as their energy varies

	Current and voltage fluctuations should not produce a image shift or defocus the image once the rotation center is well aligned.  The beam should pass through the axis of rotational symmetry of the objective lens.  This is the same idea as aligning the incident beam to the optical axis.  

	Another benefit of this procedure is that, since lens aberrations are less distinct near the optical axis, the effects of all lens aberrations are lessened slightly.

	In the diagrams below, you can see a mis-aligned objective at left, and one whose lens field is well-aligned with the physical lens at right – notice the asymmetry of the misaligned lens, whose image is projected at a skew compared to the even and concentric appearance of the well-aligned lens’ beam. 





`,
`	➢	In spherical lenses, different parts of the lens surface exhibit different degrees of magnification, or different focal lengths of electron paths with different angles of incidence
➢	Each concentric zone, or “different part” of a lens displaying different behaviors forms a ring-shaped image called a “comatic circle”
➢	The existence comatic circles causes increasing blurring in the image plane of off-axis objects,
➢	And results in changes in magnification with changes of aperture
➢	Thankfully this is generally eliminated by proper lens alignment


➢	To avoid coma, we must make sure that the beam is traveling along the optical axis of the objective lens

➢	And, to do this, we must wobble the incident beam and minimizing focus difference



`,
`	Performing the coma-free alignment is crucial during HRTEM – you should check and, if necessary, correct it before taking an image if you have navigated to a new specimen location. 

	The effect of coma aberration in HRTEM images was originally demonstrated by Zemlin using a “diffractogram tableau”, that is a set of the diffractograms rotating the azimuth of the beam tilt direction. 

	After this study, a variety of alignment procedures have been proposed

	These can be categorized into four methods: 
	Beam-tilt-induced astigmatism (TIA) method 
	Beam-tilt-induced focus change (TIF) method
	Beam-tilt-induced image displacement (TID) method. 
	Coinciding the bright-field spot with the center of caustic curve (or the aberration-free point) as observed in an underfocused image


`,
`	If we look at the work of Kimoto et al., we can understand this process a bit better: 

At left, we can see schematics of (a) electron trajectories, (b) an image on an observed image plane, and (c) the electron beam positions in underfocused imaging. Transmitted (i) and diffracted beams (ii–iv) form (i) a bright-field spot, (ii) a caustic curve, (iii) an aberration-free point, and (iv) background. The positions of (ii) and (iii) are not changed by tilting the incident beam. The position of (i) moves according to the incident beam angle. Alignment can be done to make  the bright-field spot correspond with the center of the caustic curve (or the aberration-free point).

At right, we can see underfocused caustic images with the incident beam axis being varied from 0 to 10 miliradians. The specimen is an amorphous carbon (contamination). Defocus is about 5 mm.


`,
`	Here we can see an example of the effects of the coma free alignment: 

At left and right are two images taken of an amorphous specimen while the objective was purposefully misaligned. We can see the asymmetry in the inset fast-Fourier transforms, as well as the distortion in the images when they are compared with the central, well-aligned image and the corresponding symmetrical FFT. 


`,
`	This slide is a video showing how to perform the TEM direct alignments. 
`,
`	As we’ve mentioned, each lens system has its own associated stigmator. Correcting astigmatism in a lens with a stigmator is known as “stigmating” or “stigmation”. The corrections for the lenses are all carried out using the multi-function X and Y knobs, and the alignment is activated through the software. Condenser stigmation is covered in our lab video series. 


`,
`	In our Tecnai, and in the OEMP TEM simulation, we can choose from:

The condenser stigmator, 
The objective stigmator, 
And the diffraction stigmator. 


- As we would expect, the condenser stigmator is positioned at the end of the condenser system, so just below C2. Its job is to ensure that the beam exiting the condenser system is a circular as possible, and we know that condenser astigmatism has been corrected when we see that the beam remains circular as we vary its intensity with the intensity knob. 

- The objective stigmator is below the objective lens. Astigmatism of the objective lens causes image distortion in high magnification images and low-angle diffraction patterns, and its correction can be verified in a few ways. 

- The diffraction stigmator is found below the diffraction lens, and it will correct astigmatism in our LM images and diffraction patterns.  Correction of astigmatism can be checked by making sure that the crossover image (also called the caustic image) of the diffraction lens symmetrical. 





`,
`	Here we can see an example of a beam with and without the presence of condenser lens astigmatism, as seen in the TEM simulator. The leftmost “stigmatic” image is more USA-football like than circular. Even though this is astigmatism of the probe, this will degrade image quality. 


`,
`	This slide is a video showing the procedure for the correction of objective lens astigmatism. 
`,
`	And here we can see the effects objective lens astigmatism on the appearance of our images.

 Notice the bi-directional lines in the astigmatic image, which are traced in red for easier identification, compared to the relatively random dispersion of apparent texture in the corrected, therefore stigmatic image. The difference in image quality before and after stagnation is an easy to see reminder of why it is important to check ALL lenses for astigmatism, rather than just the condenser where it may be more obvious. 


`,
`	1. Can we consider convex glass lenses to be analogous to magnetic TEM lenses? 

2. Where does the analogy begin to break down? 

3. Why? 

4. Name the components of a magnetic lens and state their functions. * 

5. What force acts on an electron in a magnetic field? * 

6. Describe the action of the lens field on electrons. How does this lead to aberrations? 

7. Why do we use apertures in TEM? *

8. After drawing a ray diagram of an over-focused beam impinging on a specimen,  
how would you describe the strength of the objective lens? The focal length? 

9. After drawing a ray diagram of an under-focused beam impinging on a specimen,  
how would you describe the strength of the objective lens? The focal length? `
]

let ch4SpeakerNotes = [
'	 There are no speaker notes on this slide. ',
'	  The additional references we used during the creation of this lecture were:   M. A. O’Keefe et al.’s “HRTEM imaging of atoms at sub-angstrom resolution” as published in the Journal of Electron Microscopy volume 54 issue 3, 2005; pages 169 - 180, as well as M. A. O’Keefe’s “Seeing atoms with aberration-corrected sub-angstrom electron microscopy” as published in Ultramicroscopy vol.108, issue 3, February 2008 pages 196 – 209.   We also referenced D. Smith’s article “Ultimate resolution in the electron microscope?” From the materials today microscopy special issue in volume 11, supplement, pages 30-38 from 2008, and R. Ubic’s excellent introduction to electron microscopy pdf.    ',
'  	We’ll start off the lecture with some questions to consider, and then we’ll move in to an introduction to resolution. After it’s been introduced, we’ll go over the basics of resolution in both theory and practice. We’ll discuss three prominent types of aberration: diffraction, spherical, and chromatic; and we’ll see how these can degrade our resolution.   Then we’ll learn about how electron probes are formed and how we can calculate the diameter of the probe, even in the presence of these aberrations. We’ll see how brightness and the convergence semi-angle influence the minimum attainable probe size, and we’ll see how that minimum probe size influences resolution. We’ll then talk a bit more about the convergence semi-angle, including how to measure it, before the lecture concludes with some self-assessment questions.    ',
'	  So, as you can remember, the resolution of the TEM has increased rapidly since its development in the 1930’s. But, what was behind this “resolution revolution”? What is resolution in theory? In reality? Why is it important? What factors control it in practice? And how can we optimize it during our experiments?     ',
'	  As usual, here are a few questions that you can keep in mind as you progress through this lesson.   What is resolution in a TEM? We can think of it in terms of the clarity of an image, but is that really what resolution is? How do the practical concerns we face when dealing with resolution differ from the theoretical?   What is critical for practical TEM resolution? That is, what factors could easily affect resolution?   And, once we know what factors affect it in practice, how can we improve resolution?   ',
'  	And, as you’ll remember from chapter 2, our motivation for using electrons as our illumination source is the fact that they can be accelerated to extremely short wavelengths, which allows us to image very small objects with very high resolution.   So, we use the TEM for its resolution, effectively. This is because the characterization of nanomaterials can require the examination of many aspects: size, shape, structure, chemistry, crystallography, etc.   And, due to the tiny size but great complexity and diversity of nanomaterials, in order to characterize them fully we will need to rely on high resolution imaging, since it is the only way we will actually be able to “see”, or otherwise gather morphological data from the material.   Higher resolutions also allow for the resolution of lighter elements (O, N, etc.) that could not traditionally be resolved without aberration correctors. This increased elemental discretion allows for fuller understanding of the complex chemical structure of a sample!   Spherical and chromatic aberration correctors have been instrumental in this resolution improvement, allowing us to directly observe lighter elements in S/TEM lattice fringe images.   ',
'	  In general, when we talk about resolution, it refers to the closest distance between two points on the object. In TEM, this refers to the minimum distance between these two points at which they can be distinguished as separate in the TEM image.   In many texts this is called “the minimum-resolvable distance of the object”. Practically, two resolution terms are used by the TEM manufacturers: Information limit and line resolution. The information limit of resolution is defined in terms of the attenuation produced by the envelope functions, including mechanical vibrations. This information limit is also called instrumental resolution. The cut-off is usually taken as e to the -2 (i.e. ~13.5%). The line resolution also called lattice fringe resolution is the finest spacing of the fringes visible in the images, formed by the interference of diffracted beams. It indicates the overall instrumental stability but not of the meaningful information about local specimen details  Resolution has two facets: probe size, and the detector resolution. This detector resolution is governed by the quality of the detector itself, as well as the probe current density of our electron beam.   The question is how we can quantify the resolution? Is there any criteria?  Remember from the last lecture that when we’re working in TEM mode, the objective lens is critical for TEM image and diffraction formation because it generates the first intermediate image, the quality of which determines the resolution of the final image. The objective lens forms an inverted initial image, which is subsequently magnified. The design, quality, cleanliness, and stability of the objective lens are all things that can cause differences in resolution from one TEM to another.  In STEM mode, resolution is determined not by beam size, but instead by the probe current density, since a greater current density will mean more signal from the specimen reaches the detectors.      ',
'  	In optical microscopes, three different resolution criteria are used to describe the resolution of an optical microscope: Rayleigh’s, Abbe’s, and Spurrow’s criteria. The mathematical description of optical resolution was laid down separately by Lord Rayleigh and Ernst Abbe in the latter part of the 19th century. Although both approaches lead to essentially similar conclusions, each has a somewhat different way of describing the underlying rules of resolution.  The Rayleigh criterion states that two points can just be resolved when the first diffraction minimum of the image of one source point coincides with the maximum of the other. The intensity of the resultant wave drops by about 15% in the center, which is just sufficient for the two points to be resolved. Distances less than this are unresolvable. This minimum resolution is often called the diffraction barrier.  The resolution of a microscope is a function of diffraction of the radiation used, the wavelength of the radiation, perfection of the lenses, and scattering events in the sample.  The example of diffraction through a circular aperture is of great importance because the eye and many optical (including electron optical) instruments have circular apertures. All microscopes diffract radiation because, even if an aperture is not deliberately introduced, the physical dimensions of the lenses are restricted and so act as apertures themselves. When light from a point source passes through a small circular aperture, it does not produce a bright dot as an image, but rather a diffuse circular disc known as the Airy disc† surrounded by much fainter concentric circular rings sometimes called a jinc distribution, which we have already discussed. Most of the intensity (84%) is contained in the central disc which has a diameter of d1. If two points are images, each of them will form an Airy disc.   Moving the objects closer together will move the intensity patterns together until they overlap. As the overlap increases, a condition is reached at which the two points cannot be distinguished and appear like a single point.   ',
'	  The Abbe criterion takes a complementary approach to describe resolution. Consider a diffraction grating that splits the incident light into three diffracted orders: the (undiffracted) zeroth order and the +1 and –1 diffracted orders. If the grating is coarse, then the diffracted orders are diffracted through a small angle and pass through the objective lens L1, forming diffraction-limited points in the so-called Fourier plane. These are then re-imaged by lens L2 to form an image on the eye or camera; however, if the grating is very fine, these diffracted orders are diffracted through such a large angle that only the zeroth order passes through L2 and the image that is formed shows no trace of the grating.   Both the Rayleigh and Abbe criteria are often referred to as the “diffraction limit” of microscopic imaging, and they provide convenient ways of thinking about many of the techniques used to achieve resolution beyond the diffraction limit.  In either case, it is clear that, since rd is inversely proportional to sin alpha (and therefore to alpha), the resolution is governed by both wavelength (which must be small) and the size of the aperture (which must be large). The medium is necessarily vacuum (n ≈ 1) for electron microscopy, but resolution can also be improved by changing the medium to one with a higher n (e.g., water has n = 1.33, silicone oil has n = 1.6) where possible. A good optical microscope may have nsin alpha = 1.58 (oil submersion lenses), resulting in a resolution of about 0.2 micron. Using only violet light (lamda = 400 nm), alpha = 80 degrees, and n = 1.6, the very best resolution possible from an optical microscope is 150 nm , which was already achieved in the 19th century. The resolution of optical microscopes remains diffraction limited.  In an electron microscope like the TECNAI F20 TEM, the wavelength of the electrons, as we have already seen, is 0.00254 nm, but alpha is quite small (approx. 0.1 mrad), giving us an ultimate resolution of 0.015 nm. This distance is less than the radius of most atoms; however, this theoretical limit assumes perfect lenses and focusing, which are never achieved in practice. 0.2nm   ',
'  	Theoretical resolution is extremely important in TEM, so it would be useful to know how we quantitatively measure the resolution of a particular TEM.   First we need to know that in all optics, the Rayleigh criterion, developed by John William Strutt (3rd Baron Rayleigh, hence the name) defines the ability of the eye to distinguish “two self luminous incoherent point sources” -- so, the ability to see two incoherent point sources of light being examined without any optical imperfections.   In the leftmost diagram, rays diverge from a point-object and enter an objective lens with half-angle of acceptance alpha. The lens then focuses the rays, which are limited by the aperture, shown in blue. The aperture serves as an “information limit”, since we can only extract specimen information from the portion of the beam that has passed through the aperture. This is complicated by the fact that diffraction occurs around the edge of the aperture, meaning the point object can never be imaged as a purely point-like object – it will always have some amount of diffuse electron intensity blurring its edges due to this diffraction.   In theory this is all described mathematically as r, the diameter of the point-object’s blurred, disc-like image, is equal to d, the diameter of the lens’ image of the point-source, divided by two. Or, equivalently, by 0.61 times lambda (the wavelength of the light) all over mu (the refractive index of the medium) times the sin of alpha, the aperture semi-angle.   Effectively, this means that since electrons passing through a lens will experience a difference in focusing action based on collection angle, a point on the object will be seen as a disk in an image created by any real, aberrated optical system.   ',
'  	But that is the nature of things, so we simply take the Rayleigh criterion into account when we calculate our theoretical resolution.   Recall that we can use Abbe’s equation for theoretical resolution in a visual-light microscope to describe resolution in TEM, but that it must first be modified to account for the differences between the two systems. We do this by using de Broglie’s formula, in which h, Planck’s constant, divided by lambda, the wavelength, is equivalent to the product of the mass, m and velocity v of an electron.    So from de Broglie’s work (and the physics of TEM that we already know), we can infer that the wavelength of an electron in our TEM is a function of the accelerating voltage we apply. Like we saw during the electron source lesson, we have to incorporate relativistic effects into our calculations, since we are using accelerating voltages greater than around 100 kV, which will accelerate our electrons to a significant portion of the speed of light, between 0.5 - 0.75 c.  In light of this, we can correctly express wavelength in terms of Planck’s constant over the mass and relativistic velocity of the electron as determined by the accelerating voltage, U.  The resulting equation tells us that a value for wavelength can be found by dividing the constant 1.226 by the square root of U ( 1 + 0.9788 times ten to the negative six U).  In this form, it is very easy to see that as we increase our accelerating voltage we get a shorter wavelength.  Feeding this equation for relativistic wavelength into Abbe’s original equation for VLM, given on the left in the bottom equation, we get the version of the equation applicable to TEM, which we will consider to be “Abbe’s equation” from this point on.   Now we can see that the theoretical resolution, d, is equal to a new constant 0.74786 divided by the product of the numerical aperture eta sin(alpha) and the square root of U times (1 + 0.9788E -6 times U).  We can use this equation to calculate the resolution of simplified optical systems – for example, the calculated resolution of a 200 kV TEM is less than 0.1 nm, about 0.09 nm.	  ',
'  	Atom–atom spacings within dumbbells for seven compounds with diamond cubic or zinc blende structure plotted as a function of lattice parameter for the four zone-axis orientations ([1 1 2n] n = 0, 1, 2, 3). Resolutions needed to image atoms within pairs in [110] orientation range from 1.62 angstrom for cadmium telluride to 0.89 angstrom for diamond. Complex orientations (higher values of n) require better resolution. The four orientations cover four overlapping resolution ranges (left) from 1.62 to 0.20 angstrom.  ',
'  But, theoretical resolution is just that -- theoretical. In reality many, many practical considerations can cause probe size to increase in both TEM and STEM, and these factors must be taken into account when we calculating practical resolution. I’ll stress here that we’re finding a *calculated* resolution that will be close to,  but not exactly equal to, the real resolution. We can begin to do this by grouping resolution-degrading factors into three categories,  Optics,  System noise, and environment. Within the “optics” category, resolution can be affected or even completely limited by factors including:  The (virtual) size of the electron source  Lens properties, such as spherical aberration (Cs) and chromatic aberration (Cc), and focal length (f).  And the geometries used by your spherical aberration corrector (if your microscope has one), and the accuracy of these geometries.  “System noise” is mainly concerned with things such as:  The grounding, stability, noise of the electronics for lenses, beam detector, high tension suppliers, The construction of your detector; mainly it’s pixel size and its electronic stability, The stability of the mechanical portions of your microscope, including the drift specifications of your stage, and the presence of any parts (such as pumps) that may introduce vibration, or the presence of contamination. And “environment”, referring to the stability of the environment (or room) around your TEM, is concerned with the degree to which   Temperature, Air pressure, And air flow,  around the TEM can be controlled. Using these three categories, we’ve begun to assemble an equation we can use to model practical resolution, in which the practical resolution, d squared, is equal to optics (d sub-o) squared, plus system noise (d sub-n) squared plus environment (d sub-e) squared will give a value for the diameter of the beam as enlarged by these factors. However, the optics portion of this expression depends on an understanding of something that we haven’t discussed yet: aberrations.   ',
' 	Just like lenses in LM, the lenses used in TEM have imperfections that result in imperfect focusing action. We call these imperfections “aberrations” of the lens.  The different isotropic aberrations (meaning they are different across the lens) are:  	Spherical aberration 	Astigmatism 	Field curvature 	Distortion 	And Coma   Additionally, if the electron beam is not monochromatic, then “chromatic aberration” may be a problem as well.   We’ll talk about spherical and chromatic aberration a bit more right now, since they’re critical for an understanding of the basics of resolution -- the rest of these will be saved for a later lecture.   ',
'  	The first lens defect we’ll examine, spherical aberration, is caused by electrons moving in ray paths nearest to the lens edge being focused more strongly than those near the optic axis. This focal heterogeneity causes an enlargement of the image disk, which is usually of width d when unaberrated, but is of width d sub s, which larger than d, when suffering from spherical aberration.  The smallest disk diameter caused by spherical aberration is:  d sub s min, equal to zero point five C sub s times alpha sub zero cubed.  Where, c sub s is the spherical aberration coefficient, which describes the amount of the aberration in the system, and alpha sub zero is the angle of the outermost ray through the lens This spherical aberration coefficient is minimized in lenses with short focal lengths, but is usually around 0.5 to 2 mm in a standard TEM.   ',
'  	The problem is that spherical aberration in the objective lens reduces the imaging resolution by increasing the probe size, and can cause diffracted beams can cause shifted, twin images when an objective aperture is not in use. 	  This aberration is also responsible for the striking dark bend contours in bright field images, and the light bands in dark field images – we can use these features to measure the spherical aberration coefficient for our microscope.   When present in the objective lens, it can also cause barrel and spiral distortions in the SAED pattern, and may affect the phase contrast of images.       ',
'  	Another type of aberration, chromatic, is due to a difference in electron energy. This is because lenses are designed to focus electrons of identical energies, a situation shown in the ray diagram at left. Note how the monochromatic electrons are all focused to a point with diameter d.  In the polychromatic beam at right, though, we see that the electrons with lower energies are given shorter focus lengths, since they are less energetic and can be bent more strongly by the force exerted on them by the lens. This energy-dependent focus difference causes a point to be imaged as a disc in any optical system with uncorrected chromatic aberration.    ',
' Ultimately, the root of chromatic aberration can’t be narrowed down to just one cause – It can be caused by:  Fluctuations in the accelerating voltage due to inconsistencies in your facility’s power supply,  The energy spread of the emitted electron beam – different source types and configurations have different energy spreads:  for example, tungsten hairpins have an energy spread of about 2 eV, lanthanum hexaboride crystals have a spread of about 1 eV, and field emission guns have energy spreads near 0.2 – 0.5 	electron volts. So, clearly, to minimize chromatic aberration, one of the best things you can do is buy a FEG tool.  You can also minimize the chromatic aberration by minimizing alpha.  Energy loss inside the specimen, which can be countered by using thinner specimens, Fluctuation of the lens currents, which can be stabilized by working at the same, optimized lens current after allowing it to stabilize,  	As well as fluctuation of the lens temperature, which is usually kept in check by use of stable cooling systems.  The expression for d sub c, the smallest disk diameter caused by spherical aberrations, is:  D sub c is equal to big C sub c times alpha sub zero times the square root of the sum of delta U over U sub zero quantity squared plus delta I over I sub zero quantity squared plus delta E over E sub zero quantity squared.  Where Big C sub C is the chromatic aberration coefficient,  Alpha sub zero is the angular divergence of the beam,  U is the accelerating voltage,  I sub 0 is the current in the windings of the objective lens,  And E sub zero is the energy of the electrons.  ',
'  	The effect of chromatic aberration on TEM is mostly that it will enlarge the beam/probe size, thereby reducing the image resolution. It also inherently reduces the energy resolution of the afflicted TEM, since a very high energy resolution (i.e. very small energy spread) would necessarily preclude the presence of chromatic aberration. In addition, it affects the contrast transfer function.   ',
'  So, clearly, the size of the final probe our microscope produces is dependent upon the degree to which its lenses suffer from aberrations, which will exist no matter how high-quality our electronics or TEM room may be.  And, as we already mentioned, the effects of aberrations are most significant in the objective lens, since any that are present there will literally be magnified by the rest of the system.  These aberrations are the factors we’ll have to take into consideration when we calculate d sub-zero, the final probe size, through summing. We can express the practical final probe size as the “quadrature sum of disk diameters”. This means that we’ll find the diameter of the probe at its “best”, or smallest condition possible while suffering from each aberration we’re considering, then sum those “best” diameters to determine the final aberrated probe size. The diameters of the probe formed by specific aberrations are called “disks of least confusion”, and since we’re considering each aberration on its own, we’ll have one for each type of aberration. The disks of least confusion at the specimen will be those of: d sub zero, the uncertainty diameter due to beam brightness.  The objective’s spherical aberration, d sub s,  and the objective’s chromatic aberration, d sub c as well as the disc of least confusion of diffraction from the aperture edge, d sub d.  Summing the squares of all of these disks will give us d sub o squared, our final probe size.      ',
'  We just heard something new in the last equation, though – we used a term D sub zero, the uncertainty diameter due to brightness. As you’ll recall from chapter two, electron beam brightness,  beta,  is a property of the virtual electron source. It is defined at the source as the current density per unit solid-angle, and is expressed in units of (amps per square centimeter steradian). But remember that when we say “virtual electron source”, we’re not referring to the physical filament or cathode -- we’re talking about the diameter of beam at the gun crossover, which you can see in the diagram between the Wehnelt and the extractor anode.  d sub zero is the variable we’ll use to represent beam diameter, which is illustrated at the virtual source in the diagram. We can simplify things by considering beam diameter to be equivalent to C sub zero, the amplitude of the direct beam, divided by alpha sub p, the semi-angle of divergence (geometrically they are equivalent).  Note that the terms for brightness and semi-angle of convergence are in the denominator of the ratio that describes beam diameter, with current in the numerator. Based on this relationship, we see that   if we increase brightness when beam current is constant, we necessarily decrease the diameter of the beam.  Similarly, If we increase the semi-angle of convergence, we decrease the beam diameter.  All of these calculations of course depend on the construction of the particular microscope in question, so the value of alpha sub p times the square root of beta will change from TEM to TEM.   ',
'  	But, remember, that there were different kinds of electron guns – the one we just looked at was a thermionic emitter. It turns out that thinking about the relationship between gun type and probe formation can be fairly informative. For example, in thermionic sources, the effect of wavelength related beam amplitude on the outcome of probe formation is much greater than the detractions from variables related to lens aberrations, so there is no real point to install spherical or chromatic aberration correctors.  We can actually ignore the effects of aperture-edge diffraction and chromatic aberration when calculating probe diameter for thermionic sources, because of their low brightness and relatively high beam current. This can be explained by the second equation of the previous slide  To find the optimum semi-angle of convergence, alpha sub opt, for thermionic TEMs we could use multivariate calculus to find where the partial derivative of d sub p with respect to alpha sub p is equal to 0, but we can also expresses it as the product of (four divided by three) all raised to the power of one over eight and (the intensity of the direct beam divided by the spherical aberration coefficient) all raised to the power of one over four.   d sub min, the minimum diameter of the probe, is expressed similarly, but is considered to be equivalent to (four divided by three) all raised to the power of one over eight  all times C sub zero raised to the power of three over four all times C sub s raised to the power of one over four.   ',
'  If we examine the graphs of the disks of least confusion of: spherical aberration  d sub s, in red;  aperture diffraction disk d sub d, in purple;  brightness uncertainty, d sub zero, in green; and chromatic aberration d sub c, in black;  with the x-axis being alpha sub p, in radians  and the y-axis being d sub p, in nanometers,  We see that the optimum semi-angle of convergence can be found at the one point that gives the smallest disk diameter for all aberrations being considered.   ',
'  In the case of field emission guns, their very high brightness, with the amplitude of the direct beam being a much less influential factor than the wavelength of the emitted electrons, the effects of the brightness uncertainty and chromatic aberration can be ignored, making the approximate calculation for aberrated disk diameter much simpler.  We can express the optimum semi-angle of convergence for FEGs as a constant of 0.9 times the ratio of wavelength over the spherical aberration coefficient, with the ratio raised to the power of one over four.  The minimum probe diameter for FEGs is a constant of 0.8 times C sub zero raised to the power of three over four  times C sub s raised to the power of one over four.   ',
' d sub min, minimum possible probe diameter, is important because we can use it and the equations that were just presented to estimate the optimum aperture angle for a given set of beam parameters, as well as the resolution limit of a TEM/STEM.  As such, d sub min  is an important datum to consider when trying to quantitatively evaluate the capabilities of different TEMs, since it describes the smallest probe that system can produce.  Ultimately, final resolution depends more on the wavelength of the electrons than on the spherical aberration coefficient of the system, so we use high accelerating voltages to assure short wavelengths, and can rely on a spherical aberration corrector to reduce the effect of spherical aberration.  Spherical aberration will also be minimized without a corrector if you’re working on a TEM with a small objective polepiece gap.  If we could eliminate spherical aberration entirely, that is, set the spherical aberration coefficient equal to 0, what do you think would happen?       ',
'  So, we’ve discovered a few ways that we can ensure we’re getting the best possible resolution in our S/TEM images, and those were:  - To use S/TEM with a FEG, if you can, since it will produce highly coherent electrons.   - Compensate for spherical aberration with a spherical aberration corrector and/or through use of an objective with a small polepiece gap.  - Or to simply operate at the highest appropriate accelerating voltage in order to reduce the wavelength of your electrons -- though, this will hike your power bill.      ',
'  Progress in resolution improvement for high-resolution electron microscopy from 1970 to the present. The resolution scale extends from 5 to 0.5 Å (left) and is linear in spatial frequency from 0.2 to 2 Å−1 (right). Curves are fitted only to forefront resolution; data points 5, 14 and 17 are included for reference only and not used for curve fitting.  ',
' several successes in compensating spherical aberration to produce images that have resolutions better than the Scherzer resolution limit and are restricted only by the information limit.   In 1992, a resolution of 1.38 Å was achieved with an ARM-1000 by removing phase changes due to spherical aberration using focal series of images, a clear improvement over the Scherzer value of 1.6 angstroms  At approximately the same time, even greater improvements were obtained with medium-voltage microscopes. Holographic reconstruction improved the resolution of a 300 kV microscope from 1.7 to 1.36 angstroms   Focal series reconstruction improved a 200 kV microscope from 2.4 to 1.5 Å  and a 300 kV microscope from 1.7 to 1.1 angstroms   In 1998, the first successful use of hardware correction doubled the resolution of a 200 kV microscope from 2.4 to 1.2 angstroms  ',
'  A visual representation of the convergence semi-angle of the electron beam, which we already know as alpha sub p, can be seen in the leftmost figure here, wherein a specimen is represented by the yellow bar, with an aperture existing in the center, on the optic axis.  In the rightmost figure, which is a side-view of a convergent probe impinging on the surface of a thin specimen, you can see the entire convergence angle, 2 alpha. Below this is a top-down (or, plan view) depiction of the convergent beam electron diffraction (or CBED) pattern  that would result. Note that there are three disks, each representing three diffraction spots. The central 000 disk is the direct beam, and hkl and barh bark and barl, the disks to the left and right, are caused by diffraction. We can extract information about the convergence semi-angle through measurements of these disks, most importantly, the diameter of the 000 disk, and the distance between the centers of the 000 and hkl disk.       ',
'	 This is because the convergence semi-angle alpha is proportional to the ratio of disc-width to the disc spacing, or a over b.  b is independent of the chosen aperture, so the three apertures could be calibrated by recording the width of the zero order disk a.       '
]

let ch5SpeakerNotes = [
    "There are no speaker notes on this slide."
    ,
    "Ideal vacuum is a chamber or container completely devoid of matter like gas molecules. But this will never happen. Generally speaking, vacuum refers to a chamber or container with less than 1 atmosphere (atm) of pressure. The measurement of vacuum is thus taken using pressure inside the chamber or container. We know that atmospheric pressure is about 10,325 Pascal, 10"
    +
    " to the " +
    "3"
    +
    " mill bar, or 760 torr."
    +
    " There are many units that are used to specify pressures, with The Torr, the Bar and the Pascal being common.. .. but the Pascal is the SI recommended unit for pressure and so is the best choice for documentation. "
    +
    "The "
    +
    "torr"
    +
    " (symbol: Torr) is a "
    +
    "unit of pressure"
    +
    " based on an "
    +
    "absolute scale"
    +
    ", now defined as exactly 1/760 of a standard "
    +
    "atmosphere"
    +
    ". Thus one torr is exactly 101325/760 "
    +
    "pascals"
    +
    " (≈ 133.3 Pa). The "
    +
    "bar"
    +
    " is a metric "
    +
    "unit"
    +
    " of "
    +
    "pressure"
    +
    ", but is not approved as part of the "
    +
    "International System of Units"
    +
    " (SI). It is defined as exactly equal to 100,000 "
    +
    "Pa"
    +
    ". Practically, vacuum is classified into three categories: low, high, and ultrahigh vacuum. When the pressure reaches less than 10"
    +
    " to the " +
    "-2"
    +
    " Torr and higher than 10"
    +
    " to the " +
    "-6"
    +
    " Torr, it is low vacuum, while high vacuum refers to the pressure between 10"
    +
    " to the " +
    "-6 "
    +
    "to 10"
    +
    " to the " +
    "-8"
    +
    " Torr. When the pressure is less than 10"
    +
    " to the " +
    "-8"
    +
    " Torr, it refers to ultrahigh vacuum."
    +
    "\n"
    ,
    "Per our discussions on the electron sources and optics,  TEM cannot operate in air for a number of reasons. Specifically, barely any electrons can be emitted without vacuum because of the filament materials would be oxidized in the air. Poor vacuum will significant reduce the file of the electron source. Without vacuum, electron beam cannot travel through the column because of the strong interaction between electrons and gas molecules in the air, which would result in arching, inelastic scattering by gas molecules, gas ionization, intensity or probe current reduction. Without vacuum or with poor vacuum, the thin TEM specimen could easily be contaminated and oxidized. Thus, high vacuum at a magnitude of 10-6 torr or higher is required for a TEM column or thermionic gun. Ultrahigh vacuum at a magnitude of 10-9 or higher is required for FEG gun. How can we generate high or ultrahigh vacuum in a TEM system?"
    +
    "\n"
    ,
    "The most basic vacuum system consists of a vessel connected to a pump that removes the air. The vacuum system in a TEM is considerably more complicated, containing a number of vessels, pumps, valves (to separate different vessels) and gauges (to measure vacuum pressures). From the bottom up we can distinguish four vessels in the vacuum system: "
    +
    "\n"
    +
    "·The buffer tank "
    +
    "\n"
    +
    "·The projection chamber "
    +
    "\n"
    +
    "·The column (specimen area) "
    +
    "\n"
    +
    "·The electron gun area  "
    +
    "\n"
    +
    "\n"
    +
    "In this figure, it shows the diagram of the vacuum system in a Tecnai F20 TEM. At the bottom it starts with the rotary pump (PVP). Above PVP is the buffer tank, separated by a valve (V1) from the PVP. Another valve (V2) is also closed. When open this would give the PVP access to the projection chamber (the area above V3, the valve that separates it from the oil-diffusion pump ODP). Pir (Pir 1 and Pir 2) and Pen (3) stand for Pirani and Penning which are vacuum-pressure measuring gauges. Valve 4 (closed) separates the projection chamber from the upper part of the column. Pressures are also measured on the basis of the current running in the IGPs. The large cyan area represents the TEM column or specimen area (as well as some connecting pipes), pumped by a main ion-getter pump (IGP1) and the liner-tube ion-getter pump (IGP4) (liner tubes are thin pipes that connect the projection chamber to the specimen area and the specimen area to the gun). At the same height, to the right, is the turbo-molecular pump (Turbo) that is used to prepump the specimen and gun areas and also pumps on the specimen-holder airlock (on the CompuStage; through the line that is drawn over the top, towards valves 42 and 8). The gun is pumped by two ion-getter pumps (IGP2 and IGP3). IGP3 measured by voltage pumps the FEG tip area."
    +
    "\n"
    ,
    "Apparently A TEM is not pumped by single pump, because there is no pump available that handle the full range in vacuum from air pressure (as present after a vessel has been vented) to ultra-high vacuum (in specimen are or gun). The microscope can in essence be divided in two parts, separated by a very small aperture (200 micrometers), the differential pumping aperture, located between the projection chamber and the column. The lower part basically consists of the projection chamber where we observe the image and where plate camera and TV cameras are located. This is pumped by an oil-diffusion pump. Behind the oildiffusion pump is a rotary pump (the oil-diffusion pump cannot go from vacuum to air, it needs some other pump to back it up). Since the rotary (or pre-vacuum) pump is noisy, it is not running continuously but only when needed. In order to have continuous backing of the diffusion, there is a buffer tank in between them. The buffer tank is slowly filled by the oil-diffusion pump. When its pressure is becoming high, it is emptied by the rotary pump. The upper part consists of the specimen and gun areas which are pumped by one or more ion-getter pumps. These pumps use no oil and are therefore clean. They also achieve higher vacuum than the oildiffusion pump. The number of ion-getter pumps may range from one to four. Initial pumping of the column and gun on many systems is done by the rotary and oil-diffusion pumps, except for systems equipped with a turbo-molecular pump. In the latter case the oil-diffusion and rotary pumps never pump on the column and gun areas."
    +
    "\n"
    ,
    "Rotary vane pumps rely on eccentrically rotating vanes to suck air through an inlet valve and into a chamber, where the rotation will further compress it and eventually expel it from an exhaust port. They are reliable and relatively cheap, but are noisy and dirty, so, if used, they should be housed separately from the TEM itself so that their vibrations do not interfere with imaging or analysis. These pumps can provide an ultimate pressure of about 10 to the -3 Torr."
    ,
    "Rotary vane pumps rely on eccentrically rotating vanes to suck air through an inlet valve and into a chamber, where the rotation will further compress it and eventually expel it from an exhaust port. They are reliable and relatively cheap, but are noisy and dirty, so, if used, they should be housed separately from the TEM itself so that their vibrations do not interfere with imaging or analysis. These pumps can provide an ultimate pressure of about 10 to the -3 Torr."
    ,
    "When selecting a vacuum pump, the application is key – you should ask things like, “what pressures do I need?”, “how fast do I need my pumping/venting cycles to be?”, “what gases will I need to pump?”, “how clean does my vacuum need to be?” and (of course) “what is an appropriate price-point?”."
    +
    "\n"
    +
    "\n"
    +
    "You can estimate the time required to pump down your chamber by dividing the volume (in L) by the speed of the pump (L/min), then multiplying this by 2.303 log ( pressure 1 / pressure 2) (Pa), where pressure 1 and pressure 2 are your starting and ideal pressures, respectively. "
    +
    "\n"
    +
    "\n"
    +
    "Once you know your application, your budget, and your time requirements, you can begin to make a list of candidate pumps, or, realistically, candidate vacuum systems, since you will most likely need more than one pump."
    +
    "\n"
    ,
    "In TEM, a dry diaphragm vacuum pump is used for rough pumping to reduce contamination. Diaphragm vacuum pumps are dry positive-displacement pumps. A crankshaft-driven connecting rod moves the diaphragm that is tensioned between the head cover and the housing. The space between the head cover and the diaphragm forms the suction chamber. Diaphragm pumps require inlet valves and outlet valves to achieve targeted gas displacement. Pressure-controlled shutter valves made of elastomer materials are used as valves. Since the suction chamber is hermetically sealed off from the drive by the diaphragm, the pump medium can neither be contaminated by oil nor can aggressive media corrode the mechanics. The dead volume between the outlet valve and the suction chamber results in a restricted compression ratio which means that with just one pumping stage it is only possible to achieve an ultimate pressure of approximately 52.5 Torr. Connecting multiple pumping stages in series makes it possible to attain an ultimate pressure of 0.38 Torr. Lower pressures cannot be achieved, as in this case there is no longer sufficient force to open the inlet valve. The principle of the diaphragm pump is particularly well suited for low pumping speeds of up to approximately 10 m"
    +
    " to the " +
    "3"
    +
    "· h"
    +
    " to the " +
    "-1"
    +
    "."
    +
    "\n"
    ,
    "In TEM, a dry diaphragm vacuum pump is used for rough pumping to reduce contamination. Diaphragm vacuum pumps are dry positive-displacement pumps. A crankshaft-driven connecting rod moves the diaphragm that is tensioned between the head cover and the housing. The space between the head cover and the diaphragm forms the suction chamber. Diaphragm pumps require inlet valves and outlet valves to achieve targeted gas displacement. Pressure-controlled shutter valves made of elastomer materials are used as valves. Since the suction chamber is hermetically sealed off from the drive by the diaphragm, the pump medium can neither be contaminated by oil nor can aggressive media corrode the mechanics. The dead volume between the outlet valve and the suction chamber results in a restricted compression ratio which means that with just one pumping stage it is only possible to achieve an ultimate pressure of approximately 52.5 Torr. Connecting multiple pumping stages in series makes it possible to attain an ultimate pressure of 0.38 Torr. Lower pressures cannot be achieved, as in this case there is no longer sufficient force to open the inlet valve. The principle of the diaphragm pump is particularly well suited for low pumping speeds of up to approximately 10 m"
    +
    " to the " +
    "3"
    +
    "· h"
    +
    " to the " +
    "-1"
    +
    "."
    +
    "\n"
    ,
    "The scroll pump uses two scrolls that do not rotate, but where the inner one orbits and traps a volume of gas and compresses it in an ever decreasing volume; compressing it until it reaches a minimum volume and maximum pressure at the spirals’ center, where the outlet is located. A spiral polymer (PTFE) tip seal provides axial sealing between the two scrolls without the use of a lubricant in the swept gas stream. A typical ultimate pressure of 1 x 10"
    +
    " to the " +
    "-2"
    +
    " mbar can be achieved. It has a pumping speed range of 5.0 to 46 m"
    +
    " to the " +
    "3"
    +
    "/h (3.0 to 27 ft"
    +
    " to the " +
    "3"
    +
    "/min)."
    +
    "\n"
    ,
    "To keep a dry rough pump in good working order, regular inspection and maintenance should be performed. Always consult the manuals provided with your pump, as what follows is only a general guide intended to give you an idea of the process, rather than exact instructions."
    +
    "\n"
    +
    "The inlet strainer is a removable screen that covers the gas inlet to ensure no foreign objects can enter the pump. It, and its o-ring, should be inspected and cleaned at least once per year. Care must be taken during this process to avoid damaging the o-ring that seals the strainer against the inlet port – it should be cleaned separately, with a dry, clean-room grade cloth. The strainer itself can simply be washed with a cleaning solution that is appropriate for the pump’s application."
    +
    "\n"
    +
    "The gas-ballast control, a  removable, usually manually operated, airflow control device, should be removed and inspected once per year to ensure that it is generally clean and that the air-hole is free of debris. Wipe the assembly gently with a dry, lint-free cloth, and carefully remove any obstructions from the air-hole, if necessary."
    +
    "\n"
    +
    "The external fan cover should be checked annually to prevent overheating due to airflow restriction – if you notice any buildup, remove it by wiping with a dry cloth, and scrubbing with a soft brush."
    +
    "\n"
    +
    "Replacement of tip seals and the exhaust valve is just that – a replacement of the old seals with new ones. This operation requires disassembly of the pump, but that is relatively simple and well-documented in pump manuals. This also provides an opportunity to inspect the rest of the pump, and the insides of the scrolls, which can be cleaned with a dry, clean-room grade cloth if necessary."
    +
    "\n"
    +
    "\n"
    +
    "Testing the condition of the motor requires knowledge of the appropriate standards set by local electrical regulations, so consult these and your pump manual to find out the appropriate method for your situation."
    +
    "\n"
    +
    "Bearing replacement is done less frequently, and when needed you should consult your manual and contact your manufacturer. "
    +
    "\n"
    +
    "\n"
    ,
    "Here are some basic trouble-shooting procedures for common faults found in dry scroll pumps. Remember to always consult the manual for your specific pump, as these are only general guidelines. \u000b\u000bIf a pump fails to start, you should first ensure that it is connected to a proper power supply. Ensure all connections are snug, and inspect fuses and breakers. If you believe the pump is connected properly, ensure that the supplied voltage matches the voltage the motor was configured for. If this is correct, it is possible that your motor is faulty, or that the pump has begun to overheat and shut down to prevent this. \u000b\u000bIf your pump starts, but suffers from poor performance, you should check for air leaks, vacuum gauge reading errors, dirty or damaged vacuum fittings, a blocked inlet strainer, or a blocked exhaust line. If these are all satisfactory, you may have trace vapors lingering in your pump, or you may be trying to operate outside the pump’s specifications. Ensure that your gas-ballast control is properly closed, and that your tip seals are in good condition. Additionally, ensure the supplied voltage is adequate – if it is close enough to get your pump to start, but is more than 10% less than the specified minimum voltage, your pump will suffer from poor performance. \u000b\u000b"
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "If your pump is noisy, your bearings may be wearing out, or you may have solid particles contaminating your pump. Either of these issues should be addressed quickly to avoid further damage to your pump."
    +
    "\n"
    +
    "If you notice that your pump is very hot, ensure that it is in a room-temperature environment, and that the air supply to the pump is cool and unrestricted. If environmental and air-flow problems are not found, ensure that the pump is not receiving an excessive supply voltage. Also ensure that your process gases are not excessively hot, and that the fan is functioning."
    +
    "\n"
    +
    "\u000bIf your pump is on and appears normal, but is pumping slowly, ensure that the diameter of the piping is sufficiently large, and that their length is within the pumps specifications. Also check for blockages in the inlet strainer, and the exhaust line. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "\n"
    +
    "Oil diffusion pumps transfer kinetic energy to gas molecules using a high velocity heated oil stream that “drags” the gas from the inlet to the outlet, providing a reduced pressure at the inlet. These pumps feature an older technology, largely superseded by dry turbomolecular pumps. They have no moving parts and provide high reliability at a low cost. A typical ultimate pressure of less than 7.5 x 10"
    +
    " to the " +
    "-11"
    +
    " Torr can be achieved. It has a pumping speed range of 10 – 50,000 l/s."
    +
    "\n"
    ,
    "\n"
    +
    "Oil diffusion pumps transfer kinetic energy to gas molecules using a high velocity heated oil stream that “drags” the gas from the inlet to the outlet, providing a reduced pressure at the inlet. These pumps feature an older technology, largely superseded by dry turbomolecular pumps. They have no moving parts and provide high reliability at a low cost. A typical ultimate pressure of less than 7.5 x 10"
    +
    " to the " +
    "-11"
    +
    " Torr can be achieved. It has a pumping speed range of 10 – 50,000 l/s."
    +
    "\n"
    ,
    "Oil diffusion pumps offer maximum pump rates of 1000 liters per second (1 cubic meter per second), and can not operate above 10 to the -2 Torr, in order to ensure that the oil is not vaporized. "
    +
    "\n"
    +
    "\u000bTheir lack of moving parts makes them vibration-free, cheap, and reliable, but in the event of sub-optimal operation or failure, oil vapor may contaminate the area being pumped. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "Here is a quick troubleshooting guide for basic problems with oil diffusion pumps -- remember to consult your own manual should you ever need to do so. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "Turbomolecular pumps (or TMPs) use blades rotating at high speeds to transfer energy to gas molecules. \u000b\u000bThe rotor stacks deflect the molecules through the pump during their rotation using specially angled blades, which drive the molecules towards the exhaust. \u000b\u000bThis rotation can occur at non-trivial speeds, between 20 and 60,000 RPM, and will move 50 - 500 L of gas per second. "
    +
    "\n"
    +
    "\u000bAs you can see, they’re quite fast, and purely mechanical, so they are clean, lacking oils and contamination sources. "
    +
    "\n"
    +
    "These are often backed with mechanical pumps."
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "Turbomolecular pumps (or TMPs) use blades rotating at high speeds to transfer energy to gas molecules. \u000b\u000bThe rotor stacks deflect the molecules through the pump during their rotation using specially angled blades, which drive the molecules towards the exhaust. \u000b\u000bThis rotation can occur at non-trivial speeds, between 20 and 60,000 RPM, and will move 50 - 500 L of gas per second. "
    +
    "\n"
    +
    "\u000bAs you can see, they’re quite fast, and purely mechanical, so they are clean, lacking oils and contamination sources. "
    +
    "\n"
    +
    "These are often backed with mechanical pumps."
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "\u000bThe need for a backing pump is brought about by the fact that the TMP blades could catastrophically fail if exposed to low vacuum when operating at full speed. The pump will begin to spin down as soon as the pressure increase is detected, but the spin-down times for TMPs are anywhere between several to tens of minutes, so it may not occur in time to prevent blade or motor damage. \u000b\u000bIf you notice abnormal noises or vibrations from your TMP, you should stop operation immediately and consult your manufacturer's documentation, as there may be bearing problems that could result in damage to the pump. \u000b\u000bIf your pump only spins up to 20 - 30 percent of its maximum speed, inspect the hoses and chamber gaskets for leaks and debris, or signs of aging. "
    +
    "\n"
    +
    "\u000bIf your pump is operating faster, but still not at normal speeds, there may be an even smaller leak present, due to a damaged or dirty o-ring or seal, and these should be checked carefully. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "Here’s a reference for TMP troubleshooting, but, again, consult the documentation for your specific pump. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    "The IGP was used in almost every single vacuum application in high vacuum pressure ranges of up to <10"
    +
    " to the " +
    "-6"
    +
    "mbar before turbo molecular pumps were widely adopted. Nowadays, IGP with larger pumping speeds are mostly used in pressure ranges <10"
    +
    " to the " +
    "-9 "
    +
    "mbar."
    +
    "\n"
    +
    "\n"
    +
    " In TEM, IGPs are used in the specimen and gun areas, because IGPS remain the cleanest and most efficient method to achieve an ultra high vacuum. "
    +
    "\n"
    +
    "\n"
    +
    "IGP capture and hold gases by converting them into solid compounds and binding them in the pump. Because of that, ion getter pumps maintain the vacuum even while not in operation. IGP do not have any moving parts. Therefore they are ideal for sealed systems that require reliable and long-term operation. Furthermore, IGP operate completely free of vibrations and agitation at very low power consumption. Maintenance is minimal throughout their whole lifetime."
    +
    "\n"
    ,
    "Ion getter pumps use a four-step process to remove gases from the vacuum chamber."
    +
    "\n"
    +
    "Step 1: Create a high magnetic field"
    +
    "\u000bThe ion pumps have magnets located outside the vacuum. Those magnets generate a 1200 gauss magnetic field, which contains and guides electrons within circular anode rings."
    +
    "\n"
    +
    "Step 2: Generate a plasma"
    +
    "\u000bAfter an initial rough pumping to remove much of the gas, high voltage is applied to the element assembly. Electrons are pulled into the anode tube assembly where they spin in a cloud; this cloud is commonly referred to as plasma. The plasma is trapped by the high magnetic field."
    +
    "\n"
    +
    "Step 3: Ionize gas molecules"
    +
    "\u000bAs gases move into the anode assembly, electrons strike the gas molecules. This collision removes electrons from the gas molecule's valence shell, and changes the gas molecule into a positive ion (it has a positive charge). The positive ion is forced out of the anode tube by the high voltage field at a high velocity toward the cathode plate."
    +
    "\n"
    +
    "Step 4: Capture gas ions"
    +
    "\u000bWhen the positive ion strikes the cathode plate, that impact is called sputtering. Cathode materials are ejected toward the anode tube and the ion chemically and physically reacts with the cathode material."
    +
    "\n"
    +
    "\u000bOf course this means the IGP’s electrodes have a finite lifetime, since the cathode is gradually being used up, but they still provide very clean and vibration-free high vacuum for several years. "
    +
    "\n"
    +
    "\n"
    ,
    "Ion getter pumps use a four-step process to remove gases from the vacuum chamber."
    +
    "\n"
    +
    "Step 1: Create a high magnetic field"
    +
    "\u000bThe ion pumps have magnets located outside the vacuum. Those magnets generate a 1200 gauss magnetic field, which contains and guides electrons within circular anode rings."
    +
    "\n"
    +
    "Step 2: Generate a plasma"
    +
    "\u000bAfter an initial rough pumping to remove much of the gas, high voltage is applied to the element assembly. Electrons are pulled into the anode tube assembly where they spin in a cloud; this cloud is commonly referred to as plasma. The plasma is trapped by the high magnetic field."
    +
    "\n"
    +
    "Step 3: Ionize gas molecules"
    +
    "\u000bAs gases move into the anode assembly, electrons strike the gas molecules. This collision removes electrons from the gas molecule's valence shell, and changes the gas molecule into a positive ion (it has a positive charge). The positive ion is forced out of the anode tube by the high voltage field at a high velocity toward the cathode plate."
    +
    "\n"
    +
    "Step 4: Capture gas ions"
    +
    "\u000bWhen the positive ion strikes the cathode plate, that impact is called sputtering. Cathode materials are ejected toward the anode tube and the ion chemically and physically reacts with the cathode material."
    +
    "\n"
    +
    "\u000bOf course this means the IGP’s electrodes have a finite lifetime, since the cathode is gradually being used up, but they still provide very clean and vibration-free high vacuum for several years. "
    +
    "\n"
    +
    "\n"
    ,
    "IGP’s alone are not enough to keep the vacuum in the TEM optimally clean, however, since water and other contaminants are still introduced into the column during every specimen exchange despite our best efforts to prevent this. By placing a plate of liquid-nitrogen cooled metal in the space around the specimen, we create a surface on which any stray gases or vapors degrading our vacuum may condense and stick until the plate is warmed. Of course this means contaminants have to be in the space immediately around the cold trap to be captured by it, but it is primarily intended to capture those that come in with our specimen holder, and its shape and position in the specimen area make it quite effective. "
    +
    "\n"
    +
    "\n"
    +
    "--The Cold Trap (also called Liquid-nitrogen cooling device or Cryo Trap) consists of a piece of metal around the specimen environment that is cooled to liquid-nitrogen temperature. The cooling is done by the liquid nitrogen in the dewar on the right-hand side of the column. Gases in the vacuum (predominantly water vapour) condense on the cold surface inside the microscope and thereby the partial pressures of these gases is reduced. Use of the cold trap is particularly effective when a holder is introduced into the microscope, because the water vapour coming in with the holder (either from the residual gases in the airlock or adsorbed on the holder surface) is trapped quickly.--"
    +
    "\n"
    ,
    "\n"
    +
    "\n"
    +
    "Of course, a useful vacuum of your desired pressure and level of cleanliness can only be maintained through the correct use of well-designed valves, since these are ultimately what take and keep the atmosphere out, and let the specimens in. The TEM relies on many specially designed valves that have been engineered for use in vacuum systems. \u000b\u000bOne type, the solenoid valve, is operated electromechanically via an electric current that runs through a solenoid that (in the case of a two-port valve) allows the flow to be switched on or off by precise displacement of a diaphragm within the system. "
    +
    "\n"
    +
    "\n"
    +
    "Another type of valve, the ball valve, is one that you directly interact with every time you load a sample -- it’s located within the goniometer, separating the atmosphere from the inside of the airlock. These are usually made of brass, and are actuated by the pin on the end of the specimen holder rod. "
    +
    "\n"
    +
    "\n"
    +
    "\n"
    ,
    "And, even once you have clean, stable vacuum, you must still have a way to accurately measure it so that you can verify and monitor it. To do this, you need vacuum gauges, but just like we saw with vacuum pumps, there is no one gauge that can give accurate measurements from atmospheric pressure to UHV -- we again need to rely on a series of devices, in this case, gauges. "
    +
    "\n"
    +
    "\n"
    +
    "The Pirani gauge is usually the first kind used, because it operates accurately between around 10 - 10 to the -2 Pa, in rough vacuum. "
    +
    "\n"
    +
    "\n"
    +
    "Because of its simple design, it’s quite dependable. The resistance of a hot wire (R3) changes with the rate of  heat loss (conduction) to the gas in the system being monitored; a Wheatstone bridge of 4 resistors (three whose resistivity are known, and the fourth that is the hot wire) "
    +
    "allows us to learn what current is required to rebalance circuit is, which we can use as a calibrated measure of the pressure of gases. Of course this means that the gauge needs to be calibrated for a specific gas. "
    +
    "\n"
    +
    "\n"
    ,
    "A Penning gauge, which you will also hear called a “cold cathode” gauge can be used to measure medium and high vacuum, between 1 - 10 to the -7 Pa. It does this by creating a flow of ions between between electrodes within a chamber open to the vacuum, and using the ion current from cathode to anode as a measure of pressure."
    +
    "\n"
    +
    "\n"
    +
    "A wire loop anode between two cathode plates make up most of the gauge. The electrodes sit within both the vacuum, and a 500 - 1500 Gauss magnetic field generated by external magnets. This sensitizes the detector by encouraging secondary ionization events, since the probability of such events will be higher thanks to the ions’ spiral during their travel.  "
    +
    "\n"
    +
    "\n"
    +
    "Of course this creates an interesting problem, since the ion current will drop to zero when the pressure is very low OR very high, meaning if we only use a CCG, we (and, more problematically, the electronics governing automatic vacuum systems) won’t be able to differentiate between a vacuum that is terrible and one that is wonderful without prior knowledge or alternative gauges.  "
    +
    "\n"
    +
    "\n"
    +
    "\n"
    +
    "\n"
    +
    "\n"
    ,
    "Though the specifics of vacuum systems will change, there are a few rules of thumb that are useful to keep in mind: We’ll start with the three that are the most important, but also the most simple: Always handle your tools, components, and specimens only while wearing appropriate gloves -- for us, this means particle-free disposable gloves at least, with clean-room grade disposable gloves being ideal. Always ensure that your specimen is completely dry before you load it into your TEM! Furthermore, always make sure that your specimen is free from substances and structures that could evaporate, sublimate, or otherwise release gases when put under vacuum, a process called “offgassing” or “outgassing”. Always be aware of your specimen and its properties -- a substance that is innocuous and stable at atmospheric pressures may rapidly become a vacuum-degrading or emitter-killing vapor once exposed to the low pressures of the column.  If you can’t avoid introducing such a material, make sure your vacuum system will be able to cope, and at least try to ensure that the off-gassing has already occurred in a different, less important vacuum chamber used for specimen preparation. Any set-up designed to reach high or ultra-high vacuum will always consist of a multiple pumps, since no one pump can go from atmosphere to UHV. To the same end, any system that consists of more than one stage needs to have valves to isolate the stages from one another to preserve the vacuum and the pumps themselves. Differential vacuum, where areas of different pressure exist within the same general area, is possible due to the use of small openings between the different areas of pressure. These openings are called differential apertures. The efficiency of any pump will vary depending on the gas that it is pumping. Not all vacuum systems produce contaminant-free vacuum, but all vacuum systems must be kept clean to ensure safe operation. Volatile chemicals like fats, oils, and water should never be placed in traditional vacuum systems. Air-locks will be omnipresent -- they are what allow us to move our specimen into the vacuum! And, when we choose to let the pressures in our chambers rise, we can’t just suck in room-air -- all venting should be done with dry, clean, inert gases at appropriate flow-rates; you’ll see nitrogen used for this almost everywhere."
    ,
    "Here’s a diagram of a TEM that pays special attention to the vacuum system. Note that the projection system and the lower column are separated by a differential pumping system. The specimen environment in the mid-column has a dedicated IGP, and is kept around 10 to the -7 Torr during operation. The only time the specimen environment’s pressure should exceed that is when we have just introduced a specimen through the airlock, which is pumped by the TMP. The liner-tubes are also pre-pumped by the TMP. Further up, in the gun area, we see a region of higher vacuum that exists beyond the second differential pumping system. This area is pumped by a second IGP, and is usually around 10 to the -8 Torr. The FEG itself is kept between 10 to the -8 and 10 to the -9 Torr by its own IGP, which is mounted directly above the emitter."
    ,
    "Typical contaminants of vacuum systems include "
    +
    "\n"
    +
    "\n"
    +
    "hydrocarbons, which can come from "
    +
    "\n"
    +
    "Residues left on surfaces, screws and seals, after production or maintenance of components,"
    +
    "\n"
    +
    "as well as solvents from sample preparation, and oils from skin or hair. "
    +
    "\n"
    +
    "\n"
    +
    "Specimen preparation and handling can also introduce dust or small particles."
    +
    "\n"
    +
    "\n"
    +
    "Vapors present in ambient atmosphere may also adsorb onto the interior walls of the vessel."
    +
    "\n"
    +
    "\n"
    +
    "Consequently, it is necessary to ensure that the components are as clean as possible when installing vacuum equipment. All components attached in the vacuum chamber must be clean and grease-free. All seals must also be installed dry, and, if the use of vacuum grease cannot be avoided, it must be used extremely sparingly to aid installation but not as a sealant. If high or ultra-high vacuum is desired, then clean lint-free and powder-free gloves must be worn during the assembly process."
    +
    "\n"
    ,
    "Since we can expect to encounter air-locks on every TEM, is is worthwhile to discuss how to load and remove specimens into and out of a TEM! \u000b\u000bAfter loading the specimen into the holder, and ensuring that the specimen is firmly secured, take time to examine the holder’s o-ring and mating surfaces, which need to clean and in good condition to allow proper sealing to take place. \u000b\u000bMake sure that the column valve is closed, so that if anything does go wrong, the gun will be safe. \u000b\u000bTurn on the TMP through the control software, and allow it to start pre-pumping the liner tubes. \u000b\u000bUse the small pin near the end of the holder to align the rod with the markings on the Compustage goniometer. For our microscope, this occurs around the 5 o’clock position. \u000b\u000bAfter insertion, the TMP will pump the specimen, holder, and airlock down close to column vacuum levels, at which point you can complete the insertion by turning the older anti-clockwise to open the ball-valve in the airlock, and allowing the holder to be slowly pushed into the airlock. The column pressure will increase, and fluctuate as it is pumped back down -- only open the column valve once safe and stable pressures have been reached. "
    +
    "\n"
    +
    "\u000b"
    +
    "\n"
    ,
    ]

let speakerNotes = [
    ch1SpeakerNotes,
    ch2SpeakerNotes,
    ch3SpeakerNotes,
    ch4SpeakerNotes,
    ch5SpeakerNotes
]

// Speak code based on https://codepen.io/matt-west/pen/wGzuJ

// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
    
    // Set the text.
      msg.text = text;
    
    // Queue this utterance.
      window.speechSynthesis.speak(msg);
  }

$('#speakernotesplay').on('click', function(){
    if(window.speechSynthesis.paused && window.speechSynthesis.speaking){
        console.log("Resuming speech")
    } else {
        let slide = document.getElementById('slidenumber').value;
        speak(speakerNotes[currentCh - 1][slide - 1]);
        console.log("Saying:", speakerNotes[currentCh - 1][slide - 1])
    }
    window.speechSynthesis.resume();
});

$('#speakernotespause').on('click', function(){
    window.speechSynthesis.pause();
});

$('#speakernotesstop').on('click', function(){
    window.speechSynthesis.cancel();
});