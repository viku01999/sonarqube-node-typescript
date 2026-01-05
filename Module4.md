# 🧑‍💻 Module 4: SonarLint (TypeScript Developer Mode) (This will autoconfigure in your IDE just by installing extension)

> **Goal:** Catch SonarQube issues while writing TypeScript code — before commit, before CI, before problems reach the dashboard.

---

## 🧠 Why Module 4 Matters (Mindset Shift)

Up to Module 3:

- SonarQube finds problems **after scanning**

From Module 4 onward:

- SonarLint finds problems **while you type**

This module turns SonarQube from a **post-check tool** into a **developer superpower**.

Professionals aim for:
> ❝ Zero surprises in CI ❞

---

## ✅ Completion Checklist

- [ ] SonarLint installed in IDE
- [ ] SonarLint detects TypeScript issues
- [ ] Connected mode configured
- [ ] Issues match SonarQube rules
- [ ] Issues fixed before commit
- [ ] Fewer issues appear in SonarQube dashboard

---

## 🧩 Core Concepts (Beginner → Pro)

### 🔹 What is SonarLint?

SonarLint is an **IDE plugin** that:

- Analyzes code in real time
- Highlights issues as you type
- Uses SonarQube rules

Think of it as:
> ESLint + SonarQube intelligence + live feedback

---

### 🔹 Standalone Mode vs Connected Mode

#### 🟡 Standalone Mode

- Works without SonarQube
- Uses built-in rules
- Good for beginners

#### 🟢 Connected Mode (Professional Mode)

- Connects directly to SonarQube
- Uses **same rules & quality profile**
- Matches Quality Gate behavior

📌 **Professionals ALWAYS use Connected Mode**

---

## ⚙️ Step-by-Step: Install SonarLint

### Step 1: Open Your IDE

Supported IDEs:

- VS Code (SonarQube)
- IntelliJ IDEA
- WebStorm

---

### Step 2: Install SonarLint Plugin

#### VS Code

1. Open Extensions (`Ctrl + Shift + X`)
2. Search **SonarLint**
3. Install **SonarLint by SonarSource**

---

### Step 3: Verify Basic Functionality

1. Open a TypeScript file
2. Write bad code:

```ts
const x: any = 10;
```

## 🔄 What is a CI Scan?

[Open the CI_SCAN file](./CI_SCAN.md)