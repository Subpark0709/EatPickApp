# 이것은 예시 입니다.
## 음식 재료 기반 레시피 추천 앱 개발 프롬프트 템플릿 (React Native)

다음은 음식 재료를 사진, 라이브 동영상, 검색을 통해 레시피를 추천하고 칼로리를 제공하며, 커뮤니티 기능을 포함하는 React Native 앱 개발을 위한 상세 프롬프트 템플릿입니다.

---

### 1. 기술 (Technology)

- **주요 언어/프레임워크**:
    - **프론트엔드**: **React Native**
    - **백엔드**: **Node.js (Express.js)** 또는 **Python (Django/Flask)** (React Native와의 호환성, 이미지 처리 및 ML 기반 추천 확장 용이)
- **라이브러리/도구**:
    - **React Native (프론트엔드)**:
        - 상태 관리: **Redux Toolkit** 또는 **Zustand**
        - 내비게이션: **React Navigation**
        - UI 컴포넌트: **React Native Elements**, **NativeBase**, 또는 커스텀 UI
        - 카메라/이미지: **react-native-vision-camera**, **expo-image-picker**
        - API 통신: **Axios**
        - 데이터 캐싱/동기화: **React Query** 또는 **SWR**
    - **백엔드**:
        - 이미지 분석: **Google Cloud Vision API**, **AWS Rekognition**, 또는 **OpenCV** (자체 처리 시)
        - 데이터베이스 ORM: **Sequelize/TypeORM (Node.js)**, **SQLAlchemy (Python)**
    - **영양 정보**: **Edamam API**, **Nutritionix API**, 또는 자체 구축 DB
- **디자인 패턴**:
    - **공통**: **SOLID**, **Repository**, **Observer** (실시간 알림/피드), **Strategy** (레시피 추천 로직)
    - **프론트엔드**: **MVVM (Model-View-ViewModel)** 또는 **Container/Presentational Pattern**
    - **백엔드**: **CQRS** (복잡한 도메인에서 고려), **Layered Architecture**
- **상호운용성**:
    - **API**: **RESTful API** 또는 **GraphQL** (백엔드 API 설계)
    - **인증**: **OAuth 2.0** (Google, Facebook, Apple 등 소셜 로그인), **JWT** (토큰 기반 인증)
    - **푸시 알림**: **Firebase Cloud Messaging (FCM)**, **Apple Push Notification service (APNS)**
- **성능 최적화**:
    - **프론트엔드**:
        - **Lazy Loading** (컴포넌트, 이미지)
        - **FlatList/SectionList 최적화** (`keyExtractor`, `getItemLayout` 등)
        - **코드 스플리팅** (Metro 번들러 최적화)
        - **이미지 최적화** (압축, WebP 포맷 사용)
        - **Memoization** (React.memo, useMemo, useCallback)
    - **백엔드/공통**:
        - **비동기 프로그래밍** (Node.js의 non-blocking I/O, Python의 asyncio)
        - **캐싱**: **Redis** (DB 쿼리 결과, 세션, 자주 사용되는 데이터), **CDN** (이미지/정적 파일)
        - **데이터베이스 인덱싱**
- **보안**:
    - **OWASP Top 10 준수** (웹 및 모바일)
    - **HTTPS/TLS** 통신 강제
    - **데이터 암호화**: 저장 데이터 (개인 정보, 비밀번호 해싱 - bcrypt), 전송 데이터
    - **입력 검증**: 프론트엔드 및 백엔드 양단 검증
    - **API 키 및 민감 정보 관리**: 환경 변수, Vault, KMS 활용
    - **보안 헤더** 적용

---

### 2. 환경 (Environment)

- **개발 환경**:
    - IDE: **Visual Studio Code (VS Code)**, **Cursor**
    - 빌드 도구: **Expo CLI**, **React Native CLI**, **Node Package Manager (npm)** 또는 **Yarn**
    - 버전 관리: **Git**, **GitHub/GitLab/Bitbucket**
    - 디자인/프로토타이핑: **Figma**, **Sketch**
- **배포 환경**:
    - **프론트엔드 (모바일 앱)**: **Google Play Store**, **Apple App Store** (Expo EAS Build/Submit 또는 수동 배포)
    - **백엔드**: **Docker**, **Kubernetes (K8s)**, **AWS (EC2, Elastic Beanstalk, Lambda)**, **Google Cloud Platform (GCP - GKE, Cloud Run)**, **Azure**
