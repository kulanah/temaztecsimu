let ch8SpeakerNotes = [
    `	Title slide – no notes


    `,
    `	Preliminary question slide – no notes
    `,
    `	Reference slide – no notes
    `,
    `	In the previous chapter, we discussed Bragg’s law and how diffraction can reveal crystallographic information. In this chapter we’ll begin to give an introduction to crystallography – this is important for understanding the relationship between diffraction patterns, images, and the crystal structure. This lecture will provide a brief introduction to the fundamentals of crystallography, such as: 
    
    Crystal structure, made up of unit cells, Wigner-Seitz cells, Bravais lattices, and crystal systems
    
    And how we can mathematically describe the planes and directions found in crystal structures, including concepts like: miller indices, crystallographic directions, zone axes, and the zone law. 
    
    We will discuss the symmetry observed in crystals, and how we can describe different symmetries and methods of notating point groups and space groups, which offer insight into the specific forms of symmetry. 
    
    The electron diffraction allows us to determine the orientation of our specimen within the microscope, as well as identify our material and any defects in it. To do this, we must first understand crystallography. 
    
    We are also used to describe space with Cartesian coordinates, but we will see that we can also describe the orientation of objects in 3D space using Euler angles. 
    
    
    `,
    `	From the start, single crystal silicon ingots are produced, then cut into different thicknesses of wafers that the semiconductor industry can use to produce thousands of electronic devices on one wafer. These will be laser-cut and “packaged” into consumer-recognizable forms like RAM and storage devices. 
    
    
    Process engineers will need to know what materials have been fabricated; product engineers will need to know how they can improve the quality of the product, or what might cause a product to fail. As semiconductor devices continue to demand smaller and smaller form factors, TEM has provided the dominant method for these kinds of analyses. On the bottom left, there are two kinds of diffraction patterns illustrated as observed in the TEM – the leftmost is called “selected area electron diffraction” and the right is CBED – as we know from our discussions of electron-specimen interaction, we know that these are representations of the electron intensity distributions resulting from constructive interference leaving the specimen. How can we correlate this diffraction pattern from a product with the structure of our sample, or with the defect that causes failure? We’ll need to know crystallographic information about the specimen, and will need to use the TEM to access the information. 
    
    
    
    
    `,
    `	Crystallography is the general term for the study of crystalline materials. Before we talk about it, though, let’s think about how materials can be classified according to the degree of order exhibited by their structure – this could also be thought of as how the atoms are packed into the material. 
    
    In general, solids can be classified into two forms:
    
    “Amorphous”, a word meaning “without form”, is the term we use to describe materials whose atomic arrangements are more or less random. These materials are aperiodic, meaning they lack ordered structural repetition. As such they can be expect to be fairly loosely packed. Examples of amorphous materials that you may be familiar with are glasses, epoxies, and glues – in TEM, we are frequently interested in the properties of the amorphous materials used in the dielectric layers of nanodevices. 
     
    When the atoms of a material are arranged in regular (or periodic) arrays, we say the material is “crystalline”. While there are varying degrees of crystallinity, generally these materials are dense due to their three dimensional periodicity. These atomic “lattices” are said to be “anisotropic”, meaning the material properties of the bulk depend on the orientation of the underlying structure. 
    
    
    `,
    `	The world crystal refers to any solid material in which the component atoms are arranged in a periodic, three dimensional lattice. Another definition could be: “a 3D or 2D translationally periodic arrangement of atoms.” 
    
    Crystallography can then be defined as the description and study of crystals by using vector calculus to construct a rectilinear, but not necessarily orthonormal (or even orthogonal) reference frame called a lattice. 
    
    The lattice , the 2/3D frame on which motifs are regularly arranged. 
    We create this lattice from lattice points using all integer linear combinations of three basis vectors, a, b, and c
    
    A motif is an atom, or a group of atoms, associated with each lattice point. 
    
    
    
    
    `,
    `	Speaking in terms of crystallographic convention, a crystal can be defined as being made up of one crystal lattice and some number of motifs. 
    
    The relationship can be made more explicit with the equation:
    
     1 Crystal is equal to 1 Crystal Lattice + n times Motif
    
    
    
    
    `,
    `	Since crystals are a periodic arrangement of atoms, they can be easily characterized using the unit cells. Therefore, a unit cell can be defined as the smallest unit of volume that permits identical cells to be stacked together to fill all of a space. The edges of the unit cell are given by three non-coplanar basis vectors a, b and c, with each representing translations between two adjacent lattice points. It is by repeating the pattern of the unit cell over and over in all directions that the entire crystal lattice comes to be. 
    
    Any vector representing a directional translation between lattice points is called a lattice vector, denoted as r, which is equal to an integer scalar u times the vector a plus a scalar v times a vector b plus a scalar w times a scalar c. 
    
    The magnitudes of three basis vectors a, b, and c in 3 dimensions form the axes of the unit cell. 
    
    The angles between vector a and vector b, vector b and vector c, and vector a and vector c are conventionally labelled gamma, alpha and beta, respectively.
    
    
    
    `,
    `	If a unit cell contains only one lattice, it is said to be primitive.  
    
    This is somewhat problematic, though, since are an infinite number of lattice vectors which could have been used in defining the unit cell. 
    
    By convention, the unit cell is usually chosen so that it is as small as possible while still reflecting the full symmetry of the lattice.,
    
    Since teaching a full section on crystallography is not within the scope of this course, our treatment of unit cell choice will be regretfully brief. Know that the unit cell is always chosen so that the symmetry elements are positioned in accord with Volume A of the International Tables for Crystallography, which you should reference if you are interested. The preferred choice includes small basis vectors which are as equal as possible, provided the shape of the cell reflects the essential symmetry of the lattice. When the symmetry is low, there can be a wide choice of possible unit-cells. In certain cases it is better to choose a non-primitive, centered cell in order to show the full symmetry of the structure more clearly.
    
    When there is no symmetry, the position and shape but not volume of the cell may be chosen freely. Here a primitive cell with angles close to 90º (A or C) is preferable. 
    
    
    
    
    
    `,
    `	Which of these unit cells are most appropriate? Why? 
    
    We can see that there are many possibilities for unit cells, but we should always try to select the smallest volume that, when repeated, can replicate the full symmetry of the lattice. So an easy step towards eliminating inappropriate unit cells would be to see which cells contain duplicate examples of symmetry, or which cells would not reproduce the real pattern if they were repeated. 
    
    
    `,
    `	A thorough understanding of crystallography is a prerequisite for anybody who wishes to learn transmission electron microscope (TEM) and its applications within solid (mostly inorganic) materials.
    
    All crystals are characterized by a fundamental unit of structure called a “unit cell” which describes the geometry of the lattice as it repeats periodically in the x, y, and z directions. The unit cell of silicon is shown here in blue. Different planes within the crystal are shown in grey, and different directions within the crystal are communicated using Cartesian coordinates (x, y z). 
    
    
    `,
    `		One algorithm for unit-cell construction is the Wigner Seitz cell method -- A Wigner-Seitz cell is a specific type of primitive unit cell.  In real space, it is primarily a mathematical construct prepared by Drawing a line from one lattice point to all its nearest neighbors
    	Then drawing the perpendicular bisector for each of these lines
    
    It is mathematically correlated to real space.  In momentum space, however, it defines the Brillouin zone. 
    
    
    `,
    `	Although Weiner-Seitz cell has the smallest number of atoms per unit cell, but it does not display the full symmetry of structure. 
    
    	Namesake Auguste Bravais defined these as the smallest lattice that can fill -- without leaving gaps or causing overlaps – 2D or 3D spaces using only periodically repeating units of itself. 
    
    	There is a finite number of different crystal structures, and different crystalline solids may crystallize according to the same pattern.
    	 The metrics of the lattice may be different, 
    	but the symmetry is the same in such cases. 
    
    	There are five lattices in two dimensional space, and 14 in three dimensional space.
    
    
    
    
    `,
    `	The number of ways in which points can be arranged regularly in three dimensions, such that the stacking of unit cells fills space, is not limitless; Bravais showed in 1848 that all possible arrangements can be represented by just fourteen lattices.
    
    The fourteen Bravais lattices can be categorised into seven crystal systems: cubic, tetragonal, orthorhombic, trigonal, hexagonal, monoclinic and triclinic
    
    
    
    
    
    `,
    `	Bravais Lattices allow for the possible variations within a given unit cell type. For example, a cubic unit cell can be simple cubic, body centred cubic (BCC) which has an atom at the centre of the unit cell, or face cantered cubic (FCC) with an atom located in each face. Similar variants exist for the other, as shown.
    
    These 14 Bravais Lattices can be derived to classify all crystals into one of the 7 systems.
    
    
    
    `,
    `	Now that we have our base unit cells, we can begin to examine how cells are associated ‘lattice points’ that define the unit cell and are related to each other by translation. These are a mathematical abstraction and do not necessarily represent a single atom -- the actual atoms are part of the motif.
    
    In principle, atoms can occupy any partial position within the unit cell. However, there is a very restricted set of points that can serve as symmetry elements.
    
    As a rule, these are the parallelepiped corners, (0, 0, 0), the centers of its faces (½, ½,0), (½,0, ½), (0, ½, ½), the center of the unit cell, (½, ½, ½), and points equally displaces from other points of high symmetry, i.e. (1/4,1/4.1/4)
    
    In a crystal of rhombohedral (trigonal) or hexagonal symmetries, containing regular triangles as a 2D motif, the center of such a triangle is a highly symmetric point with coordinates (2/3, 1/3, 0), (1/3, 2/3, 0).
    
    In order to obtain lattice coordinates, we draw lines parallel to the crystal axes to measure the interception of the vector basis, a, b, c. The coordinates are determined by x/a, y/b, z/c. they are fractional multiples of the unit cell axes length.
    
    
    
    `,
    `	The body centered cubic cell has two lattice points per cell, at coordinates zero zero zero and one-half one-half one-half. It is found in crystals of lithium, vanadium, chromium, etc. 
    
    
    `,
    `	The face centered cubic cell has 4 lattice points per cell, and is seen in the crystals of aluminum, nickel, and other metals. 
    
    
    `,
    `	In the HCP, hexagonal close-packed structure, is an example of a non-Bravais lattice. It can be thought of as one primitive lattice, shown in red, with 2 atom basis. Each atom has 6 equidistant neighbours in its own plane at a distance a, and two sets of 3  neighbors in the planes above and below. If c divided by a has the ideal value of 1.633, the whole array is said to exhibit hexagonal close packing. The unit cell contains two close-packed layers, not related by a lattice vector (in contrast to cubic close packing, with three layers related by lattice vectors). Elements that crystalize according to this scheme are beryllium, magnesium, cadmium, titanium, and more. 
    
    
    `,
    `	Diamond structure, another non-Bravais lattice, can be thought of as one FCC bravais lattice with a two atom basis. It has 8 atoms per unit cell, and is particularly important to us because the crystals of technologically important elements like carbon, silicon, and germanium adopt this structure. 
    
    
    `,
    `	Rock-salt, though non-Bravais, can be thought of as an FCC lattice with a two atom basis. It also has 8 atoms per unit cell, and is represented by many compounds, table salt, silver chloride, and titanium carbide among them. 
    
    
    `,
    `	The zincblende or sphalerite structure, is a non-Bravais lattice conceivable as an FCC lattice with a two atom basis. It has 8 atoms per unit cell, and can be found in materials like zinc sulfide, gallium arsenide, and silicon carbide, which are all important to the semiconductor industry. 
    
    
    `,
    `	Wurtzite structure was and is the name of the βeta modification of zinc sulfide – a high-temperature variant with hexagonality. It is named after the French chemist C. A. Wurtz (born 1817, died 1884), which gives us an idea of how old those names are. As a modification, it is seen in the same 
    
    
    
    `,
    `	The atomic packing factor, or APF, Describes the portion of the volume of a unit cell taken up by atoms. We can calculate it by dividing the total volume of the atoms in the cell by the volume of the cell. 
    
    For example, FCC close-packed directions: 4r is equal to the squareroot of 2a, the volume for 4 atoms in one unit is around 0.74 cubic angstroms'. Therefore APF = 0.74. How about for bcc, or hcp?
    
    	If we calculate the APF, we find that APF for hcp is 0.74 as well, even though they are a different crystal structure. It suggests that there are two ways to stack spheres for close packing: ABAB… and ABCABC…
    
    
    
    
    `,
    `	ABCABC packing is a scheme in which a base of 7 “A” atoms can be stacked with three “B” atoms, and then again with six “C” atoms. This scheme for the stacking of spheres gives rise to the FCC structure. 
    
    
    `,
    `	ABAB packing, on the other hand, consists of a base layer of seven A atoms, which can be covered by three B atoms, which are then capped with another layer of A atoms identical to the previous A layer.
    
    ABAB packing can be observed in the HCP structure. 
    
    
    `,
    `	As we know, the lattice vector r is the vector connecting the origin of the coordinate system to a specific point of a unit cell
    
    We can use a set of simple rules to determine the index of the lattice vector: 
    
    
    •	Position a vector of the desired length such that it passes through the origin of the coordinate system. 
    •	Determine the length of the vector projection on each axis in terms of unit cell dimensions (a, b, c). 
    •	Find a common factor that you can multiply or divide the three lengths by in order to reduce them to whole numbers. 
    •	These numbers, when placed in square brackets, define the direction of the desired lattice vector.
    
    
    
    
    `,
    `	Here we can see the basis vectors A, B, and C, along with the lattice vector index r. 
    
    The values U, V, & W are the whole numbers to be placed in the brackets, and n is the common factor mentioned in the last slide. 
    
    
    `,
    `	Here are a few examples of lattice vectors and the notation of the corresponding directions. 
    
    
    `,
    `	For HCP crystallographic directions, however, the rules are a bit differently. 
    
    The vector is repositioned (if necessary) to pass through origin.
    
    We then, because it is convenient, use a four-axis coordinate system, ( referred to as Miller-Bravais), with axes A1, A2, A3, and Z, in which the  𝑎﷯1,  𝑎﷯2, and  𝑎﷯3 axes lay in one plane angled 120 degrees with respect to each other, with the Z axis existing perpendicular to that plane. This of course means that our bracketed index will need four integers, instead of just three. 
    
    We can confine ourselves to the Bravais parallelopiped in the hexagon, formed by  𝑎﷯1,  𝑎﷯2, and z to determine an index u prime, v prime, and w prime. 
    
    Here: [1 1 0]  - so now apply the models to create O-B Indices
    
    
    `,
    `	For our purposes, a plane is a one-dimensional surface constructed within 3D space by the points A, B, and C along the basis vectors  𝑎﷯,  𝑏,﷯ and  𝑐﷯ 
    
    We can describe the plane using three integers h, k, and l, called Miller indices, where h is equal to OA divided by a, k is equal to OB divided by b, and l is equal to OC divided by C. 
    
    
    
    
    `,
    `	Miller indices are defined as the reciprocals of the (three) axial intercepts of a plane, cleared of fractions & common multiples.  All parallel planes have the same Miller indices.
    
    Crystallographic planes are typically specified by three Miller indices (hkl)
    These effectively just list the intercepts of the plane with axes in terms of  𝑎﷯,  𝑏﷯, and  𝑐﷯. 
    
    To find these indices, simply take the reciprocal of the intercepts and reduce them to the smallest possible whole-number values. 
    These are miller indices, and are traditionally enclosed in parenthesis without commas.  
    
    
    
    `,
    `	Here we can see examples of the indexing process for cubic crystals : 
    
    For the blue plane, we first find the intercepts – so the plane intersects the X axis at point a, the y axis at point b, and the z axis at point c. Since we’re working with the idea of unit cells, we’ll just call the coordinate of the intercept “1”. So a and b have intercepts of 1, but the plane never crosses the z axis, so the intercept there can be taken to be infinitely large. 
    
    Now we move on to step two, finding the reciprocals. So we now have one over one, one over one, and one over infinity, which we know to be one, one, and zero. 
    
    Step three, reduction of the reciprocals, is already done – they are in their simplest forms. 
    
    Put them together 
    
    
    
    `,
    `	So, to summarize the ways we represent different concepts with indices: 
    
    If the indices uvw are in square brackets, we’re referring to a direction or a zone axis. 
    
    If the indices are uvw are in angle brackets, then they are denoting a family of symmetry related directions. 
    
    If the indices are hkl within standard parenthesis, then a plane (or set of parallel planes) are being denoted. 
    
    Curly brackets around hkl indices denote a family of planes, 
    
    And four indices, uvtw or hkil, in brackets or parens respectively, are the Millter-Bravais indices for a direction, and for a plane in hexagonal crystals. 
    
    
    
    
    `,
    `	Euler angles are a sequence of three angles which describe the rotation of a crystal with reference to crystal axes.
    
    The first is a rotation of about the crystal [001] (z axis), then about the [100] (x), and finally f 1 about [001] (z)
    
    Three rotations phi 1 and phi 2 about the Z, X, and Z axes are then quoted in degrees
    
    Euler Angles are the three rotations about the main crystal axes 
    
    Euler angles are one possible means of describing a crystal orientation
    
    
    
    
    
    
    `,
    `	Christian Samuel Weiss formulated the concept of a ‘Zone’ in the early 1800’s. The concept was originally used to denote a prominent direction of crystal growth. 
    
    We now use the word zone to refer to one or more faces or plane(s) of a crystal that exist parallel to an imaginary line. 
    
    The zone axis is the imaginary line relative to which intersecting zones may be defined. Indicates the common direction of the intersection. 
    
    
    
    `,
    `	By definition, any two nonparallel planes will eventually intersect, and the intersection can be characterized with a line. We can use the Weiss zone law to describe this, which is useful because it can be used to describe the mechanisms of diffraction. 
    
    	In a crystal, each member of a set of planes (h1k1l1) will intersect each member of a nonparallel set of planes (h2k2l2) along parallel lines with direction [uvw] where
    
    u equals k one l two minus l one k two
    v equals l one h two minus h one l two
    w equals h one k two minus k one h 2
    
    	The planes of a zone axis [uvw] must satisfy the Weiss Zone Law, which requires that:
    H u + k v +l w is equal to 0
    
    	If points h 1 k 1 l 1 and h 2 k 2 l 2 are in same zone, then point h 1+h 2  k 1 + k 2  L 1 + L 2  will also be in the same zone
    
    
    
    `,
    `	All material beyond this slide will be useful for enhancing your understanding of TEM
    and materials science, but is not necessary for an introductory understanding, and is
    therefore technically outside the scope of this course– feel free to continue if you are
    interested, though.
    `,
    `	The Oxford English Dictionary defines symmetry as “The quality of being made up of exactly similar parts facing each other or around an axis.”
    
    An object is said to possess some degree of symmetry if an operation can be performed on it without changing the appearance/structure of the object. 
    For example, the human form has (approximate) bi-lateral symmetry. 
    
    
    
    
    `,
    `	In Translational symmetry all the points are moved in the asymmetric unit the same distance in the same direction – this essentially means that you can move the points a certain distance in a certain direction. 
    
    In this kind of symmetry, there are no invariant points that “map” onto themselves after a translation; that is, no one point will be exactly where it was before the operation occurred, but the points are still in the same positions in relation to each other. 
    
    
    
    `,
    `	In rotational symmetry all points in the asymmetric unit are spun around an axis. 
    
    This rotation does not change the handedness, or chirality, of the figures, yet the axis of the rotation is the only invariant point. 
    
    If an object can come into self-coincidence when rotated through a small non-zero angle theta, then it is said to have an n-fold rotation axis, where
    
    N is equal to 360 divided by theta
    
    
    
    
    `,
    `	Here are some simple examples of rotational symmetries that we have probably seen many times during daily life. 
    
    
    
    `,
    `	Inversion center symmetry may also exist, whereby every point on one side of a center of symmetry has a similar point at an equal distance on the opposite side of the center of symmetry. 
    
    The center of symmetry, or the inversion center, is the point through which the operation moves an atom at coordinates x y z to coordinates –x –y -z
    
    
    `,
    `	Reflectional, bilateral, line, or mirror symmetry is an operation by which all points in the asymmetric unit can be flipped over a line, which is taken to be the “mirror”, and by doing so changes the handedness of any figures in the unit, just like how you observe “your” left hand move in a mirror while raising your right hand. 
    
    The points along the mirror line are all invariant points after a reflection. 
    
    
    `,
    `	Glide reflection (which can be thought of as a combination of mirroring and translation) 
    
    Reflects the asymmetric unit across a mirror and then translates parallel to the mirror. 
    
    The mirror plane changes the handedness of figure, and the “glide” translates them. 
    
    There are no invariant points (points that map onto themselves) under a glide reflection.
    
    
    
    `,
    `	Screw symmetry is defined as a 360 divided by n degree rotation about an axis of symmetry, followed by a translation moving parallel to the axis by r divided by n of the unit cell length in that direction, where r is less than n. 
    
    A two-fold screw axis, 21, refers to a rotation of or 180 degrees, combined with a translation along the screw axis. +one-half indicates translation of +1/2 normal to the plane of the page.
    (21is read two sub one)
    
    A three-fold screw axis, 31, refers to a rotation of or 120 degrees, combined with a translation of along the screw axis.
    
    A second operation of the 31 results in the object translated by 1/3+1/3=2/3
    
    A three-fold screw axis, 31, refers to a rotation of or 120 degrees, combined with a translation of  along the screw axis.
    
    A second operation of the 32 results in the object translated by 2/3+2/3=4/3=1/3
    
    Notice the result is a set of screws that turn in opposite directions.
    
    In contrast to two-one screw axes, three-one and three-two axes possess a sense of handedness.
    
    Four-one (and six-one) and four-three (and six-five) screw axes correspond to right-handed and left-handed helices, respectively. Like the two-one screw axis, both the four-two and six-three axes have no sense. What is the sense of a six-two axis?
    
    
    
    `,
    `	In a crystal system, a set of point groups and their corresponding space groups are assigned to a lattice. Of the 32 point groups that exist in three dimensions, most are assigned to only one lattice system, in which case both the crystal and lattice systems have the same name. However, five point groups are assigned to two lattice systems, rhombohedral and hexagonal, because both exhibit threefold rotational symmetry. These point groups are assigned to the trigonal crystal system. In total there are seven crystal systems: triclinic, monoclinic, orthorhombic, tetragonal, trigonal, hexagonal and cubic.
    
    A crystal family is determined by lattices and point groups. It is formed by combining crystal systems which have space groups assigned to a common lattice system. In three dimensions, the crystal families and systems are identical, except the hexagonal and trigonal crystal systems, which are combined into one hexagonal crystal family. In total there are six crystal families: triclinic, monoclinic, orthorhombic, tetragonal, hexagonal and cubic.
    
    
    
    `,
    `	No notes
    `,
    `		Lattice are classified according to their symmetry, which is defined as a state in which parts on opposite sides of a plane, line, or point display arrangements that are related to one another
    
    
    	Lattices have three different forms of symmetry:
    	Translational symmetry
    	Rotational symmetry
    	Reflection symmetry
    
    	The group of all crystal symmetry elements except translations (i.e. rotation, reflections etc.) that characterize one crystal are collectively called its “point group”. 
    
    	Based on the point groups, we have 7 types of lattices or crystal systems
    
    	The complete group of all symmetry elements in two dimensions is called the “plane group”
    
    	While the complete group of all symmetry elements including translations of a crystal is called its “space group”
    
    	Based on the space group symmetry, 14 types of lattices or Bravais lattices
    
    `,
    `	No notes 
    `,
    `	The simplest crystallographic point groups are 1, 2, 3, 4, and 6 --  all of which possess only one rotation axis. Likewise, the rotation-inversion axes are the basis for the point groups -1, m, -3, -4, and -6. 
    The remaining 22 crystallographic point groups result from the combination of the previous 10 point groups. 
    
    with the exception of point groups belonging to the cubic crystal system, only twofold rotation axes and/or mirror planes can be taken together with other rotation or rotation-inversion axes: Twofold axes can be combined perpendicular to other axes (e.g. point-group 422) while mirror planes can act either perpendicular (e.g. 2/m) or parallel to another axis (mm2). A slash ("/") character before the symbol m indicates a mirror plane perpendicular to the main axis of rotation.
    
    The crystallographic point groups may be classified according to the crystal system with which they are associated. Thus the point groups of the trigonal crystal system all possess a threefold axis, while those of the tetragonal and hexagonal crystal systems possess a fourfold and six fold axis, respectively. The cubic point groups all have multiple threefold axes (see below). The orthorhombic point groups have twofold symmetry (either 2 or m with respect to each of the X-, Y-, Z- directions of an orthogonal axis system, while the monoclinic point groups are limited to twofold symmetry with respect to a single axis direction. Finally, the triclinic point groups can only have an axis of order 1.
    
    The cubic point groups are all characterized by the four threefold rotation axes which act along the body diagonals of a cube. This is indicated by the digit "3" in the cubic point-group symbols. In addition, the cubic point groups all contain at least three mutually perpendicular twofold rotation axes.
    
    Of the 32 crystallographic point groups, those highlighted in magenta possess a center of inversion and are called centrosymmetric, while those highlighted in red possess only rotation axes and are termed enantiomorphic. A third type, highlighted in bold type, are referred to as polar. The properties of these different types of point groups are explained in more detail in the subsequent sections.
    
    
    
    
    `,
    `	No notes 
    `,
    `	
    The last table made use of something called Hermann–Mauguin notation, Hermann-mauguin, when compared with another form of notation, Schoenflies notation, is preferred in crystallography because it can easily include translational symmetry elements, and it specifies the directions of the symmetry axes.
    
    Hermann–Mauguin symbols show symmetrically non-equivalent axes and planes. The direction of a symmetry element is represented by its position in the Hermann–Mauguin symbol. If a rotation axis n and a mirror plane m have the same direction (i.e. the plane is perpendicular to axis n), then they are denoted as a fraction n/m or n/m.
    
    
    Plane groups can also be depicted using the Hermann–Mauguin system. The first letter is either lowercase p or c to represent primitive or centered unit cells. The next number is the rotational symmetry, as given above. The presence of mirror planes are denoted m, while glide reflections are denoted g.
    
    
    
    `,
    `	Space groups are notated by combining the uppercase letter describing the lattice type with symbols specifying the symmetry elements. 
    
    The symmetry elements are ordered the same way as in the symbol of the corresponding point group. 
    
    The symbols for symmetry elements are more diverse, because in addition to rotations axes and mirror planes, space group may contain more complex symmetry elements — screw axes (combination of rotation and translation) and glide planes (combination of mirror reflection and translation). As a result, many different space groups can correspond to the same point group. For example, choosing different lattice types and glide planes one can generate 28 different space groups from point group mmm, e.g. Pmmm, Pnnn, Pccm, Pban, Cmcm, Ibam, Fmmm, Fddd
    
    Rotation axes are denoted by a number n — 1, 2, 3, 4, 5, 6, 7, 8 ... (angle of rotation φ = 360°/n). 
    
    Hermann–Mauguin symbols show rotoinversion axes, n— 1, 3, 4, 5, 6, 7, 8 ... 
    
     Symbol for a mirror plane (rotoinversion axis 2) is m. 
    
    The possible screw axes are: 21, 31, 32, 41, 42, 43, 61, 62, 63, 64, and 65.
    
    
    `,
    `	No notes 
    `,
    `	No notes 
    `,
    `	No notes 
    `,
    `	No notes `    
]

