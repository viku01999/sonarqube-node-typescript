# 🧠 Module 1: Project Structure & Code Flow (Foundation)  

> Goal: Understand your Node.js + TypeScript project structure before running SonarQube. Identify core files, dependencies, and high-risk areas.

---

## ✅ Completion Checklist

- [ ] Can identify project entry points  
- [ ] Can map dependencies between files/modules  
- [ ] Can spot high-risk areas (mutable globals, large files, `any` types)  
- [ ] Can reason about maintainability issues before scanning  

---

## 📝 Reflective Writing

**Answer the following:**

1. **What are the entry points of your project?**  
   _Answer:_ `src/index.ts` is the main entry point. All routes are initialized here.

2. **Which files handle core logic vs helpers/services?**  
   _Answer:_  
   - `controllers/` → handle HTTP requests and validation  
   - `services/` → handle data storage and business logic  
   - `routes/` → define the API endpoints  

3. **Where do you see dependencies that could break easily if changed?**  
   _Answer:_  
   - `controllers` depend on `services`. Changing service logic could break multiple controllers.  
   - The duplicated `UserBody` type could create circular dependency if imported incorrectly.

4. **Which files are large or have multiple responsibilities?**  
   _Answer:_  
   - `userService.ts` manages both data storage and validation (could be split).  
   - `userController.ts` handles multiple endpoints and validation logic.

5. **Where are the high-risk areas in terms of bugs or maintainability?**  
   _Answer:_  
   - Mutable global array `users` in `userService.ts`  
   - Minimal input validation in `addUsersController`  
   - Use of `any` type in services  

---

## 🔍 Practical Exercise

1. **Draw a dependency map of your project:**
    - index.ts → routes/userRoutes.ts → controllers/userController.ts → services/userService.ts

2. **Mark high-risk areas:**
   - Mutable global state → `users` array  
   - Minimal validation → `addUsersController`  
   - `any` type → service function parameters  

3. **Identify files with multiple responsibilities:**  
   - `userController.ts` → multiple endpoints + validation  
   - `userService.ts` → handles data storage + business logic  

4. **SonarQube vs SonarLint**

```table
| Feature                | **SonarQube**                                                           | **SonarLint**                                            |
| ---------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------- |
| **Type**               | Server / Web-based                                                      | IDE plugin (VS Code, IntelliJ, etc.)                     |
| **Scope**              | Project-wide / Team-wide                                                | File / local code only                                   |
| **Real-time feedback** | ❌ (needs analysis)                                                      | ✅ while typing                                           |
| **Installation**       | Central server (can be local or cloud)                                  | Installed in your IDE                                    |
| **Purpose**            | Tracks code quality, technical debt, and security for the whole project | Gives immediate hints and warnings while you code        |
| **Reports**            | Full dashboards with metrics, historical trends, and Quality Gates      | Highlights issues in your editor; no historical tracking |
| **Collaboration**      | Team-oriented, integrates with CI/CD                                    | Individual-oriented, instant feedback                    |
```

---

## 👀 Observation Exercise

For each file, answer:

- Does it have too many responsibilities?  
  _Answer:_ Yes, `userService.ts` and `userController.ts`.  

- Does it use global state or `any` types?  
  _Answer:_ Yes, `users: UserBody[]` in `userService.ts` is mutable; `any` was used in earlier versions.  

- Could a small change break multiple areas?  
  _Answer:_ Yes, changes in `userService.ts` could break multiple controllers.

---

## 💡 SonarQube Tip

- Understanding your project structure helps you **focus on high-risk files first**.  
- Large or complex files → more code smells & technical debt in SonarQube.  
- Dependencies matter: **a small change in services could trigger multiple issues** in SonarQube.  