- **테스트 환경**:
    - 유닛 테스트: **Jest**, **React Testing Library**
    - 컴포넌트 테스트: **Storybook**
    - E2E 테스트: **Detox (React Native)**, **Appium**
- **운영 체제**:
    - 개발: **Windows**, **macOS**, **Linux**
    - 배포 (서버): **Linux** (주로 사용)
- **종속성 관리**:
    - 프론트엔드: **npm** 또는 **Yarn**
    - 백엔드: **npm (Node.js)**, **pip (Python)**
- **모니터링/로깅**:
    - 프론트엔드: **Sentry**, **Bugsnag**, **Firebase Performance Monitoring & Crashlytics**
    - 백엔드: **ELK Stack (Elasticsearch, Logstash, Kibana)**, **Prometheus & Grafana**, **Datadog**

---

### 3. 철학 (Philosophy)

- **코드 품질**:
    - **가독성**: 명확한 네이밍 컨벤션, 일관된 코드 스타일 (ESLint, Prettier 자동 포맷팅).
    - **유지보수성**: 모듈화된 컴포넌트 및 함수, 상세하고 필요한 주석.
- **설계 원칙**: **SOLID**, **DRY (Don't Repeat Yourself)**, **KISS (Keep It Simple, Stupid)**, **YAGNI (You Ain't Gonna Need It)**, **Composition over Inheritance**.
- **확장성**:
    - **모듈화된 아키텍처**: 기능별 독립적인 모듈로 설계.
    - **API 기반 통신**: 서비스 간 명확한 인터페이스 정의.
    - **스케일 아웃/업**: 백엔드 서버 및 데이터베이스 확장 용이성 고려.
- **재사용성**:
    - **공통 UI 컴포넌트 라이브러리** 구축.
    - **유틸리티 함수 및 커스텀 훅** 개발 및 공유.
- **에러 처리**:
    - **예외 처리**: `try-catch` 블록 및 에러 바운더리 (React) 활용.
    - **중앙 집중식 로깅**: 에러 발생 시 상세 정보 로깅.
    - **사용자 친화적 오류 메시지**: 명확하고 이해하기 쉬운 안내 제공.
- **도메인 주도 설계 (DDD)**: **적극 추천**. 레시피, 재료, 사용자, 커뮤니티 등 핵심 도메인 모델링 및 바운디드 컨텍스트(Bounded Context) 정의.

---

### 4. 방법론 (Methodology)

- **개발 프로세스**: **애자일 (Agile)** 방법론 기반 **스크럼 (Scrum)** 또는 **칸반 (Kanban)**.
- **코드 리뷰**:
    - **Pull Request (PR)** 기반 코드 리뷰.
    - **정적 분석 도구 (ESLint, SonarQube/SonarLint) 연동**.
    - **동료 개발자 최소 1인 이상 리뷰 필수**.
- **테스트 주도 개발 (TDD)** 또는 **행동 주도 개발 (BDD)**: **적극 추천**. 테스트 케이스 우선 작성 후 개발 진행.
- **CI/CD (지속적 통합/배포)**:
    - **GitHub Actions**, **GitLab CI/CD**, **Jenkins**, **Expo EAS Build/Submit**.
    - 자동화된 테스트, 빌드, 앱 스토어 배포 파이프라인 구축.
- **문서화**:
    - **코드**: **JSDoc** (함수, 컴포넌트 설명), 인라인 주석.
    - **API**: **Swagger/OpenAPI Specification** (API 문서 자동화 및 공유).
    - **아키텍처**: **C4 Model** 또는 다이어그램 (draw.io, Lucidchart).
    - **프로젝트 관리/지식 공유**: **Confluence**, **Notion**, **README.md**.
- **마이크로서비스 아키텍처 (MSA)**: **백엔드에 대해 초기에는 모놀리식으로 시작 후, 서비스 복잡도 및 트래픽 증가에 따라 점진적으로 전환 고려**.
    - 전환 시: API Gateway (Kong, AWS API Gateway), 서비스 디스커버리 (Consul, Eureka), 이벤트 드리븐 아키텍처 (Kafka, RabbitMQ).

---

### 5. 품질 (Quality)

- **코드 커버리지**: **단위 테스트 80% 이상**, 통합/E2E 테스트 커버리지 점진적 확보.
- **정적 분석**:
    - **ESLint**: JavaScript/TypeScript 코드 스타일 및 오류 검사.
    - **Prettier**: 코드 자동 포맷팅.
    - **SonarLint/SonarQube**: 코드 품질 및 잠재적 버그 분석.
