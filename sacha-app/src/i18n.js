import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        lots: "Lotes Activos",
        legal: "Legal Japón (特定商取引法)",
        contact: "Habla con nosotros"
      },
      hero: {
        tagline: "De las montañas colombianas a tu taza en Tokio",
        title: "Café de Especialidad",
        subtitle: "El Primer Acto de Maestría del Día",
        description: "Sach'a es el vínculo honesto entre quien cultiva con rigor en las montañas de Colombia y quien prepara con presencia e intención en Tokio. Una cadena justa, transparente y sin atajos.",
        cta_line: "Contáctanos",
        cta_lots: "Explorar Lotes Activos"
      },
      philosophy: {
        card1_title: "Kaizen en Taza (改善)",
        card1_desc: "La maestría personal se construye con pequeñas decisiones conscientes repetidas cada mañana con disciplina y paciencia.",
        card2_title: "Cadena Honesta & Trazable",
        card2_desc: "Transparencia técnica total. Cada empaque identifica la finca, la variedad, el método de beneficio y el nombre del caficultor.",
        card3_title: "Comunidad de Co-creación",
        card3_desc: "Nuestra comunidad en Japón participa activamente opinando y eligiendo los próximos micro-lotes a importar."
      },
      lotsSection: {
        badge: "Microlotes en Circulación",
        title: "Lotes de Origen Verificables",
        ctaLine: "Consultar disponibilidad vía chat"
      },
      lot: {
        code: "LOTE COL-01",
        farm: "Finca Villa Sol",
        producer: "Juan Serna",
        region: "Tapartó, Antioquia, Colombia",
        process: "Natural",
        variety: "COL-01",
        format: "Caja de 7 Drip Bags",
        notesTitle: "Notas de Cata",
        notes: ["Chocolate Dulce", "Frutas Tropicales", "Frutos Rojos", "Frutas Amarillas"],
        btnTraceability: "Ver Ficha de Trazabilidad",
        modalDesc: "Ficha técnica de origen. Cultivado por Juan Serna en Tapartó, Antioquia, Colombia y procesado bajo el método Natural.",
        modalId: "Identificador",
        modalProducer: "Productor",
        modalOrigin: "Origen",
        modalVariety: "Variedad",
        modalProcess: "Proceso"
      },
      ritual: {
        badge: "Ritual Consciente",
        title: "Guía & Temporizador V60",
        description: "La preparación precisa del Lote COL-01 resalta sus notas de chocolate dulce, frutos rojos y frutas amarillas. Acompaña tu vertido a 93°C con este temporizador.",
        step1: "01. Blooming / Pre-infusión (40g agua)",
        step2: "02. Primer Vertido Circular (120g agua)",
        step3: "03. Extracción Final (250g agua)",
        btnStart: "Iniciar Ritual",
        btnPause: "Pausar",
        btnReset: "Reiniciar"
      },
      footer: {
        description: "Conectando la riqueza de las montañas colombianas con la filosofía japonesa Kaizen. Transparencia, origen y comunidad.",
        nav_title: "Navegación",
        contact_title: "Contacto Rápido",
        social_title: "Redes Sociales",
        scan_qr: "Habla con nosotros",
        rights: "Todos los derechos reservados."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        lots: "Active Lots",
        legal: "Japan Legal (Tokushoho)",
        contact: "Contact us"
      },
      hero: {
        tagline: "From Colombian mountains to your cup in Tokyo",
        title: "Specialty Coffee",
        subtitle: "The First Act of Mastery of the Day",
        description: "Sach'a is the honest bond between those who cultivate with rigor in Colombia and those who brew with intention in Tokyo. A fair, transparent chain without shortcuts.",
        cta_line: "Get in touch",
        cta_lots: "Explore Active Lots"
      },
      philosophy: {
        card1_title: "Kaizen in a Cup (改善)",
        card1_desc: "Personal mastery is built through small conscious decisions repeated every morning with discipline and patience.",
        card2_title: "Honest & Traceable Chain",
        card2_desc: "Total technical transparency. Every package identifies the farm, variety, processing method, and producer's name.",
        card3_title: "Co-creation Community",
        card3_desc: "Our community in Japan actively participates by reviewing and choosing the next micro-lots to import."
      },
      lotsSection: {
        badge: "Micro-lots in Circulation",
        title: "Verifiable Origin Lots",
        ctaLine: "Check availability via chat"
      },
      lot: {
        code: "LOT COL-01",
        farm: "Villa Sol Farm",
        producer: "Juan Serna",
        region: "Tapartó, Antioquia, Colombia",
        process: "Natural",
        variety: "COL-01",
        format: "Box of 7 Drip Bags",
        notesTitle: "Tasting Notes",
        notes: ["Sweet Chocolate", "Tropical Fruits", "Red Fruits", "Yellow Fruits"],
        btnTraceability: "View Traceability Sheet",
        modalDesc: "Origin technical data sheet. Cultivated by Juan Serna in Tapartó, Antioquia, Colombia and processed under the Natural method.",
        modalId: "Identifier",
        modalProducer: "Producer",
        modalOrigin: "Origin",
        modalVariety: "Variety",
        modalProcess: "Process"
      },
      ritual: {
        badge: "Mindful Ritual",
        title: "V60 Guide & Timer",
        description: "Precise brewing of Lot COL-01 highlights sweet chocolate, red berries, and yellow fruit notes. Accompany your 93°C pour with this timer.",
        step1: "01. Blooming / Pre-infusion (40g water)",
        step2: "02. First Circular Pour (120g water)",
        step3: "03. Final Extraction (250g water)",
        btnStart: "Start Ritual",
        btnPause: "Pause",
        btnReset: "Reset"
      },
      footer: {
        description: "Connecting Colombian coffee richness with Japanese Kaizen philosophy. Transparency, origin, and community.",
        nav_title: "Navigation",
        contact_title: "Quick Contact",
        social_title: "Social Media",
        scan_qr: "Contact us",
        rights: "All rights reserved."
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: "ホーム",
        lots: "取扱ロット",
        legal: "特定商取引法に基づく表記",
        contact: "お問い合わせ"
      },
      hero: {
        tagline: "コロンビアの山々から東京の1杯へ",
        title: "スペシャルティコーヒー",
        subtitle: "1日を極める最初の儀式",
        description: "Sach'aは、コロンビアの厳格な生産者と東京で誠実にコーヒーを淹れる人々を繋ぐ純粋な架け橋です。近道のない公正で透明なチェーン。",
        cta_line: "お問い合わせ",
        cta_lots: "ロットを見る"
      },
      philosophy: {
        card1_title: "1杯の改善 (Kaizen)",
        card1_desc: "個人の熟達は、毎朝規律と忍耐をもって繰り返される小さな意識的な選択から構築されます。",
        card2_title: "誠実で追跡可能なサプライチェーン",
        card2_desc: "完全な技術的透明性。各パッケージには農園、品種、精製方法、生産者の名前が明記されています。",
        card3_title: "共創コミュニティ",
        card3_desc: "日本のコミュニティは、次に輸入するマイクロロットの評価や選定に積極的に参加しています。"
      },
      lotsSection: {
        badge: "現在取扱中のマイクロロット",
        title: "原産地検証済みロット",
        ctaLine: "チャットで在庫を確認"
      },
      lot: {
        code: "ロット COL-01",
        farm: "ヴィラ・ソル農園",
        producer: "フアン・セルナ",
        region: "コロンビア・アンティオキア県タパルト",
        process: "ナチュラル",
        variety: "COL-01",
        format: "ドリップバッグ7個入りボックス",
        notesTitle: "テイスティングノート",
        notes: ["スウィートチョコレート", "トロピカルフルーツ", "レッドフルーツ", "イエローフルーツ"],
        btnTraceability: "トレーサビリティ詳細",
        modalDesc: "原産地テクニカルデータシート。コロンビア・アンティオキア県タパルトでフアン・セルナによって栽培され、ナチュラル製法で処理されています。",
        modalId: "識別ID",
        modalProducer: "生産者",
        modalOrigin: "原産地",
        modalVariety: "品種",
        modalProcess: "精製方法"
      },
      ritual: {
        badge: "マインドフル・リチュアル",
        title: "V60ガイド＆タイマー",
        description: "ロットCOL-01の精密な抽出により、スウィートチョコレートやレッドフルーツの風味が引き立ちます。93℃のお湯でタイマーに合わせて抽出してください。",
        step1: "01. 蒸らし / プレインフュージョン (お湯40g)",
        step2: "02. 1回目のお湯注ぎ (お湯120g)",
        step3: "03. 最終抽出 (お湯250g)",
        btnStart: "儀式を開始",
        btnPause: "一時停止",
        btnReset: "リセット"
      },
      footer: {
        description: "コロンビアの山々の恵みと日本の改善（Kaizen）精神を融合。透明性、原産地、コミュニティ。",
        nav_title: "ナビゲーション",
        contact_title: "クイックコンタクト",
        social_title: "ソーシャルメディア",
        scan_qr: "お問い合わせ",
        rights: "無断転載を禁じます。"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;