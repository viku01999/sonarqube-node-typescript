# Quality Gates (Core of Module 3)

**Goal:** Learn how SonarQube decides whether a project **PASSES or FAILS**.

## What is a Quality Gate?

A **Quality Gate** is a set of **conditions** that a project must meet to be considered healthy.

- If **all conditions pass** → Project **PASS**
- If **any condition fails** → Project **FAIL**

Quality Gates focus on **new code** to prevent introducing fresh problems.

---

### Example Conditions

- New Bugs > 0 → **FAIL**
- New Critical Issues > 0 → **FAIL**
- Security Hotspots unreviewed → **FAIL**

---

### Steps to explore Quality Gates

1. Go to **Top menu → Quality Gates**
2. Open **Sonar way**
3. Review all defined conditions

---

### Why Quality Gates Matter

- They are enforced in **CI/CD pipelines**
- They **block bad code from being merged**
- They ensure minimum quality standards before deployment

---

### ✅ Task

- Note **3 conditions** from the active Quality Gate
- Write what happens when each condition is violated

# Using a Custom Quality Gate (my-custom)

**Goal:** Learn how to apply and use a custom Quality Gate in SonarQube.

## What is a Custom Quality Gate?

A **custom Quality Gate** is a user-defined set of conditions that control when a project **passes or fails** based on your team’s quality standards.

Example:

- Stricter rules for production projects
- Different thresholds for new vs legacy code

---

### How to use `my-custom` Quality Gate

#### 1. Assign the Quality Gate to a project

1. Go to **Top menu → Quality Gates**
2. Select **my-custom**
3. Click **Set as default**  
   **OR**
4. Go to **Project → Project Settings → Quality Gate**
5. Select **my-custom**

> Once assigned, every analysis of this project will use `my-custom`.

---

#### 2. Run analysis again

- Trigger a new SonarQube analysis (local scan or CI pipeline)
- SonarQube evaluates the project against **my-custom** conditions

---

#### 3. Check Quality Gate status

1. Open your project
2. Go to **Overview**
3. Look for **Quality Gate Status**
   - ✅ Passed
   - ❌ Failed

Click the status to see **which condition failed**.

---

### How it works in CI/CD

- CI pipeline waits for SonarQube result
- If **my-custom fails** → pipeline **fails**
- Code **cannot be merged or deployed**

---

### ✅ Task:

- Assign `my-custom` to your project
- Run a new analysis
- Note which conditions pass or fail and why
