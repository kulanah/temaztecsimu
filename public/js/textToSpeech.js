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
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
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
    "To keep a dry rough pump in good working order, regular inspection and maintenance should be preformed. Always consult the manuals provided with your pump, as what follows is only a general guide intended to give you an idea of the process, rather than exact instructions."
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
    "Oil diffusion pumps offer maximum pump rates of 1000 liters per second (1 cubic meter per second), and can not operate above 10E-2 Torr, in order to ensure that the oil is not vaporized. "
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
    "The Pirani gauge is usually the first kind used, because it operates accurately between around 10 - 10E-2 Pa, in rough vacuum. "
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
    "A Penning gauge, which you will also hear called a “cold cathode” gauge can be used to measure medium and high vacuum, between 1 - 1E-7 Pa. It does this by creating a flow of ions between between electrodes within a chamber open to the vacuum, and using the ion current from cathode to anode as a measure of pressure."
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
    "There are no speaker notes on this slide."
    ,
    "There are no speaker notes on this slide."
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
/*[
    "",
    "Ideal vacuum is a chamber or container completely devoid of matter like gas molecules. But this will never happen. Generally speaking, vacuum refers to a chamber or container with less than 1 atmosphere (atm) of pressure. The measurement of vacuum is thus taken using pressure inside the chamber or container. We know that atmospheric pressure is about 10,325 Pascal, 10"
    + "-3 mill bar, or 760 torr. There are many units that are used to specify pressures, with The Torr, the Bar and the Pascal being common.. .. but the Pascal is the SI recommended unit for pressure and so is the best choice for documentation. The torr (symbol: Torr) is a unit of pressure based on an absolute scale, now defined as exactly 1/760 of a standard atmosphere. Thus one torr is exactly 101325/760 pascals (≈ 133.3 Pa). The bar is a metric unit of pressure, but is not approved as part of the International System of Units (SI). It is defined as exactly equal to 100,000 Pa. Practically, vacuum is classified into three categories: low, high, and ultrahigh vacuum. When the pressure reaches less than 10-2 Torr and higher than 10-6 Torr, it is low vacuum, while high vacuum refers to the pressure between 10-6 to 10-8 Torr. When the pressure is less than 10-8 Torr, it refers to ultrahigh vacuum.",
    "Per our discussions on the electron sources and optics,  TEM cannot operate in air for a number of reasons. Specifically, barely any electrons can be emitted without vacuum because of the filament materials would be oxidized in the air. Poor vacuum will significant reduce the file of the electron source. Without vacuum, electron beam cannot travel through the column because of the strong interaction between electrons and gas molecules in the air, which would result in arching, inelastic scattering by gas molecules, gas ionization, intensity or probe current reduction. Without vacuum or with poor vacuum, the thin TEM specimen could easily be contaminated and oxidized. Thus, high vacuum at a magnitude of 10-6 torr or higher is required for a TEM column or thermionic gun. Ultrahigh vacuum at a magnitude of 10-9 or higher is required for FEG gun. How can we generate high or ultrahigh vacuum in a TEM system?",
    "The most basic vacuum system consists of a vessel connected to a pump that removes the air. The vacuum system in a TEM is considerably more complicated, containing a number of vessels, pumps, valves (to separate different vessels) and gauges (to measure vacuum pressures). From the bottom up we can distinguish four vessels in the vacuum system: ",
    "Apparently A TEM is not pumped by single pump, because there is no pump available that handle the full range in vacuum from air pressure (as present after a vessel has been vented) to ultra-high vacuum (in specimen are or gun). The microscope can in essence be divided in two parts, separated by a very small aperture (200 micrometers), the differential pumping aperture, located between the projection chamber and the column. The lower part basically consists of the projection chamber where we observe the image and where plate camera and TV cameras are located. This is pumped by an oil-diffusion pump. Behind the oildiffusion pump is a rotary pump (the oil-diffusion pump cannot go from vacuum to air, it needs some other pump to back it up). Since the rotary (or pre-vacuum) pump is noisy, it is not running continuously but only when needed. In order to have continuous backing of the diffusion, there is a buffer tank in between them. The buffer tank is slowly filled by the oil-diffusion pump. When its pressure is becoming high, it is emptied by the rotary pump. The upper part consists of the specimen and gun areas which are pumped by one or more ion-getter pumps. These pumps use no oil and are therefore clean. They also achieve higher vacuum than the oildiffusion pump. The number of ion-getter pumps may range from one to four. Initial pumping of the column and gun on many systems is done by the rotary and oil-diffusion pumps, except for systems equipped with a turbo-molecular pump. In the latter case the oil-diffusion and rotary pumps never pump on the column and gun areas.",
    "",
    "",
    "When selecting a vacuum pump, the application is key – you should ask things like, “what pressures do I need?”, “how fast do I need my pumping/venting cycles to be?”, “what gases will I need to pump?”, “how clean does my vacuum need to be?” and (of course) “what is an appropriate price-point?”.",
    "In TEM, a dry diaphragm vacuum pump is used for rough pumping to reduce contamination. Diaphragm vacuum pumps are dry positive-displacement pumps. A crankshaft-driven connecting rod moves the diaphragm that is tensioned between the head cover and the housing. The space between the head cover and the diaphragm forms the suction chamber. Diaphragm pumps require inlet valves and outlet valves to achieve targeted gas displacement. Pressure-controlled shutter valves made of elastomer materials are used as valves. Since the suction chamber is hermetically sealed off from the drive by the diaphragm, the pump medium can neither be contaminated by oil nor can aggressive media corrode the mechanics. The dead volume between the outlet valve and the suction chamber results in a restricted compression ratio which means that with just one pumping stage it is only possible to achieve an ultimate pressure of approximately 52.5 Torr. Connecting multiple pumping stages in series makes it possible to attain an ultimate pressure of 0.38 Torr. Lower pressures cannot be achieved, as in this case there is no longer sufficient force to open the inlet valve. The principle of the diaphragm pump is particularly well suited for low pumping speeds of up to approximately 10 m",
    "In TEM, a dry diaphragm vacuum pump is used for rough pumping to reduce contamination. Diaphragm vacuum pumps are dry positive-displacement pumps. A crankshaft-driven connecting rod moves the diaphragm that is tensioned between the head cover and the housing. The space between the head cover and the diaphragm forms the suction chamber. Diaphragm pumps require inlet valves and outlet valves to achieve targeted gas displacement. Pressure-controlled shutter valves made of elastomer materials are used as valves. Since the suction chamber is hermetically sealed off from the drive by the diaphragm, the pump medium can neither be contaminated by oil nor can aggressive media corrode the mechanics. The dead volume between the outlet valve and the suction chamber results in a restricted compression ratio which means that with just one pumping stage it is only possible to achieve an ultimate pressure of approximately 52.5 Torr. Connecting multiple pumping stages in series makes it possible to attain an ultimate pressure of 0.38 Torr. Lower pressures cannot be achieved, as in this case there is no longer sufficient force to open the inlet valve. The principle of the diaphragm pump is particularly well suited for low pumping speeds of up to approximately 10 m",
    "The scroll pump uses two scrolls that do not rotate, but where the inner one orbits and traps a volume of gas and compresses it in an ever decreasing volume; compressing it until it reaches a minimum volume and maximum pressure at the spirals’ center, where the outlet is located. A spiral polymer (PTFE) tip seal provides axial sealing between the two scrolls without the use of a lubricant in the swept gas stream. A typical ultimate pressure of 1 x 10-2 mbar can be achieved. It has a pumping speed range of 5.0 to 46 m3/h (3.0 to 27 ft3/min).",
    "To keep a dry rough pump in good working order, regular inspection and maintenance should be performed. Always consult the manuals provided with your pump, as what follows is only a general guide intended to give you an idea of the process, rather than exact instructions.",
    "Here are some basic trouble-shooting procedures for common faults found in dry scroll pumps. Remember to always consult the manual for your specific pump, as these are only general guidelines. \u000b\u000bIf a pump fails to start, you should first ensure that it is connected to a proper power supply. Ensure all connections are snug, and inspect fuses and breakers. If you believe the pump is connected properly, ensure that the supplied voltage matches the voltage the motor was configured for. If this is correct, it is possible that your motor is faulty, or that the pump has begun to overheat and shut down to prevent this. \u000b\u000bIf your pump starts, but suffers from poor performance, you should check for air leaks, vacuum gauge reading errors, dirty or damaged vacuum fittings, a blocked inlet strainer, or a blocked exhaust line. If these are all satisfactory, you may have trace vapors lingering in your pump, or you may be trying to operate outside the pump’s specifications. Ensure that your gas-ballast control is properly closed, and that your tip seals are in good condition. Additionally, ensure the supplied voltage is adequate – if it is close enough to get your pump to start, but is more than 10% less than the specified minimum voltage, your pump will suffer from poor performance. \u000b\u000b",
    "If your pump is noisy, your bearings may be wearing out, or you may have solid particles contaminating your pump. Either of these issues should be addressed quickly to avoid further damage to your pump.",
    "\n",
    "\n",
    "Oil diffusion pumps offer maximum pump rates of 1000 liters per second (1 cubic meter per second), and can not operate above 10E-2 Torr, in order to ensure that the oil is not vaporized. ",
    "Here is a quick troubleshooting guide for basic problems with oil diffusion pumps -- remember to consult your own manual should you ever need to do so. ",
    "Turbomolecular pumps (or TMPs) use blades rotating at high speeds to transfer energy to gas molecules. \u000b\u000bThe rotor stacks deflect the molecules through the pump during their rotation using specially angled blades, which drive the molecules towards the exhaust. \u000b\u000bThis rotation can occur at non-trivial speeds, between 20 and 60,000 RPM, and will move 50 - 500 L of gas per second. ",
    "Turbomolecular pumps (or TMPs) use blades rotating at high speeds to transfer energy to gas molecules. \u000b\u000bThe rotor stacks deflect the molecules through the pump during their rotation using specially angled blades, which drive the molecules towards the exhaust. \u000b\u000bThis rotation can occur at non-trivial speeds, between 20 and 60,000 RPM, and will move 50 - 500 L of gas per second. ",
    "\u000bThe need for a backing pump is brought about by the fact that the TMP blades could catastrophically fail if exposed to low vacuum when operating at full speed. The pump will begin to spin down as soon as the pressure increase is detected, but the spin-down times for TMPs are anywhere between several to tens of minutes, so it may not occur in time to prevent blade or motor damage. \u000b\u000bIf you notice abnormal noises or vibrations from your TMP, you should stop operation immediately and consult your manufacturer's documentation, as there may be bearing problems that could result in damage to the pump. \u000b\u000bIf your pump only spins up to 20 - 30 percent of its maximum speed, inspect the hoses and chamber gaskets for leaks and debris, or signs of aging. ",
    "Here’s a reference for TMP troubleshooting, but, again, consult the documentation for your specific pump. ",
    "The IGP was used in almost every single vacuum application in high vacuum pressure ranges of up to <10",
    "Ion getter pumps use a four-step process to remove gases from the vacuum chamber.",
    "Ion getter pumps use a four-step process to remove gases from the vacuum chamber.",
    "IGP’s alone are not enough to keep the vacuum in the TEM optimally clean, however, since water and other contaminants are still introduced into the column during every specimen exchange despite our best efforts to prevent this. By placing a plate of liquid-nitrogen cooled metal in the space around the specimen, we create a surface on which any stray gases or vapors degrading our vacuum may condense and stick until the plate is warmed. Of course this means contaminants have to be in the space immediately around the cold trap to be captured by it, but it is primarily intended to capture those that come in with our specimen holder, and its shape and position in the specimen area make it quite effective. ",
    "\n",
    "And, even once you have clean, stable vacuum, you must still have a way to accurately measure it so that you can verify and monitor it. To do this, you need vacuum gauges, but just like we saw with vacuum pumps, there is no one gauge that can give accurate measurements from atmospheric pressure to UHV -- we again need to rely on a series of devices, in this case, gauges. ",
    "A Penning gauge, which you will also hear called a “cold cathode” gauge can be used to measure medium and high vacuum, between 1 - 1E-7 Pa. It does this by creating a flow of ions between between electrodes within a chamber open to the vacuum, and using the ion current from cathode to anode as a measure of pressure.",
    "",
    "",
    "Typical contaminants of vacuum systems include ",
    "Since we can expect to encounter air-locks on every TEM, is is worthwhile to discuss how to load and remove specimens into and out of a TEM! \u000b\u000bAfter loading the specimen into the holder, and ensuring that the specimen is firmly secured, take time to examine the holder’s o-ring and mating surfaces, which need to clean and in good condition to allow proper sealing to take place. \u000b\u000bMake sure that the column valve is closed, so that if anything does go wrong, the gun will be safe. \u000b\u000bTurn on the TMP through the control software, and allow it to start pre-pumping the liner tubes. \u000b\u000bUse the small pin near the end of the holder to align the rod with the markings on the Compustage goniometer. For our microscope, this occurs around the 5 o’clock position. \u000b\u000bAfter insertion, the TMP will pump the specimen, holder, and airlock down close to column vacuum levels, at which point you can complete the insertion by turning the older anti-clockwise to open the ball-valve in the airlock, and allowing the holder to be slowly pushed into the airlock. The column pressure will increase, and fluctuate as it is pumped back down -- only open the column valve once safe and stable pressures have been reached. ",
]*/

let speakerNotes = [
    [],
    [],
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
        window.speechSynthesis.resume();
    } else {
        let slide = document.getElementById('slidenumber').value;
        speak(speakerNotes[currentCh - 1][slide - 1]);
        console.log("Saying:", speakerNotes[currentCh - 1][slide - 1])
    }
});

$('#speakernotespause').on('click', function(){
    window.speechSynthesis.pause();
});

$('#speakernotesstop').on('click', function(){
    window.speechSynthesis.cancel();
});