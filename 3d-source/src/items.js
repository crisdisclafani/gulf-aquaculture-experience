// Clickable elements inside each interior (concept content). Each item: a box [x0,y0,z0,x1,y1,z1] in room
// coordinates that captures the meshes inside it, plus the card content.
// live: [label, base, amplitude, unit, decimals] → values that drift in real time on the card.
const R = (() => { let s = 777; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
const pick = (a) => a[Math.floor(R() * a.length)];
const fmt = (n) => n.toLocaleString('en-US');
const date = (d) => { const t = new Date(2026, 9, 6 - d); return `${String(t.getDate()).padStart(2, '0')}/${String(t.getMonth() + 1).padStart(2, '0')}/${t.getFullYear()}`; };
const WQ = (t = 26) => [['Temperature', t, 0.3, '°C', 1], ['Dissolved O₂', 7.8, 0.25, 'mg/L', 1], ['Salinity', 36, 0.2, 'ppt', 1]];

const ROOMS = {
  broodstock: () => {
    const sp = [['Hamour', 'Epinephelus coioides'], ['Seabream', 'Sparus aurata'], ['Cobia', 'Rachycentron canadum'], ['Mangrove Snapper', 'Lutjanus argentimaculatus']];
    const out = [[-15, -7], [15, -7], [-15, 8], [15, 8]].map(([x, z], i) => ({
      key: 'tank' + i, code: 'B-0' + (i + 1), box: [x - 6.6, 0, z - 6.6, x + 6.6, 4.6, z + 6.6],
      name: `Broodstock tank B-0${i + 1}`, kind: `${sp[i][0]} · ${sp[i][1]}`,
      desc: `Parent fish of ${sp[i][0].toLowerCase()} kept under a controlled photoperiod and temperature cycle to trigger natural spawning. Eggs float to the surface collector overnight.`,
      stats: [['60 m³', 'Volume'], [`${18 + i * 4}`, 'Breeders'], [`${(4.2 + i * 0.9).toFixed(1)} kg`, 'Avg. weight']],
      live: [...WQ(25.6 + i * 0.3), ['Photoperiod', 13, 0, 'h light', 0]],
    }));
    out.push({ key: 'walk', code: 'CW', box: [-1.3, 2.3, -16, 1.3, 2.9, 16], name: 'Service catwalk', kind: 'Access & husbandry',
      desc: 'Raised walkway giving staff safe access to every tank for feeding, health checks and gentle handling of the breeders.',
      stats: [['2.2 m', 'Width'], ['Anti-slip', 'GRP grating'], ['Daily', 'Health checks']] });
    out.push({ key: 'eggs', code: 'EC', box: [-4, 3, -16, 4, 6, -12], name: 'Egg collectors', kind: 'Spawn harvesting',
      desc: 'Overflow collectors capture the floating eggs every morning; batches are counted, disinfected and transferred to the hatchery incubators.',
      stats: [['Daily', 'Harvest'], ['~750k', 'Eggs / batch'], ['< 1 h', 'To incubators']], live: [['Eggs collected today', 612000, 9000, '', 0]] });
    out.push({ key: 'supply', code: 'SW', box: [-30, 4, -17, 30, 9.5, -5], name: 'Sea water supply', kind: 'From the intake room',
      desc: 'Filtered Gulf water from the sea water intake room, sterilised by UV and ozone before reaching the broodstock tanks.',
      stats: [['UV + O₃', 'Treatment'], ['RAS', 'Recirculation'], ['95%', 'Water reused']], live: [['Flow', 118, 4, 'm³/h', 0]] });
    return out;
  },
  hatchery: () => {
    const out = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      const x = -20 + c * 8, z = -10 + r * 8, dph = 2 + Math.floor(R() * 22), stocked = 600000 + Math.round(R() * 30) * 5000;
      const unh = Math.round(stocked * (0.15 + R() * 0.12) / 1000) * 1000, sp = pick(['Seabream', 'Hamour', 'Red Snapper']);
      out.push({ key: `L${r + 1}T${c + 1}`, code: `L${r + 1}T${c + 1}`, box: [x - 2.3, 0, z - 2.3, x + 2.3, 4.2, z + 2.3],
        name: `Larval tank L${r + 1}T${c + 1}`, kind: `${sp} · day ${dph} post-hatch`,
        desc: `Conical larval rearing tank on a recirculating system. Green-water and live feed are dosed several times a day while larvae develop their swim bladder and first organs.`,
        board: [['TANK NO', `L${r + 1}T${c + 1}`], ['SPECIES', sp.toUpperCase()], ['STOCKING DATE', date(dph)], ['STOCKED EGGS', fmt(stocked)], ['UNHATCHED EGGS', fmt(unh)], ['HATCHED EGGS', fmt(stocked - unh)]],
        stats: [['8 m³', 'Volume'], [`${dph} DPH`, 'Age'], [`${(60 + R() * 25).toFixed(0)}%`, 'Survival est.']],
        live: WQ(25.8 + R() * 0.6) });
    }
    out.push({ key: 'wq', code: 'WQ', box: [-24, 0, 12, -12, 5, 16], name: 'Water-quality station', kind: 'RAS control',
      desc: 'Central console for the 26 recirculating systems: every tank is monitored for temperature, salinity, photoperiod and oxygen, with alarms to the team.',
      stats: [['26', 'RAS systems'], ['24/7', 'Monitoring'], ['SMS', 'Alarms']], live: [['Systems online', 26, 0, '/ 26', 0], ['Alarms', 0, 0, '', 0], ...WQ(26.1)] });
    return out;
  },
  livefeed: () => {
    const algae = [['Nannochloropsis', 'Green-water for larval tanks'], ['Isochrysis', 'Rich in DHA'], ['Tetraselmis', 'Rotifer feed'], ['Chaetoceros', 'Diatom culture'], ['Pavlova', 'Copepod & Artemia enrichment']];
    const out = algae.map(([n, s], r) => ({ key: 'pbr' + r, code: 'PBR-' + (r + 1), box: [-24, 0, -13 + r * 5.5 - 1, 22, 7, -13 + r * 5.5 + 1],
      name: `Photobioreactors · ${n}`, kind: s,
      desc: `One of the 7 live algae species grown year-round: a row of 16 photobioreactors culturing ${n} under a 24-hour LED spectrum. Cultures are harvested daily and dosed into the larval tanks.`,
      stats: [['16', 'Columns'], ['250 L', 'Each'], ['Daily', 'Harvest']], live: [['Cell density', 28 + r * 4, 1.5, 'M cells/mL', 1], ['Culture temp.', 24, 0.3, '°C', 1], ['pH', 8.1, 0.05, '', 2]] }));
    for (let i = 0; i < 4; i++) out.push({ key: 'rot' + i, code: 'R-' + (i + 1), box: [22.4, 0, -10 + i * 6 - 1.6, 25.6, 4, -10 + i * 6 + 1.6],
      name: `Rotifer cone R-${i + 1}`, kind: 'Zooplankton · Brachionus',
      desc: 'Conical culture vessel for rotifers, the first live prey offered to larvae. They are enriched with microalgae before feeding.',
      stats: [['1,000 L', 'Volume'], ['Batch', 'Culture'], ['Enriched', 'With algae']], live: [['Density', 820 + i * 60, 25, 'rotifers/mL', 0]] });
    return out;
  },
  nursery: () => [-10.5, -3.5, 3.5, 10.5].flatMap((z, i) => [
    { key: 'rw' + i, code: 'N-0' + (i + 1), box: [-24, 0, z - 2.6, 24, 2.2, z + 2.6], name: `Nursery raceway N-0${i + 1}`, kind: `${pick(['Hamour', 'Red Snapper', 'Sheri'])} juveniles`,
      desc: 'Long flow-through raceway where juveniles complete weaning onto formulated feed and grow to fingerling size before delivery to farms or the sea cages.',
      stats: [[`${fmt(38000 + i * 6500)}`, 'Fish'], ['45 m', 'Length'], [`Day ${30 + i * 6}`, 'Age']], live: [['Avg. weight', 1.6 + i * 0.6, 0.02, 'g', 2], ['Feed today', 3.2 + i * 0.4, 0.05, 'kg', 1], ...WQ(26.4).slice(0, 2)] },
    { key: 'fd' + i, code: 'F-0' + (i + 1), box: [-24, 2.3, z - 0.7, 24, 3.5, z + 0.7], name: `Automatic feeder F-0${i + 1}`, kind: 'Precision feeding on rails',
      desc: 'Rail-mounted feeder that travels along the raceway dispensing small, frequent rations calculated from biomass and water temperature.',
      stats: [['12×', 'Meals / day'], ['±2 g', 'Accuracy'], ['Auto', 'Biomass-based']], live: [['Next meal in', 14, 0.5, 'min', 0]] },
  ]),
  research: () => {
    const names = [['Virology lab', 'Viral pathogen testing'], ['Bacteriology lab', 'Bacterial screening & culture'], ['Parasitology lab', 'Parasite diagnostics'],
      ['Microscopy', 'Larval development'], ['Water-quality lab', 'Water-quality parameters'], ['Genomics bench', 'Broodstock genetics']];
    const out = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) {
      const x = -14 + c * 20, z = -8 + r * 8, [n, s] = names[r * 2 + c];
      out.push({ key: 'b' + r + c, code: 'LAB-' + (r * 2 + c + 1), box: [x - 6.3, 0, z - 1.5, x + 6.3, 3.2, z + 1.5], name: n, kind: s,
        desc: `One of the 14 SKMRC laboratories, provisioned for ISO/IEC 17025. Here the team works on ${s.toLowerCase()} to improve fish health, genetics and productivity across generations.`,
        stats: [['ISO', '17025 ready'], [`${3 + r}`, 'Researchers'], ['Open', 'To partners']], live: [['Samples today', 40 + r * 18 + c * 7, 2, '', 0]] });
    }
    out.push({ key: 'fh', code: 'FH', box: [-30, 0, -15, -26.5, 4, 10], name: 'Fume hood bank', kind: 'Chemistry & sample preparation',
      desc: 'Five ducted fume hoods for safe handling of reagents and fixatives during sample preparation.', stats: [['5', 'Hoods'], ['0.5 m/s', 'Face velocity'], ['HEPA', 'Filtered']] });
    return out;
  },
  plantroom: () => [
    ...[0, 1, 2].map(i => ({ key: 'g' + i, code: 'G' + (i + 1), box: [-18 + i * 11 - 4.6, 0, -13, -18 + i * 11 + 6, 4, -9], name: `Standby generator G${i + 1}`, kind: 'Diesel · automatic start',
      desc: 'Starts automatically within seconds of a grid failure so that pumps and oxygen never stop.', stats: [['1 MVA', 'Rating'], ['< 10 s', 'Start'], ['N+1', 'Redundancy']], live: [['Status', 0, 0, i === 0 ? 'Running test' : 'Standby', 0], ['Fuel', 92 - i * 4, 0.1, '%', 0]] })),
    { key: 'uv', code: 'UV', box: [9, 0, -6, 15, 3.6, 0], name: 'UV sterilisers', kind: 'Pathogen control',
      desc: 'High-output ultraviolet reactors disinfect recirculating water before it returns to the tanks.', stats: [['4', 'Reactors'], ['99.9%', 'Pathogen kill'], ['RAS', 'Loop']], live: [['UV dose', 46, 1, 'mJ/cm²', 0]] },
    { key: 'bf', code: 'BF', box: [20, 0, -14.5, 24, 4.5, -1], name: 'Biofilters', kind: 'Nitrification',
      desc: 'Moving-bed biofilters where bacteria convert ammonia from fish waste into harmless nitrate.', stats: [['3', 'Units'], ['MBBR', 'Technology'], ['95%', 'Water saved']], live: [['Ammonia', 0.08, 0.01, 'mg/L', 2]] },
    { key: 'scada', code: 'SC', box: [-19.5, 0, 11, -12.5, 3.2, 13], name: 'Life-support SCADA', kind: 'Control panel',
      desc: 'Supervisory control of pumps, filters, oxygen and temperature for the whole hatchery.', stats: [['1,200', 'Signals'], ['24/7', 'Logging'], ['Remote', 'Access']], live: [['Pumps running', 14, 0, '/ 16', 0]] },
  ],
  genroom: () => [
    ...[0, 1, 2].map(i => ({ key: 'g' + i, code: 'GEN-' + (i + 1), box: [-12 + i * 12 - 4.6, 0, -8.5, -12 + i * 12 + 6, 4, -3.5], name: `Generator GEN-${i + 1}`, kind: 'Back-up power',
      desc: 'Diesel generator set sized to carry the life-support load of the centre during a power cut.', stats: [['800 kVA', 'Rating'], ['24 h', 'Autonomy'], ['Weekly', 'Test run']], live: [['Coolant', 72, 0.5, '°C', 0]] })),
    { key: 'sw', code: 'SWG', box: [-16, 0, 8, -4, 3.5, 10.2], name: 'Switchgear', kind: 'Electrical distribution', desc: 'Low-voltage panels distributing power to the hatchery, broodstock building and plant room.', stats: [['ATS', 'Auto transfer'], ['6', 'Panels'], ['IP54', 'Protection']] },
    { key: 'tr', code: 'TX', box: [11.5, 0, 7, 16.5, 3.6, 11], name: 'Transformer', kind: 'Grid connection', desc: 'Step-down transformer feeding the site from the utility network.', stats: [['11 kV', 'Input'], ['400 V', 'Output'], ['Oil', 'Cooled']], live: [['Load', 61, 1.5, '%', 0]] },
  ],
  phase1: () => {
    const out = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      const x = -20 + c * 10, z = -10 + r * 9;
      out.push({ key: `I${r}${c}`, code: `P1-${r + 1}${c + 1}`, box: [x - 3.7, 0, z - 2.8, x + 3.7, 1.6, z + 2.8], name: `Phase 1 tank P1-${r + 1}${c + 1}`, kind: `${pick(['Nursery', 'Incubation', 'Larval'])} unit`,
        desc: 'Rectangular tank of the original Phase 1 hatchery, still used for incubation and nursery batches.', stats: [['12 m³', 'Volume'], [`${fmt(12000 + Math.round(R() * 20) * 1000)}`, 'Fish'], ['Phase 1', 'Existing']], live: WQ(26) });
    }
    return out;
  },
  seacages: () => [
    { key: 'fish-hamour', direct: true, noFocus: true, code: 'HAMOUR', media: { img: 'hamour', video: true },
      facts: [['Scientific name', 'Epinephelus coioides'], ['Arabic', 'هامور'], ['Family', 'Groupers · Serranidae'], ['Max. size', 'about 1.2 m'], ['Habitat', 'Coastal reefs, mangroves, estuaries'], ['Diet', 'Fish and crustaceans'], ['Biology', 'Born female, can turn male later in life'], ['At SKMRC', 'Broodstock, nursery focus & restocking']], name: 'Hamour', kind: 'Orange-spotted grouper · Epinephelus coioides',
      desc: 'The most prized fish on Emirati tables. A slow-growing reef predator whose wild stocks in the Gulf are under heavy pressure: hatchery-raised Hamour is at the heart of SKMRC restocking and of UAE food security.',
      stats: [['Priority', 'Restocking species'], ['Reef', 'Habitat'], ['20 M', 'Fry target 2026']], live: [['Avg. weight in cage', 640, 3, 'g', 0], ['Feeding response', 92, 2, '%', 0]] },
    { key: 'fish-shaari', direct: true, noFocus: true, code: 'SHAARI', media: { img: 'shaari' },
      facts: [['Scientific name', 'Lethrinus nebulosus'], ['Arabic', 'شعري'], ['Family', 'Emperors · Lethrinidae'], ['Max. size', 'about 85 cm'], ['Habitat', 'Seagrass beds and sand near reefs'], ['Diet', 'Crabs, molluscs, sea urchins'], ['At SKMRC', 'Broodstock species']], name: 'Shaari', kind: 'Spangled emperor · Lethrinus nebulosus',
      desc: 'A silvery-olive emperor of seagrass beds and coral reefs, one of the best-loved fish in UAE markets and part of the SKMRC broodstock programme.',
      stats: [['Seagrass', '& reefs'], ['Broodstock', 'At SKMRC'], ['Popular', 'Local market']], live: [['Avg. weight in cage', 410, 3, 'g', 0]] },
    { key: 'fish-hamrah', direct: true, noFocus: true, code: 'HAMRAH', media: { img: 'hamrah' },
      facts: [['Common name', 'Red snapper'], ['Arabic', 'حمرة'], ['Family', 'Snappers · Lutjanidae'], ['Habitat', 'Rocky and coral reefs'], ['Diet', 'Fish and crustaceans'], ['At SKMRC', 'Red snapper: current nursery focus']], name: 'Hamrah', kind: 'Red snapper',
      desc: 'A bright red snapper of Gulf reefs, valued for its firm white flesh. Red snapper is one of the current nursery focus species at SKMRC.',
      stats: [['Red snapper', 'Family'], ['Nursery', 'Focus species'], ['Reef', 'Habitat']], live: [['Avg. weight in cage', 380, 3, 'g', 0]] },
    { key: 'fish-ummdrais', direct: true, noFocus: true, code: 'UMM DRAIS', media: { img: 'ummdrais' },
      facts: [['Common name', 'Reef snapper'], ['Family', 'Snappers · Lutjanidae'], ['Habitat', 'Gulf reefs'], ['Market', 'Valued in local fish markets'], ['At SKMRC', 'Grow-out candidate']], name: 'Umm Drais', kind: 'Gulf reef snapper',
      desc: 'A deep-bodied red reef fish of the Gulf, appreciated in local fish markets and a candidate species for diversification of the grow-out programme.',
      stats: [['Reef', 'Habitat'], ['Local', 'Market'], ['Grow-out', 'Candidate']], live: [['Avg. weight in cage', 450, 3, 'g', 0]] },
    { key: 'stock', code: 'SC-07', box: [-15, -9, -15, 15, 11, 15], name: 'Sea cage SC-07', kind: 'Phase 4 · open-sea grow-out', 
    
    desc: 'Fingerlings from the hatchery grow here to market size in natural Gulf water, fed from the work boat and monitored by underwater cameras.',
    stats: [['25 m', 'Diameter'], ['12 m', 'Net depth'], [`${fmt(42000)}`, 'Fish']], live: [['Current', 0.18, 0.02, 'm/s', 2], ['Water temp.', 27.4, 0.2, '°C', 1]] }],
  visitor: () => {
    const ex = ['Restocking the Gulf', 'Hammour', 'From egg to fingerling', 'Food security', 'Cobia', 'Live feed'];
    const out = [{ key: 'aq', code: 'AQ', box: [-6.6, 0, -6.6, 6.6, 11, 6.6], name: 'Living aquarium', kind: '360° cylinder · native species',
      desc: 'A 10-metre cylindrical aquarium at the heart of the visitor centre, showing native Gulf species raised in the hatchery.',
      stats: [['180 m³', 'Volume'], ['12', 'Species'], ['360°', 'View']], live: [['Water temp.', 26.5, 0.2, '°C', 1], ['Visitors today', 148, 2, '', 0]] }];
    ex.forEach((t, i) => { const a = -0.6 + i * 0.42 + Math.PI, x = Math.cos(a) * 18, z = Math.sin(a) * 18;
      out.push({ key: 'ex' + i, code: 'EX-' + (i + 1), box: [x - 2.2, 0, z - 2.2, x + 2.2, 5.4, z + 2.2], name: t, kind: 'Exhibition panel',
        desc: `Interactive panel of the exhibition "The Gulf": ${t.toLowerCase()} explained for schools and visitors, with video and touch content.`,
        stats: [['Touch', 'Screen'], ['EN · AR', 'Languages'], ['3 min', 'Story']] }); });
    out.push({ key: 'desk', code: 'RX', box: [10.5, 0, 1.5, 19.5, 2.4, 10.5], name: 'Welcome desk', kind: 'Tours & bookings', desc: 'Starting point for guided tours, school visits and partner meetings.', stats: [['Daily', 'Tours'], ['Schools', 'Programmes'], ['Free', 'Entry']] });
    return out;
  },
};
export function roomItems(id) { return ROOMS[id] ? ROOMS[id]() : []; }
