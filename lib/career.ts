export const PHASES = [
  "要件定義",
  "基本設計",
  "詳細設計",
  "実装・単体",
  "結合テスト",
  "総合テスト",
  "保守・運用",
] as const;

export type CareerProject = {
  period: string;
  duration?: string;
  title: string;
  role: string;
  team: string[];
  stack: {
    languages: string[];
    db: string[];
    os: string[];
    tools: string[];
  };
  phases: (typeof PHASES)[number][];
  overview: string;
};

export const careerProjects: CareerProject[] = [
  {
    period: "2025年3月 - 2026年7月",
    duration: "18ヶ月",
    title: "地方自治体・学校向け 校務支援システム 帳票機能リニューアル",
    role: "SE（仕様管理チーム コアメンバー）",
    team: ["PM 5名", "APL開発チーム 40名"],
    stack: {
      languages: ["Java（JDK 21）", "SQL（RDB操作全般）"],
      db: ["SQL Server 2022", "Azure SQL Database"],
      os: ["Windows", "Linux"],
      tools: [
        "Spring Boot（v3.4.6）",
        "MyBatis（v3.0.4）",
        "Apache Tomcat",
        "Apache PDFBox",
        "JFreeChart",
        "ZXing",
        "ICU4J",
        "JUnit",
        "Gradle",
        "Eclipse",
        "Visual Studio Code",
        "GitHub Copilot",
      ],
    },
    phases: [
      "要件定義",
      "基本設計",
      "詳細設計",
      "実装・単体",
      "結合テスト",
      "総合テスト",
      "保守・運用",
    ],
    overview:
      "地方自治体・学校向け校務支援システムの帳票機能リニューアルを、要件定義から保守・運用まで一気通貫で担当。生成AIを活用した開発効率化にも取り組んでいる。",
  },
  {
    period: "2022年7月 - 2025年3月",
    duration: "32ヶ月",
    title: "携帯電話会社向け 事業支援プロジェクト",
    role: "SE → サブリーダー",
    team: ["PM 3名", "APL開発チーム 13〜7名"],
    stack: {
      languages: ["Kotlin（v1.4.32）", "Groovy（v3.0.5）"],
      db: ["AuroraDB"],
      os: ["Windows", "Linux"],
      tools: [
        "Spring Boot（v2.7.5）",
        "Spock",
        "Gradle",
        "Apache Tomcat",
        "IntelliJ IDEA",
        "Visual Studio Code",
        "GitLab",
        "JMeter",
        "Datadog",
        "Jira",
      ],
    },
    phases: ["基本設計", "詳細設計", "実装・単体", "結合テスト", "総合テスト"],
    overview:
      "携帯電話キャリア向け顧客対応システムの開発。SEとして参画し、後半はサブリーダーとしてAPI設計を主導。性能検証や外部仕様準拠対応にも携わった。",
  },
  {
    period: "2024年10月 - 2026年3月",
    duration: "継続中・18ヶ月",
    title: "自社コーポレートサイト リニューアル・保守",
    role: "PL",
    team: ["PMO 1名", "PL 1名", "開発メンバー 3名"],
    stack: {
      languages: ["TypeScript", "JavaScript", "HTML", "CSS", "React", "Next.js"],
      db: ["-"],
      os: ["-"],
      tools: [
        "MUI",
        "Emotion",
        "React Router",
        "GitHub",
        "SourceTree",
        "Visual Studio Code",
        "Google Lighthouse",
      ],
    },
    phases: ["要件定義", "基本設計", "詳細設計", "実装・単体", "保守・運用"],
    overview:
      "自社コーポレートサイトのリニューアルに設計段階から参画し、PLとしてタスク管理・スケジュール調整を担当。ReactからNext.jsへの移行も主導した。",
  },
];

export const selfStudyProject: CareerProject = {
  period: "自己研鑽",
  title: "簡易情報管理アプリケーション構築（個人製作）",
  role: "個人開発",
  team: ["個人製作"],
  stack: {
    languages: ["Ruby（v2.7.6）", "HTML", "JavaScript", "SQL"],
    db: ["MySQL"],
    os: ["Ubuntu"],
    tools: ["Google Cloud（GCP）", "Sinatra", "nginx", "Docker", "Visual Studio Code"],
  },
  phases: ["要件定義", "基本設計", "詳細設計", "実装・単体"],
  overview:
    "1画面で完結する軽量な情報管理アプリケーションを個人で構築。GCP上のLinux環境での3層構成、およびDockerを用いた構築を通じてインフラ・コンテナ技術の基礎を習得。",
};
