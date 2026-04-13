export interface ProductVariant {
  id: string;
  name: string;
  img: string; // Added image placeholder constraint
  sizes?: string;
  packing?: string;
  colors?: string;
  brands: string[];
  description?: string;
}

export interface ProductCategoryData {
  id: string;
  title: string;
  desc: string;
  img: string;
  tag: string;
  variants: ProductVariant[];
}

export const productCategories: ProductCategoryData[] = [
  {
    id: 'house-wires',
    title: 'House Wires',
    desc: 'High-safety wiring solutions for modern homes. Includes various sizes and packing formats from top brands.',
    tag: 'Premium Series',
    img: 'https://picsum.photos/seed/housewires/600/450',
    variants: [
      {
        id: 'rr-q1',
        name: 'RR Q1',
        img: 'https://picsum.photos/seed/rrq1/600/450',
        sizes: '0.75 Sq. mm to 16 Sq. mm',
        packing: '90 Meters Pack',
        colors: 'All Colors Available',
        brands: ['RR KABEL'],
        description: 'Advanced fire retardant wires for residential safety.'
      },
      {
        id: 'rr-fr-hsf',
        name: 'RR FR HSF',
        img: 'https://picsum.photos/seed/rrfrhsf/600/450',
        sizes: '0.75 Sq. mm to 16 Sq. mm',
        packing: '200 Meters Pack',
        colors: 'All Colors Available',
        brands: ['RR KABEL'],
        description: 'Heat resisting fire retardant technology.'
      },
      {
        id: 'rr-fr-lsh',
        name: 'RR FR-LSH',
        img: 'https://picsum.photos/seed/rrfrlsh/600/450',
        sizes: '0.75 Sq. mm to 16 Sq. mm',
        packing: '200 Meters Pack',
        colors: 'All Colors Available',
        brands: ['RR KABEL'],
        description: 'Fire Retardant Low Smoke Halogen wires.'
      },
      {
        id: 'lapp-frlsh',
        name: 'LAPP FRLSH',
        img: 'https://picsum.photos/seed/lappfrlsh/600/450',
        sizes: '0.75 Sq. mm to 16 Sq. mm',
        packing: '90 Meters & 180 Meters Pack',
        colors: 'All Colors Available',
        brands: ['LAPP'],
        description: 'Premium flame retardant low smoke wires from LAPP.'
      }
    ]
  },
  {
    id: 'multi-core',
    title: 'Multi Core Flexible Wires',
    desc: 'Flexible multicore cables for complex machinery, automation, and control circuit applications.',
    tag: 'Precision Control',
    img: 'https://picsum.photos/seed/multicore/600/450',
    variants: [
      {
        id: 'multicore-flex',
        name: 'Multi Core Flexible Wires',
        img: 'https://picsum.photos/seed/multicoreflex/600/450',
        sizes: '0.5 Sq. mm to 300 Sq. mm (Available up to 24-Core)',
        brands: ['RR KABEL', 'LAPP', 'HAVELLS', 'RPG'],
        description: 'Highly flexible multi-core wires suitable for all industrial machines and residential control systems.'
      }
    ]
  },
  {
    id: 'copper-armoured',
    title: 'Copper Armoured & Unarmoured',
    desc: '99.9% pure electrolyte grade copper cables for maximum energy efficiency and minimal power loss.',
    tag: 'High Conductivity',
    img: 'https://picsum.photos/seed/coppercables/600/450',
    variants: [
      {
        id: 'cu-armoured',
        name: 'Copper Armoured Cables',
        img: 'https://picsum.photos/seed/cuarmoured/600/450',
        sizes: '0.5 Sq. mm to 300 Sq. mm',
        brands: ['RR KABEL', 'LAPP', 'HAVELLS', 'RPG'],
      },
      {
        id: 'cu-unarmoured',
        name: 'Copper Unarmoured Cables',
        img: 'https://picsum.photos/seed/cuunarmoured/600/450',
        sizes: '0.5 Sq. mm to 300 Sq. mm',
        brands: ['RR KABEL', 'LAPP', 'HAVELLS', 'RPG'],
      }
    ]
  },
  {
    id: 'aluminium-armoured',
    title: 'Aluminium Armoured & Unarmoured',
    desc: 'Cost-effective transmission solutions. Lightweight and durable for long-distance power distribution.',
    tag: 'Utility Grade',
    img: 'https://picsum.photos/seed/aluminiumcables/600/450',
    variants: [
      {
        id: 'al-armoured',
        name: 'Aluminium Armoured Cables',
        img: 'https://picsum.photos/seed/alarmoured/600/450',
        sizes: 'Available up to 1000 Sq. mm',
        brands: ['RR KABEL', 'LAPP', 'HAVELLS', 'RPG'],
      },
      {
        id: 'al-unarmoured',
        name: 'Aluminium Unarmoured Cables',
        img: 'https://picsum.photos/seed/alunarmoured/600/450',
        sizes: 'Available up to 1000 Sq. mm',
        brands: ['RR KABEL', 'LAPP', 'HAVELLS', 'RPG'],
      }
    ]
  },
  {
    id: 'cat6-rg6',
    title: 'CAT 6 & RG6 Cables',
    desc: 'High-speed networking and communication co-axial cables.',
    tag: 'Communication',
    img: 'https://picsum.photos/seed/networking/600/450',
    variants: [
      {
        id: 'lapp-cat6',
        name: 'CAT 6 Cable',
        img: 'https://picsum.photos/seed/cat6cable/600/450',
        brands: ['LAPP'],
        description: 'High performance networking cable.'
      },
      {
        id: 'rg6-cables',
        name: 'RG6 Co-Axial Cables',
        img: 'https://picsum.photos/seed/rg6cable/600/450',
        brands: ['LAPP', 'RR KABEL'],
        description: 'Ideal for television and video transmission signals.'
      }
    ]
  },
  {
    id: 'submersible',
    title: 'Submersible Cables',
    desc: 'Water resistance cables engineered for deep underwater applications.',
    tag: 'Waterproof',
    img: 'https://picsum.photos/seed/submersible/600/450',
    variants: [
      {
        id: 'submersible-flat',
        name: '3-Core Flat Submersible Cable',
        img: 'https://picsum.photos/seed/submersibleflat/600/450',
        sizes: '1.5 Sq. mm to 35 Sq. mm',
        brands: ['RR KABEL', 'HAVELLS'],
      }
    ]
  },
  {
    id: 'hvac-screened',
    title: 'HVAC Screened Cables',
    desc: 'Shielded cables specifically for HVAC units and variable frequency drives.',
    tag: 'Specialized',
    img: 'https://picsum.photos/seed/hvac/600/450',
    variants: [
      {
        id: 'hvac-cable',
        name: 'HVAC Screened/Shielded Cable',
        img: 'https://picsum.photos/seed/hvaccable/600/450',
        sizes: 'Custom sizes available',
        brands: ['LAPP', 'RR KABEL'],
      }
    ]
  },
  {
    id: 'steel-braided',
    title: 'Steel Braided Cables',
    desc: 'Provide extra mechanical protection for cables used in harsh environments.',
    tag: 'Maximum Durability',
    img: 'https://picsum.photos/seed/braided/600/450',
    variants: [
      {
        id: 'steel-braid',
        name: 'Steel Braided Control Cables',
        img: 'https://picsum.photos/seed/steelbraid/600/450',
        sizes: 'Up to 24 Cores',
        brands: ['LAPP'],
      }
    ]
  },
  {
    id: 'fire-alarm',
    title: 'Fire Alarm & Survival Cables',
    desc: 'Maintains circuit integrity under extreme fire conditions.',
    tag: 'Critical Safety',
    img: 'https://picsum.photos/seed/firealarm/600/450',
    variants: [
      {
        id: 'fire-alarm-cable',
        name: 'Fire Alarm Cables',
        img: 'https://picsum.photos/seed/firealarm/600/450',
        brands: ['LAPP', 'RR KABEL'],
      },
      {
        id: 'fire-survival',
        name: 'Fire Survival Cables',
        img: 'https://picsum.photos/seed/firesurvival/600/450',
        sizes: 'Up to 400 Sq. mm',
        brands: ['RR KABEL', 'LAPP'],
      }
    ]
  },
  {
    id: 'shielded',
    title: 'Shielded Cables',
    desc: 'Prevents electromagnetic interference for sensitive data and control applications.',
    tag: 'Interference Free',
    img: 'https://picsum.photos/seed/shielded/600/450',
    variants: [
      {
        id: 'shielded-control',
        name: 'Shielded Control Cables',
        img: 'https://picsum.photos/seed/shieldedcontrol/600/450',
        brands: ['LAPP', 'RR KABEL'],
      }
    ]
  }
];
