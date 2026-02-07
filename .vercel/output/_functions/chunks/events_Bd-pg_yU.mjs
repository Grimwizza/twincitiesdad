const localEvents = [
  // --- JANUARY 2026 ---
  // Special & Featured Events
  {
    id: "mn-ice-castles",
    title: "Minnesota Ice Castles",
    description: "Explore the magical frozen fortress featuring ice slides, caverns, tunnels, and crawl spaces. A winter favorite.",
    date: /* @__PURE__ */ new Date("2026-01-26T16:00:00"),
    location: "Maple Grove",
    type: "community",
    region: "north",
    kidFriendly: "yes",
    price: "$15+",
    link: "https://icecastles.com/minnesota"
  },
  {
    id: "winter-carnival-kickoff",
    title: "Saint Paul Winter Carnival",
    description: 'The "Coolest Celebration on Earth" returns! Ice sculptures, parades, and family fun in Rice Park.',
    date: /* @__PURE__ */ new Date("2026-01-27T10:00:00"),
    location: "Rice Park, St. Paul",
    type: "community",
    region: "stpaul",
    kidFriendly: "yes",
    price: "Free",
    link: "https://wintercarnival.com"
  },
  {
    id: "guthrie-somewhere",
    title: 'Theater: "Somewhere"',
    description: "A compelling production at the Guthrie Theater, running through early February.",
    date: /* @__PURE__ */ new Date("2026-01-27T19:30:00"),
    location: "Guthrie Theater",
    type: "arts",
    region: "mpls",
    kidFriendly: "caution",
    price: "$30+",
    link: "https://www.guthrietheater.org"
  },
  {
    id: "protest-ice-1",
    title: "Justice for Alex Pretti: Community Gathering",
    description: "Community gathering and vigil demanding justice for Alex Pretti. Peaceful demonstration.",
    date: /* @__PURE__ */ new Date("2026-01-27T17:00:00"),
    location: "Hennepin County Government Center",
    type: "protest",
    region: "mpls",
    kidFriendly: "caution"
    // No link - community organized event without official page
  },
  {
    id: "music-warm-up",
    title: "Warm Up Winter: Local Band Showcase",
    description: "A cozy evening featuring three up-and-coming Twin Cities indie folk bands.",
    date: /* @__PURE__ */ new Date("2026-01-28T19:30:00"),
    location: "7th St Entry",
    type: "concert",
    region: "mpls",
    price: "$12",
    kidFriendly: "caution",
    link: "https://first-avenue.com"
  },
  {
    id: "concert-slander",
    title: "SLANDER",
    description: "Electronic music duo SLANDER brings their high-energy show to The Armory.",
    date: /* @__PURE__ */ new Date("2026-01-30T20:00:00"),
    location: "The Armory",
    type: "concert",
    region: "mpls",
    price: "$55+",
    kidFriendly: "no",
    link: "https://armorymn.com"
  },
  {
    id: "festival-snowflake",
    title: "62nd Annual Snowflake Days",
    description: "Coon Rapids winter celebration with parades, cookies, and family fun.",
    date: /* @__PURE__ */ new Date("2026-01-30T10:00:00"),
    location: "Coon Rapids",
    type: "community",
    region: "north",
    kidFriendly: "yes",
    price: "Free",
    link: "https://www.coonrapidsmn.gov"
  },
  {
    id: "art-shanty",
    title: "Art Shanty Projects",
    description: "Standard on-ice (or on-shore) village of artist-created shanties and performances.",
    date: /* @__PURE__ */ new Date("2026-01-31T10:00:00"),
    location: "Bde Maka Ska / Lake Harriet",
    type: "arts",
    region: "mpls",
    kidFriendly: "yes",
    price: "Donation",
    link: "https://artshantyprojects.org"
  },
  // --- FEBRUARY 2026 ---
  {
    id: "concert-atmosphere",
    title: "Atmosphere",
    description: "Minnesota hip-hop legends Atmosphere return to First Avenue.",
    date: /* @__PURE__ */ new Date("2026-02-01T20:00:00"),
    location: "First Avenue",
    type: "concert",
    region: "mpls",
    price: "$35",
    kidFriendly: "caution",
    link: "https://first-avenue.com"
  },
  {
    id: "family-doggie-depot",
    title: "Doggie Depot at Union Depot",
    description: "Celebrate the Winter Carnival with your pup! Vendors, crowning of the Canine King & Queen.",
    date: /* @__PURE__ */ new Date("2026-02-01T10:00:00"),
    location: "Union Depot, St. Paul",
    type: "community",
    region: "stpaul",
    kidFriendly: "yes",
    price: "Free",
    link: "https://www.uniondepot.org"
  },
  {
    id: "theater-chicago-closing",
    title: "Chicago - The Musical (Final Weekend)",
    description: "Last chance to catch the dazzling Broadway hit at the Orpheum.",
    date: /* @__PURE__ */ new Date("2026-02-01T14:00:00"),
    location: "Orpheum Theatre",
    type: "arts",
    region: "mpls",
    price: "$45+",
    kidFriendly: "caution",
    link: "https://hennepintheatretrust.org"
  },
  {
    id: "wild-game",
    title: "Minnesota Wild Home Game",
    description: "Cheer on the Wild at Xcel Energy Center!",
    date: /* @__PURE__ */ new Date("2026-02-02T19:00:00"),
    location: "Xcel Energy Center",
    type: "sports",
    region: "stpaul",
    price: "$50+",
    kidFriendly: "yes",
    link: "https://www.nhl.com/wild"
  },
  {
    id: "orch-pink-floyd",
    title: "Music of Pink Floyd w/ MN Orchestra",
    description: "Experience the psychedelic rock classics performed by a full orchestra.",
    date: /* @__PURE__ */ new Date("2026-02-06T20:00:00"),
    location: "Orchestra Hall",
    type: "arts",
    region: "mpls",
    price: "$40+",
    kidFriendly: "yes",
    link: "https://minnesotaorchestra.org"
  },
  {
    id: "loppet-festival",
    title: "City of Lakes Loppet Winter Festival",
    description: "The big ski festival! Watch the Luminary Loppet or cheer on the skiers.",
    date: /* @__PURE__ */ new Date("2026-02-07T09:00:00"),
    location: "Theodore Wirth Park",
    type: "sports",
    region: "mpls",
    kidFriendly: "yes",
    price: "Free to Watch",
    link: "https://www.loppet.org"
  },
  {
    id: "monster-jam",
    title: "Monster Jam",
    description: "Big trucks, big noise, big fun. The world's premier monster truck series.",
    date: /* @__PURE__ */ new Date("2026-02-07T19:00:00"),
    location: "U.S. Bank Stadium",
    type: "sports",
    region: "mpls",
    price: "$25+",
    kidFriendly: "yes",
    link: "https://www.usbankstadium.com"
  },
  {
    id: "theater-blue-man",
    title: "Blue Man Group",
    description: "Comedy, theater, rock concert and dance party all rolled into one.",
    date: /* @__PURE__ */ new Date("2026-02-13T19:30:00"),
    location: "State Theatre",
    type: "arts",
    region: "mpls",
    price: "$40+",
    kidFriendly: "yes",
    link: "https://hennepintheatretrust.org"
  },
  {
    id: "event-galentines",
    title: "Galentine's Day Market",
    description: "Shop local makers and celebrate with your besties at this pop-up market.",
    date: /* @__PURE__ */ new Date("2026-02-14T11:00:00"),
    location: "Minneapolis Cider Co",
    type: "community",
    region: "mpls",
    kidFriendly: "yes",
    price: "Free Entry"
    // No link - community organized event without official page
  },
  {
    id: "theater-les-mis",
    title: "Les Misérables",
    description: "The world's most popular musical returns to Minneapolis.",
    date: /* @__PURE__ */ new Date("2026-02-17T19:30:00"),
    location: "Orpheum Theatre",
    type: "arts",
    region: "mpls",
    price: "$50+",
    kidFriendly: "yes",
    link: "https://hennepintheatretrust.org"
  },
  {
    id: "concert-conan",
    title: "Conan Gray",
    description: "Pop sensation Conan Gray live at Target Center.",
    date: /* @__PURE__ */ new Date("2026-02-19T19:30:00"),
    location: "Target Center",
    type: "concert",
    region: "mpls",
    price: "$49+",
    kidFriendly: "yes",
    link: "https://targetcenter.com"
  },
  {
    id: "event-polar-plunge",
    title: "Anoka County Polar Plunge",
    description: "Freezin' for a reason! Watch or join the plunge to support Special Olympics MN.",
    date: /* @__PURE__ */ new Date("2026-02-28T10:00:00"),
    location: "Crooked Lake, Coon Rapids",
    type: "community",
    region: "north",
    kidFriendly: "yes",
    price: "Donation",
    link: "https://www.plungemn.org"
  }
];

export { localEvents as l };