- **성능 테스트**:
    - **프론트엔드**: **Lighthouse**, **React Profiler**, **Flipper**.
    - **백엔드 (부하/스트레스 테스트)**: **JMeter**, **k6**, **Locust**.
- **보안 점검**:
    - **OWASP Mobile Security Testing Guide (MSTG)** 및 **OWASP Application Security Verification Standard (ASVS)** 참고.
    - **정기적인 SAST (정적 분석 보안 테스트) 및 DAST (동적 분석 보안 테스트) 수행**.
- **사용자 경험 (UX)**:
    - **직관적인 인터페이스 (UI)** 및 **쉬운 네비게이션**.
    - **빠른 응답 시간** 및 **로딩 속도 최적화**.
    - **명확하고 유용한 에러 메시지** 및 안내.
    - **접근성 (WCAG 2.1 AA 수준 이상 고려)**.
- **유지보수성**: **모듈화**, **명확한 문서화**, **일관된 코딩 스타일**, **낮은 결합도와 높은 응집도**.

---

### 6. 아키텍처 (Architecture)

- **시스템 구조**:
    - **프론트엔드**: **React Native 기반 모바일 애플리케이션**.
    - **백엔드**: **초기 모놀리식 아키텍처, 추후 MSA로 확장 가능성 고려**. 특정 기능(이미지 처리, 알림 등)은 **서버리스 (AWS Lambda, Google Cloud Functions)** 활용 가능.
- **데이터베이스 설계**:
    - **주요 데이터베이스**: **PostgreSQL** (관계형 데이터, JSONB 타입 활용).
    - **보조 데이터베이스 (선택적)**: **MongoDB** (레시피 데이터, 사용자 활동 로그 등 비정형 데이터).
    - **파일 저장소**: **AWS S3**, **Google Cloud Storage** (이미지, 동영상 파일).
- **통신 패턴**:
    - **클라이언트 ↔ 서버**: **RESTful API** 또는 **GraphQL**.
    - **서비스 간 통신 (MSA 시)**: **동기 (REST, gRPC)**, **비동기 (메시지 큐: Kafka, RabbitMQ, AWS SQS/SNS)**.
    - **실시간 기능 (커뮤니티 피드 등)**: **WebSocket**.
- **캐싱 전략**:
    - **클라이언트 측**: **React Query/SWR** (API 응답 캐싱), **AsyncStorage/SecureStore** (간단한 데이터/토큰).
    - **서버 측/CDN**: **Redis/Memcached** (DB 결과, 세션), **CDN** (정적 에셋, 이미지).
- **확장성 설계**:
    - **스케일 업**: 서버 사양 증설 (CPU, 메모리).
    - **스케일 아웃**: **로드 밸런서**를 이용한 백엔드 서버 수평 확장. **데이터베이스 리플리케이션 및 샤딩** (필요시).
- **장애 복구**:
    - **Circuit Breaker 패턴** (예: Resilience4j, Hystrix).
    - **Retry 매커니즘** (API 호출 실패 시).
    - **Failover 전략** (데이터베이스, 서버 이중화).
    - **정기적인 데이터 백업 및 복원 절차 수립**.

---

### 7. 협업 (Collaboration)

- **팀 구조**: **개발자 (프론트엔드, 백엔드)**, **UI/UX 디자이너**, **QA 엔지니어**, **DevOps 엔지니어 (필요시)**, **프로덕트 매니저/오너 (PM/PO)**. 각 역할과 책임 명확히 정의.
- **커뮤니케이션 도구**:
    - 실시간 소통: **Slack**, **Microsoft Teams**.
    - 작업 관리/이슈 트래킹: **Jira**, **Trello**, **Asana**.
- **지식 공유**:
    - 문서화: **Confluence**, **Notion**.
    - 코드 주석, README.
    - 정기적인 기술 공유 세션 (예: 브라운백 미팅).
- **버전 관리 전략**: **GitFlow** 또는 **GitHub Flow**. 명확한 브랜치 전략 (feature, develop, release, main/master) 및 PR 템플릿 사용.
- **피드백 루프**:
    - 정기적인 스프린트 리뷰 및 회고.
    - 사용자 인터뷰, 설문조사, A/B 테스트.
    - 앱 스토어 리뷰 및 인앱 피드백 분석.
- **크로스 펑셔널 요구사항**:
    - 프론트엔드-백엔드 간 API 명세서 공유 및 협의.
    - 디자인 시스템 공유 및 디자이너-개발자 간 긴밀한 협업.
    - 데이터팀과의 협업 (추천 알고리즘 개선 등).

