/* destinations.js — DATA embedded from destinations.xml so the site runs
   directly from a file (file://). Parsed by app.js with DOMParser.
   Must begin with <?xml (no leading blank line). */
const DESTINATIONS_XML = `<?xml version="1.0" encoding="UTF-8"?>
<interstellarAgency>
    <destinations>
        <destination id="BLK-01">
            <name>Gargantua</name>
            <category>Black Holes</category>
            <description>A rapidly spinning supermassive black hole with a glowing accretion disk.</description>
            <lightYearsFromEarth>10000</lightYearsFromEarth>
            <requiredShip>Endurance-Class Explorer</requiredShip>
            <cost>2000000</cost>
            <imagePath>assets/images/blk01.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>185</reviews>
        </destination>
        <destination id="BLK-02">
            <name>Cygnus X-1</name>
            <category>Black Holes</category>
            <description>A galactic X-ray source and one of the first proven black holes.</description>
            <lightYearsFromEarth>6070</lightYearsFromEarth>
            <requiredShip>Heavy Cruiser</requiredShip>
            <cost>1600000</cost>
            <imagePath>assets/images/blk02.jpg</imagePath>
            <rating>5.0</rating>
            <reviews>742</reviews>
        </destination>
        <destination id="BLK-03">
            <name>Sagittarius A*</name>
            <category>Black Holes</category>
            <description>The supermassive black hole at the very center of the Milky Way galaxy.</description>
            <lightYearsFromEarth>26000</lightYearsFromEarth>
            <requiredShip>Event Horizon Diver</requiredShip>
            <cost>3000000</cost>
            <imagePath>assets/images/blk03.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>562</reviews>
        </destination>
        <destination id="BLK-04">
            <name>TON 618</name>
            <category>Black Holes</category>
            <description>An ultramassive black hole, one of the largest known in the universe.</description>
            <lightYearsFromEarth>18200000</lightYearsFromEarth>
            <requiredShip>Deep Void Dreadnought</requiredShip>
            <cost>10000000</cost>
            <imagePath>assets/images/blk04.jpg</imagePath>
            <rating>3.9</rating>
            <reviews>491</reviews>
        </destination>
        <destination id="BLK-05">
            <name>V616 Monocerotis</name>
            <category>Black Holes</category>
            <description>One of the closest known black holes to our solar system.</description>
            <lightYearsFromEarth>3300</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>1000000</cost>
            <imagePath>assets/images/blk05.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>814</reviews>
        </destination>
        <destination id="BLK-06">
            <name>M87*</name>
            <category>Black Holes</category>
            <description>The first black hole ever directly imaged by humanity.</description>
            <lightYearsFromEarth>53000000</lightYearsFromEarth>
            <requiredShip>Hyper-Relay Cruiser</requiredShip>
            <cost>8000000</cost>
            <imagePath>assets/images/blk06.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>932</reviews>
        </destination>
        <destination id="BLK-07">
            <name>The Black Hole</name>
            <category>Black Holes</category>
            <description>A mysterious anomaly surrounded by intense gravitational waves.</description>
            <lightYearsFromEarth>42000</lightYearsFromEarth>
            <requiredShip>Palomino Probe</requiredShip>
            <cost>2400000</cost>
            <imagePath>assets/images/blk07.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>338</reviews>
        </destination>
        <destination id="BLK-08">
            <name>Cygnus A</name>
            <category>Black Holes</category>
            <description>A supermassive black hole fueling an incredibly bright radio galaxy.</description>
            <lightYearsFromEarth>600000000</lightYearsFromEarth>
            <requiredShip>Deep Void Dreadnought</requiredShip>
            <cost>16000000</cost>
            <imagePath>assets/images/blk08.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>353</reviews>
        </destination>
        <destination id="BLK-09">
            <name>Great Attractor</name>
            <category>Black Holes</category>
            <description>A massive gravitational anomaly drawing in millions of galaxies.</description>
            <lightYearsFromEarth>250000000</lightYearsFromEarth>
            <requiredShip>Fleet Carrier</requiredShip>
            <cost>20000000</cost>
            <imagePath>assets/images/blk09.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>378</reviews>
        </destination>
        <destination id="BLK-10">
            <name>Apex Black Hole</name>
            <category>Black Holes</category>
            <description>A highly unstable singularity near the edge of the known universe.</description>
            <lightYearsFromEarth>1000000000</lightYearsFromEarth>
            <requiredShip>Experimental Warp Ship</requiredShip>
            <cost>30000000</cost>
            <imagePath>assets/images/blk10.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>514</reviews>
        </destination>
        <destination id="BLK-11">
            <name>Void-9</name>
            <category>Black Holes</category>
            <description>A pitch-black region of space hiding a dormant singularity.</description>
            <lightYearsFromEarth>75000</lightYearsFromEarth>
            <requiredShip>Stealth Frigate</requiredShip>
            <cost>1800000</cost>
            <imagePath>assets/images/blk11.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>43</reviews>
        </destination>
        <destination id="BLK-12">
            <name>Singularity-X</name>
            <category>Black Holes</category>
            <description>A theoretical black hole emitting strange temporal distortions.</description>
            <lightYearsFromEarth>120000</lightYearsFromEarth>
            <requiredShip>Quantum Skiff</requiredShip>
            <cost>5000000</cost>
            <imagePath>assets/images/blk12.jpg</imagePath>
            <rating>3.9</rating>
            <reviews>596</reviews>
        </destination>
        <destination id="BLK-13">
            <name>PSR J1614-2230</name>
            <category>Black Holes</category>
            <description>A massive neutron star on the verge of collapsing into a black hole.</description>
            <lightYearsFromEarth>3000</lightYearsFromEarth>
            <requiredShip>Shielded Corvette</requiredShip>
            <cost>1200000</cost>
            <imagePath>assets/images/blk13.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>263</reviews>
        </destination>
        <destination id="BLK-14">
            <name>GS 2023+338</name>
            <category>Black Holes</category>
            <description>A well-known binary black hole system.</description>
            <lightYearsFromEarth>8000</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>1500000</cost>
            <imagePath>assets/images/blk14.jpg</imagePath>
            <rating>3.9</rating>
            <reviews>316</reviews>
        </destination>
        <destination id="BLK-15">
            <name>Perseus Cluster BH</name>
            <category>Black Holes</category>
            <description>Famous for emitting acoustic waves that create a cosmic B-flat note.</description>
            <lightYearsFromEarth>250000000</lightYearsFromEarth>
            <requiredShip>Acoustic Dampened Cruiser</requiredShip>
            <cost>13000000</cost>
            <imagePath>assets/images/blk15.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>319</reviews>
        </destination>
        <destination id="HAB-01">
            <name>Pandora</name>
            <category>Habitable Planets</category>
            <description>A lush, biologically diverse moon orbiting a gas giant, rich in floating mountains.</description>
            <lightYearsFromEarth>4.37</lightYearsFromEarth>
            <requiredShip>Avatar-Class Transporter</requiredShip>
            <cost>600000</cost>
            <imagePath>assets/images/hab01.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>855</reviews>
        </destination>
        <destination id="HAB-02">
            <name>Miller's Planet</name>
            <category>Habitable Planets</category>
            <description>A water-world orbiting dangerously close to a supermassive black hole.</description>
            <lightYearsFromEarth>10000</lightYearsFromEarth>
            <requiredShip>Endurance-Class Explorer</requiredShip>
            <cost>1200000</cost>
            <imagePath>assets/images/hab02.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>814</reviews>
        </destination>
        <destination id="HAB-03">
            <name>Tatooine</name>
            <category>Habitable Planets</category>
            <description>A harsh desert world orbiting twin suns, home to moisture farmers.</description>
            <lightYearsFromEarth>43000</lightYearsFromEarth>
            <requiredShip>Light Freighter</requiredShip>
            <cost>300000</cost>
            <imagePath>assets/images/hab03.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>784</reviews>
        </destination>
        <destination id="HAB-04">
            <name>Mann’s Planet</name>
            <category>Habitable Planets</category>
            <description>An icy, treacherous world with frozen clouds and ammonia atmosphere.</description>
            <lightYearsFromEarth>10000</lightYearsFromEarth>
            <requiredShip>Endurance-Class Explorer</requiredShip>
            <cost>1000000</cost>
            <imagePath>assets/images/hab04.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>315</reviews>
        </destination>
        <destination id="HAB-05">
            <name>Edmunds’ Planet</name>
            <category>Habitable Planets</category>
            <description>A promising desert world with breathable air and a stable ecosystem.</description>
            <lightYearsFromEarth>10000</lightYearsFromEarth>
            <requiredShip>Endurance-Class Explorer</requiredShip>
            <cost>1500000</cost>
            <imagePath>assets/images/hab05.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>514</reviews>
        </destination>
        <destination id="HAB-06">
            <name>Arrakis</name>
            <category>Habitable Planets</category>
            <description>A dangerous desert planet and the only known source of the spice melange.</description>
            <lightYearsFromEarth>12000</lightYearsFromEarth>
            <requiredShip>Spice Freighter</requiredShip>
            <cost>4000000</cost>
            <imagePath>assets/images/hab06.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>414</reviews>
        </destination>
        <destination id="HAB-07">
            <name>Proxima Centauri b</name>
            <category>Habitable Planets</category>
            <description>An Earth-sized exoplanet orbiting the closest star to the solar system.</description>
            <lightYearsFromEarth>4.24</lightYearsFromEarth>
            <requiredShip>Colony Ship</requiredShip>
            <cost>100000</cost>
            <imagePath>assets/images/hab07.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>898</reviews>
        </destination>
        <destination id="HAB-08">
            <name>Kepler-186f</name>
            <category>Habitable Planets</category>
            <description>The first Earth-sized planet found in the habitable zone of another star.</description>
            <lightYearsFromEarth>582</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>240000</cost>
            <imagePath>assets/images/hab08.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>208</reviews>
        </destination>
        <destination id="HAB-09">
            <name>TRAPPIST-1e</name>
            <category>Habitable Planets</category>
            <description>A potentially habitable rocky planet in a highly compact planetary system.</description>
            <lightYearsFromEarth>39</lightYearsFromEarth>
            <requiredShip>System Jumper</requiredShip>
            <cost>160000</cost>
            <imagePath>assets/images/hab09.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>562</reviews>
        </destination>
        <destination id="HAB-10">
            <name>LV-426</name>
            <category>Habitable Planets</category>
            <description>A dark, stormy terraformed moon with a history of hostile encounters.</description>
            <lightYearsFromEarth>39</lightYearsFromEarth>
            <requiredShip>Colonial Drop Ship</requiredShip>
            <cost>200000</cost>
            <imagePath>assets/images/hab10.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>617</reviews>
        </destination>
        <destination id="HAB-11">
            <name>Naboo</name>
            <category>Habitable Planets</category>
            <description>A beautiful, peaceful world with sprawling plains and underwater cities.</description>
            <lightYearsFromEarth>34000</lightYearsFromEarth>
            <requiredShip>Royal Cruiser</requiredShip>
            <cost>700000</cost>
            <imagePath>assets/images/hab11.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>829</reviews>
        </destination>
        <destination id="HAB-12">
            <name>Magrathea</name>
            <category>Habitable Planets</category>
            <description>A legendary planet known for its custom planet-building industry.</description>
            <lightYearsFromEarth>200000</lightYearsFromEarth>
            <requiredShip>Heart of Gold</requiredShip>
            <cost>10000000</cost>
            <imagePath>assets/images/hab12.jpg</imagePath>
            <rating>5.0</rating>
            <reviews>462</reviews>
        </destination>
        <destination id="HAB-13">
            <name>Reach</name>
            <category>Habitable Planets</category>
            <description>A major military stronghold planet with a diverse, Earth-like climate.</description>
            <lightYearsFromEarth>10.5</lightYearsFromEarth>
            <requiredShip>UNSC Frigate</requiredShip>
            <cost>500000</cost>
            <imagePath>assets/images/hab13.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>334</reviews>
        </destination>
        <destination id="HAB-14">
            <name>Gliese 581g</name>
            <category>Habitable Planets</category>
            <description>A highly debated exoplanet thought to sit perfectly in its star's habitable zone.</description>
            <lightYearsFromEarth>20</lightYearsFromEarth>
            <requiredShip>Light Courier</requiredShip>
            <cost>130000</cost>
            <imagePath>assets/images/hab14.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>308</reviews>
        </destination>
        <destination id="HAB-15">
            <name>Zion</name>
            <category>Habitable Planets</category>
            <description>A hidden, subterranean bastion of human civilization.</description>
            <lightYearsFromEarth>0</lightYearsFromEarth>
            <requiredShip>Hovercraft</requiredShip>
            <cost>20000</cost>
            <imagePath>assets/images/hab15.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>890</reviews>
        </destination>
        <destination id="NHP-01">
            <name>Ego the Living Planet</name>
            <category>Non-Habitable Planets</category>
            <description>A sentient, celestial entity manifesting as an entire planetary mass.</description>
            <lightYearsFromEarth>150000</lightYearsFromEarth>
            <requiredShip>Celestial Skiff</requiredShip>
            <cost>1600000</cost>
            <imagePath>assets/images/nhp01.jpg</imagePath>
            <rating>5.0</rating>
            <reviews>637</reviews>
        </destination>
        <destination id="NHP-02">
            <name>Hoth</name>
            <category>Non-Habitable Planets</category>
            <description>A desolate world covered in snow and ice, entirely hostile to unprotected life.</description>
            <lightYearsFromEarth>50000</lightYearsFromEarth>
            <requiredShip>Thermal Frigate</requiredShip>
            <cost>400000</cost>
            <imagePath>assets/images/nhp02.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>534</reviews>
        </destination>
        <destination id="NHP-03">
            <name>Coruscant</name>
            <category>Non-Habitable Planets</category>
            <description>An ecumenopolis completely covered by urban sprawl.</description>
            <lightYearsFromEarth>10000</lightYearsFromEarth>
            <requiredShip>Diplomatic Cruiser</requiredShip>
            <cost>800000</cost>
            <imagePath>assets/images/nhp03.jpg</imagePath>
            <rating>4.0</rating>
            <reviews>288</reviews>
        </destination>
        <destination id="NHP-04">
            <name>Dagobah</name>
            <category>Non-Habitable Planets</category>
            <description>A swamp-covered planet with massive biological diversity but highly toxic areas.</description>
            <lightYearsFromEarth>50000</lightYearsFromEarth>
            <requiredShip>X-Wing Fighter</requiredShip>
            <cost>150000</cost>
            <imagePath>assets/images/nhp04.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>131</reviews>
        </destination>
        <destination id="NHP-05">
            <name>Geonosis</name>
            <category>Non-Habitable Planets</category>
            <description>A rocky, barren desert world featuring massive droid foundries.</description>
            <lightYearsFromEarth>43000</lightYearsFromEarth>
            <requiredShip>Heavy Transport</requiredShip>
            <cost>360000</cost>
            <imagePath>assets/images/nhp05.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>144</reviews>
        </destination>
        <destination id="NHP-06">
            <name>Utapau</name>
            <category>Non-Habitable Planets</category>
            <description>A sinkhole-riddled planet composed mostly of porous rock and deep caverns.</description>
            <lightYearsFromEarth>51000</lightYearsFromEarth>
            <requiredShip>Vertical Descent Craft</requiredShip>
            <cost>440000</cost>
            <imagePath>assets/images/nhp06.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>198</reviews>
        </destination>
        <destination id="NHP-07">
            <name>Alderaan (Remains)</name>
            <category>Non-Habitable Planets</category>
            <description>An asteroid field that was once a peaceful, mountainous world.</description>
            <lightYearsFromEarth>50000</lightYearsFromEarth>
            <requiredShip>Scavenger Frigate</requiredShip>
            <cost>100000</cost>
            <imagePath>assets/images/nhp07.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>378</reviews>
        </destination>
        <destination id="NHP-08">
            <name>Krypton (Remains)</name>
            <category>Non-Habitable Planets</category>
            <description>A highly radioactive debris field of a former advanced civilization.</description>
            <lightYearsFromEarth>27</lightYearsFromEarth>
            <requiredShip>Lead-Shielded Probe</requiredShip>
            <cost>800000</cost>
            <imagePath>assets/images/nhp08.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>636</reviews>
        </destination>
        <destination id="NHP-09">
            <name>Apokolips</name>
            <category>Non-Habitable Planets</category>
            <description>A dark, fiery ecumenopolis dominated by massive fire pits.</description>
            <lightYearsFromEarth>500000</lightYearsFromEarth>
            <requiredShip>Armored Dreadnought</requiredShip>
            <cost>10000000</cost>
            <imagePath>assets/images/nhp09.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>783</reviews>
        </destination>
        <destination id="NHP-10">
            <name>Mesklin</name>
            <category>Non-Habitable Planets</category>
            <description>A massive, disc-shaped planet with bone-crushing gravity at its poles.</description>
            <lightYearsFromEarth>150</lightYearsFromEarth>
            <requiredShip>High-G Resistant Lander</requiredShip>
            <cost>700000</cost>
            <imagePath>assets/images/nhp10.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>675</reviews>
        </destination>
        <destination id="NHP-11">
            <name>Solaris</name>
            <category>Non-Habitable Planets</category>
            <description>A world completely covered by a mysterious, seemingly sentient ocean.</description>
            <lightYearsFromEarth>400</lightYearsFromEarth>
            <requiredShip>Orbital Research Station</requiredShip>
            <cost>560000</cost>
            <imagePath>assets/images/nhp11.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>589</reviews>
        </destination>
        <destination id="NHP-12">
            <name>Mongo</name>
            <category>Non-Habitable Planets</category>
            <description>A rogue planet with a highly volatile atmosphere and environment.</description>
            <lightYearsFromEarth>80000</lightYearsFromEarth>
            <requiredShip>Rocket Cruiser</requiredShip>
            <cost>380000</cost>
            <imagePath>assets/images/nhp12.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>230</reviews>
        </destination>
        <destination id="NHP-13">
            <name>Bizarro World</name>
            <category>Non-Habitable Planets</category>
            <description>A cube-shaped planet where physics behave inversely.</description>
            <lightYearsFromEarth>100000</lightYearsFromEarth>
            <requiredShip>Non-Euclidean Drive Ship</requiredShip>
            <cost>1600000</cost>
            <imagePath>assets/images/nhp13.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>165</reviews>
        </destination>
        <destination id="NHP-14">
            <name>Vulcan (Destroyed)</name>
            <category>Non-Habitable Planets</category>
            <description>A former red, arid planet, now a micro-singularity hazard zone.</description>
            <lightYearsFromEarth>16</lightYearsFromEarth>
            <requiredShip>Hazard Avoidance Skiff</requiredShip>
            <cost>240000</cost>
            <imagePath>assets/images/nhp14.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>753</reviews>
        </destination>
        <destination id="NHP-15">
            <name>Phaëton</name>
            <category>Non-Habitable Planets</category>
            <description>A theoretical destroyed planet between Mars and Jupiter.</description>
            <lightYearsFromEarth>0.0001</lightYearsFromEarth>
            <requiredShip>Asteroid Hopper</requiredShip>
            <cost>30000</cost>
            <imagePath>assets/images/nhp15.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>786</reviews>
        </destination>
        <destination id="SAT-01">
            <name>Titan</name>
            <category>Natural Satellites</category>
            <description>Saturn's largest moon, featuring a dense atmosphere and liquid methane lakes.</description>
            <lightYearsFromEarth>0.0001</lightYearsFromEarth>
            <requiredShip>Solar System Shuttle</requiredShip>
            <cost>10000</cost>
            <imagePath>assets/images/sat01.jpg</imagePath>
            <rating>5.0</rating>
            <reviews>281</reviews>
        </destination>
        <destination id="SAT-02">
            <name>Pluto</name>
            <category>Natural Satellites</category>
            <description>A distant, icy dwarf planet on the very edge of our solar system.</description>
            <lightYearsFromEarth>0.0005</lightYearsFromEarth>
            <requiredShip>Deep Space Probe</requiredShip>
            <cost>16000</cost>
            <imagePath>assets/images/sat02.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>75</reviews>
        </destination>
        <destination id="SAT-03">
            <name>Europa</name>
            <category>Natural Satellites</category>
            <description>Jupiter's moon, hiding a massive liquid water ocean beneath its icy crust.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Icebreaker Sub-Shuttle</requiredShip>
            <cost>13000</cost>
            <imagePath>assets/images/sat03.jpg</imagePath>
            <rating>5.0</rating>
            <reviews>90</reviews>
        </destination>
        <destination id="SAT-04">
            <name>Thebe</name>
            <category>Natural Satellites</category>
            <description>A small, red, irregularly shaped inner moon of Jupiter.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Light System Craft</requiredShip>
            <cost>8000</cost>
            <imagePath>assets/images/sat04.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>582</reviews>
        </destination>
        <destination id="SAT-05">
            <name>Metis</name>
            <category>Natural Satellites</category>
            <description>Jupiter's innermost moon, orbiting within the planet's faint main ring.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Ring Navigator</requiredShip>
            <cost>9000</cost>
            <imagePath>assets/images/sat05.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>754</reviews>
        </destination>
        <destination id="SAT-06">
            <name>Io</name>
            <category>Natural Satellites</category>
            <description>The most volcanically active body in the solar system, orbiting Jupiter.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Magma-Shielded Lander</requiredShip>
            <cost>18000</cost>
            <imagePath>assets/images/sat06.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>348</reviews>
        </destination>
        <destination id="SAT-07">
            <name>Ganymede</name>
            <category>Natural Satellites</category>
            <description>The largest moon in the solar system, complete with its own magnetic field.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Standard Cruiser</requiredShip>
            <cost>11000</cost>
            <imagePath>assets/images/sat07.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>162</reviews>
        </destination>
        <destination id="SAT-08">
            <name>Callisto</name>
            <category>Natural Satellites</category>
            <description>Jupiter's heavily cratered moon, holding the record for most impact scars.</description>
            <lightYearsFromEarth>0.00007</lightYearsFromEarth>
            <requiredShip>Standard Cruiser</requiredShip>
            <cost>11000</cost>
            <imagePath>assets/images/sat08.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>372</reviews>
        </destination>
        <destination id="SAT-09">
            <name>Enceladus</name>
            <category>Natural Satellites</category>
            <description>A tiny, icy moon of Saturn famous for its massive water geysers.</description>
            <lightYearsFromEarth>0.0001</lightYearsFromEarth>
            <requiredShip>Cryo-Skiff</requiredShip>
            <cost>14000</cost>
            <imagePath>assets/images/sat09.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>142</reviews>
        </destination>
        <destination id="SAT-10">
            <name>Triton</name>
            <category>Natural Satellites</category>
            <description>Neptune's largest moon, featuring a retrograde orbit and ice volcanoes.</description>
            <lightYearsFromEarth>0.0004</lightYearsFromEarth>
            <requiredShip>Deep System Explorer</requiredShip>
            <cost>19000</cost>
            <imagePath>assets/images/sat10.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>891</reviews>
        </destination>
        <destination id="SAT-11">
            <name>Charon</name>
            <category>Natural Satellites</category>
            <description>Pluto's massive companion moon, locked in a binary dance.</description>
            <lightYearsFromEarth>0.0005</lightYearsFromEarth>
            <requiredShip>Binary Navigator</requiredShip>
            <cost>17000</cost>
            <imagePath>assets/images/sat11.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>736</reviews>
        </destination>
        <destination id="SAT-12">
            <name>Phobos</name>
            <category>Natural Satellites</category>
            <description>One of Mars' tiny, doomed moons, slowly spiraling inward toward the planet.</description>
            <lightYearsFromEarth>0.00002</lightYearsFromEarth>
            <requiredShip>Light Jumper</requiredShip>
            <cost>4000</cost>
            <imagePath>assets/images/sat12.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>817</reviews>
        </destination>
        <destination id="SAT-13">
            <name>Deimos</name>
            <category>Natural Satellites</category>
            <description>The smaller, outermost, and lumpy-shaped moon of Mars.</description>
            <lightYearsFromEarth>0.00002</lightYearsFromEarth>
            <requiredShip>Light Jumper</requiredShip>
            <cost>4000</cost>
            <imagePath>assets/images/sat13.jpg</imagePath>
            <rating>3.9</rating>
            <reviews>900</reviews>
        </destination>
        <destination id="SAT-14">
            <name>Mimas</name>
            <category>Natural Satellites</category>
            <description>Saturn's moon, featuring a massive crater taking up a third of its face.</description>
            <lightYearsFromEarth>0.0001</lightYearsFromEarth>
            <requiredShip>Orbital Spectator</requiredShip>
            <cost>12000</cost>
            <imagePath>assets/images/sat14.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>712</reviews>
        </destination>
        <destination id="SAT-15">
            <name>Iapetus</name>
            <category>Natural Satellites</category>
            <description>Saturn's two-toned moon, complete with a massive equatorial ridge.</description>
            <lightYearsFromEarth>0.0001</lightYearsFromEarth>
            <requiredShip>Orbital Spectator</requiredShip>
            <cost>13000</cost>
            <imagePath>assets/images/sat15.jpg</imagePath>
            <rating>4.0</rating>
            <reviews>936</reviews>
        </destination>
        <destination id="STR-01">
            <name>Nidavellir</name>
            <category>Stars</category>
            <description>A dying neutron star harnessed by a legendary cosmic forge.</description>
            <lightYearsFromEarth>25000</lightYearsFromEarth>
            <requiredShip>Heat-Shielded Dreadnought</requiredShip>
            <cost>900000</cost>
            <imagePath>assets/images/str01.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>199</reviews>
        </destination>
        <destination id="STR-02">
            <name>Proxima Centauri</name>
            <category>Stars</category>
            <description>The closest star to the solar system, a small, low-mass red dwarf.</description>
            <lightYearsFromEarth>4.24</lightYearsFromEarth>
            <requiredShip>Light Courier</requiredShip>
            <cost>30000</cost>
            <imagePath>assets/images/str02.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>493</reviews>
        </destination>
        <destination id="STR-03">
            <name>Sirius A</name>
            <category>Stars</category>
            <description>The brightest star in Earth's night sky, a massive main-sequence star.</description>
            <lightYearsFromEarth>8.6</lightYearsFromEarth>
            <requiredShip>Solar Sailer</requiredShip>
            <cost>50000</cost>
            <imagePath>assets/images/str03.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>488</reviews>
        </destination>
        <destination id="STR-04">
            <name>Epsilon Eridani</name>
            <category>Stars</category>
            <description>A young, active sun-like star with two distinct asteroid belts.</description>
            <lightYearsFromEarth>10.5</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>60000</cost>
            <imagePath>assets/images/str04.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>495</reviews>
        </destination>
        <destination id="STR-05">
            <name>Tau Ceti</name>
            <category>Stars</category>
            <description>A stable, solitary star, a frequent setting for early sci-fi exploration.</description>
            <lightYearsFromEarth>11.9</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>64000</cost>
            <imagePath>assets/images/str05.jpg</imagePath>
            <rating>4.0</rating>
            <reviews>530</reviews>
        </destination>
        <destination id="STR-06">
            <name>Luyten’s Star</name>
            <category>Stars</category>
            <description>A quiet red dwarf known for its potentially habitable exoplanets.</description>
            <lightYearsFromEarth>12.2</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>66000</cost>
            <imagePath>assets/images/str06.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>416</reviews>
        </destination>
        <destination id="STR-07">
            <name>Wolf 1061</name>
            <category>Stars</category>
            <description>A red dwarf system heavily studied for colonial expansion.</description>
            <lightYearsFromEarth>14</lightYearsFromEarth>
            <requiredShip>Colony Scout</requiredShip>
            <cost>76000</cost>
            <imagePath>assets/images/str07.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>502</reviews>
        </destination>
        <destination id="STR-08">
            <name>Gliese 667C</name>
            <category>Stars</category>
            <description>Part of a triple-star system, bathing its planets in an eerie red light.</description>
            <lightYearsFromEarth>23.6</lightYearsFromEarth>
            <requiredShip>Multi-System Cruiser</requiredShip>
            <cost>110000</cost>
            <imagePath>assets/images/str08.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>169</reviews>
        </destination>
        <destination id="STR-09">
            <name>Vega</name>
            <category>Stars</category>
            <description>A brilliant, fast-spinning blue star, the first star to be photographed.</description>
            <lightYearsFromEarth>25</lightYearsFromEarth>
            <requiredShip>High-Speed Spectator</requiredShip>
            <cost>120000</cost>
            <imagePath>assets/images/str09.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>763</reviews>
        </destination>
        <destination id="STR-10">
            <name>TRAPPIST-1</name>
            <category>Stars</category>
            <description>An ultra-cool red dwarf hosting a record seven Earth-sized planets.</description>
            <lightYearsFromEarth>39</lightYearsFromEarth>
            <requiredShip>System Jumper</requiredShip>
            <cost>150000</cost>
            <imagePath>assets/images/str10.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>841</reviews>
        </destination>
        <destination id="STR-11">
            <name>Alpha Centauri A</name>
            <category>Stars</category>
            <description>A sun-like star forming a binary pair with Alpha Centauri B.</description>
            <lightYearsFromEarth>4.37</lightYearsFromEarth>
            <requiredShip>Binary Navigator</requiredShip>
            <cost>36000</cost>
            <imagePath>assets/images/str11.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>167</reviews>
        </destination>
        <destination id="STR-12">
            <name>Alpha Centauri B</name>
            <category>Stars</category>
            <description>The orange-hued companion to Alpha Centauri A.</description>
            <lightYearsFromEarth>4.37</lightYearsFromEarth>
            <requiredShip>Binary Navigator</requiredShip>
            <cost>36000</cost>
            <imagePath>assets/images/str12.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>735</reviews>
        </destination>
        <destination id="STR-13">
            <name>Procyon A</name>
            <category>Stars</category>
            <description>A bright, white star, nearing the end of its main-sequence life.</description>
            <lightYearsFromEarth>11.4</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>62000</cost>
            <imagePath>assets/images/str13.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>274</reviews>
        </destination>
        <destination id="STR-14">
            <name>Altair</name>
            <category>Stars</category>
            <description>A massive star spinning so fast it is flattened at the poles.</description>
            <lightYearsFromEarth>16.7</lightYearsFromEarth>
            <requiredShip>High-Gravity Skiff</requiredShip>
            <cost>90000</cost>
            <imagePath>assets/images/str14.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>685</reviews>
        </destination>
        <destination id="STR-15">
            <name>Fomalhaut A</name>
            <category>Stars</category>
            <description>A young, bright star surrounded by a massive, glowing dust ring.</description>
            <lightYearsFromEarth>25</lightYearsFromEarth>
            <requiredShip>Dust-Shielded Frigate</requiredShip>
            <cost>124000</cost>
            <imagePath>assets/images/str15.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>934</reviews>
        </destination>
        <destination id="NEB-01">
            <name>Pillars of Creation</name>
            <category>Nebulas</category>
            <description>Massive columns of interstellar dust and gas, serving as a stellar nursery.</description>
            <lightYearsFromEarth>7000</lightYearsFromEarth>
            <requiredShip>Nebula-Class Cruiser</requiredShip>
            <cost>240000</cost>
            <imagePath>assets/images/neb01.jpg</imagePath>
            <rating>4.6</rating>
            <reviews>373</reviews>
        </destination>
        <destination id="NEB-02">
            <name>Orion Nebula</name>
            <category>Nebulas</category>
            <description>A vibrant, glowing cloud of cosmic debris visible to the naked eye from Earth.</description>
            <lightYearsFromEarth>1344</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>170000</cost>
            <imagePath>assets/images/neb02.jpg</imagePath>
            <rating>4.8</rating>
            <reviews>413</reviews>
        </destination>
        <destination id="NEB-03">
            <name>Crab Nebula</name>
            <category>Nebulas</category>
            <description>A sprawling supernova remnant acting as a pulsar wind nebula.</description>
            <lightYearsFromEarth>6500</lightYearsFromEarth>
            <requiredShip>Radiation-Shielded Skiff</requiredShip>
            <cost>300000</cost>
            <imagePath>assets/images/neb03.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>445</reviews>
        </destination>
        <destination id="NEB-04">
            <name>Eagle Nebula</name>
            <category>Nebulas</category>
            <description>An open cluster of stars set against a magnificent backdrop of gas.</description>
            <lightYearsFromEarth>7000</lightYearsFromEarth>
            <requiredShip>Nebula-Class Cruiser</requiredShip>
            <cost>240000</cost>
            <imagePath>assets/images/neb04.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>930</reviews>
        </destination>
        <destination id="NEB-05">
            <name>Omega Nebula</name>
            <category>Nebulas</category>
            <description>A bright, glowing emission nebula that looks like a majestic swan.</description>
            <lightYearsFromEarth>5500</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>210000</cost>
            <imagePath>assets/images/neb05.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>51</reviews>
        </destination>
        <destination id="NEB-06">
            <name>Trifid Nebula</name>
            <category>Nebulas</category>
            <description>A complex cosmic cloud displaying three distinct types of nebulas in one.</description>
            <lightYearsFromEarth>5200</lightYearsFromEarth>
            <requiredShip>Scientific Surveyor</requiredShip>
            <cost>220000</cost>
            <imagePath>assets/images/neb06.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>752</reviews>
        </destination>
        <destination id="NEB-07">
            <name>Lagoon Nebula</name>
            <category>Nebulas</category>
            <description>A giant interstellar cloud heavily populated with new, massive stars.</description>
            <lightYearsFromEarth>4100</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>190000</cost>
            <imagePath>assets/images/neb07.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>828</reviews>
        </destination>
        <destination id="NEB-08">
            <name>Ring Nebula</name>
            <category>Nebulas</category>
            <description>A glowing shell of ionized gas expelled by a dying, sun-like star.</description>
            <lightYearsFromEarth>2570</lightYearsFromEarth>
            <requiredShip>Light Cruiser</requiredShip>
            <cost>150000</cost>
            <imagePath>assets/images/neb08.jpg</imagePath>
            <rating>4.2</rating>
            <reviews>160</reviews>
        </destination>
        <destination id="NEB-09">
            <name>Hourglass Nebula</name>
            <category>Nebulas</category>
            <description>A young planetary nebula featuring two massive rings that look like an eye.</description>
            <lightYearsFromEarth>8000</lightYearsFromEarth>
            <requiredShip>Nebula-Class Cruiser</requiredShip>
            <cost>260000</cost>
            <imagePath>assets/images/neb09.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>99</reviews>
        </destination>
        <destination id="NEB-10">
            <name>Snowball Nebula</name>
            <category>Nebulas</category>
            <description>A planetary nebula sporting a distinctive icy-blue outer shell.</description>
            <lightYearsFromEarth>2500</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>144000</cost>
            <imagePath>assets/images/neb10.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>380</reviews>
        </destination>
        <destination id="NEB-11">
            <name>Helix Nebula</name>
            <category>Nebulas</category>
            <description>Often called the Eye of God, it is one of the closest planetary nebulas to Earth.</description>
            <lightYearsFromEarth>650</lightYearsFromEarth>
            <requiredShip>Light Courier</requiredShip>
            <cost>80000</cost>
            <imagePath>assets/images/neb11.jpg</imagePath>
            <rating>4.1</rating>
            <reviews>907</reviews>
        </destination>
        <destination id="NEB-12">
            <name>Horsehead Nebula</name>
            <category>Nebulas</category>
            <description>A famous dark nebula set against the bright emission of IC 434.</description>
            <lightYearsFromEarth>1375</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>176000</cost>
            <imagePath>assets/images/neb12.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>74</reviews>
        </destination>
        <destination id="NEB-13">
            <name>Cat's Eye Nebula</name>
            <category>Nebulas</category>
            <description>One of the most complex, structurally intricate nebulas ever discovered.</description>
            <lightYearsFromEarth>3300</lightYearsFromEarth>
            <requiredShip>Scientific Surveyor</requiredShip>
            <cost>180000</cost>
            <imagePath>assets/images/neb13.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>858</reviews>
        </destination>
        <destination id="NEB-14">
            <name>Butterfly Nebula</name>
            <category>Nebulas</category>
            <description>A dying star casting off waves of super-heated gas resembling glowing wings.</description>
            <lightYearsFromEarth>3800</lightYearsFromEarth>
            <requiredShip>Heat-Shielded Skiff</requiredShip>
            <cost>184000</cost>
            <imagePath>assets/images/neb14.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>888</reviews>
        </destination>
        <destination id="NEB-15">
            <name>Veil Nebula</name>
            <category>Nebulas</category>
            <description>A massive, delicate, and wispy remnant of a star that exploded 8,000 years ago.</description>
            <lightYearsFromEarth>2400</lightYearsFromEarth>
            <requiredShip>Standard Explorer</requiredShip>
            <cost>140000</cost>
            <imagePath>assets/images/neb15.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>614</reviews>
        </destination>
    </destinations>
    <packages>
        <package id="PKG-01">
            <packageName>The Guardian's Odyssey</packageName>
            <description>A chaotic, high-thrill journey across legendary cosmic locations.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-01" />
                <destinationRef category="Stars" id="STR-01" />
                <destinationRef category="Natural Satellites" id="SAT-01" />
                <destinationRef category="Non-Habitable Planets" id="NHP-01" />
                <destinationRef category="Habitable Planets" id="HAB-01" />
                <destinationRef category="Black Holes" id="BLK-01" />
            </stops>
            <totalDuration>18 Months</totalDuration>
            <price>5450000</price>
            <imagePath>assets/images/pkg01.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>160</reviews>
        </package>
        <package id="PKG-02">
            <packageName>The Cooper Legacy</packageName>
            <description>Follow in the footsteps of humanity's greatest explorers.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-02" />
                <destinationRef category="Stars" id="STR-02" />
                <destinationRef category="Natural Satellites" id="SAT-02" />
                <destinationRef category="Non-Habitable Planets" id="NHP-02" />
                <destinationRef category="Habitable Planets" id="HAB-02" />
                <destinationRef category="Black Holes" id="BLK-02" />
            </stops>
            <totalDuration>24 Months</totalDuration>
            <price>4816000</price>
            <imagePath>assets/images/pkg02.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>141</reviews>
        </package>
        <package id="PKG-03">
            <packageName>The Jedi Path</packageName>
            <description>Travel the ancient hyperspace lanes to iconic planetary systems.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-03" />
                <destinationRef category="Stars" id="STR-03" />
                <destinationRef category="Natural Satellites" id="SAT-03" />
                <destinationRef category="Non-Habitable Planets" id="NHP-03" />
                <destinationRef category="Habitable Planets" id="HAB-03" />
                <destinationRef category="Black Holes" id="BLK-03" />
            </stops>
            <totalDuration>12 Months</totalDuration>
            <price>3600000</price>
            <imagePath>assets/images/pkg03.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>385</reviews>
        </package>
        <package id="PKG-04">
            <packageName>The Exoplanet Frontier</packageName>
            <description>Journey to the edge of known exoplanets and distant voids.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-04" />
                <destinationRef category="Stars" id="STR-04" />
                <destinationRef category="Natural Satellites" id="SAT-04" />
                <destinationRef category="Non-Habitable Planets" id="NHP-04" />
                <destinationRef category="Habitable Planets" id="HAB-04" />
                <destinationRef category="Black Holes" id="BLK-04" />
            </stops>
            <totalDuration>36 Months</totalDuration>
            <price>11680000</price>
            <imagePath>assets/images/pkg04.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>56</reviews>
        </package>
        <package id="PKG-05">
            <packageName>The Void Voyager</packageName>
            <description>A high-thrill tour skirting the edge of stellar phenomena.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-05" />
                <destinationRef category="Stars" id="STR-05" />
                <destinationRef category="Natural Satellites" id="SAT-05" />
                <destinationRef category="Non-Habitable Planets" id="NHP-05" />
                <destinationRef category="Habitable Planets" id="HAB-05" />
                <destinationRef category="Black Holes" id="BLK-05" />
            </stops>
            <totalDuration>20 Months</totalDuration>
            <price>3140000</price>
            <imagePath>assets/images/pkg05.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>366</reviews>
        </package>
        <package id="PKG-06">
            <packageName>The Dune Expedition</packageName>
            <description>Explore treacherous environments and breathtaking cosmic events.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-06" />
                <destinationRef category="Stars" id="STR-06" />
                <destinationRef category="Natural Satellites" id="SAT-06" />
                <destinationRef category="Non-Habitable Planets" id="NHP-06" />
                <destinationRef category="Habitable Planets" id="HAB-06" />
                <destinationRef category="Black Holes" id="BLK-06" />
            </stops>
            <totalDuration>48 Months</totalDuration>
            <price>13000000</price>
            <imagePath>assets/images/pkg06.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>773</reviews>
        </package>
        <package id="PKG-07">
            <packageName>The Stellar Beauty Tour</packageName>
            <description>Focuses entirely on the most visually stunning locations in the galaxy.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-07" />
                <destinationRef category="Stars" id="STR-07" />
                <destinationRef category="Natural Satellites" id="SAT-07" />
                <destinationRef category="Non-Habitable Planets" id="NHP-07" />
                <destinationRef category="Habitable Planets" id="HAB-07" />
                <destinationRef category="Black Holes" id="BLK-07" />
            </stops>
            <totalDuration>15 Months</totalDuration>
            <price>2900000</price>
            <imagePath>assets/images/pkg07.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>195</reviews>
        </package>
        <package id="PKG-08">
            <packageName>The Solar System Run</packageName>
            <description>A tight orbit tour focusing on close-range, high-profile anomalies.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-08" />
                <destinationRef category="Stars" id="STR-08" />
                <destinationRef category="Natural Satellites" id="SAT-08" />
                <destinationRef category="Non-Habitable Planets" id="NHP-08" />
                <destinationRef category="Habitable Planets" id="HAB-08" />
                <destinationRef category="Black Holes" id="BLK-08" />
            </stops>
            <totalDuration>60 Months</totalDuration>
            <price>17400000</price>
            <imagePath>assets/images/pkg08.jpg</imagePath>
            <rating>4.7</rating>
            <reviews>118</reviews>
        </package>
        <package id="PKG-09">
            <packageName>The Colonizer's Kit</packageName>
            <description>Tours of potential human-habitable worlds and their surrounding systems.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-09" />
                <destinationRef category="Stars" id="STR-09" />
                <destinationRef category="Natural Satellites" id="SAT-09" />
                <destinationRef category="Non-Habitable Planets" id="NHP-09" />
                <destinationRef category="Habitable Planets" id="HAB-09" />
                <destinationRef category="Black Holes" id="BLK-09" />
            </stops>
            <totalDuration>50 Months</totalDuration>
            <price>30000000</price>
            <imagePath>assets/images/pkg09.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>509</reviews>
        </package>
        <package id="PKG-10">
            <packageName>The Titan Gateway</packageName>
            <description>A deep dive bridging outer planet outposts with extreme deep space.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-10" />
                <destinationRef category="Stars" id="STR-10" />
                <destinationRef category="Natural Satellites" id="SAT-10" />
                <destinationRef category="Non-Habitable Planets" id="NHP-10" />
                <destinationRef category="Habitable Planets" id="HAB-10" />
                <destinationRef category="Black Holes" id="BLK-10" />
            </stops>
            <totalDuration>120 Months</totalDuration>
            <price>32000000</price>
            <imagePath>assets/images/pkg10.jpg</imagePath>
            <rating>4.5</rating>
            <reviews>852</reviews>
        </package>
        <package id="PKG-11">
            <packageName>The Singularity Run</packageName>
            <description>A physics-defying route focusing on gravitational extremes.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-11" />
                <destinationRef category="Stars" id="STR-11" />
                <destinationRef category="Natural Satellites" id="SAT-11" />
                <destinationRef category="Non-Habitable Planets" id="NHP-11" />
                <destinationRef category="Habitable Planets" id="HAB-11" />
                <destinationRef category="Black Holes" id="BLK-11" />
            </stops>
            <totalDuration>14 Months</totalDuration>
            <price>3200000</price>
            <imagePath>assets/images/pkg11.jpg</imagePath>
            <rating>4.4</rating>
            <reviews>423</reviews>
        </package>
        <package id="PKG-12">
            <packageName>The Cinematic Grand Tour</packageName>
            <description>A luxury sweep combining historical planetary ruins with stellar beauty.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-12" />
                <destinationRef category="Stars" id="STR-12" />
                <destinationRef category="Natural Satellites" id="SAT-12" />
                <destinationRef category="Non-Habitable Planets" id="NHP-12" />
                <destinationRef category="Habitable Planets" id="HAB-12" />
                <destinationRef category="Black Holes" id="BLK-12" />
            </stops>
            <totalDuration>32 Months</totalDuration>
            <price>15000000</price>
            <imagePath>assets/images/pkg12.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>936</reviews>
        </package>
        <package id="PKG-13">
            <packageName>The Eternal Sun Tour</packageName>
            <description>Bask in the light of diverse stars before diving into the absolute dark.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-13" />
                <destinationRef category="Stars" id="STR-13" />
                <destinationRef category="Natural Satellites" id="SAT-13" />
                <destinationRef category="Non-Habitable Planets" id="NHP-13" />
                <destinationRef category="Habitable Planets" id="HAB-13" />
                <destinationRef category="Black Holes" id="BLK-13" />
            </stops>
            <totalDuration>10 Months</totalDuration>
            <price>3600000</price>
            <imagePath>assets/images/pkg13.jpg</imagePath>
            <rating>4.0</rating>
            <reviews>550</reviews>
        </package>
        <package id="PKG-14">
            <packageName>The Outer Rim Trek</packageName>
            <description>Venture into the dangerous fringes of the known galaxy.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-14" />
                <destinationRef category="Stars" id="STR-14" />
                <destinationRef category="Natural Satellites" id="SAT-14" />
                <destinationRef category="Non-Habitable Planets" id="NHP-14" />
                <destinationRef category="Habitable Planets" id="HAB-14" />
                <destinationRef category="Black Holes" id="BLK-14" />
            </stops>
            <totalDuration>22 Months</totalDuration>
            <price>2400000</price>
            <imagePath>assets/images/pkg14.jpg</imagePath>
            <rating>4.3</rating>
            <reviews>135</reviews>
        </package>
        <package id="PKG-15">
            <packageName>The Ultimate Completionist</packageName>
            <description>A long-range tour covering one of every extreme category in existence.</description>
            <stops>
                <destinationRef category="Nebulas" id="NEB-15" />
                <destinationRef category="Stars" id="STR-15" />
                <destinationRef category="Natural Satellites" id="SAT-15" />
                <destinationRef category="Non-Habitable Planets" id="NHP-15" />
                <destinationRef category="Habitable Planets" id="HAB-15" />
                <destinationRef category="Black Holes" id="BLK-15" />
            </stops>
            <totalDuration>70 Months</totalDuration>
            <price>13200000</price>
            <imagePath>assets/images/pkg15.jpg</imagePath>
            <rating>4.9</rating>
            <reviews>390</reviews>
        </package>
    </packages>
    <spaceships>
        <spaceship id="SHIP-01">
            <name>Endurance-Class Explorer</name>
            <shipClass>Deep-Space Cruiser</shipClass>
            <material>Reinforced tritanium ribcage with a rotating gravity ring</material>
            <experience>Long-duration comfort with a centrifugal gravity habitat and observation lounges</experience>
            <capacity>240</capacity>
            <range>4,200 light-years</range>
            <fuelSource>Fusion torch drive</fuelSource>
            <description>Built for multi-year intergalactic voyages, the Endurance keeps travellers healthy with simulated gravity and hydroponic gardens.</description>
            <rating>4.4</rating>
            <reviews>639</reviews>
            <imagePath>assets/images/ship01.jpg</imagePath>
            <speed>12</speed>
        </spaceship>
        <spaceship id="SHIP-02">
            <name>Nebula-Class Cruiser</name>
            <shipClass>Research Cruiser</shipClass>
            <material>Iridescent aeroglass canopy over a duranium frame</material>
            <experience>Panoramic nebula observation decks and low-light stargazing suites</experience>
            <capacity>180</capacity>
            <range>1,600 light-years</range>
            <fuelSource>Ionized plasma sails</fuelSource>
            <description>Optimised for drifting silently through glowing nebula clouds while shielding passengers from stellar radiation.</description>
            <rating>4.5</rating>
            <reviews>220</reviews>
            <imagePath>assets/images/ship02.jpg</imagePath>
            <speed>9</speed>
        </spaceship>
        <spaceship id="SHIP-03">
            <name>Event Horizon Diver</name>
            <shipClass>Gravitational Survey Ship</shipClass>
            <material>Neutronium-laced shielding and a reinforced keel</material>
            <experience>Extreme-gravity approaches to black holes with inertial dampening</experience>
            <capacity>12</capacity>
            <range>900 light-years</range>
            <fuelSource>Hawking-radiation collector</fuelSource>
            <description>A hardened survey ship that skirts event horizons, harvesting radiation for power while protecting its small crew.</description>
            <rating>4.5</rating>
            <reviews>920</reviews>
            <imagePath>assets/images/ship03.jpg</imagePath>
            <speed>6</speed>
        </spaceship>
        <spaceship id="SHIP-04">
            <name>Quantum Skiff</name>
            <shipClass>Temporal Courier</shipClass>
            <material>Phase-shifting chronosteel</material>
            <experience>A time-dilation-stabilised cabin that keeps clocks steady</experience>
            <capacity>6</capacity>
            <range>8,000 light-years</range>
            <fuelSource>Quantum-vacuum tap</fuelSource>
            <description>A tiny, blisteringly fast skiff able to survive temporal distortion near massive objects.</description>
            <rating>4.3</rating>
            <reviews>589</reviews>
            <imagePath>assets/images/ship04.jpg</imagePath>
            <speed>45</speed>
        </spaceship>
        <spaceship id="SHIP-05">
            <name>Deep Void Dreadnought</name>
            <shipClass>Heavy Long-Hauler</shipClass>
            <material>Layered adamant-weave armour</material>
            <experience>Fortress-like security on the galaxy's darkest routes</experience>
            <capacity>600</capacity>
            <range>12,000 light-years</range>
            <fuelSource>Dark-matter reactor</fuelSource>
            <description>The heaviest vessel in the fleet, engineered to cross the empty void between galaxies without resupply.</description>
            <rating>4.7</rating>
            <reviews>620</reviews>
            <imagePath>assets/images/ship05.jpg</imagePath>
            <speed>30</speed>
        </spaceship>
        <spaceship id="SHIP-06">
            <name>Solar Sailer</name>
            <shipClass>Luxury Yacht</shipClass>
            <material>Gold-foil photonic sails on a carbon-lattice spar</material>
            <experience>Silent, radiation-powered luxury cruising with spa decks</experience>
            <capacity>40</capacity>
            <range>300 light-years</range>
            <fuelSource>Stellar radiation sails</fuelSource>
            <description>A serene luxury craft that rides starlight itself, ideal for unhurried tours of nearby stars.</description>
            <rating>4.4</rating>
            <reviews>409</reviews>
            <imagePath>assets/images/ship06.jpg</imagePath>
            <speed>3</speed>
        </spaceship>
        <spaceship id="SHIP-07">
            <name>Colony Ark</name>
            <shipClass>Mass Transport</shipClass>
            <material>Ceramic-composite megahull</material>
            <experience>Small-town amenities — parks, markets and schools — for thousands</experience>
            <capacity>3000</capacity>
            <range>5,500 light-years</range>
            <fuelSource>Antimatter core</fuelSource>
            <description>A city among the stars, built to relocate entire populations to habitable worlds.</description>
            <rating>4.4</rating>
            <reviews>258</reviews>
            <imagePath>assets/images/ship07.jpg</imagePath>
            <speed>5</speed>
        </spaceship>
        <spaceship id="SHIP-08">
            <name>Heart of Gold</name>
            <shipClass>Experimental Prototype</shipClass>
            <material>Mirror-finish improbability shell</material>
            <experience>Reality-bending, statistically improbable comfort</experience>
            <capacity>4</capacity>
            <range>Effectively unlimited</range>
            <fuelSource>Infinite Improbability Drive</fuelSource>
            <description>A one-of-a-kind prototype that arrives everywhere and nowhere at once — passage is never guaranteed to be ordinary.</description>
            <rating>4.8</rating>
            <reviews>75</reviews>
            <imagePath>assets/images/ship08.jpg</imagePath>
            <speed>1000</speed>
        </spaceship>
        <spaceship id="SHIP-09">
            <name>Standard Explorer</name>
            <shipClass>General-Purpose Shuttle</shipClass>
            <material>Welded tritanium plating</material>
            <experience>Reliable, no-frills short hops between neighbours</experience>
            <capacity>90</capacity>
            <range>260 light-years</range>
            <fuelSource>Compact fusion cell</fuelSource>
            <description>The dependable workhorse of the fleet — affordable and easy to fly.</description>
            <rating>4.7</rating>
            <reviews>657</reviews>
            <imagePath>assets/images/ship09.jpg</imagePath>
            <speed>8</speed>
        </spaceship>
        <spaceship id="SHIP-10">
            <name>Light Courier</name>
            <shipClass>Fast Packet</shipClass>
            <material>Featherweight magnesium-titanium skin</material>
            <experience>Quick, nimble point-to-point runs</experience>
            <capacity>20</capacity>
            <range>180 light-years</range>
            <fuelSource>High-density fusion cell</fuelSource>
            <description>A lean, speedy craft for urgent transits and light cargo.</description>
            <rating>4.7</rating>
            <reviews>174</reviews>
            <imagePath>assets/images/ship10.jpg</imagePath>
            <speed>40</speed>
        </spaceship>
        <spaceship id="SHIP-11">
            <name>Scientific Surveyor</name>
            <shipClass>Sensor Platform</shipClass>
            <material>Sensor-studded graphene composite</material>
            <experience>Immersive, hands-on data-collection expeditions</experience>
            <capacity>60</capacity>
            <range>1,100 light-years</range>
            <fuelSource>Compact fusion cell</fuelSource>
            <description>Bristling with instruments, this platform turns every trip into a research mission.</description>
            <rating>4.2</rating>
            <reviews>173</reviews>
            <imagePath>assets/images/ship11.jpg</imagePath>
            <speed>10</speed>
        </spaceship>
        <spaceship id="SHIP-12">
            <name>Cryo-Skiff</name>
            <shipClass>Sleeper Transport</shipClass>
            <material>Insulated frostglass over a duranium core</material>
            <experience>Deep cryo-sleep pods for the very longest voyages</experience>
            <capacity>300</capacity>
            <range>9,000 light-years</range>
            <fuelSource>Fusion torch drive</fuelSource>
            <description>Passengers sleep away the years in cryo-pods while the ship quietly crosses the deep.</description>
            <rating>4.2</rating>
            <reviews>52</reviews>
            <imagePath>assets/images/ship12.jpg</imagePath>
            <speed>15</speed>
        </spaceship>
        <spaceship id="SHIP-13">
            <name>Hyper-Relay Cruiser</name>
            <shipClass>Express Liner</shipClass>
            <material>Superconductive nova-alloy</material>
            <experience>Blazing express service between major hubs</experience>
            <capacity>220</capacity>
            <range>2,400 light-years</range>
            <fuelSource>Zero-point vacuum energy</fuelSource>
            <description>Rides a network of subspace relays for the fastest scheduled crossings available.</description>
            <rating>4.7</rating>
            <reviews>95</reviews>
            <imagePath>assets/images/ship13.jpg</imagePath>
            <speed>60</speed>
        </spaceship>
        <spaceship id="SHIP-14">
            <name>Stealth Frigate</name>
            <shipClass>Covert Runner</shipClass>
            <material>Radar-absorbent voidsteel</material>
            <experience>Discreet, quiet transit through hazardous or contested space</experience>
            <capacity>48</capacity>
            <range>700 light-years</range>
            <fuelSource>Cloaked antimatter core</fuelSource>
            <description>Moves unseen through dangerous regions, prioritising passenger safety and privacy.</description>
            <rating>4.1</rating>
            <reviews>511</reviews>
            <imagePath>assets/images/ship14.jpg</imagePath>
            <speed>22</speed>
        </spaceship>
        <spaceship id="SHIP-15">
            <name>Armored Dreadnought</name>
            <shipClass>Escort Warship</shipClass>
            <material>Double-hulled duranium with ablative plating</material>
            <experience>Maximum protection in the highest-risk zones</experience>
            <capacity>150</capacity>
            <range>3,000 light-years</range>
            <fuelSource>Antimatter core</fuelSource>
            <description>A military-grade escort that shrugs off debris fields and radiation storms.</description>
            <rating>4.8</rating>
            <reviews>629</reviews>
            <imagePath>assets/images/ship15.jpg</imagePath>
            <speed>18</speed>
        </spaceship>
    </spaceships>
</interstellarAgency>`;