let s2ch2notes = [
    `	Title slide – Section II: Electron Diffraction
    Part 2.1: Reciprocal Lattice
    
    
    
    `,
    `	List of references: 
    
    L. Reimer, H. Kohl, Transmission Electron Microscopy Physics of Image Formation, Fifth Edition, Springer, 2008
    
    K. W. Andrews et al., Interpretation of Electron Diffraction Patterns, Plenum Press New York, 1971
    
    C. Kittel, Introduction to Solid State Physics, Wiley Hoboken, 2005
    
    G.-C. Wang, T.-M. Lu, RHEED Transmission Mode and Pole Figures, Springer Science+Business Media New York 2014 Retrieved from: http://www.springer.com/cda/content/document/cda_downloaddocument/9781461492863-c1.pdf?SGWID=0-0-45-1432309-p175479819
    
    Subramaniam and K. Balani, Reciprocal Lattice & Ewald Sphere Construction, Materials Science and Engineering A Learner’s Guide An Introductory E-Book, http://home.iitk.ac.in/~anandh/E-book.htm
    
    
    Drenth, J. Principles of Protein X-ray Crystallography, 2nd edition Springer Science & Business Media, 2013. Springer Advanced texts in Chemistry, illustrated.
    
    
    `,
    `	Lecture outline slide
    
    What’s the Point? 
    Diffraction Patterns & Reciprocal space 
    What is the Reciprocal Lattice?
    Mathematical Relationship Between Direct & Reciprocal Lattices in… 
    General Case
    Specific cases
    Graphical Relationships… 
    Between Reciprocal Lattice Vector & Direct Lattice Plane
    Between Reciprocal Lattice Vector vs. Direct Lattice d Spacing
    Between The Lattices
    Between Reciprocal and Crystal lattice
    Graphical Construction of the Reciprocal Lattice
    Intro to the Fourier Approach: Scattered Wave Amplitudes
    Periodic Functions & Fourier Analysis
    Fourier Construction of the Reciprocal Lattice 
    1D Reciprocal Lattice & Fourier Analysis
    2D Direct & Reciprocal Lattices 
    3D Reciprocal Lattice
    3D Reciprocal Lattice & The Brillouin Zone
    Why Reciprocal Space?
    Why Reciprocal Lattice?
    Direct Lattice & Diffraction Patterns
    Useful facts and relations
    Review of the Structure Factor
    Relationship Between fcc & bcc Lattices
    Specific Applications of Reciprocal Lattice 
    ZA Determination
    Calculating d-spacing and Crystal Plane Angles
    Reference Tables: 
    Relationships of the Two Lattices and their Projections
    Axes and Angles in the Direct and Reciprocal Triclinic Lattices
    
    
    `,
    `	Flowchart illustrating relevance of reciprocal space – 
    
    When we examine a crystalline specimen with the TEM, we often do so with the intent of finding out some fact(s) about its structure (remember that we also defined a crystal as “lattice + motif(s)”). This crystal, its lattice, and motif(s) are said to exist in “real” space. We examine them with the electron beam by observing how the specimen’s periodic electron density alters the intensity distribution of the incident beam. We can model the electron-specimen interactions responsible for this change in the intensity distribution using the concepts addressed in our presentation on scattering – namely: the structure factor. 
    
    The resulting diffraction patterns we observe within the TEM do not, however, exist in the same “real space” as the crystalline specimen. That is, we can’t easily draw conclusions about crystal structure just by looking at the diffracted intensities, since these intensities are the result of the interaction of the electron beam with the structure (i.e. periodic electron density) of the specimen, rather than the intensities being directly representative of the structure itself. 
    
    To deduce the structure of the specimen, we can use data present in the diffraction pattern to construct a “reciprocal crystal” that is related to (but is not itself) the crystal specimen. Once we have a reciprocal crystal structure, we can convert the reciprocal crystal into its actual, “real-space” structure using the rules and relationships constructed between reciprocal and real-space crystals. That is, we can use one of a few different methods, most often involving Fourier analysis, to convert the observed “reciprocal” crystal into the “direct” crystal. 
    
    
    `,
    `	In TEM diffraction experiments, we can learn about the structure of a crystal when we use a detector measure the intensity distribution of scattered electrons in the diffraction pattern as a function of scattering angle. This often presents as a striking pattern of dots, rings, or sometimes as intricate and ephemeral patterns of many lines. 
    
    The intensity distribution of scattered electrons is a result of the electron density distribution inside the crystal, which is a result of the crystal structure. This means we have indirect access to the structure – we just have to find a way to get from the diffraction pattern to the real crystal! 
    
    The electron density distribution is the same in each unit cell, so we can consider it a periodic array of electron densities. That is, the motifs will all repeat, and their component atom(s) will also repeat, so their electrons will form a periodic arrangement, and the scattering intensity from this periodic array varies based on the electron density. 
    
    We do not see the periodic electron density directly during a diffraction experiment -- we only observe the intensity distribution of electron scattering from the crystal(s). So how do we determine the periodic electron density from the intensity distribution? Via a series of associated “reciprocal” constructs – these are simply sets of rules that allows us to go from pattern to real crystal. 
    
    
    
    `,
    `	A typical diffraction pattern is a distribution of diffracted spots with different intensities – we see these nearly every time we are using the TEM. And, because of this, we are already far more familiar with the concept of the reciprocal lattice than you may have suspected, since the part of the diffraction pattern we observe in the TEM is a visual representation of reciprocal space. Again, this is because humans constructed the idea of reciprocal space around this pattern and the real crystal structure. 
    
    But what does this pattern really tell us? How exactly is the reciprocal lattice correlated with the diffraction pattern? 
    
     To answer these questions, we’ll have to define the “reciprocal lattice”. 
    
    Once we do, we’ll understand that the position of the diffraction spots is a representation of the reciprocal lattice points, and the intensity of those diffracted spots is due to the intensity of the electrons scattered by the motifs. 
    
    
    
    
    `,
    `	The reciprocal lattice, which may also be called the k-space lattice, momentum lattice, or wave lattice, is a purely human construct that we can use to describe “reciprocal lattice points” on a reciprocal lattice within reciprocal space. These “reciprocal” components have specific mathematical relationships to the real lattice.
    
    There are different ways of introducing the reciprocal lattice: 
    
        It can be defined mathematically with the help of the Kronecker delta function.
    
    It can be constructed graphically, with each point of the reciprocal lattice being related to a set of direct lattice planes with Miller indices (h k l). Such a point can be constructed by starting at the origin O of the reciprocal lattice and plotting a vector n of length one over d sub hkl normal to the (h k l) planes.
    
        And it can also be expressed as the Fourier transform of the direct lattice itself, in which e raised to the power of (i times the vector G dotted into the vector R) is equal to one. In all fairness, yes; this is obviously another mathematical construction, but the Fourier approach is usually the way you’ll see this discussed (within TEM, anyways) and was somewhat oddly distinguished from other mathematical approaches for that reason. 
    
    But, regardless -- all of these treatments are equivalent ways of dealing with the same thing. 
    
    
    
    `,
    `	In our discussion of crystallography, we learned that a real lattice in real space (also called a direct lattice) describes the arrangement of the unit cells of the atoms in the crystal. 
    
    The reciprocal lattice, which may also be called the k-space lattice, momentum lattice, or wave lattice, is a purely human construct that we can use to describe “reciprocal lattice points” on a reciprocal lattice within reciprocal space. These “reciprocal” components have specific geometric relationships to the real lattice.
    
    These reciprocal lattice points that we see as the bright spots in diffraction patterns do not correspond to arrays of atoms, but instead represent a particular set of planes in the crystal. 
    
    The reciprocal lattice is a lattice with primitive basis vectors, a star sub j, b star sub j, and c star sub j, related to the direct lattice, a sub j, by the relations:
    
    A sub I dotted into a sub j star is congruent to delta sub i, j
    
    Where delta sub I, the Kronecker delta function, is equal to zero when I is not equal to j, and is equal to one when i is equal to j
    
    In essence, the reciprocal lattice is a mathematical construct used to save time when determining and describing the relation between an observed diffraction pattern and the real crystal lattice that produced the pattern. 
    
    
    `,
    `	In all of the crystal systems, when we are working within a Cartesian coordinate system, we’ll use a basis of three vectors: a, b, and c.  These three vectors are related to the reciprocal lattice vectors, defined by a star, b star, and c star. 
    
    The previous definition of reciprocal lattice stated that a sub j dotted into a sub j star  is equal to the delta function, and that the delta function is equal to zero while I is not equal to j, and is equal to one when I is equal to j, meaning that the vector a star must be perpendicular to both the vector b and the vector c in the direct lattice, meaning that their dot products must be equal to zero. The vector a star is parallel to the cross product direction of basis vector b cross c in direct lattice – the directions of the two vectors b and c can be determined from this using the right hand rule. 
    
    This is then extended to vectors b star and c star, which in their relations to the direct lattice must be similarly perpendicular to the other two vectors, and parallel to their cross products as well.
    
    
    With the above statements, we can easily prove that: 
    
    A star is equal to the cross product of b and c divided by the cross product of a dot b cross c.
    
    B star is equal to c cross a all over a dot b quantity cross 
    
    And C star is equal to a cross b over a dot b cross c. 
    
    Vectors in the direct lattice have the dimensions of length, while the vectors in the reciprocal lattice have the dimensions of inverse length. This should make a lot more sense if we look at the ratios – the vectors are all in units of length, and once we’ve finished up the division we’re left with only one unit, which is in the denominator, giving us this “inverse length”. This crystal lattice is a lattice in real or direct space, while the reciprocal lattice is a lattice in Fourier space. 
    
    It was P. P. Ewald who introduced the concept reciprocal lattice. This concept makes the Bragg’s law very simple to explain, but we’ll save that part for later. 
    
    
    `,
    `	In most cases, the relationship between real and reciprocal unit cells is much simpler:
    
    For example, if alpha is equal to gamma is equal to ninety degrees,  
    Then the reciprocal basis vector a star is equal to one over (the vector alpha times the sine of the angle beta), the reciprocal basis vector b star is equal to one over (the vector b), and the reciprocal basis vector c star is equal to one over (the vector c times the sine of the angle beta).
    
    And if alpha is equal to beta is equal to gamma is equal to ninety degrees,
    Then each reciprocal lattice basis vectors a star, b star, or c star are equal to the reciprocal of the associated direct lattice basis vector. 
        
    
    
    `,
    `	In a crystal, a plane described by the vectors AB, AC , and BC intersects with the direct lattice basis vectors a, b, and c. 
    
    Therefore the vector OA is equal to x times the vector a ; the vector OB is equal to y times the vector b, and the vector OC is equal to z times the vector c. 
    
    Similar to direct lattice vector, a reciprocal lattice vector in a reciprocal lattice is  defined by the reciprocal lattice point
    the vector g is equal to the product of h times the vector a star plus the product of k times the vector b star plus l times the vector c star. 
    
    Hence:
    
    the vector g dotted into the vector AB is equal to negative h times x plus k times y
    the vector g dotted into the vector AC is equal to negative h times x plus l times z
    The vector g dotted into the vector BC is equal to l z minus k y
    
    Now, if we set h equal to one over x, and k equal to one over y, and i equal to one over z, then we can see that the vector g dotted into the vector AB is equal to the vector g dotted into the vector AC which is also equal to the vector g dotted into the vector BC, which all equals zero. 
    
    The reciprocal lattice vector is normal to the vector AB, AC, and BC are hence normal to the crystallographic plane, namely, the reciprocal vector g with component (h,k,l), is perpendicular to the plane with Miller indices (hkl).
    
    Essentially this can be taken to mean that instead of working with lattice planes in direct space, we can imagine all of the 2 dimensional planes of one direction that are parallel to each other becoming (1 dimensional) points normal to the planes from which they were formed. 
    
    
    
    
    `,
    `	Geometrically, the cosine of the angle AON is equal to the magnitude of vector ON divided by the magnitude of the vector OA, which we can define as dh divided by the magnitude of the vector a.  
    
    So, the vector g dotted into the vector OA gives the magnitude of the vector g times the magnitude of the vector OA times cosine of the angle AON, and this is equal to h times the reciprocal lattice vector a star, plus k times the reciprocal lattice vector b star, plus l times the reciprocal lattice vector c star, all dotted into x multiplied by the vector a, which all equals one. 
    
    Therefore the magnitude of the vector g times d is equal to one. This means that the length of a reciprocal lattice is equal to the inverse of the spacing between the corresponding lattice planes.  
    
    As a summary, the reciprocal lattice vector g is equal to the product of h times the vector a star plus the product of k times the vector b star plus l times the vector c star.  
    
    
    
    `,
    `	Graphically, the reciprocal lattice has the same symmetry as the crystal lattice.
    
    The reciprocal lattice constants a star, b star, and c star are defined so that they correspond to d star (1 0 0), d star (0 1 0), and d star (0 0 1)
    
    Note that the direction of a star, b star, and c star will only coincide with that of a, b, and c if the crystal lattice has alpha equal to beta equal to gamma equal to ninety degrees. 
    
    
     
    
    
    `,
    `	The reciprocal lattice has the same symmetry as the crystal lattice
    
    It can be derived from the crystal lattice graphically; to do so:
    
    Draw lattice planes
    Pick an origin and draw normal to the lattice planes
    Mark points along the normal spaced d star (h k l) from the origin, where d star (h k l) is equal to one over d h k l
    
    The reciprocal lattice constants a star, b star, and c star are defined so that they correspond to d star 1 0 0, d star 0 1 0, and d star 0 0 1
    
    Note that the direction of a star, b star, and c star will only coincide with that of a, b, c if the crystal lattice is such that a equals b equals g is equal to ninety 
    
    
    `,
    `	For a given direct lattice, the correspondent reciprocal lattice points can, in general, be mapped according to the following rules: 
    
    From a common origin, draw normals (distance of the corresponding point from the origin) to each plane of the direct lattice.
    
    On each of these normals, locate a point corresponding to each of the parallel set of planes at a distance from the origin equal to one over d sub hkl, two over d sub hkl, etc. 
    
    The collection of such points will form the reciprocal lattice.
    
    As an illustration, we draw the reciprocal lattice to a monoclinic crystal. 
    
    Here the direct lattice basis vector a is perpendicular to the plane of paper, with both the direct basis vectors a and b lying in the plane of the page.  
    
    Consider planes (1 0 0), (0 0 1), and (1 0 1). 
    
    As all of them are parallel to the direct basis vector b, their normals lie in the plane of the page. So all the points along these normals at perspective distances of one over d sub h, k, l represent a lattice with a reciprocal relationship to the direct lattice defined by its primitive unit vectors a, b, and c. 
    
    
    `,
    `	But, we said that there was more than one way to construct the reciprocal lattice, and we mentioned a Fourier approach, so for starters, let’s outline what that really means, and why it is applicable:
    
    Bragg’s law gives the conditions under which we will observe constructive interference of waves that have been scattered from lattice planes. 
    
    However, if we are to determine the intensity of the electrons scattered from the atoms themselves, i.e. from the spatial distribution of the specimen electrons around the atoms within each unit cell, we’ll need to come up with a deeper analysis.  
    
    We can use the periodicity of the electron density n as a function of r to perform a Fourier analysis, and if we do this, we see that we end up with a second lattice – the reciprocal lattice! 
    
    
    `,
    `	Since the electron density is characteristic of the atoms in the unit cell, and since the atoms in the unit cell are, by definition of crystallinity, periodic, we know that the electron density n of (r) is a periodic function. 
    
    We also know that any such periodic function can be expressed in terms of its periodic Fourier components, or “harmonics”. 
    
    For example, the density of n of X in a one-dimensional crystal could be modeled as: 
    
    n of x is equal to n sub zero plus the sum of p greater than zero of C sub p times cosine of [2 pi times (p times x over alpha) plus S sub p times the sine of (2 pi times (p times x over alpha)]
    
    An easier expression, since e to the power of a plus b is also equal to e to the a times e to the b, would be: 
    
    n of x is equal to the sum of p of [n sub p times e to the (i 2 pi times the fraction (p times x over alpha))]
    
    With its Fourier components being n sub p equal to one over a times the integral evaluated from 0 to a of the function dx n of x times e to the (negative i times 2 times pi times the fraction (p x over alpha))
    
    
    
    
    `,
    `	So, if we define vector position r to be equal to the x and y coordinates in two dimensions, or the x, y, and z coordinates in three dimensions, then our Fourier analysis would take the form: 
    
    f of the vector r equal to the sum of big G of f sub big G times e to the (i times the dot product of the vectors big G and r), where the vector big G  is vectors, so e to the (i times the dot product of  the vectors big G and r) is equal to e to the (i times big G sub x times x plus big G sub y times y plus big G sub z times z. 
    
    A periodic function satisfies the condition f of the vector r is equal to f of the sum of the vectors r and big R where the vector big R is any translation, Big R of (n sub 1, n sub 2, n sub 3) equals n sub 1 times a sub 1 plus n sub 2 times a sub 2, and, if in 3D, plus n sub 3 times a sub 3., where all n’s are integers. 
    
    Therefore: 
    
    f of the vector r plus the vector big R is equal to the sum of big G of (f sub g times e to the [i times the dot product of the vectors big G and r] times e to the [i times the dot product of the vector big G and the vector big R]), or e to the (i times the dot product of the vectors big G and big R), which is equal to one. Then, the dot product of the vectors big G and big R is equal to an integer times 2 pi. 
    
    
    `,
    `	The reciprocal lattice, then, is the set of vectors big G in Fourier space that satisfy the requirement that the dot products of the vectors big G and big R be equal to 2 pi times an integer for any translation vector big R of n sub 1, n sub 2, n sub 3, equal to n sub 1 times a sub 1 plus n sub 2 times a sub 2 and, in 3D, plus n sub 3 times a sub 3. 
    
    If we then define the vectors big G of m sub 1, m sub 2, and m sub 3 to be equal to m sub 1 times the vector a star sub 1 plus m sub 2 times the vector a star sub 2 plus the vector m sub 3 plus the vector a star sub 3. 
    
    The only information about the actual basis of atoms is in the quantitative values of the Fourier components, f sub big G in the Fourier analysis – 
    
    f of the vector r is equal to the sum of big G times f of big G times e to the (i times the dot product of the vector big G and the vector r) 
    
    Inverted, this is 
    
    f of big G is equal to one over V sub cell times the integral across the cell of d of the vector r times f of the vector r times e to the (i times the dot product of the vectors big G and r)
    
    
    
    
    `,
    `	So, in one dimension: 
    
    B being equal to 2 pi over a, with b and a being parallel. 
    
    The periodic function f of x 
    
    Is equal to the sum of p’s in f sub p times e to the (i 2 pi times (p x over a)) which is equal to the sum of p’s in f sub p times e raised to the (i 2 pi p b), when p is an integer. 
    
    The set of all integers multiplied by b are the reciprocal lattice! 
    
    
    
    
    `,
    `	In 2D, we can determine the two lattices, the reciprocal lattice vector a star sub one, perpendicular to the direct basis vector a sub 2, and the reciprocal vector a star sub 2 perpendicular to the direct vector a sub one.
    
    The Wigner-Seitz cell of reciprocal lattice is called the “First Brillouin Zone” or just “Brillouin Zone” 
    
    
    `,
    `	The definition of the reciprocal lattice in 3D using wave vectors is the construction that we will deal with most – it is a construction of vast importance within condensed matter physics. 
    Starting with a Bravais lattice, the reciprocal lattice is the set of all wave vectors big G that give plane waves e to the I times the dot product of big G and the vector sum of r and big R with the periodicity of the Bravais lattice. 
    
    If the Bravais lattice is given by points R, one thus has e to the I times the dot product of big G and the vector sum of r and big R which is equal to e to the I times the dot product of big G and r, which can be re-written as e to the i times the dot product of big G and big R which is equal to one. So, the dot product of big R and big G is equal to 2 pi times an integer. 
    
    The G-vectors correspond to the reciprocal lattice points, and, we should note, the reciprocal lattice is itself a Bravais lattice! 
    
    
    
    `,
    `	So, in 3D, the primitive vectors of the reciprocal lattice are defined by the vectors a star sub i that satisfy the condition that the dot product of a star sub I and a sub j be equal to 2 pi times the delta function, where the delta function is equal to one if i is equal to j, and where the delta function is 0 if i is not equal to j. 
    
    Therefore we will again observe that, as in the lower dimensional case, the Brillouin zone IS the Wigner-Seitz cell for reciprocal lattices. 
    
    
    `,
    `	So, now that we’ve clarified the idea of reciprocal space, we’re probably now wonder: why do we need it? 
    
    Contrary to intuition, the observed diffraction pattern is not a 100% direct representation of the crystal lattice! However, the length and vectors in the reciprocal space are related to the diffraction from the crystal. This is why an understanding of so-called “reciprocal space” is important for the understanding and interpretation of electron diffraction patterns – because we’re not observing the real crystal structure; we’re observing the reciprocal crystal structure. In short, we just can’t draw structural conclusions about the real crystal from diffraction data very easily. Thankfully, really smart humans constructed the idea of “reciprocal space” in a way that allows the reciprocal lengths and vectors to be related to the direct lattice, as well as the observed diffraction from the crystal. Clearly then, that means that reciprocal space is crucial for the understanding and interpretation of electron diffraction patterns. 
    
    The benefits of working in reciprocal space are many-fold: 
    
    The first benefit hinges on the fact that the orientation of a direct lattice plane can be fully determined by its normal. In the reciprocal lattice, the length of the normal is proportional to the reciprocal of the respective interplanar spacing (i.e. proportional to 1 over dhkl), meaning that the length and direction of the normal -- a single vector -- can uniquely describe the set of parallel planes. This means that reciprocal space allows us to lessen our workload since we can describe 2D planes using simple vectors. 
    
    Another benefit is that the diffraction conditions are obtained more conveniently by using reciprocal lattice, since the Bragg equation is already working in reciprocal space. 
    
    And, since the diffraction pattern is like a map of the reciprocal lattice of the crystal, the interpretation of diffraction patterns becomes easier since the various constructions of a reciprocal space provided simple rules for relations between both lattices. 
    
    We can say that, in general, getting a working understanding of the quantum mechanical behavior of electrons in periodic crystal lattices becomes easier when we use reciprocal lattices, so we do – electron crystallography and the concept of reciprocal lattices are intertwined since the reciprocal lattice was developed as a convenient way to related observed diffraction phenomena with known real-space specimen structure. 
    
    
    
    `,
    `	So, to break this all down: we direct our electron beam onto our crystalline specimen. This means that we are, theoretically, shooting electrons into the convolution of a direct lattice and a motif, since we use these conventions to represent real crystals. 
    
     These electrons, which can be imagined as a homogeneous plane of electron intensity before they hit the specimen, interact with the crystal according to the probabilistic nature quantum mechanics. These electron-specimen interactions within the crystal produce an altered electron intensity distribution, so electrons are scattered according to quantum probabilities that we can model. Using our knowledge about how the electrons interact with the lattice (using the structure factor) we can create an entire reciprocal crystal that is correlated to the observed diffraction pattern, which is then what we can think of as producing the diffraction pattern as a result of interference and magnification projecting the electron intensities onto a detector. We can then convert that reciprocal crystal (lattice) into a real-space crystal (lattice), and deduce structure via data gathered from diffraction phenomena. 
     
    
    
    
    
    
    `,
    `	The point of learning about all of this is, of course, so that we can find out information about our specimen. When working with these concepts, these easy to remember facts and relations can prove helpful. 
    
    The reciprocal lattice of a reciprocal lattice is the original, direct lattice.
    
     The reciprocal lattice of a simple cubic lattice with primitive cell side a is again a simple cubic lattice, but with cell side 1 over a 
    
    The reciprocal lattice of an fcc Bravais lattice with conventional cubic cell side a is a bcc lattice with conventional cubic cell side 1 over a 
    
    The reciprocal lattice of an bcc lattice with conventional cell side a is similarly an fcc lattice with conventional cell side 1 over a. 
    
    The reciprocal lattice on a simple hexagonal Bravais lattice with lattice constants a and c is also a simple hexagonal lattice but with lattice constants four pi over the square root of 3 a and two pi over c, and rotated 30 degrees around the c-axis. 
    
    The volume Vg of the reciprocal lattice primitive cell is Vg = two pi times three over vc, where vc is the volume of the direct lattice primitive cell. The cell volumes can be obtained from the corresponding primitive vectors by taking Vc to be equal to vector a1 dotted into (a2 cross a3) and Vg being equal to b1 dotted into (b2 cross b3). 
    
    The reciprocal lattice is the fourier transform of the direct lattice. – A reciprocal lattice vector G (h k l) is perpendicular to the plane (h k l).
    
    If a function is periodic in the direct lattice, so that f of little r is equal to f of little r plus big R, then one can write f of little r as being equal to  X G aG times e to the (iG dot r) so that the sum is taken only over the reciprocal lattice points.
    
    
    
    `,
    `	In order to quantify this scattering in a crystal specimen, we can recall another concept called the, “structure factor” Big F of theta. 
    
    Big F of theta is defined as the sum of the atomic scattering factors from all the i atoms in the unit cell with atomic coordinates, x sub i, y sub i, and z sub I, multiplied by a phase factor. 
    
    This phase factor takes account for the difference in phase between waves scattered from atoms on separate but parallel atomic planes with the same Miller indices (hkl). The scattering angle is the angle between incident and scattered electron beams.
    
    Apparently the amplitude of scattering depends on the type of atom, the position of the atom in the cell, and the specific atomic planes that make up the crystal structure. 
    
    Keep in mind that this equation predicts certain circumstances where the amplitude of scattering is equal to zero, meaning we’ll see nothing – this might not seem important now, but will in a moment.
    
    
    
    
    `,
    `	We can use the structure factor to help us describe the intensities of the diffraction pattern in terms of the reciprocal lattice and, thereby to describe the direct lattice. 
    
    Remember that in certain circumstances the structure factor predicted areas of zero scattered amplitude within some crystals – this will be key to forming what are called “selection rules”, which help us determine if the structure factor will return a “0” scattered intensity for a certain point.
    
    But, all of the cases we’ve given so far have been very general, so let’s examine a specific example -- a simple cubic crystal in real space, with its motif represented by a blue sphere. 
    
    We apply whichever reciprocal lattice construction we prefer, and we see that the reciprocal crystal we come up with is just another simple cubic crystal, but of course of inverse size. 
    This is due to the basic symmetry of the cell, which allows for all reflections to be represented in the reciprocal crystal – that is, in “simple” cubic crystals, there are NO missing reflections, meaning we don’t have to worry about selection rules. 
    
    
    
    `,
    `	Examining a slightly more complicated unit cell, however, we can see that if the structure is FCC, then the reciprocal structure will be BCC! 
    
    This is because for all cubic lattices, the angles alpha, beta, and gamma are all equal to 90 degrees, and sides a, b and c are all equivalent. 
    
    The magnitude of the reciprocal vector a, is then equal to one over the direct lattice vector a, and the reciprocal vector a star is parallel to the vector a. 
    
    This means that the direct lattice of the fcc reciprocal lattice is a bcc crystal lattice. The direct lattice bcc reciprocal lattice is the fcc crystal lattice.   
    
    
    `,
    `	We’re in a slightly more complex lattice, now, however, so let’s take a moment to think about the selection rules! The selection rule for BCC states that any points whose hkl integer values sum to an odd number will be forbidden – that is, in BCC, 100, so 1 plus 0 plus 0, equal to 1, would be forbidden since it is odd. In other words, if h plus k plus l for a lattice point sum to an even number, we say that this point is “allowed”.
    
    When we consider this, we can note that the100, 111, 210, etc. points in the reciprocal lattice do exist (as the corresponding real lattice planes exist), but according to the structure factor the intensity decorating these points is zero, meaning we will not observe them. This is called a “missing reflection”, because it exists, but we observe no intensity from them.
    
    So, the structure factor at the missing reflection 100 is zero. Therefore we use a weighting factor for each point, or motif, which relates the square of the structure factor to a factor of 4 times the square of the atomic scattering factor. 
    
    So, if we construct the reciprocal crystal of a BCC crystal using this selection rule, then our end result is an FCC lattice with intensities as the motif. 
    
    
    `,
    `	And, for FCC crystals, as we can probably already expect, we’ll be able to construct a BCC reciprocal crystal. 
    
    In this case, however, our weighting factor for each point, or motif, is 16 times the squared atomic scattering factor, which is equal to the square of the structure factor. 
    
    
    
    
    `,
    `	And after all of this, we have now been introduced to the definition of the reciprocal lattice and methods through which we can correlate the reciprocal lattice to direct lattice.
    
    The questions we’ll wind down this presentation with is: how we are going to use this knowledge? Thankfully we already know why the reciprocal lattice is important in electron diffraction analysis in general, but what specifically can we do with it? 
    
    As it turns out, we can use it for determination of the zone axis, in addition to the previously touched-on uses in determination of the lattice parameters, and determination of crystal structure from the electron diffraction pattern.
    
     Unfortunately we will not be able to speak much about the last point, since it is an incredibly complex topic, but looking into it independently may be of interest to you if you are involved in protein structure determination or other electron crystallographic applications! 
    
    
    
    `,
    `	As an example of the importance of the reciprocal space/lattice in real-space zone axis identification, consider this example. 
    
    In the last chapter, we learned that the line that intersects two more planes is defined as the, “zone axis” of these planes in the direct lattice. 
    
    The zone axis can be determined using reciprocal space so long as we are aware of 2 non-parallel reciprocal vectors, since we can construct the zone from eventual the intersection of these vectors. We would not have known about these vectors without the concept of reciprocal space! 
    
    The vector describing the zone axis, u v w, and the vectors describing the direct lattice are equal to the cross product between the quantity (h sub 1 times the reciprocal vector a star plus k sub one times b star plus l sub one times c star) and the quantity (h sub 2 a star plus k sub two b star plus l sub two c star). 
    
    
    
    
    
    
    `,
    `	Calculating the d spacing and crystal plane angle requires use of reciprocal space as well – 
    
    a reciprocal lattice vector r star is equal to h times a star plus k times b star plus l times c star, hence the d spacing of the lattice planes (hkl) is described by the ratio of one over d star, which is also equivalent to one over the square root of the dot product of two such reciprocal lattice vectors described above. This, in turn, is equivalent to one over the squareroot of (h times a star plus k times b star plus l times c star) times (h times a star plus k times b star plus l times c star. 
    
    For orthorhombic, tetragonal, or cubic crystals, the dot products of the reciprocal vectors a and b are equal to zero. 
    
    Therefore we can observe the expression seen below, which tells us that. 
    
    The angle phi between plane (h 1 k 1 and l 1) and (h 2 k 2 and l 2) ) in orthorhombic, tetragonal, or cubic can be found by taking the cosine of the angle phi to be equal to the reciprocal lattice vector r star sub 1 dotted into the reciprocal lattice vector r star sub 2 all over the product of the magnitudes of the reciprocal lattice vectors r star sub one and r star sub two, which is equal to the sum of h sub 1 plus h sub 2 over a squared plus k sub 1 times k sub 2 over b squared plus l sub 1 times l sub 2 over c squared all over the product of (the square root of the sums of h sub 1 squared over a squared plus k sub 1 squared over b squared plus l sub 1 squared over c squared) and (the square root of h sub 2 squared over a squared plus k sub 2 squared over b 2 plus l sub 2 squared over c squared.) 
    
    
    
    `,
    `	This slide marks the beginning of three note-less slides intended to serve as references. 
    
    
    `,
    `	This slide shows a table detailing the relationships of the two lattices and their projections. 
    
    Miller indices h k l given in parenthesis signify a plane in real space. In stereographic projection, this is equivalent to a great circle or a point representing the projection of its pole. In reciprocal space this represents lattice points via the vector joining the origin to the point. 
    
    Miller indices u v w given in brackets represent a zone axis in real space, a pole or great circle in an SGP, and a plane in reciprocal space. 
    
    Knowing these two facts, then, it is easy to see why the equation h times u plus k times v plus l times w equals 0, where the zone axis u v w is a constant, defines the planes in the zone in real space. In SGP, the equation defines planes represented by points on the great circle for the zone. In reciprocal space the equation defines the lattice points which lie in the reciprocal plane. 
    
    The same equation considered when the direct space hkl plane is considered to be constant can define the zone axes contained in a plane in real space, points representing the zones on the great circle for the plane in the SGP, and the plane which contains the reciprocal vector g in reciprocal space. 
    
    
    `,
    `	This slide shows a table (from Drenth’s Principles of Protein X-ray Crystallography) of the relationships between the axes and angles in the direct and reciprocal lattice in a triclinic space group. 
    
    
    `,
    `	This slide shows a table (from Drenth’s Principles of Protein X-ray Crystallography) of expressions for the reciprocal d of hkl and d of hkl in the seven crystal systems `
    
    
    
    
]

