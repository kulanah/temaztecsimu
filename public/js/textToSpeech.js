let ch1SpeakerNotes = ['    Welcome to the OEMP TEM introductory lecture! Our goal for this chapter is to give you an overview of what the TEM can do. You’ll be introduced to the applications and techniques that have made TEM so critical for the research and development of materials and devices on the micro and nano-scales.    This course was made possible by a generous grant from the W. M. Keck Foundation.     ',
'    This course is designed to introduce the theoretical and practical concepts of transmission electron microscopy (TEM),  and to provide hands-on opportunities for students to learn how to operate a state-of-the-art high resolution TEM and its attached analytical accessories, such as energy dispersive x-ray spectrometers (EDX) and electron energy loss spectroscopes (EELS).     ',
'    While there are no required texts for this course, we have drawn heavily from five resources:   the “basic” textbooks we used were:                               	 Williams’ and Carter’s  Transmission Electron Microscopy (2nd ed.) and Fultz’ and Howe’s Transmission Electron Microscopy and Diffractometry of Materials (4th ed)   while the “advanced” textbooks we used were:               	Reimer and Kohl’s Transmission Electron Microscopy Physics of Image Formation (5th ed)             	de Graef’s Introduction to Conventional Transmission Electron Microscopy             	and Zuo and Spence’s Advanced Transmission Electron Microscopy, Imaging and Diffraction in Nanoscience   The TEM simulator, and all TEM course materials are focused on PSU’s transmission electron microscope, the FEI Tecnai G2 F-20 S-STWIN with Oxford X-Max energy dispersive x-ray spectrometer (EDX or EDS) and GIF 2000 for EELS. Upon successful completion of the online education program, students will be eligible come to the TEM lab at the Center for Electron Microscopy and Nanofabrication at PSU for hands-on training. This on-site training will total about 2-3 hours, and will certify that the student is qualified to operate the TEM.     ',
'    This chapter uses excerpts from Colliex’s Seeing and measuring with electrons: Transmission electron microscopy today and tomorrow – An introduction, as well as Aseyev, Weber & Ischenko’s Ultrafast Electron Microscopy for Chemistry, Biology and Material Science, Bostanjoglo and Horinek’s Pulsed TEM - A New Method to Detect Transient Structures in Fast Phase-Transitions, and Alloyeau et al.’s STEM Nanodiffraction Technique for Structure Analysis of CoPt Nanoparticles.     ',
'    And, to give you a brief outline of this lecture: we’ll begin by defining and discussing both nanotechnology and transmission electron microscopy, or TEM, and we’ll discuss what exactly a TEM does. Then, for perspective, we’ll briefly look at the history of the TEM. Next we’ll discuss the differences between electron microscopy and “optical microscopy”, which could also be called “ light microscopy”, or “LM”. After that, we’ll examine the differences between two common types of electron microscopes: transmission electron microscopes and scanning electron microscopes. Then, we’ll talk about the components of TEM, common techniques, and examples of their applications in the field of nanocharacterization.       ',
'    The somewhat vague term “nanotechnology” refers to science, engineering, and technology conducted at the nanoscale, which refers to materials and devices smaller than about 100 nanometers in size.   Unique properties and phenomena can be observed and manipulated through nanoscience and nanotechnology because of the dramatic reduction in size-scale compared to macroscopic science and technology. This of course means that the use or study of “nanotechnology” is not necessarily restricted to any one field! In fact, elements of nanoscience are present in many fields, like chemistry, biology, physics, materials science, and engineering.   Nanoscience and nanotechnology are broad categories, but always involves the ability to see and/or control individual atoms or molecules,.   This is problematic, however, since something as small as an atom is impossible to see with the naked eye. In fact, the instruments typically used in a high school science lab won’t help, either.     ',
'    To give you a sense of the scales we’re talking about, let’s define some natural distances:   the smallest that we’ll discuss is the Bohr radius, which is a subatomic metric describing the distance between the nucleus and the electron of a ground-state hydrogen atom. This distance is about 0.05 nanometers.   And, scaling up, the Van der Waals radius, which is half of the distance between two unbonded atoms of an element, is 0.17 nanometers in the case of carbon – so, if we were to let individual carbon atoms roll around, they would always remain separated by at least around 0.34 nm.    Using these general ideas about the distances between the components of  atoms, and the distances between the atoms, then, we can more readily understand how a 1 nanometer line could be “drawn” with just 3 carbon atoms.   If we added two more lines of three carbon atoms, for a total of nine carbon atoms, then we’d have a 1 nm by 1 nm planar surface.   And, likewise, a 1 nm by 1 nm by 1 nm cube could be constructed with just 27 C atoms.   Constructing a cubic millimeter, though, would require “2.7 times ten to the 28” carbon atoms, so we can quickly see the enormous disparity between even a tiny macroscopic object like our cubic millimeter and nanoscale objects – they’re immensely tiny!   We actually classify nanomaterials based on how many of their dimensions are less than 100 nanometers in length –   If all three dimensions are less than 100 nm, we call them “3D nanomaterials” – nanomaterials of this type include nanoparticles, quantum dots, and nano-onions; some functional examples include gold nanoparticles, cadmium-selenide quantum dots, and carbon nano-onions.   If two dimensions are less than 100 nm, we call them 2D nanomaterials, which are exemplified by nanotubes and nanowires. Some common examples are carbon or titanium dioxide nanotubes, and silver, silicon, cold, and copper nanowires.   1D nanomaterials, so those with only one dimension being less than 100 nm, include thin films and 2D crystals. Nanodevices, graphene sheets, tungsten disulfide, and molybdenum sulfide are good examples of these.                 ',
'             	 So, clearly, there is great diversity under the umbrella of “nanotechnology”, and a lot of the most important components are very removed from our day-to-day experience and intuition, since everything is microscopic.   However, none of that changes the fact that new technologies and innovations are only possible through the application of a thorough understanding of the properties, behaviors, and design of objects existing at this scale.    In order to do carry out research and development and/or nanocharacterization, we need to know:               	what the material looks like; so its dimensions, structure, etc.             	what the material is made of; its component molecules, their elemental proportions, etc.             	and its properties, be they physical, chemical, or electromagnetic.   But, of course, since everything is so small, how can this information be gathered?     ',
'    The information is gathered through nanocharacterization techniques!   This graph describes currently available analytical techniques (listed in green at the top) with their analytical spot size, which describes the dimensions that can be analyzed (on the bottom horizontal axis), and their sensitivity to chemical composition (on the right-hand vertical axis).    Essentially, we can see a dozen or so techniques here, yet when we examine techniques capable of performing analyses of materials smaller than 100 nm, or “nanocharacterization”,  we see there’re only a few: FIB, or focused-ion beam; AFM, or atomic force microscopy; scanning electron microscopy, or SEM; and, far at the end there, with the smallest analytical spot size available, is TEM/STEM. While it is possible to view objects between one to five nanometers in FIB and SEM, the roles these instruments can play in nanocharacterization are limited because, at present, they can only extract chemical information from objects with at least one dimension greater than 100 nm in size. So if we need to quantitatively investigate chemical composition of and physical phenomena occurring in objects smaller than 100 nanometers, we’ll be restricted to using TEM/STEM.   ',
'               	So, we know the size constraints of the nanoscale at least require electron microscopy, if not transmission electron microscopy specifically. But, what IS transmission electron microscopy? What is a transmission electron microscope?   ➢       	TEMs follow the same principle as visible light microscopes (LMs), but use: ➢       	electrons for illumination instead of light, ➢       	and electromagnetic or electrostatic lenses to change the ray path of the illuminating “beam”, instead of glass lenses.   In the simulator, we can see electrons emitted into the vacuum by the sharp, tiny “filament” subjected to high temperature or a strong electrical field within the electron gun.  High voltage (also called high tension) accelerates the emitted electrons and this increase in velocity, and therefore total energy, will make their wavelengths shorter. We’ll hear more about electron sources and electron guns in chapter two. ➢       	The condenser lenses and their apertures are used to demagnify and control the convergence or divergence angle of the electron beam, couple in the condenser lenses stop high angle electrons, meaning they reduce the beam size and thus increase resolution.   Try opening the column of the OEMP Tecnai to see how the electron beam behaves!   ➢       	Similar to LM,  the objective lens is used for image formation and the objective aperture is used for contrast enhancement -- you can see the effects of aperture size on the image in the simulator as well. Moving from objective aperture number 4 to aperture number 1 will show the effects of aperture size on contrast.   ➢       	One large advantage of TEM is that we can examine non-conductive samples, i.e. polymers, ceramics, and biological samples.   Pause the lecture and take a moment to review these concepts with the simulator -- open the “Microscope column” view and then press the “column valves” button. What happens? Why is this happening?   Do you notice changes in the image as you cycle through the different objective apertures? The mechanisms behind this contrast enhancement will be discussed in greater detail in later material.       ',
'           	   So, if we compare the three types of microscope we’ve discussed: light, transmission electron, and scanning electron; we’ll see that the optical principles are fairly similar. In these diagrams we can see that all three depend on illumination from some sort of radiation source: maybe a light bulb or a LASER  in LM to supply it with photons, or a so-called “electron source” in TEM and SEM; the methods may be different, but the goal is the same: to provide an illuminating beam. Electron sources will be discussed in-depth in the next chapter.   That’s not the only difference, however – think about lenses! In LM we use glass lenses, but we can’t use those in TEM (for many reasons that you’ll learn about in chapter 3), so instead of glass we use one of two kinds of electronically adjustable lens: electromagnetic, and electrostatic lenses.   We can see that in all of the microscopes the rays emitted from the illumination source enter a condenser lens -- either glass in LM or electromagnetic in TEM and SEM --  and are focused into convergent or divergent beams, depending on the properties or settings of the lens.  These two terms, “convergence” and “divergence” are very important in optics, so let’s take moment to define them: “convergence” means that all the light or electron rays travel along different paths that all meet at a “focus point”. “Divergence”, the inverse, means that the light or electrons will all travel along different paths whose endpoints never meet, but instead travel outward in an expanding cone shape. You can see illustrations of “convergence” in the beams leaving the bottoms of each condenser lens, and in the “SEM”’s highly-convergent beam at the specimen, coming from the objective lens. Divergence can be seen in the beams leaving the projection lenses of both the LM and the TEM -- note the expanding cone shape.    In a LM, shown at left, a light source emits photons that travel into a condenser lens, which gathers as many photons as possible and bends them so that they converge or diverge onto the specimen. Once at the specimen, they either pass through or bounce off of the specimen. After the specimen, the rays diverge into the objective lens, which forms the image of the specimen. This image is then passed into a projection lens, which magnifies it to a suitable size for examination.    In a TEM, shown at center, electrons leaving the source enter the condenser lens, whose purpose is the same in LM, TEM, and SEM. This beam of electrons will converge or diverge from the condenser, and this is determined by the electronic state of the lens, which is how we can control how they “impinge” on, or hit, our sample. The sample thickness must be minimal for TEM -- between a few to 100 nanometers, which is much thinner than those used in LM. The electrons interact with the thin sample (also called a thin foil)  and/or pass through it (or are “transmitted”, hence the T in TEM), down into an objective system, then through diffraction and projection lenses which magnify the image. Again, despite the photon/electron difference, the lenses in an LM have the same purpose as lenses of the same name in a TEM.   Now, looking at the diagram on the far right: we can see a large difference in SEM: their sample is much lower in the system, and they apparently don’t rely on transmission to produce images, but instead use scanning to construct a picture of a surface pixel-by-pixel, or point-by-point. Other than this difference, you can see that their optics are initially still fairly similar. The major difference is the fact that SEM scans a beam across the surface of the specimen with scanning coils. The signals generated by the specimen in response to the scanning beam can be gathered and viewed as images using electron detectors.       ',
'               	So let’s summarize and compare the differences between a light microscope (LM) and a TEM:               	LMs use photons, while TEMs use electrons.   This brings us to our next point of comparison: the wavelength of the source radiation. The photons used in the average visible LM are, by definition, restricted to wavelengths between 400 to 800 nanometers, the range of the visible spectrum.   The electrons used in TEM, however, have an ideal wavelength far below one nanometer, being 0.00254 nanometers for electrons subjected to 200 kilovolts of acceleration.   These electrons, however, must travel within a vacuum. In a LM, air or immersion oil are frequently used as optical media – in TEM, this would be impossible. This is why electrons are only useful to us when they’re kept within a vacuum chamber, so for TEM we consider our “medium” to be vacuum. Vacuum systems are one of the factors contributing to the high cost of purchasing, installing, and maintaining a TEM.   And, as we already mentioned, LM uses glass lenses whereas TEM uses electromagnetic or electrostatic lensing. This is another source of expense -- glass is much cheaper!   Numerical aperture angles are also starkly different, with those in LM generally being less than sixty degrees but those in TEM are usually less than one degree. The numerical aperture, NA, is a dimensionless number that we use to describe the range of angles at which it is possible for an optical system to either emit or accept radiation.   Contrast is achieved in LM through the absorption, reflection, scattering, diffraction, or fluorescence of visible light. In TEM, though, it is achieved through the interactions of electrons – namely mass-thickness, diffraction, Z contrast, and phase.   The resolving power is what we call the microscope’s ability to produce images that contain distinguishable objects rather than blurry messes. For a LM, anything smaller than about 200 nm can’t be distinguished as its own object in an image. In modern TEMs, however, we can resolve sub-Angstrom features!   .      ',
'           	   The differences between TEM and SEM are a little less stark than those between light and electron microscopes, but still, they do exist and make it easy to see why each technique is invaluable to the nanotechnologist in its own right.   SEMs work through detection of information about the specimen surface, while TEMs detect information through the specimen. This of course has practical considerations in that an SEM specimen could be a piece of minimally prepared bulk material, a FIB-milled cross-section of a semiconductor device, or even an entire silicon wafer. TEM specimens, however, usually require extensive preparation before they are both small and thin enough to be examined.   SEMs also have a spatial resolution that is a quite a bit poorer than TEM – with about 0.4 nm being the lower limit of SEM, and 0.069 nm being the lower limit of TEM. Likewise, the spatial resolution of composition analyses in SEM is limited to a micron to a few hundred nanometers at best, while TEMs are able to give atomic resolution analyses.   The signals they rely on for data acquisition are also different – SEMs rely mainly on secondary and backscattered electrons, while TEMs use transmitted and diffracted electrons. Both systems, however, use X-ray detection for quantification.   And, as was mentioned earlier, the images are formed in different ways; SEMs “raster” or regularly scan the electron beam in a series of parallel lines across the surface of the sample – this makes them fairly dissimilar from both TEMs and VLMs, since these techniques are static and require the transmission of radiation through the specimen. Many modern TEMs also have the ability to raster their beam, however, since this is the basis of “STEM” or scanning-transmission electron microscopy.   And, since the images are formed differently, they give us different data: SEM images are 3D, while TEM images are 2D though 3D information may get by post imaging processing.     ',
'   Of course, the TEM is a much more recent invention than the LM – in fact, the first demonstration of imaging with a TEM occurred less than one hundred years ago, in 1932! Of course prior to that important work was done that allowed the TEM to come into being; de Broglie’s 1924 PhD thesis postulated the wave-particle duality of the electron, and the wave properties of all matter – this, along with Clinton Davisson and Lester Germer discovery of electron diffraction a few years later in 1927, began to paint a picture of the electron as a particle that could be used in optical applications.   The first electron micrograph was demonstrated by Ruska and Knoll in 1932, and shortly thereafter in 1936 the first commercial TEM, the Metropolitan-Viskers EM1, went into production in the UK.   Two years later in 1938 Von Ardenne built the first scanning electron microscope, and in 1939 regular production of commercial TEM systems was underway in Germany, with Siemens and Halske.   Then, in 1941, the first electron energy loss spectrum (or EELS) was reported by Ruthermann.   TEMs became widely available from several major companies such as Hitachi, JEOL, FEI/Philips, RCA, Carl Zeiss, and many others after then end of World War Two.     ',
'   This is the first TEM, built by German scientist Knoll and Ruska in 1932, with both men pictured. At that stage, the resolution of this microscope was actually worse than that of the light microscopes of the time. In 1986, 54 years after this initial demonstration, Ruska (along with two others, Binnig and Rohrer) received the Nobel prize for the development of the TEM.       ',
'   In the past 60 years, however, significant improvements have been made for the development of the TEM and its techniques –   In 1951 X-ray microanalytical tools began to appear, and in 1965 the first scanning transmission electron microscope was described after being built at Argonne National Laboratory.   In 1983 Bonstanjoglo and Horinek proposed the first “ultra-fast” TEM for dynamic process research.   In 1984 Dubochet developed cryo-electron microscopy, which enables unprecedented views of important biomolecules. He won the Nobel prize in Chemistry of 2017   The first commercial image energy filter, the GIF 200, an important analytical tool, emerged around 1994.   1998 saw Haider et al. Install a spherical aberration (or Cs) corrector that allowed for 1.3 angstrom resolution in TEM, and this was repeated by Krivanek in 1999 who installed a Cs corrector on a STEM.   Then, in 2003 the first commercial, spherical aberration corrected TEMs went into production.   In 2008, the TEAM project led to the improvement in Cs correction, giving a 0.5 angstrom resolution.   2009 saw Cs and chromatic (or Cc) correctors being developed by the TEAM project, and in 2010 low voltage Cs correction for TEM was developed by the SALVE project.           ',
'           	   Many groundbreaking discoveries made within the last several decades can be attributed to the assistance of a TEM --   For example, in 1958, P.B. Hirsch et al. discovered dislocation lines and loops in crystalline solids using diffraction contrast in CTEM that was pioneered in the late 1950s at Cambridge (UK) by Hirsch, Howie, and Whelan. This was one of the most significant and unexpected findings made using a TEM, since it was the starting point of the emerging impact TEM would have on microscopic studies and observations in metallurgy in the coming decades  all around the world.   The second example is the discovery of the quasicrystal in 1984 by Schechtman et al, which was  made using electron diffraction. The appearance of the diffraction pattern implied that the metal alloy under examination possessed a previously un-thinkable atomic organization. This led to the description of a beautiful new kind of crystallinity, called “quasicrystallinity” that was previously unthinkable.   The third example is the brilliant identification of carbon nanotubes by Iijima in 1991 based on a combination of HREM images with atomic resolution and microdiffraction. The unique properties of this novel material led to a surge of interest in nanotechnology.   The last example, from 1992,  is the live visualization of vortex lines in superconductors at liquid helium temperature and under dynamic magnetic field that was first reported by Tonomura and colleagues.   Clearly, then, the TEM not only has nanocharacterization capabilities, but also has a well-established and significant track record of discovery in the field!     ',
'   As we’ve seen, many types of TEMs have been developed or improved since the 1930’s, leading to the existence of the modern TEM as a complex, computer-controlled machine.   These modern TEMs, however, are still fairly diverse, and can be classified in different ways – we can classify them by their maximum voltage, in which case those operating at or below 60,000 eV (or 60 keV) are called “low voltage”, with 80 to 300 keV instruments being classed as “intermediate voltage”, TEMs operating at or beyond one MeV being “high voltage”.   We can also classify them by function:   Generally speaking, straight-forward TEMs without scanning nor analytical capabilities are called “conventional TEMs” or “CTEM”s. They only have TEM imaging and diffraction modes.   Those that are capable of achieving very high resolutions are called “high resolution TEM”s or “HRTEM”s.   However, most modern microscopes, like PSU’s Tecnai, are both scanning AND transmission electron microscopes. These are sometimes called “S/TEMs”, but are usually just called “TEMs” because the dual functionality is so commonplace in modern instruments.     There are some platforms that only perform STEM alone -- these are called dedicated STEMs (aka DSTEMs), or just STEMs. These dedicated STEMs are designed to perform STEM and, usually, elemental analysis efficiently.   By adding X-ray dispersive  or electron energy loss spectrometers for chemical composition analyses, a TEM gains analytical capabilities, and therefore, it can be called an analytical transmission electron microscope, or ATEM. Technically, PSU’s TEM is an ATEM, since it has both EDX and EELS capabilities.   Perhaps the most modern and most fascinating, though, is the dynamic transmission electron microscope, which can probe both very small size regimes and very small time scales– using a pulsed electron beam, the so-called DTEM  has sensitive cameras that can produce sequences of images documenting the physics of “very-fast” nanoscale phenomena, that occur within nanoseconds.   Environmental TEM, or ETEM can be performed either using in-situ holders from commercial vendors or modify the stage of the TEM to produce an environmental TEM. Further reading is in chapter 2 of CB Carter and DB Williams edited Transmission Electron Microscopy Diffraction, Imaging, and Spectroscopy.   Cryo-electron microscopy specifically refers to experiments within an electron microscope taking place at liquid nitrogen or liquid helium temperatures. Any TEM may be able to perform cryo-electron microscopy as long as it has liquid nitrogen cooling, a compatibility designed cryo-holder, and cooling cryo-blades installed into the column. This is beyond the scope of this course. Further reading can be found in https://pdfs.semanticscholar.org/7bd0/8c9a161a9a7c60709122b10823d0653e5e32.pdf and Joachim Frank, Three-Dimensional Electron Microscopy of Macromolecular Assemblies: Visualization of Biological Molecules in Their Native State,             ',
'               	This is the schematic of the so-called “pole-piece” region within an ETEM. This is where the sample sits, directly between the two halves of the objective lens. This design makes use of “differential pumping”, which allows areas of different pressures to exist within the microscope. This allows us to expose the sample to controlled amounts of a selected gas and study the interaction between the two while pumps maintain the necessary high vacuum in the gun and camera chambers.     ',
'               	Current 200 and 300 kV TEMs can combine aspects of all the different types of TEMs and STEMs we just discussed.    Three major manufacturers of TEM dominate the commercial market at the moment: FEI (now Thermo Fisher Scientific), Hitachi, and JEOL.   Pictured are current-production TEM platforms. All of these microscopes can be upgraded with different detectors, correctors, and energy filters that will allow them to achieve sub-nanometer resolutions.     ',
'               	The Hitachi HD-2700 is an 80-200 kV field-emission-gun scanning transmission electron microscope (FEG STEM) with secondary electron (SE) imaging capabilities similar to SEM.   Nion’s UltraSTEM 200 is designed for chemical analysis and imaging at the atomic scale. The microscope was designed to be optimized for high spatial and spectral resolution mapping.           ',
'               	Dynamic TEMs use laser-pulses to produce “bunches” of electrons that, combined with special sensors, enable users to investigate unstable or transient chemical and physical processes. This is also called “4D” TEM, because data is resolved spatially and temporally.   Electron microscopy and diffraction with high temporal resolution has opened the door to the possibility of directly observing processes that occur in non-steady states of the substances being examined. A temporal resolution on the order of 100 fs corresponds to the transition of a quantum system through an energy barrier of a potential surface, describing a chemical reaction in the processes of breaking and forming new bonds of the interacting agents. The advances thus also open the possibility of investigating the coherent nuclear dynamics of molecular systems and condensed matter.     ',
'           	 In the past decade, TEM/STEM performance has been pushed to sub-angstrom resolutions by the invention of the spherical and chromatic aberration correctors. In this excellent image from Haider et al.’s Design and Test of an Electric and Magnetic Dodecapole Lens, we see a  cross section of a real spherical and chromatic aberration corrector from Darmstadt that has been sawn completely in half. At the top, we can see the gold-colored “liner tube” extending down the corrector’s centerline. This is kept under high vacuum, and is where the beam travels. We can also see the copper coils of the objective lens near the very top as well – these are highly conductive and are used to wick heat away from the lenses.   Below the larger coils we see the split polepiece with its upper and lower portions, and below the bottom polepiece we can see the five multipole elements of the corrector. The central element is a long dodecapole with two coils on each pole. Below the corrector are deflectors for alignment of the beam before it enters the projectors.         ',
'           	   Here we see the central part of a smaller spherical aberration corrector, used by Krivanek et al. to correct the spherical aberration of a VG STEM in 1997 (courtesy of O.L. Krivanek).   These two images are not intended to explain correctors in detail -- our aim is only to provide an introduction to these technologies within this lecture. If you’re interested, consult the given references for more information, since the specifics of aberration correction are far too detailed to be explained within the time constraints of this course.     ',
'           	   Although there are many different kinds of TEMs, the typical commercial A-S/TEM we can expect to encounter will have five things:   •         	an illumination system composed of a electron source and gun with high voltage power supply and 2-3 condenser lenses and apertures,               	The electron source is what is used to emit electrons via thermionic, Schottky, or cold-field emission. The condenser systems permit the variation of the illumination aperture, and the area of the specimen that is illuminated.   2) an image/diffraction system composed of an objective lens, diffraction lens, intermediate lens, and projector lens(es).             	             	These components allow the electron density distribution coming out of the specimen to be converted into an image or diffraction pattern.   3) an image or diffraction pattern recording system such as a CCD or direct electron camera, HAADF detector, phosphor screen, etc.               	which allow the data in the TEM to be converted into physical or digital records for later study.   4), a vacuum system made up of connected pumps, gauges, tubes, and valves,               	which all work together to keep the liner-tube and other areas of the column under high vacuum.   and 5) accessories like the EDX detector, Gatan GIF system, etc.   You can review the details of CEMN’s Tecnai in the “TEM Hardware Overview” video.     ',
'           	   There are no speaker notes on this slide.   ',
'           	   Generally speaking, two spectrometers are very popular in modern TEM.   One is the x-ray energy dispersive spectrometer (EDS/EDX). This detector is usually installed on the side of the column so that X-ray signals can be collected from above the specimen. The detector can be made from lithium doped silicon (SiLi), germanium, or a silicon device senor. SiLi detectors are getting less and less usage because of their low count-rate and somewhat demanding cooling requirements.   Silicon device sensors, also called silicon drift detectors (SDDs), are becoming much more popular. The SDD detector is fabricated from high-purity silicon with a large area contact on the entrance side to detect incoming X-rays. X-rays are converted to photoelectrons within the detector, and these photoelectrons “drift” to the small anode contact, which is surrounded by a number of concentric drift electrodes on the back side of the detector,  where the photoelectrons are converted to an electrical signal. This signal is collected by a computer where it can be viewed or processed. The detected signal is proportional to the amount of X-rays that were generated by constituent elements that make up the specimen.   The working principles will be discussed in a later chapter on detector technology.     ',
'           	   The other popular spectrometer is the electron energy loss spectrometer (EELS) in TEM/STEM. Some electrons lose energy due to interactions with the specimen. These are called “energy loss electrons”. In EELS, a bending magnet acts as a prism that directs electrons of different energies to different positions on the spectrometer; a slit selects electrons of desired energy loss. EELS is usually performed either by dedicated spectrometer, such EFINA, or Gatan imaging filter (GIF) camera. The GIF camera system has both spectrometer and imaging functions.   In the GIF system, the unfiltered image of the sample is formed by the TEM. The prism transforms the image into a spectrum, which is energy-filtered with an energy selecting slit. The selected part of the spectrum is transformed back into an energy-filtered image, which is then measured by a suitable detector.     ',
'           	   When electrons interact with the specimen, many different signals are generated, including:   Secondary electrons Backscattered electrons Auger electrons X-ray photons Transmitted electrons, Inelastically diffracted beams, and Elastically diffracted beam.   Secondary, backscattered, and Auger electrons, and X-ray photons are all signals of interest in SEM.     In a S/TEM system, we detect the elastically scattered beam in order to form diffraction patterns, and use the inelastically scattered electrons to perform EELS or other energy-filtered analyses. X-ray photons are used for elemental composition analyses in all TEM systems equipped with X-ray detectors.   To do any of this, though, the specimen must be thinned until it is electron transparent. Electron transparency is usually achieved with thicknesses between 5 – 100 nm for 100keV electrons, depending on the density and elemental composition of the object, and the resolution that is required. Since we have to get the tiny specimen so thin, special preparation techniques must be employed. Electropolishing and ion beam milling of materials specimens, ultramicrotomy of stained and embedded tissues, and cryofixation in the biosciences are examples of the preparation methods that are used to achieve this.   However, once we have prepared the sample, what can be done with it?   Well, in a TEM, we can gather images of the material with resolutions of our choosing between micro-scale and atomic resolution,   Or, when working with a crystalline specimen, we can perform electron diffraction experiments, which give us detailed, high-spatial-resolution crystallographic information like:               	crystal orientation             	lattice parameters,             	specimen thickness,             	and more.   We can also perform chemical analysis with high spatial and energy resolution. In this context, “high energy resolution” means being able to discriminate between electrons at sub-eV energy ranges, and “high spatial resolution” meaning we can resolve atomic features.         ',
'               	As a summary: in a TEM, there are many signals generated by the interactions of the beam and the specimen. Provided we have the right detectors, all of these signals can be detected. We need different types of detectors because these signals differ based on how they were generated, with most signals being generated either by elastic or inelastic scattering processes. The scattering process will determine the appearance of contrast (or relation of bright and dark) in TEM images. This means that the scattering process shapes what we “see” with the TEM, and that by selecting different types of signals, or different types of electrons, we can change the kind of data we extract.   Elastically scattered electrons are used to form diffraction patterns, which can be seen in “diffraction mode”.   Inelastically scattered electrons can be used to determine the elemental makeup of a sample in a spectroscopy mode like EDX or EELS.   Transmitted and/or scattered electrons can be used to gather structural data, as well as to form images. This is done in imaging mode.   To select between all of these different signals, though, we must temporarily re-configure the optics and detectors of the TEM. We’ll refer to this as changing the “mode” of the TEM.     ',
'   In CTEM, there are two major modes of operation: imaging, and diffraction.   If we examine the ray diagrams of image mode at left, and diffraction mode at right, we can start to form an idea of what’s going on.   These two modes can be switched back and forth by changing the strength of the intermediate lens. In imaging mode, we see that stronger intermediate lens settings lead to the formation of the second image after intermediate lens, but before the projector lens. This second image is further magnified by the projector lens onto the fluorescence screen or camera, where we perceive it as an image of the sample -- this is why we call it “image” mode.   A weaker intermediate lens positions the diffraction pattern between the intermediate and projector lenses. This diffraction pattern is further magnified with the projector lens, causing it to appear on the fluorescence screen or camera in “diffraction” mode. More details will be discussed in chapter three.   ',
'           	   As we have said, in modern TEM, STEM is usually integrated into the same system. But what does this mean? Well, in STEM mode:   ➢       	The beam deflection coils are controlled by the STEM unit and become scanning coils ➢       	A small probe is formed above the specimen ➢       	scanning coils make the probe raster across the specimen ➢       	The transmitted and diffracted electrons can be detected by the bright- or annular dark- field detector below the specimen. ➢       	X-ray signal can be detected by an EDS detector above the specimen. ➢       	EELS signal is detected “post-column”, in a curving energy filter apparatus underneath the TEM ➢       	Such a configuration allows us to acquire image and spectrum information simultaneously.   This configuration also makes elemental line scanning and mapping, strain mapping possible.     ',
'           	   However, if we were to compare the performance of a S/TEM like the Tecnai with that of a a dedicated STEM instrument, we would see that they permit much higher resolution microanalysis than the S/TEM and are also easier to use. The dedicated STEM works on the same principle as the normal scanning electron microscope (SEM): by forming a focused beam of electrons that is scanned over the sample, some desired signal is collected to form an image. The only differences are that the DSTEM will generally be much more powerful than the SEM, and will also have a much thinner specimen.    This figure gives an illustration of the multi-signal strategy in a modern STEM instrument with its electron source on the bottom of the microscope. Two channels of parallel information are displayed: ADF, EELS and EDX elemental mapping of the atomic structure and composition in SrTiO3 (left); ADF, EELS plasmon map and cathodoluminescence (CL = photon emission spectroscopy) on a single Ag nanoplatelet (right)   ',
'           	   So, you’re now aware of the three core modes of a S/TEM. These modes allow access to usually complementary sets of information about the specimen that we need to complete micro- and nano-analyses. Within the three modes, various techniques are available.   Starting with TEM imaging mode, the key techniques are:   bright field (BF), dark field (DF), conical dark field, centered bright field (CBF), centered dark field (CDF), weak beam dark field (WBDF), Lorentz microscopy, electron holography, high resolution electron microscopy (HREM), etc.   In all BF techniques, an aperture is placed in the back focal plane of the objective lens which allows only the direct beam to pass. In this case, the image results from a weakening of the direct beam by its interaction with the sample. Therefore, mass-thickness and diffraction contrast contribute to image formation: thick areas, areas in which heavy atoms are enriched, and crystalline areas appear with dark contrast. It should be mentioned that the interpretation of images is often impeded by the simultaneous occurrence of the contrast-forming phenomena.   In all DF techniques, the direct beam is blocked by the aperture while one or more diffracted beams are allowed to pass the objective aperture. Since diffracted beams have strongly interacted with the specimen, very useful information is present in DF images, e.g., about planar defects, stacking faults or particle size.   In HREM, a large objective aperture has to be selected that allows many beams including the direct beam to pass. The image is formed by the interference of the diffracted beams with the direct beam (phase contrast). If the point resolution of the microscope is sufficiently high and a suitable crystalline sample oriented along a zone axis, then high-resolution TEM (HRTEM) images are obtained. In many cases, the atomic structure of a specimen can directly be investigated by HRTEM.     there are also three major imaging techniques available in STEM-imaging mode, depending on the configuration of the microscope:   Bright field (BF), dark field (DF), and Z contrast in HAADF   the bright field (BF) detector detects the intensity in the direct beam from a point on the specimen in BF mode.   The annular dark field (ADF) detector is a disk with a hole in its center where the BF detector is installed. The ADF detector uses scattered electrons for image formation, similar to the DF mode in TEM. The measured contrast mainly results from electrons diffracted in crystalline areas but is superimposed by incoherent Rutherford scattering.   The high-angle annular dark field detector is also a disk with a hole, but the disk diameter and the hole are much larger than in the ADF detector. Thus, it detects electrons that are scattered to higher angles, and it is mostly incoherent Rutherford scattering that contributes to the image. Z contrast imaging uses n high angle annular dark field detector to detect the electrons that had large scattering angles. Their intensity is proportional to the square of atomic number of the atom that scattered them.   I diffraction mode, the intermediate lens is weakened so its object plane matches with the back focal plane of the objective lens. This allows the diffraction pattern to be formed above the projector lenses. Five major diffraction techniques are available in a TEM:  selected area electron diffraction (SAED), convergent beam electron diffraction (CBED), nano-beam electron diffraction (NBED), large angle CBED (LACBED), and Kikuchi diffraction.   In SAED, a parallel incident electron beam impinges on a large area of the specimen. The SAED pattern is formed by using the SAED aperture to select small area of the first image below the objective lens. This “selected area” is then allowed to form the diffraction pattern. These may be spot patterns in single crystal specimens, non-continuous ring patterns in polycrystalline specimens, and continuous ring patterns in amorphous specimens.   Convergent beam electron diffraction (CBED) is a diffraction technique in which the electron beam is converged in to a small probe on the specimen, rather than using parallel illumination as for SAED. CBED is a good method for navigating reciprocal space while tilting the specimen and aligning on zone axes, by way of the strong Kikuchi lines present in the off-axis CBED pattern. The on-axis CBED pattern consists of diffraction disks analogous to the spots in a SAED pattern (with the size of those discs determined by the convergence angle of the beam). However, compared to SAED, CBED patterns can be obtained from much smaller volumes of material (as determined by the size of the electron probe), thus enabling very localized crystallographic analysis. Further, unlike SAED, CBED gives information about: specimen thickness; unit cell and precise lattice parameters; crystal system and true 3D crystal symmetry (inversion centres, point group and space group); and enantiomorphism.   Nanodiffraction technique use an almost parallel beam of nanometric size. Therefore, NEBD can be used to generate diffraction patterns from single nanoparticles.   Large angle CBED is a variant of the CBED technique, in which the beam is converged below the specimen plane and so illuminates a larger area of the specimen. It provides an alternative to conventional TEM contrast methods for analysing defects such as twins and dislocations, and can be used for strain measurements and thickness determination.   Kikuchi diffraction occurs when a specimen is thicker, where diffracted beams can act as incident beams interacting with the specimen. Therefore it involves”plural” electron scattering. This pattern usually appears as one or more bands which cross each other. Kikuchi patterns serve as “roads” microscopists use to orient the specimen using known crystallography while it is inside the microscope.   There are usually two spectrometers are available for TEM/STEM spectroscopy modes: EDS and EELS.  EDS relies on X-rays generated by interactions between high energy incident electrons and the specimen. The peak intensity of the detected X-rays is proportional to the elemental composition of the sample.   EELS is performed by isolating and analysing the electron energy loss signal. EDS is faster and easier to interpret, but suffers from low energy resolution and poor sensitivity to light elements. EELS is more complicated, but has higher energy resolution, and is more sensitive to light elements such as oxygen, nitrogen etc. In combination with STEM, qualitative and quantitative line scanning profiles and elemental maps can be created with either method.  In addition, in EELS, energy filtered TEM (EFTEM) uses a slit to choose the specific range of electron energies that should be used to form an image. This technique makes elemental mapping possible in TEM mode without requiring STEM functions.   Between diffraction and spectroscopy we can combine the techniques of  CBED and Energy filtered TEM to perform CBED analyses of much thicker specimens. Usually a thicker specimen will be required for strain analysis in order to minimize the undesired artefacts caused by sample preparation. Within pure spectroscopy, however, the key techniques are EDX and energy-loss analyses like EELS. Then, coming full-circle to the overlap between spectroscopy and imaging we see elemental mapping, which utilizes both STEM imaging and EDX or EELS analyses.       ',
'               	In TEM/STEM, the contrast mechanisms vary in different imaging techniques and specimens. These contrast mechanisms include:   ➢       	Mass-thickness contrast: where scattering creates contrast due to difference of atomic number (Z) and/or thickness t; scattering is proportional to Z squared t.  Higher-Z or thicker areas are darker in BF.  This contrast mechanism is applicable to crystalline or amorphous materials.   ➢       	Diffraction contrast: in which scattering creates contrast due to differences in diffracted intensity. This is what produces contrast of dislocations, grain boundaries, stacking faults, second phase particles, etc.  Strongly diffracting objects are darker in BF.  This method is applicable only to crystalline materials.   ➢       	Phase contrast: interference between transmitted and diffracted beams produces lattice fringes or “atomic structure images” (typically referred to as HRTEM or high-resolution TEM)), holography etc     ',
'           	   Mass thickness contrast is the dominant contrast mechanism for amorphous, polymer, and biological specimens in TEM and STEM imaging. The image at left is an example of the appearance of a bright-field image of a biological cell being infected by bacteria. To the right, though, is an example of STEM ADF image of biological cells support on carbon film. The carbon film is darker than the cells due to its lesser mass.     ',
'               	Centered bright/dark field imaging is accomplished by inserting an objective aperture into the back-focal plane of the objective lens. The aperture allows us to select the transmitted (during BF) or diffracted beam (during DF) to form an image. The image at top right is a bright field view, in which strong diffraction appears dark. The image on low right is a centered dark field image of the same area. Both were taken from 3D printed Ti-6V-4Al alloy, and dislocations can be observed in both images. Dark field is better suited for defect analyses like this.   These contrast mechanisms, like those presented before this, will be discussed in-depth in later material.     ',
'           	   High-Resolution Transmission Electron Microscopy, or HRTEM or HREM, is a technique capable of resolving information about individual planes of atoms in the crystalline lattice. The lines in HREM images, like these of iron (III) oxide nanoparticles and indium phosphide nanowires are (ideally) closely related to the planes of atoms in the crystalline lattice. That said, these images are not intuitively interpretable, even though they seem to be. For instance, how are we to know if the atoms are the brighter areas or the darker areas? This is just one of many issues complicating the interpretation of data from HRTEM, and is a reminder as to why HRTEM images alone should not be considered informative unless the conditions surrounding their acquisition are well-known and the conclusions informed by them have been confirmed via computer simulation.   This technique can accomplished with or without a relatively large objective aperture to select both the transmitted beam and one or more diffracted beams (so-called “multi-beam condition”) exiting the specimen. This allows for phase contrast imaging of lattice fringes, which is why these images are said to only be “related” to the position of atoms in the lattice; the dots we see are not directly related to atoms in the specimen -- . Simulation is required to confirm the locations of the atom column.           ',
'               	Here is a very good example of the visual differences between phase and Z contrast in the same object – looking at the BF and HREM images of this iron oxide nanotube vs the STEM Z contrast image, we can see the discrepancy between the apparent position of the atoms. In Z contrast image, the bright dots show the position of the atom column, but they appear to darker in the HREM image.     ',
'               	The next important mode to discuss is diffraction mode. In diffraction mode, as we’ll recall, the intermediate lens is weakened so that diffraction pattern on the back-focal plane of the objective lens is magnified by the intermediate and projector lenses.     ',
'               	You may already know about the non-TEM X-ray diffraction techniques that exist. These are very popular ways to perform diffraction analysis (including phase, crystal structure, strain, etc. analyses). X-ray diffraction is also faster and much cheaper than TEM. This of course makes us wonder why we need to study, or even use, TEM electron diffraction in the first place.   Although electron and X-ray diffraction share similar diffraction mechanisms, but they are different. XRD, of course, uses X-rays as the radiation source, whereas electron diffraction uses electrons.   The sample prep. process for XRD is usually very simple compared to that of TEM, since the former can be bulk material or powder, while the latter requires precise thin foils of material. The speed of XRD is also usually greater than that of TEM electron diffraction (ED).   The spatial resolution, however, is much greater in TEM – XRD gives spatial resolutions between millimeters and microns, which are huge given that TEM ED spatial resolutions are between microns and nanometers. Therefore, electron diffraction in TEM is highly desirable for nanomaterials and devices over XRD, since the latter will not be able to give precise measurements at the nano-scale.   The accuracy, or ability to correctly determine lattice parameters, of XRD is generally high. In TEM the accuracy is variable depending on the technique we use – low-angle convergent beam electron diffraction, or LACBED, tends to be the most accurate.    So, we now know that despite some of XRD’s superficial advantages, TEM electron diffraction is still critical for the analysis of nanomaterials.   Is the material highly ordered (crystalline)? Does it lack long-range order (is it amorphous)? If a crystal: what do we know about its crystallography? Is it a single crystal? Is it made of many component crystals (grains)? If so, how can we describe the grains? (morphology, grain size distribution?) How are the grains oriented with respect to one another   ',
'           	   Optical diagrams of the four diffraction diffraction techniques is presented here. SAED uses parallel illumination to form spot diffraction patterns. The area of the diffraction can be selected by an SAED aperture. Using nano-sized, nearly parallel incident illumination, nano-diffraction appears as small discs. CBED uses convergent and focused beam on the specimen. Non-overlapped discs can be formed by selecting a proper C2 aperture and spot size, which will be different for different specimens and different orientations.   Non-overlapping disks, also called a Kossel-Mollenstedt pattern, can be obtained by selecting a C2 aperture with alpha less than the Bragg diffraction angle, theta. Thus, alpha should be adjusted for the particular specimen and orientation.   In turn, a 10 um, 50 um, 70 um, or 100 um C2 aperture can be used to acquire non-overlapping disks.   Overlapped disks can be formed with large convergence semi-angle, alpha. This pattern is also called a Kossel pattern. The diffraction technique is called large angle CBED (LACBED). Both CBED and LACBED techniques can be used on (relatively) thicker specimina. Therefore, Kikuchi diffraction lines are always visible in both patterns at medium and small camera lengths. In this condition, Kikuchi lines are much more prevalent than  they are in the SAED conditions. Kossel patterns and Kikuchi lines appear at the same time if using a relatively small camera length -- this can be useful for determining specimen orientation during tilt.             ',
'   Nanobeam electron diffraction can be carried out in STEM mode, using the smallest C2 aperture.   ',
'           	   Analyses of chemical composition within the TEM are completed using an EDS system. EDS makes use of the X-ray spectrum emitted by a solid sample after it has been bombarded with a focused beam of electrons. These X-rays can then be used obtain a localized chemical analysis. This technique is possible within SEM and TEM, but the two illustrations towards the bottom of the SLIDE illustrate the advantage of using a TEM for EDS analyses of nanomaterials.   First, let’s establish the principle behind EDS – a fine probe is directed on to the surface of a specimen, and its effects are evident within a certain volume of the sample – the “interaction volume”. This interaction volume depends on the accelerating voltage, critical excitation energy of the specimen elements, specimen density. Focused incident electron beam first penetrate into the specimen and their speed is reduced. A neck region is formed. After the neck region, the electron speed get significant reduced. Multiple scattering occurs and eventually electron speed become zero. the multiple scattering occurs inside the specimen form a large volume if the specimen is thicker enough.  If we examine the interaction volumes, we see that signal generation in SEM EDS occurs within a sphere of diameter of approximately one micrometer.  TEM EDS, on the other hand, has an interaction volume that is between half a micron and one nanometer. This difference is mainly due to two things: one having to do with the sample, and one having to do with the probe. The bulk specimen in SEM has large interaction volume because of multiple scattering. TEM specimen is thin enough for electrons only to be scattered in the “neck” region of the illustrated volume.   As far as sample preparation is concerned, the stringency of TEM forces us to thin our sample so much that there is physically not enough specimen to allow for interaction volumes similar to that of SEM, so the spatial resolution of TEM EDS is inherently greater than that of SEM EDS.   Spatial resolution is ultimately, though, on the order of probe size (which can be as low as 2-3 Å) in TEM. To get a reasonable signal noise ratio, 0.5 - 1 nm probe size is recommended. So, thanks to the option of ultra-fine probe formation within TEM/STEM, and the rigorous sample thinning requirements, we see this advantage.       ',
'               	In combination with STEM, EDS line scanning and elemental mapping are possible. Here we can see an example of this kind of analysis by STEM/EDS. Pictured is the aluminum bonding pad of a semiconductor device.  With elemental mapping, apparent oxygen and fluorine species can be found on the top of the aluminum bonding pad. It was identified to be caused by the residue of carbon tetrafluoride etchants used during semiconductor device fabrication.     ',
'               	Another form of spectrometry available in many ATEMs is “EELS” – electron energy loss spectrometry. This makes use of a post-column “energy filter” that is, at its core, an entrance aperture that allows select electrons to pass near a very precise magnetic “prism”  that bends their path of travel towards the final detector based on their energy – lower-energy electrons are easier to deflect than those of higher energy, and this is what allows us to “sort” electrons based on energy and display the data as a spectrum.             ',
' Here is a more detailed illustration of the action of the magnetic prism on electrons – note the analogy to a glass prism bending polychromatic light into its component spectrum.   The electrons, whose energies are different from one another, coming out of the projector lens crossover pass through an entrance aperture into the tube housing the magnetic prism. The field from the prism bends the flight paths of the electrons based on their energies, with the “zero loss” electrons, or those that have lost no energy, represented by E0, being bent less than the “energy loss” electrons that have experienced some change in energy, delta E, leading to their representation as E0 minus delta E. This separation and measurement is how the EELS is formed.     R.F. Egerton, Electron Energy-Loss Spectroscopy in the Electron Microscope, DOI 10.1007/978-1-4419-9583-4       ',
'           	   Electron energy loss spectroscopy is the other important technique for chemical analysis in TEM/STEM. It is based on the fact that transmitted electrons lose energy due to plasmon excitation, or excitation of atoms by ejecting inner-shell electrons. A specific energy loss is correlated with characteristic energy state of outer shell of the specimen atoms. Instead of detecting X-ray, this technique detects electrons directly.  This spectrum ranges from 0 to 1000 eV of energy loss, but newer detectors allow for light elements to be analyzed with up to 2000 eV of energy loss.     There are 3 key regions of an EELS spectrum:   The Zero loss region— where we see the elastically scattered electrons   The Low-loss region – where we see evidence of interactions with weakly bound outer shell electrons (includes plasmon-resonance of valence electrons)   And the High loss region –  where interactions with inner shell electrons causing excitation into an unoccupied shell above the Fermi level result in characteristic elemental energy loss ”edge”.   EELS is a really powerful technique in TEM. It can be used for elemental qualification, quantification, valence state determination, bandgap determination, inter-atomic coordination, energy filtered imaging etc.   We can correlate these spectra with certain imaging modes to take advantage of energy-filtered contrast enhancement and elemental composition mapping.   Attributed to the high energy resolution, the fine edge structure of the elements can be used to determine the valence state of certain elements.   ',
'           	   Here is an example, we can determine the valence state of titanium in its different compounds via the differences between the EELS of different structures – at left between trivalent titanium oxides and tetravalent oxides, and at right between TiO2 and the boundary of a dislocation.     ',
'           	   There are no speaker notes on this slide.   ',
'           	   So far, we have learned that TEM is a powerful tool that includes various diverse techniques. What can these techniques be used for?   In TEM, we can study crystal structure, crystal defects, second-phase particles, and nanomaterials like nanoparticles, nanowires, nanorods, and more.   Within the study of crystal structure, we have the ability to determine the degree of crystallinity – single, poly, or amorphous -- as well as the exact orientation of the crystal/crystallites. We can identify the structure through diffraction, and we can evaluate the quality of the crystal through lattice imaging.   When examining defects, we can detect the presence or absence of dislocations and stacking faults, as well as grain boundaries and twins, and even dislocation Burgers vectors that reveal the nature of stacking faults.   Second-phase particle size, shape, and distribution can be determined, as well as crystallographic orientation relative to the surrounding matrix. We can also gather chemical composition data via analytical attachments like EDXS and EELS.   Nanomaterials can be characterized based on morphology, size distribution, crystal structure and orientation, as well as crystal perfection.   ',
'               	Here is an example using SAED pattern to identify the phase of the polygrains on a semiconductor device. The BF image of the plan view thin film is shown on the top right. four different zone axes SAED patterns were taken from the grains. The SAED patterns determined it is a cubic pyrochlore phase with a lattice constant of 1.035 nm.     ',
'           	   Here are examples showing centered bright field images. As you can see, these are used for crystal defects analysis, such as finding and documenting dislocations, stacking faults etc.           ',
'           	   Here is an example using STEM ADF technique to observe the nanograins in the tungsten layer of a Pentium 4 CPU. This technique allows us to perform grain size analyses as small as a few nm.     ',
'           	   And here, as we mentioned before, is an example of so—called “three-window mapping” in which energy-filtered elemental mapping of a thin film layer is correlated with images. This technique allows for high spatial resolution analysis of the thin film, and results in good signal-to-noise ratios in elemental maps. Again, if these terms are confusing, know that they will be explained in time.      ',
'           	   Another application example, this time of atomic resolution imaging of a carbon nanotube by diffraction imaging. The nanotube seen at right is the one that was studied, and after multiple exposures of the diffraction data were integrated into the image at the far left, the data was used to construct a computer model seen at center.       ',
'           	   Here we can see examples of HAADF investigations into grain boundary vacancies and precipitates – note the precision with which we can identify missing single atoms or groups of atoms in the images in group b.   These images show TEM characterizations of MoS2 layers. Image A is a Z Contras (HAADF) image of a pristine MoS2 layer and grain boundary area.     ',
'           	   In this example of atomic mapping via HAADF-STEM and EELS, we can see the order of the atoms in the crystal matrix, and can quantify them after the creation of the “spectroscopic composition image” shown in e. We can also see information about local bonding in the EELS at bottom right. “O1” in magenta and “O2” in blue are able to be both atomically resolved and quantitatively correlated to chemical information.     ',
'           	   “TEMs” are, in reality, a diverse group of instruments with different capabilities, though many share core common features.   All TEMs generate a tremendous range of signals we can use to obtain images, DPs, and several different kinds of spectra from the same small region of the specimen, as long as we have the proper detectors.   If you count up the different imaging, diffraction, and spectroscopic operations that are available in a TEM there are almost 40 different modes of forming an image, DP, or spectrum, each of which produces different information about your specimen.   No other characterization technique allows the same combination of versatility and quantification over an enormous range of sizes, from the micron to the sub-nanometer. This is why TEM, and an understanding of it, is crucial for nanotechnology.   ',
'               	So, when everything is said and done, TEM has many advantages:   Real (image) and reciprocal space (diffraction pattern) data can be obtained from the same region of the specimen   Chemical information can be gathered via EDX with high spatial resolution, and high spatial and energy resolution data gathering via EELS is possible with additional accessories.   Atomic resolution imaging via HREM and STEM Z contrast imaging   But, it also comes with its own unique downsides, like the fact that you must deal with a TINY sampling volume, and rather slow processing times for analyses.   The tools are also costly to purchase and maintain,   And require extensive, intensive training before one is capable of safe instrument operation, let alone correct data interpretation   One must also cope with the time consuming and high-skill sample preparation,   And unique but expensive issues, such as the fact that Magnetic samples require costly and specialized holders designed to avoid causing costly damage to the instrument.   ',
'               	And, remember, the TEM is a relatively new technology! If we look at a graph of resolution vs years, we can see just how massive the improvement made by even the earliest TEMs was.   The first jump around year 1930 corresponds to the advent of the EM in contrast with the usual light microscope of the day, and the second jump before year 2000 illustrates the value of EM aberration correction.   Since then, The TEAM project sponsored by the US Department of Energy has advanced imaging to 0.5Å spatial resolution in 2008.   And now, since our resolutions are so great that we’ve reached single-atom detection and imaging, the case for resolution improvement alone is not very strong.   If we are to continue the inquest into the “room at the bottom” that Richard Feynman spoke of, we’ll have to develop molecular or atomic resolution instruments and metrologies that can provide data about events happening over short time scales in real environments.   The automation of the TEM is also a developing field of interest.   With this, we’ll leave you with the words of Christian Colliex, from Seeing and measuring with electrons: Transmission electron microscopy today and tomorrow – An introduction:    “What will be the next to emerge from the most recent developments in TEM described above?    In which scientific domains will substantial progress in understanding and control of matter at the atomic scale be made?   Prediction is a difficult exercise, but it is obvious that electron microscopy has become an indispensable tool in many domains of materials science, extending its input far beyond the standard structural characterization. Within this context, the success in the realization of aberration correctors at the end of the 1990s, has obviously played a key role. But they have been substantially enriched by the systematic association of imaging and spectroscopy and/or by the development of nanolaboratory environments which allow dynamic studies under constraints. TEM has thus moved from the traditional fields of metallurgy and semiconductors to brand new domains. Two of them have been selected for specific description here, as they are and will be involved in major fields of use and application. Furthermore, the new potentialities of TEMs presented in all the above mentioned papers, will form a very rich mine because of the “easy-access” to the atomic-level parameters. The first one deals with the carbonaceous materials, and in particular with graphene, by Mangler and Meyer. The second one concerns metallic nanoparticles involved in heterogeneous catalysis reviewed here by Zhang and Su.   This spectacular broadening of the field of application of modern instruments has generated a strong surge of motivated users in many different domains of research beyond its traditional ones. In parallel, the new possibilities in spectroscopy, holography, tomography, in situ measurements, require a wide range of expertise which is rarely to be found in a single laboratory. For these reasons, several initiatives have been stimulated and pursued over the past years to connect a few specialized centers into networks with several priority missions: training, open access to specific tasks, mutual exchange for continuous improvement of hardware and software, around a limited number of selected microscopes. This final contribution therefore reports three experiments of TEM networking presently run at national levels (AMMRF in Australia – see Ringer and Apperley, METSA in France – see Épicier and Snoeck) and internationally”     ',
'           	   Depth of field is a way to express how clear an image is. The “depth” refers to the distance between the nearest and furthest objects from the detector between which the image is in good, crisp focus. With a LM we can expect a depth of field of around 10 microns at best, meaning that if there are deviations in the surface texture of the specimen that are near or more than ten nanometers, the specimen won’t be in focus – only parts will be. In a TEM, though, we have a distance of about 100 nanometers or more wherein every detail can be seen in crisp focus.   These last three facts should really drive home the advantages of TEM over LM in nanocharacterization applications – with superior resolving power and depth of field, the TEM can literally give an unparalleled picture of the material you’re working with   For example, the image on the left was taken with a light microscope, and the image on the right was taken by an electron microscope. The objects in the images are the same -- both are a kind of zooplankton called Radiozoa. Notice that in the electron micrograph you can see the entire radiozoa in high resolution -- the tip of the nearest protrusion is resolved just as well as the tip of the one furthest away from the observer. This is why having a “deep” depth of focus, like we do in SEM and TEM, is useful.        '
]