---

### 8. 비즈니스 요구사항 (Business Requirements)

- **핵심 기능**:
    1. **사용자 관리**: 회원가입 (이메일, 소셜), 로그인, 프로필 (선호 음식, 알레르기 정보 등).
    2. **재료 입력**:
        - 사진 촬영/갤러리 업로드를 통한 재료 인식.
        - 라이브 동영상 스트림을 통한 실시간 재료 인식 (고급 기능).
        - 텍스트 기반 재료 검색 및 추가.
    3. **레시피 추천**:
        - 입력된 재료 기반 최적의 레시피 조합 추천.
        - 필터링 (요리 종류, 난이도, 조리 시간, 칼로리 범위 등).
        - 사용자 맞춤형 추천 (선호도, 이전 선택 기반).
    4. **레시피 상세 정보**:
        - 재료 목록 및 양.
        - 단계별 조리법 (텍스트, 이미지, 동영상).
        - 예상 칼로리 및 주요 영양 정보 제공.
    5. **커뮤니티**:
        - 사용자 레시피 공유 (글쓰기, 사진/동영상 업로드).
        - 레시피에 대한 댓글, 좋아요, 스크랩(북마크) 기능.
        - 다른 사용자 팔로우/팔로잉.
        - 인기/최신 레시피 피드.
    6. **검색**: 레시피, 재료, 사용자 검색.
- **사용자 스토리 (예시)**:
    - (주부 A씨) "냉장고에 있는 남은 재료 사진을 찍어 올리면, 오늘 저녁 메뉴로 만들 수 있는 간단한 레시피를 추천받고 싶다."
    - (자취생 B씨) "라면 말고 다른 요리를 해보고 싶은데, 쉽고 빠르게 따라 할 수 있는 1인분 레시피와 칼로리 정보를 알고 싶다."
    - (요리 애호가 C씨) "나만의 특별한 비건 레시피를 다른 사람들과 공유하고 반응을 얻고 싶다."
- **성능 SLA (Service Level Agreement)**:
    - API 평균 응답 시간: `< 300ms`
    - 이미지/영상 분석 응답 시간: `< 5초` (사용자 인지 가능 수준)
    - 월간 시스템 가용성: `99.9%`
- **데이터 요구사항**:
    - **개인정보보호 규정 준수**: 개인정보보호법 (한국), GDPR (해당 시).
    - **데이터 보안**: 사용자 정보, 레시피 데이터, 커뮤니티 게시글 등 암호화 및 접근 제어.
    - **데이터 백업 및 복구**: 정기적인 백업 및 신속한 복구 절차 마련.
    - **이미지/영상 데이터**: 저작권 및 초상권 문제 고려, 사용자 업로드 콘텐츠 관리 정책.
- **비즈니스 규칙**:
    - 레시피 추천 알고리즘 로직 (가중치, 필터링 우선순위 등).
    - 커뮤니티 운영 가이드라인 (금지 행위, 콘텐츠 필터링).
    - 칼로리 계산 기준 및 출처 명시.
- **확장 가능성**:
    - 프리미엄 구독 모델 (광고 제거, 독점 레시피 제공).
    - 밀키트 또는 식재료 쇼핑몰 연동.
    - 다국어 지원 및 글로벌 서비스.

---

### 9. 규제 및 표준 (Compliance and Standards)

- **법적 규제**:
    - **개인정보보호법 (한국)**: 필수 준수.
    - **GDPR (유럽 일반 개인정보보호법)**: 유럽 사용자 대상 서비스 시 준수.
    - **CCPA (캘리포니아 소비자 개인정보보호법)**: 캘리포니아 사용자 대상 서비스 시 준수.
    - **정보통신망법** 관련 조항 준수.
- **산업 표준**:
    - **ISO 27001 (정보 보안 경영 시스템)**: 필요시 인증 고려.
    - **PCI DSS (지불 카드 산업 데이터 보안 표준)**: 인앱 결제 또는 유료 서비스 도입 시 준수.
- **접근성**: **WCAG (Web Content Accessibility Guidelines) 2.1 Level AA** 준수 목표. (모바일 앱 접근성 가이드라인 참고)
- **감사 요구사항**:
    - 주요 사용자 활동 로그 (로그인, 개인 정보 변경, 게시글 작성/삭제 등) 기록 및 보관.
    - 관리자 접근 및 작업 로그 기록.
