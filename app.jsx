import React, { useState } from 'react';

const LOGO_URL = 'https://santpatrici.es/wp-content/uploads/sites/98/2026/02/Logo-8.png';

const translations = {
  es: {
    label: 'ES',
    carta: 'CARTA',
    hours: '11:00h - 20:30h',
    drinks: 'BEBIDAS',
    wines: 'VINOS',
    snacks: 'SNACKS',
    tapas: 'TAPAS',
    glass: 'COPA',
    bottle: 'BOTELLA',
    allergies: '*Consulte a nuestro personal sobre alérgenos',
    drinksItems: [
      { name: 'Coca-Cola / Coca Cola Zero', price: '3,40 €' },
      { name: 'Fanta Naranja / Limón', price: '3,40 €' },
      { name: 'Sprite', price: '3,40 €' },
      { name: 'Estrella Galicia', price: '4,50 €', gap: true },
      { name: 'Estrella Galicia 0.0 Tostada', price: '4,00 €' },
      { name: 'Grahame Pearce Lager', price: '4,50 €' },
      { name: 'Café', price: '3,00 €', gap: true },
      { name: 'Té / Infusión', price: '3,00 €' },
      { name: 'Agua', price: '3,00 €' },
    ],
    winesGlass: [
      { name: 'Es Moll Rosado', glass: '4,50 €', bottle: '18,00 €' },
      { name: 'Es Rupit Blanco', glass: '5,00 €', bottle: '19,00 €' },
      { name: 'Sa Vermella Tinto', glass: '5,50 €', bottle: '22,00 €' },
      { name: 'Somni Blanco', glass: '6,00 €', bottle: '25,00 €' },
    ],
    winesBottle: [
      { name: 'Torralbenc Rosado', bottle: '24,20 €' },
      { name: 'Torralbenc Tinto', bottle: '31,40 €' },
      { name: 'Sa Caterina Rosado', bottle: '30,90 €' },
      { name: 'Sa Caterina Blanco', bottle: '38,00 €' },
      { name: 'Sa Cudia Blanco', bottle: '34,90 €' },
    ],
    snacksItems: [
      { name: 'Aceitunas rellenas', price: '4,40 €' },
      { name: 'Mejillones en escabeche', price: '5,80 €' },
      { name: 'Berberechos al natural', price: '11,40 €' },
      { name: 'Gilda de anchoa (unidad)', price: '2,00 €' },
      { name: 'Bolsa de patatas Pique clásicas', price: '2,50 €' },
      { name: 'Vaso de gazpacho tradicional', price: '4,50 €', gap: true },
      { name: 'Sandwich tostado de pavo y queso', price: '8,00 €' },
      { name: 'Sandwich tostado de jamón y queso', price: '9,00 €' },
      { name: 'Sandwich tostado sobrasada, queso y miel', price: '9,00 €' },
    ],
    tapasItems: [
      { name: 'Pan de cristal con tomate', price: '6,00 €', desc: 'Pan de cristal con tomate fresco rallado, aceite de oliva virgen extra y sal.' },
      { name: 'Croquetas de jamón ibérico', price: '9,00 €' },
      { name: 'Croquetas de boletus y trufa', price: '9,00 €' },
      { name: 'Patatas Bravas', price: '8,50 €' },
      { name: 'Tabla de quesos de la Finca', price: '16,00 €', desc: 'Quesos de la finca elaborados con leche cruda de vaca: semicurado, curado, añejo y variedades gourmet aromatizadas.' },
      { name: 'Tabla de jamón ibérico', price: '18,00 €', desc: 'Jamón ibérico de curación lenta.' },
      { name: 'Tabla Sant Patrici', price: '20,00 €', desc: 'Quesos de la finca y embutidos típicos de Menorca.' },
      { name: 'Ensalada de la huerta', price: '11,00 €', desc: 'Elaborada con ingredientes de temporada.' },
      { name: 'Ensalada Sant Patrici', price: '12,00 €', desc: 'Tomate con queso fresco y copos de queso añejo de la finca, tomillo, aceite de oliva virgen extra y pimienta.' },
      { name: 'Ensalada de pera y queso curado', price: '12,00 €', desc: 'Mezclum de hojas frescas con pera, nueces y queso curado de la finca, aliñado con vinagreta suave de miel.' },
    ],
  },
  en: {
    label: 'EN',
    carta: 'MENU',
    hours: '11:00h - 20:30h',
    drinks: 'DRINKS',
    wines: 'WINES',
    snacks: 'SNACKS',
    tapas: 'TAPAS',
    glass: 'GLASS',
    bottle: 'BOTTLE',
    allergies: '*Ask our staff for allergies',
    drinksItems: [
      { name: 'Coca-Cola / Coca Cola Zero', price: '3,40 €' },
      { name: 'Fanta Orange / Lemon', price: '3,40 €' },
      { name: 'Sprite', price: '3,40 €' },
      { name: 'Estrella Galicia', price: '4,50 €', gap: true },
      { name: 'Estrella Galicia 0.0 Tostada', price: '4,00 €' },
      { name: 'Grahame Pearce Lager', price: '4,50 €' },
      { name: 'Coffee', price: '3,00 €', gap: true },
      { name: 'Tea / Infusion', price: '3,00 €' },
      { name: 'Water', price: '3,00 €' },
    ],
    winesGlass: [
      { name: 'Es Moll Rosé', glass: '4,50 €', bottle: '18,00 €' },
      { name: 'Es Rupit White', glass: '5,00 €', bottle: '19,00 €' },
      { name: 'Sa Vermella Red', glass: '5,50 €', bottle: '22,00 €' },
      { name: 'Somni White', glass: '6,00 €', bottle: '25,00 €' },
    ],
    winesBottle: [
      { name: 'Torralbenc Rosé', bottle: '24,20 €' },
      { name: 'Torralbenc Red', bottle: '31,40 €' },
      { name: 'Sa Caterina Rosé', bottle: '30,90 €' },
      { name: 'Sa Caterina White', bottle: '38,00 €' },
      { name: 'Sa Cudia White', bottle: '34,90 €' },
    ],
    snacksItems: [
      { name: 'Olives stuffed with anchovies', price: '4,40 €' },
      { name: 'Pickled mussels', price: '5,80 €' },
      { name: 'Natural cockles', price: '11,40 €' },
      { name: 'Anchovie gildas (unit)', price: '2,00 €' },
      { name: 'Pique potato chips', price: '2,50 €' },
      { name: 'Glass of traditional gazpacho', price: '4,50 €', gap: true },
      { name: 'Grilled turkey and cheese sandwich', price: '8,00 €' },
      { name: 'Grilled ham and cheese sandwich', price: '9,00 €' },
      { name: 'Grilled sobrasada, cheese and honey sandwich', price: '9,00 €' },
    ],
    tapasItems: [
      { name: 'Crystal bread with tomato', price: '6,00 €', desc: 'Toasted crystal bread with fresh shredded tomato, extra virgin olive oil and salt.' },
      { name: 'Iberian ham croquettes', price: '9,00 €' },
      { name: 'Boletus and truffle croquettes', price: '9,00 €' },
      { name: 'Patatas bravas', price: '8,50 €' },
      { name: 'Cheese board from the Finca', price: '16,00 €', desc: 'Cheeses from the finca, elaborated with raw cow milk: semi-curated, curated, aged and scented gourmet varieties.' },
      { name: 'Iberian ham board', price: '18,00 €', desc: 'Slow curation iberic ham.' },
      { name: 'Sant Patrici board', price: '20,00 €', desc: 'Cheeses from the farm and Menorcan charcuterie.' },
      { name: 'Vegetable garden salad', price: '11,00 €', desc: 'Prepared with seasonal ingredients.' },
      { name: 'Sant Patrici salad', price: '12,00 €', desc: 'Tomato, fresh and ancient cheese slices, thyme, olive oil and black pepper.' },
      { name: 'Pear and curated cheese salad', price: '12,00 €', desc: 'Fresh lettuce mesclum with pear, nuts and curated cheese, seasoned with a soft honey vinaigrette.' },
    ],
  },
  fr: {
    label: 'FR',
    carta: 'CARTE',
    hours: '11:00h - 20:30h',
    drinks: 'BOISSONS',
    wines: 'VINS',
    snacks: 'SNACKS',
    tapas: 'TAPAS',
    glass: 'VERRE',
    bottle: 'BOUTEILLE',
    allergies: '*Demandez à notre personnel pour les allergies',
    drinksItems: [
      { name: 'Coca-Cola / Coca Cola Zero', price: '3,40 €' },
      { name: 'Fanta Orange / Lemon', price: '3,40 €' },
      { name: 'Sprite', price: '3,40 €' },
      { name: 'Estrella Galicia', price: '4,50 €', gap: true },
      { name: 'Estrella Galicia 0.0 Tostada', price: '4,00 €' },
      { name: 'Grahame Pearce Lager', price: '4,50 €' },
      { name: 'Café', price: '3,00 €', gap: true },
      { name: 'Thé / Infusion', price: '3,00 €' },
      { name: 'Eau', price: '3,00 €' },
    ],
    winesGlass: [
      { name: 'Es Moll Rosé', glass: '4,50 €', bottle: '18,00 €' },
      { name: 'Es Rupit Blanc', glass: '5,00 €', bottle: '19,00 €' },
      { name: 'Sa Vermella Rouge', glass: '5,50 €', bottle: '22,00 €' },
      { name: 'Somni Blanc', glass: '6,00 €', bottle: '25,00 €' },
    ],
    winesBottle: [
      { name: 'Torralbenc Rosé', bottle: '24,20 €' },
      { name: 'Torralbenc Rouge', bottle: '31,40 €' },
      { name: 'Sa Caterina Rosé', bottle: '30,90 €' },
      { name: 'Sa Caterina Blanc', bottle: '38,00 €' },
      { name: 'Sa Cudia Blanc', bottle: '34,90 €' },
    ],
    snacksItems: [
      { name: 'Olives farcies aux anchois', price: '4,40 €' },
      { name: 'Moules en conserve', price: '5,80 €' },
      { name: 'Coques au naturel', price: '11,40 €' },
      { name: 'Gildas d\u2019anchois (unité)', price: '2,00 €' },
      { name: 'Pique chips', price: '2,50 €' },
      { name: 'Verre de gazpacho traditionnel', price: '4,50 €', gap: true },
      { name: 'Sandwich grillé de dinde et fromage', price: '8,00 €' },
      { name: 'Sandwich grillé de jambon et fromage', price: '9,00 €' },
      { name: 'Sandwich grillé de sobrasada, fromage et miel', price: '9,00 €' },
    ],
    tapasItems: [
      { name: 'Pain de cristal et tomate', price: '6,00 €', desc: 'Pain de cristal avec tomate râpée, huile d\u2019olive extra vierge et du sel.' },
      { name: 'Croquettes de jambon ibérique', price: '9,00 €' },
      { name: 'Croquette de boletus et truffe', price: '9,00 €' },
      { name: 'Patatas bravas', price: '8,50 €' },
      { name: 'Plateau de fromage de la Finca', price: '16,00 €', desc: 'Fromages de la ferme préparés au lait cru de vache : semi-affiné, affiné, vieilli et variétés gourmet aromatisées.' },
      { name: 'Plateau de jambon ibérique', price: '18,00 €', desc: 'Jambon ibérique de lente maturation.' },
      { name: 'Plateau Sant Patrici', price: '20,00 €', desc: 'Fromages de la ferme et saucissons typiques de Minorque.' },
      { name: 'Salade de potager', price: '11,00 €', desc: 'Faite avec des ingrédients de saison.' },
      { name: 'Salade Saint Patrici', price: '12,00 €', desc: 'Tomate avec du fromage frais et des flocons de fromage affiné 12 mois, huile d\u2019olive extra vierge et poivre.' },
      { name: 'Salade de poire et fromage affiné', price: '12,00 €', desc: 'Mix de salades fraîches avec poire, noix et fromage affiné 5 mois et une vinaigrette de miel.' },
    ],
  },
};

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-light tracking-wide text-emerald-800 mb-5">
      {children}
    </h2>
  );
}

