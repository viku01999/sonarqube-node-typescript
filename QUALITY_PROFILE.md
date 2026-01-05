# Quality Profiles (Rules Bundle)

**Goal:** Understand how rules are grouped and applied to projects.

A **Quality Profile** is a **bundle of rules** applied together to a project.

Instead of enabling rules one by one, SonarQube applies a profile to enforce a consistent coding standard.

---

## What is **Sonar way**?

**Sonar way** is SonarQube’s **default quality profile**.

It represents:

- Industry-proven best practices
- Balanced rule selection (quality + security)
- Safe defaults for production systems

📌 Key points about **Sonar way**:

- Automatically assigned to new projects
- Maintained by SonarSource experts
- Designed to catch **real-world issues**, not theoretical ones
- Can be extended or customized later (but not now)

---

### Steps to explore Sonar way

1. Go to **Top menu → Quality Profiles**
2. Filter by **TypeScript**
3. Click **Sonar way**
4. Review all active rules

> ⚠️ Do NOT edit the profile — only observe how rules are grouped.

### ✅ Task

- Note how many rules are **active** in the TypeScript **Sonar way** profile
- Understand why having a predefined profile is useful

---

## Summary

- **Rules** define *what* is checked
- **Severity** defines *how serious* an issue is
- **Quality Profiles (Sonar way)** define *which rules are applied together*

📂 Reference documents

- [RULES.md](./RULES.md)
- [SEVERITY.md](./SEVERITY.md)

## Creating and Using Quality Profiles

### How rules are applied in SonarQube

- **Rules already exist** in SonarQube (you usually do not create new ones)
- A **Quality Profile selects which rules are active**
- When a project is analyzed:
  - SonarQube checks the code
  - Applies all **active rules from the assigned Quality Profile**
  - Reports issues based on those rules

---

### How to create a Quality Profile

1. Go to **Top menu → Quality Profiles**
2. Select the **Language** (e.g., TypeScript)
3. Click **Create**
4. Enter:
   - Name (e.g., `my-custom`)
   - Base profile (usually **Sonar way**)
5. Create the profile

> Creating from **Sonar way** is recommended so you don’t start from scratch.

---

### How to add or remove rules in a Quality Profile

1. Open **Quality Profiles**
2. Click your custom profile (e.g., `my-custom`)
3. Browse the rule list
4. Enable or disable rules as needed
5. (Optional) Adjust rule severity if allowed

> ⚠️ You are **selecting rules**, not creating new ones.

---

### When rules are applied

Rules are applied when:

- A project is **assigned** a Quality Profile
- A **SonarQube analysis runs** (locally or in CI/CD)

If no custom profile is assigned:

- SonarQube uses **Sonar way** by default

---

### How to apply a Quality Profile to a project

#### Option 1: Set as default profile

1. Go to **Quality Profiles**
2. Open your profile (`my-custom`)
3. Click **Set as Default**

➡️ All new projects for that language will use it.

---

#### Option 2: Assign to a specific project (recommended)

1. Open your **Project**
2. Go to **Project Settings → Quality Profiles**
3. Select the language (TypeScript)
4. Choose your profile (`my-custom`)
5. Save

---

### What happens after applying a Quality Profile

- Next analysis runs
- SonarQube evaluates the code using:
  - Rules from the assigned profile
  - Severities defined in those rules
- Issues are reported
- Quality Gate decides **PASS / FAIL**

---

## Summary

- **Rules** → individual checks (already provided by SonarQube)
- **Quality Profiles** → choose which rules are active
- **Projects** → use one Quality Profile per language
- **Analysis** → applies rules from the profile
- **Quality Gate** → decides if the result is acceptable
