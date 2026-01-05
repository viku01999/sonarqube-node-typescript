# 🧠 Module 0: Code Quality Mindset (Foundation)  

> Goal: Build the right thinking before using SonarQube. Focus on understanding static analysis, code quality, and technical debt in Node.js + TypeScript projects.

---

## ✅ Completion Checklist

- [ ] Can explain what static code analysis is  
- [ ] Can explain why code quality matters for Node.js + TypeScript  
- [ ] Can list bugs, vulnerabilities, code smells, technical debt  
- [ ] Can reason why fixing issues early is cheaper than later  

---

## 📝 Reflective Writing

**Answer the following:**

1. **What is static code analysis?**  
   _Your answer here..._
   Static code analysis is the automated examination of source code without running the program. It detects bugs, security vulnerabilities, and code smells early in the development process, helping developers maintain high-quality, maintainable code.

2. **Why does Node.js need static analysis even with TypeScript?**  
   _Your answer here..._
   TypeScript adds type safety, but it cannot catch all runtime issues like logical errors, insecure code, performance pitfalls, or dependency vulnerabilities. Static analysis complements TypeScript by enforcing coding standards and security best practices.

3. **Why is fixing bugs early important?**  
   _Your answer here..._
   Bugs found during development are much cheaper and faster to fix than those found in production. Early fixes prevent downtime, reduce technical debt, and save time for future maintenance.

4. **What is technical debt and how does it affect future development?**  
   _Your answer here..._
   Technical debt is the accumulation of suboptimal code or shortcuts that make future changes more
   expensive or risky. If ignored, it slows development, increases bugs, and makes refactoring more
   difficult.

---

## 🔍 Probability Thinking Exercise

**Scenario:**  
You have 100 lines of Node.js code. On average, 1 bug exists per 10 lines.  

**Questions:**  

1. How many bugs do you expect in a 1,000-line project?  
   _Your reasoning here..._
   - Reasoning: 1 bug per 10 lines → 1000 ÷ 10 = 100 bugs expected.

2. How much time might fixing them after production cost vs during development?  
   _Your reasoning here..._
   - Reasoning: Fixing a bug during development might take 10–15 minutes, but in production it could take hours or days due to debugging, testing, and deployment. Early fixes drastically reduce time, cost, and impact on users.

---

## 👀 Observation Exercise

1. Open any Node.js + TypeScript project (even a small one).  
2. Identify **3 places where code might cause bugs or be hard to maintain**.  
   - Place 1: _Describe here..._  
   - Place 2: _Describe here..._  
   - Place 3: _Describe here..._  
   - `ANS.` I found that no try catch, duplicate, Not HTTP_STATUS_CODE, Hard to maintain etc.

> Note: Don’t fix them yet — just observe and reflect.

---

## 💡 Pro Tip

- Spend time **thinking and writing**, don’t rush.  
- Mindset first → tools like SonarQube second.