function SimpleItem({ name, price, gap }) {
  return (
    <div className={`flex justify-between items-baseline gap-4 text-emerald-800 ${gap ? 'mt-4' : 'mt-1.5'}`}>
      <span className="font-light">{name}</span>
      <span className="flex-1 border-b border-dotted border-emerald-200 mx-1 mb-1" />
      <span className="font-light whitespace-nowrap">{price}</span>
    </div>
  );
}

function DescItem({ name, price, desc }) {
  return (
    <div className="mt-4 text-emerald-800">
      <div className="flex justify-between items-baseline gap-4">
        <span className="font-normal">{name}</span>
        <span className="flex-1 border-b border-dotted border-emerald-200 mx-1 mb-1" />
        <span className="font-light whitespace-nowrap">{price}</span>
      </div>
      {desc && <p className="text-sm text-emerald-600 font-light mt-1 leading-snug">{desc}</p>}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('es');
  const [logoError, setLogoError] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-800">
      {/* Language selector */}
      <div className="sticky top-0 z-10 bg-stone-50/90 backdrop-blur border-b border-emerald-100">
        <div className="max-w-3xl mx-auto flex justify-center gap-2 py-3 px-4">
          {Object.keys(translations).map((key) => (
            <button
              key={key}
              onClick={() => setLang(key)}
              className={`px-4 py-1.5 rounded-full text-sm tracking-wide transition-colors ${
                lang === key
                  ? 'bg-emerald-800 text-stone-50'
                  : 'bg-transparent text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              {translations[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-8 sm:py-12">
        {/* Header */}
        <header className="flex flex-col items-center text-center mb-12">
          {logoError ? (
            <div className="flex flex-col items-center text-emerald-800">
              <div className="text-xs tracking-widest font-light">1918</div>
              <div className="text-2xl sm:text-3xl tracking-widest font-light mt-1">SANT PATRICI</div>
              <div className="text-xs tracking-[0.4em] font-light mt-1">MENORCA</div>
            </div>
          ) : (
            <img
              src={LOGO_URL}
              alt="Sant Patrici Menorca"
              className="w-48 sm:w-56 h-auto"
              onError={() => setLogoError(true)}
            />
          )}
          <div className="mt-8 text-3xl font-light tracking-widest">{t.carta}</div>
          <div className="text-xl font-light tracking-wide mt-1">{t.hours}</div>
        </header>

        {/* Drinks */}
        <section className="mb-12">
          <SectionTitle>{t.drinks}</SectionTitle>
          <div>
            {t.drinksItems.map((item, i) => (
              <SimpleItem key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Wines */}
        <section className="mb-12">
          <SectionTitle>{t.wines}</SectionTitle>
          <div className="flex justify-end gap-6 text-xs tracking-widest text-emerald-400 mb-2">
            <span className="w-16 text-right">{t.glass}</span>
            <span className="w-16 text-right">{t.bottle}</span>
          </div>
          <div>
            {t.winesGlass.map((w, i) => (
              <div key={i} className="flex items-baseline gap-4 mt-1.5">
                <span className="font-light flex-1">{w.name}</span>
                <span className="w-16 text-right font-light">{w.glass}</span>
                <span className="w-16 text-right font-light">{w.bottle}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {t.winesBottle.map((w, i) => (
              <div key={i} className="flex items-baseline gap-4 mt-1.5">
                <span className="font-light flex-1">{w.name}</span>
                <span className="w-16" />
                <span className="w-16 text-right font-light">{w.bottle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tapas */}
        <section className="mb-12">
          <SectionTitle>{t.tapas}</SectionTitle>
          <div>
            {t.tapasItems.map((item, i) => (
              <DescItem key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Snacks */}
        <section className="mb-8">
          <SectionTitle>{t.snacks}</SectionTitle>
          <div>
            {t.snacksItems.map((item, i) => (
              <SimpleItem key={i} {...item} />
            ))}
          </div>
        </section>

        <p className="text-center text-sm italic text-emerald-500 font-light mt-10">
          {t.allergies}
        </p>
      </div>
    </div>
  );
}