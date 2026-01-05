# CI Scan (Continuous Integration Scan)

## 🔄 What is a CI Scan?

A **CI scan** means running **SonarQube analysis automatically inside a CI pipeline**.

**CI = Continuous Integration**

CI means:

- Every time code changes, quality is checked automatically
- No manual intervention required

A CI scan runs:

- **SonarScanner**
- On a **CI server** (not your laptop)
- On **every push / pull request**

---

## 🧠 Simple Definition (Beginner Friendly)

A **CI scan** is when SonarQube checks your code **automatically after you push it** to GitHub or GitLab — instead of you running `sonar-scanner` manually.

---

## 🧑‍💻 CI Scan vs Local Scan (Important Difference)

| Local Scan        | CI Scan              |
|------------------|----------------------|
| Run manually     | Runs automatically   |
| On your laptop   | On CI server         |
| Optional         | Mandatory            |
| Easy to skip     | Cannot be skipped    |
| For learning     | For enforcement      |

📌 Professionals rely on **CI scans**, not manual scans.

---

## 🔧 What Happens in a CI Scan? (Step-by-Step)

```bash
Developer pushes code
↓
CI pipeline starts
↓
SonarScanner runs
↓
SonarQube analyzes code
↓
Quality Gate evaluated
↓
PASS ✅ or FAIL ❌


### If the result is **FAIL ❌**:

- Build stops
- Pull Request cannot be merged
- Bad code is blocked from reaching main branch

---

## 📦 Example: Node.js + TypeScript CI Scan

In a CI pipeline, the following steps run **automatically**:

```bash
npm install
npm run build
sonar-scanner

```

## 🧠 Why CI Scans Matter (Real World)

### Without CI Scan

- Bad code reaches main branch
- Bugs go to production
- Security risks are missed

### With CI Scan

- Bugs are blocked early
- Coding standards are enforced
- Team quality stays consistent

📌 This is why companies trust **CI scans more than humans**.

---

## 🔍 What a CI Scan Checks

A CI scan analyzes:

- Bugs
- Code Smells
- Security Hotspots
- Test Coverage (if configured)
- Quality Gate status

➡️ It uses the **same rules and Quality Gate** you see in the SonarQube dashboard.

## Step 1: Prepare Your Project

1. Ensure your project is connected to a **version control system** (GitHub, GitLab, etc.).
2. Make sure your project has a **build process** (`npm build`, Maven, Gradle, etc.).
3. Optionally, install SonarScanner locally for testing:

   ```bash
   npm install -g sonar-scanner
   ```

## Step 2: Configure SonarQube Project

1. **Open SonarQube UI:**  
   [http://localhost:9000](http://localhost:9000)

2. **Create a new project** (if not already created).

3. **Generate a project token:**  
   - Navigate to `Project → Project Settings → Tokens`  
   - Save the token securely (it will be used in CI)

## Step 3: Configure SonarScanner in Project

1. **Create a `sonar-project.properties` file** in your project root with the following content:

```properties
# Project Identification
sonar.projectKey=sonarqube-node-typescript
sonar.projectName=Node TypeScript Sonar
sonar.projectVersion=1.0