let ch2SpeakerNotes = [
    "Hi, and welcome back to our presentation on transmission electron microscopy. \n"
    +
    "In the last chapter you were introduced to the general fundamentals of TEM, and you were given an overview of the kinds of things we can accomplish with it.  \n"
    +
    "\u000bFrom now on our lectures will cover more specific topics in greater depth, and, since we can’t do TEM without electrons, we’re going to start today by discussing electron sources.\n"
    +
    "\u000bOur goal for this lecture on is to familiarize you with the three most common types of sources, the physics behind their operation, and what they mean for us as electron microscopists. While we won’t be teaching you everything there is to know about them, since that’s impossible without years of study, we intend to provide you with basic theoretical and practical understandings, as well as expose you to more in-depth references that you can study on your own to gain expertise. \u000b\u000b\n"
    +
    "\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "Before we get into it, let’s take a look at a few questions that you can use either to aid your understanding of this lecture, or to gauge how relevant the material is for you. If you can answer these easily, you may want to skip ahead. If you can’t, you will probably benefit from the information we’re about to present.\n"
    +
    "\u000bSo of course the first question that comes to mind is, “why do we need electrons”?"
    +
    "\n"
    +
    "\n"
    +
    "And, furthermore, what is meant by the, “wave-particle duality” of electrons?"
    +
    "\n"
    +
    "\n"
    +
    "How do we generate the beam of electrons? \n"
    +
    "And what is the relationship between accelerating voltage and the wavelength of our electrons? \n"
    +
    "How can we control that wavelength? \n"
    +
    "What are the criteria for a “good” electron gun? \n"
    +
    "What do we really need our source and our gun to do? And why do we need them to do those things? \n"
    +
    "\n"
    +
    "You’ll see that there are three main types of electron guns commonly found in commercial TEMs, so how do we characterize different types of electron guns? \n"
    +
    "Finally, once we know what sources exist, and what their differences are, what implications does the type of source we’re using have on the analyses we can perform, or the samples we can examine? \n"
    +
    "\u000b\n"
    ,
    "In this chapter, we will start by reviewing the basic properties of the electron. We will then discuss why we want to use electrons as a method of illumination, how to control the wavelength of the electrons, how the generate electrons in a TEM, the ways by which we characterize the electron sources and the types of electron guns, and finally we will discuss practical aspects of the electron gun."
    +
    "\n"
    +
    "\n"
    +
    "Our goals for this chapter are to provide you with the foundations of the knowledge you would need to use when deciding what kind of TEM to purchase or use for your work, and the knowledge of how to use it safely and effectively once it has been purchased. Every chapter will teach you ways to avoid destroying your microscope, and since this chapter is on electron sources, we’re going to focus on avoiding destroying those for now. "
    +
    "\n"
    +
    "\n"
    +
    "We also hope you’ll learn how the choice of electron source is reflected in the quality of your images and performance of your system, and that you’ll be able to achieve optimum performance out of your microscope and source. \u000b\u000bAnd, lastly, "
    +
    "we hope to give you the knowledge you’ll need to deal with a source that does not meet specifications. \n"
    ,
    "So as you’ll recall from general physics or general chemistry, the electron is a subatomic particle that we consider the “quanta” of negative charge -- it possesses a negative fundamental charge, so -1.6x10 to the -19 Coulombs and it’s surrounded by its own electric field because of that charge."
    +
    "\n"
    +
    "\n"
    +
    "In addition to their charge, electrons all have the same extremely low rest mass, m-sub-zero, of 9.109x10 to the -31 kg\n"
    +
    "\n"
    +
    "Electrons don’t exist solely within TEMs, however --they’re everywhere! The sharing and exchange of electrons, called Coulombic interaction, is responsible for all chemical compounds and reactions that we can observe in everyday life, including consciousness. "
    +
    "\n"
    +
    "\n"
    +
    "And, since these electrons are charged but nearly massless, we can manipulate their motion using electromagnetic fields within the TEM, and we can model the changes induced in the motion of the electrons by our fields with the Lorentz force law. \n"
    +
    "\u000b\n"
    ,
    "We’ve already mentioned that electrons have a very favorable charge-to-mass ratio, and that this makes them highly controllable -- this is how we can use the optical systems in the TEM to focus the electrons and use them to produce images! The optical systems are composed of magnetic or electric fields, and this is how we manipulate the electrons. At the bottom left you can see an illustration of an electron in an electric field, and at the right you can see an electron interacting with a magnetic field. \n"
    +
    "\u000bHowever, we can manipulate more than just their motion -- we can change their wavelengths as well, through adjustment of a parameter we call “accelerating voltage”. The small table here illustrates this – we see that when we’re accelerating our electrons with 100,000 volts, their wavelength is about 0.0037 nm. If we up that to 200,000 volts, we see that we’ve now got a smaller wavelength – 0.0025 nm! And at 300 kV we have a wavelength of 0.001969 nm, so you can see the effect of accelerating voltage on wavelength, and soon you’ll see the effect wavelength has on resolution. \u000b\n"
    +
    "Just to stress this, though – the wavelengths of accelerated electrons are extremely small -- about 10,000 times shorter than those of the sun's photons we see with our eyes. This means the resolution we achieve with a TEM will be much greater than that of a LM, meaning we can examine things that are much, much smaller. \n"
    +
    "\u000bBesides the resolution, another very important advantage of electrons is the fact that if we ourselves are controlling a beam of electrons -- which we just said essentially make up everything -- that beam will be Coulombically interacting with whatever we direct the beam at, meaning we’re not only “seeing” our sample, but can extract chemical information from it as well. "
    +
    "\n"
    +
    "\n"
    +
    "\n"
    +
    "\u000b\n"
    ,
    "Let’s take a look at the electromagnetic spectrum to see the magnitude of the differences electrons imply -- A thing to note here is that as the energy of a particle (photon or electron, either way) increases, its frequency will increase and its wavelength will decrease-- meaning, the more energy the particle has, the faster it will oscillate in space-time, and since it’s oscillating faster, it will have to cover less linear space per oscillation, so it will have a smaller wavelength! \n"
    +
    "\n"
    +
    "So we want electrons in our TEM because their wavelength is highly controllable at wavelengths much shorter than those of the photons s used in VLM and human vision, which have wavelengths of around 400 - 700 nm. \u000bOf course, there are higher energy photons, but photons with wavelengths comparable to TEM electrons are very hard to manage, because at that point they’re actually X or gamma rays, which are extremely hazardous and hard to focus.  \n"
    +
    "\n"
    +
    "\n"
    +
    "However, in the average transmission electron microscope operating at about 100,000 volts of accelerating voltage, we can impart much higher energies to our electrons, and maintain a stable wavelength despite slight variations in the voltage that we use to generate them.  At these energies, our electrons are traveling and oscillating so fast with all of this energy, that their wavelengths are actually around 0.037 Angstroms (with one Angstrom being 10^-10 meters, so the wavelength is 0.0037 nm)  in well-equipped modern TEMs,.\n"
    ,
    "When high energy electrons interact with TEM specimen, structural information can be gleaned from transmitted and diffracted electrons. Chemical information can be acquired from the  characteristic X-rays and electron energy loss as well. The fine details of these techniques will be discussed further in other chapters – just know that our incident electron beam from the source produces many useful signals when it interacts with a specimen.\n"
    ,
    "De Broglie’s 1924 thesis relating wavelength lambda to Planck’s constant and linear electron momentum\n"
    +
    "\u000bWavelength relating to voltage when not considering relativistic effects, -- usually our electrons in TEM is approaching half the speed of light, so we need to factor in relativistic effects. Apparently wavelength is inversely proportional to voltage – key point. \u000b\u000b\n"
    +
    "qV = kinetic energy = (m"
    +
    "o"
    +
    "V"
    +
    " to the " +
    "2"
    +
    ")/2\n"
    +
    "\u000bV = accelerating voltage \n"
    +
    "\u000b~~\n"
    +
    "Now that we know the inverse relationship between wavelength and energy and have seen it graphically with the electromagnetic spectrum, we can quantify the relationship. To do this we’ll use a few very basic equations that you’ve probably already seen many times before. \u000b\u000bThe inverse wavelength/energy relationship is expressed through the wave relation that Louis de Broglie postulated in 1924, and all this is doing is effectively restating mathematically what the electromagnetic spectrum showed us visually -- the fact that when we divide Planck’s constant by the linear momentum, p, of a subatomic particle, we get a fair approximation of the wavelength of the quanta, in our case, electrons. \n"
    +
    "\u000bSince momentum isn’t shown *exactly* as energy, if we equate it to the product of electron mass and velocity, we can get an approximate value for wavelength just by dividing 12.27 over the square-root of our accelerating voltage! \n"
    +
    "\u000bThough, if we set our accelerating voltage to anything more than around 100,000 volts, we’ll actually be accelerating our electrons beyond half the speed of light in a vacuum, or 0.5c. To do this and still get accurate results, we’ll have to incorporate relativistic effects, but we see that even after doing this that our equation for wavelength is still quite simple. \u000b\u000b\u000b\n"
    +
    "\u000b\n"
    ,
    "Wavelength of electron in TEM  < 3.7 picometers , wavelength of visible photons between ~ 400 – 700 nm\n"
    +
    "\n"
    +
    ">10,000 X shorter wavelength than optical\n"
    +
    "\n"
    +
    "~~\n"
    +
    "We’ve already mentioned that electrons have a very favorable charge-to-mass ratio, and that this makes them highly controllable -- this is how we can use the optical systems in the TEM to focus the electrons and use them to produce images! \n"
    +
    "\u000bHowever, we can manipulate more than just their motion -- we can change their wavelengths as well, through adjustment of a parameter we call “accelerating voltage”.\u000b\u000b\n"
    +
    "The wavelengths we achieve through this are extremely small -- about 10,000 times shorter than those of the visible photons we see with our eyes. This means the resolution we achieve with a TEM will be much greater than that of a VLM, meaning we can examine things that are much, much smaller. \n"
    +
    "\u000bBesides the resolution, another very important advantage of electrons is the fact that if we ourselves are controlling a beam of electrons -- which we just said essentially make up everything -- that beam will be Coulombically interacting with whatever it is hitting, meaning we’re not only “seeing” our sample, but can extract chemical information from it as well. \n"
    +
    "\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "Here we see Abbe's equation, which was created to model the effect of various variables on resolution, ro, in a VL system, but can be adapted and used in TEM. \n"
    +
    "For our purposes, we'll define the new variables as follows:\n"
    +
    "Eta"
    +
    " is the index of refraction between the source and the lens. In VLM this could be air, or immersion oil – it’s just the medium that the radiation travels through.\n"
    +
    "Alpha"
    +
    ", expressed in radians, is the half angle of the cone of electrons that is coming out of the specimen, going into the imaging section of the microscope.\n"
    +
    "And you can just think of this as the cone of light, or the cone of electrons that will come out of the specimen then be used to form our image.\n"
    +
    "\u000bNote that you’ll often see the entire denominator, "
    +
    "etaSin(alpha) "
    +
    "of Abbe’s equation shortened to “"
    +
    "N.A"
    +
    "”, or “numerical aperture”, which is a dimensionless quantity that determines the range of angles from which radiation can enter or exit an optical system. \n"
    +
    "\u000b\n"
    ,
    "Take a few minutes to explore Abbe's equation with this interactive module. You can enter in any value, and we've provided a list of values for different optical setups, from VLM all the way to aberration-corrected TEM -- this will show you first hand that the wavelengths found in TEM are four orders of magnitude smaller than those found in VLM! Note that the leftmost values given for electron microscopes are for 100 kV of acceleration, and the rightmost are for 300 kV instruments. \n"
    +
    "\n"
    +
    "Note the differences between VLM and TEM, so, photons and immersion oil vs. electrons and varying degrees of vacuum, and the difference between CTEM and aberration corrected TEM – we see wavelength differences of about 4 orders of magnitude between VLM and TEM, and an order of magnitude between the lowest and highest resolution TEM set-ups. \n"
    +
    "\u000b\n"
    ,
    "We have seen that the short wavelength of electrons can be achieved via accelerating the electron with high voltage, sometimes also called high tension. This results in a more than four-order improvement in resolution. Now let’s take a look at how we can generate electrons. Can we think about something in our daily life that already does this? Yeah! That is right! The cathode ray tube used in older televisions is the electron generator. It consists of one or more electron guns  which generate electrons. It modulates, accelerates, and deflects electron beam(s) onto the screen to create the images. Similar in principle, TEM also uses an electron gun to generate electrons. These electrons are accelerated by high tension, modulated and deflected by lenses and apertures on to the camera or phosphor screen where they create images. OK, let’s find out how to generate electrons."
    +
    "\n"
    ,
    "First let’s take a look at this atomic model while we remember that an atom is made up of three kinds of subatomic particles: neutrons, protons, and electrons. Electrons are fermions, a classification named for particle physicist Enrico Fermi."
    +
    "\n"
    +
    "\n"
    +
    "The Fermi level is used to describe the top of the collection of fermion energy levels, like those of electrons, at different temperatures. \n"
    +
    "\n"
    +
    "The "
    +
    "Fermi energy"
    +
    " is defined as the energy difference between the highest and lowest occupied single-particle states in a quantum system of non-interacting fermions at absolute zero temperature, where the energy of the electrons is at its lowest point. Basically the fermi level at absolute zero is the fermi energy. "
    +
    "\n"
    +
    "\n"
    +
    "In a metal, the lowest occupied state is typically considered the bottom of the conduction band.  "
    +
    "The Fermi energies of metals are on the order of electron volts. This implies that the vast majority of the electrons cannot receive energy because there are no available energy states for them to go to within a fraction of an electron volt of their present energy. At higher temperatures, however, a certain fraction characterized by the Fermi function will exist above the Fermi level and become free electrons in the conduction band. Further heating, or the application of an electrical field can potentially lead to a consistently high probability of the electrons escaping from the metal surface; this process is called electron emission. This means that we’ll always have to apply some amount of heat (anywhere between hundreds to thousands of Kelvin) to our electron source in order to facilitate emission. \n"
    +
    "\n"
    +
    "\n"
    ,
    "But, how much energy do we need to encourage electron emission? \u000b\u000bLet’s consider a case where just one electron is emitted from the metal surface. This results in a positive charge on the metal surface, and potentials between "
    +
    "the escaped electron "
    +
    "and the metal surface. The potential energy V(x) can be expressed as a function of the distance between the electron and metal surface. This is an electrical field potential whose energy is related to the work function, and columbic interaction between e- and the positive charge depends on the strength of the field that is applied – you can’t just take electrons out by hand -- you have to apply these external electric fields to “extract” them. "
    +
    "\n"
    +
    "\n"
    +
    "To address the three terms in this equation more specifically, though: \u000b\u000bthe first, q.phi, represents the work function – we can think of this as the minimum energy needed to remove electrons from the conduction band at the metal surface and pull them out into the vacuum. \n"
    +
    "\n"
    +
    "\t This second term"
    +
    ", q-squared over 16 pi eta-sub-zero all multiplied by one over x"
    +
    ", represents the interactions between the positively charged nuclei and the negatively charged electrons that we’re trying to remove from those nuclei. Because these particles are oppositely charged they will resist our attempts to separate them, and that is what this term models.  "
    +
    "\n"
    +
    "\t"
    +
    "\n"
    +
    "\tAnd this third term, q times the magnitude of E times x, represents our extraction voltage – the electric field we apply to extract electrons! \u000b\n"
    +
    "So we can conceptualize this equation as the three factors that we must overcome to stimulate electron emission, and remember that these factors are represented by each of these three terms: \n"
    +
    "\n"
    +
    "\tThe the work function, which depends on the material we chose to construct our electron source out of. It is the critical barrier for electron emission."
    +
    "\n"
    +
    "\n"
    +
    "\tThe the Fermi energy, that is defined for materials at absolute zero, that we can therefore effect via heating our source. "
    +
    "\n"
    +
    "\n"
    +
    "\tThen the final term was the extraction voltage, and again, that was an applied external electric field that the operator of the microscope controls. \n"
    +
    "\u000b\n"
    ,
    "So we just saw that the critical barrier for electron emission is the work function of the emitter material. Logically then, we should just choose a material with a very low work function, achieve emission that way, and be done with it. Sadly, that isn’t possible, and we can examine this table of work functions for selected elements to see why. \u000b\n"
    +
    "Looking at this table, we can see that cesium has the lowest work function of the elements listed, but its melting point is only 307.1K. \n"
    +
    "This is a problem, since we must apply some heat in order overcome the work function barrier -- unfortunately we’ll always need to heat sources to around 300 Kelvin or more, so this means the only currently viable thermionic sources are either "
    +
    "refractory"
    +
    " (high melting point) materials with unremarkable work functions that are useful because they can tolerate extreme heating, or compounds like rare-earth hexaborides that have low work-functions and melting points that are high enough to facilitate emission at cooler, but still elevated temperatures without melting or vaporization."
    +
    "\n"
    +
    "\n"
    +
    "For instance: W has a melting point of 3695 K with a 4.5 eV work function, and LaB"
    +
    "6"
    +
    " has a low work function Φ of 2.4 eV and a melting point of 2483 K"
    +
    "\n"
    +
    "\n"
    +
    "But if you think about it, let's look at copper here and tungsten, and when you look at their work functions, they're almost identical and tungsten is actually what we use in many electron microscopes today. So… Why do we use expensive tungsten and not the cheaper and more abundant copper? When we look at the differences in melting point between copper and tungsten, this kind of becomes clear: because we know that we need to apply around 2000 Kelvin to the filament to get it to emit electrons through thermionic emission. \n"
    +
    "\n"
    +
    "So we have copper melting at 1358 Kelvin and tungsten melting at 3695 Kelvin, the problem here is that by the time we get copper to the emission temperature it will no longer be a solid  -- it will be a vapor, and for our intents and purposes it effectively is useless even though it is an attractive emitter from a cost standpoint, in practice it is not used because it will just become a vapor before it can even emit, whereas tungsten has the high melting point and can withstand this.\n"
    +
    "\n"
    +
    "So this is why you'll usually see sources restricted to materials that are called, “refractory” materials, or ones with very high melting points. "
    +
    "\n"
    +
    "\n"
    +
    "And, as we said, this isn’t restricted specifically to metals -- you can use compounds, but again the compound has to have a melting point greater than the temperature needed to facilitate emission. Really just know that if your material melts at a temperature that is less than the emission temperature then you don't have an emitter, you just have a vaporized substance in your column. \u000b\n"
    +
    "Crystallography is also important to consider, because all of these materials that we’re considering right now are in the crystalline state; it’s a very ordered state in which the sharing of electrons is easy, meaning that we can extract them easier -- it’s just easier to work with. "
    +
    "\n"
    +
    "\n"
    +
    "You may have noticed these the sets of integers here, and you may know what these are, or you may not, but they’re called a “Miller index”, or “Miller indices”, and tell us how the crystal is oriented. So take note here that even within the same material, different orientations of that material have different work functions -- they can vary by up to an electron volt, so that's a pretty significant difference considering you're working with the same material. \n"
    +
    "\u000b"
    +
    "\n"
    ,
    "Of course, no matter what materials we choose, it seems that we still need overcome the work function barrier of the emitter. So if we think about the remaining two factors from the single electron potential model we just looked at, we can see that electrons can be emitted in the three ways: heating the filament, heating and applying an electrical field to the filament, and applying an electrical field only.  These three methods correspond to the three common electron emission gun designs: thermionic, Schottky, and field. \u000b\n"
    +
    "If you're using a thermionic electron gun, which by definition relies primarily on an increase in temperature to achieve emission, it will get very, very hot, and it will continue heating to the point where the Fermi energy has grown so much that the work function is very small, and the electrons are emitted into vacuum. \n"
    +
    "\n"
    +
    "Then the bottom, the field emission gun (FEG) relies on the application of a strong extraction voltage to a small tip-- so it'll leverage that last term from the equation and really just pull the electrons from their source. The filament is still heated to around 300 Kelvin, but compared to the temperatures of the other designs, this is “cold”. \n"
    +
    "\n"
    +
    "In the middle, the Schottky emitter, leverages what's called the Schottky effect, and will rely on both an increase in temperature and an increase in electric field around the source."
    +
    "\n"
    +
    " \n"
    +
    "So to break it down very simply, the thermionic relies on heat, the Schottky effect relies on heat and extraction voltage, and field emission guns rely purely on extraction voltage. The three correspondent electron sources are thermionic emission gun, Schottky Field emission gun (FEG), cold field emission gun (cold FEG)."
    +
    "\n"
    +
    "\n"
    +
    "\u000b\u000b\n"
    ,
    "In a thermionic emission gun, we have to heat it up, and that heating gives electrons enough kinetic energy to wiggle up into the conduction band, then hopefully out into the vacuum.The relationship between Fermi distribution and temperature can be expressed as a Fermi-Dirac function. As we heat up the filament, there is a higher and higher probability that electrons will exist in the conduction band of the emitter."
    +
    "\n"
    +
    "\n"
    +
    "Once the temperature is high enough, electrons in the tails of the fermi distribution in the conductive band acquire enough kinetic energy to overcome the work function. This is when heat energy, kT, is larger than the work function energy barrier,"
    +
    " q dot "
    +
    "πηι – ηενχε, τηερμιονιχ εμισσιον οχχυρσ."
    +
    "\n"
    +
    "\n"
    +
    "And once we have emission, when you think about how many electrons we’re getting out per time we can actually relate the number of electrons to current because of the fact that electrons possess that fundamental electric charge. This current output per time from the source is something called, “current density” --  and you can think of that as current per time, or electrons per time. So to get a measure of the performance of our cathode, we can use Richardson's law, and mathematically this just shows us that temperature is extremely important in emission and in current density -- it'll both lower the energy barrier, and as such it will increase the amount of electrons per time that we're getting out of our source.  This seems to suggest that the current density can be increased infinitely via increasing the heating temperature or reduce the work functions of the emitter.\n"
    +
    "\n"
    +
    "\u000b\n"
    +
    "\n"
    ,
    "For reasons you’ll understand soon, we would like to get the highest emission current density possible. There are a few ways to go about this:\n"
    +
    "\n"
    +
    "Richardson’s Law  seems to say that that the current density can always be increased via increasing the temperature of the filament, which is what we call the electron source because of the shape of the emitter. Sharper and smaller filaments allow for easier emission, but we will discuss that later when we learn about field emission electron guns."
    +
    "\n"
    +
    " Right now we need realize that although we get more electrons per time as we increase temperature, there exists a point, called “saturation”, beyond which the curve of filament heating current vs filament emission current plateaus – so, past a certain temperature the only effect you really see is quicker degradation of your source, not an increased emission current. To avoid that pointless degradation, we choose to operate just below the saturation point, but have to take care to stay near saturation, since operation too far from saturation will result in decreased brightness and analytical signal."
    +
    "\n"
    +
    "\n"
    +
    "So, unfortunately, we’re limited in our application of heat either by filament melting point OR the filament heating current/emission current plateau. \u000b\n"
    +
    "Another option, as we know, is to choose a material with a low work function. In practice, LaB6 and CeB6 single crystals are often used in the electron microscope because of their lower work function energy barrier. As these materials are more sensitive to gas molecules like, oxygen, water vapor, etc. they will need to be kept under high vacuum. \u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "Here are some examples of the two main thermionic sources, as well as a full thermionic gun assembly. At far left is a “tungsten hairpin” – a very simple, cheap, and robust type of filament made from tungsten. To the right is a computer-generated rendering of a lanthanum hexaboride (or “Lab-6”) source, which is visibly more complex. This complexity, along with the precision involved in manufacturing the crystal, mean that lab-6 sources are much more expensive than tungsten hairpins. "
    +
    "\n"
    +
    "\n"
    +
    "Shown at left in the far right image is a tungsten filament ready to be placed into the Wehnelt, shown at right. \n"
    ,
    "There are no speaker notes on this slide."
    ,
    "And again, the optimization of this Wehnelt bias is a crucial factor, because if you're not operating at optimum parameters then you're really not getting the most out of your system and you're not getting the the best quality of data for the money that you invested. \n"
    +
    "\u000bOptimum bias settings do exist, but they do depend on the distance between your filament and your Wehnelt, and the type of filament material you're using, and really who made your gun and how they made it -- this will all be described in manufacturer's specifications in your operating manuals. But the bias and the distance are adjustable parameters on most instruments. The tip-wehnelt distance is a little bit more involved -- you have to actually crack open the microscope to adjust it, and that involves a lot of careful planning and cleanliness to ensure that you don't contaminate your column. \n"
    +
    "\u000bThe bias voltage on the other hand, is a very readily adjustable parameter. \n"
    +
    "\u000bSo remember that we need to select an optimized bias -- not too high, not too low -- that will leave us with with the best balance of emission current and brightness.\n"
    +
    "\u000b\n"
    ,
    "A very common type of source will see for thermionic guns is the so-called, \"tungsten hairpin\". As you’ve heard, tungsten isn't the highest-performance source material available, but it is very robust, it's reliable, stable, and inexpensive, because of its simple construction.  It’s one of the few sources we’ll discuss that can operate in low vacuum, which could mean cost-savings if we don’t have to invest in a high or ultra-high vacuum system, but there are some downsides to this:"
    +
    "\n"
    +
    "\n"
    +
    "at lower vacuum conditions you will still have charged ions bouncing around near your filament, and when these ions impinge on your source they'll actually “sputter” material away. Sputtering just means that these particles will hit with sufficient kinetic energy to knock atoms out of your source, so eventually, over time, from evaporation and erosion through high temperature and through sputtering your source will gradually wither until it is thin enough to melt and break the circuit, at which point it is “dead” and no TEM can occur until it is replaced. Here we see what a source looks like, generally, when we put it into the microscope. "
    +
    "\n"
    +
    "\n"
    +
    "\u000b\n"
    ,
    "We mentioned rare earth cathodes, and these are lanthanum and cerium hexaboride predominantly, but you’ll mostly see lab-6. \u000b\n"
    +
    "From the Richardson equation we remember that we can increase the current density and the brightness by using a material with a lower work function, and that’s why we’re interested in lanthanum and cerium hexaboride. Their work functions, if you remember, were about two electron volts lower than tungsten. This is really important because when we evaluate the Richardson equation we see that as we increase our operating temperature to about 2700 Kelvin, which is approaching the operating temperatures of tungsten sources, every 0.1 eV of work function we can eliminate will result in a current density improvement of about 1.5 times. "
    +
    "\n"
    +
    "\n"
    +
    "So even though we will be operating in the same temperature regime as as tungsten, we'll see that since we have a lower work function we're going to get a much better current density, and therefore much better brightness and much better data, because of the properties of these cathodes.\n"
    +
    "\u000b\n"
    ,
    "And you'll notice that the construction of a lanthanum or cerium hexaboride cathode is quite different than that of a tungsten one, and that is because they operate differently. \n"
    +
    "\n"
    +
    "Basically it comes down to the fact that you're going to use a single crystal of your cathode material, where lanthanum or cerium atoms can move around freely in the boron lattice. This means that the emitter atoms can be depleted from the tip, but performance won’t be affected since more can still migrate to the tip from distant areas of the crystal. "
    +
    "\n"
    +
    "\n"
    +
    "As we said it has a relatively low work function compared to tungsten, and we can get an equivalent current density at about 1500 Kelvin, so we can match the tungsten hairpin emission current at a much lower temperature. \n"
    +
    "\u000bAnd if we continue to increase the temperature until we’re on par with the operating T of  of a tungsten thermionic emitter, we see that our current density will increase to about 100 amps per square centimeter at 2000 Kelvin. This means that we're gonna have not just a longer life, but also higher brightess; a longer life because we're going to have lower operating temperatures and, mobile lanthanum and cerium within the crystal. And the higher brightness, again, because of the lower work function, which means an increase in our current density, and all of these things together contribute to a higher resolution.\n"
    +
    "\u000b\n"
    ,
    "But there are some drawbacks, one of which is the fact that they’re very reactive when they’re at operating temperatures, especially with carbon and fluorine. With C and F being common in semiconductor or other applications, things are a bit risky, because when rare earth borides come in contact with C or F the cathode gets what’s called “poisoned”, and this will really change its emission properties in a way that isn’t very useful for us, so we want to avoid that if at all possible.  \u000b\n"
    +
    "Another drawback is that in order to protect these crystals from contamination, you have to use exceptionally good vacuum, levels around 10 to the -7 torr or better, and doing that itself is expensive -- you have to invest a lot of money in your facilities to install and maintain multiple stages of vacuum pumps. \n"
    +
    "\n"
    +
    "And of course the crystal itself and the mountings are expensive! It costs a lot to produce these and it costs a lot to buy and install them. \n"
    +
    "\n"
    +
    "And since this crystal isn’t a metal but is really more of a ceramic compound, it’s very brittle, so the electrical stresses and the thermal stresses it’s exposed to will  eventually cause mechanical failure no matter how carefully we maintain it.\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "So for a Schottky emitter, we see that the the filament tip is actually poking through what used to be the Wehnelt, and in Schottky guns this is not a Wehnelt, but is instead called a suppressor.  The fact that the filament is now protruding from the suppressor and will be directing the electrons down, here, is an important distinction between the two gun types. "
    +
    "\n"
    +
    "\n"
    +
    "And there's a potential applied between the filament and the first anode, and this is our “extraction voltage”, that factor that we discussed that is going to draw electrons from our tip. And as they're extracted into the vacuum they approach the second anode and as they pass between the two andoes they form the crossover that we’ll also refer to as the “virtual source”. "
    +
    "\n"
    +
    "\n"
    +
    "From the crossover they head towards the second anode, and this explains why you may hear somebody say that they're operating a TEM at “200 kV”, what this statement really means is that the potential difference between the filament tip and the second anode here, the “accelerating voltage”, as it's called, is a potential difference of 200000 volts, and that's really what serves to accelerate the electrons down the column. \n"
    +
    "\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "So to maintain stable emission in Schottky electron guns, we need to pay attention to these critical parameters:"
    +
    "\n"
    +
    "\n"
    +
    "We need to ensure that the zirconium coverage, and zirconium to oxygen ratio on the tip is correct and homogeneous enough to allow the low work function across the entire tip. "
    +
    "\n"
    +
    "\n"
    +
    "And because we've decreased the tip size now -- and we know that for emission to occur the surfaces of the emitters have to be very pristine -- we now have a smaller area, meaning contaminants can build up faster. To counteract this, we need to do 2 things: "
    +
    "\n"
    +
    "One is use a higher gun vacuum of of about 10 to the -8 torr, substantially higher than is needed for thermionic emission, to prevent contamination "
    +
    "\n"
    +
    "and two: we can keep the source hot, around, 1800 Kelvin to burn off any contaminants that may be present. \u000b\n"
    +
    "We also have to make sure that we're using an appropriate extraction voltage, because if we apply too much we will have an incoherent beam, since we're drawing electrons not just from the small tip, but from the sides and other areas that aren’t suitable for precise emission. \u000bBut if we have to low of an extraction voltage, we won't have enough brightness or current density to form a useful beam. "
    +
    "\n"
    +
    "\n"
    +
    "And we also need to maintain that distance separating emitter tip and the first anode --  that extraction anode -- and that's a function of the extraction voltage that we're applying.\n"
    +
    "\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "Merger of slides 10 & 11? \n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "In general, the coherence of a beam of electrons is a way for defining how well the electron waves are in step, or in phase with each other.  Phase is a key property of all waves, and in ideally temporally coherent beams, all of the electrons will have a constant phase difference and a constant frequency. "
    +
    "\n"
    +
    "\u000b\u000bWe want to ensure that this is all happening over a large period of time as well, because if we have coherence moment to moment it's not particularly useful. \u000b\u000bWe can mathematically define the “coherence wavelength” lambda sub c, as the ratio between the product of Planck’s constant and electron velocity and the energy spread of the beam, delta E. \u000bIf the “wave packets” from the source are all identical, they have the same coherence wavelength. \n"
    +
    "\n"
    +
    "And since wavelength is related to accelerating voltage, that means our voltage also has to be stable, and these things are very crucial if we want to maintain a tight energy spread, so that the variations in energy across the electrons comprising the beam are very minimal."
    +
    "\n"
    +
    "\u000bEssentially this all just boils down to the fact that we want our electrons to all be as similar as possible, or, in reality, since we're considering them as waves here, we want all of our electron waves to be as similar as possible -- we want them to all be oscillating with the same frequency, and all be emanating from the same point and ideally we want that point to be as small as we can possibly be.\n"
    +
    "\n"
    +
    "In practice, the typical delta E values for the three sources we’ve discussed are in the 0.1 to 3 eV range, which is remarkably small compared with a total energy of 100 to 400 keV. \u000b\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
    "\u000bHere’s a table of all of the sources and properties that we've discussed. But keep in mind that before passing any judgment on a type of source, you really need to consider the application you want to use it for. \n"
    +
    "For instance, even though tungsten hairpins do have a short life, if you're trying to do biological work, or work with polymers, their high contrast will be an advantage to you.\n"
    +
    "On the other hand, if you need to do advanced analytical work, or if you're doing work in materials science, then field emission tips with extremely high coherence and small beam size might be useful.\n"
    +
    "\u000b\n"
    ,
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
    ,
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
    [],
    [],
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