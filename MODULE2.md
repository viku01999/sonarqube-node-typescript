# 🧠 Module 2: SonarQube Installation & Configuration (Ubuntu 25)

> Goal: Install and configure SonarQube locally, run it on a Node.js + TypeScript project, and understand project keys, tokens, and scanner setup.

---

## ✅ Completion Checklist

- [ ] Java 21 verified on system
- [ ] SonarQube installed on Ubuntu 25
- [ ] SonarQube server running successfully
- [ ] Node.js + TypeScript project configured
- [ ] `sonar-project.properties` created in project root
- [ ] Sonar Scanner installed and working
- [ ] Node.js project scanned successfully
- [ ] TypeScript issues appear correctly in SonarQube dashboard

---

## 📝 Reflective Writing

**Answer the following questions after installation & setup:**

1. **What version of Java is required for your SonarQube installation?**  
   _Answer:_ Java 21.0.8 LTS

2. **Where is SonarQube installed on your system?**  
   _Answer:_ `/home/vikas/sonarqube/sonarqube-<version>/` (replace `<version>` with actual folder)

3. **What is the purpose of `sonar-project.properties`?**  
   _Answer:_ It defines project-specific settings for SonarQube, including project key, sources, language, and exclusions.

4. **How do you generate a SonarQube token?**  
   _Answer:_ Log in to SonarQube → My Account → Security → Generate Tokens.

5. **Why is Node.js + TypeScript setup different from plain JS?**  
   _Answer:_ TypeScript requires `tsconfig.json` and source inclusion (`src/**/*.ts`) in `sonar-project.properties` to scan properly.

---

## 🔍 Step-by-Step installation & Practical Exercise

### **Step 1: Verify Java Installation**

```bash
which java
java --version
```

### **Step 2: Download and Extract SonarQube**

```bash
cd ~/Documents
wget [https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.8.0.81608.zip](https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-25.12.0.117093.zip)
unzip sonarqube-25.12.0.117093.zip
```

### **Step 3: Start SonarQube Server**

```bash
cd sonarqube-25.12.0.117093/bin/linux-x86-64
# Start server
./sonar.sh start

# Stop server
./sonar.sh stop
```

### **Step 2: Download and Extract SonarScanner**

```bash
cd ~/Documents
wget [https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-8.0.1.6346-linux-x64.zip](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-8.0.1.6346-linux-x64.zip)
unzip sonar-scanner-8.0.1.6346-linux-x64
# This creates a folder ~/Documents/sonar-scanner
mv sonar-scanner-8.0.1.6346-linux-x64 sonar-scanner
```

**Add SonarScanner to PATH**

```bash
nano ~/.bashrc
```

```bash
# Check executable file available inside bin
export PATH=$PATH:$HOME/Documents/sonar-scanner/bin
```

```bash
# Reload bash:
source ~/.bashrc
```

**Verify Installation**

```bash
# Now you can run anywhere:
sonar-scanner --version
```

### **Step 4: Login to SonarQube**

   - Default credentials: admin / admin
   - Change password on first login


### **Step 5: Generate Project Token (Optional)**

   - My Account → Security → Generate Tokens
   - Save token for CI/CD usage

### **Step 6: Prepare Node.js + TypeScript Project**

   - Ensure tsconfig.json exists
   - Create sonar-project.properties in project root

```bash
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

### **Step 7: Run Sonar Scanner, Navigate to your project root**

   - Scanner reads sonar-project.properties
   - Sends results to local SonarQube server

```bash
sonar-scanner
```

### **Step 8: View Results**

   - Step 9: View Results
   - Open http://localhost:9000
   - Go to Projects → Node TypeScript Demo
   - Review Code Smells, Bugs, Security Hotspots, Technical Debt

# If you see error like
`
17:57:02.312 ERROR Failed to query server version: GET http://localhost:9000/api/v2/analysis/version failed with HTTP 401 Unauthorized. Please check the property sonar.token or the environment variable SONAR_TOKEN.
`
## 🔑 Step 1: Log in and Generate a Token

```yaml
1. Open your browser and go to [http://localhost:9000](http://localhost:9000)
2. Log in with your credentials:
3. Navigate to **My Account → Security → Generate Tokens**
4. Give your token a name, e.g., `local-node-ts`
5. Click **Generate** and **copy the token immediately**  

> ⚠️ This token is a long string, for example:  
> `e0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9`  

---

## 🔧 Step 2: Update `sonar-project.properties`

Open your project’s `sonar-project.properties` file and add the authentication token:

```properties
# Authentication token
sonar.login=e0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9
```