# Source files
sonar.sources=src
sonar.language=ts
sonar.exclusions=node_modules/**,dist/**

# Encoding
sonar.sourceEncoding=UTF-8

# Local SonarQube server URL
sonar.host.url=http://localhost:9000

# Authentication token
sonar.login=sqa_bf36e59e69c8a7dd96632f19e0c2317ae4052a44
```

2. Adjust paths (src, tests, coverage/lcov.info) according to your project structure.

## Step 4: Integrate SonarScanner in CI Pipeline

**Example: Node.js + GitHub Actions**

```bash
This document explains **how to set up and run a CI scan** for your Node.js + TypeScript project using **GitHub Actions** and **SonarQube**.

---

## 🛠 Prerequisites

## 🛠 Prerequisites

Before you start, make sure you have the following:

1. **Node.js installed locally**
   - Recommended LTS version: **18** or **20**
   - Verify:
     ```bash
     node -v
     npm -v
     ```

2. **TypeScript project set up**
   - `tsconfig.json` configured
   - Project can compile using:
     ```bash
     npm run build
     ```

3. **SonarQube server**
   - Running locally (`http://localhost:9000`) **for testing**
   - Or a network-accessible SonarQube server (cloud/server)
   - Admin credentials to generate a **Sonar token**

4. **SONAR_TOKEN**
   - Generated from SonarQube → `My Account → Security → Generate Token`
   - Add it to **GitHub Secrets** if using GitHub Actions:
     - Repo → Settings → Secrets → Actions → New Repository Secret
     - Name: `SONAR_TOKEN`
     - Value: your token

5. **GitHub repository**
   - Push your Node.js + TypeScript project to a GitHub repo
   - Enable **GitHub Actions** for the repo

---

### ⚠️ Important Note: Local SonarQube & GitHub Actions

- **Problem:** If your SonarQube server is running **locally on `localhost:9000`**, the GitHub Actions runner **cannot access it** because the cloud runner does not see your local machine.  
- **Effect:** The workflow will **fail at the `sonar-scanner` step**, even if your token is correct.  

**Solutions / Workarounds:**

1. **Use SonarCloud (recommended)**  
   - Cloud-hosted SonarQube accessible from GitHub Actions  
   - No need to expose your local system

2. **Expose local SonarQube to the network** (not recommended for production)  
   - Use tools like **ngrok** to create a public URL:  
     ```bash
     ngrok http 9000
     ```
   - Update `sonar.host.url` to the ngrok URL

3. **Run GitHub Actions locally using `act`**  
   - Simulates GitHub Actions on your laptop  
   - Can access your local `localhost:9000` SonarQube  
   - Perfect for learning/testing without exposing your system

---

6. **Optional: SonarLint (local testing)**
   - VS Code extension for early feedback
   - Helps catch issues before pushing to CI

7. **Optional: act (local workflow testing)**
   - Tool to run GitHub Actions locally  
   - Useful if SonarQube is not network-accessible from cloud runners
```

```yaml
name: CI Scan

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  sonar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Run SonarQube Scan
        run: sonar-scanner
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

```

⚠️ Note: Replace SONAR_TOKEN with the token you generated in Step 2.
The CI system automatically executes these commands.

## Step 5: Run CI Pipeline

1. **Push code** to your remote repository.

2. The CI system automatically triggers the following commands:

```bash
npm install
npm run build
sonar-scanner
```

## Step 6: Check Quality Gate Status

1. After the scan, you will see the result: **PASS ✅** or **FAIL ❌**.

2. If the result is **FAIL ❌**:
   - Build stops
   - Pull Request cannot be merged
   - Bad code is blocked from reaching the main branch

## Step 7: Example Node.js + TypeScript CI Scan

In CI, the following steps run automatically:

```bash
npm install
npm run build
sonar-scanner
```

⚠️ Note: You do NOT type these commands manually.
The CI system executes them automatically on every push or pull request.

## Step 8: Why CI Scans Matter (Real World)

**Without CI Scan:**

- Bad code reaches main branch
- Bugs go to production
- Security risks are missed

**With CI Scan:**

- Bugs are blocked early
- Coding standards are enforced
- Team quality stays consistent

📌 This is why companies trust CI scans more than humans.

## Step 9: What a CI Scan Checks

A CI scan analyzes:

- Bugs
- Code Smells
- Security Hotspots
- Test Coverage (if configured)
- Quality Gate status

➡️ It uses the same rules and Quality Gate you see in the SonarQube dashboard.

## Step 10: Fix Issues & Maintain Clean Code

1. Review issues reported in SonarQube.

2. Fix code issues before merging.

3. Push updated code → CI scan runs again → aim for **Quality Gate PASS ✅**.

## CI Scan Workflow Diagram

```mermaid
flowchart TD
    %% Styles
    classDef dev fill:#f9f,stroke:#333,stroke-width:1px,color:#000;
    classDef ci fill:#bbf,stroke:#333,stroke-width:1px,color:#000;
    classDef scanner fill:#ffd699,stroke:#333,stroke-width:1px,color:#000;
    classDef sonar fill:#d6f5d6,stroke:#333,stroke-width:1px,color:#000;
    classDef gate fill:#ffcccc,stroke:#333,stroke-width:1px,color:#000;
    classDef pass fill:#ccffcc,stroke:#333,stroke-width:1px,color:#000;
    classDef fail fill:#ff9999,stroke:#333,stroke-width:1px,color:#000;

    %% Nodes
    A["👨‍💻 Developer writes code"]:::dev --> B["💾 Push/PR to repository"]:::dev
    B --> C["🔄 CI Pipeline triggered"]:::ci
    C --> D["📦 Install dependencies & build"]:::ci
    D --> E["🔍 Run SonarScanner"]:::scanner
    E --> F["🟢 SonarQube Analysis"]:::sonar
    F --> G["🚦 Quality Gate evaluated"]:::gate
    G --> H["✅ PASS - Merge allowed"]:::pass
    G --> I["❌ FAIL - Block merge, stop build"]:::fail
