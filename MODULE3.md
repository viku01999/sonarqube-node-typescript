# 🚦 Module 3: Rules & Quality Gates (TypeScript Focused)

> **Goal:** Define what “good TypeScript code” means by understanding SonarQube rules, severities, quality profiles, and quality gates — and learn how they control PASS/FAIL decisions in real projects.

---

## 🧠 Why Module 3 Matters (Mindset)

Up to now, SonarQube has been **showing problems**.
From this module onward, SonarQube starts **making decisions**.

Module 3 teaches you how:

- Standards are defined
- Code is judged
- Builds are blocked
- Teams enforce quality consistently

This is where SonarQube becomes a **governance tool**, not just a scanner.

---

## ✅ Completion Checklist

- [ ] I understand what a SonarQube rule is
- [ ] I understand rule severity levels
- [ ] I know what a Quality Profile is
- [ ] I understand how Quality Gates work
- [ ] I have seen a Quality Gate FAIL
- [ ] I can explain why a gate failed
- [ ] I understand how rules affect Node.js + TypeScript code

---

## 🧩 Core Concepts (Beginner → Pro)

### 🔹 Rules

A **rule** is a predefined coding standard used to detect:

- Bugs
- Code smells
- Security risks

Example rules:

- Avoid using `any`
- Remove unused variables
- Handle promises correctly

One violated rule = one issue.

---

### 🔹 Severity (How Serious an Issue Is)

Severity helps prioritize issues.

| Severity | Meaning | Real Impact |
|--------|-------|-------------|
| Blocker | App may crash | Release blocked |
| Critical | Security risk | Immediate fix |
| Major | Incorrect or risky logic | High priority |
| Minor | Style / readability issue | Low priority |
| Info | Suggestion | Optional |

Severity is about **risk**, not just correctness.

---

### 🔹 Quality Profiles

A **Quality Profile** is a collection of rules applied to a language.

- SonarQube provides a default **“Sonar way”** profile for TypeScript
- It defines what rules are active
- Profiles can be customized later (Module 8)

In this module, you **use** the default profile — you do not modify it yet.

---

### 🔹 Quality Gates (MOST IMPORTANT)

A **Quality Gate** is a set of conditions that decide whether code is acceptable.

Examples of gate conditions:

- No new Bugs
- No new Critical issues
- Security Hotspots reviewed

If any condition fails:
❌ **Quality Gate FAILS**

Quality Gates are used to:

- Block CI/CD pipelines
- Prevent bad merges
- Enforce team standards

---

## 🔍 Exploring Rules in the UI (Practical)

1. Open SonarQube UI (`http://localhost:9000`)
2. Go to **Rules**
3. Filter:
   - Language → TypeScript
   - Type → Bug / Code Smell / Security
4. Open and read at least 5 rules

Focus on **why the rule exists**, not just what it says.

---

## 🧪 Practical Exercise: Trigger a Quality Gate Failure

### Step 1: Intentionally violate TypeScript rules

Examples:

- Use `any`
- Leave unused variables
- Skip error handling
- Use loose equality (`==`)

### Step 2: Run Sonar Scanner

```bash
sonar-scanner
```

## 🧠 Mental Model (IMPORTANT)

```mathematica
TypeScript Code
        ↓
Rule Triggered
        ↓
Issue Created
        ↓
Severity Assigned
        ↓
Quality Gate Evaluated
        ↓
PASS / FAIL Decision
```

## 🧑‍💻 How Professionals Use Module 3 Knowledge

- **Developers**: fix issues before pushing
- **Senior Devs**: review severity impact
- **Tech Leads**: define quality standards
- **CI/CD**: blocks low-quality code
- **Organizations**: reduce bugs and security risks

---

## 📝 Reflective Writing (MANDATORY)

Answer the following questions in your own words:

1. **What is the difference between a rule and a quality gate?**

2. **Why is severity more important than issue count?**

3. **Why can one bad line cause a Quality Gate to fail?**

4. **How do Quality Gates protect production systems?**

---

## 📌 Module 3 Completion Rule

You can mark Module 3 as **Completed** only if:

- You understand why your Quality Gate failed  
- You can explain which rule caused the failure  
- You know how to prevent it next time

📌 **Status**: ⬜ Not Started / ⬜ In Progress / ⬜ Completed

---

## What is Rules and how to create?

[Open the RULES file](./RULES.md)

## STEP 2: Severity Levels (Why some issues hurt more)

[Open the Severity file](./SEVERITY.md)

## STEP 4: Severity Levels (Why some issues hurt more)

[Open the QUALITY_PROFILE file](./QUALITY_PROFILE.md)

## STEP 5: Severity Levels (Why some issues hurt more)

[Open the QUALITY_ GATES file](./QUALITY_%20GATES.md)

```bash
STEP 7: How Professionals Use Module 3 Knowledge
Role	How they use it
Developer	Fix issues early
Senior Dev	Decide rule strictness
Tech Lead	Define quality standards
CI/CD	Block bad code
Organization	Reduce bugs & security risk
STEP 8: MODULE 3 COMPLETION CHECK

You can mark Module 3 Completed only if:

✅ You know what a rule is

✅ You understand severity

✅ You know what a Quality Gate does

✅ You have seen a FAILED gate

✅ You understand why it failed

🔜 Preview: Module 4

Developer superpower: catch issues while typing

Fewer CI failures

Faster development

Tool: SonarLint (connected mode)

```