s2ch4notes = [
    `	Title slide – Section II: Electron Diffraction
Part 4: Kinematic Theory



`,
`	We used the following additional references when compiling this lecture: 

P. W. Hawkes and E. Kasper, Principles of Electron Optics, Vol. 3: Wave Optics, Harcourt Brace & Company, Academic Press, 1994

B. Fultz, and J. Howe, Transmission Electron Microscopy and Diffractometry of Materials, Fourth Edition, Springer 2013

L. Reimer and H. Kohl, Transmission Electron Microscopy, Physics of Image Formation, fifth edition, Springer, 2008

H. Zhang, Elastic scattering and kinematic theory of diffraction. Trinity College Dublin From: https://www.tcd.ie/Physics/research/groups/pan/teaching/PY5019/notes/KinematicED.pdf



`,
`	Lecture outline – 

•	Assumptions for Kinematical Theory
•	Cross-sections and Scattering Strength
•	Scattering Cross Section
•	Electron Scattering by Single Atom
•	Calculating an Atomic Scattering Factor  
•	Electron Scattering from Multiple Atoms
•	Total Diffracted Wavelets from Multiple Atoms
•	Diffracted Intensity from Crystal Lattice
•	Structure and Lattice Amplitude
•	Structure Factor Rules for 
•	Simple Cubic Lattice
•	Body Centered Cubic Lattice
•	Face Centered Cubic Lattice
•	Two Lattice
•	Summary
•	Enhanced materials: Derivation of Kinematical Theory



`,
`	Kinematical theory is an approximation allows us to explain some basic aspects of diffraction, such as atomic scattering and the impact of crystal structure factors, and the relationship between the two. 

The fact that it is an approximation, though, means that we have to make some limiting assumptions, the most important of which are as follows:
	 
We treat all incident electrons as monochromatic plane waves. Monochromatic meaning that all electrons have the same energy and wavelength.

We also assume that the crystal they are incident upon is a single perfect crystal. This of course means that kinematical theory cannot be used to describe diffraction from polycrystalline areas or crystal defects.

And, in our treatment, only a negligible fraction of incident electrons will be subject to scattering by the crystal, since we’re assuming every atom in the crystal received the same amplitude of electron beam plane wave. 

When an electron is scattered, we’ll assume that only single scattering is occurring, meaning the electron will just interact with one atom. This is a rather limiting assumption, since it is very rare that we have atomically thin specimens, as hard as we may try to produce them.

The scattered beam arising from these single scattering events will also be treated as a plane wave, 

We’ll assume that there is no attenuation of waves between the atomic layers in the specimen, meaning the electron waves have the same phase and amplitude and do not experience absorption.  

And we’ll also ignore interactions between the incident and the scattered waves, or, in other words: the refractive index of the crystal is unity. 

Again, we can already tell this won’t true in practice, but the theoretical understanding is still useful for building our overall intuition. 

Even with all of these limiting assumptions, kinematical theory still describes observations well in certain situations: 

Such as when the intensities of the diffracted beams are low, because this is a situation similar to the assumed case in which only a tiny portion of the incident electrons are scattered.

Generally, though, it can be used for all materials so long as the accelerating voltage is around a few hundred kilovolts – between 10 to 100 kilovolts is where we see the theory perform satisfactorily for materials with a low atomic number, and in single layer 2D materials like graphene. 

So, it has certain strengths, but can’t be used in areas where it is weak, such as in quantitative electron crystallography – this is where dynamical theory is useful. But more on that later! 

For now, at least, we know what assumptions kinematical theory relies on, so let’s begin to understand the rest of it!  


`,
`	To introduce this simply, without being bogged down by equations (though playing with the math is encouraged!), we’ll outline the differences between classical and quantum mechanical scattering. 

Classical theory treats atoms and particles as hard spheres with individual and well-defined trajectories. This is the “billiard ball” scattering paradigm, which we’ve discussed previously in greater detail. 

A quantum picture of scattering, however, suggests a scattering of wave packages. This also implies wave-particle duality. This means, quantum mechanically speaking, there are no individual, every-day particles to be had --only dualistic waves. Therefore we can’t really say for sure where a particle will be; we can only have some idea of where it is likely to be, and this is why we use probabilities to describe scattering in quantum theory. 

Since quantum theory seems to provide better results, we choose to use quantum theory when we can. 




`,
`	A beam of incident scatterers with a given flux or intensity (number of particles per unit area dA per unit time dt) impinges on the single atom (described by a scattering potential) 

The flux or intensity can be written as I sub inc, which is equal to the ratio of d N sub inc over d A. 

The number of particles per unit time which are detected in the small region of the solid angle, d omega, located at a given angular deflection specified by theta and phi, can be counted as D N sub sc over d Omega. 

The differential cross-section for scattering is defined as the number of particles scattered into an element of solid angle d omega in the direction given by theta and phi per unit time

Where the differential cross section of theta, psi, with respect to omega is equal to d N sub sc over d omega divided by d N sub inc over d A, which is also equal to one over the incident intensity I sub inc times d N sub sc with respect to Omega. 

With a total scattering cross section sigma sub tot being equal to the integral of d sigma over d omega d omega 



`,
`	If we consider the Born approximation for single scattering (that is, a single atom doing the scattering), we can first ignore exchange effects, virtual inelastic scattering effects, spin, Bremsstrahlung energy losses, electron-induced damage, and absorption. 

Taking all of that out of the equation, the first Born approximation for the wave scattered by an atom, is: 

Phi sub s of (the vector r) is congruent to (negative e to the [i k r] all over r) times (m over 2 pi times the square of Planck’s reduced constant) multiplied by the integral of V as a function of the vector r prime) times e raised to the power of (negative i times (the difference between the vector k and the vector k sub 0) dotted into the vector r prime all with respect to r prime. 

The scattering factor for an atom is given by: 

Little f of q is equal to negative 2 m over q h-bar squared all times the integral from 0 to infinity of r prime times V of (r prime) times the sine of (q times r prime) all with respect to r prime. 

Where ℏ (h bar) is Planck’s reduced constant, 
m sub 0 is the stationary electron mass, 
r prime is the atomic coordinate, and 
V is the potential of the material.  



`,
`	F of theta, the interaction potential of an atom consists of attractive term form the nucleus of atomic number Z and a repulsive term from the atomic electrons with electron density ro of the vector r prime 


Where the volume of the atom as a function of the vector r is equal to the negative ratio of (Z times e squared) all over (the magnitude of the vector r) which can be added to the integral from negative to positive infinity of the fraction (e squared times ro as a function of the vector r prime) all over (the magnitude of the difference between the vector r and the vector r prime) d 3 vector r prime. 



Where the vector q is equal to the difference between the vector k and the vector k sub zero. 


And q is equal to the magnitude of the difference between the vectors k and k sub zero, which is equal the square root of (the difference between (the sum of k squared and k sub zero squared) and 2 k times k sub zero cosine 2 theta) which is also all equal to 2 k sine of (theta)


Where f of theta is equal to the product of the negative quotient of (2 times m all over q times the square of Planck’s reduced constant) and the integral from 0 to infinity of r prime times (negative (Z e squared over the magnitude of the vector r) plus the integral from negative to positive infinity of the fraction (e squared ro of the vector r prime all over the magnitude of the difference between the vectors r and r prime d2 vector r prime) all times sin of (q times r prime) d r prime. 

We can see that the electron scattering factor . . . 


f of theta which is equal to m e squared all over 8 pi eta sub 0 epsilon sub 0 times  the fraction h bar squared all times lambda squared (z minus f sub x) over the squared sine of theta. 

 where epsilon sub 0 is defined to be the permittivity of vacuum


. . . and the X-ray scattering factor are fairly similar, with the major difference being the fact that we must also account for electron-electron interactions in the former equation. 

And f sub x is equal to e squared over m c squared times the integral from negative infinity to positive infinity of ro of the vector r times e to the I to the (4 sin of theta all over lambda) d 3 the vector r. 



`,
`	To form the diffraction patterns we’d expect to see in TEM, we must have more than one scattering center. Considering the geometrical array of scattering centers, we have a set of vectors Big R sub j to mark the center of the atoms in the crystals. 

Now we know that the scattered electron wave in the first Born approximation is 

Phi sub s of the vector r, which is all approximately equal to negative phi sub 0 times e to the I k r over r times m over 2 pi h bar squared all times the integral of V of (the vector r prime) times e to the negative i times the vector k minus the vector k sub zero) dotted into the vector r prime) d 3 r prime. 

The diffracted wave from a group of atoms is found by choosing a suitable potential, V as a function of the vector r prime.

For a group of atoms we use a sum of atomic potentials, V sub at, each centered at a vector big r sub j that is an atom site.

V of the vector r is equal to the sum of the vectors Big R in the expression V sub at (of the vector r prime minus the vector big R sub j). 

Wheneve the vector r prime is equal to the vector big R sub j one the terms is V sub at of zero and the potential V of r prime has a big contribution from the atom centered at the vector big R sub j




`,
`	The coherently scattered wavelet at detector position, r, from all atoms in the specimen with N atoms is therefore given by

Phi of r, which is equal to the sum from i equals i to I equals N of phi sub i of (the vector r, the vector big R sub I, and t) which is equal to A times the sum from i equals 1 to i equals N of f of the vector big R sub I times phi sub 0 times A times e to the negative i[the vector q dot the vector big R sub i minus the vector k dotted into the vector r]

Though in practice we can never know the positions of electron sources and detectors to within an electron wavelength.

For wavelets that undergo coherent-elastic scattering, the magnitude of the vector k is equal to the magnitude of the vector k sub zero, the relationship between the vector q and is given by


The magnitude of the vector q is equal to the magnitude of the difference between the vectors k and k sub 0 which is equal to 2 times the magnitude of k times the sine of theta which is equal to 4 pi over lambda all times sine theta. 

 the vector q is normal to the diffracting planes in comparison to Bragg conditions and
The magnitude of the vector q is equal to one over d

Bragg conditions describes the diffraction in direct lattice and Laue conditions describes the diffraction relationships in reciprocal space.

where the magnitude of the vector g is equal to 1 divided by d




`,
`	The Fourier transform of scattered wave is given in reciprocal space:

Phi of ( r ) is equal to A times the sum of m from m equals 1 to big M of the sum of j from j equals one to big J of the sum of i from i equals 1 to big I of f of (the vectors big R sub I, j, m) times e to the negative I 2 pi times [the vector g dotted into the vector big R sub I, j, m]. 



Phi of the vector g is equal to A times the sum of g from g equals 1 to n of the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big I of f of (the vector big R sub I, j, m)  times e to the i 2 pi [g dotted into big R sub i, j, m]

The intensity of diffracted wave in a crystal is therefore given by:

Big I, equal to phi of the vector g times the complex conjugate of phi of the vector g, which is equal to A squared times the sum from g equals 1 to n of f (of the vector r) times e to the I 2 pi times the vector g dotted into the vector r all plus A squared times the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big I of f of (the vector r) times e to the I 2 pi times the vector g dotted into the vector big R


Let’s dig a little deeper into the structure and lattice amplitudes… 
The lattice amplitude depends only on the external shape of the crystal



`,
`	The structure amplitude, also called the structure factor Fcell depends on the positions and type of atom inside the unit cell
F sub cell is equal to A squared times the sum from g equals 1 to n of F (of the vector r) times e to the (i 2 pi times the vector g dotted into the vector r)

The lattice amplitude/shape factor depends only on the external shape of the crystal, and can be mathematically expressed as a triple summation: 


Big G which is equal to A squared times the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big i of  e to the (i 2 pi times the vector g dotted into the vector big R) 

The structure amplitude will be of interest only for the Bragg conditions. It will not be altered by small deviations from the geometry of the Bragg conditions. 
							

if the vector r is equal to m times the vector a plus n times the vector b plus o times the vector c


Big F sub cell is equal to A squared times the sum from g equal to 1 to n of big F of (g) times e to the (i 2 pi times the vector g dotted into the vector r)


`,
`	For a simple cubic structures, the Bravais lattice is described with one atom in the unit cell at

r equal to the coordinates 0, 0, 0. m equals n equals o equals zero; the product of mh plus the product of nk plus the product of ol equal zero. 

Big F sub cell is equal to A squared times the sum from g equals 1 to n of big F of (g) 

Apparently the strong diffraction occurs for any integer combination h k l.

The structure amplitude or factor is the atomic scattering factor. Do not require that lattice unit cell parameters have the same length or the lattice angles in 90 degree.

The same result holds for all primitive lattice.


`,
`	The structure factor is more interesting when there is more than one atom in the basis of the unit cell. Interferences between wavelets scattered by the atoms in the basis lead to precise cancellations of the some diffractions, not allow a certain combinations of h, k, l in the diffraction pattern.

The body centered cubic (bcc) Bravais lattice can be described as a simple cubic lattice with two atoms in the unit cell at R sub 1 equals the coordinates (0, 0, 0) and r sub 2 equal to the coordinates (one half, one half, one half). 


Big F sub Cell is equal to A squared times big F at (0, 0, 0) plus big F at (one half, one half, one half) times e to the (negative i  2 pi all times the fraction [h plus k plus l over 2])



We find that we will have to add the values of big F at 0 and at one half if the sum of h, k, and l is even
But that we will have to subtract the values of big F at 0 and at one half if the sum of h, k, and l is odd. 

bcc structure factor rule: 

So if h plus k plus l is equal to an even, these diffraction spots are visible in diffraction pattern
if h plus k plus l is equal to an odd integer, these hkl diffraction spots are forbidden



`,
`	The structure factor is more interesting when there is more than one atom in the basis of the unit cell. Interferences between wavelets scattered by the atoms in the basis lead to precise cancellations of the some diffractions, which means we can’t not observe certain combinations of h, k, l in the diffraction pattern.

The face centered cubic (fcc) Bravais lattice can be described as a simple cubic lattice with four atoms in the unit cell at


Point r sub 1 at coordinates (0, 0, 0), point r sub 2 at coordinates (0, one-half, one-half), point r sub 2 at coordinates (one-half, zero, one-half), and point r sub 4 at coordinates (one-half, one-half, zero).


Then big F sub cell is equal to A squared times big F of (zero, zero, zero) plus big F of (zero, one-half, one-half) times e to the (negative I 2 pi times the fraction ((k plus l) over 2)) plus the value of big F at (one-half, zero, one-half) times e to the (negative I 2 pi times the fraction ((h plus l) over 2) plus the value of big F at (one-half, one-half, zero) times e to the (negative i 2 pi times the fraction ((h+k) over 2)) 


We add values of big F, that is big F at (zero, zero, zero) PLUS 3 times F at (zero, one-half, one-half) if h k l are all even or odd, 
But subtract values of big F, so big F at (zero, zero, zero) MINUS 3 times the value of big F at (zero, one-half, one-half) if h k l are all odd and even. 

fcc structure factor rule: 

All hkl are even or odd, i.e. 200, 111, these diffraction spots are visible in diffraction pattern

hkl are even and odd integers, i.e. 123, these hkl diffraction spots are forbidden



`,
`	A unit cell that consists of two or more sublattices can be described as one sublattice paired with a shifted sublattice.

For example, in NaCl (sodium chloride, or table salt), the unit cell is two Na and Cl fcc sublattices that are shifted by one half of the body diagonal (½, ½, ½) of the unit cell.

This shift can be considered by introducing a common phase factor for the Cl sublattice

F sub cell is equal to A squared [f sub sodium plus f sub chlorine times e to the ( negative I pi times (h plus k plus l)] times [one plus e to the (negative i times 2 times pi times the fraction (k plus l) over (2) ) plus e to the (negative I times 2  pi times the fraction ((h plus l) over 2) plus e to the (negative I times 2  pi times the fraction ((h plus k) over 2

The structure factor rule for NaCl crystal diffraction is:

Big F sub cell is equal to 4 times (f sub sodium plus f sub chlorine) if h, k, and l are all even 
	is equal to 2 times (f sub sodium minus f sub chlorine) if h, k, l are all odd
	and 0 if h, k, l are mixed. 

Similar calculation can be applied to other crystal structures


`,
`	The lattice amplitude (or the shape factor) depends only on the external shape of the crystal. For very large crystals, we don’t really find anything interesting other than the fact that the shape factor intensity becomes infinitely high and infinitesimally narrow in very large crystals. 

Applying the shape factor to smaller crystals, however, is where things get interesting. 


`,
`	The total diffracted intensity is given by big I sub g, which is proportional to the squared magnitude of the structure factor for the cell times the squared magnitude of the lattice amplitude. This is equivalent to the product of the squared magnitude of the structure factor and the quantity [{(sine squared of (pi N sub x s sub x a) all over the square of (pi s sub x a)} {times the squared sine of (pi times N sub y s sub y b) all over the square of (pi s sub y b)} {all times the squared sine of (pi N sub z s sub z c) over the square of (pi s sub z c)}]. 

There are three cases we can consider this intensity within: 

thin crystal foils (or discs), needle-like crystals, and small cubes or spheres. 

For case one, the case of thin crystal foils that amount to discs, the term s sub z approaches zero, while the total diffracted intensity reaches its maximum. Furthermore, when the total diffracted intensity is equal to 0, s sub z will be one over t for diffraction from needle-like shapes. 

In case two, needle like crystals, the first zero for the squared magnitude of the lattice amplitude is reached when s sub z is small and s sub x and s sub y are larger. 

In case three, the case of small cubes or spheres, the extension of the squared magnitude of the lattice amplitude is the same in all direction, meaning s sub x is equal to s sub y is equal to s sub z, which is also equal to 1 over L. 


`,
`	The more factors we take into account (relativity, wave-particle duality, electron potentials, etc), the more accurate our models of scattering become. 

The scattering cross section d sigma represents the solid angle through which an electron is scattered by a single atom. 

The differential scattering cross section, d sigma over d omega, represents the number of particles scattered into an element of solid angle d omega in the direction theta, phi per unit time.

The structure factor,  big F of theta is a way to represent the amplitude of scattering from all atoms of a unit cell through a sum of individual atomic scattering factors raised to a phase factor. This is proportional to the scattered intensity. The structure factor does not discriminate between constructive and destructive interference – we must check structure factor rules for the crystal in question before we can differentiate between allowed and forbidden reflections. 

These concepts allow us to quantify crystal scattering over angular ranges of the specimen, and to relate these data to crystal structure and observed diffraction patterns. 



`,
`	Slides beyond this point are devoted to explaining the derivation of the kinematical theory of electron diffraction; these are “enhanced materials” for deeper understanding, rather than concepts required for a basic understanding of the topic. 


`,
`	The Schrödinger equation is the fundamental equation of physics for describing quantum mechanical behavior. 

It is also often called the Schrödinger wave equation, and is a partial differential equation that describes how the wave function of a physical system evolves over time. 

Viewing quantum mechanical systems as solutions to the Schrödinger equation is sometimes known as the Schrodinger picture, as distinguished from the matrix-mechanical viewpoint, sometimes known as the Heisenberg picture.


If the incident beam of electrons is switched on for a time that is long when comparted with the time a single electron would take to enter, cross, and escape the interaction region, so-called “steady-state” conditions apply. This is also called a “time-invariant” form of the Schrödinger equation. 

Moreover, if we assume that the wave packet has a well-defined energy (and hence momentum), so it is many wavelengths long, and we may consider it a plane wave. We may therefore look for solutions phi of r of the time-independent Schrodinger equation, wherein:



Or: the product of the quantity (The Laplace operator plus k squared) times phi of r is equal to 2 m over the square of Planck’s reduced constant. This ratio is then multiplied by V of r and phi of r, where k squared is defined as 2 m times E over the square of Planck’s reduced constant.


`,
`	The solution of the Schrodinger equation consists of a sum of two components: 

	The first part of the sum is a general solution to the homogeneous equation in which: 

The sum of the laplacian and the square of k sub zero, when multiplied by the homogeneous wavefunction in terms of the vector r, is equal to zero. K sub zero squared is equal to twice the product of mass and energy all over Planck’s reduced constant here, as well. 

A homogeneous wave function in terms of the vector r can, in this case, be equated with the incident electron wave function, phi sub inc., which is equal to A times e to the I k sub zero squared dotted into r. 

	The second part of the sum is a particular solution with the interaction potential 

The general solution can be expressed in terms of Green’s function, which states that 

	Phi of the vector r is equal to the incident electron wave function in terms of the vector r minus the quotient of 2m divided by the square of Planck’s reduced constant all times the integral of G times the difference of the vector r minus the vector r prime times V of the vector r prime times the wave function phi of the vector r phi times d cubed times the vector r prime. 

Green’s function is obtained by solving the point source equation: 

Where the sum of (the Laplacian plus k square) times G times the difference between the vector r and the vector r prime is equal to delta r minus r prime. 





`,
`	The total scattered wave function: 


Phi of the vector r, equal to phi sub inc, or the incident wave function in terms of the vector r subtracted from the ratio of m over two pi times the square of Planck’s reduced constant all times the integral of the fraction e to the ik times the magnitude of the difference between the vectors r and r prime all over the magnitude of the difference between the vectors r and r prime quantity multiplied by the product between V of the vector r prime and phi of the vector r prime times d cubed r prime. 


The scattered wave function can be solved approximately by means of a series of successive or iterative approximations, known as the Born series.

The zero-order solution is given by phi zub zero of the vector r, which is equal to phi sub inc. of the vector r. 

The first-order solution is:
 or phi sub one equal to the vector r, which is equal to phi sub zero of the vector r minus the quotient of m over 2 pi times the square of Planck's reduced constant all times the integral of e to the I k times the magnitude of the difference between the vectors r and r prime divided by the magnitude of the difference between the vectors r and r sub one all times V of the vector r sub one times phi sub zero of the vector r sub one times d cubed times r sub one. 



The second-order solution is

phi sub two equal to the vector r, which is equal to phi sub zero of the vector r minus the quotient of m over 2 pi times the square of Planck's reduced constant all times the integral of e to the I k times the magnitude of the difference between the vectors r and r prime divided by the magnitude of the difference between the vectors r and r sub two all times V of the vector r sub two times phi sub zero of the vector r sub two times d cubed times r sub two, which is all equal to the vector r, which is equal to phi sub zero of the vector r minus the quotient of m over 2 pi times the square of Planck's reduced constant all times the integral of e to the I k times the magnitude of the difference between the vectors r and r prime divided by the magnitude of the difference between the vectors r and r sub two all times V of the vector r sub two times phi sub zero of the vector r sub two times d cubed times r sub two plus m divided by 2 pi times the square of Plack’s constant quantity squared times the integral of the quotient of e to the I k minus the difference between the vectors r and r sub two all over the magnitude of the difference between the vector r and the vector r sub two quantity multiplied by V of the vector r sub two times d cubed r sub two times the integral of e to the I k times the magnitude of the difference between the vectors r sub two minus r sub one all over the difference between the vectors r sub two and r sub one all times V of r sub one times phi sub zero times the vector r sub one times d cubed r sub one. 





`,
`	In a scattering experiment, as the detector is located at distances (away from the target) that are much larger than the size of the target.

Phi of the vector r is equal to phi sub inc of the vector r minus the fraction m over 2 pi h bar squared all times the integral of e to the (i k times the magnitude of the difference between the vectors r and r prime) all over the magnitude of the difference between the vectors r and r prime all times V of the vector r prime times phi of the vector r prime d 3 r prime 

For cases when the vector r is much greater than the vector r prime, the function phi of r is equal to the function phi sub inc of the vector r minus the fraction m over 2 pi h bar squared all times the integral of e to the (i k r) times e to the negative vector k dotted into the vector r all over the vector r al times V of the vector r prime times phi of the vector r prime d 3 r prime 

The asymptotic c form of phi, phi of the vector r can be written as e to the (i times the vector k sub zero dotted into the vector r) all plus e to the (i k r) over the vector r times the function f of (theta, psi) as r approaches infinity. 

So, f of (theta, psi) is equal to the fraction m over 2 pi h bar squared all times the integral of e to the (negative vector k dotted into the vector r prime) times V of the vector r prime times theta of the vector r prime times d 3 r prime



Phi of the vector r is equal to e to the ( i times the vector k sub zero dotted into the vector r) is a plane wave, and k is the wave vector of the scattered wave. 

The integration variable r prime extends over the degree of freedom of the target. 

The differential cross section is given by: 

d sigma over d omega which is equal to the squared magnitude of f of (theta, psi) which is equal to the ratio of m squared over 4 pi h bar to the fourth all times the squared magnitude of the integral of e to the (negative vector k dotted into the vector r prime) times V of (the vector r prime) times phi of (the vector r prime) d 3 r prime 



`,
`	If the potential V of the vector r is weak enough, it will only slightly distort the incident plane wave

The first iteration of the Born series approximates the scattered wave function phi of the vector r as a plane wave.

Phi of the vector r is approximately equal to phi sub inc. of the vector r minus m over two pi times the square of Planck’s reduced constant all times the integral of e to the I k times the magnitude of the difference between the vectors r and r prime all times V of the vector r prime times phi sub inc. of the vector r prime times d cubed r prime. 

The scattering amplitude in the first Born approximation is given by
F of theta, phi is equal to negative m over two pi times the square of Planck’s reduced constant times the integral of e to the negative vector k dotted into the vector r prime times V of the vector r prime times d cubed r prime which is equal to negative m over two pi times the square of Planck’s reduced constant times the integral of e to the negative vector q dotted into the vector r prime all times V of the vector r prime times d cubed r prime. 

Where the vector q is equal to the difference between the vector K sub zero and the vector k. 

And where the product of Planck’s reduced constant and the vector q is the momentum transfer,
The product of Planck’s reduced constant and the vector k sub zero is the linear momenta of the incident particles,
And where the product of h bar and the vector k is the linear momenta of the scattered wave particles,



`,
`	The differential cross section in the first Born approximation is given by: 

d sigma divided by d omega, which is equal to the squared magnitude of the function f of (theta, phi), which is also equal to the quotient of m squared divided by 4 pi squared times Planck’s reduced constant raised to the fourth power, all times the squared magnitude of the integral of e to the negative vector q dotted into the vector r prime all times V of the vector r prime times d cubed r prime. 
 
In elastic scattering, the magnitudes of the vector k sub zero and the vector k are equal. Hence:
Q is equal to k sub zero minus k, which is equal to the square root of (k sub zero squared plus k squared minus 2 k times k zub zero cosine of 2 theta) which is equal to 2 times k times the sin of theta. 

For a point scatterer, an atom, the potential V of the vector r prime is equal to v V of r prime when the vector q is parallel with the z, and the vector q dotted into the vector r is equal to q times r prime times cosne of 2 theta prime. 



The integral of e to the negative vector q dotted into the vector r prime all times V of the vector r prime times d cubed times r prime is equal to the integral from 0 to infinite of r prime squared times v of r prime d r prime times the integral from o to pi of e to the I q r prime cosine theta prime all times sin theta prime d theta prime times the integral from 0 to 2 pi d phi prime, which is equal to 2 pi times the integral from 0 to infinity of r prime squared times V of r prime d r prime times the integral from negative 1 to 1 of e to the I q r prime x integrated with respect to dx; this is all equal to 4 pi over q times the integral from 0 to infinity of r prime squared times V of r prime times sin of (q r prime) d r prime.



`,
`	The Schrodinger equation for electron scattering can be solved in the first order Born approximation.

The scattering amplitude is given by
The function f of theta, which is equal to negative 2 m over q times the square of Planck’s reduced constant all times the integral from 0 to infinity of r prime time V of (r prime) sin (q r prime) d r. 

The differential scattering cross section is given by



d sigma divided by d omega, which is equal to the squared magnitude of the function f of (theta), which is also equal to the quotient of 4 m squared divided by the product of q squared and Planck’s reduced constant raised to the fourth power, all times the squared magnitude of the integral, evaluated from zero to infinity, of r prime times V of (r prime) sin (q r prime) d r prime. 

The first Born approximation is valid for large incident energies and weak scattering potentials since the scattered wave function is only slightly different from the incident plane wave.

When the average interaction energy between the incident particle and the scattering potential is much smaller than the particle’s incident kinetic energy, the scattered wave can be considered to be a plane wave.




`,
`	Coulomb potential

V of r is equal to Z sub one times Z sub two times e squared all over r
where Z1e and Z2e are the charges of the projectile and target particles

The differential scattering cross section with Coulomb potential


d sigma divided by d omega, which is equal to the squared magnitude of the function f of (theta), which is also equal to the quotient of 4 m squared divided by the product of q squared and Planck’s reduced constant raised to the fourth power, all times the squared magnitude of the integral, evaluated from zero to infinity, of r prime times V of (r prime) sin (q r prime) d r prime, which is also equal to the quotient of (4 z sub 1 squared times z sub 2 squared times e to the fourth times mu squared) all over (q  squared times Planck's reduced constant raised to the fourth power) times the squared magnitude of the integral, from zero to infinity, of sin of q r d r. 

Where the integral from 0 to infinity of sin of (q r ) dr is equal to the limit as the wavelength lambda approaches 0 of the integral evaluated from zero to infinity of e to the negative lambda r all times sin (q r) d r which is equal to 1 over 2 I all times the limit as lambda goes to 0 of the difference between the integrals evaluated from zero to infinity of e to the negative difference of lambda minus I times q all times r dr and e to the negative sum of lambda plus I times q all rimes r dr, which is equal to 1 over 2 times I all times the limit as lambda goes to zero of the difference between (one over the difference of lambda minus I times q) minus (one over the sum of lambda plus I q), which is also all equal to one over q.   



`,
`	The differential scattering cross section with Coulomb potential is identical to the purely classical Rutherford Scattering.


Where d sigma over d omega is equal to the dot product of (the quotient of (4 z sub 1 squared times z sub 2 squared times e to the fourth times m squared) all over (q  squared times Planck's reduced constant raised to the fourth power)) and one over q squared. This is also equal to the dot product of (4 z sub 1 squared times z sub 2 squared times e to the fourth times m squared) all over (Planck's reduced constant raised to the fourth power)) and one over q to the fourth, which is equal to (4 z sub 1 squared times z sub 2 squared times e to the fourth times m squared) all over (Planck's reduced constant raised to the fourth power)) dotted into the inverse quartic sine of theta, which is equal to Z sub 1 squared over Z sub 2 squared times e to the fourth all over E squared, with the quotient being dotted into the inverse quartic sine of theta. 


Where E, the kinetic energy of the incident particle, is equal to 


the quotient of the square of Placnk’s reduced constant and k squared over 2 m. 


`,
`	So, to summarize what we’ve gone over so far: 

The angular dependence of the diffracted wave wave is coherent elastic scattering from the individual atoms.

The validity of kinematical theory for electron diffraction is contingent on the validity of the first Born approximation:
	The incident wave is scattered weakly by the materials.

However, the we have to be cautious about interactions our treatment of Coulomb interactions between incident electrons and specimen atoms when using Kinematical theory 



`,
`	A beam of incident scatterers with a given flux or intensity (number of particles per unit area dA per unit time dt) impinges on the single atom (described by a scattering potential) 

The flux or intensity can be written as

I sub inc, which is equal to the ratio of d N sub inc over d A. 

The number of particles per unit time which are detected in the small region of the solid angle, d omega, located at a given angular deflection specified by theta and phi can be counted as

D N sub sc over d Omega. 

Where the differential cross section of theta, psi, with respect to omega is equal to d N sub sc over d omega divided by d N sub inc over d A, which is also equal to one over the incident intensity I sub inc times d N sub sc with respect to Omega. 

With a total scattering cross section sigma being equal to the integral of d sigma over d omega d omega 



`,
`	Atom scattered wave is given by the first Born approximation

The scattered wave function Phi sub s as a function of the vector r is approximately equal to the negative quotient of m over 2 pi times the square of Planck’s reduced constant all times the integral of (e to the I k times the magnitude of the difference between the vector r and the vector r prime) all over (the difference between the vector r and the vector r prime) times the function V of the vector r prime times the incident wave function phi sub inc. of the vector r prime d cubed r prime. 

Where the incident wave function phi sub inc. of the vector r prime is equal to e raised to the power of ( i times the vector k dotted into the vector r) 


Meaning that the scattered wave function phi sub s of the vector r  is also approximately equal to the negative quotient of m over 2 pi times the square of Planck’s reduced constant all times the integral of (e to the I k times the magnitude of the difference between the vector r and the vector r prime) all over (the difference between the vector r and the vector r prime) all times the function V of the vector r prime times e raised to the power of (I times the dot product of the vectors k and r prime) d cubed r prime 


Where, k times the magnitude of the difference between the vectors r and r prime is approximately equal to the product of k and r minus the dot product of the vectors k and r prime 
& the ratio of 1 over the magnitude of the difference between the vectors r and r prime is approximately equal to 1 over r if r is much less than r prime. 
 

Meaning that the scattered wave function of phi sub s of the vector r is approximately equal to*( negative e to the i k r all over r ) times (m over 2 pi times the square of Planck’s reduced constant) times the integral of the function V of the vector r prime times e to the (negative i times (  the difference between the vector k and the vector k sub zero) dotted into the vector r prime) d 3 r prime. 

The scattering factor for an atom is given by

f of q is equal to the negative quotient of 2 m over q times the square of Planck’s reduced constant all times the integral from 0 to infinity of r prime times the function V of r prime times the sine of (q r prime) d r prime.



`,
`	To calculate f of q, the interaction potential of an atom consists of attractive term form the nucleus of atomic number Z and a repulsive term from the atomic electrons with electron density ro of the vector r prime


Where the volume of the atom as a function of the vector r is equal to the negative ratio of (Z times e squared) all over (the magnitude of the vector r) which can be added to the integral from negative to positive infinity of the fraction (e squared times ro as a function of the vector r prime) all over (the magnitude of the difference between the vector r and the vector r prime) d 3 vector r prime. 




Where the vector q is equal to the difference between the vector k and the vector k sub zero. 


And q is equal to the magnitude of the difference between the vectors k and k sub zero, which is equal the square root of (the difference between (the sum of k squared and k sub zero squared) and 2 k times k sub zero cosine 2 theta) which is also all equal to 2 k sin (theta)


Where f of theta is equal to the product of the negative quotient of (2 times m all over q times the square of Planck’s reduced constant) and the integral from 0 to infinity of r prime times (negative (Z e squared over the magnitude of the vector r) plus the integral from negative to positive infinity of the fraction (e squared ro of the vector r prime all over the magnitude of the difference between the vectors r and r prime d2 vector r prime) all times sin of (q times r prime) d r prime. 

The relationship between electron scattering factor and x-ray scattering factor


f of theta which is equal to m e squared all over 8 pi eta sub 0 epsilon sub 0 times  the fraction h bar squared all times lambda squared (z minus f sub x) over the squared sine of theta. 

And where epsilon sub 0 is defined to be the permittivity of vacuum


And f sub x is equal to e squared over m c squared times the integral from negative infinity to positive infinity of ro of the vector r times e to the I to the (4 sin of theta all over lamda) d 3 the vector r. 



`,
`	Large angle is correspondent to Rutherford scattering section.

F sub x equals zero 


D sigma over d omega is equal to the squared magnitude of f of theta, which is equal to the product of the ratio (lambda squared m Z e squared all over 8 pi sigma sub 0 h bar squared) and the ratio (1 over the quartic sine of theta) 


`,
`	To form diffraction patterns, we must have more than one scattering center. Considering the geometrical array of scattering centers, we have a set of vectors Big R sub j to mark the center of the atoms in the crystals. 

Now we know that the scattered electron wave in the first Born approximation is 

Phi sub s of the vector r, which is all approximately equal to negative phi sub 0 times e to the I k r over r times m over 2 pi h bar squared all times the integral of V of (the vector r prime) times e to the negative i times the vector k minus the vector k sub zero) dotted into the vector r prime) d 3 r prime. 

The diffracted wave from a group of atoms is choosing a suitable potential, V as a function of the vector r prime.

For a group of atoms we use a sum of atomic potentials, V sub at, each centered at a vector big r sub j that is an atom site.

V of the vector r is equal to the sum of the vectors Big R in the expression V sub at (of the vector r prime minus the vector big R sub j). 

Whenever , the vector r prime is equal to the vector big R sub j one the terms is V sub at of zero and the potential V of r prime has a big contribution from the atom centered at the vector big R sub j




`,
`	Now Let’s define the new coordinate the vector r which is equivalent to the difference between the vector r prime minus the vector R sub j and ignore the –dependent outgoing wave in the front of the integral since we are not concerned with the dependence of intensity of 1 divided by r squared we get:

Phi of (the vectors q and r) is approximately equal to negative m over 2 pi h bar squared times the integral of the sum of vectors big R sub j in V sub at of (the vector r prime minus the vector big R sub j) times e to the negative I vector q dot the vector r prime d 3 r prime. 

As the vector r and the vectors big R sub j are independent, we can calculate the scattering form multiple atoms

Phi of (the vectors q and r) is approximately equal to the sum of vectors big R sub j in negative m over 2 pi h bar squared times the integral of V sub at sub R sub j of the vector r times e to the negative I times the vector q dotted into the vector r d 3 the vector r all times e to the negative I times the vector q dotted into the vectors big R sub j. 


The atomic scattering factor is 


As the atom is so much smaller than typical lengths of periodic crystals, diffraction effects from the crystal occur over a much smaller range in the vector q than do effects from the shape of the atom. The effect of the vector q on the f of (the vector q, and the vector big R sub j) is often ignored. So the diffracted wave is a sum of wavelets, each of amplitude

Phi of the vector r is approximately equal to the sum of the vectors big R sub j of f of (the vector big R sub j) times e to the (negative I times the vector q dotted into the vector big R sub j). 






`,
`	e to the negative i times the vector q dotted into the vector big R sub j is not the actual outgoing wavelet, but gives the relative phase of the wavelet emitted from the atom at vector big R sub j.

The phase relationships between the individual wavelets are our major concern because they determine the constructive or destructive interferences.

To get the absolute intensity of the scattered wave at the detector,, I sub s of the vectors q and r, we must use the full prefactor and take the product of the wave function with its complex conjugate


i sub s of the vectors q and r is equal to the complex conjugate of the wave function phi sub s of (the vectors q and r) times the wave function phi sub s of (the vectors q and r) which is also equal to the product of m squared over 4 pi squared h bar squared and 1 over the squared magnitude of the difference between the vector r and the vector r prime all times the squared magnitude of the scattered wave function phi sub s of the vector q 


`,
`	In general case, the incident plane wave reaches an atom at The vector big R sub i at time t prime is given by

Phi sub zero of (the vector big r sub i and t prime) is equal to A times e to the i 2 pi times the vector k sub i dotted into the vector big R sub i minus omega t prime

The coherent scattered wave at the detector position vector r is proportional to the amplitude, A, of the incident wave times the scattering factor, f of (the vector big R sub i)

Phi sub i9 of (the vector r, the vector big R sub i, and t) is equal to f of (big R sub i) phi sub zero of (the vector big R sub i, and t prime) times A times e to the (i 2 pi the vector k sub d dotted into the difference between the vector r and the vector big R sub i) minus omega times the difference between t and t prime. 
Phi sub i of (the vector r, the vector big R sub I, and t) is equal to f of the vector big R sub I times A times e to the i 2 pi [the vector k dotted into the vector r minus the (difference between the vector k sub d and the vector k sub I) dotted into the vector big R sub i minus omega times t]

We define the scattering factor

The vector g prime is equal to the vector k sub d minus the vector k sub i

Let’s ignore the frequency, omega and time,  𝑡 since we work with only the spatial coordinates, the scattered wave by the atom, the vector big R sub I reaches the detector is simplified to 

Phi sub I of (the vector r, the vector big R sub I, and t) is equal to f of the vector big R sub I times a times e to the negative I 2 pi times [the vector g dotted into the vector big R sub I minus the vector k dotted into the vector r]. 




`,
`	The coherently scattered wavelet at detector position, vector r, from all atoms in the specimen with N atoms is therefore given by

Phi of r is equal to the sum from i equals i to I equals N of phi sub i of (the vector r, the vector big R sub I, and t) which is equal to A times the sum from i equals 1 to i equals N of f of the vector big R sub I times phi sub 0 times A times e to the negative i[the vector q dot the vector big R sub i minus the vector k dotted into the vector r]

In practice we never know the positions of electron sources and detectors to within an electron wavelength.

For elastic coherently scattered wavelets, the magnitude of the vector k is equal to the magnitude of the vector k sub zero, the relationship between the vector q and scalar q is given by


The magnitude of the vector q is equal to the magnitude of the difference between the vectors k and k sub 0 which is equal to 2 times the magnitude of k times the sine of theta which is equal to 4 pi over lambda all times sine theta. 

 the vector q is normal to the diffracting planes in comparison to Bragg conditions and

The magnitude of the vector q is equal to one over d

Bragg conditions describes the diffraction in direct lattice and Laue conditions describes the diffraction relationships in reciprocal space.

where the magnitude of the vector g is equal to 1 divided by d




`,
`	The Fourier transform of scattered wave is given at reciprocal space:

Phi of ( r ) is equal to A times the sum of m from m equals 1 to big M of the sum of j from j equals one to big J of the sum of i from i equals 1 to big I of f of (the vectors big R sub I, j, m) times e to the negative I 2 pi times [the vector g dotted into the vector big R sub I, j, m]



Phi of the vector g is equal to A times the sum of g from g equals 1 to n of the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big I of f of (the vector big R sub I, j, m)  times e to the i 2 pi [g dotted into big R sub i, j, m]

The intensity of diffracted wave in a crystal is therefore given by

Big I, equal to phi of the vector g times the complex conjugate of phi of the vector g, which is equal to A squared times the sum from g equals 1 to n of f (of the vector r) times e to the I 2 pi times the vector g dotted into the vector r all plus A squared times the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big I of f of (the vector r) times e to the I 2 pi times the vector g dotted into the vector big R



The structure amplitude F sub cell depends on the positions and type of atom inside the unit cell

The lattice amplitude depends only on the external shape of the crystal



`,
`	The structure amplitude or factor Fcell depends on the positions and type of atom inside the unit cell

F sub cell is equal to A squared times the sum from g equals 1 to n of F (of the vector r) times e to the (i 2 pi times the vector g dotted into the vector r)

The lattice amplitude/shape factor depends only on the external shape of the crystal


Big G which is equal to A squared times the sum of m from m equals 1 to big M of the sum of j from j equals 1 to big J of the sum of i from i equals 1 to big i of f (of the vector r) times e to the (i 2 pi times the vector g dotted into the vector big R) 

The structure amplitude will be of interest only for the Bragg conditions. It will not be altered by small deviations from the geometry of the Bragg conditions. 

if the vector r is equal to m times the vector a plus n times the vector b plus o times the vector c


Big F sub cell is equal to A squared times the sum from g equal to 1 to n of big F of (g) times e to the (i 2 pi times the vector g dotted into the vector r)


`,
`	For a simple cubic lattice, the Bravais lattice is described with one atom in the unit cell at r equal to the coordinates 0, 0, 0. m equals n equals o equals zero; the product of mh plus the product of nk plus the product of ol equal zero. 

Big F sub cell is equal to A squared times the sum from g equals 1 to n of big F of (g) 

Apparently the strong diffraction occurs for any integer combination h k l.

The structure amplitude or factor is the atomic scattering factor. Do not require that lattice unit cell parameters have the same length or the lattice angles in 90 degree.

The same result holds for all primitive lattice.


`,
`	The structure factor is more interesting when there is more than one atom in the basis of the unit cell. Interferences between wavelets scattered by the atoms in the basis lead to precise cancellations of the some diffractions, not allow a certain combinations of h, k, l in the diffraction pattern.

The body centered cubic (bcc) Bravais lattice can be described as a simple cubic lattice with two atoms in the unit cell at. R sub 1 equals the coordinates (0, 0, 0) and r sub 2 ewual to the coordinates (one half, one half, one half). 


Big F sub Cell is equal to A squared times big F at (0, 0, 0) plus big F at (one half, one half, one half) times e to the (negative i  2 pi all times the fraction [h plus k plus l over 2])



We find that we will have to add the values of big F at 0 and at one half if the sum of h, k, and l is even
But that we will have to subtract the values of big F at 0 and at one half if the sum of h, k, and l is odd. 

bcc structure factor rule: 

So if h plus k plus l is equal to an even, these diffraction spots are visible in diffraction pattern
if h plus k plus l is equal to an odd integer, these hkl diffraction spots are forbidden



`,
`	The structure factor is more interesting when there is more than one atom in the basis of the unit cell. Interferences between wavelets scattered by the atoms in the basis lead to precise cancellations of the some diffractions, not allow a 
certain combinations of h, k, l in the diffraction pattern.

The face centered cubic (fcc) Bravais lattice can be described as a simple cubic lattice with four atoms in the unit cell at

Point r sub 1 at coordinates (0, 0, 0), point r sub 2 at coordinates (0, one-half, one-half), point r sub 2 at coordinates (one-half, zero, one-half), and point r sub 4 at coordinates (one-half, one-half, zero).

Then big F sub cell is equal to A squared times big F of (zero, zero, zero) plus big F of (zero, one-half, one-half) times e to the (negative I 2 pi times the fraction ((k plus l) over 2)) plus the value of big F at (one-half, zero, one-half) times e to the (negative I 2 pi times the fraction ((h plus l) over 2) plus the value of big F at (one-half, one-half, zero) times e to the (negative i 2 pi times the fraction ((h+k) over 2)) 


We add values of big F, that is big F at (zero, zero, zero) PLUS 3 times F at (zero, one-half, one-half) if h k l are all even or odd, 
But subtract values of big F, so big F at (zero, zero, zero) MINUS 3 times the value of big F at (zero, one-half, one-half) if h k l are all odd and even. 

fcc structure factor rule: 

All hkl are even or odd, i.e. 200, 111, these diffraction spots are visible in diffraction pattern

hkl are even and odd integers, i.e. 123, these hkl diffraction spots are forbidden



`,
`	The unit cell consists of two or more sublattices can be described as one sublattice with a shifted sublattice.

For example, NaCl, the unit cell is two Na and Cl fcc sublattices that are shifted by one half of the body diagonal (½, ½, ½) of the unit cell.

This shift can be considered by introducing a common phase factor for the Cl sublattice

F sub cell is equal to A squared [f sub sodium plus f sub chlorine times e to the ( negative I pi times (h plus k plus l)] times [one plus e to the (negative i times 2 times pi times the fraction (k plus l) over (2) ) plus e to the (negative I times 2  pi times the fraction ((h plus l) over 2) plus e to the (negative I times 2  pi times the fraction ((h plus k) over 2

The structure factor rule for NaCl crystal diffraction is 


Big F sub cell is equal to 4 times (f sub sodium plus f sub chlorine) if h, k, and l are all even 
	is equal to 2 times (f sub sodium minus f sub chlorine) if h, k, l are all odd
	and 0 if h, k, l are mixed. 

Similar calculation can be applied to other crystal structures`
]

var section2SpeakerNotes = [
    ch8SpeakerNotes,
    s2ch2notes,
    [],
    s2ch4notes
]