- **오픈소스 라이선스**: 사용된 모든 오픈소스 라이브러리 및 프레임워크의 라이선스 (MIT, Apache 2.0 등) 확인 및 준수. 라이선스 목록 관리.
- **데이터 주권**: 사용자 데이터의 저장 위치 (국내 우선) 및 국경 간 데이터 이전 시 관련 법규 준수.

---

### 10. 출력 요구사항 (Output Requirements)

- **코드 구조 (디렉토리 및 파일 조직)**:
    - **프론트엔드 (React Native)**:
        
        ```
        /src
        ├── assets/          # 이미지, 폰트 등 정적 파일
        ├── components/      # 재사용 가능한 UI 컴포넌트 (Atomic Design 고려)
        │   ├── atoms/
        │   ├── molecules/
        │   └── organisms/
        ├── constants/       # 앱 전역 상수 (색상, API URL 등)
        ├── navigations/     # React Navigation 설정
        ├── screens/         # 각 화면 단위 컴포넌트
        ├── services/        # API 호출, 외부 서비스 연동 로직
        ├── store/           # 전역 상태 관리 (Redux, Zustand 등)
        │   ├── slices/      # Redux Toolkit 슬라이스
        │   └── index.js
        ├── hooks/           # 커스텀 훅
        ├── utils/           # 유틸리티 함수
        └── App.js           # 루트 컴포넌트
        ```
        
    - **백엔드 (예: Node.js + Express.js)**:
        
        ```
        /src
        ├── api/             # 라우팅 및 컨트롤러
        │   └── v1/
        │       ├── routes/
        │       └── controllers/
        ├── config/          # 환경 설정 (DB, JWT 등)
        ├── constants/       # 서버 전역 상수
        ├── jobs/            # 백그라운드 작업 (cron 등)
        ├── middlewares/     # Express 미들웨어
        ├── models/          # 데이터베이스 모델 (ORM 스키마)
        ├── services/        # 비즈니스 로직
        ├── repositories/    # 데이터베이스 접근 로직 (Repository Pattern)
        ├── utils/           # 유틸리티 함수
        └── app.js           # Express 앱 초기화 및 서버 실행
        ```
        
- **샘플 출력**:
    - **API 응답**: 주요 API 엔드포인트별 성공/실패 케이스 JSON 응답 예시.
        
        JSON
        
        ```
        // 예시: 레시피 추천 성공
        {
          "status": "success",
          "data": {
            "recipes": [
              { "id": "recipe123", "name": "김치찌개", "calories": 450, ... },
              { "id": "recipe456", "name": "계란찜", "calories": 200, ... }
            ]
          }
        }
        ```
        
    - **UI 렌더링**: 주요 화면(재료 입력, 레시피 목록, 레시피 상세, 커뮤니티 피드)의 스크린샷 또는 와이어프레임.
    - **콘솔 로그**: 개발 및 디버깅 시 유용한 주요 이벤트 로그 형식 정의.
- **설명**:
    - 코드 각 모듈, 클래스, 주요 함수에 대한 간결하고 명확한 **주석 (JSDoc 형식 권장)**.
    - **README.md**: 프로젝트 개요, 기술 스택, 설치 및 실행 방법, 주요 기능, 폴더 구조 설명, 기여 방법 등 상세히 기술.
- **실행 가능성**:
    - 제공되는 코드는 명시된 의존성 설치 후 오류 없이 빌드 및 실행 가능해야 함.
    - **프론트엔드**: Expo 프로젝트 또는 React Native CLI 프로젝트 형태로 제공.
    - **백엔드**: `npm start` 또는 해당 스크립트로 실행 가능한 형태로 제공. Dockerfile 제공 권장.
- **재사용 가능성**:
    - UI 컴포넌트, 커스텀 훅, 유틸리티 함수 등은 특정 도메인에 과도하게 종속되지 않도록 설계하여 범용성 확보.
- **문서화 출력**:
    - **API 명세서**: **Swagger/OpenAPI** 문서를 통해 HTML 또는 YAML/JSON 파일 형태로 제공.
    - **아키텍처 다이어그램**: 시스템 전체 구조도, 데이터 흐름도, 주요 컴포넌트 간 상호작용 다이어그램.
    - **사용자 가이드 (선택적)**: 앱의 주요 기능 사용 방법을 설명하는 간략한 사용자 매뉴얼.

---

이 템플릿을 기반으로 프로젝트의 특성에 맞게 세부 사항을 조정하여 사용하시기 바랍니다.