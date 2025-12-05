/**
 * Portfolio Configuration
 *
 * This is the single source of truth for all portfolio content.
 * Edit this file to update your portfolio information.
 * Both English and Japanese translations are maintained here.
 */

export const PORTFOLIO_CONFIG = {
  // ============================================
  // COMMON UI LABELS
  // ============================================
  common: {
    resume: {
      en: 'Resume',
      ja: '履歴書'
    },
    downloadResume: {
      en: 'Download Resume',
      ja: '履歴書をダウンロード'
    },
    viewWork: {
      en: 'View My Work',
      ja: '作品を見る'
    },
    contactMe: {
      en: 'Get in Touch',
      ja: 'お問い合わせ'
    },
    callMe: {
      en: 'Call Me',
      ja: '電話する'
    },
    yearsOf: {
      en: 'Years of',
      ja: '年の'
    },
    experience: {
      en: 'Experience',
      ja: '経験'
    },
    viewEducation: {
      en: 'View Education Details',
      ja: '学歴詳細を表示'
    },
    hideEducation: {
      en: 'Hide Education Details',
      ja: '学歴詳細を非表示'
    },
    currentLocation: {
      en: 'Current Location',
      ja: '現在地'
    },
    comprehensiveToolkit: {
      en: 'A comprehensive toolkit built through years of hands-on software development experience',
      ja: 'ソフトウェア開発の実践経験を通じて構築された包括的なツールキット'
    },
    buildingHighPerformance: {
      en: 'Building high-performance systems and leading engineering initiatives in fintech and healthcare',
      ja: 'フィンテックとヘルスケア分野で高性能システムを構築し、エンジニアリングイニシアチブを主導'
    },
    collectionOfProjects: {
      en: 'A collection of personal and professional projects showcasing my technical skills and problem-solving abilities',
      ja: '私の技術スキルと問題解決能力を示す個人およびプロフェッショナルプロジェクトのコレクション'
    },
    whenNotCoding: {
      en: "What drives me when I'm not coding",
      ja: 'コーディングをしていないときの私を動かすもの'
    },
    proficiency: {
      expert: {
        en: 'Expert',
        ja: 'エキスパート'
      },
      advanced: {
        en: 'Advanced',
        ja: '上級'
      },
      intermediate: {
        en: 'Intermediate',
        ja: '中級'
      },
      beginner: {
        en: 'Beginner',
        ja: '初級'
      }
    }
  },

  // ============================================
  // NAVIGATION LABELS
  // ============================================
  nav: {
    home: {
      en: 'Home',
      ja: 'ホーム'
    },
    about: {
      en: 'About Me',
      ja: '僕について'
    },
    skills: {
      en: 'Skills',
      ja: 'スキル'
    },
    experience: {
      en: 'Experience',
      ja: '職務経験'
    },
    projects: {
      en: 'Projects',
      ja: 'プロジェクト'
    },
    contact: {
      en: 'Contact',
      ja: 'お問い合わせ'
    }
  },

  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  personal: {
    name: {
      en: 'Rifqy',
      ja: 'リフキ'
    },
    title: {
      en: 'Backend Engineer',
      ja: 'バックエンドエンジニア'
    },
    location: {
      en: 'Nagoya, Japan',
      ja: '愛知県名古屋市'
    },
    email: 'mrifqyz.work@gmail.com',
    phone: '+6287777535288',
    resumeFile: {
      en: '/assets/docs/resume/mohamad-rifqy-zulkarnaen-en.pdf',
      ja: '/assets/docs/resume/mohamad-rifqy-zulkarnaen-jp.pdf'
    }
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    greeting: {
      en: "Hi, I'm",
      ja: 'こんにちは、僕は'
    },
    titlePart1: {
      en: 'Building',
      ja: '意味のある影響をもたらす'
    },
    titleHighlight: {
      en: 'Scalable Application',
      ja: 'スケーラブルなシステム'
    },
    titlePart2: {
      en: 'that make a meaningful impact',
      ja: 'の構築を専門とするバックエンドソフトウェアエンジニア'
    },
    subtitle: {
      en: 'Crafting high-performance APIs and mission-critical solutions with Java & Spring Boot',
      ja: 'Java & Spring Bootで高性能なAPIとミッションクリティカルなソリューションを構築'
    },
    avatar: 'landing/avatar.png',
    socialLinks: [
      {
        platform: 'Instagram',
        icon: 'icon/instagram.png',
        url: 'https://www.instagram.com/mrifqyz17/',
        hoverColor: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500'
      },
      {
        platform: 'LinkedIn',
        icon: 'icon/linkedin.png',
        url: 'https://www.linkedin.com/in/mrifqyz/',
        hoverColor: 'hover:bg-[#0077b5]'
      },
      {
        platform: 'GitLab',
        icon: 'icon/gitlab.png',
        url: 'https://gitlab.com/mrifqyz',
        hoverColor: 'hover:bg-[#fc6d26]'
      },
      {
        platform: 'GitHub',
        icon: 'icon/github.png',
        url: 'https://github.com/mrifqyz',
        hoverColor: 'hover:bg-gray-900'
      },
      {
        platform: 'Twitter',
        icon: 'icon/twitter.png',
        url: 'https://twitter.com/yocinoyaa',
        hoverColor: 'hover:bg-[#1DA1F2]'
      }
    ]
  },

  // ============================================
  // SUMMARY / ABOUT SECTION
  // ============================================
  summary: {
    badge: {
      en: 'About Me',
      ja: '私について'
    },
    title: {
      en: 'Passionate Engineer',
      ja: '情熱的なエンジニア'
    },
    description: {
      en: 'With over {{years}} years of full-stack development experience, I specialize in building robust backend systems and creating intuitive user interfaces. Proficient in Java, Spring Boot, Angular, and modern web technologies.',
      ja: '{{years}}年以上のフルスタック開発経験を持ち、堅牢なバックエンドシステムの構築と直感的なユーザーインターフェースの作成を専門としています。Java、Spring Boot、Angular、最新のウェブ技術に精通しています。'
    },
    experienceYears: '4+',
    image: 'landing/me.png'
  },

  // ============================================
  // SKILLS SECTION
  // ============================================
  skills: {
    badge: {
      en: 'Technical Expertise',
      ja: '技術的専門知識'
    },
    title: {
      en: 'Skills & Technologies',
      ja: 'スキル＆テクノロジー'
    },
    categories: [
      {
        name: {
          en: 'Backend Development',
          ja: 'バックエンド開発'
        },
        icon: 'server',
        skills: [
          { name: 'Spring Boot', level: 95, color: 'green' },
          { name: 'FastAPI', level: 75, color: 'purple' },
          { name: 'Django REST Framework', level: 70, color: 'pink' },
          { name: 'Ruby on Rails', level: 65, color: 'yellow' }
        ]
      },
      {
        name: {
          en: 'Frontend Development',
          ja: 'フロントエンド開発'
        },
        icon: 'desktop',
        skills: [
          { name: 'Angular', level: 75, color: 'red' },
          { name: 'React', level: 50, color: 'blue' },
          { name: 'Vue', level: 70, color: 'yellow' },
          { name: 'Kotlin', level: 65, color: 'cyan' }
        ]
      },
      {
        name: {
          en: 'Database & Storage',
          ja: 'データベース＆ストレージ'
        },
        icon: 'database',
        skills: [
          { name: 'PostgreSQL', level: 85, color: 'blue' },
          { name: 'Redis', level: 80, color: 'red' },
          { name: 'MongoDB', level: 70, color: 'green' },
          { name: 'Elasticsearch', level: 70, color: 'yellow' }
        ]
      },
      {
        name: {
          en: 'DevOps & Cloud',
          ja: 'DevOps＆クラウド'
        },
        icon: 'cloud',
        skills: [
          { name: 'Docker & Kubernetes', level: 65, color: 'blue' },
          { name: 'Apache Kafka / Google PubSub / RabbitMQ', level: 80, color: 'cyan' },
          { name: 'AWS / Google Cloud Platform / AlibabaCloud', level: 80, color: 'orange' },
          { name: 'CI/CD (Jenkins/GitLab)', level: 75, color: 'purple' }
        ]
      },
      {
        name: {
          en: 'Others',
          ja: '他のスキル'
        },
        icon: 'terminal',
        skills: [
          { name: 'Software Architecture', level: 80, color: 'purple' },
          { name: 'Software Testing', level: 60, color: 'blue' },
          { name: 'Japanese', level: 65, color: 'green' },
          { name: 'English', level: 90, color: 'cyan' }
        ]
      }
    ]
  },

  // ============================================
  // WORK EXPERIENCE
  // ============================================
  experience: {
    badge: {
      en: 'Career Journey',
      ja: 'キャリアの旅'
    },
    title: {
      en: 'Work Experience',
      ja: '職務経験'
    },
    items: [
      {
        logo: 'icon/generous-icon-only.png',
        company: {
          en: 'Generous Co. Ltd',
          ja: '株式会社ジェネラス'
        },
        position: {
          en: 'Full Stack Software Engineer',
          ja: 'フルスタックソフトウェアエンジニア'
        },
        companyLink: 'https://generous.co.jp/',
        startDate: 'Jul 2025',
        endDate: {
          en: 'Present',
          ja: '現在'
        },
        duration: {
          en: '6+ months',
          ja: '2023年6月 - 現在 · {{months}}ヶ月以上'
        },
        jobType: "Full-time ・ On-site",
        techStack: ['Java', 'Spring Boot', 'Angular', 'Docker', 'PostgreSQL', 'Redis', 'Google Cloud Platform', 'GitHub', 'Kotlin', 'Google PubSub', 'FastAPI', 'MongoDB'],
        collapsedAchievements: {
          en: [
            'Led JICA-sponsored medical platform with scalable architecture and DevOps pipelines',
            'Built real-time platform connecting 28 sites, achieving <strong>60% reduction</strong> in reporting time'
          ],
          ja: [
            'スケーラブルなアーキテクチャとDevOpsパイプラインを持つJICA支援医療プラットフォームを主導',
            '28拠点を接続するリアルタイムプラットフォームを構築し、報告時間を<strong>60%削減</strong>'
          ]
        },
        expandedAchievements: {
          en: [
            '<strong>Led JICA-sponsored medical platform development:</strong> Architected and implemented a scalable healthcare platform supporting international medical cooperation initiatives, ensuring high availability and data integrity across multiple regions.',
            '<strong>Built real-time data aggregation platform:</strong> Developed a comprehensive system connecting 28 medical sites, implementing WebSocket-based real-time updates and achieving a 60% reduction in reporting time from 5 hours to 2 hours.',
            '<strong>Established DevOps pipelines:</strong> Implemented CI/CD workflows using Docker and Kubernetes, reducing deployment time by 70% and ensuring zero-downtime releases.',
            '<strong>Full-stack development:</strong> Built responsive Angular frontend with Spring Boot microservices backend, implementing RESTful APIs and real-time data synchronization.',
            '<strong>Database optimization:</strong> Designed and optimized PostgreSQL schemas, implementing efficient indexing strategies that improved query performance by 80%.'
          ],
          ja: [
            '<strong>JICA支援医療プラットフォーム開発を主導:</strong> 国際医療協力イニシアチブを支援するスケーラブルな医療プラットフォームを設計・実装し、複数地域にわたる高可用性とデータ整合性を確保。',
            '<strong>リアルタイムデータ集約プラットフォームを構築:</strong> 28の医療拠点を接続する包括的なシステムを開発し、WebSocketベースのリアルタイム更新を実装して、報告時間を5時間から2時間へ60%削減。',
            '<strong>DevOpsパイプラインを確立:</strong> DockerとKubernetesを使用したCI/CDワークフローを実装し、デプロイ時間を70%削減、ゼロダウンタイムリリースを実現。',
            '<strong>フルスタック開発:</strong> Spring Bootマイクロサービスバックエンドを持つレスポンシブAngularフロントエンドを構築し、RESTful APIとリアルタイムデータ同期を実装。',
            '<strong>データベース最適化:</strong> PostgreSQLスキーマを設計・最適化し、効率的なインデックス戦略を実装してクエリパフォーマンスを80%向上。'
          ]
        }
      },
      {
        logo: 'icon/doku.png',
        company: {
          en: 'PT. Nusa Satu Inti Artha (DOKU)',
          ja: 'DOKU'
        },
        position: {
          en: 'Backend Engineer',
          ja: 'バックエンドアエンジニア'
        },
        companyLink: 'https://doku.com/',
        startDate: 'Apr 2022',
        endDate: 'Jul 2025',
        duration: {
          en: '3 years 4 months',
          ja: '2022年4月 - 2023年6月 · 1年3ヶ月'
        },
        techStack: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Kubernetes', 'Debezium', 'AlibabaCloud'],
        collapsedAchievements: {
          en: [
            'Zero-downtime migration of <strong>200+ merchants</strong> & reduced API latency by <strong>90%</strong>',
            'Integrated DANA payment for SnackVideo & mentored engineers on production incidents'
          ],
          ja: [
            '<strong>200以上の加盟店</strong>をゼロダウンタイムで移行、APIレイテンシを<strong>90%削減</strong>',
            'SnackVideo向けDANA決済を統合、本番インシデント対応でエンジニアをメンタリング'
          ]
        },
        expandedAchievements: {
          en: [
            '<strong>Zero-downtime merchant migration:</strong> Successfully executed migration of 200+ merchants to new payment platform without service interruption, implementing blue-green deployment strategy and comprehensive rollback mechanisms.',
            '<strong>API performance optimization:</strong> Reduced API latency by 90% (from 1 second to 100ms) through encryption algorithm optimization, Redis caching implementation, and database query improvements.',
            '<strong>DANA payment integration:</strong> Integrated DANA e-wallet payment channel for SnackVideo, handling millions of transactions monthly and driving significant business growth.',
            '<strong>Microservices architecture:</strong> Designed and implemented event-driven microservices using Kafka for message queuing, ensuring system scalability and fault tolerance.',
            '<strong>Incident response leadership:</strong> Led critical production incident responses, mentored junior engineers on troubleshooting methodologies, and established on-call best practices.',
            '<strong>Infrastructure management:</strong> Deployed and managed containerized applications on Kubernetes, implementing auto-scaling and monitoring solutions for high-traffic payment systems.'
          ],
          ja: [
            '<strong>ゼロダウンタイム加盟店移行:</strong> サービス中断なしで200以上の加盟店を新決済プラットフォームに移行成功。ブルーグリーンデプロイ戦略と包括的なロールバック機構を実装。',
            '<strong>APIパフォーマンス最適化:</strong> 暗号化アルゴリズムの最適化、Redisキャッシュ実装、データベースクエリ改善により、APIレイテンシを90%削減（1秒から100msへ）。',
            '<strong>DANA決済統合:</strong> SnackVideo向けにDANAイーウォレット決済チャネルを統合し、月間数百万件のトランザクションを処理、大幅なビジネス成長を実現。',
            '<strong>マイクロサービスアーキテクチャ:</strong> Kafkaを使用したメッセージキューイングでイベント駆動型マイクロサービスを設計・実装し、システムのスケーラビリティと耐障害性を確保。',
            '<strong>インシデント対応リーダーシップ:</strong> 重要な本番インシデント対応を主導し、ジュニアエンジニアにトラブルシューティング手法を指導、オンコールのベストプラクティスを確立。',
            '<strong>インフラ管理:</strong> Kubernetes上でコンテナ化されたアプリケーションをデプロイ・管理し、高トラフィック決済システム向けに自動スケーリングとモニタリングソリューションを実装。'
          ]
        }
      },
      {
        logo: 'icon/sagara.png',
        company: {
          en: 'Sagara Technology',
          ja: 'Sagara Technology'
        },
        position: {
          en: 'Backend Developer',
          ja: 'フルスタックソフトウェアエンジニア'
        },
        companyLink: 'https://sagaratechnology.com/',
        startDate: 'Apr 2022',
        endDate: 'Jul 2022',
        duration: {
          en: '4 months',
          ja: '2020年8月 - 2022年4月 · 1年9ヶ月'
        },
        techStack: ['Python', 'Django REST', 'PostgreSQL', 'Elasticsearch'],
        collapsedAchievements: {
          en: [
            'Developed microservices & warehouse stock management system with purchase tracking'
          ],
          ja: [
            'マイクロサービスと購入追跡機能を持つ倉庫在庫管理システムを開発'
          ]
        },
        expandedAchievements: {
          en: [
            '<strong>Microservices development:</strong> Designed and built RESTful microservices using Django REST Framework, implementing proper API versioning and documentation with Swagger/OpenAPI.',
            '<strong>Warehouse management system:</strong> Developed comprehensive stock management system with features for purchase tracking, inventory control, and stock mutation monitoring.',
            '<strong>Search implementation:</strong> Integrated Elasticsearch for fast full-text search across inventory data, improving search performance by 10x compared to traditional database queries.',
            '<strong>Database design:</strong> Architected PostgreSQL database schemas with proper normalization, constraints, and indexing strategies for optimal query performance.'
          ],
          ja: [
            '<strong>マイクロサービス開発:</strong> Django REST Frameworkを使用してRESTfulマイクロサービスを設計・構築し、適切なAPIバージョニングとSwagger/OpenAPIによるドキュメンテーションを実装。',
            '<strong>倉庫管理システム:</strong> 購入追跡、在庫管理、在庫変動監視機能を持つ包括的な在庫管理システムを開発。',
            '<strong>検索実装:</strong> 在庫データの高速全文検索のためにElasticsearchを統合し、従来のデータベースクエリと比較して検索パフォーマンスを10倍改善。',
            '<strong>データベース設計:</strong> 適切な正規化、制約、最適なクエリパフォーマンスのためのインデックス戦略を持つPostgreSQLデータベーススキーマを設計。'
          ]
        }
      },
      {
        logo: 'icon/tiket.png',
        company: {
          en: 'PT. Global Tiket Network',
          ja: 'Tiket.com'
        },
        position: {
          en: 'Software Quality Assurance',
          ja: 'バックエンドソフトウェアエンジニア'
        },
        companyLink: 'https://www.tiket.com/',
        startDate: 'Aug 2021',
        endDate: 'Feb 2022',
        duration: {
          en: '7 months',
          ja: '2019年3月 - 2020年8月 · 1年6ヶ月'
        },
        techStack: ['Manual Testing', 'API Testing', 'iOS Testing', 'Web Testing', 'BrowserStack', 'TestRails', 'JIRA', 'Confluence'],
        collapsedAchievements: {
          en: [
            'Managed 8+ improvements & 6 features across 4 platforms (iOS, API, mWeb, Web)'
          ],
          ja: [
            '4つのプラットフォーム（iOS、API、mWeb、Web）で8つ以上の改善と6つの機能を管理'
          ]
        },
        expandedAchievements: {
          en: [
            '<strong>Multi-platform testing:</strong> Conducted comprehensive manual testing across 4 platforms (iOS native app, RESTful APIs, mobile web, and desktop web), ensuring consistent user experience and functionality.',
            '<strong>Project management:</strong> Successfully managed 8+ improvement initiatives and 6 new feature rollouts, coordinating with development teams and ensuring quality standards were met.',
            '<strong>API validation:</strong> Performed thorough API testing using Postman, validating request/response formats, error handling, and integration points between services.',
            '<strong>Bug reporting & tracking:</strong> Identified and documented critical bugs, created detailed test cases, and tracked issues through resolution using JIRA.',
            '<strong>Cross-functional collaboration:</strong> Worked closely with developers, product managers, and designers to ensure quality delivery during the pandemic period when travel industry faced significant challenges.'
          ],
          ja: [
            '<strong>マルチプラットフォームテスト:</strong> 4つのプラットフォーム（iOSネイティブアプリ、RESTful API、モバイルWeb、デスクトップWeb）で包括的な手動テストを実施し、一貫したユーザー体験と機能性を確保。',
            '<strong>プロジェクト管理:</strong> 8つ以上の改善イニシアチブと6つの新機能ロールアウトを成功裏に管理し、開発チームと調整して品質基準を確保。',
            '<strong>APIバリデーション:</strong> Postmanを使用して徹底的なAPIテストを実施し、リクエスト/レスポンス形式、エラーハンドリング、サービス間の統合ポイントを検証。',
            '<strong>バグ報告と追跡:</strong> 重要なバグを特定・文書化し、詳細なテストケースを作成、JIRAを使用して解決まで問題を追跡。',
            '<strong>部門横断的コラボレーション:</strong> 旅行業界が大きな課題に直面したパンデミック期間中、開発者、プロダクトマネージャー、デザイナーと緊密に協力して高品質な提供を実現。'
          ]
        }
      }
    ]
  },

  // ============================================
  // PROJECTS
  // ============================================
  projects: {
    badge: {
      en: 'Featured Work',
      ja: '注目の作品'
    },
    title: {
      en: 'Projects & Achievements',
      ja: 'プロジェクト＆実績'
    },
    items: [{
        title: {
          en: 'PayLink',
          ja: 'Paylink'
        },
        date: 'Nov 2025 - Current',
        description: {
          en: 'Architected and developed the payment aggregator platform system. Implemented automated async email notification, data flow and security.',
          ja: 'インドネシア大学CS学部の論文発表管理システムの設計と開発をリード。自動スケジューリングアルゴリズム、リソース割り当てロジック、文書ワークフローを実装し、管理オーバーヘッドを70％削減。'
        },
        role: {
          en: 'Author (Open Source Project)',
          ja: 'リード開発者'
        },
        about: {
          en: 'Built a complete thesis defense management system for Computer Science Faculty at University of Indonesia. Features include automated scheduling, room allocation, examiner assignment, and document management. Reduced administrative overhead by 70% and improved scheduling efficiency.',
          ja: 'インドネシア大学コンピュータサイエンス学部向けの完全な論文発表管理システムを構築。自動スケジューリング、部屋割り当て、審査員割り当て、文書管理などの機能を搭載。管理オーバーヘッドを70％削減し、スケジューリング効率を向上。'
        },
        image: 'projects/temp.jpg',
        badge: 'Showcase Project',
        isFeatured: true,
        techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Google PubSub', 'Google Cloud Platform', 'Debezium', 'Angular', 'GitHub'],
        links: [
          {
            type: 'liveDemo',
            label: 'Demo',
            url: 'https://paylink.mrifqyz.my.id'
          },
          {
            type: 'github',
            label: 'Backend Middle Repo',
            url: 'https://github.com/mrifqyz/paylink-system/'
          },
          {
            type: 'github',
            label: 'Frontend Repo',
            url: 'https://github.com/mrifqyz/paylink-interface/'
          },
          {
            type: 'github',
            label: 'Notification Center Repo',
            url: 'https://github.com/mrifqyz/paylink-notification-center/'
          },
          {
            type: 'github',
            label: 'Core System Repo',
            url: 'https://github.com/mrifqyz/paylink-core/'
          }
        ]
      },
      {
        title: {
          en: 'LDAP Auth System Template',
          ja: 'Paylink'
        },
        date: 'April 2025 - May 2025',
        description: {
          en: 'Implemented authentication and authorization API as a foundation for upcoming auth required microservices that utilizes LDAP as single source of truth.',
          ja: 'インドネシア大学CS学部の論文発表管理システムの設計と開発をリード。自動スケジューリングアルゴリズム、リソース割り当てロジック、文書ワークフローを実装し、管理オーバーヘッドを70％削減。'
        },
        role: {
          en: 'Author (Open Source Project)',
          ja: 'リード開発者'
        },
        about: {
          en: 'Built a complete thesis defense management system for Computer Science Faculty at University of Indonesia. Features include automated scheduling, room allocation, examiner assignment, and document management. Reduced administrative overhead by 70% and improved scheduling efficiency.',
          ja: 'インドネシア大学コンピュータサイエンス学部向けの完全な論文発表管理システムを構築。自動スケジューリング、部屋割り当て、審査員割り当て、文書管理などの機能を搭載。管理オーバーヘッドを70％削減し、スケジューリング効率を向上。'
        },
        image: 'projects/temp.jpg',
        badge: 'Side Project',
        isFeatured: false,
        techStack: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'GitHub', 'OpenLDAP'],
        links: [
          {
            type: 'github',
            label: 'Github Repo',
            url: 'https://github.com/mrifqyz/ldap-core-system/'
          }
        ]
      },
      {
        title: {
          en: 'Qvisa',
          ja: 'Qvisa'
        },
        date: 'Jan 2025 - Mar 2025',
        description: {
          en: 'Developed the landing page components, backend API and content mapping of the main page. Integrated the data inputted in custom made CMS (Content Management System) with the landing page.',
          ja: 'ビザ申請プラットフォームのフルスタック開発をリード。スケーラブルなバックエンドサービスの設計とレスポンシブなフロントエンドの実装を担当。ユーザー認証、文書管理、決済処理を含むエンドツーエンドソリューションを提供。'
        },
        role: {
          en: 'Full-stack Developer',
          ja: 'フルスタック開発者'
        },
        about: {
          en: 'Built end-to-end payment gateway integration connecting multiple payment providers. Implemented transaction monitoring, reconciliation system, and automated refund processing. Architected microservices-based backend with event-driven communication patterns.',
          ja: '複数の決済プロバイダーを接続するエンドツーエンドの決済ゲートウェイ統合を構築。トランザクション監視、調整システム、自動返金処理を実装。イベント駆動通信パターンを使用したマイクロサービスベースのバックエンドを設計。'
        },
        image: 'projects/qvisa.png',
        badge: 'Freelance Project',
        isFeatured: false,
        techStack: ['Python', 'BottlePy', 'MongoDB', 'TypeScript', 'Vue', 'GitHub'],
        links: [
          {
            type: 'website',
            label: 'Website',
            url: 'https://qvisa.id'
          }
        ]
      },
      {
        title: {
          en: 'Kisarah',
          ja: 'Kisarah'
        },
        date: 'Nov 2024 - Dec 2024',
        description: {
          en: 'Developed the landing page components, backend API and content mapping of the main page. Integrated the data inputted in custom made CMS (Content Management System) with the landing page.',
          ja: '旅行管理プラットフォームのRESTful APIとバックエンドインフラを設計・開発。データベースクエリを最適化し、複雑なフィルタリングとレポート要件を持つ500人以上の日次アクティブユーザーに200ms未満のレスポンスタイムを実現。'
        },
        role: {
          en: 'Full-stack Developer',
          ja: 'バックエンド開発者'
        },
        about: {
          en: 'Designed and developed a comprehensive merchant portal with real-time analytics dashboard. Implemented advanced filtering, export capabilities, and automated report generation. Created RESTful APIs serving 500+ daily active users with sub-200ms response times.',
          ja: 'リアルタイム分析ダッシュボードを備えた包括的な加盟店ポータルを設計・開発。高度なフィルタリング、エクスポート機能、自動レポート生成を実装。500人以上の日次アクティブユーザーに200ms未満のレスポンスタイムでRESTful APIを提供。'
        },
        image: 'projects/kisarah.png',
        badge: 'Freelance Project',
        isFeatured: false,
        techStack: ['Python', 'BottlePy', 'MongoDB', 'TypeScript', 'Vue', 'GitHub'],
        links: [
          {
            type: 'website',
            label: 'Website',
            url: 'https://kisarahtravel.com'
          }
        ]
      },
      {
        title: {
          en: 'SISIDANG',
          ja: 'SISIDANG'
        },
        date: 'Jul 2022 - Oct 2022',
        description: {
          en: 'Architected and led development of thesis defense management system for University of Indonesia CS Faculty. Implemented automated scheduling algorithms, resource allocation logic, and document workflow that reduced administrative overhead by 70%.',
          ja: 'インドネシア大学CS学部の論文発表管理システムの設計と開発をリード。自動スケジューリングアルゴリズム、リソース割り当てロジック、文書ワークフローを実装し、管理オーバーヘッドを70％削減。'
        },
        role: {
          en: 'Lead Developer',
          ja: 'リード開発者'
        },
        about: {
          en: 'Built a complete thesis defense management system for Computer Science Faculty at University of Indonesia. Features include automated scheduling, room allocation, examiner assignment, and document management. Reduced administrative overhead by 70% and improved scheduling efficiency.',
          ja: 'インドネシア大学コンピュータサイエンス学部向けの完全な論文発表管理システムを構築。自動スケジューリング、部屋割り当て、審査員割り当て、文書管理などの機能を搭載。管理オーバーヘッドを70％削減し、スケジューリング効率を向上。'
        },
        image: 'projects/sisidang.png',
        badge: 'Freelance Project',
        isFeatured: true,
        techStack: ['Python', 'Django REST Framework', 'PostgreSQL', 'TypeScript', 'React', 'Gitlab'],
        links: [
          {
            type: 'website',
            label: 'Website',
            url: 'https://sidang.cs.ui.ac.id'
          }
        ]
      }
    ]
  },

  // ============================================
  // EDUCATION
  // ============================================
  education: {
    badge: {
      en: 'Education',
      ja: '学歴'
    },
    title: {
      en: 'Education',
      ja: '教育'
    },
    logo: 'icon/ui.png',
    degree: {
      en: 'Bachelor of Computer Science',
      ja: '情報工学学士'
    },
    institution: {
      en: 'University of Indonesia',
      ja: 'インドネシア大学'
    },
    link: 'https://www.cs.ui.ac.id/',
    gpa: '3.23',
    graduatedYear: '2022',
    duration: {
      en: 'Jul 2018 - Jul 2022',
      ja: '7月2018年 - 7月2022年'
    },
    thesis: {
      en: 'Building Scalable Microservices Architecture for E-Commerce Platform',
      ja: 'Eコマースプラットフォームのためのスケーラブルなマイクロサービスアーキテクチャの構築'
    },
    achievements: {
      en: [
        'GPA: 3.23/4.0',
        "Dean's List for 4 semesters",
        'Active participant in programming competitions and hackathons'
      ],
      ja: [
        'GPA: 3.23/4.0',
        '4学期間のディーンズリスト',
        'プログラミングコンテストとハッカソンに積極的に参加'
      ]
    }
  },

  // ============================================
  // FUN FACTS
  // ============================================
  funFacts: {
    badge: {
      en: 'Beyond Code',
      ja: 'コードを超えて'
    },
    title: {
      en: 'Fun Facts About Me',
      ja: '私についての面白い事実'
    },
    items: [
      {
        emoji: '☕',
        title: {
          en: 'Coffee Enthusiast',
          ja: 'コーヒー愛好家'
        },
        description: {
          en: 'Average 3 cups of coffee per day to fuel my coding sessions',
          ja: 'コーディングセッションを支えるため、1日平均3杯のコーヒーを飲む'
        },
        gradientFrom: 'blue',
        gradientTo: 'blue'
      },
      {
        emoji: '🎮',
        title: {
          en: 'Gaming Geek',
          ja: 'ゲームオタク'
        },
        description: {
          en: 'Enjoys strategy games and problem-solving puzzles',
          ja: '戦略ゲームと問題解決パズルを楽しむ'
        },
        gradientFrom: 'purple',
        gradientTo: 'purple'
      },
      {
        emoji: '📚',
        title: {
          en: 'Continuous Learner',
          ja: '継続的学習者'
        },
        description: {
          en: 'Always exploring new technologies and frameworks',
          ja: '常に新しい技術とフレームワークを探求'
        },
        gradientFrom: 'green',
        gradientTo: 'green'
      },
      {
        emoji: '🌏',
        title: {
          en: 'Travel Enthusiast',
          ja: '旅行愛好家'
        },
        description: {
          en: 'Visited 15+ cities across Indonesia for tech meetups',
          ja: '技術ミートアップのためにインドネシア全土の15以上の都市を訪問'
        },
        gradientFrom: 'orange',
        gradientTo: 'orange'
      },
      {
        emoji: '🎵',
        title: {
          en: 'Music Lover',
          ja: '音楽好き'
        },
        description: {
          en: 'Code better with lo-fi beats and jazz in the background',
          ja: 'ローファイビートとジャズをバックグラウンドにコーディングする方が良い'
        },
        gradientFrom: 'pink',
        gradientTo: 'pink'
      },
      {
        emoji: '💻',
        title: {
          en: 'Open Source Contributor',
          ja: 'オープンソース貢献者'
        },
        description: {
          en: 'Actively contributing to various open-source projects',
          ja: '様々なオープンソースプロジェクトに積極的に貢献'
        },
        gradientFrom: 'cyan',
        gradientTo: 'cyan'
      },
      {
        emoji: '📷',
        title: {
          en: 'Amateur Photographer',
          ja: 'アマチュア写真家'
        },
        description: {
          en: 'Capturing moments and beautiful sceneries in free time',
          ja: '余暇に瞬間と美しい風景を撮影'
        },
        gradientFrom: 'indigo',
        gradientTo: 'indigo'
      },
      {
        emoji: '👨‍🏫',
        title: {
          en: 'Tech Mentor',
          ja: 'テクノロジーメンター'
        },
        description: {
          en: 'Teaching programming to junior developers and students',
          ja: 'ジュニア開発者と学生にプログラミングを指導'
        },
        gradientFrom: 'red',
        gradientTo: 'red'
      }
    ]
  },

  // ============================================
  // CTA / CONTACT SECTION
  // ============================================
  cta: {
    badge: {
      en: "Let's Work Together",
      ja: '一緒に働きましょう'
    },
    title: {
      en: 'Ready to start your next project?',
      ja: '次のプロジェクトを始める準備はできていますか？'
    },
    description: {
      en: "I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to get in touch!",
      ja: '私は常に新しい機会とエキサイティングなプロジェクトについて聞くことに興味があります。質問があるか、挨拶をしたいだけでも、お気軽にご連絡ください！'
    }
  }
};
